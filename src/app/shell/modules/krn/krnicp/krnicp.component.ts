import {AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../client.model';
import {PostsService} from '../../posts.service';

@Component({
  selector: 'bg-krnicp',
  templateUrl: './krnicp.component.html',
  styleUrls: ['./krnicp.component.scss']
})
export class KrnicpComponent implements OnInit {

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
/*
  loadClient() {
      console.log(5);
      this.client = undefined;
      const clientKey = JSON.parse(localStorage.getItem('clientKey'));
      this.postsService.getClientPost(clientKey).subscribe( (data) => {
        this.client = data[0];
      }, error => {
        console.log(error);
      });
  }

 */
}
