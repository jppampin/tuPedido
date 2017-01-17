import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../app/model/User';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the StamplayService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StamplayService {
  url: string = 'https://tupedido.stamplayapp.com/api/user/v1/users';

  constructor(public http: Http) {
    console.log('Hello StamplayService Provider');
  }

  defaultHeaders(): any {
   const headers: Headers = new Headers();
   
   headers.append('Content-Type', 'application/json');
  //  headers.append('x-stamplay-jwt' ,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InR1cGVkaWRvIiwiYWRtaW4iOm51bGwsInR5cGUiOiJ1c2VyIiwidXNlciI6IjU4Nzg0NmFhODg0YjM3MjEwODg0YjQ2NSIsImFwcERvbWFpbiI6InR1cGVkaWRvLnN0YW1wbGF5YXBwLmNvbSIsImlhdCI6MTQ4NDI4NTY3NywiZXhwIjoxNDg0Mjg3NDc3LCJqdGkiOiJTbEJsRDFJOGwifQ.mC0814nTWXo95PnSzaEpiXPrS620WTMLsujHIle2ibY');
  //  headers.append( 'accept', 'application/json' );
  
   return { headers: headers };
  }

  getAll(): Observable<Array<User>>{
    return this.http.get(this.url, this.defaultHeaders()).map( res => res.json().data );
  }

  signup(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return this.http.post( this.url, body, this.defaultHeaders())
      .map(res => res.json().data );
  }
}
