import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from '../../providers/auth/auth';

import * as firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;

  constructor(public navCtrl: NavController, 
              public authservice: AuthProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//calling login function present in the auth provider and passing on the entered email and password to it
  signin() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot('TabsPage');
      else
        alert(res);
    })
  }
   
  signup() {
    this.navCtrl.push('RegisterPage');
  }

}
