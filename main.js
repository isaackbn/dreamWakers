(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert.service.ts":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService(http) {
        this.http = http;
    }
    AlertService.prototype.mainAlert = function () {
        return this.http.get('https://dreamwakers.herokuapp.com/alerts/main');
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flashchats/flashchats.component */ "./src/app/flashchats/flashchats.component.ts");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/plan/plan.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-redirect/auth-redirect.component */ "./src/app/auth-redirect/auth-redirect.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"]
    },
    {
        path: 'auth/redirect',
        component: _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_8__["AuthRedirectComponent"]
    },
    {
        path: 'home',
        //canActivate:[AuthGuard],
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'details/:id',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
    },
    {
        path: 'flashchats',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_4__["FlashchatsComponent"]
    },
    {
        path: 'plan',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _plan_plan_component__WEBPACK_IMPORTED_MODULE_5__["PlanComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"navigation\">\n\n  <app-topbar></app-topbar>\n</div>\n\n<div id=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dreamwakers';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/plan/plan.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-panel/home-panel.component */ "./src/app/home-panel/home-panel.component.ts");
/* harmony import */ var _forms_login_forms_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms-login/forms-login.component */ "./src/app/forms-login/forms-login.component.ts");
/* harmony import */ var _home_suggests_home_suggests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-suggests/home-suggests.component */ "./src/app/home-suggests/home-suggests.component.ts");
/* harmony import */ var _flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./flashchats/flashchats.component */ "./src/app/flashchats/flashchats.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _home_search_home_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home-search/home-search.component */ "./src/app/home-search/home-search.component.ts");
/* harmony import */ var _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth-redirect/auth-redirect.component */ "./src/app/auth-redirect/auth-redirect.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _plan_plan_component__WEBPACK_IMPORTED_MODULE_9__["PlanComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"],
                _home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_12__["HomePanelComponent"],
                _forms_login_forms_login_component__WEBPACK_IMPORTED_MODULE_13__["FormsLoginComponent"],
                _home_suggests_home_suggests_component__WEBPACK_IMPORTED_MODULE_14__["HomeSuggestsComponent"],
                _flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_15__["FlashchatsComponent"],
                _home_search_home_search_component__WEBPACK_IMPORTED_MODULE_18__["HomeSearchComponent"],
                _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_19__["AuthRedirectComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-redirect/auth-redirect.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth-redirect/auth-redirect.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auth-redirect works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth-redirect/auth-redirect.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth-redirect/auth-redirect.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth-redirect/auth-redirect.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth-redirect/auth-redirect.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRedirectComponent", function() { return AuthRedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _linkedin_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../linkedin-login.service */ "./src/app/linkedin-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthRedirectComponent = /** @class */ (function () {
    function AuthRedirectComponent(route, router, linkedinLoginService) {
        this.route = route;
        this.router = router;
        this.linkedinLoginService = linkedinLoginService;
        if (router.routerState.snapshot.root.queryParams.code != null) {
            this.linkedinCode = router.routerState.snapshot.root.queryParams.code;
            this.fetchedCode = true;
        }
        else {
            this.linkedinError = router.routerState.snapshot.root.queryParams.console.error;
            this.linkedinErrorDescription = router.routerState.snapshot.root.queryParams.error_description;
            this.fetchedCode = false;
        }
        this.linkedinReceivedState = router.routerState.snapshot.root.queryParams.state;
    }
    AuthRedirectComponent.prototype.ngOnInit = function () {
        console.log(this.linkedinCode);
        if (this.linkedinLoginService.state == this.linkedinReceivedState) {
            if (this.fetchedCode) {
                this.linkedinLoginService.fetchAccessToken(this.linkedinCode);
            }
            else {
                //show this.linkedinErrorDescription
            }
        }
    };
    AuthRedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-redirect',
            template: __webpack_require__(/*! ./auth-redirect.component.html */ "./src/app/auth-redirect/auth-redirect.component.html"),
            styles: [__webpack_require__(/*! ./auth-redirect.component.scss */ "./src/app/auth-redirect/auth-redirect.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _linkedin_login_service__WEBPACK_IMPORTED_MODULE_2__["LinkedinLoginService"]])
    ], AuthRedirectComponent);
    return AuthRedirectComponent;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.getUserIn()) {
            return true;
        }
        else {
            this.router.navigate(['/auth']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isUserIn = false;
    }
    AuthService.prototype.setUserIn = function () {
        this.isUserIn = true;
    };
    AuthService.prototype.getUserIn = function () {
        return this.isUserIn;
    };
    AuthService.prototype.signOut = function () {
        this.isUserIn = false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<p>&nbsp; You will be asked to log in or sign up with your Linkedin accounts</p>\n\n<a href={{loginLink}}>linkedin</a>\n\n\n<app-forms-login></app-forms-login>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _linkedin_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../linkedin-login.service */ "./src/app/linkedin-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = /** @class */ (function () {
    function AuthComponent(linkedinLoginService) {
        this.linkedinLoginService = linkedinLoginService;
        this.redirectUri = linkedinLoginService.redirectUri;
        this.state = linkedinLoginService.state;
        this.scope = linkedinLoginService.scope;
        this.clientId = linkedinLoginService.clientId;
        this.loginLink = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=" + this.clientId + "&redirect_uri=" + this.redirectUri + "&state=" + this.state + "&scope=" + this.scope;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_linkedin_login_service__WEBPACK_IMPORTED_MODULE_1__["LinkedinLoginService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUsers = function () {
        return this.http.get('https://dreamwakers.herokuapp.com/users');
    };
    DataService.prototype.getUser = function (userId) {
        return this.http.get('https://dreamwakers.herokuapp.com/users/' + userId);
    };
    DataService.prototype.postUser = function () {
        return this.http.get('https://dreamwakers.herokuapp.com/posts');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>&nbsp; More info on <span style=\"font-weight: bold\">{{user$.firstname}} {{user$.lastname}}</span></p>\n\n<ul>\n  <li> <strong>First detail: </strong> {{user$.firstname}} {{user$.lastname}}</li>\n  <li> <strong>Second info: </strong> {{user$.lastname}}</li>\n  <li> <strong>More on user: </strong> {{user$.firstname}} </li>\n</ul>\n\n<p>&nbsp; etc..</p>"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.user$ = params.id; });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUser(this.user$).subscribe(function (data) { return _this.user$ = data[0]; });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/flashchats/flashchats.component.html":
/*!******************************************************!*\
  !*** ./src/app/flashchats/flashchats.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>&nbsp; Connections</h4> <p>&nbsp; Calls are supported via Google. (Implementing the necessary backbone)  </p>\n\n\n\n<video autoplay muted loop id=\"video\">\n       <source src=\"{{url}}\" type=\"video/mp4\">\n       Your browser does not support HTML5 video.\n</video>\n"

/***/ }),

/***/ "./src/app/flashchats/flashchats.component.scss":
/*!******************************************************!*\
  !*** ./src/app/flashchats/flashchats.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/flashchats/flashchats.component.ts":
/*!****************************************************!*\
  !*** ./src/app/flashchats/flashchats.component.ts ***!
  \****************************************************/
/*! exports provided: FlashchatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashchatsComponent", function() { return FlashchatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlashchatsComponent = /** @class */ (function () {
    function FlashchatsComponent(data) {
        this.data = data;
        this.url = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4";
    }
    FlashchatsComponent.prototype.ngOnInit = function () {
    };
    FlashchatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flashchats',
            template: __webpack_require__(/*! ./flashchats.component.html */ "./src/app/flashchats/flashchats.component.html"),
            styles: [__webpack_require__(/*! ./flashchats.component.scss */ "./src/app/flashchats/flashchats.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FlashchatsComponent);
    return FlashchatsComponent;
}());



/***/ }),

/***/ "./src/app/forms-login/forms-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/forms-login/forms-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form #userLogin=\"ngForm\" (ngSubmit)=\"onSubmit(userLogin)\" >\n    <div>\n      <label for=\"username\">Username</label>\n      <input type=\"text\" name=\"username\" id=\"username\" ngModel>\n    </div>\n  \n    <div>\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" id=\"password\" ngModel>\n     </div>\n  \n    <div>\n      <button type=\"submit\">Login</button>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/forms-login/forms-login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/forms-login/forms-login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-login/forms-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/forms-login/forms-login.component.ts ***!
  \******************************************************/
/*! exports provided: FormsLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsLoginComponent", function() { return FormsLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsLoginComponent = /** @class */ (function () {
    function FormsLoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    FormsLoginComponent.prototype.ngOnInit = function () {
    };
    FormsLoginComponent.prototype.onSubmit = function (form) {
        var username = form.value.username;
        var password = form.value.password;
        if (username == "" && password == "") {
            this.auth.setUserIn();
            this.router.navigate(["/home"]);
        }
    };
    FormsLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms-login',
            template: __webpack_require__(/*! ./forms-login.component.html */ "./src/app/forms-login/forms-login.component.html"),
            styles: [__webpack_require__(/*! ./forms-login.component.scss */ "./src/app/forms-login/forms-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], FormsLoginComponent);
    return FormsLoginComponent;
}());



/***/ }),

/***/ "./src/app/home-panel/home-panel.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-panel/home-panel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n    Panel section\n  </div>"

/***/ }),

