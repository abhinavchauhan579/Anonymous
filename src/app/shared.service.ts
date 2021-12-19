import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiURL = "http://localhost:51005/api";

  public loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  getUserInfo():Observable<any[]>{
    return this.http.get<any>(this.apiURL+'/Users');
  }
}
