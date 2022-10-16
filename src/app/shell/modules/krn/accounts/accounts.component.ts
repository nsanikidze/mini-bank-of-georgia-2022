import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { AccountModel } from './account.model';
import {ModulesService} from '../../modules.service';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts: AccountModel[] = [];

  constructor(private router: Router,
              private postsService: PostsService,
              private modulesService: ModulesService) { }

  ngOnInit(): void {
    console.log('reload');
    this.fetchAccounts();
  }

  fetchAccounts(){
    const client = JSON.parse(localStorage.getItem('clientData'));
    this.postsService.getClientAccountsPost(client.clientKey).subscribe( (data) => {
      this.accounts = data;
    }, error => {
      console.log(error);
    });

  }

  onAddAccount(){
    this.router.navigate(['/krn/createAccount']);
  }

  onDeleteAccount(accountKey){
    this.postsService.deleteAccountPost(accountKey).subscribe(() => {
      this.modulesService.reloadClientData();
      this.fetchAccounts();
    });
  }

}
