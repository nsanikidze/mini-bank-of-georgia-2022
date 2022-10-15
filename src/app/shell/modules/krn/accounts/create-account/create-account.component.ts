import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../posts.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../../shared/validators';
import {AccountsComponent} from '../accounts.component';
import {KrnicpComponent} from '../../krnicp/krnicp.component';
import {take} from 'rxjs/operators';
import {Client} from '../../../client.model';
import {ModulesService} from '../../../modules.service';

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
  client: Client;

  constructor(private postsService: PostsService,
              private router: Router,
              private modulesService: ModulesService) { }

  ngOnInit(): void {
    this.accountCreatorForm = new FormGroup({
      accountName: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
      amount: new FormControl(undefined, [BgValidators.min(0)])
    });
  }

  OnSubmitForm(){
    if (this.accountCreatorForm.invalid){
      return;
    }
    const inputClient = JSON.parse(localStorage.getItem('clientData'));
    this.account = {
      clientKey: inputClient.clientKey,
      accountName: this.get('accountName').value,
      amount: this.get('amount').value
    };
    this.postsService.addAccountPost(this.account).subscribe( () => {
      this.modulesService.reloadClientData();
      this.router.navigate(['/krn/accounts']);
      }
    );



  }

  get(controlName){
    return this.accountCreatorForm.get(controlName);
  }

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }


}
