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
        path: 'home/search/:word',
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
    }
    // },  
    // {
    //   path:'auth',
    //   canActivate:[AuthGuard],
    //   component: TopbarComponent
    // },
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

module.exports = "\n\n<div id=\"navigation\">\n  <app-topbar></app-topbar>\n</div>\n\n<div id=\"container\" style=\"margin-top: 50px;\">\n    <router-outlet></router-outlet>\n</div>\n\n\n"

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
/* harmony import */ var _components_forms_speaker_form_speaker_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/forms/speaker-form/speaker-form.component */ "./src/app/components/forms/speaker-form/speaker-form.component.ts");
/* harmony import */ var _components_home_calendar_home_calendar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home-calendar/home-calendar.component */ "./src/app/components/home-calendar/home-calendar.component.ts");
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
                _components_forms_speaker_form_speaker_form_component__WEBPACK_IMPORTED_MODULE_22__["SpeakerFormComponent"],
                _components_home_calendar_home_calendar_component__WEBPACK_IMPORTED_MODULE_23__["HomeCalendarComponent"],
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

module.exports = "\n\n\n\n<!-- <i id=\"loadIcon\" class=\"fa fa-spinner fa-spin\"></i> -->\n<div class=\"loader\"></div>\n\n\n<p style=\"text-align: center;\"> <br> {{pageText}}</p>\n"

/***/ }),

/***/ "./src/app/components/auth-redirected/auth-redirected.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/auth-redirected/auth-redirected.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loadIcon {\n  font-size: 75px;\n  position: absolute;\n  margin-top: 150px;\n  left: 0;\n  margin-left: 600px;\n  color: #aca9a9; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite;\n  margin-left: 560px; }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function AuthRedirectedComponent(route, router, linkedinLoginService, data, auth) {
        this.route = route;
        this.router = router;
        this.linkedinLoginService = linkedinLoginService;
        this.data = data;
        this.auth = auth;
        this.pageText = "If you are not redirected automatically, Please Sign out from the linkedin website and try again.";
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
                this.linkedinLoginService.fetchProfileData().subscribe(function (res) {
                    var resp = res;
                    if (resp.auth == "success")
                        _this.data.emitProfileData(resp, "route/home");
                    else if (resp.err == "userIn")
                        _this.router.navigate(['/home']);
                    else if (resp.err == "sExpired") {
                        _this.router.navigate(['/auth']);
                        console.log("please sign in again");
                    }
                    else
                        _this.router.navigate(['/auth']); //other errors
                }, function (err) { if (err.status == 0)
                    _this.oopsMessage(); });
            }
            else {
                console.log("error - access code not retrieved");
                //show this.linkedinErrorDescription
            }
        }
    };
    AuthRedirectedComponent.prototype.oopsMessage = function () {
        var _this = this;
        this.pageText = "Oops..  this service is not available. Contact us for more information.";
        setTimeout(function () {
            setTimeout(function () {
                _this.router.navigate(['/auth']);
            }, 4000);
            _this.pageText = "We are working on the issue, please try again later.";
        }, 4000);
    };
    AuthRedirectedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-redirected',
            template: __webpack_require__(/*! ./auth-redirected.component.html */ "./src/app/components/auth-redirected/auth-redirected.component.html"),
            styles: [__webpack_require__(/*! ./auth-redirected.component.scss */ "./src/app/components/auth-redirected/auth-redirected.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_linkedin_login_service__WEBPACK_IMPORTED_MODULE_2__["LinkedinLoginService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
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

module.exports = "\n\n\n\n\n\n<!-- <button (click)=\"ngxSmartModalService.getModal('myModal').open()\">Open myModal</button> -->\n\n\n\n\n\n<!-- <video autoplay muted loop id=\"video\">\n    <source src=\"{{url}}\" type=\"video/mp4\">\n    Your browser does not support HTML5 video.\n</video> -->\n\n<div  [innerHTML]=\"videoTag\"></div>\n\n\n\n <ngx-smart-modal #myModal  [customClass]=\"'large-modal'\" identifier=\"myModal\" [closable]=\"false\" [dismissable]=\"false\" [autostart]=\"true\">\n\n    <pre>&nbsp;</pre>\n    \n    <span class= \"buttons\">\n        <a class=\"button\" href={{loginLink}}>Sign in with Linkedin</a>\n    </span>\n\n    <div class=\"footer\">For security reasons, we require that all users use their Linkedin accounts.</div>\n\n  </ngx-smart-modal>\n"

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

module.exports = "\n\n\n\n\n<span *ngIf='hasData()' class=\"user-container\">\n  <span class=\"user-block\">\n\n    <span style=\" color:rgb(127, 128, 129); font-size:1.6e;\"> {{user.firstName}} {{user.lastName}} </span>\n    <hr>\n    <img class=\"profile-img\" src={{user.pictureUrl}} alt=\"img\" >\n    <hr>\n\n    <div style=\"margin-left: 50px\" *ngIf=\"user.industry != ''\">\n      <span style=\"color:rgb(133, 137, 138);text-decoration: underline;\"> Industry:</span> \n      <span class=\"profession\" > &nbsp;{{user.industry}}</span> \n    </div>\n\n    <div class=\"detail\" style=\"text-align: center;text-decoration: underline;\"> {{user.headline}}</div>\n\n    <div style=\"margin-left: 50px;margin-top:20px;\" *ngIf=\"user.summary != ''\"> \n      <span style=\"margin-left: 0px;color:rgb(133, 137, 138); text-decoration: underline;\" > Summary:</span> \n      <span style=\"font-size: 0.85em;\"> &nbsp;{{user.summary}} </span>\n    </div>\n    <button class=\"button\" style=\"margin-top: 30px;\">connect <i class=\"fa fa-user-o \" style=\"margin-left:6px; font-size:16px\"></i></button>\n    \n  </span>\n\n\n</span>"

/***/ }),