/***/ "./src/app/home-panel/home-panel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/home-panel/home-panel.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  margin-left: 435px; }\n"

/***/ }),

/***/ "./src/app/home-panel/home-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-panel/home-panel.component.ts ***!
  \****************************************************/
/*! exports provided: HomePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePanelComponent", function() { return HomePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePanelComponent = /** @class */ (function () {
    function HomePanelComponent() {
    }
    HomePanelComponent.prototype.ngOnInit = function () {
    };
    HomePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-panel',
            template: __webpack_require__(/*! ./home-panel.component.html */ "./src/app/home-panel/home-panel.component.html"),
            styles: [__webpack_require__(/*! ./home-panel.component.scss */ "./src/app/home-panel/home-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePanelComponent);
    return HomePanelComponent;
}());



/***/ }),

/***/ "./src/app/home-search/home-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-search/home-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"container\">\n    \n    <div class=\"\">\n      <input type=\"text\" class=\"searchTerm\" placeholder=\"search speaker\">\n      <button type=\"submit\" class=\"searchButton\">\n        <i class=\"material-icons\">search</i>\n      </button>\n    </div>\n\n\n    <div id=\"search-results\">\n      this is the display area for the search results\n    </div>\n\n    <span id=\"right\">\n        <div class=\"vl\"></div>\n      </span>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/home-search/home-search.component.scss":
/*!********************************************************!*\
  !*** ./src/app/home-search/home-search.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 430px;\n  float: left; }\n\n#search-results {\n  margin-left: 15px;\n  margin-top: 15px;\n  width: 411px;\n  border-right: 1px solid #a1a1a194; }\n\n.searchTerm {\n  float: left;\n  width: 355px;\n  border: 2px solid #00B4CC;\n  padding: 5px;\n  height: 20px;\n  border-radius: 0.1px;\n  margin-left: 9px;\n  margin-top: 15px;\n  outline: none;\n  color: #cccccc;\n  font-size: 16px;\n  font-weight: lighter; }\n\n.searchTerm:focus {\n  color: #444444;\n  font-size: 16px;\n  font-weight: lighter; }\n\n.searchButton {\n  margin-top: 15px;\n  margin-left: -1px;\n  width: 40px;\n  height: 34px;\n  border: 0.03px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 30px; }\n\n.searchButton:focus {\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/home-search/home-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-search/home-search.component.ts ***!
  \******************************************************/
