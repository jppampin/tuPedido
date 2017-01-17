import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Provider } from '../app/model/Provider';



/*
  Generated class for the FirebaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseService {
  providers: FirebaseListObservable<Provider[]>;

  constructor(public http: Http, private af: AngularFire ) {
    console.log('Hello FirebaseService Provider');
  }

  login() {
    this.af.auth.login()
      .then( state => console.log(state));
  }

  getProviders(): FirebaseListObservable<Provider[]> {
    return this.af.database.list('/providers');
  }

}
