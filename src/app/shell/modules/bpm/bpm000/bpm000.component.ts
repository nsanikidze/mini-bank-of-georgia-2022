import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BpmClient} from '../bpm.model';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {

  clientSearchForm: FormGroup;
  clients: { name: string; lastName: string; clientKey: number}[] = [];
  isSearchActive = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.clientSearchForm = new FormGroup({
      name: new FormControl(undefined),
      lastName: new FormControl(undefined),
      clientKey: new FormControl(undefined)
    });



  }

  searchClient(){
    this.isSearchActive = true;
    const name = this.get('name').value;
    const lastName = this.get('lastName').value;
    const clientKey = this.get('clientKey').value;

    this.clients.push({name, lastName, clientKey});
    this.clients.push({name, lastName, clientKey});
    this.clients.push({name, lastName, clientKey});

    console.log(name + lastName + clientKey);

  }

  get(controlName){
    return this.clientSearchForm.get(controlName);
  }

  addClient(){
    this.router.navigate(['/bpm001']);
  }

  moveClient(value){
    console.log(1);
  }
}
