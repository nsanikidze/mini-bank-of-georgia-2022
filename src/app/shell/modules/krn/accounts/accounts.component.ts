import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Client} from '../../client.model';
import {PostsService} from '../../posts.service';
import {KrnicpComponent} from '../krnicp/krnicp.component';
import {KRNAccount} from './account.model';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts: KRNAccount[] = [];

  constructor(private router: Router,
              private postsService: PostsService) { }

  ngOnInit(): void {
    const clientKey = JSON.parse(localStorage.getItem('clientKey'));
    this.postsService.getAccountsPost(clientKey).subscribe( (data) => {
      this.accounts = data;
    }, error => {
      console.log(error);
    });
  }


  addAccount(){
    this.router.navigate(['/krn/createAccount']);
  }

  deleteAccount(accountKey){
    this.postsService.deleteAccountPost(accountKey).subscribe();
  }

}
