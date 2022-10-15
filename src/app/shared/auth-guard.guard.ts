import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './authorization/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(1);

    console.log(localStorage.getItem('userData'));

    if (localStorage.getItem('userData')) {
      console.log(3);
      return true;
    } else {
      console.log(2);
      this.router.navigate(['/auth']);
    }
  }

}
