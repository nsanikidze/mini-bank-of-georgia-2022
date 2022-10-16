import {AfterContentChecked, Component, } from '@angular/core';
import {PostsService} from '../modules/posts.service';
import {Client} from '../modules/client.model';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements  AfterContentChecked {

  client: Client;

  constructor(private router: Router,
              private postsService: PostsService) { }


  ngAfterContentChecked(): void {
    this.client = JSON.parse(localStorage.getItem('clientData'));
  }

  onLogout(){
    localStorage.removeItem('clientData');
    this.router.navigate(['/bpm']);
  }

  getColor() {
    return this.client.sumAmount >  0 ? '#4CD04F' : 'transparent';
  }

}
