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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/flashchats/flashchats.component */ "./src/app/components/flashchats/flashchats.component.ts");
/* harmony import */ var _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/plan/plan.component */ "./src/app/components/plan/plan.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth-redirected/auth-redirected.component */ "./src/app/components/auth-redirected/auth-redirected.component.ts");
/* harmony import */ var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/logged.guard */ "./src/app/guards/logged.guard.ts");
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
        canActivate: [_guards_logged_guard__WEBPACK_IMPORTED_MODULE_9__["LoggedGuard"]],
        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"]
    },
    {
        path: 'auth/redirected',
        component: _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_8__["AuthRedirectedComponent"]
    },
    {
        path: 'home',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'details/:id',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
    },
    {
        path: 'flashchats',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_4__["FlashchatsComponent"]
    },
    {
        path: 'plan',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        component: _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_5__["PlanComponent"]
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
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/plan/plan.component */ "./src/app/components/plan/plan.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-panel/home-panel.component */ "./src/app/components/home-panel/home-panel.component.ts");
/* harmony import */ var _components_home_suggests_home_suggests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-suggests/home-suggests.component */ "./src/app/components/home-suggests/home-suggests.component.ts");
/* harmony import */ var _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/flashchats/flashchats.component */ "./src/app/components/flashchats/flashchats.component.ts");
/* harmony import */ var _components_home_search_home_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home-search/home-search.component */ "./src/app/components/home-search/home-search.component.ts");
/* harmony import */ var _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/auth-redirected/auth-redirected.component */ "./src/app/components/auth-redirected/auth-redirected.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/logged.guard */ "./src/app/guards/logged.guard.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"],
                _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_10__["PlanComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
                _components_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_13__["HomePanelComponent"],
                _components_home_suggests_home_suggests_component__WEBPACK_IMPORTED_MODULE_14__["HomeSuggestsComponent"],
                _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_15__["FlashchatsComponent"],
                _components_home_search_home_search_component__WEBPACK_IMPORTED_MODULE_16__["HomeSearchComponent"],
                _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_17__["AuthRedirectedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalModule"].forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth-redirected/auth-redirected.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/auth-redirected/auth-redirected.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p style=\"margin-left: 20px;\"> <br> If you are not redirected automatically, Please Sign out from the linkedin website and try again.</p>\n"

/***/ }),

/***/ "./src/app/components/auth-redirected/auth-redirected.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/auth-redirected/auth-redirected.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth-redirected/auth-redirected.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/auth-redirected/auth-redirected.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthRedirectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRedirectedComponent", function() { return AuthRedirectedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_linkedin_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/linkedin-login.service */ "./src/app/services/linkedin-login.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthRedirectedComponent = /** @class */ (function () {
    function AuthRedirectedComponent(route, router, linkedinLoginService, dataService) {
        this.route = route;
        this.router = router;
        this.linkedinLoginService = linkedinLoginService;
        this.dataService = dataService;
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
    AuthRedirectedComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.linkedinLoginService.state == this.linkedinReceivedState) {
            if (this.fetchedCode) {
                this.linkedinLoginService.authorization_code = this.linkedinCode;
                this.linkedinLoginService.fetchUserData().subscribe(function (res) {
                    if (res[0].auth == "success") {
                        _this.dataService.saveUserData(res[0]);
                        localStorage.setItem("userIn", "true");
                        _this.dataService.setProfileHasType(); //make sure that type modal (in home) is not loaded
                        _this.router.navigate(['/home']);
                    }
                    else {
                        console.log("res is: " + res[0]);
                        console.log(res[0].auth);
                        _this.router.navigate(['/auth']);
                    }
                }, function (err) {
                    if (err.satus == 0)
                        console.log("server down");
                });
            }
            else {
                console.log("error - access code not retrieved");
                //show this.linkedinErrorDescription
            }
        }
    };
    AuthRedirectedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-redirected',
            template: __webpack_require__(/*! ./auth-redirected.component.html */ "./src/app/components/auth-redirected/auth-redirected.component.html"),
            styles: [__webpack_require__(/*! ./auth-redirected.component.scss */ "./src/app/components/auth-redirected/auth-redirected.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_linkedin_login_service__WEBPACK_IMPORTED_MODULE_2__["LinkedinLoginService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AuthRedirectedComponent);
    return AuthRedirectedComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n<!-- <button (click)=\"ngxSmartModalService.getModal('myModal').open()\">Open myModal</button> -->\n\n\n\n\n\n<!-- <video autoplay muted loop id=\"video\">\n    <source src=\"{{url}}\" type=\"video/mp4\">\n    Your browser does not support HTML5 video.\n</video> -->\n\n<div  [innerHTML]=\"videoTag\"></div>\n\n\n\n <ngx-smart-modal #myModal  [customClass]=\"'large-modal'\" identifier=\"myModal\" [closable]=\"false\" [dismissable]=\"false\" [autostart]=\"true\">\n\n    <pre>&nbsp;</pre>\n    \n    <span class= \"buttons\">\n        <a class=\"button\" href={{loginLink}}>Sign in with Linkedin</a>\n    </span>\n\n    <div class=\"footer\">For security reasons, we require that all users use their Linkedin accounts</div>\n\n  </ngx-smart-modal>\n"

/***/ }),

