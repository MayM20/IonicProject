import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { RequestsProvider } from '../../providers/requests/requests';
import { ChatProvider } from '../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myrequests;
  myfriends;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public requestservice: RequestsProvider,
              public chatservice: ChatProvider,
              public events: Events,
              public alertCtrl: AlertController) {

  }

  ionViewWillEnter() {
    this.requestservice.getmyrequests();
    this.requestservice.getmyfriends();
    this.myfriends = [];
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
    
    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends; 
    })
  }
 
  ionViewDidLeave() {
    this.events.unsubscribe('gotrequests');
    this.events.unsubscribe('friends');
  }
  addfriend() {
    this.navCtrl.push('friendsPage');
  }
  accept(item) {
    this.requestservice.acceptrequest(item).then(() => {

      let newalert = this.alertCtrl.create({
        title: 'Friend added',
        subTitle: 'Tap on the friend to chat with him',
        buttons: ['Okay']
      });
      newalert.present();
    })
  }

  ignore(item) {
    this.requestservice.deleterequest(item).then(() => {
       alert('Request ignored');
    }).catch((err) => {
      alert(err);
    })
  }
  friendchat(buddy) {
    this.chatservice.initializebuddy(buddy);
    this.navCtrl.push('friendchatPage');
  }

}
