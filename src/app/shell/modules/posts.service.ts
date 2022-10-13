import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Client} from './client.model';
import {LoaderService} from '../../shared/loader/loader.service';
import {Account} from './krn/accounts/account.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient,
              private loaderService: LoaderService) { }

  getClientsPost(name, lastName, clientKey) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('firstName', name);
    httpParams = httpParams.append('lastName', lastName);
    httpParams = httpParams.append('clientKey', clientKey);
    return this.http.get<Client[]>('clients', {params : httpParams, responseType: 'json'})
      .pipe(
        this.loaderService.useLoader,
        map((data) => {
          return data;
        }));
  }

  addClientPost(client) {
    return this.http.put<Client>('clients', client, {observe: 'response'}).pipe(this.loaderService.useLoader);
  }

  getAccountsPost(clientKey) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('clientKey', clientKey);
    console.log(httpParams);
    return this.http.get<Account[]>('accounts', {params : httpParams, responseType: 'json'})
      .pipe(
        this.loaderService.useLoader,
        map((data) => {
          console.log(data);
          return data;
        }));
  }

  addAccountPost(account) {
    return this.http.put<Account>('accounts', account, {observe: 'response'}).pipe(this.loaderService.useLoader);
  }

  deleteAccountPost(accountKey){
    let httpParams = new HttpParams();
    httpParams = httpParams.append('accountKey', accountKey);
    return this.http.delete('accounts', {params : httpParams}).pipe(this.loaderService.useLoader);
  }
}
