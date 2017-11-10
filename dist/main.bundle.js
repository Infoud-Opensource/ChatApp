webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-router/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats_component__ = __webpack_require__("../../../../../src/app/chats/chats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__group_form_group_form_component__ = __webpack_require__("../../../../../src/app/group-form/group-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__group_chatroom_group_chatroom_component__ = __webpack_require__("../../../../../src/app/group-chatroom/group-chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_guards_private_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/private-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_guards_public_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/public-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// auth gaurds


var Routes = [
    {
        path: 'public', component: __WEBPACK_IMPORTED_MODULE_5__index_index_component__["a" /* IndexComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_guards_public_guard_service__["a" /* PublicGuardService */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_12__services_guards_public_guard_service__["a" /* PublicGuardService */]],
        children: [
            { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */] },
            { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__["a" /* SignUpComponent */] },
            { path: '', redirectTo: 'signIn', pathMatch: 'full' },
            { path: '**', redirectTo: 'signIn' }
        ]
    },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_private_guard_service__["a" /* PrivateGuardService */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_11__services_guards_private_guard_service__["a" /* PrivateGuardService */]],
        children: [
            { path: 'chats', component: __WEBPACK_IMPORTED_MODULE_7__chats_chats_component__["a" /* ChatsComponent */] },
            { path: 'chatRoom/:id', component: __WEBPACK_IMPORTED_MODULE_6__chat_room_chat_room_component__["a" /* ChatRoomComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */] },
            { path: 'group', component: __WEBPACK_IMPORTED_MODULE_9__group_form_group_form_component__["a" /* GroupFormComponent */] },
            { path: 'groupRoom/:id', component: __WEBPACK_IMPORTED_MODULE_10__group_chatroom_group_chatroom_component__["a" /* GroupChatroomComponent */] },
            { path: '', redirectTo: 'chats', pathMatch: 'full' },
            { path: '**', redirectTo: 'chats' }
        ]
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: '**', redirectTo: 'public' }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(Routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ],
            declarations: []
        })
    ], AppRouterModule);
    return AppRouterModule;
}());

//# sourceMappingURL=app-router.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_router_app_router_module__ = __webpack_require__("../../../../../src/app/app-router/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_guards_private_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/private-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_guards_public_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/public-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service_user_service__ = __webpack_require__("../../../../../src/app/services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_upload_photo_upload_photo_service__ = __webpack_require__("../../../../../src/app/services/upload-photo/upload-photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_message_service_message_service__ = __webpack_require__("../../../../../src/app/services/message-service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_group_group_service__ = __webpack_require__("../../../../../src/app/services/group/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chats_chats_component__ = __webpack_require__("../../../../../src/app/chats/chats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__group_form_group_form_component__ = __webpack_require__("../../../../../src/app/group-form/group-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__display_status_display_status_component__ = __webpack_require__("../../../../../src/app/display-status/display-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__display_delivery_status_display_delivery_status_component__ = __webpack_require__("../../../../../src/app/display-delivery-status/display-delivery-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__group_chatroom_group_chatroom_component__ = __webpack_require__("../../../../../src/app/group-chatroom/group-chatroom.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular 









//angular material


//services







//components













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_23__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__chat_room_chat_room_component__["a" /* ChatRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_25__chats_chats_component__["a" /* ChatsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__group_form_group_form_component__["a" /* GroupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__display_status_display_status_component__["a" /* DisplayStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_29__display_delivery_status_display_delivery_status_component__["a" /* DisplayDeliveryStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_30__group_chatroom_group_chatroom_component__["a" /* GroupChatroomComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_router_app_router_module__["a" /* AppRouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCheckboxModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__services_guards_private_guard_service__["a" /* PrivateGuardService */],
                __WEBPACK_IMPORTED_MODULE_13__services_guards_public_guard_service__["a" /* PublicGuardService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_message_service_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_15__services_upload_photo_upload_photo_service__["a" /* UploadProfileService */],
                __WEBPACK_IMPORTED_MODULE_17__services_group_group_service__["a" /* GroupService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-room/chat-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content{\n    padding: 20px 20px 20px 20px;\n}\n.message-list{\n    font-size: 18px;\n}\n.button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.bubble{\n    background-color: #F2F2F2;\n    border-radius: 30px;\n    display: inline-block;\n    padding: 10px 18px;\n    position: relative;\n    vertical-align: top;\n  }\n  .you {\n    height: 50px;\n    display: inherit;\n    margin: 5px 45px 5px 20px;\n    background: #CFD8DC;\n  }\n  .you::before {\n    left: -9px;\n  }\n  .me {\n    height: 50px;\n    display: inherit;\n    margin: 5px 0px 5px 70px;\n    background: #ECEFF1;\n  }\n  .me::before {\n    right: -9px;\n  }\n  .message-row{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-room/chat-room.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"button\">\n  <button mat-icon-button [routerLink]=\"['./home']\">\n    <mat-icon>keyboard_backspace</mat-icon>\n  </button>\n</mat-toolbar>\n<div class=\"main-content\">\n  <div class=\"background\">\n\n    <div *ngFor=\"let item of msgList | async\" class=\"message-list\">\n\n      <div class=\"bubble\" [ngClass]=\"{'you':isYou(item.sender), 'me':isMe(item.sender)}\">\n        <span class=\"message-row\">\n          <p class=\"text\">{{ item.text }}</p>\n            <app-display-delivery-status class=\"status\" *ngIf=\"isMe(item.sender)\" [status]=\"item.status\"></app-display-delivery-status>\n        </span>\n      </div>\n    </div>\n\n    <div class=\"chat-text-box\">\n      <mat-input-container class=\"input-field\">\n        <input matInput type=\"text\" placeholder=\"Write Message Here..\" [(ngModel)]=\"msg\" (keyup.enter)=\"sendMessage()\">\n      </mat-input-container>&nbsp;\n      <button mat-raised-button color=\"primary\" (click)=\"sendMessage()\">Send</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-room/chat-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service_message_service__ = __webpack_require__("../../../../../src/app/services/message-service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatRoomComponent = (function () {
    function ChatRoomComponent(_authService, _activateRoute, _msg) {
        var _this = this;
        this._authService = _authService;
        this._activateRoute = _activateRoute;
        this._msg = _msg;
        this.onRouteParam = function (data) {
            _this.convId = data['id'];
            _this.msgList = _this._msg.getMessages(_this.convId);
            _this.name = _this._authService.getCurrentUser();
        };
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        this._activateRoute.params.subscribe(this.onRouteParam);
        this.userId = this._authService.getCurrentUserId();
    };
    ChatRoomComponent.prototype.sendMessage = function () {
        if (!this.userId || !this.msg)
            return;
        this._msg.sendMessage({
            "text": this.msg,
            "sender": this.userId,
        });
        this.msg = "";
    };
    ChatRoomComponent.prototype.isYou = function (id) {
        return id != this.userId;
    };
    ChatRoomComponent.prototype.isMe = function (id) {
        return id == this.userId;
    };
    ChatRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-chat-room',
            template: __webpack_require__("../../../../../src/app/chat-room/chat-room.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-room/chat-room.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service_message_service__["a" /* MessageService */]) === "function" && _c || Object])
    ], ChatRoomComponent);
    return ChatRoomComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=chat-room.component.js.map

