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
import { AuthProvider } from '../providers/auth/auth';//new
import { UserProvider } from '../providers/user/user';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { RequestsProvider } from '../providers/requests/requests';
import { ChatProvider } from '../providers/chat/chat';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      tabsHideOnSubpages: true,})
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
    File, //new but seems not be reading
    FileChooser,//new. It is use to choose a file from the phonefile system
    FilePath,//new
    UserProvider,
    ImghandlerProvider,
    RequestsProvider,
    ChatProvider
  ]
})
export class AppModule {}
