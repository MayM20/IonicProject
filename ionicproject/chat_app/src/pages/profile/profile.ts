import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';
import firebase from 'firebase';
//import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage{
  avatar: string;
  displayName: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userservice: UserProvider,
              public zone: NgZone,
              public alertCtrl: AlertController,
              public auth: AuthProvider,
              public imghandler: ImghandlerProvider) {

  }
  ionViewWillEnter(){
    this.loaduserdetails();//whenever the user enters this tab, load user details
  }
  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  editimage() {
    //editing image not working because native plugings are being accesed in the browser
    //In order to make plugins work, need to use a real device to test.

    //To make the code testable in browser, use if-statement checking
    //if Cordova is available

    //if (this.platform.is('cordova')) {
      // You're on a device, call the native plugins. Example: 
      //
      // var url: string = '';
      // 
      // Camera.getPicture().then((fileUri) => url = fileUri);
    //} else {
      // You're testing in browser, do nothing or mock the plugins' behaviour.
      //
      // var url: string = 'assets/mock-images/image.jpg';
    //}
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully!!');
          statusalert.present();
          this.zone.run(() => {
          this.avatar = url;
        })  
        }  
      }).catch((err) => {
          statusalert.setTitle('Failed');
          statusalert.setSubTitle('Your profile pic was not changed');
          statusalert.present();
      })
      })
  }
  //update display name
  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Nickname',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
 
        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {
            this.userservice.updatedisplayname(data.nickname).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your nickname has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.nickname;
                })
              }
 
              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your nickname was not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
  }

  /*logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    })
  }*/

  signOut(){
    this.auth.signOut();
    this.navCtrl.parent.parent.setRoot('LoginPage');
  }

}