import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';//adding firebase
import { Observable } from 'rxjs';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //in the rootpage you can set whats the first page
  rootPage:any = 'LoginPage';
  //rootPage: string = 'tabs-page';

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              authProvider: AuthProvider,
              ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