/***/ }),

/***/ "../../../../../src/app/chats/chats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.item{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #ECEFF1;\n}\n.col1{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 20%;\n}\n.col2{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 50%;\n}\n.col3{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 20%;\n}\n.img-dp {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chats/chats.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"button\">\n  <button mat-mini-fab [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item [routerLink]=\"['../group']\">Create Group</button>\n    <button mat-menu-item [routerLink]=\"['../settings']\">Settings</button>\n    <button mat-menu-item (click)=\"logout()\">Logout</button>\n\n  </mat-menu>\n</mat-toolbar>\n\n<mat-list>\n  <!-- *ngIf=\"recent?.length > 0\" -->\n  <div>\n    <h3 mat-subheader>Recent Chats</h3>\n    <mat-list-item class=\"item\" *ngFor=\"let recent of chats.recent\" (click)=\"goToChat(recent.uid)\">\n      <div class=\"col1\">\n        <img class=\"img-dp\" [src]=\"recent.imageUrl\" />\n      </div>\n      <p class=\"col2\" mat-line>{{recent.name}}</p>\n      <p class=\"col3\" mat-line>\n        <app-display-status [status]=\"recent.status\"></app-display-status>\n      </p>\n    </mat-list-item>\n  </div>\n\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Groups</h3>\n  <mat-list-item class=\"item\" *ngFor=\"let group of groups\" (click)=\"goToGroupChatroom(group.grpId)\">\n    <!-- <img class=\"img-dp\" [src]=\"friend.imageUrl\" /> -->\n    <p mat-line>{{group.name}}</p>\n  </mat-list-item>\n\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Friends</h3>\n  <mat-list-item class=\"item\" *ngFor=\"let friend of chats.friends\" (click)=\"goToChat(friend.uid)\">\n    <img class=\"img-dp\" [src]=\"friend.imageUrl\" />\n    <p class=\"col2\" mat-line>{{friend.name}}</p>\n    <p class=\"col3\" mat-line>\n      <app-display-status [status]=\"friend.status\"></app-display-status>\n    </p>\n  </mat-list-item>\n</mat-list>"

/***/ }),

/***/ "../../../../../src/app/chats/chats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__ = __webpack_require__("../../../../../src/app/services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsComponent = (function () {
    function ChatsComponent(_userService, _authService) {
        this._userService = _userService;
        this._authService = _authService;
        this.chats = {
            recent: [],
            friends: []
        };
        this.groups = [];
    }
    ChatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Chats
        this._userService
            .getChats()
            .subscribe(function (data) {
            _this.chats.recent = data.recent;
            _this.chats.friends = data.friends;
        });
        // Get Groups
        this._userService
            .getAllGroups()
            .subscribe(function (data) {
            _this.groups = data;
        });
    };
    ChatsComponent.prototype.goToGroupChatroom = function (grpId) {
        this._userService.redirectToGrpChat(grpId);
    };
    ChatsComponent.prototype.goToChat = function (uid) {
        this._userService.toChatRoom(uid);
    };
    ChatsComponent.prototype.logout = function () {
        this._authService.logout();
    };
    ChatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-chats',
            template: __webpack_require__("../../../../../src/app/chats/chats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chats/chats.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], ChatsComponent);
    return ChatsComponent;
    var _a, _b;
}());

