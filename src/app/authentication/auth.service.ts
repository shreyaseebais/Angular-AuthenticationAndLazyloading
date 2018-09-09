import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = environment.backendUrl;

  constructor(
    private http : HttpClient
  ) { }

  login():Observable<any>{
    let loginObj = {
      user:'admin',
      pass:'admin'
    }
    return this.http.post<any>(
      this.url + '/login',
      loginObj
    );
  }
  getToken(){
    console.log('inside get token');
    return sessionStorage.getItem('token');
  }
}
