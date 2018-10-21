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
/* harmony import */ var _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/flashchats/flashchats.component */ "./src/app/components/flashchats/flashchats.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth-redirected/auth-redirected.component */ "./src/app/components/auth-redirected/auth-redirected.component.ts");
/* harmony import */ var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/logged.guard */ "./src/app/guards/logged.guard.ts");
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
        canActivate: [_guards_logged_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedGuard"]],
        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    },
    {
        path: 'auth/redirected',
        component: _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_6__["AuthRedirectedComponent"]
    },
    {
        path: 'home',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/search/:word',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'flashchats',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_3__["FlashchatsComponent"]
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

module.exports = "\n\n<div id=\"navigation\">\n  <app-topbar></app-topbar>\n</div>\n\n\n<div id=\"container\" style=\"margin-top: 50px;\">\n    <router-outlet></router-outlet>\n</div>\n\n  \n"

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
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-filter/home-filter.component */ "./src/app/components/home-filter/home-filter.component.ts");
/* harmony import */ var _components_home_suggests_home_suggests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-suggests/home-suggests.component */ "./src/app/components/home-suggests/home-suggests.component.ts");
/* harmony import */ var _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/flashchats/flashchats.component */ "./src/app/components/flashchats/flashchats.component.ts");
/* harmony import */ var _components_home_search_home_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home-search/home-search.component */ "./src/app/components/home-search/home-search.component.ts");
/* harmony import */ var _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/auth-redirected/auth-redirected.component */ "./src/app/components/auth-redirected/auth-redirected.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/logged.guard */ "./src/app/guards/logged.guard.ts");
/* harmony import */ var _components_forms_speaker_filter_form_speaker_filter_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/forms/speaker-filter-form/speaker-filter-form.component */ "./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.ts");
/* harmony import */ var _components_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home-main/home-main.component */ "./src/app/components/home-main/home-main.component.ts");
/* harmony import */ var _components_dwForm_dwForm_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dwForm/dwForm.component */ "./src/app/components/dwForm/dwForm.component.ts");
/* harmony import */ var _components_forms_dwForm_speaker_inputs_dwForm_speaker_inputs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component */ "./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.ts");
/* harmony import */ var _components_forms_dwForm_teacher_inputs_dwForm_teacher_inputs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component */ "./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.ts");
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
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
                _components_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_12__["HomeFilterComponent"],
                _components_home_suggests_home_suggests_component__WEBPACK_IMPORTED_MODULE_13__["HomeSuggestsComponent"],
                _components_flashchats_flashchats_component__WEBPACK_IMPORTED_MODULE_14__["FlashchatsComponent"],
                _components_home_search_home_search_component__WEBPACK_IMPORTED_MODULE_15__["HomeSearchComponent"],
                _components_auth_redirected_auth_redirected_component__WEBPACK_IMPORTED_MODULE_16__["AuthRedirectedComponent"],
                _components_forms_speaker_filter_form_speaker_filter_form_component__WEBPACK_IMPORTED_MODULE_21__["SpeakerFilterFormComponent"],
                _components_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_22__["HomeMainComponent"],
                _components_dwForm_dwForm_component__WEBPACK_IMPORTED_MODULE_23__["dwFormComponent"],
                _components_forms_dwForm_speaker_inputs_dwForm_speaker_inputs_component__WEBPACK_IMPORTED_MODULE_24__["DwFormSpeakerInputsComponent"],
                _components_forms_dwForm_teacher_inputs_dwForm_teacher_inputs_component__WEBPACK_IMPORTED_MODULE_25__["DwFormTeacherInputsComponent"],
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
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _guards_logged_guard__WEBPACK_IMPORTED_MODULE_20__["LoggedGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__["CookieService"]],
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

/***/ "./src/app/components/dwForm/dwForm.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/dwForm/dwForm.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" *ngIf=\"showForm == true\">\n\n  <div id=\"top\">\n      <p class=\"nwline multiple\" style=\"margin-top:20px;margin-left:20px;\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"profileType\" value=\"speaker\"\n          [checked]=\"isProfileType('speaker')\"\n          (click)=\"toggleProfileType('speaker')\">\n        <label [style.color]=\"setColorFor('speaker')\">Speaker</label> &nbsp;\n        <input class=\"w3-radio\" type=\"radio\" name=\"profileType\" value=\"teacher\"\n          [checked]=\"isProfileType('teacher')\" \n          (click)=\"toggleProfileType('teacher')\">\n        <label [style.color]=\"setColorFor('teacher')\">Educator</label> &nbsp;\n        <span id=\"form-ratio\" *ngIf=\"form.received ==true\">\n            Progress: {{form.answered}}/{{form.notAnswered+form.answered}}\n          </span>\n          <span id=\"progress\" *ngIf=\"form.received == true\">\n              <div id=\"bar\" [style.width]=\"form.ratio+'%'\"></div>\n          </span>\n      </p>\n      <div id=\"continue\" (click)=\"skipForm()\">continue</div>\n      <!-- <div id=\"save\">Save and close</div> -->\n\n\n\n\n        <!-- <div id=\"extend\">large</div> -->\n  </div>\n\n\n\n  <br>\n\n  <app-dwForm-speaker-inputs *ngIf=\"profileType == 'speaker'\"> </app-dwForm-speaker-inputs>\n  <app-dwForm-teacher-inputs *ngIf=\"profileType == 'teacher'\"> </app-dwForm-teacher-inputs>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/dwForm/dwForm.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/dwForm/dwForm.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#top {\n  position: fixed;\n  background-color: #f0f0f0;\n  width: 150%;\n  padding: 0px;\n  margin-top: -15px;\n  margin-left: -10px;\n  border-bottom: 1px solid #a8a8a8; }\n\n.container {\n  z-index: 50;\n  position: fixed;\n  max-height: 630px;\n  margin-left: -100px;\n  float: right;\n  margin-top: -44px;\n  background-color: white;\n  color: #1f1f1f;\n  border-top: 5px solid #919191;\n  border-bottom: 4px solid #bbbbbb;\n  border-radius: 1px;\n  padding: 10px;\n  min-height: 330px;\n  width: 600px;\n  overflow: auto; }\n\n#title {\n  color: #696969;\n  font-weight: lighter;\n  font-size: .85em; }\n\n.modifiable {\n  border: 0px solid #00000000;\n  outline: none;\n  font-size: .8em;\n  color: #616161;\n  border-bottom: 1px solid #e4e4e4; }\n\n.modifiable:focus {\n  border-bottom: 2px solid #38a3a5;\n  outline: 1px #838383; }\n\n.modifiable-reduced {\n  border: 0px solid #00000000;\n  outline: none;\n  font-size: .75em;\n  color: #636262; }\n\n.modifiable-reduced:focus {\n  border-bottom: 2px solid #d1d1d1;\n  outline: 1px #838383; }\n\n.modifiable::-webkit-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable:-ms-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable::-ms-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable::placeholder {\n  color: #a1a1a1; }\n\n.nwline {\n  display: block;\n  margin-top: 8px; }\n\n#first-name {\n  float: left; }\n\n#last-name {\n  float: right; }\n\n.drop-down {\n  width: 80%;\n  border: 1px solid #e6e6e6;\n  outline: none;\n  background-color: white;\n  border-radius: 0px; }\n\nhr {\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #e6e6e6; }\n\n.fields {\n  list-style-type: none;\n  text-decoration: none; }\n\n.fields a:link, .fields a:visited {\n    list-style-type: none;\n    text-decoration: none; }\n\n.fields #field-title {\n    border-left: 4px solid #bb3232;\n    padding-left: 3px;\n    outline: none;\n    font-size: .8em;\n    color: #2b2b2b; }\n\n.multiple {\n  outline: none;\n  font-size: .8em;\n  color: #1a1a1a; }\n\n.multiple-title {\n  outline: none;\n  font-size: .8em;\n  color: #1a1a1a;\n  border-left: 4px solid #38a3a5;\n  padding: 3px; }\n\n.dashed-line {\n  border: none;\n  border-top: 1px dashed #e6e6e6;\n  color: #fff;\n  background-color: #fff;\n  height: 1px; }\n\n#continue {\n  position: absolute;\n  float: left;\n  margin-left: 500px;\n  font-size: .85em;\n  color: #2b2b2b;\n  padding: 10px;\n  margin-top: -41px;\n  border: 1px solid #c4c4c4;\n  background-color: #fff; }\n\n#continue:hover {\n  cursor: pointer;\n  color: #38a3a5; }\n\n#save {\n  position: absolute;\n  float: left;\n  margin-left: 390px;\n  font-size: .85em;\n  color: #2b2b2b;\n  padding: 10px;\n  margin-top: -40px; }\n\n#save:hover {\n  cursor: pointer;\n  color: #38a3a5; }\n\n#progress {\n  background-color: #c9c9c9;\n  width: 130px;\n  margin-left: 55px;\n  margin-top: 15px;\n  float: left;\n  position: absolute; }\n\n#bar {\n  width: 0%;\n  height: 5px;\n  background-color: #38a3a5;\n  text-align: center;\n  line-height: 30px;\n  color: white;\n  border-right: 0px solid #e9e7e7; }\n\n#form-ratio {\n  color: black;\n  margin-left: 75px;\n  margin-top: -5px;\n  position: absolute; }\n\n#completion {\n  margin-left: 4px; }\n"

/***/ }),

/***/ "./src/app/components/dwForm/dwForm.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dwForm/dwForm.component.ts ***!
  \*******************************************************/
