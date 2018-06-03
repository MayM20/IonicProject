//import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercreds';
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

  /*old
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }*/
constructor(public afireauth: AngularFireAuth) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }
 
/*
    For logging in a particular user. Called from the login.ts file.
  
*/  
  
login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       })
    })
 
    return promise;
    
  }

}
