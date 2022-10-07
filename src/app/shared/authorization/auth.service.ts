import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../loader/loader.service';
import {AuthResponseModel} from './auth-response.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from './user.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient,
              private loaderService: LoaderService) { }

  register(name, username, password){
    return this.http
      .post<AuthResponseModel>('register', {
        name,
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
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
        tap((userData) =>  this.handleAuth(userData))
      );
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
  };
}