/*! exports provided: dwFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwFormComponent", function() { return dwFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modals.service */ "./src/app/services/modals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var dwFormComponent = /** @class */ (function () {
    function dwFormComponent(data, modals) {
        var _this = this;
        this.data = data;
        this.modals = modals;
        this.form = {
            ratio: null,
            answered: null,
            notAnswered: null,
            received: false,
            skip: false,
            target: null,
        };
        this.showForm = true;
        this.profileType = "";
        this.userDataService = this.data.profile.subscribe(function (profileData) { return _this.profileType = profileData.type; });
        this.data.screenData.subscribe(function (data) { return _this.marginLeft = data.marginLeft; });
        this.modals.dwFormBucket.subscribe(function (data) { if (data.target == "dwForm")
            _this.form = data; });
        this.data.reqScreenData();
        this.data.getProfile(null);
    }
    dwFormComponent.prototype.ngOnInit = function () {
    };
    dwFormComponent.prototype.isProfileType = function (userType) { return userType == this.profileType; };
    dwFormComponent.prototype.setColorFor = function (userType) {
        if (userType == this.profileType)
            return "#38a3a5";
        return "rgb(43, 43, 43)";
    };
    dwFormComponent.prototype.toggleProfileType = function (sender) {
        if (sender == "speaker" && this.profileType == "teacher") {
            this.data.updateProfileType("speaker").subscribe();
            this.profileType = "speaker";
        }
        else if (sender == "teacher" && this.profileType == "speaker") {
            this.data.updateProfileType("teacher").subscribe();
            this.profileType = "teacher";
        }
    };
    dwFormComponent.prototype.getMarginLeft = function () {
        if (this.marginLeft >= 5)
            return this.marginLeft + 928 - 15;
        return 928;
    };
    dwFormComponent.prototype.skipForm = function () {
        this.showForm = false;
        this.form.skip = true; //skip is always set to true from forms-dw..
        this.form.target = "topbar";
        this.modals.dwFormEmit(this.form);
    };
    dwFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dwForm',
            template: __webpack_require__(/*! ./dwForm.component.html */ "./src/app/components/dwForm/dwForm.component.html"),
            styles: [__webpack_require__(/*! ./dwForm.component.scss */ "./src/app/components/dwForm/dwForm.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_modals_service__WEBPACK_IMPORTED_MODULE_2__["ModalsService"]])
    ], dwFormComponent);
    return dwFormComponent;
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

/***/ "./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <br><br>\n  \n    <li *ngFor=\"let field of fields\" class=\"fields\">\n      <span id=\"field-title\" [style.border-left]=\"'4px solid '+field.color\">{{field.title}}</span> \n      <input id=\"field\" [style.width.%]=\"field.width\" type=\"text\" ng-model=\"inputText\" class=\"modifiable nwline\" \n      value=\"{{field.value}}\" placeholder=\"{{field.placeholder}}\"\n      (keyup.enter)=\"edit_written($event,field,'enter')\" \n      (blur)=\"edit_written($event,field,'blur')\" \n      (click)=\"edit_clicked(field)\"\n      (input)=\"edit_size($event,field)\">\n      <br>\n    </li>\n  \n    <span class=\"multiple-title\">With which gender do you identify ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"male\" [checked]=\"setGender('male')\"> \n      <label>Male</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"female\" [checked]=\"setGender('female')\">\n      <label>Female</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"other\" [checked]=\"setGender('other')\">\n      <label>I wish to skip this question</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"other\" [checked]=\"setGender('other')\">\n      <label>Other</label>\n    </p>\n  \n    <hr>\n  \n    <span class=\"multiple-title\">With which race and/or ethnicity do you identify ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"white\" [checked]=\"setRace('white')\">\n      <label>White</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"hispanic\" [checked]=\"setRace('hispanic')\">\n      <label>Hispanic or Latino</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"asian\" [checked]=\"setRace('asian')\">\n      <label>Asian</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"black\" [checked]=\"setRace('black')\">\n      <label>Black or African American</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"american\" [checked]=\"setRace('american')\">\n      <label>American Indian or Alaska Native</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"other\" [checked]=\"setRace('other')\">\n      <label>Other</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"notSpecified\" [checked]=\"setRace('notSpecified')\">\n      <label>Not Specified</label>\n    </p>\n    <hr><br>\n  \n    <span class=\"multiple-title\">Did you or your parents immigrate to the US ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"fgImmigrant\" value=\"yes\" [checked]=\"setGender('yes')\"> \n      <label>Yes</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"fgImmigrant\" value=\"no\" [checked]=\"setGender('no')\">\n      <label>No</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <li *ngFor=\"let field of fields2\" class=\"fields\">\n        <span id=\"field-title\" [style.border-left]=\"'4px solid '+field.color\">{{field.title}}</span> \n        <input id=\"field\" [style.width.%]=\"field.width\" type=\"text\" ng-model=\"inputText\" class=\"modifiable nwline\" \n        value=\"{{field.value}}\" placeholder=\"{{field.placeholder}}\"\n        (keyup.enter)=\"edit_written($event,field,'enter')\" \n        (blur)=\"edit_written($event,field,'blur')\" \n        (click)=\"edit_clicked(field)\"\n        (input)=\"edit_size($event,field)\">\n        <br>\n    </li>\n        \n    <span class=\"multiple-title\">Were you a first generation college student ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"fgStudent\" value=\"yes\" [checked]=\"setGender('yes')\"> \n      <label>Yes</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"fgStudent\" value=\"no\" [checked]=\"setGender('no')\">\n      <label>No</label> <br>\n    </p>\n    <hr><br>\n  \n    <span class=\"multiple-title\">Do you identify as LGBTQ ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"yes\" [checked]=\"setGender('yes')\"> \n      <label>Yes</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"no\" [checked]=\"setGender('no')\">\n      <label>No</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">Education level</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"lths\" [checked]=\"setGender('lths')\"> \n      <label>Less than High School</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"hs\" [checked]=\"setGender('hs')\">\n      <label>High School</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"associates\" [checked]=\"setGender('associates')\">\n      <label>Associates Degree</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"bachelors\" [checked]=\"setGender('bachelors')\">\n      <label>Bachelors</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"masters\" [checked]=\"setGender('masters')\">\n      <label>Masters</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"jd\" [checked]=\"setGender('jd')\">\n      <label>JD</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"md\" [checked]=\"setGender('md')\">\n      <label>MD (or other medical degree)</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"phd\" [checked]=\"setGender('phd')\">\n      <label>PhD</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">Which best describes where you grew up ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeArea\" value=\"urban\" [checked]=\"setGender('urban')\"> \n      <label>Urban</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeArea\" value=\"rural\" [checked]=\"setGender('rural')\">\n      <label>Rural</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeArea\" value=\"suburban\" [checked]=\"setGender('suburban')\">\n      <label>Suburban</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">\n      Which best describes your family's total yearly income growing up?\n      (Note: This is optional and fully confidential. \n      It is intended to give us an understanding of socio-economic background of \n      our speakers and to assist with grants.)\n      </span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"l15\" [checked]=\"setGender('l15')\"> \n      <label><15K</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"15\" [checked]=\"setGender('15')\">\n      <label>15-50K</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"50\" [checked]=\"setGender('50')\">\n      <label>50-100K</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"100\" [checked]=\"setGender('100')\">\n      <label>100-200K</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"m200\" [checked]=\"setGender('m200')\">\n      <label>>200K</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">Do you identify as LGBTQ ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"yes\" [checked]=\"setGender('yes')\"> \n      <label>Yes</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"no\" [checked]=\"setGender('no')\">\n      <label>No</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">\n      Which category best describes the profession that \n      you would discuss in your DreamWakers flashchat?\n    </span>\n    <p class=\"multiple nwline\" style=\"font-size: .78em\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"stem\" [checked]=\"setGender('stem')\" > \n      <label>STEM (Science, Technology, Engineering, Math)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"social\" [checked]=\"setGender('social')\">\n      <label>Social Sciences (Politics, History, Foreign Affairs, Legal)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"media\" [checked]=\"setGender('media')\">\n      <label>Media (Social Media, Print Media, Videography, Photography)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"health\" [checked]=\"setGender('health')\">\n      <label>Health Care (Doctors, Nurses, Pharmaceuticals)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"arts\" [checked]=\"setGender('arts')\">\n      <label>Arts (Musicians, Dancers, Painters, Poets)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"finance\" [checked]=\"setGender('finance')\">\n      <label>Finance (Banking, Accounting)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"consumer\" [checked]=\"setGender('consumer')\">\n      <label>Consumer Goods (On-line or physical retailers or retailers to other companies)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"business\" [checked]=\"setGender('business')\">\n      <label>Other Business (Not captured in the above options)</label> <br><hr class=\"dashed-line\">\n      <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"other\" [checked]=\"setGender('other')\">\n      <label>Other</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">Do you consider yourself an entrepreneur ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"entrepreneur\" value=\"yes\" [checked]=\"setGender('yes')\"> \n      <label>Yes</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"entrepreneur\" value=\"no\" [checked]=\"setGender('no')\">\n      <label>No</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">How many flashchats would you consider hosting over a six month period ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"yes\" [checked]=\"setGender('yes')\"> \n      <label> 1</label> &nbsp;&nbsp;\n      <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n      <label> 2</label>&nbsp;&nbsp;\n      <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n      <label> 3</label>&nbsp;&nbsp;\n      <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n      <label> 4</label>&nbsp;&nbsp;\n      <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n      <label> 5</label>&nbsp;&nbsp;\n      <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n      <label> 6</label>&nbsp;&nbsp;\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">How did you hear about DreamWakers ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"founder\" [checked]=\"setGender('yes')\"> \n      <label>The Founders</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"oral\" [checked]=\"setGender('no')\">\n      <label>Word of Mouth</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"dwNews\" [checked]=\"setGender('no')\">\n      <label>DreamWakers Newsletter</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"event\" [checked]=\"setGender('no')\">\n      <label>Event or Conference</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"twitter\" [checked]=\"setGender('no')\">\n      <label>Twitter</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"facebook\" [checked]=\"setGender('no')\">\n      <label>Facebook</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"linkedin\" [checked]=\"setGender('no')\">\n      <label>LinkedIn</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"google\" [checked]=\"setGender('no')\">\n      <label>Google Search</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"instagram\" [checked]=\"setGender('no')\">\n      <label>Instagram</label> <br>\n      <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"other\" [checked]=\"setGender('no')\">\n      <label>Other</label> <br>\n    </p>\n    <hr><br>\n  \n  \n    <span class=\"multiple-title\">Do you speak any other languages ?</span>\n    <p class=\"multiple nwline\" >\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"language\" value=\"spanish\" [checked]=\"setRace('white')\">\n      <label>Spanish</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"language\" value=\"french\" [checked]=\"setRace('hispanic')\">\n      <label>French</label>\n      <br>\n      <input class=\"w3-radio\" type=\"checkbox\" name=\"language\" value=\"other\" [checked]=\"setRace('asian')\">\n      <label>Other</label>\n    </p>\n    <hr><br>\n  \n  "

