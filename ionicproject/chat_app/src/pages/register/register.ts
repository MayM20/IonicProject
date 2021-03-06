import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  newuser = {
    email: '',
    password: '',
    displayName: '',
    displayCountry: ''//new
  }
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userservice: UserProvider,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
/*
Sign up function does: 

1-Perform basic validation.
2-Call the 'adduser' method in the userservice to add a new user.

*/
  signup(){
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
      toaster.setMessage('Please fill all the required fields');
      toaster.present();
    }
    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Sorry but password must contain more than six characters');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'//loading controller provides loading animation while the rest call is made
      });
      loader.present();
      this.userservice.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.success)
          this.navCtrl.push('ProfilepicPage');
        else
          alert('Error' + res);
      })
    }
  }  
 
  goback() {
    this.navCtrl.setRoot('LoginPage');
  }
  }


