import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, LoadingController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
//import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import firebase from 'firebase';

/**
 * Generated class for the friendchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friendchat',
  templateUrl: 'friendchat.html',
})
export class friendchatPage {
  @ViewChild('content') content: Content;
  buddy: any;
  newmessage;
  allmessages = [];
  photoURL;
  //imgornot;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public chatservice: ChatProvider,
              public events: Events,
              public zone: NgZone,
              public loadingCtrl: LoadingController){
              //public imgstore: ImghandlerProvider) {

  this.buddy = this.chatservice.buddy;
  this.photoURL = firebase.auth().currentUser.photoURL;
  this.scrollto();
  this.events.subscribe('newmessage', () => {
  this.allmessages = [];
  this.zone.run(() => {
    this.allmessages = this.chatservice.buddymessages;
  })
})
}

addmessage(){
    this.chatservice.addnewmessage(this.newmessage).then(() => {
      this.content.scrollToBottom();
      this.newmessage = '';
    })
  }

ionViewDidEnter() {
    this.chatservice.getfriendmessages();
}
 
scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
}

}