/***/ "./src/app/components/auth/auth.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video {\n  width: 100%; }\n\n.large-modal {\n  max-width: 60%;\n  margin-top: 15%; }\n\npre {\n  display: block;\n  text-align: center;\n  font-size: 25px;\n  unicode-bidi: embed;\n  font-family: monospace;\n  white-space: pre;\n  overflow-x: auto;\n  background-color: #f3f3f3;\n  color: #285070;\n  margin: 0;\n  padding: .7rem;\n  border-radius: 4px; }\n\n.buttons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 10px auto; }\n\n.button {\n  display: flex;\n  overflow: hidden;\n  margin: 10px;\n  padding: 12px 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 60ms ease-in-out;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none !important;\n  text-transform: none;\n  text-transform: capitalize;\n  color: snow;\n  background: #1a6496;\n  border: 0 none;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  justify-content: center;\n  align-items: center; }\n\n.button:hover {\n    transition: all 60ms ease;\n    opacity: .85; }\n\n.button:active {\n    transition: all 60ms ease;\n    opacity: .75; }\n\n.button:focus {\n    outline: 1px dotted #959595;\n    outline-offset: -4px; }\n\n.footer {\n  border-top: 0.1rem solid rgba(49, 123, 172, 0.521);\n  font-weight: 400;\n  margin-top: 3rem;\n  line-height: 2;\n  text-align: center;\n  font-size: 12px;\n  color: #000; }\n"

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_linkedin_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/linkedin-login.service */ "./src/app/services/linkedin-login.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
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
    function AuthComponent(linkedinLoginService, authService, router, ngxSmartModalService) {
        this.linkedinLoginService = linkedinLoginService;
        this.authService = authService;
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.url = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4";
        this.loginLink = this.linkedinLoginService.getCode_link();
        this.videoTag = this.getVideoTag();
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.getVideoTag = function () {
        return "<video id=\"video\" muted loop autoplay playsinline disableRemotePlayback>\n            <source src=\"https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4\" type=\"video/mp4\">\n            Your browser does not support HTML5 video.\n        </video>";
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/components/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_linkedin_login_service__WEBPACK_IMPORTED_MODULE_1__["LinkedinLoginService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>&nbsp; More info on <span style=\"font-weight: bold\">{{user$.firstname}} {{user$.lastname}}</span></p>\n\n<ul>\n  <li> <strong>First detail: </strong> {{user$.firstname}} {{user$.lastname}}</li>\n  <li> <strong>Second info: </strong> {{user$.lastname}}</li>\n  <li> <strong>More on user: </strong> {{user$.firstname}} </li>\n</ul>\n\n<p>&nbsp; etc..</p>"

/***/ }),

/***/ "./src/app/components/details/details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
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
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/components/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/flashchats/flashchats.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/flashchats/flashchats.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>&nbsp; Connections</h4> <p>&nbsp; Calls are supported via Google. (Implementing the necessary backbone)  </p>\n\n\n\n<video autoplay muted loop id=\"video\">\n       <source src=\"{{url}}\" type=\"video/mp4\">\n       Your browser does not support HTML5 video.\n</video>\n"

/***/ }),

/***/ "./src/app/components/flashchats/flashchats.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/flashchats/flashchats.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/flashchats/flashchats.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/flashchats/flashchats.component.ts ***!
  \***************************************************************/
