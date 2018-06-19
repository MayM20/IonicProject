import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the ProfilepicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilepic',
  templateUrl: 'profilepic.html',
})
export class ProfilepicPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/chatappia.appspot.com/o/user-profile.png?alt=media&token=0b1b13cb-8f89-4905-9b57-029a349d53f6';
  moveon = true; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public imgservice: ImghandlerProvider,
              public zone: NgZone,
              public userservice: UserProvider,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  }
/*
Choosing profile picture steps:
1-Choose a picture from the file system using cordova-file-chooser plugin.
2-Resolve native path of that file using cordova-filepath plugin
3-Store it as a blob in firebase-storage
4-Then, the download url of the stored file will be got to show the image on the app
 */
  chooseimage() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      loader.dismiss();
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
  }
 
  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.userservice.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if (res.success) {
        this.navCtrl.setRoot('TabsPage');
      }
      else {
        alert(res);
      }
    })
  }
 
  proceed() {
    this.navCtrl.setRoot('TabsPage');
  }

}
