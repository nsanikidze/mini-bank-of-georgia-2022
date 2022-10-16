import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../../posts.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../../shared/validators';
import {AccountsComponent} from '../accounts.component';
import {KrnicpComponent} from '../../krnicp/krnicp.component';
import {take} from 'rxjs/operators';
import {Client} from '../../../client.model';
import {ModulesService} from '../../../modules.service';
import {InputAccountMoldel} from '../input-account.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bg-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, OnDestroy {

  accountCreatorForm: FormGroup;
  account: InputAccountMoldel;
  subscription: Subscription;

  constructor(private postsService: PostsService,
              private router: Router,
              private modulesService: ModulesService) { }

  ngOnInit(): void {
    this.accountCreatorForm = new FormGroup({
      accountName: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
      amount: new FormControl(undefined, [BgValidators.required,
        BgValidators.min(0)])
    });
  }

  OnAddAccount(){
    if (this.accountCreatorForm.invalid){
      return;
    }
    const savedClientKey = JSON.parse(localStorage.getItem('clientData')).clientKey;
    this.account = {
      clientKey: savedClientKey,
      accountName: this.get('accountName').value,
      amount: this.get('amount').value
    };
    this.subscription = this.postsService.createAccountPost(this.account).subscribe( () => {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
