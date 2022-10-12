import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Client} from './client.model';
import {LoaderService} from '../../shared/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient,
              private loaderService: LoaderService) { }

  getClietsPost(name, lastName, clientKey) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('firtsName', name);
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
}