//# sourceMappingURL=chats.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-delivery-status/display-delivery-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-delivery-status/display-delivery-status.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-icon>{{ icon }}</mat-icon>"

/***/ }),

/***/ "../../../../../src/app/display-delivery-status/display-delivery-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayDeliveryStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayDeliveryStatusComponent = (function () {
    function DisplayDeliveryStatusComponent() {
    }
    DisplayDeliveryStatusComponent.prototype.ngOnInit = function () { this.doChange(this.status); };
    DisplayDeliveryStatusComponent.prototype.doChange = function (status) {
        if (status === 3) {
            this.icon = "done_all";
        }
        if (status === 2) {
            this.icon = "done";
        }
        if (status === 1) {
            this.icon = "schedule";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('status'),
        __metadata("design:type", String)
    ], DisplayDeliveryStatusComponent.prototype, "status", void 0);
    DisplayDeliveryStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-display-delivery-status',
            template: __webpack_require__("../../../../../src/app/display-delivery-status/display-delivery-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-delivery-status/display-delivery-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayDeliveryStatusComponent);
    return DisplayDeliveryStatusComponent;
}());

//# sourceMappingURL=display-delivery-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-status/display-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".status-online {\n    color: rgb(0, 255, 0)\n}\n\n.status-offline {\n    color: rgb(201, 201, 201)\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-status/display-status.component.html":
/***/ (function(module, exports) {

module.exports = "<span [class]=\"statusClass\">\n    <mat-icon>{{ icon }}</mat-icon>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/display-status/display-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayStatusComponent = (function () {
    function DisplayStatusComponent() {
    }
    DisplayStatusComponent.prototype.ngOnInit = function () { this.doChange(this.status); };
    DisplayStatusComponent.prototype.doChange = function (status) {
        if (status === "online") {
            this.icon = "radio_button_checked";
            this.statusClass = "status-online";
        }
        else {
            this.icon = "radio_button_checked";
            this.statusClass = "status-offline";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('status'),
        __metadata("design:type", String)
    ], DisplayStatusComponent.prototype, "status", void 0);
    DisplayStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-display-status',
            template: __webpack_require__("../../../../../src/app/display-status/display-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-status/display-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayStatusComponent);
    return DisplayStatusComponent;
}());

//# sourceMappingURL=display-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/group-chatroom/group-chatroom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content{\n    padding: 20px 20px 20px 20px;\n}\n.message-list{\n    font-size: 18px;\n}\n.button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.bubble{\n    background-color: #F2F2F2;\n    border-radius: 30px;\n    display: inline-block;\n    padding: 10px 18px;\n    position: relative;\n    vertical-align: top;\n  }\n  .you {\n    height: 50px;\n    display: inherit;\n    margin: 5px 45px 5px 20px;\n    background: #CFD8DC;\n  }\n  .you::before {\n    left: -9px;\n  }\n  .me {\n    height: 50px;\n    display: inherit;\n    margin: 5px 0px 5px 70px;\n    background: #ECEFF1;\n  }\n  .me::before {\n    right: -9px;\n  }\n  .message-row{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group-chatroom/group-chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"button\">\n  <button mat-icon-button [routerLink]=\"['./home']\">\n    <mat-icon>keyboard_backspace</mat-icon>\n  </button>\n</mat-toolbar>\n<div class=\"main-content\">\n  <div class=\"background\">\n\n    <div *ngFor=\"let item of msgList | async\" class=\"message-list\">\n\n      <div class=\"bubble\" [ngClass]=\"{'you':isYou(item.sender), 'me':isMe(item.sender)}\">\n        <span class=\"message-row\">\n          <p>{{ item.name }}</p>\n          <p class=\"text\">{{ item.text }}</p>\n            <app-display-delivery-status class=\"status\" *ngIf=\"isMe(item.sender)\" [status]=\"item.status\"></app-display-delivery-status>\n        </span>\n      </div>\n    </div>\n\n    <div class=\"chat-text-box\">\n      <mat-input-container class=\"input-field\">\n        <input matInput type=\"text\" placeholder=\"Write Message Here..\" [(ngModel)]=\"msg\" (keyup.enter)=\"sendMessage()\">\n      </mat-input-container>&nbsp;\n      <button mat-raised-button color=\"primary\" (click)=\"sendMessage()\">Send</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/group-chatroom/group-chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_group_group_service__ = __webpack_require__("../../../../../src/app/services/group/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupChatroomComponent = (function () {
    function GroupChatroomComponent(_authService, _activateRoute, _msg) {
        var _this = this;
        this._authService = _authService;
        this._activateRoute = _activateRoute;
        this._msg = _msg;
        this.onRouteParam = function (data) {
            _this.groupId = data['id'];
            _this.msgList = _this._msg.getMessages(_this.groupId);
            _this.name = _this._authService.getCurrentUser().name;
        };
    }
    GroupChatroomComponent.prototype.ngOnInit = function () {
        this._activateRoute.params.subscribe(this.onRouteParam);
        this.userId = this._authService.getCurrentUserId();
    };
    GroupChatroomComponent.prototype.sendMessage = function () {
        if (!this.userId || !this.msg)
            return;
        this._msg.sendMessage({
            "text": this.msg,
            "sender": this.userId,
            "name": this.name
        });
        this.msg = "";
    };
    GroupChatroomComponent.prototype.isYou = function (id) {
        return id != this.userId;
    };
    GroupChatroomComponent.prototype.isMe = function (id) {
        return id == this.userId;
    };
    GroupChatroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-group-chatroom',
            template: __webpack_require__("../../../../../src/app/group-chatroom/group-chatroom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/group-chatroom/group-chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_group_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_group_group_service__["a" /* GroupService */]) === "function" && _c || Object])
    ], GroupChatroomComponent);
    return GroupChatroomComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=group-chatroom.component.js.map