/***/ "./src/app/components/details/details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%; }\n\n.profession {\n  color: #069db1;\n  font-size: .95em; }\n\n.detail {\n  font-size: 0.8em; }\n\n.profession:hover {\n  cursor: pointer; }\n\n.detail:hover {\n  cursor: pointer; }\n\n#separator {\n  margin-left: 10px;\n  border-top: 1px solid #d8d8d8;\n  width: 96%; }\n\n.user-container {\n  margin-top: 20px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto;\n      grid-template-columns: auto;\n  grid-gap: 5px;\n  padding: 0 10px;\n  width: 100%;\n  list-style-type: none; }\n\n.user-block {\n  transition: all 0.12s linear;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.045);\n  border-radius: 3px;\n  padding: 10px 0;\n  width: 730px;\n  min-height: 700px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  border: 1px solid #bfcfcf;\n  border-top: 3px solid #a6bebe;\n  background: white; }\n\n.user-block hr {\n    border-top: 1px solid #a1a1a194; }\n\n.user-block hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #e6e6e6;\n    margin: 1em 0;\n    padding: 0; }\n\n.user-block a {\n    font-size: .8em;\n    text-decoration: none;\n    color: #37393a;\n    text-align: left; }\n\n.user-block div {\n    margin-top: 10px;\n    margin-left: 3px;\n    text-align: left; }\n\n.fade-in {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.profile-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 3px;\n  margin-top: 3px;\n  width: 320px;\n  height: 320px;\n  border: 2px solid #b6c7c7; }\n\n.profile-img:hover {\n  cursor: pointer; }\n\n.button {\n  background-color: #9c9c9c;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: lighter;\n  margin: 2px 0px;\n  border-radius: 2px;\n  width: 150px;\n  cursor: pointer;\n  top: 40px;\n  margin-left: 20px; }\n"

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
    function DetailsComponent(data, route, router) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) { return _this.userId = params.id; });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.user.subscribe(function (userData) { return _this.user = userData; });
        this.data.getUser(this.userId, null);
    };
    DetailsComponent.prototype.hasData = function () {
        return (typeof this.user != 'undefined');
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/components/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

/***/ "./src/app/components/forms/speaker-form/speaker-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/speaker-form/speaker-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"container\">\n    <form>\n      <div class=\"block\">\n        <p>\n          <span class=\"title\">Race</span>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"black\">\n          <label>Black or African American</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"white\">\n          <label>White</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"asian\">\n          <label>Asian</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"notSpecified\">\n          <label>Not Specified</label>\n        </p>\n        <hr>\n        <p>\n          <span class=\"title\">Gender</span>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"male\"> <!--other types include \"radio\"-->\n          <label>Male</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"female\">\n          <label>Female</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"other\">\n          <label>Other</label>\n        </p>\n        <hr>\n        <p>\n          <span class=\"title\">Age Range</span>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"male\">\n          <label>18-24</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"female\">\n          <label>25-34</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"other\" checked>\n          <label>35-49</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"other\">\n          <label>50-64</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"other\">\n          <label>65 and older</label>\n        </p>\n        <!-- <p class=\"form-group\">\n          <label for=\"name\">Age </label>\n          <br>\n          <input type=\"text\" class=\"form-control\" id=\"name\" required>\n        </p> -->\n      </div>\n\n      <br><hr>\n      <div class=\"block\">\n\n        <p class=\"form-group\">\n          <label for=\"college\" class=\"title\">College</label>\n          <br>\n          <select class=\"form-control\" id=\"colleges\" required>\n            <option *ngFor=\"let college of colleges\" [value]=\"college\">{{college}}</option>\n          </select>\n        </p>\n\n        <p class=\"form-group\">\n          <label for=\"industry\" class=\"title\">Industry</label>\n          <br>\n          <select class=\"form-control\" id=\"industries\" required>\n          <option *ngFor=\"let industry of industries\" [value]=\"industry\">{{industry}}</option>\n          </select>\n        </p>\n\n\n        <p>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"immigrant\" value=\"black\">\n          <label>First generation immigrant</label>\n        </p>\n\n    </div>\n\n\n      <!-- <button type=\"submit\" class=\"btn btn-success\">Submit</button> -->\n\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/forms/speaker-form/speaker-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/speaker-form/speaker-form.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  font-size: .9em; }\n\n.block:focus {\n  border: 1px solid #38a3a5;\n  outline: none; }\n\n.block {\n  transition: all 0.12s linear;\n  background: white;\n  border-radius: 3px;\n  padding-left: 5px;\n  width: 95%;\n  height: 400 px;\n  font-weight: lighter;\n  font-size: .9em; }\n\nhr {\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #e6e6e6; }\n\n.title {\n  color: #38a3a5; }\n"

/***/ }),

/***/ "./src/app/components/forms/speaker-form/speaker-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/speaker-form/speaker-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: SpeakerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerFormComponent", function() { return SpeakerFormComponent; });
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

var SpeakerFormComponent = /** @class */ (function () {
    function SpeakerFormComponent() {
        this.submitted = false;
        this.colleges = ["", "Bowdoin", "Colby"];
        this.industries = ["", "Computer Software", "Education"];
    }
    SpeakerFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    SpeakerFormComponent.prototype.ngOnInit = function () {
    };
    SpeakerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speaker-form',
            template: __webpack_require__(/*! ./speaker-form.component.html */ "./src/app/components/forms/speaker-form/speaker-form.component.html"),
            styles: [__webpack_require__(/*! ./speaker-form.component.scss */ "./src/app/components/forms/speaker-form/speaker-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakerFormComponent);
    return SpeakerFormComponent;
}());



/***/ }),

