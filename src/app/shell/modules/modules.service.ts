import { Injectable } from '@angular/core';
import {PostsService} from './posts.service';
import {Client} from './client.model';
import {AccountModel} from './krn/accounts/account.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModulesService{

  accounts: AccountModel[] = [];

  constructor(private postsService: PostsService,
              private router: Router) { }

  reloadClientData(){
      const client = JSON.parse(localStorage.getItem('clientData'));
      this.postsService.fetchClientPost(client.clientKey).subscribe((clientData) => {
        localStorage.setItem('clientData', JSON.stringify(clientData[0]));
      }, error => {
        console.log(error);
      });
  }

  loadAccountsData(path): AccountModel[] {
    const client = JSON.parse(localStorage.getItem('clientData'));
    this.postsService.getClientAccountsPost(client.clientKey).subscribe( (data: AccountModel[]) => {
            this.accounts = data;
            this.router.navigate([path]);
          }, error => {
            console.log(error);
            return;
          });
    return this.accounts;
  }
}
