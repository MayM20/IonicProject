webpackJsonp([4],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//@IonicPage()
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(158);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    /*username:string;
    password:string;*/
    function LoginPage(navCtrl, authservice, navParams) {
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.navParams = navParams;
        this.credentials = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.authservice.login(this.credentials).then(function (res) {
            if (!res.code)
                _this.navCtrl.setRoot('TabsPage');
            else
                alert(res);
        });
    };
    //todo
    LoginPage.prototype.passwordreset = function () {
    };
    LoginPage.prototype.signup = function () {
        //string = lazy loading 
        this.navCtrl.push('RegisterPage');
        //varible = older, slow traditional way
        //this.navCtrl.push(RegisterPage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n</ion-header>\n\n<!--\n<ion-content padding center text-center>\n<div class="container">\n<div class="wrap-login">\n<img src="assets/imgs/bubble-icon.png">\n<ion-title>LOGIN</ion-title>\n  \n<ion-list>\n\n        <ion-item margin-bottom="10px">\n          <ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n\n     \n       <button ion-button color="strong-pink" (click)="goTabsHome()">Log in</button>\n       <button ion-button color="light" (click)="goRegister()">Register</button>\n      \n</div>\n</div>\n</ion-content>-->\n<ion-content class="background">\n    <ion-card>\n      <ion-card-header>\n        LOGIN\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list no-lines>\n          <div class="spacer" style="height: 10px;"></div>\n          <ion-item>\n            <ion-input type="email" placeholder="Email" [(ngModel)]="credentials.email"></ion-input>\n          </ion-item>\n          <div class="spacer" style="height: 5px;"></div>\n          <ion-item>\n            <ion-input type="password" placeholder="Password" [(ngModel)]="credentials.password"></ion-input>\n          </ion-item>\n          <div class="spacer" style="height: 10px;"></div>\n          <a (click)="passwordreset()">Forgot login details ? <b> Get Help </b></a>\n          <div class="spacer" style="height: 10px;"></div>\n          <button ion-button block round outline color="light" (click)="signin()">Login</button>\n          <div class="spacer" style="height: 10px;"></div>\n          <p>OR</p>\n          <div class="spacer" style="height: 10px;"></div>\n          <button ion-button clear full color="light" (click)="signup()">Don\'t have an account? Sign up</button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    \n  \n  </ion-content>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map