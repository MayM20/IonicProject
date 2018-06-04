//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { connreq } from '../../models/interfaces/request';
import { UserProvider } from '../user/user';
import firebase from 'firebase';
import { PICKER_OPT_SELECTED } from 'ionic-angular/components/picker/picker-options';

/*
  Generated class for the RequestsProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RequestsProvider {
  firereq = firebase.database().ref('/requests');
  userdetails;
  constructor(public userservice: UserProvider, 
              public events: Events) {
    
  }

  //'set' was added, next to push to resolve PromiseLike
  //'var' was changed to 'let' instead
  sendrequest(req: connreq) {
    let promise = new Promise((resolve, reject) => {
      this.firereq.child(req.recipient).push().set(
        {sender: req.sender}
      ).then(() => {
        resolve({ success: true })
        }).catch((err) => {
          resolve(err);
          //should i change resolve to 'reject' instead? not sure though
    })
    })
    return promise;  
  }

  getmyrequests() {
    let allmyrequests;
    var myrequests = [];
    this.firereq.child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
      allmyrequests = snapshot.val();
      myrequests = [];
      for (var i in allmyrequests) {
        myrequests.push(allmyrequests[i].sender);
      }
      this.userservice.getallusers().then((res) => {
        var allusers = res;
        this.userdetails = [];
        for (var j in myrequests)
          for (var key in allusers) {
            if (myrequests[j] === allusers[key].uid) {
              this.userdetails.push(allusers[key]);
            }
          }
        this.events.publish('gotrequests');
      })

  })
}  


}
