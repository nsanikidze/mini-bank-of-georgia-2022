import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  error;

  constructor() { }

  ngOnInit(): void {
    console.log('auth');
  }

}