/***/ }),

/***/ "./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  color: #696969;\n  font-weight: lighter;\n  font-size: .85em; }\n\n.modifiable {\n  border: 0px solid #00000000;\n  outline: none;\n  font-size: .8em;\n  color: #616161;\n  border-bottom: 1px solid #e4e4e4; }\n\n.modifiable:focus {\n  border-bottom: 2px solid #38a3a5;\n  outline: 1px #838383; }\n\n.modifiable-reduced {\n  border: 0px solid #00000000;\n  outline: none;\n  font-size: .75em;\n  color: #636262; }\n\n.modifiable-reduced:focus {\n  border-bottom: 2px solid #d1d1d1;\n  outline: 1px #838383; }\n\n.modifiable::-webkit-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable:-ms-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable::-ms-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable::placeholder {\n  color: #a1a1a1; }\n\n.nwline {\n  display: block;\n  margin-top: 8px; }\n\n#first-name {\n  float: left; }\n\n#last-name {\n  float: right; }\n\n.drop-down {\n  width: 80%;\n  border: 1px solid #e6e6e6;\n  outline: none;\n  background-color: white;\n  border-radius: 0px; }\n\nhr {\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #e6e6e6; }\n\n.fields {\n  list-style-type: none;\n  text-decoration: none; }\n\n.fields a:link, .fields a:visited {\n    list-style-type: none;\n    text-decoration: none; }\n\n.fields #field-title {\n    border-left: 4px solid #bb3232;\n    padding-left: 3px;\n    outline: none;\n    font-size: .8em;\n    color: #2b2b2b; }\n\n.multiple {\n  outline: none;\n  font-size: .8em;\n  color: #1a1a1a; }\n\n.multiple-title {\n  outline: none;\n  font-size: .8em;\n  color: #1a1a1a;\n  border-left: 4px solid #38a3a5;\n  padding: 3px; }\n\n.dashed-line {\n  border: none;\n  border-top: 1px dashed #e6e6e6;\n  color: #fff;\n  background-color: #fff;\n  height: 1px; }\n"

/***/ }),

