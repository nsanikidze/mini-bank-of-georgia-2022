import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../loader/loader.service';
import {AuthResponseModel} from './auth-response.model';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from './user.model';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  timer = 2000;

  user = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient,
              private loaderService: LoaderService,
              private router: Router) { }

  register(name, userName, password){
    return this.http
      .post<AuthResponseModel>('register', {
        name,
        username: userName,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((userData) =>  this.handleAuth(userData))
      );
  }

  login(username, password){
    return this.http
      .post<AuthResponseModel>('login', {
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((userData) =>  this.handleAuth(userData))
      );
  }

  logout() {
    this.user.next(undefined);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    localStorage.removeItem('clientData');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = undefined;
  }

  handleAuth = (resData: AuthResponseModel) => {
    const user = new User(
      resData.name,
      resData.username,
      resData.image,
      resData.token,
      new Date(resData.expirationDate)
    );
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const responseData = JSON.parse(localStorage.getItem('userData'));


    if (!responseData){
      return;
    }
    const user = new User(
    responseData.name,
    responseData.username,
    responseData.image,
    responseData._token,
      new Date(responseData._expirationDate)
    );

    if (!responseData._token){
      return;
    }
    this.user.next(user);
  }

}