/***/ }),

/***/ "../../../../../src/app/group-form/group-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-list{\n    padding: 20px;\n}\n.group-name{\n    min-width: 100%;\n}\n.group-button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group-form/group-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"button\">\n  <button mat-icon-button [routerLink]=\"['./home']\">\n    <mat-icon>keyboard_backspace</mat-icon>\n  </button>\n</mat-toolbar>\n<div class=\"user-list\">\n    <mat-form-field class=\"group-name\">\n      <input matInput placeholder=\"Enter Group Name\" name=\"something\" [formControl]=\"name\">\n      <mat-error *ngIf=\"name.invalid\"> Fullname is <strong> required</strong> </mat-error>\n    </mat-form-field>\n    \n\n    <div *ngFor=\"let user of users | async\">\n      <mat-checkbox mat-button color=\"primary\" (change)=\"toggleUser($event.checked, user.uid)\">{{ user.name }}</mat-checkbox>\n    </div>\n  <br>\n  <div class=\"group-button\">\n    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"createGroup($event)\">Create Group</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/group-form/group-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__ = __webpack_require__("../../../../../src/app/services/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupFormComponent = (function () {
    function GroupFormComponent(_userService) {
        this._userService = _userService;
        this.selectedUsers = [];
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
    }
    GroupFormComponent.prototype.ngOnInit = function () { this.users = this._userService.getAllUsersForGroups(); };
    GroupFormComponent.prototype.createGroup = function (event) {
        if (!this.isValid())
            return;
        console.log("valid");
        this._userService.toGroupChat(this.name.value, this.selectedUsers);
    };
    GroupFormComponent.prototype.toggleUser = function (event, uid) {
        if (event) {
            this.selectedUsers.push(uid);
        }
        else {
            this.selectedUsers.splice(this.selectedUsers.indexOf(uid), 1);
        }
    };
    GroupFormComponent.prototype.isValid = function () { return this.name.valid && this.selectedUsers.length; };
    GroupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-group-form',
            template: __webpack_require__("../../../../../src/app/group-form/group-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/group-form/group-form.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], GroupFormComponent);
    return GroupFormComponent;
    var _a;
}());

//# sourceMappingURL=group-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(_firebaseAuth, _router, _db) {
        this._firebaseAuth = _firebaseAuth;
        this._router = _router;
        this._db = _db;
        this.userData$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.subAuthState().subscribe();
    }
    AuthService.prototype.subAuthState = function () {
        var _this = this;
        return this._firebaseAuth.authState
            .filter(function (user) { return user ? true : false; })
            .switchMap(function (user) { return _this.getUserData(user.uid); })
            .do(function () {
            _this.updateOnConnect();
            _this.updateOnDisconnect();
        });
    };
    AuthService.prototype.signup = function (email, password, name) {
        var _this = this;
        return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) { return _this.setNameToFirebase(value.uid, name); })
            .then(function () { _this._router.navigate(['/home']); })
            .catch(function (err) { return console.error('Something went wrong:', err.message); });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) { _this._router.navigate(['/home']); })
            .catch(function (err) { console.log('Something went wrong:', err.message); });
    };
    AuthService.prototype.logout = function () {
        this._firebaseAuth.auth.signOut();
        this.updateStatus('offline');
        localStorage.removeItem('currentUid');
        localStorage.removeItem('currentUser');
        this._router.navigate(['/public/signIn']);
    };
    AuthService.prototype.updateStatus = function (status) {
        if (!this.data || !this.data.authUid)
            return;
        this._db.object("users/" + this.data.authUid).update({ status: status });
    };
    AuthService.prototype.updateOnConnect = function () {
        var that = this;
        var connectedRef = this._db.database.ref(".info/connected");
        connectedRef.on("value", function (connected) {
            var status = connected.val() ? 'online' : 'offline';
            that.updateStatus(status);
        });
    };
    AuthService.prototype.updateOnDisconnect = function () {
        if (!this.data || !this.data.authUid)
            return;
        this._db.database.ref().child("users/" + this.data.authUid)
            .onDisconnect()
            .update({ status: 'offline' });
    };
    AuthService.prototype.isLoggedIn = function () { return this.getAuthState().map(function (user) { return user ? true : false; }); };
    AuthService.prototype.getAuthState = function () { return this._firebaseAuth.authState; };
    AuthService.prototype.setNameToFirebase = function (authUid, name) { return this._db.object("users/" + authUid).update({ name: name }); };
    AuthService.prototype.deleteUser = function () {
        var _this = this;
        this._firebaseAuth.auth.currentUser
            .delete()
            .then(function () {
            localStorage.removeItem('currentUid');
            localStorage.removeItem('currentUser');
            _this._router.navigate(['/public/signIn']);
        })
            .catch(function (error) { console.log(error); });
    };
    AuthService.prototype.getUserData = function (authUid) {
        var _this = this;
        return this.getUserObj(authUid)
            .valueChanges()
            .map(function (data) {
            _this.data = data;
            _this.userData$.next(data);
            localStorage.setItem('currentUid', data.uid);
            localStorage.setItem('currentUser', data);
        });
    };
    AuthService.prototype.getUserObj = function (authUid) { return this._db.object("users/" + authUid); };
    AuthService.prototype.getCurrentUser = function () { return (this.data) ? this.data : localStorage.getItem('currentUser'); };
    AuthService.prototype.getCurrentUserId = function () { return (this.data) ? this.data.uid : localStorage.getItem('currentUid'); };
    AuthService.prototype.getCurrentUserObs = function () { return this.userData$.asObservable(); };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], AuthService);
    return AuthService;
    var _a, _b, _c;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/group/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PENDING = 1;