/***/ "./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DwFormSpeakerInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DwFormSpeakerInputsComponent", function() { return DwFormSpeakerInputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modals.service */ "./src/app/services/modals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cache = /** @class */ (function () {
    function Cache(title, value) {
        this.colorGood = "#38a3a5";
        this.colorBad = "#bb3232";
        this.width = function () { return "100"; }; //this.title.length+this.value.length * 3.2
        if (value != "")
            this.color = this.colorGood;
        else
            this.color = this.colorBad;
        this.title = title;
        this.value = value;
        this.default = value;
        this.placeholder = "Your answer";
    }
    return Cache;
}());
var Field = /** @class */ (function () {
    function Field(hint, cache) {
        this.io = { width: function (value) { return "100"; } }; //value.length * 3.2}
        cache.hint = hint;
        this.cache = cache;
        this.placeholder = "Your answer";
        this.hint = hint;
        this.value = cache.value;
        this.title = cache.title;
        //this.width = (this.title.length+this.value.length) * 3.2
        this.width = "100";
        this.color = cache.color;
    }
    return Field;
}());
var DwFormSpeakerInputsComponent = /** @class */ (function () {
    function DwFormSpeakerInputsComponent(data, modals) {
        var _this = this;
        this.data = data;
        this.modals = modals;
        this.gender = "other";
        this.race = "notSpecified";
        this.fields = [];
        this.fields2 = [];
        this.userDataService = this.data.profile.subscribe(function (profileData) {
            _this.fields = [
                _this.fName = new Field("", new Cache("First Name", profileData.firstName)),
                _this.lName = new Field("", new Cache("Last Name", profileData.lastName)),
                _this.age = new Field("e.g. 30", new Cache("Age", "")),
                _this.volunteer = new Field("    ", new Cache("Have you volunteered in K-12 public schools in the past six months?", "")),
                _this.phoneNum = new Field("e.g. 123 456 7890", new Cache("Phone Number", "")),
                _this.mailAddr = new Field("Street, Apt #, City, State, Zip", new Cache("Mailing Address", "")),
                _this.email = new Field("      ", new Cache("Email", "")),
                _this.gmail = new Field("      ", new Cache("Gmail Contact", "")),
            ];
            _this.fields2 = [
                _this.zip = new Field("      ", new Cache("Zip Code", "")),
                _this.city = new Field("      ", new Cache("City", "")),
                _this.state = new Field("      ", new Cache("State", "")),
                _this.country = new Field("      ", new Cache("Country", "")),
                _this.education = new Field("    ", new Cache("Please list any schools you attended & degrees earned (middle school, high school, college, grad school)", "")),
                _this.industry = new Field("e.g. health", new Cache("Industry", profileData.industry)),
                _this.company = new Field("", new Cache("Please name your company or organization", profileData.position)),
                _this.title = new Field("      ", new Cache("Please list your title", profileData.headline.split('at')[0])),
            ];
            _this.emitFormData();
        });
        this.data.getProfile(null);
    }
    DwFormSpeakerInputsComponent.prototype.ngOnInit = function () {
    };
    DwFormSpeakerInputsComponent.prototype.emitFormData = function () {
        this.modals.dwFormEmit({
            ratio: this.getFormData("ratio"),
            notAnswered: this.getFormData("notAnswered"),
            answered: this.getFormData("answered"),
            received: true,
            skip: false,
            target: "dwForm"
        });
    };
    DwFormSpeakerInputsComponent.prototype.getFormData = function (id) {
        var answered = 0;
        var notAnswered = 0;
        this.fields.forEach(function (field) {
            if (field.color == "#38a3a5")
                answered += 1;
            else
                notAnswered += 1;
        });
        this.fields2.forEach(function (field) {
            if (field.color == "#38a3a5")
                answered += 1;
            else
                notAnswered += 1;
        });
        if (id == "answered")
            return answered;
        if (id == "notAnswered")
            return notAnswered;
        if (id == "ratio")
            return Math.floor(answered / (answered + notAnswered) * 100);
    };
    DwFormSpeakerInputsComponent.prototype.edit_written = function (event, field, action) {
        event.target.blur();
        var value = event.target.value;
        if (value != "") {
            field.value = value;
            field.hint = value;
            field.cache.value = value;
            field.color = field.cache.colorGood;
        }
        else if (action == "enter") {
            field.hint = field.cache.hint;
            field.placeholder = field.cache.placeholder;
            field.cache.value = field.cache.default;
            field.value = field.cache.default;
            if (field.cache.default == "")
                field.color = field.cache.colorBad;
            else
                field.color = field.cache.colorGood;
        }
        else {
            field.value = field.cache.value;
            field.placeholder = field.cache.placeholder;
        }
        field.title = field.cache.title;
        field.placeholder = field.placeholder;
        this.emitFormData();
    };
    DwFormSpeakerInputsComponent.prototype.edit_clicked = function (field) {
        field.value = "";
        field.placeholder = field.hint;
    };
    DwFormSpeakerInputsComponent.prototype.edit_size = function (event, field) {
    };
    DwFormSpeakerInputsComponent.prototype.setGender = function (type) { return type == this.gender; };
    DwFormSpeakerInputsComponent.prototype.setRace = function (type) { return type == this.race; };
    DwFormSpeakerInputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dwForm-speaker-inputs',
            template: __webpack_require__(/*! ./dwForm-speaker-inputs.component.html */ "./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.html"),
            styles: [__webpack_require__(/*! ./dwForm-speaker-inputs.component.scss */ "./src/app/components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_modals_service__WEBPACK_IMPORTED_MODULE_2__["ModalsService"]])
    ], DwFormSpeakerInputsComponent);
    return DwFormSpeakerInputsComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n    <br><br>\n  \n    <li *ngFor=\"let field of fields\" class=\"fields\">\n        <span id=\"field-title\" [style.border-left]=\"'4px solid '+field.color\">{{field.title}}</span> \n        <input id=\"field\" [style.width.%]=\"field.width\" type=\"text\" ng-model=\"inputText\" class=\"modifiable nwline\" \n        value=\"{{field.value}}\" placeholder=\"{{field.placeholder}}\"\n        (keyup.enter)=\"edit_written($event,field,'enter')\" \n        (blur)=\"edit_written($event,field,'blur')\" \n        (click)=\"edit_clicked(field)\"\n        (input)=\"edit_size($event,field)\">\n        <br>\n      </li>\n    \n      <span class=\"multiple-title\">With which gender do you identify ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"male\" [checked]=\"setGender('male')\"> \n        <label>Male</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"female\" [checked]=\"setGender('female')\">\n        <label>Female</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"other\" [checked]=\"setGender('other')\">\n        <label>I wish to skip this question</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"gender\" value=\"other\" [checked]=\"setGender('other')\">\n        <label>Other</label>\n      </p>\n    \n      <hr>\n    \n      <span class=\"multiple-title\">With which race and/or ethnicity do you identify ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"white\" [checked]=\"setRace('white')\">\n        <label>White</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"hispanic\" [checked]=\"setRace('hispanic')\">\n        <label>Hispanic or Latino</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"asian\" [checked]=\"setRace('asian')\">\n        <label>Asian</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"black\" [checked]=\"setRace('black')\">\n        <label>Black or African American</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"american\" [checked]=\"setRace('american')\">\n        <label>American Indian or Alaska Native</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"other\" [checked]=\"setRace('other')\">\n        <label>Other</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"notSpecified\" [checked]=\"setRace('notSpecified')\">\n        <label>Not Specified</label>\n      </p>\n      <hr><br>\n    \n      <span class=\"multiple-title\">Did you or your parents immigrate to the US ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"fgImmigrant\" value=\"yes\" [checked]=\"setGender('yes')\"> \n        <label>Yes</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"fgImmigrant\" value=\"no\" [checked]=\"setGender('no')\">\n        <label>No</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <li *ngFor=\"let field of fields2\" class=\"fields\">\n          <span id=\"field-title\" [style.border-left]=\"'4px solid '+field.color\">{{field.title}}</span> \n          <input id=\"field\" [style.width.%]=\"field.width\" type=\"text\" ng-model=\"inputText\" class=\"modifiable nwline\" \n          value=\"{{field.value}}\" placeholder=\"{{field.placeholder}}\"\n          (keyup.enter)=\"edit_written($event,field,'enter')\" \n          (blur)=\"edit_written($event,field,'blur')\" \n          (click)=\"edit_clicked(field)\"\n          (input)=\"edit_size($event,field)\">\n          <br>\n      </li>\n          \n      <span class=\"multiple-title\">Were you a first generation college student ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"fgStudent\" value=\"yes\" [checked]=\"setGender('yes')\"> \n        <label>Yes</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"fgStudent\" value=\"no\" [checked]=\"setGender('no')\">\n        <label>No</label> <br>\n      </p>\n      <hr><br>\n    \n      <span class=\"multiple-title\">Do you identify as LGBTQ ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"yes\" [checked]=\"setGender('yes')\"> \n        <label>Yes</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"no\" [checked]=\"setGender('no')\">\n        <label>No</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">Education level</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"lths\" [checked]=\"setGender('lths')\"> \n        <label>Less than High School</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"hs\" [checked]=\"setGender('hs')\">\n        <label>High School</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"associates\" [checked]=\"setGender('associates')\">\n        <label>Associates Degree</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"bachelors\" [checked]=\"setGender('bachelors')\">\n        <label>Bachelors</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"masters\" [checked]=\"setGender('masters')\">\n        <label>Masters</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"jd\" [checked]=\"setGender('jd')\">\n        <label>JD</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"md\" [checked]=\"setGender('md')\">\n        <label>MD (or other medical degree)</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"educationLevel\" value=\"phd\" [checked]=\"setGender('phd')\">\n        <label>PhD</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">Which best describes where you grew up ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeArea\" value=\"urban\" [checked]=\"setGender('urban')\"> \n        <label>Urban</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeArea\" value=\"rural\" [checked]=\"setGender('rural')\">\n        <label>Rural</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeArea\" value=\"suburban\" [checked]=\"setGender('suburban')\">\n        <label>Suburban</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">\n        Which best describes your family's total yearly income growing up?\n        (Note: This is optional and fully confidential. \n        It is intended to give us an understanding of socio-economic background of \n        our speakers and to assist with grants.)\n        </span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"l15\" [checked]=\"setGender('l15')\"> \n        <label><15K</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"15\" [checked]=\"setGender('15')\">\n        <label>15-50K</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"50\" [checked]=\"setGender('50')\">\n        <label>50-100K</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"100\" [checked]=\"setGender('100')\">\n        <label>100-200K</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"homeIncome\" value=\"m200\" [checked]=\"setGender('m200')\">\n        <label>>200K</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">Do you identify as LGBTQ ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"yes\" [checked]=\"setGender('yes')\"> \n        <label>Yes</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"lgbtq\" value=\"no\" [checked]=\"setGender('no')\">\n        <label>No</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">\n        Which category best describes the profession that \n        you would discuss in your DreamWakers flashchat?\n      </span>\n      <p class=\"multiple nwline\" style=\"font-size: .78em\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"stem\" [checked]=\"setGender('stem')\" > \n        <label>STEM (Science, Technology, Engineering, Math)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"social\" [checked]=\"setGender('social')\">\n        <label>Social Sciences (Politics, History, Foreign Affairs, Legal)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"media\" [checked]=\"setGender('media')\">\n        <label>Media (Social Media, Print Media, Videography, Photography)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"health\" [checked]=\"setGender('health')\">\n        <label>Health Care (Doctors, Nurses, Pharmaceuticals)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"arts\" [checked]=\"setGender('arts')\">\n        <label>Arts (Musicians, Dancers, Painters, Poets)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"finance\" [checked]=\"setGender('finance')\">\n        <label>Finance (Banking, Accounting)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"consumer\" [checked]=\"setGender('consumer')\">\n        <label>Consumer Goods (On-line or physical retailers or retailers to other companies)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"business\" [checked]=\"setGender('business')\">\n        <label>Other Business (Not captured in the above options)</label> <br><hr class=\"dashed-line\">\n        <input class=\"w3-radio\" type=\"radio\" name=\"subject\" value=\"other\" [checked]=\"setGender('other')\">\n        <label>Other</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">Do you consider yourself an entrepreneur ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"entrepreneur\" value=\"yes\" [checked]=\"setGender('yes')\"> \n        <label>Yes</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"entrepreneur\" value=\"no\" [checked]=\"setGender('no')\">\n        <label>No</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">How many flashchats would you consider hosting over a six month period ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"yes\" [checked]=\"setGender('yes')\"> \n        <label> 1</label> &nbsp;&nbsp;\n        <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n        <label> 2</label>&nbsp;&nbsp;\n        <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n        <label> 3</label>&nbsp;&nbsp;\n        <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n        <label> 4</label>&nbsp;&nbsp;\n        <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n        <label> 5</label>&nbsp;&nbsp;\n        <input class=\"w3-radio\" type=\"radio\" name=\"chatNumbers\" value=\"no\" [checked]=\"setGender('no')\">\n        <label> 6</label>&nbsp;&nbsp;\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">How did you hear about DreamWakers ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"founder\" [checked]=\"setGender('yes')\"> \n        <label>The Founders</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"oral\" [checked]=\"setGender('no')\">\n        <label>Word of Mouth</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"dwNews\" [checked]=\"setGender('no')\">\n        <label>DreamWakers Newsletter</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"event\" [checked]=\"setGender('no')\">\n        <label>Event or Conference</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"twitter\" [checked]=\"setGender('no')\">\n        <label>Twitter</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"facebook\" [checked]=\"setGender('no')\">\n        <label>Facebook</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"linkedin\" [checked]=\"setGender('no')\">\n        <label>LinkedIn</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"google\" [checked]=\"setGender('no')\">\n        <label>Google Search</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"instagram\" [checked]=\"setGender('no')\">\n        <label>Instagram</label> <br>\n        <input class=\"w3-radio\" type=\"radio\" name=\"foundDw\" value=\"other\" [checked]=\"setGender('no')\">\n        <label>Other</label> <br>\n      </p>\n      <hr><br>\n    \n    \n      <span class=\"multiple-title\">Do you speak any other languages ?</span>\n      <p class=\"multiple nwline\" >\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"language\" value=\"spanish\" [checked]=\"setRace('white')\">\n        <label>Spanish</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"language\" value=\"french\" [checked]=\"setRace('hispanic')\">\n        <label>French</label>\n        <br>\n        <input class=\"w3-radio\" type=\"checkbox\" name=\"language\" value=\"other\" [checked]=\"setRace('asian')\">\n        <label>Other</label>\n      </p>\n      <hr><br>\n    \n    "

/***/ }),

/***/ "./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  color: #696969;\n  font-weight: lighter;\n  font-size: .85em; }\n\n.modifiable {\n  border: 0px solid #00000000;\n  outline: none;\n  font-size: .8em;\n  color: #616161;\n  border-bottom: 1px solid #e4e4e4; }\n\n.modifiable:focus {\n  border-bottom: 2px solid #38a3a5;\n  outline: 1px #838383; }\n\n.modifiable-reduced {\n  border: 0px solid #00000000;\n  outline: none;\n  font-size: .75em;\n  color: #636262; }\n\n.modifiable-reduced:focus {\n  border-bottom: 2px solid #d1d1d1;\n  outline: 1px #838383; }\n\n.modifiable::-webkit-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable:-ms-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable::-ms-input-placeholder {\n  color: #a1a1a1; }\n\n.modifiable::placeholder {\n  color: #a1a1a1; }\n\n.nwline {\n  display: block;\n  margin-top: 8px; }\n\n#first-name {\n  float: left; }\n\n#last-name {\n  float: right; }\n\n.drop-down {\n  width: 80%;\n  border: 1px solid #e6e6e6;\n  outline: none;\n  background-color: white;\n  border-radius: 0px; }\n\nhr {\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #e6e6e6; }\n\n.fields {\n  list-style-type: none;\n  text-decoration: none; }\n\n.fields a:link, .fields a:visited {\n    list-style-type: none;\n    text-decoration: none; }\n\n.fields #field-title {\n    border-left: 4px solid #bb3232;\n    padding-left: 3px;\n    outline: none;\n    font-size: .8em;\n    color: #2b2b2b; }\n\n.multiple {\n  outline: none;\n  font-size: .8em;\n  color: #1a1a1a; }\n\n.multiple-title {\n  outline: none;\n  font-size: .8em;\n  color: #1a1a1a;\n  border-left: 4px solid #38a3a5;\n  padding: 3px; }\n\n.dashed-line {\n  border: none;\n  border-top: 1px dashed #e6e6e6;\n  color: #fff;\n  background-color: #fff;\n  height: 1px; }\n"

