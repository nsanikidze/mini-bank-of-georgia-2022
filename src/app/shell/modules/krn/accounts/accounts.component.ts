import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Client} from '../../client.model';
import {PostsService} from '../../posts.service';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private router: Router,
              private postsService: PostsService) { }

  ngOnInit(): void {
    const clientData = JSON.parse(localStorage.getItem('clientData'));
    this.loadAccount(clientData.clientKey);
    //აქ clientKey-ს გადმოცემა queryParams-ითაც ვიფიქრე , მაგრამ უნდა დამეჩეკა, გადმოცემული კლიენტი ემთხვევა თუ არა localStorage-ში არსებულ კლიენტს

  }

  loadAccount(clientKey){
    this.postsService.getAccountsPost(clientKey).subscribe( (data) => {
      this.accounts = data;
    }, error => {
      console.log(error);
    });
  }

  addAccount(){
    console.log(1);
    this.router.navigate(['/krnicp/createAccount']);
  }

  deleteAccount(accountKey){
    this.postsService.deleteAccountPost(accountKey).subscribe();
  }

}
