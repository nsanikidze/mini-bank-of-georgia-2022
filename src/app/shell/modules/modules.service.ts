import { Injectable } from '@angular/core';
import {PostsService} from './posts.service';
import {Client} from './client.model';
import {AccountModel} from './krn/accounts/account.model';
import {Router} from '@angular/router';
import {LoaderService} from '../../shared/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class ModulesService{

  accounts: AccountModel[] = [];

  constructor(private postsService: PostsService,
              private router: Router,
              private loaderService: LoaderService) { }

  reloadClientData(){
      const client = JSON.parse(localStorage.getItem('clientData'));
      this.postsService.fetchClientPost(client.clientKey).subscribe((clientData) => {
        localStorage.setItem('clientData', JSON.stringify(clientData[0]));
      }, error => {
        console.log(error);
      });
  }

}