/***/ }),

/***/ "./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DwFormTeacherInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DwFormTeacherInputsComponent", function() { return DwFormTeacherInputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modals.service */ "./src/app/services/modals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cache = /** @class */ (function () {
    function Cache(title, value) {
        this.colorGood = "#38a3a5";
        this.colorBad = "#bb3232";
        this.width = function () { return "100"; }; //this.title.length+this.value.length * 3.2
        if (value != "")
            this.color = this.colorGood;
        else
            this.color = this.colorBad;
        this.title = title;
        this.value = value;
        this.default = value;
        this.placeholder = "Your answer";
    }
    return Cache;
}());
var Field = /** @class */ (function () {
    function Field(hint, cache) {
        this.io = { width: function (value) { return "100"; } }; //value.length * 3.2}
        cache.hint = hint;
        this.cache = cache;
        this.placeholder = "Your answer";
        this.hint = hint;
        this.value = cache.value;
        this.title = cache.title;
        //this.width = (this.title.length+this.value.length) * 3.2
        this.width = "100";
        this.color = cache.color;
    }
    return Field;
}());
var DwFormTeacherInputsComponent = /** @class */ (function () {
    function DwFormTeacherInputsComponent(data, modals) {
        var _this = this;
        this.data = data;
        this.modals = modals;
        this.gender = "other";
        this.race = "notSpecified";
        this.fields = [];
        this.fields2 = [];
        this.userDataService = this.data.profile.subscribe(function (profileData) {
            _this.fields = [
                _this.fName = new Field("", new Cache("First Name", profileData.firstName)),
                _this.lName = new Field("", new Cache("Last Name", profileData.lastName)),
                _this.age = new Field("e.g. 30", new Cache("Age", "")),
                _this.volunteer = new Field("    ", new Cache("Have you volunteered in K-12 public schools in the past six months?", "")),
                _this.phoneNum = new Field("e.g. 123 456 7890", new Cache("Phone Number", "")),
                _this.mailAddr = new Field("Street, Apt #, City, State, Zip", new Cache("Mailing Address", "")),
                _this.email = new Field("      ", new Cache("Email", "")),
                _this.gmail = new Field("      ", new Cache("Gmail Contact", "")),
            ];
            _this.fields2 = [
                _this.zip = new Field("      ", new Cache("Zip Code", "")),
                _this.city = new Field("      ", new Cache("City", "")),
                _this.state = new Field("      ", new Cache("State", "")),
                _this.country = new Field("      ", new Cache("Country", "")),
                _this.education = new Field("    ", new Cache("Please list any schools you attended & degrees earned (middle school, high school, college, grad school)", "")),
                _this.industry = new Field("e.g. health", new Cache("Industry", profileData.industry)),
                _this.company = new Field("", new Cache("Please name your company or organization", profileData.position)),
                _this.title = new Field("      ", new Cache("Please list your title", profileData.headline.split('at')[0])),
            ];
            _this.emitFormData();
        });
        this.data.getProfile(null);
    }
    DwFormTeacherInputsComponent.prototype.ngOnInit = function () {
    };
    DwFormTeacherInputsComponent.prototype.emitFormData = function () {
        this.modals.dwFormEmit({
            ratio: this.getFormData("ratio"),
            notAnswered: this.getFormData("notAnswered"),
            answered: this.getFormData("answered"),
            received: true,
            skip: false,
            target: "dwForm"
        });
    };
    DwFormTeacherInputsComponent.prototype.getFormData = function (id) {
        var answered = 0;
        var notAnswered = 0;
        this.fields.forEach(function (field) {
            if (field.color == "#38a3a5")
                answered += 1;
            else
                notAnswered += 1;
        });
        this.fields2.forEach(function (field) {
            if (field.color == "#38a3a5")
                answered += 1;
            else
                notAnswered += 1;
        });
        if (id == "answered")
            return answered;
        if (id == "notAnswered")
            return notAnswered;
        if (id == "ratio")
            return Math.floor(answered / (answered + notAnswered) * 100);
    };
    DwFormTeacherInputsComponent.prototype.edit_written = function (event, field, action) {
        event.target.blur();
        var value = event.target.value;
        if (value != "") {
            field.value = value;
            field.hint = value;
            field.cache.value = value;
            field.color = field.cache.colorGood;
        }
        else if (action == "enter") {
            field.hint = field.cache.hint;
            field.placeholder = field.cache.placeholder;
            field.cache.value = field.cache.default;
            field.value = field.cache.default;
            if (field.cache.default == "")
                field.color = field.cache.colorBad;
            else
                field.color = field.cache.colorGood;
        }
        else {
            field.value = field.cache.value;
            field.placeholder = field.cache.placeholder;
        }
        field.title = field.cache.title;
        field.placeholder = field.placeholder;
        this.emitFormData();
    };
    DwFormTeacherInputsComponent.prototype.edit_clicked = function (field) {
        field.value = "";
        field.placeholder = field.hint;
    };
    DwFormTeacherInputsComponent.prototype.edit_size = function (event, field) {
    };
    DwFormTeacherInputsComponent.prototype.setGender = function (type) { return type == this.gender; };
    DwFormTeacherInputsComponent.prototype.setRace = function (type) { return type == this.race; };
    DwFormTeacherInputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dwForm-teacher-inputs',
            template: __webpack_require__(/*! ./dwForm-teacher-inputs.component.html */ "./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.html"),
            styles: [__webpack_require__(/*! ./dwForm-teacher-inputs.component.scss */ "./src/app/components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_modals_service__WEBPACK_IMPORTED_MODULE_2__["ModalsService"]])
    ], DwFormTeacherInputsComponent);
    return DwFormTeacherInputsComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"container\">\n\n    <form>\n      <div class=\"block\">\n        <p>\n          <span class=\"title\">Race</span>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"american\">\n          <label>Native American</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"asian\">\n          <label>Asian</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"black\">\n          <label>Black or African American</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"pacific\">\n          <label>Pacific Islander</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"race\" value=\"white\">\n          <label>White</label>\n      </p>\n        <hr id=\"hr-separator\">\n        <p>\n          <span class=\"title\">Gender</span>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"male\"> <!--other types include \"radio\"-->\n          <label>Male</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"female\">\n          <label>Female</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"other\">\n          <label>Other</label>\n        </p>\n        <hr id=\"hr-separator\">\n        <p>\n          <span class=\"title\">Age Range</span>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"18\">\n          <label>18-24</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"25\" checked>\n          <label>25-34</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"35\" checked>\n          <label>35-49</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"50\" checked>\n          <label>50-64</label>\n          <br>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"gender\" value=\"m65\">\n          <label>65 and older</label>\n        </p>\n        <!-- <p class=\"form-group\">\n          <label for=\"name\">Age </label>\n          <br>\n          <input type=\"text\" class=\"form-control\" id=\"name\" required>\n        </p> -->\n      </div>\n\n      <br><hr id=\"hr-separator\">\n      <div class=\"block\">\n\n        <p class=\"form-group\">\n          <label for=\"college\" class=\"title\">College</label>\n          <br>\n          <select class=\"form-control\" id=\"colleges\" class=\"drop-down\" required>\n            <option *ngFor=\"let college of colleges\" [value]=\"college\">{{college}}</option>\n          </select>\n        </p>\n\n        <p class=\"form-group\">\n          <label for=\"industry\" class=\"title\">Industry</label>\n          <br>\n          <select class=\"form-control\" id=\"industries\" class=\"drop-down\"  required>\n            <option *ngFor=\"let industry of industries\" [value]=\"industry\" >{{industry}}</option>\n          </select>\n        </p>\n\n\n        <!-- <p>\n          <input class=\"w3-radio\" type=\"checkbox\" name=\"immigrant\" value=\"black\">\n          <label>First generation immigrant</label>\n        </p> -->\n\n        <p id=\"more\">More</p>\n    </div>\n\n\n      <!-- <button type=\"submit\" class=\"btn btn-success\">Submit</button> -->\n\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  font-size: .9em;\n  padding-left: 10px;\n  border: 1px solid #c4c4c4;\n  border-right: 0px solid #999999; }\n\n.block:focus {\n  border: 1px solid #38a3a5;\n  outline: none; }\n\n.block {\n  transition: all 0.12s linear;\n  border-radius: 3px;\n  padding: 0px;\n  width: 100%;\n  height: 400 px;\n  font-weight: lighter;\n  font-size: .87em;\n  color: #444444; }\n\n#hr-separator {\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #e6e6e6; }\n\n.title {\n  color: #38a3a5; }\n\n.drop-down {\n  width: 80%;\n  border: 1px solid #e6e6e6;\n  outline: none;\n  border-radius: 0px; }\n\n#more {\n  text-align: center;\n  text-decoration: underline; }\n\n#more:hover {\n  cursor: pointer; }\n\n#hr-footer {\n  border: 0;\n  height: 1px;\n  border-top: 2px solid #c2c2c2; }\n"

/***/ }),

/***/ "./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SpeakerFilterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerFilterFormComponent", function() { return SpeakerFilterFormComponent; });
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

var SpeakerFilterFormComponent = /** @class */ (function () {
    function SpeakerFilterFormComponent() {
        this.submitted = false;
        this.colleges = ["", "Bowdoin", "Colby"];
        this.industries = ["", "Computer Software", "Education", "E-Learning"];
    }
    SpeakerFilterFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    SpeakerFilterFormComponent.prototype.ngOnInit = function () {
    };
    SpeakerFilterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speaker-filter-form',
            template: __webpack_require__(/*! ./speaker-filter-form.component.html */ "./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.html"),
            styles: [__webpack_require__(/*! ./speaker-filter-form.component.scss */ "./src/app/components/forms/speaker-filter-form/speaker-filter-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakerFilterFormComponent);
    return SpeakerFilterFormComponent;
}());



/***/ }),

