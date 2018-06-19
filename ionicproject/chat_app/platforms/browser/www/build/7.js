webpackJsonp([7],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendchatPageModule", function() { return friendchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friendchat__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var friendchatPageModule = /** @class */ (function () {
    function friendchatPageModule() {
    }
    friendchatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__friendchat__["a" /* friendchatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friendchat__["a" /* friendchatPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__friendchat__["a" /* friendchatPage */]
            ]
        })
    ], friendchatPageModule);
    return friendchatPageModule;
}());

//# sourceMappingURL=friendchat.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return friendchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ImghandlerProvider } from '../../providers/imghandler/imghandler';

/**
 * Generated class for the friendchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var friendchatPage = /** @class */ (function () {
    //imgornot;
    function friendchatPage(navCtrl, navParams, chatservice, events, zone, loadingCtrl) {
        //public imgstore: ImghandlerProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatservice = chatservice;
        this.events = events;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.allmessages = [];
        this.buddy = this.chatservice.buddy;
        this.photoURL = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.photoURL;
        this.scrollto();
        this.events.subscribe('newmessage', function () {
            _this.allmessages = [];
            _this.zone.run(function () {
                _this.allmessages = _this.chatservice.buddymessages;
            });
        });
    }
    friendchatPage.prototype.addmessage = function () {
        var _this = this;
        this.chatservice.addnewmessage(this.newmessage).then(function () {
            _this.content.scrollToBottom();
            _this.newmessage = '';
        });
    };
    friendchatPage.prototype.ionViewDidEnter = function () {
        this.chatservice.getfriendmessages();
    };
    friendchatPage.prototype.scrollto = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], friendchatPage.prototype, "content", void 0);
    friendchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friendchat',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/friendchat/friendchat.html"*/'<!--\n  Generated template for the friendchatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the friendchatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{buddy.displayName}}</ion-title>\n    <!--<ion-buttons end>\n      <button ion-button (click)="sendPicMsg()">\n      <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-buttons>-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n<div class = "chatwindow">\n  <ion-list no-lines>\n    <ion-item *ngFor = "let item of allmessages; let i = index" text-wrap>\n      <ion-avatar item-left *ngIf="item.sentby === buddy.uid">\n        <img src="{{buddy.photoURL}}">\n      </ion-avatar>\n      <div class="bubble me" *ngIf="item.sentby === buddy.uid">\n          <h3>{{item.message}}</h3>\n        <!--<h3 *ngIf="!imgornot[i]">{{item.message}}</h3>-->\n        <!--<img src="{{item.message}}" *ngIf="imgornot[i]">-->\n      </div>\n      <ion-avatar item-right *ngIf="item.sentby != buddy.uid">\n        <img src="{{photoURL}}">\n      </ion-avatar>\n      <div class="bubble you" *ngIf="item.sentby != buddy.uid">\n          <h3>{{item.message}}</h3>\n        <!--<h3 *ngIf="!imgornot[i]">{{item.message}}</h3>\n        <img src="{{item.message}}" *ngIf="imgornot[i]">-->\n      </div>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n<ion-footer ion-fixed>    \n  <ion-toolbar class="no-border" color="white">        \n    <ion-input [(ngModel)]="newmessage" placeholder="Write your message ..."></ion-input>  \n    <ion-buttons end>\n      <button ion-button (click)="addmessage()">\n        <ion-icon name="send" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>    \n</ion-footer>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/friendchat/friendchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], friendchatPage);
    return friendchatPage;
}());

//# sourceMappingURL=friendchat.js.map

/***/ })

});
//# sourceMappingURL=7.js.map