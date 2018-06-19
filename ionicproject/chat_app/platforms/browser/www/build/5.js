webpackJsonp([5],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, requestservice, chatservice, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestservice = requestservice;
        this.chatservice = chatservice;
        this.events = events;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestservice.getmyrequests();
        this.requestservice.getmyfriends();
        this.myfriends = [];
        this.events.subscribe('gotrequests', function () {
            _this.myrequests = [];
            _this.myrequests = _this.requestservice.userdetails;
        });
        this.events.subscribe('friends', function () {
            _this.myfriends = [];
            _this.myfriends = _this.requestservice.myfriends;
        });
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe('gotrequests');
        this.events.unsubscribe('friends');
    };
    HomePage.prototype.addfriend = function () {
        this.navCtrl.push('friendsPage');
    };
    HomePage.prototype.accept = function (item) {
        var _this = this;
        this.requestservice.acceptrequest(item).then(function () {
            var newalert = _this.alertCtrl.create({
                title: 'Friend added',
                subTitle: 'Tap on the friend to chat with him',
                buttons: ['Okay']
            });
            newalert.present();
        });
    };
    HomePage.prototype.ignore = function (item) {
        this.requestservice.deleterequest(item).then(function () {
            alert('Request ignored');
        }).catch(function (err) {
            alert(err);
        });
    };
    HomePage.prototype.friendchat = function (buddy) {
        this.chatservice.initializebuddy(buddy);
        this.navCtrl.push('friendchatPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Home</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="addfriend()">\n            <ion-icon name="person-add"></ion-icon>\n          </button>\n        </ion-buttons> \n    </ion-navbar>\n  \n  </ion-header>\n\n  <ion-content padding>\n      <ion-list no-lines>\n        <ion-list-header>\n          Requests\n        </ion-list-header>\n        <ion-item-sliding *ngFor="let item of myrequests">\n          <ion-item>\n          <ion-avatar item-left>\n            <img src="{{item.photoURL}}">\n          </ion-avatar>\n          <h4>{{item.displayName}}</h4>\n          </ion-item>\n          <ion-item-options>\n            <button ion-button color="secondary" (click)="accept(item)">\n              <ion-icon name="checkmark"></ion-icon>\n              ADD\n            </button>\n            <button ion-button color="danger" (click)="ignore(item)">\n              <ion-icon name="trash"></ion-icon>\n              DECLINE\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      <!--new added-->\n      <ion-list-header>\n      Friends\n  </ion-list-header>\n  <ion-item *ngFor="let item of myfriends" (click)="friendchat(item)">\n    <ion-avatar item-left>\n      <img src={{item.photoURL}}>\n    </ion-avatar>\n    <h3>{{item.displayName}}</h3>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map