/*! exports provided: HomeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSearchComponent", function() { return HomeSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeSearchComponent = /** @class */ (function () {
    function HomeSearchComponent() {
    }
    HomeSearchComponent.prototype.ngOnInit = function () {
    };
    HomeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-search',
            template: __webpack_require__(/*! ./home-search.component.html */ "./src/app/home-search/home-search.component.html"),
            styles: [__webpack_require__(/*! ./home-search.component.scss */ "./src/app/home-search/home-search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeSearchComponent);
    return HomeSearchComponent;
}());



/***/ }),

/***/ "./src/app/home-suggests/home-suggests.component.html":
/*!************************************************************!*\
  !*** ./src/app/home-suggests/home-suggests.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"container\">\n  \n  <span id=\"left\">\n      <p id=\"suggested\">Suggested ({{suggestedCount}})</p>\n      <hr id=\"separator\">\n\n    <ul class=\"user-container\"> <!--[@listStagger]=\"users$\"-->\n      <li *ngFor=\"let user of users$\" class=\"user-block\" (click)=\"showDetails(user.id)\">\n        <a routerLink=\"details/{{user.id}}\"> {{user.firstname}} {{user.lastname}}</a>\n        <hr>\n        <div class=\"profession\">{{user.profession}}</div>\n        <div class=\"detail\">{{user.company}}</div>\n        <div class=\"detail\">{{user.location}}</div>\n      </li>\n\n      <li tabIndex=\"-1\" id=\"moreUsers\" #moreUsersId class=\"user-block fade-in\">\n          <a routerLink=\"\"> More</a>\n          <hr>\n          <div class=\"profession\">Profession</div>\n          <div class=\"detail\">company</div>\n          <div class=\"detail\">location</div>\n      </li>\n    </ul>\n  </span>\n\n</div>\n  \n\n\n\n\n"

/***/ }),

