import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from 'angularfire2';//new
import { AngularFireAuth } from 'angularfire2/auth';//new
import { firebaseConfig } from '../config';//new
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { ContactsPage } from '../pages/contacts/contacts';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ContactsPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',//new
    }
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ContactsPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider
  ]
})
export class AppModule {}
