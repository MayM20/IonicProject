webpackJsonp([5],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(713);
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
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(356);
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
    function HomePage(navCtrl, navParams, requestservice, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestservice = requestservice;
        this.events = events;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestservice.getmyrequests();
        this.events.subscribe('gotrequests', function () {
            _this.myrequests = [];
            _this.myrequests = _this.requestservice.userdetails;
        });
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe('gotrequests');
    };
    HomePage.prototype.addbuddy = function () {
        this.navCtrl.push('BuddiesPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/home/home.html"*/'<!--ion-header>\n  <ion-navbar color="strong-pink" padding-right>\n    <button ion-button icon-only color="strong-pink">\n        <ion-icon name="md-person-add"></ion-icon>\n      </button>\n      <button ion-button icon-only color="strong-pink">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n  </ion-navbar>\n</ion-header>-->\n<ion-header>\n\n    <ion-navbar color="strong-pink">\n      <ion-title>Home</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="addbuddy()">\n            <ion-icon name="person-add"></ion-icon>\n          </button>\n        </ion-buttons> \n    </ion-navbar>\n  \n  </ion-header>\n\n  <ion-content padding>\n      <ion-list no-lines>\n        <ion-list-header>\n          Requests\n        </ion-list-header>\n        <ion-item-sliding *ngFor="let item of myrequests">\n          <ion-item>\n          <ion-avatar item-left>\n            <img src="{{item.photoURL}}">\n          </ion-avatar>\n          <h4>{{item.displayName}}</h4>\n          </ion-item>\n          <ion-item-options>\n            <button ion-button color="secondary" (click)="accept(item)">\n              <ion-icon name="checkmark"></ion-icon>\n              ADD\n            </button>\n            <button ion-button color="danger" (click)="ignore(item)">\n              <ion-icon name="trash"></ion-icon>\n              DECLINE\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      </ion-content>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map