/*! exports provided: FlashchatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashchatsComponent", function() { return FlashchatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
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
            template: __webpack_require__(/*! ./flashchats.component.html */ "./src/app/components/flashchats/flashchats.component.html"),
            styles: [__webpack_require__(/*! ./flashchats.component.scss */ "./src/app/components/flashchats/flashchats.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FlashchatsComponent);
    return FlashchatsComponent;
}());



/***/ }),

/***/ "./src/app/components/home-panel/home-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-panel/home-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n    Panel section\n  </div>"

/***/ }),

/***/ "./src/app/components/home-panel/home-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-panel/home-panel.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  margin-left: 435px; }\n"

/***/ }),

/***/ "./src/app/components/home-panel/home-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/home-panel/home-panel.component.ts ***!
  \***************************************************************/
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
            template: __webpack_require__(/*! ./home-panel.component.html */ "./src/app/components/home-panel/home-panel.component.html"),
            styles: [__webpack_require__(/*! ./home-panel.component.scss */ "./src/app/components/home-panel/home-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePanelComponent);
    return HomePanelComponent;
}());



/***/ }),

/***/ "./src/app/components/home-search/home-search.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-search/home-search.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"container\">\n    \n    <div class=\"\">\n      <input type=\"text\" class=\"searchTerm\" placeholder=\"search speaker\">\n      <button type=\"submit\" class=\"searchButton\">\n        <i class=\"material-icons\">search</i>\n      </button>\n    </div>\n\n\n    <div id=\"search-results\">\n      this is the display area for the search results\n    </div>\n\n    <span id=\"right\">\n        <div class=\"vl\"></div>\n      </span>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/components/home-search/home-search.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-search/home-search.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 430px;\n  float: left; }\n\n#search-results {\n  margin-left: 15px;\n  margin-top: 15px;\n  width: 411px;\n  border-right: 1px solid #a1a1a194; }\n\n.searchTerm {\n  float: left;\n  width: 355px;\n  border: 2px solid #00B4CC;\n  padding: 5px;\n  height: 20px;\n  border-radius: 0.1px;\n  margin-left: 9px;\n  margin-top: 15px;\n  outline: none;\n  color: #cccccc;\n  font-size: 16px;\n  font-weight: lighter; }\n\n.searchTerm:focus {\n  color: #444444;\n  font-size: 16px;\n  font-weight: lighter; }\n\n.searchButton {\n  margin-top: 15px;\n  margin-left: -1px;\n  width: 40px;\n  height: 34px;\n  border: 0.03px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 30px; }\n\n.searchButton:focus {\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/components/home-search/home-search.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-search/home-search.component.ts ***!
  \*****************************************************************/
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
            template: __webpack_require__(/*! ./home-search.component.html */ "./src/app/components/home-search/home-search.component.html"),
            styles: [__webpack_require__(/*! ./home-search.component.scss */ "./src/app/components/home-search/home-search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeSearchComponent);
    return HomeSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/home-suggests/home-suggests.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/home-suggests/home-suggests.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"container\">\n  \n  <span id=\"left\">\n      <p id=\"suggested\">Suggested ({{suggestedCount}})</p>\n      <hr id=\"separator\">\n\n    <ul class=\"user-container\"> <!--[@listStagger]=\"users$\"-->\n      <li *ngFor=\"let user of users$\" class=\"user-block\" (click)=\"showDetails(user.id)\">\n        <a routerLink=\"details/{{user.id}}\"> {{user.firstname}} {{user.lastname}}</a>\n        <hr>\n        <div class=\"profession\">{{user.profession}}</div>\n        <div class=\"detail\">{{user.company}}</div>\n        <div class=\"detail\">{{user.location}}</div>\n      </li>\n\n      <li tabIndex=\"-1\" id=\"moreUsers\" #moreUsersId class=\"user-block fade-in\">\n          <a routerLink=\"\"> More</a>\n          <hr>\n          <div class=\"profession\">Profession</div>\n          <div class=\"detail\">company</div>\n          <div class=\"detail\">location</div>\n      </li>\n    </ul>\n  </span>\n\n</div>\n  \n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/home-suggests/home-suggests.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/home-suggests/home-suggests.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 430px; }\n\n#left {\n  float: left;\n  border-right: 1px solid #a1a1a194; }\n\n#suggested {\n  text-align: center;\n  color: #696969;\n  margin-top: 15px;\n  font-weight: lighter;\n  font-size: .9em; }\n\n.profession {\n  color: #069db1;\n  font-size: .85em; }\n\n.detail {\n  font-size: 0.65em; }\n\n#separator {\n  margin-left: 10px;\n  border-top: 1px solid #d8d8d8;\n  width: 96%; }\n\n.user-container {\n  margin-top: 10px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto;\n      grid-template-columns: auto auto auto;\n  grid-gap: 5px;\n  padding: 0 10px;\n  width: 90%;\n  list-style-type: none; }\n\n.user-block:hover {\n  cursor: pointer;\n  border: 1px solid #38a3a5;\n  border-top: 3px solid #38a3a5;\n  background: white; }\n\n.user-block:hover hr {\n    border-top: 1px solid #a1a1a194; }\n\n.user-block:focus {\n  border: 1px solid #38a3a5;\n  outline: none; }\n\n.user-block {\n  transition: all 0.12s linear;\n  border: 1px solid lightgray;\n  border-top: 3px solid #8d8d8d94;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.045);\n  background: white;\n  border-radius: 3px;\n  padding: 10px 0;\n  width: 130px;\n  height: 400 px;\n  text-align: center; }\n\n.user-block hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #e6e6e6;\n    margin: 1em 0;\n    padding: 0; }\n\n.user-block a {\n    font-size: .8em;\n    text-decoration: none;\n    color: #37393a;\n    text-align: left; }\n\n.user-block div {\n    margin-top: 10px;\n    margin-left: 3px;\n    text-align: left; }\n\n.fade-in {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n"

/***/ }),