var SENT = 2;
var GroupService = (function () {
    function GroupService(_db, _authService) {
        var _this = this;
        this._db = _db;
        this._authService = _authService;
        this.updateStatus = function (msgs, groupId) {
            _this.doProcess(msgs, groupId, _this.sentPredicate, SENT);
        };
    }
    GroupService.prototype.getMessages = function (groupId) {
        var _this = this;
        this.messageRef = this._db.list("groups/" + groupId + "/messages");
        return this.messageRef.snapshotChanges()
            .map(function (msgs) { return msgs.map(function (msg) { return (__assign({ key: msg.payload.key }, msg.payload.val())); }); })
            .do(function (msgs) { _this.updateStatus(msgs, groupId); });
    };
    GroupService.prototype.sendMessage = function (msg) {
        msg.status = PENDING;
        this.messageRef.push(msg);
    };
    GroupService.prototype.sentPredicate = function (msg, currUid) { return msg.sender == currUid && msg.status == PENDING; };
    GroupService.prototype.doProcess = function (msgs, groupId, predicate, status) {
        var currUid = this._authService.getCurrentUserId();
        var filteredMsgs = msgs.filter(function (msg) { return predicate(msg, currUid); });
        var data = {};
        filteredMsgs.forEach(function (msg) {
            var path = "groups/" + groupId + "/messages/" + msg.key + "/status";
            data[path] = status;
        });
        if (Object.keys(data).length === 0 && data.constructor === Object)
            return;
        this._db.database.ref().update(data).then();
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], GroupService);
    return GroupService;
    var _a, _b;
}());

//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/guards/private-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrivateGuardService = (function () {
    function PrivateGuardService(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    PrivateGuardService.prototype.canActivate = function (next, state) {
        var _this = this;
        return this._auth.isLoggedIn().map(function (status) {
            if (!status)
                _this._router.navigate(["/public"]).then(function (data) { return console.log(data); }).catch(function (data) { return console.log(data); });
            return status;
        });
    };
    PrivateGuardService.prototype.canActivateChild = function (next, state) {
        return this._auth.isLoggedIn();
    };
    PrivateGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], PrivateGuardService);
    return PrivateGuardService;
    var _a, _b;
}());

//# sourceMappingURL=private-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/guards/public-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicGuardService = (function () {
    function PublicGuardService(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    PublicGuardService.prototype.canActivate = function (next, state) {
        var _this = this;
        return this._auth.isLoggedIn().map(function (status) {
            if (status)
                _this._router.navigate(["/home"]);
            // .then(data => console.log(data)).catch(data => console.log(data))
            return !status;
        });
    };
    PublicGuardService.prototype.canActivateChild = function (next, state) {
        return this._auth.isLoggedIn().map(function (status) { return !status; });
    };
    PublicGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], PublicGuardService);
    return PublicGuardService;
    var _a, _b;
}());

