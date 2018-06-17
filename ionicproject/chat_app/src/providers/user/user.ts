//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  firedata = firebase.database().ref('/chatusers');
  constructor(public afireauth:AngularFireAuth) {
  }

   /*

  'adduser' method does: 
  
  1-Add a new user to the system with createUserwithEmailAndPassword()
  2-Called from signup.ts
  3- The inputs are: new user object containing the email, password and displayName.
  4-Once the user is created, 'updateProfile' method is used to add the displayName for the user.
  5-User information is stored into chatusers collection.
 
   */
  
  adduser(newuser) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: newuser.displayName,
          photoURL: 'assets/imgs/user-profile.png'
          //displayCountry: newuser.displayCountry
        }).then(() => {
          this.firedata.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: newuser.displayName,
            photoURL: 'assets/imgs/user-profile.png'
            //displayCountry: newuser.displayCountry
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  /* 
 This works to update the users collection and the firebase users list with
  the imageurl of the profile picture stored in firebase storage.
  Called from - profilepic.ts 
  */
  updateimage(imageurl) {
    var promise = new Promise((resolve, reject) => {
        this.afireauth.auth.currentUser.updateProfile({
            displayName: this.afireauth.auth.currentUser.displayName,
            photoURL: imageurl      
        }).then(() => {
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
            displayName: this.afireauth.auth.currentUser.displayName,
            photoURL: imageurl,
            uid: firebase.auth().currentUser.uid
            }).then(() => {
                resolve({ success: true });
                }).catch((err) => {
                    reject(err);
                })
        }).catch((err) => {
              reject(err);
           })  
    })
    return promise;
}
getuserdetails() {
  var promise = new Promise((resolve, reject) => {
  this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}
//update the user profile based on uid
updatedisplayname(newname) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName: newname,
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.firedata.child(firebase.auth().currentUser.uid).update({
      displayName: newname,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

getallusers() {
  var promise = new Promise((resolve, reject) => {
    this.firedata.orderByChild('uid').once('value', (snapshot) => {
      let userdata = snapshot.val();
      let temparr = [];
      for (var key in userdata) {
        temparr.push(userdata[key]);
      }
      resolve(temparr);
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}

}