/***/ "./src/app/components/home-suggests/home-suggests.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/home-suggests/home-suggests.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeSuggestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSuggestsComponent", function() { return HomeSuggestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
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
            template: __webpack_require__(/*! ./home-suggests.component.html */ "./src/app/components/home-suggests/home-suggests.component.html"),
            styles: [__webpack_require__(/*! ./home-suggests.component.scss */ "./src/app/components/home-suggests/home-suggests.component.scss")],
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
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeSuggestsComponent);
    return HomeSuggestsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"alert\" *ngIf=\"!alert.empty()\"> \n  <a class=\"close\" (click)=\"alert.close()\"></a>\n  <h4>{{alert.title}}</h4> {{alert.body}}\n</div>\n\n<div>\n  <app-home-search ></app-home-search>\n  <app-home-suggests></app-home-suggests>\n</div>\n\n<app-home-panel></app-home-panel>\n\n\n\n\n<ngx-smart-modal #profileType  [customClass]=\"'large-modal'\" identifier=\"profileType\" [closable]=\"false\" [dismissable]=\"false\" [autostart]=\"false\">\n  <pre>Welcome {{firstName}}, how would you describe yourself ?</pre>\n    <button class=\"button\" (click)=\"updateProfileType('speaker')\">I am a Speaker</button>\n    <button class=\"button\" (click)=\"updateProfileType('teacher')\">I am a Teacher</button>\n  <div class=\"footer\"> This information helps us match you with the right accounts</div>\n</ngx-smart-modal>\n\n<span *ngIf=\"launchModal == true\">{{initModal()}}</span>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  background-color: #333; }\n\n.suggests {\n  width: 33.5%;\n  -webkit-transform: translate(0, 3%);\n          transform: translate(0, 3%);\n  background-color: #8d9732; }\n\n.panel {\n  float: right; }\n\n.left-block {\n  float: left; }\n\n.close {\n  position: absolute;\n  right: 23px;\n  top: 64px;\n  width: 25px;\n  height: 25px;\n  opacity: 0.3; }\n\n.close:hover {\n  opacity: 1;\n  cursor: pointer; }\n\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 20px;\n  width: 2px;\n  background-color: #333; }\n\n.close:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.close:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.large-modal {\n  max-width: 30%;\n  margin-top: 35%; }\n\npre {\n  display: block;\n  text-align: center;\n  font-size: 20px;\n  unicode-bidi: embed;\n  font-family: arial;\n  white-space: pre;\n  overflow-x: auto;\n  background-color: #f3f3f3;\n  color: #285070;\n  margin: 0;\n  padding: .7rem;\n  border-radius: 4px; }\n\n.buttons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 10px auto; }\n\n.button {\n  display: flex;\n  overflow: hidden;\n  margin: 40px;\n  padding: 15px 15px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 60ms ease-in-out;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none !important;\n  text-transform: none;\n  text-transform: capitalize;\n  color: snow;\n  background: #2c6d99;\n  border: 0 none;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  justify-content: center;\n  align-items: center; }\n\n.button:hover {\n    transition: all 60ms ease;\n    opacity: .85; }\n\n.button:active {\n    transition: all 60ms ease;\n    opacity: .75; }\n\n.button:focus {\n    outline: 1px dotted #959595;\n    outline-offset: -4px; }\n\n.footer {\n  border-top: 0.1rem solid rgba(49, 123, 172, 0.521);\n  font-weight: 400;\n  margin-top: 3rem;\n  line-height: 2;\n  text-align: center;\n  font-size: 12px;\n  color: #000; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
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
    function HomeComponent(data, router, alertRes, auth, topBar, ngxSmartModalService) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.alertRes = alertRes;
        this.auth = auth;
        this.topBar = topBar;
        this.ngxSmartModalService = ngxSmartModalService;
        this.launchModal = true;
        this.alertDisabled = false;
        this.alert = {
            title: "",
            body: "",
            empty: function () { if (_this.alert.title == "" && _this.alert.body == "" || _this.alertDisabled == true)
                return true; },
            close: function () { _this.alertDisabled = true; }
        };
        if (localStorage.getItem("profileType") != "set")
            this.launchModal = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; });
        this.alertRes.mainAlert().subscribe(function (alert) {
            _this.alert.title = alert[0].title;
            _this.alert.body = alert[0].body;
        });
        this.topBar.ngOnInit();
    };
    HomeComponent.prototype.initModal = function () {
        this.firstName = localStorage.getItem("firstName");
        if (localStorage.getItem("profileType") != "set")
            this.ngxSmartModalService.getModal("profileType").open();
        this.launchModal = false;
    };
    HomeComponent.prototype.updateProfileType = function (type) {
        this.ngxSmartModalService.getModal("profileType").close();
        this.data.updateProfileType(type).subscribe(function (res) {
            console.log(res);
        });
    };
    HomeComponent.prototype.showDetails = function (id) {
        this.router.navigate(['details/' + id]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_5__["TopbarComponent"]],
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_5__["TopbarComponent"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/plan/plan.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/plan/plan.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    &nbsp; Plan allows you to manage meetings and modify profile parameters.\n  </p>"

/***/ }),

