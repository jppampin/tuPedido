import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StamplayService } from '../../providers/stamplay-service';
import { FirebaseService } from '../../providers/firebase-service';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, private service: StamplayService
              , private firebaseService: FirebaseService ) {
    service.getAll()
      .subscribe(users => console.log(users));

    firebaseService.login();
    firebaseService.getProviders().subscribe( result => console.log(result));
  }

}
