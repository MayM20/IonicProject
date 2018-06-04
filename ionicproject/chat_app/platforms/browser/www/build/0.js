webpackJsonp([0],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(357);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    /*old code
      username: string;
      password: string;
      re_password:string;*/
    function RegisterPage(navCtrl, navParams, userservice, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.newuser = {
            email: '',
            password: '',
            displayName: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.signup = function () {
        var _this = this;
        /*old code
        if(this.username.length== 0 || this.password.length== 0 || this.re_password.length== 0 ){
          alert("Please fill all fields");
        }*/
        var toaster = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
        if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
            toaster.setMessage('All fields are required dude');
            toaster.present();
        }
        else if (this.newuser.password.length < 7) {
            toaster.setMessage('Password is not strong. Try giving more than six characters');
            toaster.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Please wait'
            });
            loader_1.present();
            this.userservice.adduser(this.newuser).then(function (res) {
                loader_1.dismiss();
                if (res.success)
                    _this.navCtrl.push('ProfilepicPage');
                else
                    alert('Error' + res);
            });
        }
    };
    RegisterPage.prototype.goback = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--OLD CODE \n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding center text-center>\n    <div class="container">\n    <div class="wrap-register">\n    <img src="assets/imgs/bubble-icon.png">\n    <ion-title>REGISTER</ion-title>\n\n    <ion-list>\n\n        <ion-item>\n          <ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n            <ion-input type="password" placeholder="Confirm password" [(ngModel)]="re_password"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n\n       <button ion-button full color="strong-pink" (click)="register()">Register</button>\n\n</div>\n</div>\n</ion-content>-->\n<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  </ion-header>\n  \n  \n  <ion-content class="background">\n  <ion-card>\n    <ion-card-header>\n      Signup\n    </ion-card-header>\n    <ion-card-content>\n       <ion-list >\n         <ion-item>  \n             <ion-input type="email" placeholder="Email" [(ngModel)]="newuser.email"></ion-input>\n         </ion-item>\n         <ion-item>  \n             <ion-input type="password" placeholder="Password" [(ngModel)]="newuser.password"></ion-input>\n         </ion-item>\n         <ion-item>  \n             <ion-input type="text" placeholder="Nick Name" [(ngModel)]="newuser.displayName"></ion-input>\n         </ion-item>\n        <button ion-button block round outline color="light" (click)="signup()">Sign Up</button>\n        <button ion-button full clear color="light" (click)="goback()">Go Back</button>\n       </ion-list>    \n    </ion-card-content>\n  </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map