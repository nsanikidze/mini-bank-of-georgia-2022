import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../shared/authorization/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthResponseModel} from '../shared/authorization/auth-response.model';
import {User} from '../shared/authorization/user.model';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {

  error;
  userData: User;
  isUserLoggedIn: boolean;
  userSubscription: Subscription;

  get curDate() {
    const d = new Date();
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`;
  }

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.auth.autoLogin();
    this.userSubscription = this.auth.user.subscribe( (user) => {
      this.userData = user;
      this.isUserLoggedIn = true;
    });

    if (!this.isUserLoggedIn){
      this.router.navigate(['/auth']);
    }
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }



}
