import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moveAddAcount(){
    this.router.navigate(['/addAccount'])
  }

}