/***/ "./src/app/home-suggests/home-suggests.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home-suggests/home-suggests.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 430px; }\n\n#left {\n  float: left;\n  border-right: 1px solid #a1a1a194; }\n\n#suggested {\n  text-align: center;\n  color: #696969;\n  margin-top: 15px;\n  font-weight: lighter;\n  font-size: .9em; }\n\n.profession {\n  color: #069db1;\n  font-size: .85em; }\n\n.detail {\n  font-size: 0.65em; }\n\n#separator {\n  margin-left: 10px;\n  border-top: 1px solid #d8d8d8;\n  width: 96%; }\n\n.user-container {\n  margin-top: 10px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto;\n      grid-template-columns: auto auto auto;\n  grid-gap: 5px;\n  padding: 0 10px;\n  width: 90%;\n  list-style-type: none; }\n\n.user-block:hover {\n  cursor: pointer;\n  border: 1px solid #38a3a5;\n  border-top: 3px solid #38a3a5;\n  background: white; }\n\n.user-block:hover hr {\n    border-top: 1px solid #a1a1a194; }\n\n.user-block:focus {\n  border: 1px solid #38a3a5;\n  outline: none; }\n\n.user-block {\n  transition: all 0.12s linear;\n  border: 1px solid lightgray;\n  border-top: 3px solid #8d8d8d94;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.045);\n  background: white;\n  border-radius: 3px;\n  padding: 10px 0;\n  width: 130px;\n  height: 400 px;\n  text-align: center; }\n\n.user-block hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #e6e6e6;\n    margin: 1em 0;\n    padding: 0; }\n\n.user-block a {\n    font-size: .8em;\n    text-decoration: none;\n    color: #37393a;\n    text-align: left; }\n\n.user-block div {\n    margin-top: 10px;\n    margin-left: 3px;\n    text-align: left; }\n\n.fade-in {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n"

/***/ }),

