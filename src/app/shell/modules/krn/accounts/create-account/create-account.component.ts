import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../posts.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../../shared/validators';
import {AccountsComponent} from '../accounts.component';

@Component({
  selector: 'bg-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  accountCreatorForm: FormGroup;
  account: {
    clientKey: string,
    accountName: string,
    amount: number
  };

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.accountCreatorForm = new FormGroup({
      accountName: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
      amount: new FormControl(undefined, [BgValidators.min(0)])
    });
  }

  OnSubmitForm(clientKey){
    console.log(this.accountCreatorForm.value);
    if (this.accountCreatorForm.invalid){
      return;
    }

    const clientData = JSON.parse(localStorage.getItem('clientData'));
    this.account = {
      clientKey: clientData.clientKey,
      accountName: this.get('accountName').value,
      amount: this.get('amount').value
    };


    this.postsService.addAccountPost(this.account).subscribe();

    
    const accountsComponent = new AccountsComponent(this.router, this.postsService);
    this.router.navigate(['/krnicp/accounts']);
    accountsComponent.loadAccount(clientKey);

  }

  get(controlName){
    return this.accountCreatorForm.get(controlName);
  }

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

  moveAccount(){
    this.router.navigate(['/accounts']);
  }
}
