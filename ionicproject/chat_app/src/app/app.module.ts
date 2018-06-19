import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';
import { config } from './app.firebaseconfig';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';//-> with this plugin we can choose a file from the phone's filesystem
import { FilePath } from '@ionic-native/file-path';//-> with this plugin we resolve the native path of the file, this is then fed into a reader
                                                  //when the reader is finished being read, a blob is created
                                                  //the blob is going to be saved in the storage of firebase
                                                  //after being successfully stored, the download url of that file is got using
                                                  //getDownloadURL() and then sent to the calling statement in the profilepic.ts 
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
    FilePath,
    UserProvider,
    ImghandlerProvider,
    RequestsProvider,
    ChatProvider
  ]
})
export class AppModule {}
