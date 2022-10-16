import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../shared/validators';
import { AccountModel } from '../../krn/accounts/account.model';
import {PostsService} from '../../posts.service';
import {TransferModel} from './transfer.model';
import {Router} from '@angular/router';
import {ModulesService} from '../../modules.service';

@Component({
  selector: 'bg-pmd311',
  templateUrl: './pmd311.component.html',
  styleUrls: ['./pmd311.component.scss']
})
export class Pmd311Component implements OnInit {

  error;
  transferModel: TransferModel;
  pmd311Form: FormGroup;
  senderAccounts: AccountModel[] = [];
  receiverAccounts: AccountModel[] = [];
  defaultText = 'აირჩიე';
  defaultValue = undefined;

  constructor(private postsService: PostsService,
              private modulesService: ModulesService,
              private router: Router) { }

  ngOnInit(): void {
    const client = JSON.parse(localStorage.getItem('clientData'));
    this.postsService.getClientAccountsPost(client.clientKey).subscribe( (data) => {
      this.senderAccounts = data;
    }, error => {
      console.log(error);
    });
    this.postsService.getClientsAccountsPost().subscribe( (data) => {
      this.receiverAccounts = data;
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
    this.transferModel = {
      senderAccountKey: this.get('senderAccountKey').value,
      receiverAccountKey: this.get('receiverAccountKey').value,
      amount: this.get('amount').value
    };

    this.postsService.transferPost(this.transferModel).subscribe( response => {
      this.modulesService.reloadClientData();
      this.router.navigate(['/krn/accounts']);
    }, error => {
      this.error = error;
    });

  }

}
