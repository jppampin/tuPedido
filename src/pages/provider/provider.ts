import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Provider page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-provider',
  templateUrl: 'provider.html'
})
export class ProviderPage {
  private myInput: String = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderPage');
  }

  onInput($event: any) {
    const value: String = $event.target.value;
    console.log(value);
  }

  onCancel($event: any) {

  }

}