//# sourceMappingURL=public-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/message-service/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PENDING = 1;
var SENT = 2;
var DELIVERED = 3;
var MessageService = (function () {
    function MessageService(_db, _authService) {
        var _this = this;
        this._db = _db;
        this._authService = _authService;
        this.updateStatus = function (msgs, convId) {
            _this.doProcess(msgs, convId, _this.sentPredicate, SENT);
            _this.doProcess(msgs, convId, _this.deliverPredicate, DELIVERED);
        };
    }
    MessageService.prototype.getMessages = function (convId) {
        var _this = this;
        this.messageRef = this._db.list("p2p/" + convId + "/messages");
        return this.messageRef.snapshotChanges()
            .map(function (msgs) { return msgs.map(function (msg) { return (__assign({ key: msg.payload.key }, msg.payload.val())); }); })
            .do(function (msgs) { _this.updateStatus(msgs, convId); });
    };
    MessageService.prototype.sendMessage = function (msg) {
        msg.status = PENDING;
        this.messageRef.push(msg);
    };
    MessageService.prototype.deliverPredicate = function (msg, currUid) { return msg.sender != currUid && msg.status == SENT; };
    MessageService.prototype.sentPredicate = function (msg, currUid) { return msg.sender == currUid && msg.status == PENDING; };
    MessageService.prototype.doProcess = function (msgs, convId, predicate, status) {
        var currUid = this._authService.getCurrentUserId();
        var filteredMsgs = msgs.filter(function (msg) { return predicate(msg, currUid); });
        var data = {};
        filteredMsgs.forEach(function (msg) {
            var path = "p2p/" + convId + "/messages/" + msg.key + "/status";
            data[path] = status;
        });
        if (Object.keys(data).length === 0 && data.constructor === Object)
            return;
        this._db.database.ref().update(data).then();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], MessageService);
    return MessageService;
    var _a, _b;
}());

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload-photo/upload-photo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadProfileService = (function () {
    function UploadProfileService(_firebaseAuth, _db, _auth) {
        this._firebaseAuth = _firebaseAuth;
        this._db = _db;
        this._auth = _auth;
        this.basePath = '/profilepic';
    }
    UploadProfileService.prototype.updateUserProfilePic = function (url) {
        var uid = this._auth.getCurrentUser().authUid;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]
            .fromPromise(this._db.object("/users/" + uid)
            .update({ 'imageUrl': url }));
    };
    UploadProfileService.prototype.pushUpload = function (file) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
        var uid = this._auth.getCurrentUser().authUid;
        var task = storageRef.child(this.basePath + "/" + uid + "/dp").put(file);
        var errorFlag = false;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (obs) {
            task.on(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { return obs.next(snapshot); }, function (err) { errorFlag = true; obs.error(err); }, function () { return obs.complete(); });
        })
            .map(function (snapshot) { return (snapshot.bytesTransferred / snapshot.totalBytes) * 100; })
            .finally(function () {
            if (!errorFlag) {
                var downloadURL = task.snapshot.downloadURL;
                _this.updateUserProfilePic(downloadURL).subscribe();
            }
        });
        return observable;
    };
    UploadProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
    ], UploadProfileService);
    return UploadProfileService;
    var _a, _b, _c;
}());