/***/ "./src/app/components/home-calendar/home-calendar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/home-calendar/home-calendar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n  <div class=\"title\">Feed</div>\n  <hr>\n  <div id=\"event-note\"> You have <span id=\"event-number\" *ngIf='eventNumber > 0'> {{eventNumber}} </span><span *ngIf='eventNumber == 0'> no </span>  events coming up.</div>\n  <hr>\n  <br>\n  \n  <div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/home-calendar/home-calendar.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/home-calendar/home-calendar.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #e6e6e6; }\n\n.container {\n  margin-top: 10px;\n  position: absolute;\n  background-color: white;\n  margin-left: 438px;\n  color: #1f1f1f;\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  padding: 10px;\n  min-height: 800px;\n  width: 500px; }\n\n.title {\n  color: #696969;\n  font-weight: lighter;\n  font-size: .85em; }\n\n#event-note {\n  margin-top: 10px;\n  font-weight: lighter;\n  font-size: .9em;\n  width: 100%;\n  color: #38a3a5; }\n\n#event-note:hover {\n  cursor: pointer;\n  color: #5cbbbb; }\n\n#event-note:hover #event-number {\n    background-color: #da5e4e; }\n\n#event-number {\n  background-color: #d34f3d;\n  text-align: center;\n  font-family: 'Trebuchet MS', sans-serif;\n  font-size: 13px;\n  padding: 3px 4px 3px 6px;\n  border-radius: 40%;\n  margin-right: 5px;\n  color: white; }\n\n#video {\n  border: 1px solid #555353;\n  border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/components/home-calendar/home-calendar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/home-calendar/home-calendar.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCalendarComponent", function() { return HomeCalendarComponent; });
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

var HomeCalendarComponent = /** @class */ (function () {
    function HomeCalendarComponent() {
        this.eventNumber = 0;
        this.videoUrl = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4";
    }
    HomeCalendarComponent.prototype.ngOnInit = function () {
    };
    HomeCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-calendar',
            template: __webpack_require__(/*! ./home-calendar.component.html */ "./src/app/components/home-calendar/home-calendar.component.html"),
            styles: [__webpack_require__(/*! ./home-calendar.component.scss */ "./src/app/components/home-calendar/home-calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeCalendarComponent);
    return HomeCalendarComponent;
}());



/***/ }),

/***/ "./src/app/components/home-panel/home-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-panel/home-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n\n  <div id=\"title\"> Speakers filter</div>\n<br>\n  <app-speaker-form></app-speaker-form>\n  \n  \n</div>"

/***/ }),

/***/ "./src/app/components/home-panel/home-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-panel/home-panel.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: fixed;\n  left: 0;\n  margin-left: 967px;\n  margin-top: 10px;\n  background-color: white;\n  color: #1f1f1f;\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  padding: 10px;\n  min-height: 630px;\n  border: 1px solid #b9cece;\n  width: 197px; }\n\n#title {\n  color: #696969;\n  font-weight: lighter;\n  font-size: .85em; }\n"

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

module.exports = "\n  <div id=\"container\">\n    \n    <!-- <div>\n      <input type=\"text\" class=\"searchTerm\" placeholder=\"search speaker ...\" (input)='newSearch($event.target.value)'>\n      <button type=\"submit\" class=\"searchButton\">\n        <i class=\"material-icons\">search</i>\n      </button>\n    </div> -->\n\n\n\n\n  <span id=\"left\">\n      <ul class=\"user-container\"> <!--[@listStagger]=\"users$\"-->\n        <li *ngFor=\"let speaker of speakers\" class=\"user-block\" (click)=\"showDetails(speaker.id)\">\n          <a id=\"username\" routerLink=\"details/{{speaker.id}}\"> {{speaker.firstName}} {{speaker.lastName}}</a>\n          <hr>\n          <img class=\"profile-img\" src={{speaker.pictureUrl}} alt=\"img\" >\n          <hr>\n          <div class=\"profession\">{{speaker.industry}}</div>\n          <div class=\"detail\">{{speaker.headline}}</div>\n          <div class=\"detail\">{{speaker.location}}</div>\n        </li>\n      </ul>\n  </span>"

/***/ }),

