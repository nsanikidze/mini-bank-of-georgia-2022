import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BpmClient} from '../bpm.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PostsService} from '../../posts.service';
import {Client} from '../../client.model';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {

  clientSearchForm: FormGroup;
  clients: Client[] = [];
  isSearchActive = false;

  constructor(private router: Router,
              private postsService: PostsService) { }

  ngOnInit(): void {
    this.clientSearchForm = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      clientKey: new FormControl('')
    });



  }

  searchClient(){
    this.isSearchActive = true;
    const name = this.get('name').value;
    const lastName = this.get('lastName').value;
    const clientKey = this.get('clientKey').value;
    this.postsService.getClietsPost(name, lastName, clientKey).subscribe( (data) => {
      this.clients = data;
    }, error => {
      console.log(error);
    });
  }

  get(controlName){
    return this.clientSearchForm.get(controlName);
  }

  addClient(){
    this.router.navigate(['/bpm/bpm001']);
  }

  moveClient(client: Client){
    //this.router.navigate(['/krnicp'], {queryParams: client});
    this.router.navigate(['/krnicp']);
    localStorage.setItem('clientData', JSON.stringify(client));
  }
}
