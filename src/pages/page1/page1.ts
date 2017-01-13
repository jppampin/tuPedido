import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StamplayService } from '../../providers/stamplay-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, private service: StamplayService) {
    service.getAll()
      .subscribe(users => console.log(users));
  }

}