/***/ "./src/app/components/plan/plan.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/plan/plan.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/plan/plan.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/plan/plan.component.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./plan.component.html */ "./src/app/components/plan/plan.component.html"),
            styles: [__webpack_require__(/*! ./plan.component.scss */ "./src/app/components/plan/plan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlanComponent);
    return PlanComponent;
}());



/***/ }),

/***/ "./src/app/components/topbar/topbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav id=\"navigation\">\n\n    <ul class=\"topnav\">  \n\n  \n      <li class=\"topnav-centered\"> <a href=\"https://www.dreamwakers.org/\" \n                [class.activated] = \"currentUrl != nil\"> Dreamwakers </a></li>\n  \n      <li><a routerLink=\"home\" \n                [class.activated] = \"currentUrl == '/home'\"\n                [class.not-activated] = \"currentUrl != '/home'\"> Home </a></li>\n  \n      <li>  <a routerLink=\"flashchats\" \n                [class.activated] = \"currentUrl == '/flashchats'\"\n                [class.not-activated] = \"currentUrl != '/flashchats'\"> Flashchats</a> </li>\n      \n      <li>  <a routerLink=\"plan\" \n                [class.activated] = \"currentUrl == '/plan'\"\n                [class.not-activated] = \"currentUrl != '/plan'\"> Plan</a> </li>\n        \n\n       <li style=\"float: right\" *ngIf=\"signedIn()\"> <a (click)=\"signOut()\" id=\"sign-out\" \n                [class.activated] = \"currentUrl == '/'\"\n                [class.not-activated] = \"currentUrl != '/'\">Sign out</a> </li>\n        <li style=\"float: right\" *ngIf=\"signedIn()\"> <a id=\"fullName\" \n                [class.activated] = \"currentUrl == '/'\"\n                [class.not-activated] = \"currentUrl != '/'\">{{fullName}}</a> </li>\n  \n  \n    </ul>\n  \n  </nav>\n\n\n  "

/***/ }),

