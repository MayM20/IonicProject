webpackJsonp([3],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, userservice, zone, alertCtrl, auth, imghandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.imghandler = imghandler;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.loaduserdetails(); //whenever the user enters this tab, load user details
    };
    ProfilePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.getuserdetails().then(function (res) {
            _this.displayName = res.displayName;
            _this.zone.run(function () {
                _this.avatar = res.photoURL;
            });
        });
    };
    ProfilePage.prototype.editimage = function () {
        //editing image not working because native plugings are being accesed in the browser
        //In order to make plugins work, need to use a real device to test.
        var _this = this;
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
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        this.imghandler.uploadimage().then(function (url) {
            _this.userservice.updateimage(url).then(function (res) {
                if (res.success) {
                    statusalert.setTitle('Updated');
                    statusalert.setSubTitle('Your profile pic has been changed successfully!!');
                    statusalert.present();
                    _this.zone.run(function () {
                        _this.avatar = url;
                    });
                }
            }).catch(function (err) {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your profile pic was not changed');
                statusalert.present();
            });
        });
    };
    //alert with input field and buttons, handler method updates the user profile based on uid
    ProfilePage.prototype.editname = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Nickname',
            inputs: [{
                    name: 'nickname',
                    placeholder: 'Nickname'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        if (data.nickname) {
                            _this.userservice.updatedisplayname(data.nickname).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your nickname has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.displayName = data.nickname;
                                    });
                                }
                                else {
                                    statusalert.setTitle('Failed');
                                    statusalert.setSubTitle('Your nickname was not changed');
                                    statusalert.present();
                                }
                            });
                        }
                    }
                }]
        });
        alert.present();
    };
    ProfilePage.prototype.signOut = function () {
        this.auth.signOut();
        this.navCtrl.parent.parent.setRoot('LoginPage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Profile</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content>\n<div class="profile-image" (click)="editimage()">\n    <img src="{{avatar}}">\n  </div>\n  <div>\n    <h2 (click)="editname()">{{displayName}}</h2>\n  </div>\n  <div>\n    Tap on your pic or nick name to change it.\n  </div>\n  <div class="spacer" style="height: 10px;"></div>\n  <div>\n    <button ion-button round outline color="danger" (click)="signOut()">Logout</button>\n  </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map