import { Injectable } from '@angular/core';
import {PostsService} from './posts.service';
import {Client} from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ModulesService{


  constructor(private postsService: PostsService) { }

  reloadClientData(){
      const client = JSON.parse(localStorage.getItem('clientData'));
      this.postsService.getClientPost(client.clientKey).subscribe((clientData) => {
        localStorage.setItem('clientData', JSON.stringify(clientData[0]));
      }, error => {
        console.log(error);
      });
  }
}