/***/ "./src/app/components/topbar/topbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sign-out:hover {\n  cursor: pointer; }\n\n#navigation ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: white;\n  border-radius: 2px;\n  border-top: 1px solid #f1f1f1;\n  border-bottom: 1px solid #cacaca; }\n\n#navigation li {\n  float: left; }\n\n#navigation li a {\n  display: block;\n  text-align: center;\n  padding: 15px 12px;\n  text-decoration: none;\n  border-radius: 2px;\n  text-decoration: none; }\n\n#navigation li a:hover:not(.active) {\n  color: #40b7b9; }\n\n#navigation .activated {\n  border-bottom: 2px solid #38a3a5;\n  color: #38a3a5; }\n\n#navigation .not-activated {\n  color: inherit; }\n\n.topnav {\n  position: relative;\n  overflow: hidden;\n  background-color: #333; }\n\n.topnav-centered a {\n  float: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ "./src/app/components/topbar/topbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
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
    function TopbarComponent(router, auth, data) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.data = data;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentUrl = e.url;
            }
        });
    }
    TopbarComponent.prototype.ngOnInit = function () {
        //this.fullName = this.data.profileData.firstName+" "+this.data.profileData.lastName
    };
    TopbarComponent.prototype.signedIn = function () {
        return this.auth.isUserIn();
    };
    TopbarComponent.prototype.signOut = function () {
        this.auth.signOut();
        this.router.navigate(['/auth']);
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/components/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/components/topbar/topbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
        if (this.auth.isUserIn()) {
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
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/logged.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/logged.guard.ts ***!
  \****************************************/
/*! exports provided: LoggedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedGuard", function() { return LoggedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedGuard = /** @class */ (function () {
    function LoggedGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoggedGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isUserIn()) {
            this.router.navigate(['/home']);
            return false;
        }
        else
            return true;
    };
    LoggedGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoggedGuard);
    return LoggedGuard;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.service */ "./src/app/services/environment.service.ts");
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
    function AlertService(http, envir) {
        this.http = http;
        this.envir = envir;
    }
    AlertService.prototype.mainAlert = function () {
        return this.http.get(this.envir.getServer("noEncode") + '/alerts/id/main');
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment.service */ "./src/app/services/environment.service.ts");
/* harmony import */ var _linkedin_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linkedin-login.service */ "./src/app/services/linkedin-login.service.ts");
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
    function AuthService(http, data, envir, linkedinLogin) {
        this.http = http;
        this.data = data;
        this.envir = envir;
        this.linkedinLogin = linkedinLogin;
        this.sessionId = 0;
    }
    AuthService.prototype.isUserIn = function () {
        if (localStorage.getItem("userIn") == "true")
            return true;
        else {
            if (localStorage.getItem("oneCheck") == "true") {
                return false;
            }
            else
                this.verifyIfUserIn();
        }
    };
    AuthService.prototype.verifyIfUserIn = function () {
        this.http.get(this.linkedinLogin.web_server + "/auth/session/isactive/" + localStorage.getItem("sessionId")).subscribe(function (res) {
            if (res.session == "false")
                localStorage.setItem("oneCheck", "true");
            else
                localStorage.setItem("userIn", "true");
        }, function (err) {
            console.log("Could not verify session: " + err);
            localStorage.setItem("oneCheck", "true");
            return false;
        });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        localStorage.setItem("userIn", "false");
        localStorage.setItem("oneCheck", "false");
        this.http.get(this.linkedinLogin.web_server + "/auth/session/destroy/" + localStorage.getItem("sessionId")).subscribe(function (res) {
            console.log(res);
            _this.data.clearStorage();
        }, function (err) {
            console.log("error: could not sign out: " + err);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"],
            _linkedin_login_service__WEBPACK_IMPORTED_MODULE_4__["LinkedinLoginService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.service */ "./src/app/services/environment.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function DataService(http, envir, cookies, router) {
        this.http = http;
        this.envir = envir;
        this.cookies = cookies;
        this.router = router;
    }
    DataService.prototype.getUsers = function () {
        return this.http.get(this.envir.getServer("noEncode") + '/users');
    };
    DataService.prototype.getUser = function (userId) {
        return this.http.get(this.envir.getServer("noEncode") + '/users/item/' + userId);
    };
    DataService.prototype.postUser = function () {
        return this.http.get(this.envir.getServer("noEncode") + '/posts');
    };
    DataService.prototype.saveUserData = function (data) {
        this.profileData = data;
        localStorage.setItem("sessionId", data.sessionId);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("oneCheck", "false");
        console.log(this.profileData);
    };
    //called from home
    DataService.prototype.updateProfileType = function (type) {
        localStorage.setItem("profileType", "set");
        return this.http.get(this.envir.getServer("noEncode") + '/auth/updateProfileType/' + type + "/" + localStorage.getItem("sessionId"));
    };
    //called from home to verify if type modal should be opened
    DataService.prototype.setProfileHasType = function () {
        if (this.profileData.type != null)
            localStorage.setItem("profileType", "set");
    };
    //called at login and logout
    DataService.prototype.clearStorage = function () {
        localStorage.removeItem("profileType"); //clean for potential =>false
        localStorage.removeItem("firstName");
        localStorage.removeItem("sessionId");
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/environment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/environment.service.ts ***!
  \*************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
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

/*
  #to serve from
      localhost, set
            "online" to "false"
            "local_port" to your local port value, e.g: "4200"
      website, set
            "online" to "true"
            "website" to your linkedin-saved web host value
  #to connect to
      local_server, set
            "serverOnline" to "false"
            "local_port" to your local_server port value, e.g: "5000"
      webHosted_server, set
            "serverOnline" to "true"
            "webHosted_server" to your server web address
*/
var EnvironmentService = /** @class */ (function () {
    function EnvironmentService() {
        /* SET TO APPROPRIATE VALUES */
        this.online = true;
        this.serverOnline = true;
        //the front-end distributor
        this.website = "https://isaackbn.github.io/dreamwakers";
        this.local_port = "4200";
        //the back-end service
        this.webHosted_server = "https://dreamwakers.herokuapp.com";
        this.local_server_port = "5000";
    }
    EnvironmentService.prototype.getFrontEndWebsite = function (str) {
        if (this.online) {
            if (str == "encode")
                return encodeURIComponent(this.website).replace(/\./g, '%2E');
            else
                return this.website;
        }
        else {
            if (str == "encode")
                return encodeURIComponent("http://localhost:") + encodeURIComponent(this.local_port);
            else
                return "http://localhost:" + this.local_port;
        }
    };
    EnvironmentService.prototype.getServer = function (str) {
        if (this.serverOnline) {
            if (str == "encode")
                return encodeURIComponent(this.webHosted_server);
            else
                return this.webHosted_server;
        }
        else {
            if (str == "encode")
                return encodeURIComponent("http://localhost:") + encodeURIComponent(this.local_server_port);
            else
                return "http://localhost:" + this.local_server_port;
        }
    };
    EnvironmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EnvironmentService);
    return EnvironmentService;
}());



/***/ }),

/***/ "./src/app/services/linkedin-login.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/linkedin-login.service.ts ***!
  \****************************************************/
/*! exports provided: LinkedinLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinLoginService", function() { return LinkedinLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.service */ "./src/app/services/environment.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  #set "path_for_auth" to your linkedin redirect path, e.g: "/auth/redirected"

  note: in your linkedin settings, the "website" and "path_for_auth" values are merged in the "Authorized Redirect URLs"
  e.g: "https://mywebsite.com/auth/redirected"
*/
var LinkedinLoginService = /** @class */ (function () {
    function LinkedinLoginService(http, envir, cookies) {
        this.http = http;
        this.envir = envir;
        this.cookies = cookies;
        /* SET TO APPROPRIATE VALUES */
        this.path_for_auth_request = "/auth/init";
        this.state = "DCEeFWg45A53sdfKef424";
        this.scope = "r_basicprofile";
        this.clientId = "77bhchu07m7fuk";
        this.path_for_auth = "/auth/redirected";
        this.website = envir.getFrontEndWebsite("encode");
        this.web_server = envir.getServer("noEncode");
        this.path_for_auth = encodeURIComponent(this.path_for_auth);
        this.redirectUri = this.website + this.path_for_auth;
    }
    LinkedinLoginService.prototype.getCode_link = function () {
        return "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=" + this.clientId + "&redirect_uri=" + this.redirectUri + "&state=" + this.state + "&scope=" + this.scope;
    };
    LinkedinLoginService.prototype.fetchUserData = function () {
        localStorage.removeItem("profileType"); //clean for potential =>false
        return this.http.get(this.web_server + this.path_for_auth_request + "/" + this.authorization_code + "/" + this.redirectUri + "/" + this.clientId);
    };
    LinkedinLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], LinkedinLoginService);
    return LinkedinLoginService;
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