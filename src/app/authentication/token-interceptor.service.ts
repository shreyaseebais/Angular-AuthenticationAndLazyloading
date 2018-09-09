import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHandler, HttpEvent, HttpRequest, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private injector : Injector
  ) { }

  intercept(
    req: HttpRequest<any>, 
    next:HttpHandler
  ):Observable<HttpEvent<any>>{
      let service = this.injector.get(AuthService);
      let tokenizedReq = req.clone({
        setHeaders:{
          'Content-Type': 'application/json',
          // 'Authorization':`Bearer ${service.getToken()}`
        }
      });
      return next.handle(tokenizedReq);
  }
}
