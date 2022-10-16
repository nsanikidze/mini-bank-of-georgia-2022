import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BpmClient} from '../bpm.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PostsService} from '../../posts.service';
import {Client} from '../../client.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit, OnDestroy{

  clients: Client[] = [];
  isSearchActive = false;
  clientSearchForm: FormGroup;
  subscription: Subscription;

  constructor(private router: Router,
              private postsService: PostsService) { }

  ngOnInit(): void {
    this.clientSearchForm = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      clientKey: new FormControl('')
    });
  }

  onClientSearch(){
    this.isSearchActive = true;

    const name = this.get('name').value;
    const lastName = this.get('lastName').value;
    const clientKey = this.get('clientKey').value;

    this.subscription = this.postsService.fetchClientsPost(name, lastName, clientKey).subscribe( (data) => {
      this.clients = data;
    }, error => {
      console.log(error);
    });
  }


  onAddClient(){
    this.router.navigate(['/bpm/bpm001']);
  }


  onGetClient(client: Client){
    localStorage.setItem('clientData', JSON.stringify(client));
    this.router.navigate(['/krn']);
  }

  get(controlName){
    return this.clientSearchForm.get(controlName);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