/***/ "./src/app/components/home-filter/home-filter.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-filter/home-filter.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n\n  <span id=\"close\">hide</span>\n  <app-speaker-filter-form style=\"float: left;margin-top:-20px;\"></app-speaker-filter-form>\n  \n  \n</div>"

/***/ }),

/***/ "./src/app/components/home-filter/home-filter.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-filter/home-filter.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  z-index: 100;\n  margin-left: 0px;\n  margin-top: 0px;\n  background-color: white;\n  color: #1f1f1f;\n  border-radius: 2px;\n  padding: 0px;\n  min-height: 480px;\n  width: 190px;\n  position: absolute; }\n\n#close {\n  float: left;\n  color: #2b2b2b;\n  font-weight: lighter;\n  font-size: .85em;\n  padding: 25px;\n  padding-bottom: 30px;\n  margin-top: -30px;\n  margin-left: 55px;\n  text-decoration: underline; }\n\n#close:hover {\n  cursor: pointer;\n  color: #38a3a5; }\n"

/***/ }),

/***/ "./src/app/components/home-filter/home-filter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-filter/home-filter.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFilterComponent", function() { return HomeFilterComponent; });
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

var HomeFilterComponent = /** @class */ (function () {
    function HomeFilterComponent() {
    }
    HomeFilterComponent.prototype.ngOnInit = function () {
    };
    HomeFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-filter',
            template: __webpack_require__(/*! ./home-filter.component.html */ "./src/app/components/home-filter/home-filter.component.html"),
            styles: [__webpack_require__(/*! ./home-filter.component.scss */ "./src/app/components/home-filter/home-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeFilterComponent);
    return HomeFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/home-main/home-main.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-main/home-main.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" [style.margin-left]=\"getMarginLeft()+'px'\">\n\n  <div id=\"event-note\">\n    You have \n    <span *ngIf='notifNum > 0'>{{notifNum}}</span>\n    <span *ngIf='notifNum == 0'>no</span>\n     event<span *ngIf='notifNum > 1'>s</span> \n     coming up.\n  </div>\n  <hr>\n\n  <!-- <app-profile></app-profile> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/home-main/home-main.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-main/home-main.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-left: -10px;\n  margin-right: -10px;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #d8d8d8; }\n\n.container {\n  margin-top: 10px;\n  position: absolute;\n  background-color: white;\n  margin-left: 250px;\n  color: #1f1f1f;\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  padding: 10px;\n  min-height: 1031px;\n  width: 673px; }\n\n.title {\n  color: #696969;\n  font-weight: lighter;\n  font-size: .85em; }\n\n#event-note {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-weight: lighter;\n  font-size: .9em;\n  width: 100%;\n  padding-right: 6px;\n  text-align: center; }\n\n#event-note #event-number {\n    color: #000;\n    font-weight: bold; }\n\n#event-note:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n#video {\n  border: 1px solid #555353;\n  border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/components/home-main/home-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-main/home-main.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainComponent", function() { return HomeMainComponent; });
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


var HomeMainComponent = /** @class */ (function () {
    function HomeMainComponent(data) {
        var _this = this;
        this.data = data;
        this.notifNum = 0;
        this.data.screenData.subscribe(function (data) { return _this.marginLeft = data.marginLeft; });
        this.data.profile.subscribe(function (data) { if (data.notifications != null)
            _this.notifNum = data.notifications; });
    }
    HomeMainComponent.prototype.ngOnInit = function () {
        this.data.reqScreenData();
    };
    HomeMainComponent.prototype.getMarginLeft = function () {
        if (this.marginLeft >= 5)
            return this.marginLeft + 250 - 40;
        return 250 - 25;
    };
    HomeMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-main',
            template: __webpack_require__(/*! ./home-main.component.html */ "./src/app/components/home-main/home-main.component.html"),
            styles: [__webpack_require__(/*! ./home-main.component.scss */ "./src/app/components/home-main/home-main.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeMainComponent);
    return HomeMainComponent;
}());



/***/ }),

/***/ "./src/app/components/home-search/home-search.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-search/home-search.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"container\">\n    \n    <!-- <div>\n      <input type=\"text\" class=\"searchTerm\" placeholder=\"search speaker ...\" (input)='newSearch($event.target.value)'>\n      <button type=\"submit\" class=\"searchButton\">\n        <i class=\"material-icons\">search</i>\n      </button>\n    </div> -->\n\n\n\n\n  <span id=\"left\">\n      <ul class=\"user-container\"> <!--[@listStagger]=\"users$\"-->\n        <li *ngFor=\"let speaker of speakers\" class=\"user-block\" (click)=\"showProfiles(speaker.id)\">\n          <a id=\"username\" routerLink=\"profile/{{speaker.id}}\"> {{speaker.firstName}} {{speaker.lastName}}</a>\n          <hr>\n          <img class=\"profile-img\" src={{speaker.pictureUrl}} alt=\"img\" >\n          <hr>\n          <div class=\"profession\">{{speaker.industry}}</div>\n          <div class=\"detail\">{{speaker.headline}}</div>\n          <div class=\"detail\">{{speaker.location}}</div>\n        </li>\n      </ul>\n  </span>"

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
    HomeSearchComponent.prototype.showProfiles = function (userId) {
        this.router.navigate(['profile/' + userId]);
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

module.exports = "\n<div id=\"container\" [style.margin-left]=\"getMarginLeft()+'px'\">\n  \n  <span id=\"left\" *ngIf=\"showLoadIcon == false\">\n      <!-- <hr id=\"separator\"> -->\n      <!-- <p id=\"title\" class=\"profession\"> Suggestions</p>  -->\n\n    <!-- <ul class=\"user-container\">\n      <li *ngFor=\"let user of users\" class=\"user-block\" (click)=\"showDetails(user.id)\">\n        <a id=\"username\" routerLink=\"details/{{user.id}}\"> {{user.firstName}} {{user.lastName}}</a>\n        <hr>\n        <img class=\"profile-img\" src={{user.pictureUrl}} alt=\"img\" >\n        <hr>\n        <div class=\"profession\"> {{user.industry}} </div>\n        <div class=\"detail\"> {{user.headline}} </div>\n        <div class=\"detail\"> {{user.location}} </div>\n      </li>\n    </ul> -->\n\n    <p id=\"more\" class=\"profession\">You may be interested in ({{suggestedCount}})</p>\n      <hr id=\"hr-top\">\n      <li *ngFor=\"let profile of profiles\" id=\"profile-block\" (click)=\"selectProfile(profile)\"\n          [style.border-left]=\"ifCurrent(profile,'border-left')\"\n          [style.background-color]=\"ifCurrent(profile,'background-color')\">\n        <img class=\"profile-img\" src={{profile.pictureUrl}} alt=\"img\" (error) = \"resetPicUrl(profile.id)\" [style.margin-left]=\"ifCurrent(profile,'pic-margin-left')\">\n        <span id=\"profiles-item-name\"  [style.margin-left]=\"ifCurrent(profile,'name-margin-left')\"> {{profile.firstName}} {{profile.lastName}}</span>\n        <span id=\"profiles-item-position\"  *ngIf='profile.position != \"\"' [style.margin-left]=\"ifCurrent(profile,'title-margin-left')\"> {{profile.industry}}</span>\n        <span id=\"profiles-item-position-empty\"  *ngIf='profile.position == \"\"' [style.margin-left]=\"ifCurrent(profile,'title-margin-left')\"> &nbsp;</span>\n      </li>\n  </span>\n\n  <div class=\"loader\" *ngIf=\"showLoadIcon == true\"></div>\n\n  <!-- <i id=\"loadIcon\" class=\"fa fa-spinner fa-spin\" *ngIf=\"showLoadIcon == true\"></i> -->\n\n\n</div>\n  \n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/home-suggests/home-suggests.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/home-suggests/home-suggests.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 430px;\n  margin-top: 10px;\n  margin-left: 5px;\n  position: fixed; }\n\n#left {\n  background-color: white;\n  border: 1px solid #cccccc;\n  float: left;\n  min-height: 650px; }\n\n#title {\n  color: #696969;\n  margin-left: 15px;\n  font-weight: lighter;\n  font-size: .85em; }\n\n.profession {\n  color: #069db1;\n  font-size: .80em;\n  font-family: 'Lucida Grande';\n  font-weight: lighter; }\n\n.detail {\n  font-size: 0.65em;\n  font-family: 'Lucida Grande';\n  color: #525252;\n  font-weight: lighter; }\n\n#separator {\n  margin-left: 10px;\n  border-top: 1px solid #d8d8d8;\n  width: 96%; }\n\n.user-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto;\n      grid-template-columns: auto auto auto;\n  grid-gap: 5px;\n  padding: 0 10px;\n  width: 90%;\n  list-style-type: none; }\n\n.user-block:hover {\n  cursor: pointer;\n  border: 1px solid #38a3a5;\n  background: white; }\n\n.user-block:hover hr {\n    border-top: 1px solid #a1a1a194; }\n\n.user-block:focus {\n  border: 1px solid #38a3a5;\n  outline: none; }\n\n.user-block {\n  transition: all 0.12s linear;\n  border: 1px solid lightgray;\n  background: white;\n  border-radius: 3px;\n  padding: 5px 0;\n  width: 130px;\n  height: 400 px;\n  text-align: center; }\n\n.user-block hr {\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #e6e6e6; }\n\n.user-block a {\n    font-size: .8em;\n    text-decoration: none;\n    color: #37393a;\n    text-align: left; }\n\n.user-block div {\n    margin-top: 5px;\n    margin-left: 3px;\n    text-align: left; }\n\n.fade-in {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.profile-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 0.3px;\n  width: 120px;\n  height: 120px; }\n\n#username {\n  font-family: 'Lucida Grande';\n  color: #525252;\n  font-weight: lighter; }\n\n#loadIcon {\n  font-size: 55px;\n  position: absolute;\n  margin-top: 150px;\n  left: 0;\n  margin-left: 200px;\n  color: #d1d0d0; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498dbda;\n  width: 60px;\n  height: 60px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite;\n  position: absolute;\n  margin-top: 150px;\n  left: 0;\n  margin-left: 200px; }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n#more {\n  margin-left: 15px; }\n\n#profile-block {\n  width: 180px;\n  list-style-type: none;\n  font-size: .8em;\n  color: #37393a;\n  text-align: left;\n  text-decoration: none;\n  border-bottom: 1px solid #e6e6e6;\n  padding: 13px;\n  padding-top: 15px;\n  padding-bottom: 20px; }\n\n#profile-block span {\n    list-style-type: none;\n    text-decoration: none;\n    color: #525252;\n    font-family: 'Lucida Grande';\n    font-weight: lighter;\n    margin-left: 54px;\n    width: 10px; }\n\n#profile-block:hover {\n  cursor: pointer; }\n\n#profile-block:hover span {\n    color: #38a3a5; }\n\n#profiles-item-position {\n  margin-top: 2px; }\n\n#profiles-item-position-empty {\n  display: block;\n  margin-top: 2px; }\n\n#profiles-item-name {\n  margin-top: 30px; }\n\n.profile-img {\n  float: left;\n  position: absolute;\n  margin-top: -2px;\n  margin-left: -5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px; }\n\n#hr-top {\n  margin-top: 25px;\n  border: 0.5px solid #d6d6d6;\n  margin-left: -1px;\n  margin-right: 0px;\n  margin-bottom: 0.5px; }\n\n#hr-border-top {\n  height: 1px;\n  border: 0;\n  border-bottom: 1px solid #e6e6e6;\n  margin-left: 38px;\n  margin-top: -12px;\n  margin-right: -13px; }\n\n#hr-border-bottom {\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #e6e6e6;\n  margin-left: 38px;\n  margin-top: 25px;\n  margin-right: -13px; }\n"

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
        this.data.users.subscribe(function (profilesData) {
            _this.suggestedCount = profilesData.length;
            _this.profiles = profilesData;
            _this.currentProfileId = profilesData[0].id;
            _this.data.profilesData.next(profilesData[0]);
        });
        this.data.screenData.subscribe(function (data) { return _this.marginLeft = data.marginLeft; });
        this.data.reqScreenData();
        this.data.getUsers(function (bool) { return _this.showLoadIcon = bool; });
    };
    HomeSuggestsComponent.prototype.ngAfterViewInit = function () {
        // this.moreUsersId.nativeElement.focus();
    };
    // showProfiles(userId){
    //   this.router.navigate(['profile/'+userId])
    // }
    HomeSuggestsComponent.prototype.selectProfile = function (profile) {
        this.currentProfileId = profile.id;
        this.data.profilesData.next(profile);
    };
    HomeSuggestsComponent.prototype.resetPicUrl = function (userId) {
        this.data.resetPicUrl(userId);
    };
    HomeSuggestsComponent.prototype.getMarginLeft = function () {
        if (this.marginLeft >= 5)
            return this.marginLeft - 10;
        return 5;
    };
    HomeSuggestsComponent.prototype.ifCurrent = function (profile, style) {
        if (style == "border-left" && profile.id == this.currentProfileId)
            return "4px solid #aaa";
        if (style == "pic-margin-left" && profile.id == this.currentProfileId)
            return "-9px";
        if (style == "name-margin-left" && profile.id == this.currentProfileId)
            return "50px";
        if (style == "title-margin-left" && profile.id == this.currentProfileId)
            return "50px";
        if (style == "background-color" && profile.id == this.currentProfileId)
            return "rgb(245, 245, 245)";
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

module.exports = "\n\n<div class=\"alert\" *ngIf=\"!alert.empty\"> \n  <a class=\"close\" (click)=\"closeMainAlert()\"></a>\n  <h4>{{alert.title}}</h4> {{alert.body}}\n</div>\n\n<div>\n  <!-- <app-home-search ></app-home-search> -->\n  <app-home-suggests></app-home-suggests>\n</div>\n\n<app-home-main>    </app-home-main>\n\n\n\n\n\n<!-- <div class=\"g-hangout\" data-render=\"createhangout\"\n  invites=\"[{ id : 'foo@example.com', invite_type : 'EMAIL' }]\">\n</div> -->\n\n"

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
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
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
        // launchModal = false;
        this.alertDisabled = false;
        this.alert = {
            title: "",
            body: "",
            empty: true
        };
        this.route.params.subscribe(function (params) { return _this.searchSpeaker(params.word); });
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.profileData = this.data.profile.subscribe( profileData => { // init subscriber for profile data emitter
        //   this.firstName = profileData.firstName
        //   if (profileData.type == null) this.launchModal = true
        // }) 
        var _this = this;
        this.alertsData = this.alertService.alerts.subscribe(function (alertsData) {
            if (alertsData.tag == "main") {
                if (alertsData.status != "empty")
                    _this.alert.empty = true;
                _this.alert.title = alertsData.title;
                _this.alert.body = alertsData.body;
            }
        });
        this.alertService.getAlert("main", null);
    };
    //called from html if launchModal == true
    // initModal(){this.launchModal = false; this.ngxSmartModalService.getModal("profileType").open()}
    //if profile type selected, close modal and update db
    // updateProfileType(type){
    //   this.ngxSmartModalService.getModal("profileType").close()    
    //   this.data.updateProfileType(type).subscribe()
    //   location.reload()
    // }
    HomeComponent.prototype.showDetails = function (id) {
        this.router.navigate(['profile/' + id]);
    };
    HomeComponent.prototype.closeMainAlert = function () {
        this.alert.empty = true;
        this.alertService.sawAlert("main", null);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // this.profileData.unsubscribe();
        this.alertsData.unsubscribe();
    };
    HomeComponent.prototype.searchSpeaker = function (word) {
        this.data.getSpeakers(word, null);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__["NgxSmartModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<span *ngIf='hasData()' class=\"container\">\n  <span>\n    <img class=\"profile-img\" src={{profile.pictureUrl}} alt=\"img\" >\n    <br>\n    <span style=\" color:rgb(127, 128, 129); font-size:1.6e;\"> {{profile.firstName}} {{profile.lastName}} </span>\n \n    <div style=\"margin-left: 50px\" *ngIf=\"profile.industry != ''\">\n      <span style=\"color:rgb(133, 137, 138);text-decoration: underline;\"> Industry:</span> \n      <span class=\"profession\" > &nbsp;{{profile.industry}}</span> \n    </div>\n\n    <div class=\"detail\" style=\"text-align: center;text-decoration: underline;\"> {{profile.headline}}</div>\n\n    <div style=\"margin-left: 50px;margin-top:20px;\" *ngIf=\"profile.summary != ''\"> \n      <span style=\"margin-left: 0px;color:rgb(133, 137, 138); text-decoration: underline;\" > Summary:</span> \n      <span style=\"font-size: 0.85em;\"> &nbsp;{{profile.summary}} </span>\n    </div>\n    <button class=\"button\" style=\"margin-top: 30px;\">connect <i class=\"fa fa-user-o \" style=\"margin-left:6px; font-size:16px\"></i></button>\n    \n  </span>\n\n\n</span>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 300px;\n  position: relative;\n  float: left; }\n\n.profession {\n  color: #069db1;\n  font-size: .95em; }\n\n.detail {\n  font-size: 0.8em; }\n\n.profile-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 120px;\n  height: 120px;\n  border: 1px solid #919191; }\n\n.button {\n  background-color: #9c9c9c;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: lighter;\n  margin: 2px 0px;\n  border-radius: 2px;\n  width: 150px;\n  cursor: pointer;\n  top: 40px;\n  margin-left: 20px; }\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(data) {
        var _this = this;
        this.data = data;
        this.profile = null;
        //this.route.params.subscribe(params => this.userId = params.id) 
        this.data.user.subscribe(function (userData) { return _this.profile = userData; });
        this.data.profilesData.subscribe(function (data) { return _this.profile = data; });
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.hasData = function () {
        return this.profile != null;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/topbar/topbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ngx-smart-modal #accounttype  identifier=\"accounttype\" [closable]=\"false\" [dismissable]=\"false\" [autostart]=\"false\" >\n  <pre style=\"font-size: .95em; font-family: 'Lucida Grande'\">Welcome {{profile.fName}}, how would you describe yourself ?</pre>\n  <div style=\"margin-top: 20px;\">\n    <button class=\"button\" style=\"display: inline;margin-left: 100px;\" (click)=\"updateProfileType('speaker')\">Speaker &nbsp; </button>\n    <button class=\"button\" style=\"display: inline;margin-left: 50px ;\" (click)=\"updateProfileType('teacher')\">Educator</button>\n  </div>\n  <p class=\"footer\" style=\"margin-top: 20px;\"> This information helps us match you with the right accounts</p>\n</ngx-smart-modal>\n\n\n<ngx-smart-modal #dwform  identifier=\"dwform\" [closable]=\"false\" [dismissable]=\"false\" [autostart]=\"false\" *ngIf=\"dwForm.skip == false\">\n    <app-dwForm></app-dwForm>\n</ngx-smart-modal>\n\n<!-- <app-home-filter *ngIf=\"showFilter\" [style.margin-left]=\"getMarginLeft()+'px'\"></app-home-filter> -->\n\n\n\n<nav id=\"navigation\">\n\n    <ul class=\"topnav\">  \n\n\n      <li><a routerLink=\"home\" [style.margin-left]=\"getMarginLeft()+'px'\" (click)=\"location.reload()\">\n                <img class=\"icon\" [src]=\"'assets/img/logo.jpg'\" alt=\"Refresh\" >\n          </a></li>\n  \n      \n      <input id=\"searchBarId\" #searchBarId type=\"text\" class=\"searchTerm\" placeholder=\"search profile...\" (input)='newSearch($event.target.value)' *ngIf=\"seeTabElements == true\">\n        \n      <li style=\"float: right;margin-right: 1% ; margin-top: 4px;\" *ngIf=\"signedIn()\"> \n          <a (click)=\"signOut()\" class=\"item\">\n            <span id=\"exit\">Exit</span></a>\n        </li>\n      \n      <span class=\"item\" *ngIf=\"profile.hasData\" (click)=\"showProfile()\">\n        <img class=\"profile-img\" src={{profile.picUrl}} alt=\"img\" (click)=\"showProfile()\">\n      </span>\n\n\n    </ul>\n  </nav>\n\n\n  "

/***/ }),

/***/ "./src/app/components/topbar/topbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item:hover {\n  cursor: pointer; }\n\n#navigation {\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  z-index: 50; }\n\n#navigation ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: white;\n    border-radius: 2px;\n    border-top: 1px solid #dfdfdf;\n    border-bottom: 1px solid #b9b9b9;\n    min-height: 40px; }\n\n#navigation li {\n    float: left; }\n\n#navigation li a {\n    display: block;\n    text-align: center;\n    padding: 0px 12px;\n    margin-top: 7px;\n    text-decoration: none;\n    border-radius: 2px;\n    text-decoration: none; }\n\n#navigation .activated {\n    color: #666666; }\n\n#navigation .not-activated {\n    color: #454646; }\n\n.topnav {\n  position: relative;\n  overflow: hidden;\n  background-color: #333; }\n\n.topnav-centered a {\n  float: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.profile-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  float: right;\n  border-radius: 1%;\n  margin-top: 9px;\n  width: 20px;\n  height: 25px;\n  margin-right: 0px;\n  border-left: 4px solid #d6d5d5;\n  border-right: 4px solid #d6d5d5; }\n\n.icon {\n  margin-top: -4px;\n  border-radius: 2px;\n  width: 33px;\n  border: 1px solid #b9b9b9; }\n\n#username {\n  margin-right: 3px;\n  margin-top: 7px;\n  color: #525252;\n  font-weight: lighter;\n  font-size: 15px; }\n\n#username:hover {\n  text-decoration: underline; }\n\n#exit {\n  font-size: 15px;\n  color: #525252; }\n\n#exit:hover {\n  text-decoration: underline;\n  color: #000; }\n\n.searchTerm {\n  margin-left: 10px;\n  width: 149px;\n  border: 1px solid #a0a0a0;\n  padding: 2px 7px;\n  height: 26px;\n  border-radius: 1px;\n  margin-top: 4px;\n  outline: none;\n  color: #131313;\n  font-size: 14px;\n  font-weight: lighter; }\n\n#logout {\n  color: #454646; }\n\n#logout:hover {\n  color: #7e7e7e; }\n\n.flashchats:hover {\n  color: #7e7e7e; }\n\n#notification-icon {\n  background-color: #d34f3d;\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: lighter;\n  font-size: 13px;\n  margin-top: 30px;\n  margin-left: -20px;\n  z-index: 100;\n  color: white; }\n\n#notification-flashchat:hover {\n  background-color: #f05b48; }\n\n#progress {\n  background-color: #c9c9c9;\n  width: 107px;\n  margin-right: 5px;\n  margin-top: 2px;\n  float: right;\n  display: inline; }\n\n#bar {\n  width: 0%;\n  height: 8px;\n  background-color: #38a3a5;\n  text-align: center;\n  line-height: 30px;\n  color: white;\n  border-right: 0px solid #e9e7e7; }\n\n#dwForm-ratio {\n  font-size: .75em;\n  margin-right: -100px;\n  color: #3d3d3d; }\n\n#completion {\n  float: right;\n  margin-top: 2px;\n  margin-right: 40px; }\n"

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
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/modals.service */ "./src/app/services/modals.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
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
    function TopbarComponent(router, auth, data, modals, ngxSmartModalService) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.data = data;
        this.modals = modals;
        this.ngxSmartModalService = ngxSmartModalService;
        this.launchAccountTypeModal = false;
        this.launchDwFormModal = false;
        this.showFilter = true;
        this.dwForm = {
            ratio: null, answered: null, notAnswered: null, received: null,
            skip: false //topbar relevant
        };
        this.profile = {
            fName: "",
            lName: "",
            picUrl: "",
            type: null,
            notifications: null,
            hasData: false
        };
        this.seeTabElements = false;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
                _this.currentUrl = e.url;
        });
    }
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //DATA RECEPTION
        //profile data
        this.userDataService = this.data.profile.subscribe(function (profileData) {
            _this.profile.hasData = true;
            _this.profile.fName = profileData.firstName;
            _this.profile.lName = profileData.lastName.charAt(0);
            _this.profile.picUrl = profileData.pictureUrl;
            _this.profile.notifications = profileData.notifications;
            _this.profile.type = profileData.type;
            if (_this.profile.type == null)
                _this.ngxSmartModalService.getModal("accounttype").open();
            else if (true)
                _this.ngxSmartModalService.getModal("dwform").open(); //check that use has not completed forms
            _this.updateTabElements();
            if (typeof profileData.order != "undefined" && profileData.order == "sign out")
                _this.signOut();
            //if (profileData.action == "signedUp") location.reload() // refresh page to get signup modal
        });
        //screen size css data
        this.data.screenData.subscribe(function (data) { return _this.marginLeft = data.marginLeft; });
        //DW form data
        this.modals.dwFormBucket.subscribe(function (data) {
            if (data.target == "topbar") {
                _this.dwForm = data;
                _this.ngxSmartModalService.getModal("dwform").open();
            }
        });
        //DATA REQUESTS
        this.data.getProfile(null); //for now, emits profile data
        this.data.emitScreenData({
            innerWidth: window.innerWidth,
            marginLeft: Math.floor((window.innerWidth - 1218) / 2)
        });
    };
    TopbarComponent.prototype.updateProfileType = function (type) {
        this.ngxSmartModalService.getModal("accounttype").close();
        this.data.updateProfileType(type).subscribe();
        location.reload();
    };
    TopbarComponent.prototype.updateTabElements = function () {
        if (this.profile.hasData)
            this.seeTabElements = true;
        else
            this.seeTabElements = false;
    };
    TopbarComponent.prototype.signedIn = function () {
        return this.auth.isUserIn();
    };
    TopbarComponent.prototype.signOut = function () {
        this.profile = {
            fName: "",
            lName: "",
            picUrl: "",
            type: null,
            notifications: null,
            hasData: false
        };
        this.seeTabElements = false;
        if (!this.userDataService == null)
            this.userDataService.unsubscribe();
        this.router.navigate(['/auth']);
        this.data.signOut();
    };
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
        this.router.navigate(['profile/' + localStorage.getItem("sid")]);
    };
    TopbarComponent.prototype.onResize = function (event) {
        this.data.emitScreenData({
            innerWidth: window.innerWidth,
            marginLeft: Math.floor((window.innerWidth - 1218) / 2)
        });
    };
    TopbarComponent.prototype.getMarginLeft = function () {
        if (this.marginLeft >= 5)
            return this.marginLeft - 22;
        return -7;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchBarId'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TopbarComponent.prototype, "searchBarId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TopbarComponent.prototype, "onResize", null);
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/components/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/components/topbar/topbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__["NgxSmartModalService"]])
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
                _this.signOut();
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
        this.formData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: top-bar | emmiter: forms-setting
        this.screenData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //subscriptions: suggests | emmiter: top-bar
        this.profilesData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"](1); //subscriptions: home-main | emmiter: profiles
    }
    /* PROFILE */
    //refresh profile data if session active, called from topbar
    DataService.prototype.getProfile = function (callback) {
        var sessionId = localStorage.getItem("sid");
        if (sessionId != null)
            this.refreshProfileData(sessionId, callback);
    };
    //tryPersist helper function
    DataService.prototype.refreshProfileData = function (sessionId, callback) {
        var _this = this;
        this.http.get(this.envir.getServer("noEncode") + '/data/profile/' + sessionId).subscribe(function (res) {
            var data = res;
            if (callback != null)
                callback(data);
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
            console.log();
            if (user.hasPicture == "false")
                user.pictureUrl = _this.envir.getServer("noEncode") + user.pictureUrl;
        });
        this.users.emit(data);
    };
    DataService.prototype.resetPicUrl = function (userId) {
        var _this = this;
        console.log("etetehsvbreahivbairj");
        this.http.get(this.envir.getServer("noEncode") + '/auth/resetPicUrl/' + userId).subscribe(function (res) {
            _this.getUsers(function () { });
        });
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
    DataService.prototype.emitFormData = function (data) {
        this.formData.emit(data);
    };
    DataService.prototype.emitScreenData = function (data) {
        this.screenData.emit(data);
    };
    DataService.prototype.reqScreenData = function () {
        this.emitScreenData({
            innerWidth: window.innerWidth,
            marginLeft: Math.floor((window.innerWidth - 1218) / 2)
        });
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

/***/ "./src/app/services/modals.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/modals.service.ts ***!
  \********************************************/
/*! exports provided: ModalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsService", function() { return ModalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalsService = /** @class */ (function () {
    function ModalsService() {
        this.dwFormBucket = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1); //listeners: topbar
    }
    ModalsService.prototype.dwFormEmit = function (data) {
        this.dwFormBucket.next(data);
    };
    ModalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModalsService);
    return ModalsService;
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