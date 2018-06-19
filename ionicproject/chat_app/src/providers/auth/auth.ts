//import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercreds';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import * as firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public data: any;
  public fireAuth: any;
  public userProfile: any;
  
constructor(public afireauth: AngularFireAuth) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }
 
//to login specific user, called from the login.ts  
login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       });
    });
    return promise;
  }

  signOut(): Promise<void> {
    return this.afireauth.auth.signOut();
  }

}
