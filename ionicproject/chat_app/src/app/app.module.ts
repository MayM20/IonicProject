import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';
import { config } from './app.firebaseconfig';
import { AngularFireModule } from 'angularfire2';//new

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';//new
//import { AngularFireDatabaseModule } from 'angularfire2/database';//new
//import { AngularFireDatabase } from 'angularfire2/database';//new
import { AuthProvider } from '../providers/auth/auth';//new
import { UserProvider } from '../providers/user/user';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

//import { firebaseConfig } from '../config';//old 

//import { ProfilePage } from '../pages/profile/profile';
//import { ContactsPage } from '../pages/contacts/contacts';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { RequestsProvider } from '../providers/requests/requests';




@NgModule({
  declarations: [
    MyApp,
    //ProfilePage,
    //ContactsPage,
    //HomePage,
    LoginPage,
    //RegisterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    //AngularFireDatabase,
    //AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',})
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //ProfilePage,
    //ContactsPage,
    //HomePage,
    LoginPage,
    //RegisterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    //AngularFireDatabase,
    //AngularFireDatabaseModule,
    AuthProvider,
    File, //new but seems not be reading
    FileChooser,//new. It is use to choose a file from the phonefile system
    FilePath,//new
    UserProvider,
    ImghandlerProvider,
    RequestsProvider
  ]
})
export class AppModule {}
