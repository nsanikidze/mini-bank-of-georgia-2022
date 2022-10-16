import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {Client} from './client.model';
import {LoaderService} from '../../shared/loader/loader.service';
import { AccountModel} from './krn/accounts/account.model';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient,
              private loaderService: LoaderService) { }



  fetchClientsPost(name, lastName, clientKey) {

    let httpParams = new HttpParams();
    httpParams = httpParams.append('firstName', name);
    httpParams = httpParams.append('lastName', lastName);
    httpParams = httpParams.append('clientKey', clientKey);

    return this.http.get<Client[]>('clients', {params : httpParams, responseType: 'json'})
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        map((data) => {
          return data;
        }));
  }



  fetchClientPost(clientKey) {

    let httpParams = new HttpParams();
    httpParams = httpParams.append('firstName', '');
    httpParams = httpParams.append('lastName', '');
    httpParams = httpParams.append('clientKey', clientKey);

    return this.http.get<Client>('clients', {params : httpParams, responseType: 'json'})
      .pipe(
        take(1),
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        map((data) => {
          return data;
        }));
  }


  createClientPost(client) {
    return this.http.put<Client>('clients', client, {observe: 'response'})
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error))
        );
  }


  getClientAccountsPost(clientKey) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('clientKey', clientKey);

    return this.http.get<AccountModel[]>('accounts', {params : httpParams, responseType: 'json'})
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        map((data) => {
          return data;
        }));
  }

  getClientsAccountsPost() {
    return this.http.get<AccountModel[]>('accounts', { responseType: 'json'})
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        map((data) => {
          return data;
        }));
  }


  createAccountPost(account) {
    return this.http.put<Account>('accounts', account, {observe: 'response'})
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)));
  }


  deleteAccountPost(accountKey){
    let httpParams = new HttpParams();
    httpParams = httpParams.append('accountKey', accountKey);

    return this.http.delete('accounts', {params : httpParams})
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)));
  }


  transferPost(transferModel) {
    return this.http.post('transfer', transferModel)
      .pipe(this.loaderService.useLoader,
            catchError((err) => throwError(err.error)));
  }
}