/***/ "./src/app/components/home-search/home-search.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-search/home-search.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 430px;\n  float: left; }\n\n#search-results {\n  margin-left: 15px;\n  margin-top: 15px;\n  width: 411px; }\n\n.searchTerm {\n  float: left;\n  width: 395px;\n  border: 1px solid #dddddd;\n  padding: 5px;\n  height: 20px;\n  border-radius: 2px;\n  margin-left: 9px;\n  margin-top: 15px;\n  outline: none;\n  color: #dddddd;\n  font-size: 16px;\n  font-weight: lighter; }\n\n.searchTerm:focus {\n  color: black;\n  font-size: 16px;\n  font-weight: lighter; }\n\n.searchButton {\n  margin-top: 15px;\n  margin-left: -3px;\n  width: 40px;\n  height: 34px;\n  border: 0.01px solid #252525;\n  background: #e0dfdf;\n  text-align: center;\n  color: #707070;\n  border-radius: 1px;\n  cursor: pointer;\n  font-size: 30px; }\n\n.searchButton:focus {\n  outline: none;\n  color: black; }\n\n::-webkit-input-placeholder {\n  color: #929090;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  color: #929090;\n  opacity: 1;\n  /* Firefox */ }\n\n::-ms-input-placeholder {\n  color: #929090;\n  opacity: 1;\n  /* Firefox */ }\n\n::placeholder {\n  color: #929090;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #929090; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #929090; }\n\n#container {\n  width: 430px; }\n\n#left {\n  float: left; }\n\n#suggested {\n  text-align: center;\n  color: #696969;\n  margin-top: 15px;\n  font-weight: lighter;\n  font-size: .9em; }\n\n.profession {\n  color: #069db1;\n  font-size: .70em;\n  font-family: 'Lucida Grande';\n  font-weight: lighter; }\n\n.detail {\n  font-size: 0.65em;\n  font-family: 'Lucida Grande';\n  color: #525252;\n  font-weight: lighter; }\n\n#separator {\n  margin-left: 10px;\n  border-top: 1px solid #d8d8d8;\n  width: 96%; }\n\n.user-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto;\n      grid-template-columns: auto auto auto;\n  grid-gap: 5px;\n  padding: 0 10px;\n  width: 90%;\n  list-style-type: none; }\n\n.user-block:hover {\n  cursor: pointer;\n  border: 1px solid #38a3a5;\n  background: white; }\n\n.user-block:hover hr {\n    border-top: 1px solid #a1a1a194; }\n\n.user-block:focus {\n  border: 1px solid #38a3a5;\n  outline: none; }\n\n.user-block {\n  transition: all 0.12s linear;\n  border: 1px solid lightgray;\n  background: white;\n  border-radius: 3px;\n  padding: 5px 0;\n  width: 130px;\n  height: 400 px;\n  text-align: center; }\n\n.user-block hr {\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #e6e6e6; }\n\n.user-block a {\n    font-size: .8em;\n    text-decoration: none;\n    color: #37393a;\n    text-align: left; }\n\n.user-block div {\n    margin-top: 5px;\n    margin-left: 3px;\n    text-align: left; }\n\n.fade-in {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.profile-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 0.3px;\n  width: 120px;\n  height: 120px; }\n\n#username {\n  font-family: 'Lucida Grande';\n  color: #525252;\n  font-weight: lighter; }\n"

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



