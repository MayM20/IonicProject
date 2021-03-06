webpackJsonp([2],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicPageModule", function() { return ProfilepicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilepic__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilepicPageModule = /** @class */ (function () {
    function ProfilepicPageModule() {
    }
    ProfilepicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profilepic__["a" /* ProfilepicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilepic__["a" /* ProfilepicPage */]),
            ],
        })
    ], ProfilepicPageModule);
    return ProfilepicPageModule;
}());

//# sourceMappingURL=profilepic.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilepicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilepicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilepicPage = /** @class */ (function () {
    function ProfilepicPage(navCtrl, navParams, imgservice, zone, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgservice = imgservice;
        this.zone = zone;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.imgurl = 'https://firebasestorage.googleapis.com/v0/b/chatappia.appspot.com/o/user-profile.png?alt=media&token=0b1b13cb-8f89-4905-9b57-029a349d53f6';
        this.moveon = true;
    }
    ProfilepicPage.prototype.ionViewDidLoad = function () {
    };
    /*
    Choosing profile picture steps:
    1-Choose a picture from the file system using cordova-file-chooser plugin.
    2-Resolve native path of that file using cordova-filepath plugin
    3-Store it as a blob in firebase-storage
    4-Then, the download url of the stored file will be got to show the image on the app
     */
    ProfilepicPage.prototype.chooseimage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.imgservice.uploadimage().then(function (uploadedurl) {
            loader.dismiss();
            _this.zone.run(function () {
                _this.imgurl = uploadedurl;
                _this.moveon = false;
            });
        });
    };
    ProfilepicPage.prototype.updateproceed = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.updateimage(this.imgurl).then(function (res) {
            loader.dismiss();
            if (res.success) {
                _this.navCtrl.setRoot('TabsPage');
            }
            else {
                alert(res);
            }
        });
    };
    ProfilepicPage.prototype.proceed = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    ProfilepicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilepic',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/profilepic/profilepic.html"*/'<!--\n  Generated template for the ProfilepicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Welcome to Meet~Talk</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <div class="profile-image">\n      <img src="{{imgurl}}">\n    </div>\n    <!--new-->\n    <div>\n        <h2>{{displayName}}</h2>\n      </div>\n\n    <div>\n      <button ion-button round outline>Choose an image</button>\n    </div>\n\n    <div [hidden]="!moveon">\n      <button ion-button round outline (click)="proceed()">Skip this step</button>\n    </div>\n    \n    <div [hidden]="moveon">\n      <button ion-button round outline (click)="updateproceed()">Upload & proceed</button>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/profilepic/profilepic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], ProfilepicPage);
    return ProfilepicPage;
}());

//# sourceMappingURL=profilepic.js.map

/***/ })

});
//# sourceMappingURL=2.js.map