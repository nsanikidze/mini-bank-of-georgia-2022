import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../shared/validators';
import {KRNAccount} from '../../krn/accounts/account.model';
import {PostsService} from '../../posts.service';
import {TransferModel} from './transfer.model';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-pmd311',
  templateUrl: './pmd311.component.html',
  styleUrls: ['./pmd311.component.scss']
})
export class Pmd311Component implements OnInit {

  error;
  transferModel: TransferModel;
  pmd311Form: FormGroup;
  senderAccounts: KRNAccount[] = [];
  receiverAccounts: KRNAccount[] = [];
  defaultText = 'აირჩიე';
  defaultValue = undefined;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    const clientKey = JSON.parse(localStorage.getItem('clientKey'));
    this.postsService.getAccountsPost(clientKey).subscribe( (data) => {
      this.senderAccounts = data;
      this.receiverAccounts = data;
      console.log(data);
    }, error => {
      console.log(error);
    });

    this.pmd311Form = new FormGroup({
      senderAccountKey: new FormControl(this.defaultValue, [BgValidators.required]),
      receiverAccountKey: new FormControl(this.defaultValue, [BgValidators.required]),
      amount: new FormControl(undefined, [BgValidators.min(0)])
    });
  }

  get(controlName){
    return this.pmd311Form.get(controlName);
  }

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

  transfer(){
    console.log(this.get('senderAccountKey').value);
    this.transferModel = {
      senderAccountKey: this.get('senderAccountKey').value,
      receiverAccountKey: this.get('receiverAccountKey').value,
      amount: this.get('amount').value
    };

    console.log(this.transferModel);
    this.postsService.transferPost(this.transferModel).subscribe( response => {
      console.log(response);
      this.router.navigate(['/krnicp/accounts']);
    }, error => {
      this.error = error;
    });

  }

}
