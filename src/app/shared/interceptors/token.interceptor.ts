import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    // const modified = request.clone({setHeaders: {'Custom-Header-2': '2'}});
    // return next.handle(modified);
  //  return next.handle(request);
  //if(!environment.production){
    const httpURL = request.url.replace('http','https');
     const dupReq = request.clone({ url:  httpURL});
     return next.handle(dupReq);
 // }
//  return next.handle(request);
  }
}
