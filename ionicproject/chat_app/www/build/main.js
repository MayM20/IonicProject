webpackJsonp([8],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(afireauth) {
        this.afireauth = afireauth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/chatusers');
    }
    /*
   Adds a new user to the system.
   Called from - signup.ts
   Inputs - The new user object containing the email, password and displayName.
   Outputs - Promise.
   
    */
    UserProvider.prototype.adduser = function (newuser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: newuser.displayName,
                    photoURL: 'assets/imgs/user-profile.png'
                }).then(function () {
                    _this.firedata.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: newuser.displayName,
                        photoURL: 'assets/imgs/user-profile.png'
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /*
    For updating the users collection and the firebase users list with
    the imageurl of the profile picture stored in firebase storage.
    Called from - profilepic.ts
    */
    UserProvider.prototype.updateimage = function (imageurl) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: _this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/' + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: _this.afireauth.auth.currentUser.displayName,
                    photoURL: imageurl,
                    uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getuserdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatedisplayname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getallusers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.orderByChild('uid').once('value', function (snapshot) {
                var userdata = snapshot.val();
                var temparr = [];
                for (var key in userdata) {
                    temparr.push(userdata[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buddies/buddies.module": [
		705,
		5
	],
	"../pages/contacts/contacts.module": [
		706,
		4
	],
	"../pages/home/home.module": [
		707,
		3
	],
	"../pages/login/login.module": [
		708,
		7
	],
	"../pages/profile/profile.module": [
		710,
		2
	],
	"../pages/profilepic/profilepic.module": [
		709,
		1
	],
	"../pages/register/register.module": [
		711,
		0
	],
	"../pages/tabs/tabs.module": [
		712,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(65);
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
//import { HttpClient } from '@angular/common/http';




/*
  Generated class for the RequestsProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var RequestsProvider = /** @class */ (function () {
    function RequestsProvider(userservice, events) {
        this.userservice = userservice;
        this.events = events;
        this.firereq = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/requests');
    }
    //'set' was added, next to push to resolve PromiseLike
    //'var' was changed to 'let' instead
    RequestsProvider.prototype.sendrequest = function (req) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firereq.child(req.recipient).push().set({ sender: req.sender }).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                resolve(err);
                //should i change resolve to 'reject' instead? not sure though
            });
        });
        return promise;
    };
    RequestsProvider.prototype.getmyrequests = function () {
        var _this = this;
        var allmyrequests;
        var myrequests = [];
        this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            allmyrequests = snapshot.val();
            myrequests = [];
            for (var i in allmyrequests) {
                myrequests.push(allmyrequests[i].sender);
            }
            _this.userservice.getallusers().then(function (res) {
                var allusers = res;
                _this.userdetails = [];
                for (var j in myrequests)
                    for (var key in allusers) {
                        if (myrequests[j] === allusers[key].uid) {
                            _this.userdetails.push(allusers[key]);
                        }
                    }
                _this.events.publish('gotrequests');
            });
        });
    };
    RequestsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], RequestsProvider);
    return RequestsProvider;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImghandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImghandlerProvider = /** @class */ (function () {
    function ImghandlerProvider(filechooser) {
        this.filechooser = filechooser;
        this.firestore = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage();
    }
    ImghandlerProvider.prototype.uploadimage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], ImghandlerProvider);
    return ImghandlerProvider;
}());

//# sourceMappingURL=imghandler.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_firebaseconfig__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_chooser__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_imghandler_imghandler__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_requests_requests__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 //new
 //new
//import { AngularFireDatabaseModule } from 'angularfire2/database';//new
//import { AngularFireDatabase } from 'angularfire2/database';//new
 //new




//import { firebaseConfig } from '../config';//old 
//import { ProfilePage } from '../pages/profile/profile';
//import { ContactsPage } from '../pages/contacts/contacts';
//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';
//import { RegisterPage } from '../pages/register/register';
//import { TabsPage } from '../pages/tabs/tabs';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__app_firebaseconfig__["a" /* config */]),
                //AngularFireDatabase,
                //AngularFireDatabaseModule,
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                }, {
                    links: [
                        { loadChildren: '../pages/buddies/buddies.module#BuddiesPageModule', name: 'BuddiesPage', segment: 'buddies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilepic/profilepic.module#ProfilepicPageModule', name: 'ProfilepicPage', segment: 'profilepic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
                //ProfilePage,
                //ContactsPage,
                //HomePage,
                //LoginPage,
                //RegisterPage,
                //TabsPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
                //AngularFireDatabase,
                //AngularFireDatabaseModule,
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_requests_requests__["a" /* RequestsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    //rootPage: string = 'tabs-page';
    function MyApp(platform, statusBar, splashScreen, authProvider) {
        //in the rootpage you can set whats the first page
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Fatima/Desktop/ChatApp/ionicproject/chat_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
// Initialize Firebase
/*OLD
export const firebaseConfig = {
    fire: {
    apiKey: "AIzaSyB5_deSKeVkoNFDYOZqoejlbjlW1ZW88os",
    authDomain: "chatappia.firebaseapp.com",
    databaseURL: "https://chatappia.firebaseio.com",
    projectId: "chatappia",
    storageBucket: "chatappia.appspot.com",
    messagingSenderId: "77277216723"
    }
  };
 // firebase.initializeApp(config);*/
var config = {
    apiKey: "AIzaSyB5_deSKeVkoNFDYOZqoejlbjlW1ZW88os",
    authDomain: "chatappia.firebaseapp.com",
    databaseURL: "https://chatappia.firebaseio.com",
    projectId: "chatappia",
    storageBucket: "chatappia.appspot.com",
    messagingSenderId: "77277216723"
};
//# sourceMappingURL=app.firebaseconfig.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
//import { HttpClient } from '@angular/common/http';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    /*old
    constructor(public http: HttpClient) {
      console.log('Hello AuthProvider Provider');
    }*/
    function AuthProvider(afireauth) {
        this.afireauth = afireauth;
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]();
        this.userProfile = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('users');
    }
    /*
        For logging in a particular user. Called from the login.ts file.
      
    */
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(function () {
                resolve(true);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthProvider.prototype.signOut = function () {
        return this.afireauth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.js.map