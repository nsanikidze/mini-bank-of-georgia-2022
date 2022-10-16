import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { AccountModel } from './account.model';
import {ModulesService} from '../../modules.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {

  accounts: AccountModel[] = [];
  ferchAcctSubscription: Subscription;
  deleteAcctSubscription: Subscription;

  constructor(private router: Router,
              private postsService: PostsService,
              private modulesService: ModulesService) { }

  ngOnInit(): void {
    console.log('reload');
    this.fetchAccounts();
  }

  fetchAccounts(){
    const client = JSON.parse(localStorage.getItem('clientData'));
    this.ferchAcctSubscription = this.postsService.getClientAccountsPost(client.clientKey).subscribe( (data) => {
      this.accounts = data;
    }, error => {
      console.log(error);
    });

  }

  onAddAccount(){
    this.router.navigate(['/krn/createAccount']);
  }

  onDeleteAccount(accountKey){
    this.deleteAcctSubscription = this.postsService.deleteAccountPost(accountKey).subscribe(() => {
      this.modulesService.reloadClientData();
      this.fetchAccounts();
    });
  }

  ngOnDestroy() {
    this.ferchAcctSubscription.unsubscribe();
    this.deleteAcctSubscription.unsubscribe();
  }

}
