import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/authorization/user.model';

@Component({
  selector: 'bg-shell-sidebar',
  templateUrl: './shell-sidebar.component.html',
  styleUrls: ['./shell-sidebar.component.scss']
})
export class ShellSidebarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