var HomeSearchComponent = /** @class */ (function () {
    function HomeSearchComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    HomeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observer = this.data.speakers.subscribe(function (speakersData) {
            if (JSON.stringify(_this.speakers) != JSON.stringify(speakersData))
                _this.speakers = speakersData;
        });
    };
    HomeSearchComponent.prototype.showDetails = function (userId) {
        this.router.navigate(['details/' + userId]);
    };
    HomeSearchComponent.prototype.ngOnDestroy = function () {
        this.observer.unsubscribe();
    };
    HomeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-search',
            template: __webpack_require__(/*! ./home-search.component.html */ "./src/app/components/home-search/home-search.component.html"),
            styles: [__webpack_require__(/*! ./home-search.component.scss */ "./src/app/components/home-search/home-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "\n<div id=\"container\">\n  \n  <span id=\"left\" *ngIf=\"showLoadIcon == false\">\n      <!-- <hr id=\"separator\"> -->\n      <p id=\"title\" class=\"profession\"> Suggestions</p> <!--{{suggestedCount}}-->\n\n    <ul class=\"user-container\"> <!--[@listStagger]=\"users\"-->\n      <li *ngFor=\"let user of users\" class=\"user-block\" (click)=\"showDetails(user.id)\">\n        <a id=\"username\" routerLink=\"details/{{user.id}}\"> {{user.firstName}} {{user.lastName}}</a>\n        <hr>\n        <img class=\"profile-img\" src={{user.pictureUrl}} alt=\"img\" >\n        <hr>\n        <div class=\"profession\"> {{user.industry}} </div>\n        <div class=\"detail\"> {{user.headline}} </div>\n        <div class=\"detail\"> {{user.location}} </div>\n      </li>\n\n      <!-- <li tabIndex=\"-1\" id=\"moreUsers\" style=\"height: 120px;width: 100px\" #moreUsersId class=\"user-block fade-in\">\n          <a id=\"username\" routerLink=\"\"> More Profiles</a>\n          <hr>\n          <i class=\"fa fa-angle-double-right\" style=\"\"></i>\n          <hr>\n          <div class=\"profession\">Profession</div>\n          <div class=\"detail\">Headline</div>\n      </li> -->\n    </ul>\n\n    <p id=\"more\" class=\"profession\">More ({{suggestedCount}})</p>\n      <li *ngFor=\"let user of users\" id=\"more-block\" (click)=\"showDetails(user.id)\">\n        <img class=\"more-img\" src={{user.pictureUrl}} alt=\"img\" >\n        <a id=\"more-item\" routerLink=\"details/{{user.id}}\"> \n          {{user.firstName}} {{user.lastName}} <span *ngIf='user.position != \"\"'>.</span> {{user.position}} </a>\n      </li>\n  </span>\n\n  <div class=\"loader\" *ngIf=\"showLoadIcon == true\"></div>\n\n  <!-- <i id=\"loadIcon\" class=\"fa fa-spinner fa-spin\" *ngIf=\"showLoadIcon == true\"></i> -->\n\n\n</div>\n  \n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/home-suggests/home-suggests.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/home-suggests/home-suggests.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 430px;\n  margin-top: 10px;\n  margin-left: 5px;\n  position: fixed; }\n\n#left {\n  background-color: white;\n  border: 1px solid lightgray;\n  float: left;\n  min-height: 650px; }\n\n#title {\n  color: #696969;\n  margin-left: 15px;\n  font-weight: lighter;\n  font-size: .85em; }\n\n.profession {\n  color: #069db1;\n  font-size: .80em;\n  font-family: 'Lucida Grande';\n  font-weight: lighter; }\n\n.detail {\n  font-size: 0.65em;\n  font-family: 'Lucida Grande';\n  color: #525252;\n  font-weight: lighter; }\n\n#separator {\n  margin-left: 10px;\n  border-top: 1px solid #d8d8d8;\n  width: 96%; }\n\n.user-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto;\n      grid-template-columns: auto auto auto;\n  grid-gap: 5px;\n  padding: 0 10px;\n  width: 90%;\n  list-style-type: none; }\n\n.user-block:hover {\n  cursor: pointer;\n  border: 1px solid #38a3a5;\n  background: white; }\n\n.user-block:hover hr {\n    border-top: 1px solid #a1a1a194; }\n\n.user-block:focus {\n  border: 1px solid #38a3a5;\n  outline: none; }\n\n.user-block {\n  transition: all 0.12s linear;\n  border: 1px solid lightgray;\n  background: white;\n  border-radius: 3px;\n  padding: 5px 0;\n  width: 130px;\n  height: 400 px;\n  text-align: center; }\n\n.user-block hr {\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #e6e6e6; }\n\n.user-block a {\n    font-size: .8em;\n    text-decoration: none;\n    color: #37393a;\n    text-align: left; }\n\n.user-block div {\n    margin-top: 5px;\n    margin-left: 3px;\n    text-align: left; }\n\n.fade-in {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.profile-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 0.3px;\n  width: 120px;\n  height: 120px; }\n\n#username {\n  font-family: 'Lucida Grande';\n  color: #525252;\n  font-weight: lighter; }\n\n#loadIcon {\n  font-size: 55px;\n  position: absolute;\n  margin-top: 150px;\n  left: 0;\n  margin-left: 200px;\n  color: #d1d0d0; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498dbda;\n  width: 60px;\n  height: 60px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite;\n  position: absolute;\n  margin-top: 150px;\n  left: 0;\n  margin-left: 200px; }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n#more {\n  margin-left: 15px; }\n\n#more-block {\n  margin-left: 30px;\n  list-style-type: none;\n  font-size: .8em;\n  color: #37393a;\n  text-align: left;\n  text-decoration: none;\n  padding: 13px; }\n\n#more-block a:link, #more-block a:visited {\n    list-style-type: none;\n    text-decoration: none; }\n\n#more-item {\n  font-family: 'Lucida Grande';\n  color: #525252;\n  font-weight: lighter;\n  margin-left: 10px; }\n\n#more-item:hover {\n  color: #38a3a5; }\n\n.more-img {\n  position: absolute;\n  margin-top: -6px;\n  margin-left: -30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #666666; }\n"

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
        this.suggestedCount = 0;
        this.showLoadIcon = false;
    }
    HomeSuggestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.users.subscribe(function (usersData) {
            _this.suggestedCount = usersData.length;
            _this.users = usersData;
        });
        this.data.getUsers(function (bool) { return _this.showLoadIcon = bool; });
    };
    HomeSuggestsComponent.prototype.ngAfterViewInit = function () {
        // this.moreUsersId.nativeElement.focus();
    };
    HomeSuggestsComponent.prototype.showDetails = function (userId) {
        this.router.navigate(['details/' + userId]);
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

module.exports = "\n\n<div class=\"alert\" *ngIf=\"!alert.empty\"> \n  <a class=\"close\" (click)=\"closeMainAlert()\"></a>\n  <h4>{{alert.title}}</h4> {{alert.body}}\n</div>\n\n<div>\n  <app-home-search ></app-home-search>\n  <app-home-suggests></app-home-suggests>\n</div>\n\n<app-home-calendar></app-home-calendar>\n\n<app-home-panel></app-home-panel>\n\n\n\n<!-- <div class=\"g-hangout\" data-render=\"createhangout\"\n  invites=\"[{ id : 'foo@example.com', invite_type : 'EMAIL' }]\">\n</div> -->\n\n<ngx-smart-modal #profileType  [customClass]=\"'large-modal'\" identifier=\"profileType\" [closable]=\"false\" [dismissable]=\"false\" [autostart]=\"false\">\n  <pre>Welcome {{firstName}}, how would you describe yourself ?</pre>\n    <button class=\"button\" (click)=\"updateProfileType('speaker')\">I am a Speaker</button>\n    <button class=\"button\" (click)=\"updateProfileType('teacher')\">I am a Teacher</button>\n  <div class=\"footer\"> This information helps us match you with the right accounts</div>\n</ngx-smart-modal>\n\n<span *ngIf=\"launchModal == true\">{{initModal()}}</span>"

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
    function HomeComponent(data, router, alertService, ngxSmartModalService, route, auth) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.alertService = alertService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.route = route;
        this.auth = auth;
        this.launchModal = false;
        this.alertDisabled = false;
        this.alert = {
            title: "",
            body: "",
            empty: true
        };
        this.route.params.subscribe(function (params) { return _this.searchSpeaker(params.word); });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileData = this.data.profile.subscribe(function (profileData) {
            _this.firstName = profileData.firstName;
            if (profileData.type == null)
                _this.launchModal = true;
        });
        this.alertsData = this.alertService.alerts.subscribe(function (alertsData) {
            if (alertsData.tag == "main") {
                if (alertsData.status != "empty")
                    _this.alert.empty = false;
                _this.alert.title = alertsData.title;
                _this.alert.body = alertsData.body;
            }
        });
        this.alertService.getAlert("main", null);
    };
    //called from html if launchModal == true
    HomeComponent.prototype.initModal = function () { this.launchModal = false; this.ngxSmartModalService.getModal("profileType").open(); };
    //if profile type selected, close modal and update db
    HomeComponent.prototype.updateProfileType = function (type) {
        this.ngxSmartModalService.getModal("profileType").close();
        this.data.updateProfileType(type).subscribe();
    };
    HomeComponent.prototype.showDetails = function (id) {
        this.router.navigate(['details/' + id]);
    };
    HomeComponent.prototype.closeMainAlert = function () {
        this.alert.empty = true;
        this.alertService.sawAlert("main", null);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.profileData.unsubscribe();
        this.alertsData.unsubscribe();
    };
    HomeComponent.prototype.searchSpeaker = function (word) {
        this.data.getSpeakers(word, null);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_5__["TopbarComponent"]],
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
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

module.exports = "\n\n\n<nav id=\"navigation\">\n\n    <ul class=\"topnav\">  \n\n  \n      <!-- <li class=\"topnav-centered\"> <a href=\"https://www.dreamwakers.org/\" \n                [class.activated] = \"currentUrl != nil\"> Dreamwakers </a></li>\n   -->\n      \n      <li><a routerLink=\"home\">\n                <img class=\"icon\" [src]=\"'assets/img/logo.jpg'\" alt=\"img\" >\n          </a></li>\n      <span id=\"notification-flashchat\" *ngIf=\"seeTabElements == true\">\n        <li>  <a routerLink=\"flashchats\"\n                  [class.activated] = \"currentUrl == '/flashchats'\"\n                  [class.not-activated] = \"currentUrl != '/flashchats'\">\n                  <i class=\"flashchats\tfa fa-group \" style=\"font-size:33px\"></i>\n              </a> </li>\n        <span id=\"notification-icon\" *ngIf=\"notifications > 0\">{{notifications}}</span>\n      </span>\n      <!-- <li>  <a routerLink=\"plan\">\n                <i class=\"\tfa fa-envelope\" style=\"color: white ;font-size:34px\"></i>\n            </a> </li> -->\n\n      <input id=\"searchBarId\" #searchBarId type=\"text\" class=\"searchTerm\" placeholder=\"search speaker ...\" (input)='newSearch($event.target.value)' *ngIf=\"seeTabElements == true\">\n        \n\n      <li style=\"float: right; margin-right: 3%;\" *ngIf=\"signedIn()\"> \n        <a (click)=\"signOut()\" class=\"item\">\n            <i id=\"logout\" class=\"fa fa-sign-out\" style=\"font-size:25px;margin-top:3px;\"></i>\n          </a></li>\n      \n      <span class=\"item\" *ngIf=\"hasData()\" (click)=\"showProfile()\">\n        <li id=\"username\" style=\"float: right\" *ngIf=\"signedIn()\"> <a id=\"fullName\">\n                {{firstName}} {{lastName}} </a> </li>\n    \n        <img class=\"profile-img\" src={{profilePicSrc}} alt=\"img\" (click)=\"showProfile()\">\n      </span>\n\n\n    </ul>\n  </nav>\n\n\n  "

/***/ }),

