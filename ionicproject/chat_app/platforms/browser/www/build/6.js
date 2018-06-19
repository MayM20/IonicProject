webpackJsonp([6],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendsPageModule", function() { return friendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var friendsPageModule = /** @class */ (function () {
    function friendsPageModule() {
    }
    friendsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__friends__["a" /* friendsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friends__["a" /* friendsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__friends__["a" /* friendsPage */]
            ]
        })
    ], friendsPageModule);
    return friendsPageModule;
}());

//# sourceMappingURL=friends.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return friendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
 * Generated class for the friendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/*Display the list of users registered in the application. From there,
the user can add people to his friends list*/
var friendsPage = /** @class */ (function () {
    function friendsPage(navCtrl, navParams, userservice, alertCtrl, requestservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.alertCtrl = alertCtrl;
        this.requestservice = requestservice;
        this.newrequest = {};
        //getting all the users from the users collection 
        //and returning an array
        this.temparr = [];
        this.filteredusers = [];
        this.userservice.getallusers().then(function (res) {
            _this.filteredusers = res;
            _this.temparr = res;
        });
    }
    friendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad friendsPage');
    };
    friendsPage.prototype.searchuser = function (searchbar) {
        this.filteredusers = this.temparr;
        var q = searchbar.target.value;
        if (q.trim() == '') {
            return;
        }
        this.filteredusers = this.filteredusers.filter(function (v) {
            if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    friendsPage.prototype.sendreq = function (recipient) {
        var _this = this;
        this.newrequest.sender = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
        this.newrequest.recipient = recipient.uid;
        if (this.newrequest.sender === this.newrequest.recipient)
            alert('You are your friend always');
        else {
            var successalert_1 = this.alertCtrl.create({
                title: 'Request sent',
                subTitle: 'Your request was sent to ' + recipient.displayName,
                buttons: ['ok']
            });
            this.requestservice.sendrequest(this.newrequest).then(function (res) {
                if (res.success) {
                    successalert_1.present();
                    var sentuser = _this.filteredusers.indexOf(recipient);
                    _this.filteredusers.splice(sentuser, 1);
                }
            }).catch(function (err) {
                alert(err);
            });
        }
    };
    friendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/friends/friends.html"*/'<!--\n  Generated template for the friendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Add new user</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-searchbar [(ngModel)]="searchstring" (input)="searchuser($event)" placeholder="Search"></ion-searchbar>\n  <ion-list no-lines>\n    <ion-list>\n      <ion-item-sliding *ngFor="let key of filteredusers">\n        <ion-item >\n          <ion-avatar item-left>\n            <img src="{{key.photoURL}}">\n          </ion-avatar>\n          <h2>{{key.displayName}}</h2>\n        </ion-item>\n        <ion-item-options slide="left">\n          <button ion-button color="primary" (click)="sendreq(key)">\n            <ion-icon name="person-add"></ion-icon>\n            Add\n          </button>\n        </ion-item-options>\n        \n      </ion-item-sliding>\n    </ion-list>\n  </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/friends/friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__["a" /* RequestsProvider */]])
    ], friendsPage);
    return friendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ })

});
//# sourceMappingURL=6.js.map