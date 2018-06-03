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
    displayName: ''
  }
/*old code
  username: string;
  password: string;
  re_password:string;*/

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userservice: UserProvider,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signup(){
    /*old code
    if(this.username.length== 0 || this.password.length== 0 || this.re_password.length== 0 ){
      alert("Please fill all fields");
    }*/
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
      toaster.setMessage('All fields are required dude');
      toaster.present();
    }
    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
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