/***/ "./src/app/home-suggests/home-suggests.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-suggests/home-suggests.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeSuggestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSuggestsComponent", function() { return HomeSuggestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeSuggestsComponent = /** @class */ (function () {
    function HomeSuggestsComponent(data, router) {
        this.data = data;
        this.router = router;
        this.suggestedCount = 7;
    }
    HomeSuggestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; });
    };
    HomeSuggestsComponent.prototype.ngAfterViewInit = function () {
        this.moreUsersId.nativeElement.focus();
    };
    HomeSuggestsComponent.prototype.showDetails = function (id) {
        this.router.navigate(['details/' + id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('moreUsersId'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeSuggestsComponent.prototype, "moreUsersId", void 0);
    HomeSuggestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-suggests',
            template: __webpack_require__(/*! ./home-suggests.component.html */ "./src/app/home-suggests/home-suggests.component.html"),
            styles: [__webpack_require__(/*! ./home-suggests.component.scss */ "./src/app/home-suggests/home-suggests.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('50ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, })), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeSuggestsComponent);
    return HomeSuggestsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"alert\" *ngIf=\"!alert.empty()\"> \n  <a class=\"close\" (click)=\"alert.close()\"></a>\n  <h4>{{alert.title}}</h4> {{alert.body}}\n</div>\n\n<div>\n  <app-home-search ></app-home-search>\n  <app-home-suggests></app-home-suggests>\n</div>\n\n<app-home-panel></app-home-panel>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  background-color: #333; }\n\n.suggests {\n  width: 33.5%;\n  -webkit-transform: translate(0, 3%);\n          transform: translate(0, 3%);\n  background-color: #8d9732; }\n\n.panel {\n  float: right; }\n\n.left-block {\n  float: left; }\n\n.close {\n  position: absolute;\n  right: 23px;\n  top: 64px;\n  width: 25px;\n  height: 25px;\n  opacity: 0.3; }\n\n.close:hover {\n  opacity: 1;\n  cursor: pointer; }\n\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 20px;\n  width: 2px;\n  background-color: #333; }\n\n.close:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.close:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, router, alertRes, auth) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.alertRes = alertRes;
        this.auth = auth;
        this.alertDisabled = false;
        this.alert = {
            title: "",
            body: "",
            empty: function () { if (_this.alert.title == "" && _this.alert.body == "" || _this.alertDisabled == true)
                return true; },
            close: function () { _this.alertDisabled = true; }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; });
        this.alertRes.mainAlert().subscribe(function (alert) {
            _this.alert.title = alert[0].title;
            _this.alert.body = alert[0].body;
        });
    };
    HomeComponent.prototype.showDetails = function (id) {
        this.router.navigate(['details/' + id]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/linkedin-login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/linkedin-login.service.ts ***!
  \*******************************************/
/*! exports provided: LinkedinLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinLoginService", function() { return LinkedinLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkedinLoginService = /** @class */ (function () {
    function LinkedinLoginService(http) {
        this.http = http;
        this.website = "isaackbn%2Egithub%2Eio%2Fdreamwakers"; //site for: "isaackbn.github.io/dreamwakers"
        this.LOCAL = "http%3A%2F%2Flocalhost%3A%34%32%30%30%2Fauth%2Fredirect";
        this.ONLINE = "https%3A%2F%2F" + this.website + "%2Fauth%2Fredirect";
        this.redirectUri = this.ONLINE; //for deployment, change to: this.ONLINE
        this.state = "DCEeFWg45A53sdfKef424";
        this.scope = "r_basicprofile";
        this.clientId = "77bhchu07m7fuk";
        this.clientSecret = "r3cyzu4ucuerwMD9";
    }
    LinkedinLoginService.prototype.login = function () { this.fetchAutorizationCode(); }; //redirects to auth-redirect -> this.fethAccessToken(code)
    LinkedinLoginService.prototype.fetchAutorizationCode = function () {
        this.http.get("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=" + this.clientId + "&redirect_uri=" + this.redirectUri + "&state=" + this.state + "&scope=" + this.scope);
    };
    LinkedinLoginService.prototype.fetchAccessToken = function (code) {
        // let body = new URLSearchParams();
        // body.set('grant_type', 'authorization_code');
        // body.set('code', code);
        // body.set('redirect_uri', this.redirectUri);
        // body.set('client_id', this.clientId);
        // body.set('client_secret', this.clientSecret);
        var _this = this;
        var body = "grant_type=authorization_code&code=" + code + "&redirect_uri=" + this.redirectUri + "&client_id=" + this.clientId + "&client_secret=" + this.clientSecret;
        console.log(body);
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.http
            .post('https://www.linkedin.com/oauth/v2/accessToken', body, options)
            .subscribe(function (data) {
            console.log(data);
            _this.accessToken = data[0].access_token;
        });
    };
    LinkedinLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LinkedinLoginService);
    return LinkedinLoginService;
}());



/***/ }),

/***/ "./src/app/plan/plan.component.html":
/*!******************************************!*\
  !*** ./src/app/plan/plan.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    &nbsp; Plan allows you to manage meetings and modify profile parameters.\n  </p>"

/***/ }),