//# sourceMappingURL=upload-photo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(_authService, _router, _db) {
        var _this = this;
        this._authService = _authService;
        this._router = _router;
        this._db = _db;
        this.prepareChats = function (result) {
            // Get all p2p uid array
            var p2p = _this.getP2PFromSnapshot(result.p2p);
            var usersSnapshots = result.users;
            var recent = [];
            var friends = [];
            _this.iterateUsersSnapshot(usersSnapshots, p2p, recent, friends);
            return {
                'recent': recent,
                'friends': friends
            };
        };
    }
    UserService.prototype.toChatRoom = function (uid) {
        var _this = this;
        var uid1 = this._authService.getCurrentUserId();
        var uid2 = uid;
        var ref = this._db.object("p2pMap/" + uid1 + "/" + uid2)
            .snapshotChanges()
            .subscribe(function (convSnapshot) {
            if (convSnapshot.payload.exists()) {
                // Redirect to chat with snapshot val as conversation id
                var convId = convSnapshot.payload.val();
                _this.redirectToChat(convId);
            }
            else {
                // create conversation
                var users_list = [];
                users_list.push(uid1);
                users_list.push(uid2);
                _this._db.list('p2p')
                    .push({ "users": users_list })
                    .then(function (newConvSnapshot) {
                    // redircet to chat with push id as  conversation id
                    var convId = newConvSnapshot.key;
                    _this.redirectToChat(convId);
                });
            }
        });
    };
    UserService.prototype.redirectToChat = function (convId) {
        this._router.navigate(['/home/chatRoom', convId]);
    };
    UserService.prototype.getChats = function () {
        return this.getP2PMap(this._authService.getCurrentUserId())
            .combineLatest(this.getAllUsers(), function (val1, val2) { return { 'p2p': val1, 'users': val2 }; })
            .map(this.prepareChats);
    };
    UserService.prototype.getP2PFromSnapshot = function (p2pSnapshots) {
        var p2p = [];
        p2pSnapshots.forEach(function (peerSnapshot) { return p2p.push(peerSnapshot.payload.key); });
        return p2p;
    };
    UserService.prototype.iterateUsersSnapshot = function (usersSnapshots, p2p, recent, friends) {
        var _this = this;
        usersSnapshots.forEach(function (userSnapshot) {
            var user = userSnapshot.payload.val();
            if (user.uid == _this._authService.getCurrentUserId())
                return;
            if (p2p.includes(user.uid)) {
                // Recent
                recent.push(user);
            }
            else {
                // Friends
                friends.push(user);
            }
        });
    };
    UserService.prototype.getP2PMap = function (uid) {
        return this._db.list("p2pMap/" + uid).snapshotChanges();
    };
    UserService.prototype.getAllUsers = function () {
        return this._db.list('users').snapshotChanges();
    };
    UserService.prototype.getAllUsersForGroups = function () {
        var _this = this;
        return this._db.list('users')
            .snapshotChanges(['child_removed'])
            .map(function (actions) {
            return actions
                .map(function (action) { return action.payload.val(); })
                .filter(function (user) { return user.uid != _this._authService.getCurrentUserId(); });
        });
    };
    UserService.prototype.getAllGroups = function () {
        var uid = this._authService.getCurrentUserId();
        return this._db.list("groupMap/" + uid)
            .snapshotChanges()
            .map(function (groups) { return groups.map(function (group) { return ({ grpId: group.payload.key, name: group.payload.val() }); }); });
    };
    UserService.prototype.toGroupChat = function (name, users) {
        var _this = this;
        var uid1 = this._authService.getCurrentUserId();
        var group_list = [];
        group_list.push(uid1);
        group_list.push.apply(group_list, users);
        console.log(group_list);
        this._db.list('groups')
            .push({ "users": group_list, "name": name })
            .then(function (newGrpSnapshot) {
            console.log("success");
            var grpId = newGrpSnapshot.key;
            _this.redirectToGrpChat(grpId);
        });
    };
    UserService.prototype.redirectToGrpChat = function (grpId) {
        console.log("direct " + grpId);
        this._router.navigate(['/home/groupRoom', grpId]);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], UserService);
    return UserService;
    var _a, _b, _c;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-align{\n    text-align: center;\n}\n.file-upload{\n    text-align: center;\n}\n.button{\n    min-width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"button\">\n  <button mat-icon-button [routerLink]=\"['./home']\">\n    <mat-icon>keyboard_backspace</mat-icon>\n  </button>\n</mat-toolbar>\n<br>\n<div class=\"profile-align\" style=\"position: relative\">\n  <img class=\"round-img\" [src]=\"(user | async)?.imageUrl\" width=\"100px\" height=\"100px\">\n  <label class=\"img-upload\" for=\"filebutton\"><mat-icon>edit</mat-icon></label>\n</div><br>\n\n<div class=\"file-upload\">\n  <input id=\"filebutton\" type=\"file\" #filebtn (change)=\"uploadsingle($event)\">\n</div>\n\n<br><br><br>\n <div class=\"details\">\n        <p class=\"user-name\">{{ user.name }}</p>\n        <p class=\"user-email\">{{ user.email}}</p>\n      </div>\n\n\n<button class=\"button\" color=\"primary\" mat-raised-button (click)=\"deleteUser()\">Delete Account</button>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_photo_upload_photo_service__ = __webpack_require__("../../../../../src/app/services/upload-photo/upload-photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(upSvc, _auth) {
        var _this = this;
        this.upSvc = upSvc;
        this._auth = _auth;
        this.uploadProcess = 0;
        this.uploadFlag = false;
        this.onProcess = function (process) { _this.uploadProcess = process; };
        this.onComplete = function () { _this.uploadProcess = 0; _this.uploadFlag = false; };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.user = this._auth.getCurrentUserObs();
        this.name = this._auth.getCurrentUser().name;
    };
    SettingsComponent.prototype.uploadsingle = function (event) {
        this.uploadProcess = 0;
        this.uploadFlag = true;
        var file = event.srcElement.files[0];
        this.upSvc.pushUpload(file).subscribe(this.onProcess, function () { }, this.onComplete);
        console.log("Upload done");
    };
    SettingsComponent.prototype.deleteUser = function () {
        this._auth.deleteUser();
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_photo_upload_photo_service__["a" /* UploadProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_photo_upload_photo_service__["a" /* UploadProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-section\"></div>\n<div class=\"public-main\">\n    <mat-card class=\"public-card\">\n        <h2>Sign In</h2>\n        <form [formGroup]=\"signInForm\">\n\n            <mat-form-field class=\"input-field\">\n                <input [(ngModel)]=\"email\" matInput placeholder=\"Enter Email\" [(ngModel)]=\"email\" formControlName=\"email\">\n                <mat-error *ngIf=\"signInForm.controls['email'].hasError('pattern')\">\n                    Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"signInForm.controls['email'].hasError('required')\">\n                    Email is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"input-field\">\n                <input [(ngModel)]=\"password\" matInput placeholder=\"Enter Password\" type=\"password\" [(ngModel)]=\"password\" formControlName=\"pass\">\n                <mat-error *ngIf=\"signInForm.controls['pass'].hasError('required')\">\n                    Password <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n\n            <mat-card-actions>\n                <button color=\"accent\" type=\"submit\" mat-raised-button (click)=\"login()\">Submit</button><br>\n                <p>Create New Account\n                    <button class=\"button-fontSize\" type=\"buton\" color=\"primary\" mat-button [routerLink]=\"['../signUp']\">Register</button>\n                </p>\n            </mat-card-actions>\n\n            <span><h4>{{errorMsg}}</h4></span>\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const EMAIL_match = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var SignInComponent = (function () {
    function SignInComponent(authService) {
        this.authService = authService;
        this.errorMsg = '';
        this.signInForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    }
    SignInComponent.prototype.login = function () {
        this.authService.login(this.email, this.password);
        this.email = this.password = '';
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], SignInComponent);
    return SignInComponent;
    var _a;
}());

//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error{\n    position: absolute;\n    top: 34px;\n    right: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-section\"></div>\n<div class=\"public-main\">\n    <mat-card class=\"public-card\">\n        <h2>Sign Up</h2>\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup($event)\">\n\n                <mat-form-field class=\"input-field\">\n                    <input matInput placeholder=\"Full Name\" [(ngModel)]=\"name\" class=\"FormControl\" formControlName=\"name\">\n                    <mat-error *ngIf=\"registerForm.controls['name'].hasError('required')\">\n                        Fullname is <strong> required</strong>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"input-field\">\n                    <input matInput placeholder=\"Enter Email\" [(ngModel)]=\"email\" class=\"FormControl\" formControlName=\"email\">\n                    <mat-error *ngIf=\"registerForm.controls['email'].hasError('pattern')\">\n                        Please enter a valid email address\n                    </mat-error>\n                    <mat-error *ngIf=\"registerForm.controls['email'].hasError('required')\">\n                        Email is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n\n\n            <mat-form-field class=\"input-field\">\n                <input matInput placeholder=\"Enter Password\" [(ngModel)]=\"password\" type=\"password\" class=\"FormControl\" formControlName=\"pass\">\n                <mat-error *ngIf=\"registerForm.controls['pass'].hasError('required')\">\n                    Password <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n            \n            <mat-card-actions>\n                <button color=\"accent\" type=\"submit\" mat-raised-button>Submit</button><br>\n                <button color=\"primary\" type=\"button\" mat-button [routerLink]=\"['../signIn']\">Back to SignIn</button>\n                <button color=\"warn\" type=\"button\" mat-button [routerLink]=\"['']\">Forgot Password?</button>\n            </mat-card-actions>\n\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const EMAIL_match = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var SignUpComponent = (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
        this.errorMsg = '';
        this.isSubmitted = false;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            pass: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    }
    SignUpComponent.prototype.signup = function (event) {
        this.isSubmitted = true;
        this.authService.signup(this.email, this.password, this.name)
            .then(function () { return console.log("Success"); });
        this.email = this.password = '';
        this.name = '';
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], SignUpComponent);
    return SignUpComponent;
    var _a;
}());

//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p class=\"title\">List Of Users </p>\n<mat-form-field floatPlaceholder=\"never\">\n  <input matInput #filter placeholder=\"Search\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <!--<mat-option *ngFor=\"let item of users | async\">\n      <a *ngIf=\"currentUserUid != item.uid\" class=\"buttons\" (click)=\"toChatRoom(item.uid)\" mat-button color=\"primary\">{{ item.name}}</a>\n    </mat-option>-->\n    <!--<div *ngFor=\"let item of users | async\">\n      <a *ngIf=\"currentUserUid != item.uid\" class=\"buttons\" (click)=\"toChatRoom(item.uid)\" mat-button color=\"primary\">{{ item.name}}</a>\n    </div>\n  </mat-autocomplete>\n</mat-form-field>-->\n\n<p class=\"title\">List Of Users </p>\n -<mat-form-field floatPlaceholder=\"never\">\n -      <input matInput #filter placeholder=\"Search\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n -      <mat-autocomplete #auto=\"matAutocomplete\">\n -        <mat-option *ngFor=\"let item of users | async\">\n -          <a *ngIf=\"currentUserUid != item.uid\" class=\"buttons\" (click)=\"toChatRoom(item.uid)\" mat-button color=\"primary\">{{ item.name}}</a>\n -        </mat-option>\n -      </mat-autocomplete>\n -</mat-form-field>\n\n\n <!--<div *ngFor=\"let item of users | async\">\n -    <a *ngIf=\"currentUserUid != item.uid\" class=\"buttons\" (click)=\"toChatRoom(item.uid)\" mat-button color=\"primary\">{{ item.name}}</a>\n +    <a *ngIf=\"currentUserUid != item.uid\" class=\"buttons\" (click)=\"toChatRoom(item.uid)\" mat-button color=\"primary\">{{ item.name}}</a>\n    </div>-->\n  \n    \n  \n  <!--<div class=\"user-list\">\n    <div *ngFor=\"let item of users | async\">\n -    <a *ngIf=\"currentUserUid != item.uid\" class=\"buttons\" (click)=\"toChatRoom(item.uid)\" mat-button color=\"primary\">{{ item.name}}</a>\n +    <a *ngIf=\"currentUserUid != item.uid\" class=\"buttons\" (click)=\"toChatRoom(item.uid)\" mat-button color=\"primary\">{{ item.name}}</a>\n    </div>\n  </div>--> "

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__ = __webpack_require__("../../../../../src/app/services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = (function () {
    function UsersComponent(_router, _userService, _dialog) {
        this._router = _router;
        this._userService = _userService;
        this._dialog = _dialog;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
    }
    UsersComponent.prototype.toChatRoom = function (uid) {
        this._userService.toChatRoom(uid);
    };
    UsersComponent.prototype.redirectToChat = function (convId) {
        this._userService.redirectToChat(convId);
    };
    // groupChat(){
    //   let dialogRef = this._dialog.open(UserListComponent, {
    //     width: '500px',
    //     height: '500px'
    //   });
    // }
    UsersComponent.prototype.ngOnInit = function () {
        // this.user = this._userService.getSearchOptionObservable()
        // this.users = this._db.list(`/users`);
        // this.currentUserUid = this._authService.userKey;
        this._userService.getChats()
            .subscribe(function (data) {
            console.log("in sub");
            console.log(data);
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _c || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyD7BuOX7pkAywcUarOEZyOaMiKvARM-QWU",
        authDomain: "chatapp-140da.firebaseapp.com",
        databaseURL: "https://chatapp-140da.firebaseio.com",
        projectId: "chatapp-140da",
        storageBucket: "chatapp-140da.appspot.com",
        messagingSenderId: "807091372645"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map