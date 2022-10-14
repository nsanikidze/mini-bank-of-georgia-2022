import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'bg-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit{

  clientKey: number;

  constructor() { }

  ngOnInit(): void {
    this.clientKey = JSON.parse(localStorage.getItem('clientKey'));
  }



}