/***/ "./src/app/plan/plan.component.scss":
/*!******************************************!*\
  !*** ./src/app/plan/plan.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/plan/plan.component.ts":
/*!****************************************!*\
  !*** ./src/app/plan/plan.component.ts ***!
  \****************************************/
/*! exports provided: PlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanComponent", function() { return PlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlanComponent = /** @class */ (function () {
    function PlanComponent() {
    }
    PlanComponent.prototype.ngOnInit = function () {
    };
    PlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan',
            template: __webpack_require__(/*! ./plan.component.html */ "./src/app/plan/plan.component.html"),
            styles: [__webpack_require__(/*! ./plan.component.scss */ "./src/app/plan/plan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlanComponent);
    return PlanComponent;
}());



/***/ }),

/***/ "./src/app/topbar/topbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav id=\"navigation\">\n\n    <ul class=\"topnav\">\n\n  \n      <li class=\"topnav-centered\"> <a href=\"https://www.dreamwakers.org/\" \n                [class.activated] = \"currentUrl != nil\"> Dreamwakers </a></li>\n  \n      <li><a routerLink=\"home\" \n                [class.activated] = \"currentUrl == '/home'\"\n                [class.not-activated] = \"currentUrl != '/home'\"> Home </a></li>\n  \n      <li>  <a routerLink=\"flashchats\" \n                [class.activated] = \"currentUrl == '/flashchats'\"\n                [class.not-activated] = \"currentUrl != '/flashchats'\"> Flashchats</a> </li>\n      \n      <li>  <a routerLink=\"plan\" \n                [class.activated] = \"currentUrl == '/plan'\"\n                [class.not-activated] = \"currentUrl != '/plan'\"> Plan</a> </li>\n        \n\n       <li style=\"float: right\" *ngIf=\"signedIn()\"> <a (click)=\"signOut()\" id=\"sign-out\" \n                [class.activated] = \"currentUrl == '/'\"\n                [class.not-activated] = \"currentUrl != '/'\">Sign out</a> </li>\n  \n  \n    </ul>\n  \n  </nav>\n\n\n  "

/***/ }),

/***/ "./src/app/topbar/topbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sign-out:hover {\n  cursor: pointer; }\n\n#navigation ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: white;\n  border-radius: 2px;\n  border-top: 1px solid #f1f1f1;\n  border-bottom: 1px solid #cacaca; }\n\n#navigation li {\n  float: left; }\n\n#navigation li a {\n  display: block;\n  text-align: center;\n  padding: 15px 12px;\n  text-decoration: none;\n  border-radius: 2px;\n  text-decoration: none; }\n\n#navigation li a:hover:not(.active) {\n  color: #40b7b9; }\n\n#navigation .activated {\n  border-bottom: 2px solid #38a3a5;\n  color: #38a3a5; }\n\n#navigation .not-activated {\n  color: inherit; }\n\n.topnav {\n  position: relative;\n  overflow: hidden;\n  background-color: #333; }\n\n.topnav-centered a {\n  float: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(router, auth) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentUrl = e.url;
            }
        });
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent.prototype.signedIn = function () {
        return this.auth.getUserIn();
    };
    TopbarComponent.prototype.signOut = function () {
        this.auth.signOut();
        this.router.navigate(['/auth']);
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/topbar/topbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



//if (environment.production) {
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
//}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isaac/Documents/angularJS/dreamwakers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map