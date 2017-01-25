import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProviderPage } from '../pages/provider/provider';
import { StamplayService } from '../providers/stamplay-service';
import { FirebaseService } from '../providers/firebase-service';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'

const myFirebaseConfig = {
    apiKey: "AIzaSyCvT3nCtlp_488M7-zPEW759L1u_EqO44M",
    authDomain: "tupedido-f244b.firebaseapp.com",
    databaseURL: "https://tupedido-f244b.firebaseio.com",
    storageBucket: "tupedido-f244b.appspot.com",
    messagingSenderId: "18899623424"
};


const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ProviderPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ProviderPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, StamplayService, FirebaseService]
})
export class AppModule {}
