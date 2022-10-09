import {Component, Input, OnInit} from '@angular/core';
import {ShellComponent} from '../shell.component';
import {AuthService} from '../../shared/authorization/auth.service';
import {AuthResponseModel} from '../../shared/authorization/auth-response.model';

@Component({
  selector: 'bg-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent implements OnInit {

  constructor(private shell: ShellComponent,
              private auth: AuthService) { }

  ngOnInit(): void {

  }

  logout(){
    this.shell.isUserLoggedIn = false;
    this.auth.logout();
  }


}