/***/ "./src/app/components/topbar/topbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item:hover {\n  cursor: pointer; }\n\n#navigation {\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  z-index: 50; }\n\n#navigation ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: white;\n    border-radius: 2px;\n    border-top: 1px solid #dfdfdf;\n    border-bottom: 1px solid #b9b9b9;\n    min-height: 40px; }\n\n#navigation li {\n    float: left; }\n\n#navigation li a {\n    display: block;\n    text-align: center;\n    padding: 0px 12px;\n    margin-top: 7px;\n    text-decoration: none;\n    border-radius: 2px;\n    text-decoration: none; }\n\n#navigation .activated {\n    color: #666666; }\n\n#navigation .not-activated {\n    color: #454646; }\n\n.topnav {\n  position: relative;\n  overflow: hidden;\n  background-color: #333; }\n\n.topnav-centered a {\n  float: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.profile-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  float: right;\n  border-radius: 50%;\n  margin-top: 9px;\n  width: 25px;\n  height: 25px;\n  border: 1px solid #666666; }\n\n.icon {\n  border-radius: 2px;\n  width: 33px;\n  border: 1px solid #b9b9b9; }\n\n#username {\n  margin-right: 3px;\n  margin-top: 7px;\n  font-family: 'Trebuchet MS', sans-serif;\n  color: #525252;\n  font-weight: lighter;\n  font-size: 15px; }\n\n#username:hover {\n  text-decoration: underline; }\n\n.searchTerm {\n  margin-left: 30px;\n  width: 275px;\n  border: 1px solid #a0a0a0;\n  padding: 2px 7px;\n  height: 26px;\n  border-radius: 2px;\n  margin-top: 5px;\n  outline: none;\n  color: #131313;\n  font-size: 14px;\n  font-weight: lighter; }\n\n#logout {\n  color: #454646; }\n\n#logout:hover {\n  color: #7e7e7e; }\n\n.flashchats:hover {\n  color: #7e7e7e; }\n\n#notification-icon {\n  background-color: #d34f3d;\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  text-align: center;\n  font-family: 'Trebuchet MS', sans-serif;\n  font-weight: lighter;\n  font-size: 13px;\n  margin-top: 30px;\n  margin-left: -20px;\n  z-index: 100;\n  color: white; }\n\n#notification-flashchat:hover {\n  background-color: #f05b48; }\n"

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
        this.firstName = "";
        this.lastName = "";
        this.profilePicSrc = "";
        this.seeTabElements = false;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
                _this.currentUrl = e.url;
        });
    }
    TopbarComponent.prototype.ngOnInit = function () {
        //if (localStorage.getItem("sessionId") == null){localStorage.clear();this.signOut()}
        var _this = this;
        this.userDataService = this.data.profile.subscribe(function (profileData) {
            _this.firstName = profileData.firstName;
            _this.lastName = profileData.lastName.charAt(0);
            _this.profilePicSrc = profileData.pictureUrl;
            _this.notifications = profileData.notifications;
            _this.updateTabElements();
            if (typeof _this.profilePicSrc == "undefined")
                _this.profilePicSrc = "assets/img/blank.png"; //after logging out
            if (typeof profileData.order != "undefined" && profileData.order == "sign out")
                _this.signOut();
            if (profileData.action == "signedUp")
                _this.reload(); // refresh page to get signup modal
        });
        this.data.tryPersist(); //for now, emits profile data
    };
    TopbarComponent.prototype.updateTabElements = function () {
        if (this.hasData)
            this.seeTabElements = true;
        else
            this.seeTabElements = false;
    };
    TopbarComponent.prototype.hasData = function () {
        if (this.firstName != "")
            return true;
        else
            return false;
    };
    TopbarComponent.prototype.signedIn = function () {
        return this.auth.isUserIn();
    };
    TopbarComponent.prototype.signOut = function () {
        this.firstName = "";
        this.profilePicSrc = "assets/img/blank.png";
        this.seeTabElements = false;
        if (!this.userDataService == null) {
            this.userDataService.unsubscribe();
        }
        this.router.navigate(['/auth']);
        this.data.signOut();
    };
    TopbarComponent.prototype.reload = function () { location.reload(); };
    TopbarComponent.prototype.ngAfterViewInit = function () {
        if (this.seeTabElements)
            this.searchBarId.nativeElement.focus();
    };
    TopbarComponent.prototype.newSearch = function (word) {
        if (this.currentUrl != "home" && word != "")
            this.router.navigate(['home/search/' + word]);
        if (word != "")
            this.data.getSpeakers(word, null);
        else
            this.data.getSpeakers("*null*", null);
    };
    TopbarComponent.prototype.showProfile = function () {
        this.router.navigate(['details/' + localStorage.getItem("sid")]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchBarId'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TopbarComponent.prototype, "searchBarId", void 0);
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
        if (this.auth.isUserIn())
            return true;
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
        this.alerts = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: topbar, home, auth-redirect
    }
    AlertService.prototype.mainAlert = function () {
        return this.http.get(this.envir.getServer("noEncode") + '/alerts/id/main');
    };
    //REQUEST ALERT
    //called from home,..
    AlertService.prototype.getAlert = function (tag, callback) {
        var sessionId = localStorage.getItem("sid");
        if (sessionId != null)
            this.requestAlert(sessionId, tag, callback);
    };
    //send get alert request
    AlertService.prototype.requestAlert = function (sessionId, tag, callback) {
        var _this = this;
        this.http.get(this.envir.getServer("noEncode") + '/alerts/get/' + sessionId + "/" + tag).subscribe(function (res) {
            var alertObj = res;
            _this.emitAlert(alertObj);
            callback;
        });
    };
    //called here
    AlertService.prototype.emitAlert = function (alertObj) {
        if (typeof alertObj.error != "undefined") {
            console.log("alertObj msg: " + alertObj.error);
            this.alerts.emit(alertObj);
            //if(alertObj.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
            return;
        }
        this.alerts.emit(alertObj);
    };
    //SAW ALERT
    //called from home,..
    AlertService.prototype.sawAlert = function (tag, callback) {
        var sessionId = localStorage.getItem("sid");
        if (sessionId != null)
            this.sawAlertMsg(sessionId, tag, callback);
    };
    //send sawAlert info
    AlertService.prototype.sawAlertMsg = function (sessionId, tag, callback) {
        var _this = this;
        this.http.get(this.envir.getServer("noEncode") + '/alerts/remove/' + sessionId + "/" + tag).subscribe(function (res) {
            var sawAlert_resObj = res;
            _this.emitSawAlertResponse(sawAlert_resObj);
            callback;
        });
    };
    //called here
    AlertService.prototype.emitSawAlertResponse = function (sawAlert_resObj) {
        if (typeof sawAlert_resObj.error != "undefined") {
            console.log("sawAlert_resObj msg: " + sawAlert_resObj.error);
            this.alerts.emit(sawAlert_resObj);
            //if(alertObj.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
            return;
        }
        this.alerts.emit(sawAlert_resObj);
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
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.service */ "./src/app/services/environment.service.ts");
/* harmony import */ var _linkedin_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkedin-login.service */ "./src/app/services/linkedin-login.service.ts");
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





