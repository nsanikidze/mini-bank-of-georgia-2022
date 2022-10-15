import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {PostsService} from '../modules/posts.service';
import {Client} from '../modules/client.model';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit, AfterContentChecked{


  client: Client;

  constructor(private router: Router,
              private postsService: PostsService) { }


  ngOnInit(): void {
    const clientKey = JSON.parse(localStorage.getItem('clientKey'));
    this.postsService.getClientPost(clientKey).subscribe((data) => {
      this.client = data[0];
    }, error => {
      console.log(error);
    });
  }

  clientLogout(){
    localStorage.removeItem('clientKey');
    this.router.navigate(['/bpm']);
  }

  ngAfterContentChecked(): void {
    const clientKey = JSON.parse(localStorage.getItem('clientKey'));
    /*this.postsService.getClientPost(clientKey).subscribe((data) => {
      this.client = data[0];
    }, error => {
      console.log(error);
    });
    */

  }
}
