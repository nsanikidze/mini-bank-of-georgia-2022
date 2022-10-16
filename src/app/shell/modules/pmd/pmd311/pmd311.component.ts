import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../shared/validators';
import { AccountModel } from '../../krn/accounts/account.model';
import {PostsService} from '../../posts.service';
import {TransferModel} from './transfer.model';
import {Router} from '@angular/router';
import {ModulesService} from '../../modules.service';
import {Client} from '../../client.model';

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
  filteredReceiverAccounts: AccountModel[] = [];
  defaultText = 'აირჩიე';
  defaultValue = undefined;
  client: Client;

  constructor(private postsService: PostsService,
              private modulesService: ModulesService,
              private router: Router) { }

  ngOnInit(): void {
    this.client = JSON.parse(localStorage.getItem('clientData'));
    this.postsService.getClientAccountsPost(this.client.clientKey).subscribe( (data) => {
      this.senderAccounts = data;
    }, error => {
      console.log(error);
    });

    this.postsService.getClientsAccountsPost().subscribe( (data) => {
      this.receiverAccounts = data;
      this.filteredReceiverAccounts = data;
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

  onSenderChanged() {
    if (this.get('senderAccountKey').value ){
      this.filteredReceiverAccounts = this.receiverAccounts.filter( (e) => e.accountKey !== this.get('senderAccountKey').value);
    }
    if (this.get('senderAccountKey').value  === this.get('receiverAccountKey').value){
      console.log(this.get('receiverAccountKey').value);
      this.pmd311Form.get('receiverAccountKey').setValue(this.defaultValue);
    }
  }

  onChane(event){
    console.log(event);
  }


}