var AuthService = /** @class */ (function () {
    function AuthService(http, envir, linkedinLogin, router) {
        this.http = http;
        this.envir = envir;
        this.linkedinLogin = linkedinLogin;
        this.router = router;
        this.order = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: topbar
        this.serverError = false;
        this.active = false;
        this.isActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: topbar, home, auth-redirect
    }
    AuthService.prototype.isUserIn = function () {
        if (localStorage.getItem("sid") == "")
            this.signOut();
        if (localStorage.getItem("sid") != null) {
            if (this.active)
                return true;
            if (!this.serverError)
                return this.http_isUserIn();
            else
                return false;
        }
        else
            return false;
    };
    //helper
    AuthService.prototype.http_isUserIn = function () {
        var _this = this;
        return this.http.get(this.linkedinLogin.web_server + "/auth/session/isactive/" + localStorage.getItem("sid")).subscribe(function (res) {
            if (res.sid == 1) {
                _this.active = true;
                return true;
            }
            else {
                localStorage.removeItem("sid");
                return false;
            }
        }, function (err) {
            _this.serverError = true;
            console.log("Could not verify session: " + err);
            return false;
        });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        if (localStorage.getItem("sid") == "") {
            localStorage.removeItem("sid");
            //localStorage.setItem("userIn", "false")
            return;
        }
        this.http.get(this.linkedinLogin.web_server + "/auth/session/destroy/" + localStorage.getItem("sid")).subscribe(function (res) {
            var status = res;
            if (status.session = "destroyed") {
                localStorage.removeItem("sid");
                _this.router.navigate(['/auth']);
            }
        }, function (err) {
            console.log("error: could not sign out: " + err);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            _linkedin_login_service__WEBPACK_IMPORTED_MODULE_3__["LinkedinLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
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
    function DataService(http, envir, cookies, router, auth) {
        this.http = http;
        this.envir = envir;
        this.cookies = cookies;
        this.router = router;
        this.auth = auth;
        this.profile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: topbar, home, auth-redirect
        this.users = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: home-suggest
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: home-suggest
        this.speakers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: home-search
    }
    /* PROFILE */
    //refresh profile data if session active, called from topbar
    DataService.prototype.tryPersist = function () {
        var sessionId = localStorage.getItem("sid");
        if (sessionId != null)
            this.refreshProfileData(sessionId);
    };
    //tryPersist helper function
    DataService.prototype.refreshProfileData = function (sessionId) {
        var _this = this;
        this.http.get(this.envir.getServer("noEncode") + '/data/profile/' + sessionId).subscribe(function (res) {
            var data = res;
            _this.emitProfileData(data, null);
        }, function (err) {
            console.log("could not fetch profile data: " + err.error);
            _this.signOut();
        });
    };
    //called here, authService, auth-redirected
    DataService.prototype.emitProfileData = function (data, route) {
        if (typeof data.error != "undefined") {
            console.log("profile data msg: " + data.error);
            if (data.error == "Auth failed")
                this.signOut();
            if (route == "route/home")
                this.router.navigate(['/home']);
            return;
        }
        localStorage.setItem("sid", data.sessionId);
        //localStorage.setItem("userIn", "true")
        if (data.hasPicture == "false")
            data.pictureUrl = this.envir.getServer("noEncode") + data.pictureUrl;
        this.profile.emit(data);
        if (route == "route/home")
            this.router.navigate(['/home']);
    };
    //called from home
    DataService.prototype.updateProfileType = function (type) {
        return this.http.get(this.envir.getServer("noEncode") + '/auth/updateProfileType/' + type + "/" + localStorage.getItem("sid"));
    };
    /* USERS */
    //get users from db if session active, called in home
    DataService.prototype.getUsers = function (callback_loadToggle) {
        callback_loadToggle(true);
        var sessionId = localStorage.getItem("sid");
        if (sessionId != null)
            this.reqUsers(sessionId, callback_loadToggle);
    };
    //get users helper function
    DataService.prototype.reqUsers = function (sessionId, callback_loadToggle) {
        var _this = this;
        this.http.get(this.envir.getServer("noEncode") + '/data/users/' + sessionId).subscribe(function (res) {
            var data = res;
            callback_loadToggle(false);
            _this.emitUsersData(data);
        }, function (err) {
            console.log("could not fetch users data: " + err);
            _this.signOut();
        });
    };
    //called here
    DataService.prototype.emitUsersData = function (data) {
        var _this = this;
        if (typeof data.error != "undefined") {
            console.log("users data msg: " + data.error);
            if (data.error == "Auth failed")
                this.signOut();
            return;
        }
        data.forEach(function (user) {
            if (user.hasPicture == "false")
                user.pictureUrl = _this.envir.getServer("noEncode") + user.pictureUrl;
        });
        this.users.emit(data);
    };
    /* USER */
    //get user from db if session active, called in details
    DataService.prototype.getUser = function (id, callback) {
        var sessionId = localStorage.getItem("sid");
        if (sessionId != null)
            this.reqUser(sessionId, id, callback);
    };
    //get user helper function
    DataService.prototype.reqUser = function (sessionId, id, callback) {
        var _this = this;
        this.http.get(this.envir.getServer("noEncode") + '/data/user/' + sessionId + '/' + id).subscribe(function (res) {
            var data = res;
            _this.emitUserData(data);
            callback;
        }, function (err) {
            console.log("could not fetch user data: " + err);
            _this.signOut();
        });
    };
    //called here
    DataService.prototype.emitUserData = function (data) {
        if (typeof data.error != "undefined") {
            console.log("user data msg: " + data.error);
            if (data.error == "Auth failed")
                this.signOut();
            return;
        }
        if (data.hasPicture == "false")
            data.pictureUrl = this.envir.getServer("noEncode") + data.pictureUrl;
        this.user.emit(data);
    };
    /* SPEAKERS */
    //get speakers from db if session active, called in details
    DataService.prototype.getSpeakers = function (word, callback) {
        var sessionId = localStorage.getItem("sid");
        if (sessionId != null && word != null)
            this.reqSpeakers(sessionId, word, callback);
    };
    //get speakers helper function
    DataService.prototype.reqSpeakers = function (sessionId, word, callback) {
        var _this = this;
        this.http.get(this.envir.getServer("noEncode") + '/data/speakers/' + sessionId + '/' + word).subscribe(function (res) {
            var data = res;
            _this.emitSpeakersData(data);
            callback;
        }, function (err) {
            console.log("could not fetch speakers data: " + err);
            _this.signOut();
        });
    };
    //called here
    DataService.prototype.emitSpeakersData = function (data) {
        var _this = this;
        if (typeof data.error != "undefined") {
            console.log("speaker data msg: " + data.error);
            this.speakers.emit(data);
            if (data.error == "Auth failed")
                this.signOut();
            return;
        }
        data.forEach(function (user) {
            if (user.hasPicture == "false")
                user.pictureUrl = _this.envir.getServer("noEncode") + user.pictureUrl;
        });
        this.speakers.emit(data);
    };
    DataService.prototype.signOut = function () {
        this.auth.signOut();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
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
    LinkedinLoginService.prototype.fetchProfileData = function () {
        return this.http.get(this.web_server + this.path_for_auth_request + "/" + this.authorization_code + "/" + this.redirectUri + "/" + this.clientId + "/" + localStorage.getItem("sid"));
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