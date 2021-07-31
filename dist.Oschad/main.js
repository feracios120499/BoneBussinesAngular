(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+CeN":
/*!*********************************************************!*\
  !*** ./src/app/@core/services/notifications.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "UfwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NotificationsService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    /**
     *
     */
    constructor(http) {
        super();
        this.http = http;
    }
    getNotifications(userId) {
        return this.http.get(`api/v1/notify/${userId}`);
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+v5c":
/*!******************************************************!*\
  !*** ./src/app/@core/store/effects/route.effects.ts ***!
  \******************************************************/
/*! exports provided: RouteEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteEffects", function() { return RouteEffects; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/auth.actions */ "UvNo");
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @actions/acct.actions */ "GAc8");
/* harmony import */ var _actions_route_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @actions/route.actions */ "t5Jg");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class RouteEffects {
    constructor(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.routToEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_route_actions__WEBPACK_IMPORTED_MODULE_2__["routeTo"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((action) => this.router.navigateByUrl(action.route))), { dispatch: false });
        this.dashboardEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => _actions_route_actions__WEBPACK_IMPORTED_MODULE_2__["routeTo"]({ route: 'accounts' }))));
        this.logoutEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => _actions_route_actions__WEBPACK_IMPORTED_MODULE_2__["routeTo"]({ route: 'auth' }))));
        this.detailAccount$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_1__["goToDetail"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((payload) => _actions_route_actions__WEBPACK_IMPORTED_MODULE_2__["routeTo"]({ route: `accounts/${payload.account.BankId}/${payload.account.Id}` }))));
    }
}
RouteEffects.ɵfac = function RouteEffects_Factory(t) { return new (t || RouteEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RouteEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RouteEffects, factory: RouteEffects.ɵfac });


/***/ }),

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/app.actions */ "r2tv");
/* harmony import */ var _actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @actions/settings.actions */ "Mght");
/* harmony import */ var _selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selectors/settings.selectors */ "sqfJ");
/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selectors/user.selectors */ "DtIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_facades_user_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/facades/user.facade */ "uN0L");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@shared/directives/b1-icon.directive */ "SYr6");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












function HeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logo_r8 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", logo_r8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_li_15_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_li_15_ul_7_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const language_r14 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); $event.stopPropagation(); ctx_r15.setLanguage(language_r14); return _r10.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "shared.languages." + language_r14), "");
} }
function HeaderComponent_li_15_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_li_15_ul_7_li_1_Template, 4, 3, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const languages_r12 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", languages_r12);
} }
function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 31, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); $event.stopPropagation(); return _r10.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "b", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HeaderComponent_li_15_ul_7_Template, 2, 1, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentLanguage_r9 = ctx.ngrxLet;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, "shared.languages." + currentLanguage_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r1.languages$);
} }
function HeaderComponent_ng_container_17_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_ng_container_17_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.disableDarkMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_17_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_ng_container_17_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.setDarkMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_ng_container_17_a_1_Template, 2, 0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderComponent_ng_container_17_a_2_Template, 2, 0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const darkMode_r19 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", darkMode_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !darkMode_r19);
} }
function HeaderComponent_ng_container_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const countNotifications_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](countNotifications_r26);
} }
function HeaderComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_ng_container_26_span_1_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const countNotifications_r26 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", countNotifications_r26 != 0);
} }
function HeaderComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const userName_r29 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](userName_r29 || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "components.main.owner"));
} }
function HeaderComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userPictureUrl_r30 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", userPictureUrl_r30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
class HeaderComponent {
    constructor(userFacade, store) {
        this.userFacade = userFacade;
        this.store = store;
        this.countCustomers$ = this.userFacade.countCustomers$;
        this.language$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["currentLanguageSelector"]);
        this.languages$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["allowedLanguagesSelector"]);
        this.darkMode$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["darkModeSelector"]);
        this.countNotifications$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["countNotificationsSelector"]);
        this.userName$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["userNameSelector"]);
        this.userPictureUrl$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["userPictureSelector"]);
        this.logo$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["logoSelector"]);
        this.isCollapsed$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["isCollapsedSelector"]);
    }
    ngOnInit() {
    }
    setLanguage(language) {
        this.store.dispatch(Object(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__["setLanguage"])({ language }));
    }
    setDarkMode() {
        this.setDarkModeState(true);
    }
    disableDarkMode() {
        this.setDarkModeState(false);
    }
    setDarkModeState(isActive) {
        this.store.dispatch(Object(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["setGlobalLoader"])({ isLoading: true }));
        this.store.dispatch(Object(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__["setDarkMode"])({ isActive }));
        setTimeout(() => {
            this.store.dispatch(Object(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["setGlobalLoader"])({ isLoading: false }));
        }, 200);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_facades_user_facade__WEBPACK_IMPORTED_MODULE_5__["UserFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 53, vars: 29, consts: [[1, "main-navbar", "main-navbar_brand"], ["b1-icon", "", "icon", "menu", 1, "b1-title2", "visible-xs"], [4, "ngrxLet"], ["b1-icon", "", "icon", "settings", 1, "b1-title2", "visible-xs"], [1, "main-navbar", "b1-bg-light"], [1, "main-navbar__list"], [1, "main-navbar__list__item"], ["href", "#", 1, "main-navbar__list__item__link", "b1-base"], [1, "b1-badge", "b1-bg-info"], ["ngbDropdown", "", "class", "main-navbar__list__item", "display", "static", 4, "ngrxLet"], ["ngbDropdown", "", 1, "main-navbar__list__item"], ["dropdown", "ngbDropdown"], [1, "main-navbar__list__item__link", "b1-base", 2, "position", "relative"], ["b1-icon", "", "icon", "bell", 1, "d-none", "d-sm-block"], [1, "d-block", "d-sm-none", "d-print-inline"], [1, "caret", "d-block", "d-sm-none"], ["ngbDropdown", "", 1, "main-navbar__list__item", "b1-mr-4"], ["profileDropdown", "ngbDropdown"], ["id", "profile", 1, "main-navbar__list__item__link", "b1-base", 3, "click"], [1, "caret"], ["class", "avatar", 4, "ngrxLet"], ["ngbDropdownMenu", "", "aria-labelledby", "languages", 1, "b1-dropdown", "b1-animate", "fade-in-up", 2, "width", "100%", "max-width", "400px"], [1, "b1-dropdown__item"], ["ui-sref", "app.profile.settings", 1, "b1-dropdown__link", "b1-base"], ["b1-icon", "", "icon", "settings", 1, "b1-mr-4"], ["ui-sref", "app.profile.index", 1, "b1-dropdown__link", "b1-base"], ["b1-icon", "", "icon", "user", 1, "b1-mr-4"], [1, "b1-separator"], ["ng-click", "logOut()", 1, "b1-dropdown__link", "b1-dropdown__link_error", "b1-base"], ["b1-icon", "", "icon", "exit", 1, "b1-mr-4"], ["alt", "", 1, "main-navbar__app-logo", 3, "src"], ["ngbDropdown", "", "display", "static", 1, "main-navbar__list__item"], ["id", "languages", 1, "main-navbar__list__item__link", "b1-base", 3, "click"], ["class", "b1-dropdown b1-animate fade-in-up", "ngbDropdownMenu", "", "aria-labelledby", "languages", "style", "min-width: 160px;", 4, "ngrxLet"], ["ngbDropdownMenu", "", "aria-labelledby", "languages", 1, "b1-dropdown", "b1-animate", "fade-in-up", 2, "min-width", "160px"], ["class", "b1-dropdown__item", 4, "ngFor", "ngForOf"], [1, "b1-dropdown__link", "b1-base", 3, "click"], ["class", "main-navbar__list__item__link b1-base", 3, "click", 4, "ngIf"], [1, "main-navbar__list__item__link", "b1-base", 3, "click"], ["b1-icon", "", "icon", "adjust"], ["b1-icon", "", "icon", "moon"], ["style", "position: absolute; right: -4px; top: 2px;", "class", "b1-badge b1-bg-error", 4, "ngIf"], [1, "b1-badge", "b1-bg-error", 2, "position", "absolute", "right", "-4px", "top", "2px"], [1, "avatar"], [3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 2, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 8, 4, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, HeaderComponent_ng_container_17_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, HeaderComponent_ng_container_26_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28); $event.stopPropagation(); return _r5.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, HeaderComponent_ng_container_30_Template, 4, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "b", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, HeaderComponent_span_32_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "hr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("b1-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 15, ctx.isCollapsed$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.logo$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("b1-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 17, ctx.isCollapsed$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 19, ctx.countCustomers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.language$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.darkMode$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 21, "header.navbar.NOTIFICATIONS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.countNotifications$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.userName$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.userPictureUrl$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 23, "header.navbar.Settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 25, "header.navbar.Profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 27, "header.navbar.Logout"));
    } }, directives: [_shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_7__["B1IconDirective"], _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["LetDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["PushPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.main-navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 56px;\n  margin-left: 240px;\n  box-shadow: none;\n}\n.main-navbar.show[_ngcontent-%COMP%] {\n  display: flex !important;\n  height: 56px;\n  flex-direction: row;\n}\n@media (max-width: 812px) {\n  .main-navbar[_ngcontent-%COMP%] {\n    display: none;\n    margin: 0;\n  }\n  .main-navbar.show[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n  }\n}\n.main-navbar_brand[_ngcontent-%COMP%] {\n  position: fixed;\n  margin: 0;\n  width: 240px;\n  height: 56px;\n  justify-content: center;\n  box-shadow: none;\n  background-color: #0d233b;\n  color: #fff;\n}\n@media (max-width: 812px) {\n  .main-navbar_brand[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0 32px;\n    height: 90px;\n  }\n}\n.main-navbar_brand[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  box-shadow: none;\n}\n.main-navbar__app-logo[_ngcontent-%COMP%] {\n  max-height: 56px;\n  margin: 0;\n}\n.main-navbar__list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  height: 100%;\n  padding-left: 16px;\n}\n@media (max-width: 767px) {\n  .main-navbar__list[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n}\n.main-navbar__list__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n  height: 48px;\n  border-radius: 4px;\n  margin-left: 4px;\n  width: auto;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n@media (max-width: 767px) {\n  .main-navbar__list__item[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 2px solid var(--color-light-300);\n  }\n}\n.main-navbar__list__item[_ngcontent-%COMP%]:hover, .main-navbar__list__item.open[_ngcontent-%COMP%] {\n  background-color: var(--color-light-100);\n}\n.main-navbar__list__item__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 0 16px;\n  position: relative;\n}\n.main-navbar__list__item__link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n.main-navbar__list__item__link[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.main-navbar__list__item__link[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  vertical-align: middle;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer__circle[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--color-light-500);\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer__name[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer__lock[_ngcontent-%COMP%] {\n  display: none;\n  color: var(--color-light-500);\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer.active[_ngcontent-%COMP%]   .customer__circle[_ngcontent-%COMP%] {\n  background-color: #00879e;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer.active[_ngcontent-%COMP%]   .customer__name[_ngcontent-%COMP%] {\n  color: #00879e;\n  opacity: 1;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer.active[_ngcontent-%COMP%]   .customer__lock[_ngcontent-%COMP%] {\n  color: #00879e;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer.locked[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .customer.locked[_ngcontent-%COMP%]   .customer__lock[_ngcontent-%COMP%] {\n  display: inline;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 4px;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .notification__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 8px 12px;\n  padding-left: 0;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .notification__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .notification__close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  align-self: center;\n  padding: 8px;\n  padding-right: 0;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]   .button-exit[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: lowercase;\n}\n.main-navbar__list__item[_ngcontent-%COMP%]    > .rates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 16px;\n  position: relative;\n}\n.main-navbar.b1-collapsed[_ngcontent-%COMP%] {\n  margin-left: 80px;\n}\n.main-navbar_brand.b1-collapsed[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 80px;\n}\n.bell[_ngcontent-%COMP%] {\n  -webkit-animation: ring 4s 0.7s ease-in-out infinite;\n  -webkit-transform-origin: 50% 4px;\n  -moz-animation: ring 4s 0.7s ease-in-out infinite;\n  -moz-transform-origin: 50% 4px;\n  animation: ring 4s 0.7s ease-in-out infinite;\n  transform-origin: 50% 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzLm9zY2hhZFxcc2Nzc1xcX3R5cG9ncmFwaHkuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0cy5vc2NoYWRcXHNjc3NcXG1peGluc1xcX21haW4uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzLm9zY2hhZFxcc2Nzc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJRTtFQWpIQSxlQUprQjtFQUtsQix5Q0FBQTtFQUNBLGNBTHlCO0FDZjNCO0FEc0JFO0VBNkdBO0lBNUdFLGVBWGU7SUFZZixpQkFYc0I7RUNSeEI7QUFDRjtBRHFCRTtFQXdHQTtJQXZHRSxlQWxCZTtJQW1CZixpQkFsQnNCO0VDQXhCO0FBQ0Y7QUQySEU7RUFyR0EsZUF0QmlCO0VBdUJqQix5Q0FBQTtFQUNBLGlCQXZCd0I7QUNJMUI7QURxQkU7RUFpR0E7SUFoR0UsZUE3QmU7SUE4QmYsaUJBN0JzQjtFQ1d4QjtBQUNGO0FEb0JFO0VBNEZBO0lBM0ZFLGVBcENlO0lBcUNmLGlCQXBDc0I7RUNtQnhCO0FBQ0Y7QUQ4R0U7RUF6RkEsZUF4Q2lCO0VBeUNqQix5Q0FBQTtFQUNBLGlCQXpDd0I7QUN1QjFCO0FEb0JFO0VBcUZBO0lBcEZFLGVBL0NlO0lBZ0RmLGlCQS9Dc0I7RUM4QnhCO0FBQ0Y7QURtQkU7RUFnRkE7SUEvRUUsZUF0RGM7SUF1RGQsaUJBdERxQjtFQ3NDdkI7QUFDRjtBRGlHRTtFQTdFQSxlQTFEaUI7RUEyRGpCLHlDQUFBO0VBQ0EsaUJBM0R3QjtBQzBDMUI7QURtQkU7RUF5RUE7SUF4RUUsZUFqRWM7SUFrRWQsaUJBakVxQjtFQ2lEdkI7QUFDRjtBRGtCRTtFQW9FQTtJQW5FRSxlQXRFYztJQXVFZCxpQkF0RXFCO0VDdUR2QjtBQUNGO0FEb0ZFO0VBakVBLGVBNUVnQjtFQTZFaEIseUNBQUE7RUFDQSxpQkE3RXVCO0FDNkR6QjtBRGtCRTtFQTZEQTtJQTVERSxlQW5GZTtJQW9GZixpQkFuRnNCO0VDb0V4QjtBQUNGO0FEaUJFO0VBd0RBO0lBdkRFLGVBeEZlO0lBeUZmLGlCQXhGc0I7RUMwRXhCO0FBQ0Y7QUR1RUU7RUFyREEsZUE5RmlCO0VBK0ZqQix5Q0FBQTtFQUNBLGlCQS9Gd0I7QUNnRjFCO0FEc0VFO0VBbkRBLGVBdEdlO0VBdUdmLHlDQUFBO0VBQ0EsZ0JBdkdzQjtBQ3VGeEI7QURxRUU7RUFqREEsZUE5R2dCO0VBK0doQix5Q0FBQTtFQUNBLGlCQS9HdUI7QUM4RnpCO0FEb0VFO0VBL0NBLGVBdEhnQjtFQXVIaEIseUNBQUE7RUFDQSxjQXZIdUI7RUF3SHZCLHlCQUFBO0FDbEJGO0FEa0VFO0VBNUNBLHlDQUFBO0FDbkJGO0FEbUVFO0VBNUNBLHlDQUFBO0FDcEJGO0FEd0JFO0VBakhBLGVBSmtCO0VBS2xCLHlDQUFBO0VBQ0EsY0FMeUI7QUNrRzNCO0FEM0ZFO0VBNkdBO0lBNUdFLGVBWGU7SUFZZixpQkFYc0I7RUN5R3hCO0FBQ0Y7QUQ1RkU7RUF3R0E7SUF2R0UsZUFsQmU7SUFtQmYsaUJBbEJzQjtFQ2lIeEI7QUFDRjtBRFVFO0VBckdBLGVBdEJpQjtFQXVCakIseUNBQUE7RUFDQSxpQkF2QndCO0FDcUgxQjtBRDVGRTtFQWlHQTtJQWhHRSxlQTdCZTtJQThCZixpQkE3QnNCO0VDNEh4QjtBQUNGO0FEN0ZFO0VBNEZBO0lBM0ZFLGVBcENlO0lBcUNmLGlCQXBDc0I7RUNvSXhCO0FBQ0Y7QURIRTtFQXpGQSxlQXhDaUI7RUF5Q2pCLHlDQUFBO0VBQ0EsaUJBekN3QjtBQ3dJMUI7QUQ3RkU7RUFxRkE7SUFwRkUsZUEvQ2U7SUFnRGYsaUJBL0NzQjtFQytJeEI7QUFDRjtBRDlGRTtFQWdGQTtJQS9FRSxlQXREYztJQXVEZCxpQkF0RHFCO0VDdUp2QjtBQUNGO0FEaEJFO0VBN0VBLGVBMURpQjtFQTJEakIseUNBQUE7RUFDQSxpQkEzRHdCO0FDMkoxQjtBRDlGRTtFQXlFQTtJQXhFRSxlQWpFYztJQWtFZCxpQkFqRXFCO0VDa0t2QjtBQUNGO0FEL0ZFO0VBb0VBO0lBbkVFLGVBdEVjO0lBdUVkLGlCQXRFcUI7RUN3S3ZCO0FBQ0Y7QUQ3QkU7RUFqRUEsZUE1RWdCO0VBNkVoQix5Q0FBQTtFQUNBLGlCQTdFdUI7QUM4S3pCO0FEL0ZFO0VBNkRBO0lBNURFLGVBbkZlO0lBb0ZmLGlCQW5Gc0I7RUNxTHhCO0FBQ0Y7QURoR0U7RUF3REE7SUF2REUsZUF4RmU7SUF5RmYsaUJBeEZzQjtFQzJMeEI7QUFDRjtBRDFDRTtFQXJEQSxlQTlGaUI7RUErRmpCLHlDQUFBO0VBQ0EsaUJBL0Z3QjtBQ2lNMUI7QUQzQ0U7RUFuREEsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0FDd014QjtBRDVDRTtFQWpEQSxlQTlHZ0I7RUErR2hCLHlDQUFBO0VBQ0EsaUJBL0d1QjtBQytNekI7QUQ3Q0U7RUEvQ0EsZUF0SGdCO0VBdUhoQix5Q0FBQTtFQUNBLGNBdkh1QjtFQXdIdkIseUJBQUE7QUMrRkY7QUQvQ0U7RUE1Q0EseUNBQUE7QUM4RkY7QUQ5Q0U7RUE1Q0EseUNBQUE7QUM2RkY7QUE5Tkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VDTE4sZ0JBQUE7QUR1T0Y7QUEvTlE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWlPWjtBQTlOUTtFQWZKO0lBZ0JRLGFBQUE7SUFDQSxTQUFBO0VBaU9WO0VBaE9VO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0VBa09kO0FBQ0Y7QUEvTlE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQ3RCVix5QkNJZTtFREhmLFdDTFk7QUY2UGQ7QUFoT1k7RUFUSjtJQVVRLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBbU9kO0FBQ0Y7QUFqT1k7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBbU9oQjtBQS9OUTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQWlPWjtBQTlOUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFnT1o7QUE5Tlk7RUFQSjtJQVFRLHNCQUFBO0lBQ0EsV0FBQTtFQWlPZDtBQUNGO0FBL05ZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFpT2hCO0FBL05nQjtFQUNJLFNBQUE7QUFpT3BCO0FBOU5nQjtFQWJKO0lBY1EsV0FBQTtJQUNBLCtDQUFBO0VBaU9sQjtBQUNGO0FBL05nQjtFQUVJLHdDQUFBO0FBZ09wQjtBQTdOZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBK05wQjtBQTdOb0I7RUFDSSxhQUFBO0FBK054QjtBQTVOb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE4TnhCO0FBNU53QjtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQThONUI7QUF6TmdCO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBMk5wQjtBQXpOb0I7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBMk54QjtBQXhOb0I7RUFDSSxtQkFBQTtBQTBOeEI7QUF2Tm9CO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBeU54QjtBQXROb0I7RUFDSSxVQUFBO0FBd054QjtBQXROd0I7RUFDSSx5QkU1R1o7QUZvVWhCO0FBck53QjtFQUNJLGNFaEhaO0VGaUhZLFVBQUE7QUF1TjVCO0FBcE53QjtFQUNJLGNFckhaO0FGMlVoQjtBQWxOb0I7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQW9OeEI7QUFsTndCO0VBQ0ksZUFBQTtBQW9ONUI7QUEvTWdCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFpTnBCO0FBL01vQjtFQUNJLFNBQUE7QUFpTnhCO0FBOU1vQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFnTnhCO0FBN01vQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQStNeEI7QUE1TW9CO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBOE14QjtBQTFNZ0I7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUE0TXBCO0FBek1nQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEyTXBCO0FBdE1RO0VBQ0ksaUJBQUE7QUF3TVo7QUFyTVE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBQXVNWjtBQWxNQTtFQUNJLG9EQUFBO0VBQ0EsaUNBQUE7RUFDQSxpREFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtBQXFNSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZS11bml0OiAxNjtcclxuXHJcbiRmb250LW1pY3JvLXNpemU6IDEycHg7XHJcbiRmb250LW1pY3JvLWxpbmUtaGVpZ2h0OiAxO1xyXG4kZm9udC1zbWFsbC1zaXplOiAxNHB4O1xyXG4kZm9udC1zbWFsbC1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtYmFzZS1zaXplOiAxNnB4O1xyXG4kZm9udC1iYXNlLWxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRmb250LW1lZGl1bS1zaXplOiAxOHB4O1xyXG4kZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiRmb250LWxhcmdlLXNpemU6IDI0cHg7XHJcbiRmb250LWxhcmdlLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTMtc2l6ZTogMjhweDtcclxuJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTItc2l6ZTogMzZweDtcclxuJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTEtc2l6ZTogNDhweDtcclxuJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC1kaXNwbGF5LXNpemU6IDY0cHg7XHJcbiRmb250LWRpc3BsYXktbGluZS1oZWlnaHQ6IDE7XHJcblxyXG5AbWl4aW4gZGlzcGxheSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1kaXNwbGF5LXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtZGlzcGxheS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUxLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMi1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMi1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTEge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUxLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUzLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRpdGxlMiB7XHJcbiAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMy1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMy1saW5lLWhlaWdodDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRpdGxlMyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC10aXRsZTMtc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTMtbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LWxhcmdlLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbGFyZ2UtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1tZWRpdW0tc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1tZWRpdW0tc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBiYXNlIHtcclxuICBmb250LXNpemU6ICRmb250LWJhc2Utc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1iYXNlLWxpbmUtaGVpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc21hbGwtc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1zbWFsbC1saW5lLWhlaWdodDtcclxufVxyXG5cclxuQG1peGluIG1pY3JvIHtcclxuICBmb250LXNpemU6ICRmb250LW1pY3JvLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtbWljcm8tbGluZS1oZWlnaHQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuQG1peGluIGJvbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBsaWdodCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmIxIHtcclxuICAmLWRpc3BsYXkge1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheTtcclxuICB9XHJcblxyXG4gICYtdGl0bGUxIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMTtcclxuICB9XHJcblxyXG4gICYtdGl0bGUyIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMjtcclxuICB9XHJcblxyXG4gICYtdGl0bGUzIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMztcclxuICB9XHJcblxyXG4gICYtbGFyZ2Uge1xyXG4gICAgQGluY2x1ZGUgbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAmLW1lZGl1bSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW07XHJcbiAgfVxyXG5cclxuICAmLWJhc2Uge1xyXG4gICAgQGluY2x1ZGUgYmFzZTtcclxuICB9XHJcblxyXG4gICYtc21hbGwge1xyXG4gICAgQGluY2x1ZGUgc21hbGw7XHJcbiAgfVxyXG5cclxuICAmLW1pY3JvIHtcclxuICAgIEBpbmNsdWRlIG1pY3JvO1xyXG4gIH1cclxuXHJcbiAgJi1ib2xkIHtcclxuICAgIEBpbmNsdWRlIGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmLWxpZ2h0IHtcclxuICAgIEBpbmNsdWRlIGxpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuJGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiIsIi5iMS1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLW1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5iMS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtbWljcm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmIxLWJvbGQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xufVxuLmIxLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmIxLWRpc3BsYXkge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTEge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMyB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbWVkaXVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5iMS1iYXNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmIxLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5iMS1taWNybyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYjEtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG59XG4uYjEtbGlnaHQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWFpbi1uYXZiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ubWFpbi1uYXZiYXIuc2hvdyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5tYWluLW5hdmJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLm1haW4tbmF2YmFyLnNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4ubWFpbi1uYXZiYXJfYnJhbmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQyMzNiO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICAubWFpbi1uYXZiYXJfYnJhbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDMycHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG59XG4ubWFpbi1uYXZiYXJfYnJhbmQgPiBidXR0b24ge1xuICBtYXJnaW46IDAgMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5tYWluLW5hdmJhcl9fYXBwLWxvZ28ge1xuICBtYXgtaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDA7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tYWluLW5hdmJhcl9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLm1haW4tbmF2YmFyX19saXN0X19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgd2lkdGg6IGF1dG87XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1haW4tbmF2YmFyX19saXN0X19pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQtMzAwKTtcbiAgfVxufVxuLm1haW4tbmF2YmFyX19saXN0X19pdGVtOmhvdmVyLCAubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW0ub3BlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LTEwMCk7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW1fX2xpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4tbmF2YmFyX19saXN0X19pdGVtX19saW5rID4gc3BhbiB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW1fX2xpbmsgLmF2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbV9fbGluayAuYXZhdGFyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW0gLmN1c3RvbWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW4tbmF2YmFyX19saXN0X19pdGVtIC5jdXN0b21lcl9fY2lyY2xlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LTUwMCk7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW0gLmN1c3RvbWVyX19uYW1lIHtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSAuY3VzdG9tZXJfX2xvY2sge1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtNTAwKTtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSAuY3VzdG9tZXIuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSAuY3VzdG9tZXIuYWN0aXZlIC5jdXN0b21lcl9fY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODc5ZTtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSAuY3VzdG9tZXIuYWN0aXZlIC5jdXN0b21lcl9fbmFtZSB7XG4gIGNvbG9yOiAjMDA4NzllO1xuICBvcGFjaXR5OiAxO1xufVxuLm1haW4tbmF2YmFyX19saXN0X19pdGVtIC5jdXN0b21lci5hY3RpdmUgLmN1c3RvbWVyX19sb2NrIHtcbiAgY29sb3I6ICMwMDg3OWU7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW0gLmN1c3RvbWVyLmxvY2tlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW0gLmN1c3RvbWVyLmxvY2tlZCAuY3VzdG9tZXJfX2xvY2sge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW0gLm5vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubWFpbi1uYXZiYXJfX2xpc3RfX2l0ZW0gLm5vdGlmaWNhdGlvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuLm1haW4tbmF2YmFyX19saXN0X19pdGVtIC5ub3RpZmljYXRpb25fX2ljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSAubm90aWZpY2F0aW9uX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSAubm90aWZpY2F0aW9uX19jbG9zZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSAuYnV0dG9uLWV4aXQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5tYWluLW5hdmJhcl9fbGlzdF9faXRlbSA+IC5yYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4tbmF2YmFyLmIxLWNvbGxhcHNlZCB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuLm1haW4tbmF2YmFyX2JyYW5kLmIxLWNvbGxhcHNlZCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5iZWxsIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJpbmcgNHMgMC43cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNHB4O1xuICAtbW96LWFuaW1hdGlvbjogcmluZyA0cyAwLjdzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA0cHg7XG4gIGFuaW1hdGlvbjogcmluZyA0cyAwLjdzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNHB4O1xufSIsIkBpbXBvcnQgXCIuLi9jb2xvcnNcIjtcclxuXHJcbkBtaXhpbiBuYXZiYXIge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBzaWRlbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstMTAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBzaWRlbWVudS1oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyay0xMDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodDtcclxufVxyXG5cclxuQG1peGluIGNsaWVudC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWxpZ2h0LCAwLjEpO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xsYXBzZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrLTIwMDtcclxufVxyXG5cclxuQG1peGluIHNpZGVtZW51LW5hdi1pdGVtIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjEpO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgJGFuaW1hdGlvbi10aW1pbmc7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZTo6YWZ0ZXIsXHJcbiAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmU6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIH1cclxuXHJcbiAgJl9fbGluayB7XHJcbiAgICBAaW5jbHVkZSBiYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodDtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGFuaW1hdGlvbi10aW1pbmcsIGNvbG9yIDAuM3MgJGFuaW1hdGlvbi10aW1pbmc7XHJcblxyXG4gICAgICAmX29wdCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1saWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIgJl9fbGluayB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICZfX2ljb24ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYWN0aXZlICZfX2xpbmsge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcblxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfb3B0IHtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItdGVydGlhcnksIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmU6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlcnRpYXJ5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlbGVjdGVkLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogJGxpbmVhci1ncmFkaWVudDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xyXG59XHJcbkBtaXhpbiBob3Zlci1yb3cge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRsaW5lYXItZ3JhZGllbnQtbGlnaHQ7XHJcbn1cclxuQG1peGluIGRhdGEtcm93IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMCAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCJAZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XHJcbn1cclxuXHJcbiRjb2xvci1saWdodDogI2ZmZjtcclxuJGNvbG9yLWxpZ2h0LTEwMDogI2YyZjJmMjtcclxuJGNvbG9yLWxpZ2h0LTIwMDogI2VlZTtcclxuJGNvbG9yLWxpZ2h0LTMwMDogI2RkZDtcclxuJGNvbG9yLWxpZ2h0LTQwMDogI2NjYztcclxuJGNvbG9yLWxpZ2h0LTUwMDogIzk5OTtcclxuXHJcbiRjb2xvci1kYXJrOiAjMDAxNzMxO1xyXG4kY29sb3ItZGFyay0xMDA6IHRpbnQoJGNvbG9yLWRhcmssIDUlKTtcclxuJGNvbG9yLWRhcmstMjAwOiB0aW50KCRjb2xvci1kYXJrLCAxNSUpO1xyXG4kY29sb3ItZGFyay0zMDA6IHRpbnQoJGNvbG9yLWRhcmssIDI1JSk7XHJcbiRjb2xvci1kYXJrLTQwMDogdGludCgkY29sb3ItZGFyaywgMjUlKTtcclxuJGNvbG9yLWRhcmstNTAwOiB0aW50KCRjb2xvci1kYXJrLCAzMCUpO1xyXG5cclxuJGNvbG9yLWxpZ2h0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuJGNvbG9yLWxpZ2h0LTEwMC1yZ2I6IDI0MiwgMjQyLCAyNDI7XHJcbiRjb2xvci1saWdodC0yMDAtcmdiOiAyMzcsIDIzNywgMjM3O1xyXG4kY29sb3ItbGlnaHQtMzAwLXJnYjogMjIxLCAyMjEsIDIyMTtcclxuJGNvbG9yLWxpZ2h0LTQwMC1yZ2I6IDIwNCwgMjA0LCAyMDQ7XHJcbiRjb2xvci1saWdodC01MDAtcmdiOiAxNTMsIDE1MywgMTUzO1xyXG5cclxuJGNvbG9yLWRhcmstcmdiOiAwLCAyMywgNDk7XHJcbiRjb2xvci1kYXJrLTEwMC1yZ2I6IDEzLCAzNSwgNTk7XHJcbiRjb2xvci1kYXJrLTIwMC1yZ2I6IDI2LCA0NiwgNzA7XHJcbiRjb2xvci1kYXJrLTMwMC1yZ2I6IDM4LCA1OCwgODA7XHJcbiRjb2xvci1kYXJrLTQwMC1yZ2I6IDUxLCA2OSwgOTA7XHJcbiRjb2xvci1kYXJrLTUwMC1yZ2I6IDY0LCA4MSwgMTAxO1xyXG5cclxuJGNvbG9yLXByaW1hcnk6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1wcmltYXJ5LTEwMDogdGludCgkY29sb3ItcHJpbWFyeSwgNSUpO1xyXG4kY29sb3ItcHJpbWFyeS0yMDA6IHRpbnQoJGNvbG9yLXByaW1hcnksIDEwJSk7XHJcbiRjb2xvci1wcmltYXJ5LTMwMDogdGludCgkY29sb3ItcHJpbWFyeSwgMjUlKTtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zZWNvbmRhcnktMTAwOiB0aW50KCRjb2xvci1zZWNvbmRhcnksIDUlKTtcclxuJGNvbG9yLXNlY29uZGFyeS0yMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgMTAlKTtcclxuJGNvbG9yLXNlY29uZGFyeS0zMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgMjUlKTtcclxuXHJcbiRjb2xvci10ZXJ0aWFyeTogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXRlcnRpYXJ5LTEwMDogdGludCgkY29sb3ItdGVydGlhcnksIDUlKTtcclxuJGNvbG9yLXRlcnRpYXJ5LTIwMDogdGludCgkY29sb3ItdGVydGlhcnksIDEwJSk7XHJcbiRjb2xvci10ZXJ0aWFyeS0zMDA6IHRpbnQoJGNvbG9yLXRlcnRpYXJ5LCAyNSUpO1xyXG5cclxuJGNvbG9yLWVycm9yOiBoc2woMCwgMTAwJSwgNTYlKTtcclxuJGNvbG9yLWluZm86IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zdWNjZXNzOiBoc2woMTUwLCAxMDAlLCAzMSUpO1xyXG4kY29sb3Itd2FybmluZzogaHNsKDYyLCA5MCUsIDQ0JSk7XHJcblxyXG4kY29sb3ItZXJyb3ItZHQ6IGhzbCgwLCA5MCUsIDYxJSk7XHJcbiRjb2xvci1pbmZvLWR0OiByZ2IoMCwgMTM1LCAxNTgpO1xyXG4kY29sb3Itc3VjY2Vzcy1kdDogaHNsKDE1MCwgOTAlLCA0MSUpO1xyXG4kY29sb3Itd2FybmluZy1kdDogaHNsKDYyLCA4MCUsIDQ5JSk7XHJcblxyXG4vLyAhIERFUFJFQ0FURURcclxuXHJcbiRoZWFkaW5nLWZvbnQ6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiRjb2xvci1sb2FkZXItMTAwOiAjMzQ5OGRiO1xyXG4kY29sb3ItbG9hZGVyLTIwMDogI2U3NGMzYztcclxuJGNvbG9yLWxvYWRlci0zMDA6ICNmOWM5MjI7XHJcblxyXG4kY29sb3Itc2lkZWJhci0xMDA6ICM2Y2MxOTU7XHJcblxyXG4kY29sb3ItYWxwaGEtMTAwOiAjZmZmO1xyXG4kY29sb3ItYWxwaGEtMjAwOiAjZjRmNGY0O1xyXG4kY29sb3ItYWxwaGEtMzAwOiAjZWVlO1xyXG4kY29sb3ItYWxwaGEtNDAwOiAjZGRkO1xyXG4kY29sb3ItYWxwaGEtNTAwOiAjY2NjO1xyXG4kY29sb3ItYWxwaGEtNjAwOiAjYmJiO1xyXG4kY29sb3ItYWxwaGEtNzAwOiAjYWFhO1xyXG5cclxuJGNvbG9yLWJldGEtMTAwOiAjOGNhOWRkO1xyXG4kY29sb3ItYmV0YS0yMDA6ICM4ZGFhZGU7XHJcbiRjb2xvci1iZXRhLTMwMDogI2E4Y2JlYjtcclxuJGNvbG9yLWJldGEtNDAwOiAjNjZhZmU5O1xyXG4kY29sb3ItYmV0YS01MDA6ICM3ZmI2ZDY7XHJcbiRjb2xvci1iZXRhLTYwMDogIzcyOTZkYTtcclxuJGNvbG9yLWJldGEtNzAwOiAjNjU4YWNmO1xyXG4kY29sb3ItYmV0YS04MDA6ICMzZDY5YmE7XHJcbiRjb2xvci1iZXRhLTkwMDogIzAwNzI5OTtcclxuJGNvbG9yLWJldGEtMTIwMDogIzdmYjZkNjtcclxuJGNvbG9yLWJldGEtMTMwMDogIzNhM2Y1MTtcclxuJGNvbG9yLWJldGEtMTQwMDogIzg5YzhlYjtcclxuJGNvbG9yLWJldGEtMTUwMDogIzcxOTZkYTtcclxuJGNvbG9yLWJldGEtMTYwMDogIzc3OTRkODtcclxuJGNvbG9yLWJldGEtMTcwMDogIzVmN2ZjOTtcclxuJGNvbG9yLWJldGEtMTgwMDogIzY0YjNkNTtcclxuJGNvbG9yLWJldGEtMTkwMDogIzMzYTZjYztcclxuJGNvbG9yLWJldGEtMjAwMDogIzY4YjRkNjtcclxuJGNvbG9yLWJldGEtMjEwMDogIzZmYWJjYztcclxuJGNvbG9yLWJldGEtMjIwMDogIzAwYjFlNTtcclxuJGNvbG9yLWJldGEtMjMwMDogIzU3YjBlMjtcclxuJGNvbG9yLWJldGEtMjQwMDogIzZkYmRkZTtcclxuJGNvbG9yLWJldGEtMjUwMDogIzkyYzFlOTtcclxuJGNvbG9yLWJldGEtMjYwMDogIzIzYjdlNTtcclxuXHJcbiRjb2xvci1iZXRhLW11dGVkLTEwMDogIzM0NzI5NDtcclxuJGNvbG9yLWJldGEtbXV0ZWQtMjAwOiAjYmE5Y2M1O1xyXG4kY29sb3ItYmV0YS1tdXRlZC0zMDA6ICNjOGIxZDA7XHJcbiRjb2xvci1iZXRhLW11dGVkLTQwMDogI2EyNzliMTtcclxuJGNvbG9yLWJldGEtbXV0ZWQtNjAwOiAjNWU3MTkwO1xyXG4kY29sb3ItYmV0YS1tdXRlZC03MDA6ICM1ODY2NmU7XHJcbiRjb2xvci1iZXRhLW11dGVkLTgwMDogIzYwNDQ2YjtcclxuJGNvbG9yLWJldGEtbXV0ZWQtOTAwOiAjOWQ2YWFmO1xyXG4kY29sb3ItYmV0YS1tdXRlZC0xMDAwOiAjYTA3OGFmO1xyXG5cclxuJGNvbG9yLXBzeS0xMDA6ICM4Y2RhYjI7XHJcbiRjb2xvci1wc3ktMjAwOiAjNmNjMDk0O1xyXG4kY29sb3ItcHN5LTMwMDogIzZiYmJhZTtcclxuJGNvbG9yLXBzeS00MDA6ICM1ZjllYTA7XHJcbiRjb2xvci1wc3ktNTAwOiAjNmNjMDk0O1xyXG4kY29sb3ItcHN5LTYwMDogIzZjYzE5NTtcclxuJGNvbG9yLXBzeS03MDA6ICM2Y2JkODM7XHJcbiRjb2xvci1wc3ktODAwOiAjMjdhZTYwO1xyXG4kY29sb3ItcHN5LTkwMDogIzNlYjg3OTtcclxuJGNvbG9yLXBzeS0xMDAwOiAjNWNhMDdkO1xyXG4kY29sb3ItcHN5LTEyMDA6ICMwMDUwM2M7XHJcbiRjb2xvci1wc3ktMTMwMDogI2I0YjJiNTtcclxuJGNvbG9yLXBzeS0xNDAwOiAjNzE2YzZjO1xyXG4kY29sb3ItcHN5LTE1MDA6ICM2MWFkODY7XHJcbiRjb2xvci1wc3ktMTYwMDogIzAwNTA0ZTtcclxuJGNvbG9yLXBzeS0xNzAwOiAjMjdjMjRjO1xyXG5cclxuJGNvbG9yLWdhbW1hLTEwMDogI2Y1ODY4YTtcclxuJGNvbG9yLWdhbW1hLTIwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWdhbW1hLTMwMDogI2ZmNTg1ZDtcclxuJGNvbG9yLWdhbW1hLTYwMDogI2VkNGI1MjtcclxuJGNvbG9yLWdhbW1hLTcwMDogI2ZhYmZjMTtcclxuJGNvbG9yLWdhbW1hLTgwMDogI2YwNTA1MDtcclxuJGNvbG9yLWdhbW1hLTkwMDogI2I3MDEwOTtcclxuJGNvbG9yLWdhbW1hLTEwMDA6ICM4YjQ2NDk7XHJcbiRjb2xvci1nYW1tYS0xMTAwOiAjYzVhMGJjO1xyXG4kY29sb3ItZ2FtbWEtMTIwMDogI2ZhMzIzYztcclxuXHJcbiRjb2xvci1nYW1tYS1tdXRlZC0xMDA6ICNjY2FiZDg7XHJcbiRjb2xvci1nYW1tYS1tdXRlZC02MDA6ICNhMjc5YjE7XHJcblxyXG4kY29sb3ItZGVsdGEtMTAwOiAjZmVkMmFkO1xyXG4kY29sb3ItZGVsdGEtMjAwOiAjZGNlMTIzO1xyXG4kY29sb3ItZGVsdGEtMzAwOiAjZGJlMDIzO1xyXG4kY29sb3ItZGVsdGEtNDAwOiAjZGRlMDNkO1xyXG4kY29sb3ItZGVsdGEtNjAwOiAjZGJkZTNjO1xyXG4kY29sb3ItZGVsdGEtNzAwOiAjZDJkYjQ2O1xyXG4kY29sb3ItZGVsdGEtODAwOiAjZmRhYTYzO1xyXG4kY29sb3ItZGVsdGEtOTAwOiAjZjliMTc4O1xyXG4kY29sb3ItZGVsdGEtMTAwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWRlbHRhLTExMDA6ICNmZmU4YmY7XHJcbiRjb2xvci1kZWx0YS0xMjAwOiAjZmZjYzgwO1xyXG5cclxuJGNvbG9yLW9tZWdhLTEwMDogIzAwMDtcclxuJGNvbG9yLW9tZWdhLTMwMDogIzIyMjtcclxuJGNvbG9yLW9tZWdhLTEwMDA6ICM1NTU7XHJcbiRjb2xvci1vbWVnYS0xMjAwOiAjODg4O1xyXG5cclxuJGNvbG9yLWxpZ2h0LTYwMDogI2JiYjtcclxuJGNvbG9yLWxpZ2h0LTcwMDogI2FhYTtcclxuXHJcbiRjb2xvci1pbmZvLTIwMDogIzhkYWFkZTtcclxuJGNvbG9yLWluZm8tMzAwOiAjYThjYmViO1xyXG4kY29sb3ItaW5mby00MDA6ICM2NmFmZTk7XHJcbiRjb2xvci1pbmZvLTUwMDogIzdmYjZkNjtcclxuJGNvbG9yLWluZm8tNjAwOiAjNzE5NmRhO1xyXG4kY29sb3ItaW5mby03MDA6ICM2NThhY2Y7XHJcbiRjb2xvci1pbmZvLTgwMDogIzNkNjliYTtcclxuJGNvbG9yLWluZm8tOTAwOiAjMDA3Mjk5O1xyXG4kY29sb3ItaW5mby0xMjAwOiAjM2EzZjUxO1xyXG5cclxuJGNvbG9yLWluZm8tbXV0ZWQtMjAwOiAjYmE5Y2M1O1xyXG4kY29sb3ItaW5mby1tdXRlZC02MDA6ICM1ZTcxOTA7XHJcbiRjb2xvci1pbmZvLW11dGVkLTgwMDogIzYwNDQ2YjtcclxuXHJcbiRjb2xvci1zdWNjZXNzLTEwMDogIzhjZGFiMjtcclxuJGNvbG9yLXN1Y2Nlc3MtMjAwOiAjNmNjMDk0O1xyXG4kY29sb3Itc3VjY2Vzcy0zMDA6ICM2YmJiYWU7XHJcbiRjb2xvci1zdWNjZXNzLTQwMDogIzVmOWVhMDtcclxuJGNvbG9yLXN1Y2Nlc3MtNjAwOiAjNmNjMTk1O1xyXG4kY29sb3Itc3VjY2Vzcy03MDA6ICM2Y2JkODM7XHJcbiRjb2xvci1zdWNjZXNzLTgwMDogIzI3YWU2MDtcclxuJGNvbG9yLXN1Y2Nlc3MtMTAwMDogIzVjYTA3ZDtcclxuJGNvbG9yLXN1Y2Nlc3MtMTIwMDogIzAwNTAzYztcclxuXHJcbiRjb2xvci1lcnJvci0xMDA6ICNmNTg2OGE7XHJcbiRjb2xvci1lcnJvci0yMDA6ICNmYzZhNzA7XHJcbiRjb2xvci1lcnJvci0zMDA6ICNmZjU4NWQ7XHJcbiRjb2xvci1lcnJvci02MDA6ICNlZDRiNTI7XHJcbiRjb2xvci1lcnJvci03MDA6ICNmYWJmYzE7XHJcbiRjb2xvci1lcnJvci04MDA6ICNmMDUwNTA7XHJcbiRjb2xvci1lcnJvci05MDA6ICNiNzAxMDk7XHJcbiRjb2xvci1lcnJvci0xMDAwOiAjOGI0NjQ5O1xyXG4kY29sb3ItZXJyb3ItMTEwMDogI2M1YTBiYztcclxuJGNvbG9yLWVycm9yLTEyMDA6ICNmYTMyM2M7XHJcblxyXG4kY29sb3ItZXJyb3ItbXV0ZWQtNjAwOiAjYTI3OWIxO1xyXG5cclxuJGNvbG9yLXdhcm5pbmctMTAwOiAjZmVkMmFkO1xyXG4kY29sb3Itd2FybmluZy0yMDA6ICNkY2UxMjM7XHJcbiRjb2xvci13YXJuaW5nLTMwMDogI2RiZTAyMztcclxuJGNvbG9yLXdhcm5pbmctNDAwOiAjZGRlMDNkO1xyXG4kY29sb3Itd2FybmluZy02MDA6ICNkYmRlM2M7XHJcbiRjb2xvci13YXJuaW5nLTcwMDogI2QyZGI0NjtcclxuJGNvbG9yLXdhcm5pbmctODAwOiAjZmRhYTYzO1xyXG4kY29sb3Itd2FybmluZy05MDA6ICNmOWIxNzg7XHJcbiRjb2xvci13YXJuaW5nLTEwMDA6ICNmYzZhNzA7XHJcbiRjb2xvci13YXJuaW5nLTExMDA6ICNmZmU4YmY7XHJcblxyXG4kY29sb3ItZGFyay0xMDAwOiAjNTU1O1xyXG4kY29sb3ItZGFyay0xMjAwOiAjODg4O1xyXG4kY29sb3ItcmVzb3VyY2U6ICMwMDE3MzE7XHJcbiRsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MC4wM2RlZywgIzE1NmQ4MSAwLjM2JSwgIzM2YWJjNSA5OS45OCUpO1xyXG4kbGluZWFyLWdyYWRpZW50LWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQoOTAuMDNkZWcsIHJnYmEoIzE1NmQ4MSwgMC4xKSAwLjM2JSwgcmdiYSgjMzZhYmM1LCAwLjEpIDk5Ljk4JSk7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BOneBussinesAngular\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1Qsm":
/*!*********************************************************!*\
  !*** ./src/app/@core/store/effects/settings.effects.ts ***!
  \*********************************************************/
/*! exports provided: SettingsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return SettingsEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/settings.actions */ "Mght");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/settings.service */ "1ylo");






class SettingsEffects {
    constructor(actions$, settingsService) {
        this.actions$ = actions$;
        this.settingsService = settingsService;
        this.loadResources$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_2__["loadResources"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((action) => this.settingsService.getResources().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resources) => _actions_settings_actions__WEBPACK_IMPORTED_MODULE_2__["setResources"]({ resources }))))));
    }
}
SettingsEffects.ɵfac = function SettingsEffects_Factory(t) { return new (t || SettingsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"])); };
SettingsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SettingsEffects, factory: SettingsEffects.ɵfac });


/***/ }),

/***/ "1ylo":
/*!****************************************************!*\
  !*** ./src/app/@core/services/settings.service.ts ***!
  \****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "UfwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SettingsService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    /**
     *
     */
    constructor(http) {
        super();
        this.http = http;
    }
    getResources() {
        return this.http.get('api/v1/public/resources').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => response.Result ? response.Result : response));
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2j62":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/components/b1-global-loader/b1-global-loader.component.ts ***!
  \***********************************************************************************/
/*! exports provided: B1GlobalLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B1GlobalLoaderComponent", function() { return B1GlobalLoaderComponent; });
/* harmony import */ var _selectors_app_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @selectors/app.selectors */ "TP+B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class B1GlobalLoaderComponent {
    constructor(store) {
        this.store = store;
        this.loading$ = this.store.select(_selectors_app_selectors__WEBPACK_IMPORTED_MODULE_0__["globalLoaderSelector"]);
    }
    ngOnInit() {
    }
}
B1GlobalLoaderComponent.ɵfac = function B1GlobalLoaderComponent_Factory(t) { return new (t || B1GlobalLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
B1GlobalLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: B1GlobalLoaderComponent, selectors: [["b1-global-loader"]], decls: 4, vars: 4, consts: [[1, "screen-loader-wrapper"], [1, "screen-loader"], [1, "screen-loader-section"]], template: function B1GlobalLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loaded", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.loading$));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiMS1nbG9iYWwtbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "3TYl":
/*!*******************************************************!*\
  !*** ./src/app/@shared/pipes/accounts-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: AccountFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFilterPipe", function() { return AccountFilterPipe; });
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/filter.model */ "uTAe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/filter.service */ "JQjg");



class AccountFilterPipe {
    constructor(filterService) {
        this.filterService = filterService;
    }
    transform(accounts, filter, filterCurrency) {
        if (!accounts) {
            return new Array();
        }
        if (!filter && (!filterCurrency || !filterCurrency.currencies || filterCurrency.currencies.length === 0)) {
            return accounts;
        }
        if (!!filterCurrency && !!filterCurrency.currencies && filterCurrency.currencies.length !== 0) {
            accounts = filterCurrency.type === _models_filter_model__WEBPACK_IMPORTED_MODULE_0__["FilterCurrencyType"].Include ?
                accounts.filter(p => filterCurrency.currencies.indexOf(p.CurrencyCode) >= 0) :
                accounts.filter(p => filterCurrency.currencies.indexOf(p.CurrencyCode) === -1);
        }
        if (!!filter) {
            return accounts.filter(account => {
                const filterArray = this.getFilterArray(account);
                if (filterArray.some(p => p.indexOf(filter.toUpperCase()) >= 0)) {
                    return true;
                }
                return false;
            });
        }
        return accounts;
    }
    getFilterArray(account) {
        const filterArray = new Array();
        this.filterService.pushValue(filterArray, account.CurrencyCode);
        this.filterService.pushValue(filterArray, account.Name);
        this.filterService.pushValue(filterArray, account.Number);
        this.filterService.pushValue(filterArray, account.BankId);
        this.filterService.pushDateValue(filterArray, account.LastActive);
        this.filterService.pushDateValue(filterArray, account.OpeningDate);
        this.filterService.pushDateValue(filterArray, account.ClosingDate);
        this.filterService.pushMoneyValue(filterArray, account.Balance);
        this.filterService.pushMoneyValue(filterArray, account.PlannedBalance);
        this.filterService.pushMoneyValue(filterArray, account.CreditTurns);
        this.filterService.pushMoneyValue(filterArray, account.DebitTurns);
        return filterArray;
    }
}
AccountFilterPipe.ɵfac = function AccountFilterPipe_Factory(t) { return new (t || AccountFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"])); };
AccountFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "accountsFilter", type: AccountFilterPipe, pure: true });


/***/ }),

/***/ "4ozZ":
/*!*******************************************************!*\
  !*** ./src/app/@core/store/reducers/user.reducers.ts ***!
  \*******************************************************/
/*! exports provided: USER_KEY, initialState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_KEY", function() { return USER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/auth.actions */ "UvNo");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @actions/user.actions */ "Vms1");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



const USER_KEY = 'user';
const initialState = {
    profile: undefined,
    notifications: new Array(),
    currentClientId: undefined,
    menu: undefined,
    subMenu: undefined
};
const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileSuccess"], _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loadProfileSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { profile: action.profile }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["setNotifications"], (state, action) => (Object.assign(Object.assign({}, state), { notifications: action.notifications }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentClientId"], (state, action) => (Object.assign(Object.assign({}, state), { currentClientId: action.clientId }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["setMenu"], (state, action) => (Object.assign(Object.assign({}, state), { menu: action.menu }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["setSubMenu"], (state, action) => (Object.assign(Object.assign({}, state), { subMenu: action.menu }))));


/***/ }),

/***/ "5N+I":
/*!*******************************************************!*\
  !*** ./src/app/@core/store/reducers/auth.reducers.ts ***!
  \*******************************************************/
/*! exports provided: AUTH_KEY, initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/auth.actions */ "UvNo");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const AUTH_KEY = 'auth';
const initialState = {
    isLoading: false,
    loginData: undefined,
    phone: undefined,
    error: undefined,
    isNeedOtp: false,
    token: undefined
};
const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginFailure"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginSuccess"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenFailure"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenSuccess"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileSuccess"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileFailure"], state => (Object.assign(Object.assign({}, state), { isLoading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginRequest"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenLoginRequest"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenOtpRequest"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileRequest"], state => (Object.assign(Object.assign({}, state), { isLoading: true, error: '' }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginFailure"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenFailure"], (state, action) => (Object.assign(Object.assign({}, state), { error: action.message }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["setToken"], (state, action) => (Object.assign(Object.assign({}, state), { token: action.token }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["setNeedOtp"], (state, action) => (Object.assign(Object.assign({}, state), { isNeedOtp: true, phone: action.phone }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginRequest"], (state, actions) => (Object.assign(Object.assign({}, state), { loginData: actions.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["resetLogin"], (state) => (Object.assign({}, initialState))));


/***/ }),

/***/ "7aPK":
/*!*******************************************************!*\
  !*** ./src/app/@core/store/actions/public.actions.ts ***!
  \*******************************************************/
/*! exports provided: loadBanks, loadBanksSuccess, loadBanksFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBanks", function() { return loadBanks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBanksSuccess", function() { return loadBanksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBanksFailure", function() { return loadBanksFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadBanks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PUBLIC] loadBanks');
const loadBanksSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PUBLIC] load banks Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadBanksFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PUBLIC] load banks Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "9cjx":
/*!*******************************************************!*\
  !*** ./src/app/@core/store/actions/notify.actions.ts ***!
  \*******************************************************/
/*! exports provided: successNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successNotification", function() { return successNotification; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// successNotification action
const successNotification = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[NOTIFY] success notification', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    languages: ['uk', 'ru', 'en'],
    defaultUserPictureUrl: 'assets/img/a0.jpg',
    mobileWidth: 812
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BQfU":
/*!************************************************!*\
  !*** ./src/app/@core/services/iban.service.ts ***!
  \************************************************/
/*! exports provided: IbanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IbanService", function() { return IbanService; });
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big-integer */ "dAlA");
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IbanService {
    constructor() {
        // Довжина IBAN
        this.IbanLength = 29;
    }
    // Перевірка контрольного розряду IBAN
    validateChecksum(iban) {
        if (!iban) {
            return false;
        }
        const asciiShift = 55;
        iban = iban.toUpperCase();
        if (!iban.match(/^[A-Z0-9]/i)) {
            return false;
        }
        iban = iban.replace(/ /g, '');
        const rearrangedIban = iban.substr(4, iban.length - 4) + iban.substr(0, 4);
        let checkSumString = '';
        for (let i = 0; i < rearrangedIban.length; i++) {
            const char = rearrangedIban[i];
            if (this.isLetter(char)) {
                checkSumString += rearrangedIban.charCodeAt(i) - asciiShift;
            }
            else {
                checkSumString += +char;
            }
        }
        let checksum = +checkSumString.substr(0, 1);
        for (let i = 1; i < checkSumString.length; i++) {
            checksum *= 10;
            checksum += +checkSumString.substr(i, 1);
            checksum %= 97;
        }
        return checksum === 1;
    }
    // Отримати МФО з IBAN
    getMfo(iban) {
        return iban.substr(4, 6);
    }
    // Отримати номер рахунку з IBAN
    getNls(iban) {
        if (iban.length > 14) {
            return this.ltrim(iban.substr(10), '0');
        }
        else {
            return iban;
        }
    }
    // Отримати IBAN по МФО та номеру рахунку
    // якщо padLeft істина то рахунок доповниться нулями з ліва, інакше з права (дефолтне значення істина)
    getIban(mfo, nls, padLeft = true, countryCode = 'UA') {
        if (padLeft) {
            nls = this.padStart(nls, 19, '0');
        }
        else {
            nls = this.padEnd(nls, 19, '0');
        }
        const ibanWithoutCheckDigit = countryCode + '00' + mfo + nls;
        const asciiShift = 55;
        let checkSumString = '';
        const rearrangedIban = ibanWithoutCheckDigit.substr(4, ibanWithoutCheckDigit.length - 4) + ibanWithoutCheckDigit.substr(0, 4);
        for (let i = 0; i < rearrangedIban.length; i++) {
            const char = rearrangedIban[i];
            if (this.isLetter(char)) {
                checkSumString += rearrangedIban.charCodeAt(i) - asciiShift;
            }
            else {
                checkSumString += +char;
            }
        }
        // var mod = bigInt(97);
        // var checkSum = bigInt(checkSumString);
        const checkDigit = (198 - parseInt(big_integer__WEBPACK_IMPORTED_MODULE_0__(checkSumString).mod(97).valueOf().toString(), 10)).toString().slice(-2);
        return countryCode + checkDigit + mfo + nls;
    }
    // Перевірка чи являється вказаний рахунок IBAN-ном
    isIban(nls) {
        if (!nls) {
            return false;
        }
        if (nls.length !== this.IbanLength) {
            return false;
        }
        if (!this.isLetter(nls[0]) || !this.isLetter(nls[1])) {
            return false;
        }
        return true;
    }
    // Перевірка всього айбану
    validate(iban) {
        if (!this.validateChecksum(iban)) {
            return false;
        }
        if (iban.substr(0, 2).toUpperCase() !== 'UA') { // если айбан проверяем что первые 2 символа UA
            return false;
        }
        for (let i = 2; i < iban.length; i++) { // если айбан проверяем что все последующии символы это цифры
            if (!('0123456789'.indexOf(iban[i]) < 0)) {
                return false;
            }
        }
        return true;
    }
    // доповнити строку target з лівої сторони символами padString до довжини targetLength
    padStart(target, targetLength, padString) {
        if (!String.prototype.repeat) {
            String.prototype.repeat = function (count) {
                'use strict';
                if (this == null) {
                    throw new TypeError('can\'t convert ' + this + ' to object');
                }
                const str = '' + this;
                count = +count;
                if (count !== count) {
                    count = 0;
                }
                if (count < 0) {
                    throw new RangeError('repeat count must be non-negative');
                }
                if (count === Infinity) {
                    throw new RangeError('repeat count must be less than infinity');
                }
                count = Math.floor(count);
                if (str.length === 0 || count === 0) {
                    return '';
                }
                // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
                // соптимизировать главную часть функции. Впрочем, большинство современных (на август
                // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
                // tslint:disable-next-line: no-bitwise
                if (str.length * count >= 1 << 28) {
                    throw new RangeError('repeat count must not overflow maximum string size');
                }
                let rpt = '';
                for (let i = 0; i < count; i++) {
                    rpt += str;
                }
                return rpt;
            };
        }
        // tslint:disable-next-line: no-bitwise
        targetLength = targetLength >> 0;
        padString = String(padString || ' ');
        if (target.length > targetLength) {
            return String(target);
        }
        else {
            targetLength = targetLength - target.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return padString.slice(0, targetLength) + String(target);
        }
    }
    // доповнити строку target з правої сторони символами padString до довжини targetLength
    padEnd(target, targetLength, padString) {
        if (!String.prototype.repeat) {
            String.prototype.repeat = function (count) {
                'use strict';
                if (this == null) {
                    throw new TypeError('can\'t convert ' + this + ' to object');
                }
                const str = '' + this;
                count = +count;
                if (count !== count) {
                    count = 0;
                }
                if (count < 0) {
                    throw new RangeError('repeat count must be non-negative');
                }
                if (count === Infinity) {
                    throw new RangeError('repeat count must be less than infinity');
                }
                count = Math.floor(count);
                if (str.length === 0 || count === 0) {
                    return '';
                }
                // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
                // соптимизировать главную часть функции. Впрочем, большинство современных (на август
                // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
                // tslint:disable-next-line: no-bitwise
                if (str.length * count >= 1 << 28) {
                    throw new RangeError('repeat count must not overflow maximum string size');
                }
                let rpt = '';
                for (let i = 0; i < count; i++) {
                    rpt += str;
                }
                return rpt;
            };
        }
        // tslint:disable-next-line: no-bitwise
        targetLength = targetLength >> 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (target.length > targetLength) {
            return String(target);
        }
        else {
            targetLength = targetLength - target.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return String(target) + padString.slice(0, targetLength);
        }
    }
    // функція перевірки чи є str строкою з 1ного символу
    isLetter(str) {
        var _a;
        return str.length === 1 && (((_a = str.match(/[a-z]/i)) === null || _a === void 0 ? void 0 : _a.length) || -1) >= 0;
    }
    ltrim(value, char) {
        const re = new RegExp('^' + char + '+');
        return value.replace(re, '');
    }
}
IbanService.ɵfac = function IbanService_Factory(t) { return new (t || IbanService)(); };
IbanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IbanService, factory: IbanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DtIY":
/*!*********************************************************!*\
  !*** ./src/app/@core/store/selectors/user.selectors.ts ***!
  \*********************************************************/
/*! exports provided: featureSelector, profileSelector, countCustomersSelector, notificationsSelector, countNotificationsSelector, userNameSelector, userPictureSelector, currentClientIdSelector, currentClientIdFilteredSelector, currentCustomerSelector, currentCustomerNameSelector, menuSelector, subMenuSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureSelector", function() { return featureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSelector", function() { return profileSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countCustomersSelector", function() { return countCustomersSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationsSelector", function() { return notificationsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNotificationsSelector", function() { return countNotificationsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userNameSelector", function() { return userNameSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPictureSelector", function() { return userPictureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentClientIdSelector", function() { return currentClientIdSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentClientIdFilteredSelector", function() { return currentClientIdFilteredSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCustomerSelector", function() { return currentCustomerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCustomerNameSelector", function() { return currentCustomerNameSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuSelector", function() { return menuSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subMenuSelector", function() { return subMenuSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_user_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reducers/user.reducers */ "4ozZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_user_reducers__WEBPACK_IMPORTED_MODULE_1__["USER_KEY"]);
const profileSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.profile);
const countCustomersSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => { var _a, _b; return (_b = (_a = state.profile) === null || _a === void 0 ? void 0 : _a.Customers.length) !== null && _b !== void 0 ? _b : 0; });
const notificationsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.notifications);
const countNotificationsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.notifications.length);
const userNameSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => { var _a, _b, _c; return ((_a = state.profile) === null || _a === void 0 ? void 0 : _a.UserDisplayName) || ((_b = state.profile) === null || _b === void 0 ? void 0 : _b.UserInternationalName) || ((_c = state.profile) === null || _c === void 0 ? void 0 : _c.Email); });
// TODO fix this shit
const userPictureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => { var _a, _b; return ((_a = state.profile) === null || _a === void 0 ? void 0 : _a.UserPictureUrl) ? `http://10.10.10.130/Bars.API.Web.Client/api/v1${(_b = state.profile) === null || _b === void 0 ? void 0 : _b.UserPictureUrl}` : src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].defaultUserPictureUrl; });
const currentClientIdSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.currentClientId);
const currentClientIdFilteredSelector = (store) => {
    return store.select(currentClientIdSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(value => !!value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => value));
};
const currentCustomerSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(profileSelector, currentClientIdSelector, (profile, currentClientId) => { var _a; return (_a = profile === null || profile === void 0 ? void 0 : profile.Customers) === null || _a === void 0 ? void 0 : _a.find(p => p.ClientId === currentClientId); });
const currentCustomerNameSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(currentCustomerSelector, (currentCustomer) => currentCustomer === null || currentCustomer === void 0 ? void 0 : currentCustomer.Name);
const menuSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.menu);
const subMenuSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.subMenu);


/***/ }),

/***/ "FA7H":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/models/login.model.ts ***!
  \****************************************************/
/*! exports provided: LogInModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInModel", function() { return LogInModel; });
class LogInModel {
    constructor() {
        this.UserData = `${navigator.appName};${(new Date()).getTimezoneOffset() / 60};${navigator.platform};${screen.width};${screen.height};${screen.colorDepth};${screen.pixelDepth}`;
    }
}


/***/ }),

/***/ "FZXn":
/*!*****************************************************!*\
  !*** ./src/app/@core/store/effects/user.effects.ts ***!
  \*****************************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selectors/user.selectors */ "DtIY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions/user.actions */ "Vms1");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/auth.actions */ "UvNo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/user.service */ "vEZ/");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/notifications.service */ "+CeN");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/menu.service */ "vAy1");












// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';
// import all requried services or any dependencies
class UserEffects {
    constructor(actions$, store, userService, notificationsService, menuService) {
        this.actions$ = actions$;
        this.store = store;
        this.userService = userService;
        this.notificationsService = notificationsService;
        this.menuService = menuService;
        this.checkProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["checkProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__["profileSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([action, profile]) => {
            if (profile !== undefined) {
                return _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["profileExist"]();
            }
            else {
                return _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadProfileRequest"]();
            }
        })));
        this.loadProfileRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadProfileRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.userService.getProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((profile) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadProfileSuccess"]({ profile })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadProfileFailure"]({ error: error.error.Message })))))));
        this.loadNotifications$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadNotifications"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__["profileSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([action, profile]) => this.notificationsService.getNotifications((profile === null || profile === void 0 ? void 0 : profile.UserId) || '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((notifications) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["setNotifications"]({ notifications }))))));
        this.loadProfileSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadProfileSuccess"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["authLoadProfileSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__["currentClientIdSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([action, currentClientId]) => {
            if (currentClientId === undefined) {
                return _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["setCurrentClientId"]({ clientId: action.profile.Customers[0].ClientId });
            }
            else {
                return _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["setCurrentClientId"]({ clientId: currentClientId });
            }
        })));
        this.buildMenu$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["setCurrentClientId"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__["currentCustomerSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([action, currentCustomer]) => {
            const menu = this.menuService.getMenuForCustomer(currentCustomer);
            return _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["setMenu"]({ menu });
        })));
        this.buildSubMenu$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["setMenu"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const menu = this.menuService.getSubMenu();
            return _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["setSubMenu"]({ menu });
        })));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_10__["MenuService"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ "GAc8":
/*!*****************************************************!*\
  !*** ./src/app/@core/store/actions/acct.actions.ts ***!
  \*****************************************************/
/*! exports provided: loadAccounts, setAccounts, setTab, goToDetail, loadCurrentAccount, loadCurrentAccountSuccess, loadCurrentAccountFailure, setCurrentAccount, setAccountName, setEditFormInitState, sumbitEditForm, updateAccountRequest, updateAccountSuccess, updateAccountFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAccounts", function() { return loadAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccounts", function() { return setAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTab", function() { return setTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToDetail", function() { return goToDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCurrentAccount", function() { return loadCurrentAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCurrentAccountSuccess", function() { return loadCurrentAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCurrentAccountFailure", function() { return loadCurrentAccountFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentAccount", function() { return setCurrentAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccountName", function() { return setAccountName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEditFormInitState", function() { return setEditFormInitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumbitEditForm", function() { return sumbitEditForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountRequest", function() { return updateAccountRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountSuccess", function() { return updateAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountFailure", function() { return updateAccountFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// loadAccounts action
const loadAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] load accounts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// setAccounts action
const setAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] set accounts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// setTab action
const setTab = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] set tab', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const goToDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] go to detail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCurrentAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] load current account');
const loadCurrentAccountSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] load current account Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCurrentAccountFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] load current account Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setCurrentAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] set current account', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// setAccountName action
const setAccountName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] set account name', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// setEditFormInitState action
const setEditFormInitState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] set edit form init state');
// sumbitEditForm action
const sumbitEditForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] submit edit form');
const updateAccountRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] update account request', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAccountSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] update account Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAccountFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ACCT] update account Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "GHAp":
/*!**************************************************************!*\
  !*** ./src/app/@shared/directives/mobile-class.directive.ts ***!
  \**************************************************************/
/*! exports provided: MobileClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileClassDirective", function() { return MobileClassDirective; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MobileClassDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        if (window.screen.width <= src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].mobileWidth && this.mobileClass) {
            this.el.nativeElement.className += ` ${this.mobileClass}`;
        }
    }
}
MobileClassDirective.ɵfac = function MobileClassDirective_Factory(t) { return new (t || MobileClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MobileClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MobileClassDirective, selectors: [["", "mobileClass", ""]], inputs: { mobileClass: "mobileClass" } });


/***/ }),

/***/ "Glcz":
/*!*************************************************************************!*\
  !*** ./src/app/layout/authorized-layout/authorized-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthorizedLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedLayoutComponent", function() { return AuthorizedLayoutComponent; });
/* harmony import */ var _selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @selectors/settings.selectors */ "sqfJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_facades_user_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/facades/user.facade */ "uN0L");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "/Lhg");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "MR0u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/component */ "9A8T");








class AuthorizedLayoutComponent {
    constructor(userFacade, store) {
        this.userFacade = userFacade;
        this.store = store;
        this.profile$ = this.userFacade.profile$;
        this.isCollapsed$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_0__["isCollapsedSelector"]);
    }
    ngOnInit() {
        this.userFacade.loadProfile();
        this.profileSubscription$ = this.profile$.subscribe((profile) => {
            if (profile) {
                this.userFacade.loadNotifications();
            }
        });
    }
    ngOnDestroy() {
        this.profileSubscription$.unsubscribe();
    }
}
AuthorizedLayoutComponent.ɵfac = function AuthorizedLayoutComponent_Factory(t) { return new (t || AuthorizedLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_facades_user_facade__WEBPACK_IMPORTED_MODULE_2__["UserFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AuthorizedLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthorizedLayoutComponent, selectors: [["app-authorized-layout"]], decls: 6, vars: 4, consts: [[1, "app", "container", "app-aside-fixed"], [1, "app-content", "fade-in"]], template: function AuthorizedLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("b1-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.isCollapsed$));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_7__["PushPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpemVkLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "HuDP":
/*!*****************************************************!*\
  !*** ./src/app/@core/store/effects/auth.effects.ts ***!
  \*****************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/auth.actions */ "UvNo");
/* harmony import */ var _modules_auth_models_login_otp_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/auth/models/login-otp.model */ "j9Os");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selectors/auth.selectors */ "i8hp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/auth.service */ "ucNU");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/user.service */ "vEZ/");











class AuthEffects {
    constructor(action$, authService, store, userService) {
        this.action$ = action$;
        this.authService = authService;
        this.store = store;
        this.userService = userService;
        this.loginRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.authService.logIn(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginSuccess"]({ response })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginFailure"]({ message: error.error.Message })))))));
        this.tokenOtp$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenOtpRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["loginDataSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([action, model]) => this.authService.loginOtp(new _modules_auth_models_login_otp_model__WEBPACK_IMPORTED_MODULE_1__["LoginOtpModel"](action.code, model)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(token => [_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["setToken"]({ token }), _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenSuccess"]({ token })]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenFailure"]({ message: error.error.error_description })))))));
        this.needOtp$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["loginDataSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([action, model]) => action.response.Type === 'Otp' ?
            _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["setNeedOtp"]({ phone: action.response.Phone }) :
            _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenLoginRequest"]({ data: model }))));
        this.tokenLogin$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenLoginRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.authService.loginWithData(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(token => [_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["setToken"]({ token }), _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenSuccess"]({ token })]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginFailure"]({ message: error.error.error_description })))))));
        this.tokenSuccessEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["tokenSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileRequest"]())));
        this.loadProfileRequestEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.userService.getProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(profile => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileSuccess"]({ profile })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["authLoadProfileFailure"]({ error: error.error.Message })))))));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ "IZWX":
/*!***********************************************************!*\
  !*** ./src/app/@core/store/selectors/router.selectors.ts ***!
  \***********************************************************/
/*! exports provided: selectRouter, selectCurrentRoute, selectFragment, selectQueryParams, selectQueryParam, selectRouteParams, selectRouteParam, selectRouteData, selectUrl, selectRouteNestedParams, selectRouteNestedParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouter", function() { return selectRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRoute", function() { return selectCurrentRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFragment", function() { return selectFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQueryParams", function() { return selectQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQueryParam", function() { return selectQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParams", function() { return selectRouteParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParam", function() { return selectRouteParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteData", function() { return selectRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUrl", function() { return selectUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteNestedParams", function() { return selectRouteNestedParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteNestedParam", function() { return selectRouteNestedParam; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const selectRouter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('router');
const { selectCurrentRoute, // select the current route
selectFragment, // select the current route fragment
selectQueryParams, // select the current route query params
selectQueryParam, // factory function to select a query param
selectRouteParams, // select the current route params
selectRouteParam, // factory function to select a route param
selectRouteData, // select the current route data
selectUrl, } = Object(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["getSelectors"])(selectRouter);
const selectRouteNestedParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectRouter, (router) => {
    var _a;
    let currentRoute = (_a = router === null || router === void 0 ? void 0 : router.state) === null || _a === void 0 ? void 0 : _a.root;
    let params = {};
    while (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
        params = Object.assign(Object.assign({}, params), currentRoute.params);
    }
    return params;
});
const selectRouteNestedParam = (param) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectRouteNestedParams, (params) => params && params[param]);


/***/ }),

/***/ "Ipjf":
/*!*****************************************************!*\
  !*** ./src/app/@core/store/effects/acct.effects.ts ***!
  \*****************************************************/
/*! exports provided: AcctEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcctEffects", function() { return AcctEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reducers/acct.reducers */ "QJkZ");
/* harmony import */ var _selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selectors/acct.selectors */ "mvWm");
/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selectors/user.selectors */ "DtIY");
/* harmony import */ var ngrx_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngrx-forms */ "atpF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../actions/acct.actions */ "GAc8");
/* harmony import */ var _actions_notify_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/notify.actions */ "9cjx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_acct_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/acct.service */ "a43w");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














class AcctEffects {
    constructor(actions$, accountsService, store, translateService) {
        this.actions$ = actions$;
        this.accountsService = accountsService;
        this.store = store;
        this.translateService = translateService;
        this.loadAccounts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["loadAccounts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => Object(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["currentClientIdFilteredSelector"])(this.store)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((clientId) => this.accountsService.getAccounts(clientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((accounts) => _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["setAccounts"]({ accounts }))))));
        this.setCurrencyFilterOther$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(ngrx_forms__WEBPACK_IMPORTED_MODULE_4__["SetValueAction"].TYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((formControl) => formControl.controlId.startsWith(_reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_1__["ACCT_FILTER_FORM"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["formSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([formControl, form]) => formControl.controlId === form.controls.currency.controls.OTHER.id && formControl.value === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([, form]) => {
            return [
                new ngrx_forms__WEBPACK_IMPORTED_MODULE_4__["SetValueAction"](form.controls.currency.controls.EUR.id, false),
                new ngrx_forms__WEBPACK_IMPORTED_MODULE_4__["SetValueAction"](form.controls.currency.controls.USD.id, false),
                new ngrx_forms__WEBPACK_IMPORTED_MODULE_4__["SetValueAction"](form.controls.currency.controls.UAH.id, false)
            ];
        })));
        this.setCurrencyFilter$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(ngrx_forms__WEBPACK_IMPORTED_MODULE_4__["SetValueAction"].TYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((formControl) => formControl.controlId.startsWith(_reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_1__["ACCT_FILTER_FORM"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["formSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([formControl, form]) => [
            form.controls.currency.controls.EUR.id,
            form.controls.currency.controls.USD.id,
            form.controls.currency.controls.UAH.id
        ].indexOf(formControl.controlId) >= 0 && formControl.value === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([, form]) => {
            return [
                new ngrx_forms__WEBPACK_IMPORTED_MODULE_4__["SetValueAction"](form.controls.currency.controls.OTHER.id, false),
            ];
        })));
        this.setAccountName$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["setAccountName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["editFormSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([action, formControl]) => new ngrx_forms__WEBPACK_IMPORTED_MODULE_4__["SetValueAction"](formControl.controls.name.id, action.name))));
        this.loadCurrentAccount$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["loadCurrentAccount"]), 
        // delay(9000),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => Object(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["currentClientIdFilteredSelector"])(this.store)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["currentAccountSelector"]), this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["currentAccountRouteParamsSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([clientId, account, routeParams]) => {
            if (account) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["loadCurrentAccountSuccess"]({ account }));
            }
            else {
                return this.accountsService.getAccount(routeParams.bankId, routeParams.accountId, clientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(currentAccount => _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["loadCurrentAccountSuccess"]({ account: currentAccount })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["loadCurrentAccountFailure"]({ error: error.error.Message }))));
            }
        })));
        this.loadCurrentAccountSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(...[
            _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["loadCurrentAccountSuccess"],
            _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["updateAccountSuccess"]
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["setCurrentAccount"]({ account: action.account }))));
        this.submitEditForm$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["sumbitEditForm"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["editFormSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([, form]) => _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["updateAccountRequest"]({ model: form.value }))));
        this.updateAccountRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["updateAccountRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((action) => Object(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["currentClientIdFilteredSelector"])(this.store).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((clientId) => ({ clientId, action })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["currentAccountRouteParamsSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([payload, routeParams]) => this.accountsService.updateAccount(routeParams.bankId, routeParams.accountId, payload.clientId, payload.action.model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["currentAccountSelector"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([, account]) => account !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([, account]) => account), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((account) => _actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["updateAccountSuccess"]({ account: Object.assign(Object.assign({}, account), { Name: payload.action.model.name }) })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["updateAccountFailure"](error.error.Message)))))));
        this.updateAccountSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_7__["updateAccountSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => _actions_notify_actions__WEBPACK_IMPORTED_MODULE_8__["successNotification"]({ message: this.translateService.instant('componets.acct.updateAccountSuccess') }))));
    }
}
AcctEffects.ɵfac = function AcctEffects_Factory(t) { return new (t || AcctEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_acct_service__WEBPACK_IMPORTED_MODULE_10__["AcctService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"])); };
AcctEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AcctEffects, factory: AcctEffects.ɵfac });


/***/ }),

/***/ "JQjg":
/*!**************************************************!*\
  !*** ./src/app/@core/services/filter.service.ts ***!
  \**************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathjs */ "xws/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class FilterService {
    constructor(datepipe) {
        this.datepipe = datepipe;
    }
    getMoneyString(money) {
        return mathjs__WEBPACK_IMPORTED_MODULE_0__["divide"](money, 100).toString();
    }
    pushValue(values, value) {
        if (!!value) {
            values.push(value.toString().toUpperCase());
        }
    }
    pushDateValue(values, value) {
        if (!!value) {
            values.push(this.datepipe.transform(value, 'dd.MM.yyyy').toString().toUpperCase());
        }
    }
    pushMoneyValue(values, value) {
        if (!!value) {
            values.push(this.getMoneyString(value).toUpperCase());
        }
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JvC3":
/*!*******************************************************!*\
  !*** ./src/app/@core/store/effects/public.effects.ts ***!
  \*******************************************************/
/*! exports provided: PublicEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicEffects", function() { return PublicEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_public_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/public.actions */ "7aPK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_public_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/public.service */ "i8I7");







class PublicEffects {
    constructor(actions$, publicService) {
        this.actions$ = actions$;
        this.publicService = publicService;
        this.loadBanks$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_public_actions__WEBPACK_IMPORTED_MODULE_3__["loadBanks"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.publicService.getBanks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(banks => _actions_public_actions__WEBPACK_IMPORTED_MODULE_3__["loadBanksSuccess"]({ banks })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_public_actions__WEBPACK_IMPORTED_MODULE_3__["loadBanksFailure"]({ error: error.error.Message }))))));
    }
}
PublicEffects.ɵfac = function PublicEffects_Factory(t) { return new (t || PublicEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_public_service__WEBPACK_IMPORTED_MODULE_5__["PublicService"])); };
PublicEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PublicEffects, factory: PublicEffects.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LQbr":
/*!********************************************************!*\
  !*** ./src/app/@core/interceptors/auth.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/auth.actions */ "UvNo");
/* harmony import */ var _selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selectors/auth.selectors */ "i8hp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/auth.service */ "ucNU");








class AuthInterceptor {
    constructor(translate, store, authService) {
        this.translate = translate;
        this.store = store;
        this.authService = authService;
        this.endpoint = 'https://bobusiness.unity-bars.com/Bars.API.Web.Client/';
        this.token = undefined;
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
        store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["tokenSelector"]).subscribe(token => {
            this.token = token;
        });
    }
    refreshToken() {
        var _a, _b;
        if (this.refreshTokenInProgress) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                this.tokenRefreshed$.subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshTokenInProgress = true;
            return this.authService.refreshToken((_a = this.token) === null || _a === void 0 ? void 0 : _a.refresh_token, (_b = this.token) === null || _b === void 0 ? void 0 : _b.sessionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((token) => {
                this.store.dispatch(Object(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["setToken"])({ token }));
                this.refreshTokenInProgress = false;
                this.tokenRefreshedSource.next();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                this.refreshTokenInProgress = false;
                this.logout();
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }));
        }
    }
    handleResponseError(error, request, next) {
        // Invalid token error
        if (error.status === 401) {
            return this.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
                request = this.formatRequest(request);
                return next.handle(request);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
                if (e.status !== 401) {
                    return this.handleResponseError(e, request, next);
                }
                else {
                    this.logout();
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                }
            }));
        }
        // Access denied error
        else if (error.status === 403) {
            // Show message
            // Logout
            this.logout();
        }
        // Server error
        else if (error.status === 500) {
            // Show message
        }
        // Maintenance error
        else if (error.status === 503) {
            // Show message
            // Redirect to the maintenance page
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
    logout() {
        this.store.dispatch(Object(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["logout"])());
    }
    intercept(req, next) {
        const requestFormated = this.formatRequest(req);
        return next.handle(requestFormated)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => this.handleResponseError(error, req, next)));
    }
    formatRequest(request) {
        const language = this.translate.currentLang === 'uk' ? 'uk-UA' : this.translate.currentLang === 'ru' ? 'ru-RU' : 'en-US';
        const prefix = request.url.indexOf('?') > 0 ? '&_=' : '?_=';
        console.log(this.translate.currentLang);
        if (!request.url.includes('token')) {
            request = request.clone({
                setHeaders: {
                    'Use-Response-Wrapper': request.url.includes('token') ? 'true' : 'false'
                }
            });
        }
        if (this.isStaticFileRequest(request.url)) {
            request = request.clone({
                url: request.url + prefix + this.customDate(new Date(), '.')
            });
            return request;
        }
        request = request.clone({
            url: this.endpoint + request.url,
            setHeaders: {
                'Accept-Language': language
            },
        });
        if (this.token && !request.url.includes('token')) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.token.access_token
                }
            });
        }
        return request;
    }
    isStaticFileRequest(url) {
        return url.indexOf('i18n') >= 0 || url.indexOf('.svg') >= 0;
    }
    customDate(date, separator) {
        const mm = date.getMonth() + 1; // getMonth() is zero-based
        const dd = date.getDate();
        return [(dd > 9 ? '' : '0') + dd,
            (mm > 9 ? '' : '0') + mm,
            date.getFullYear(),
        ].join(separator);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "Lpap":
/*!*********************************************************************!*\
  !*** ./src/app/@shared/directives/more-auto-direction.directive.ts ***!
  \*********************************************************************/
/*! exports provided: MoreAutoDirectionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreAutoDirectionDirective", function() { return MoreAutoDirectionDirective; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class MoreAutoDirectionDirective {
    constructor(dropdown, el) {
        this.dropdown = dropdown;
        this.el = el;
        this.parentSelector = '.b1-page-data';
        if (this.el.nativeElement.getAttribute('mobile-more') && window.screen.width <= src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mobileWidth) {
            return;
        }
        const parentNode = document.querySelector(this.parentSelector);
        if (!parentNode) {
            return;
        }
        this.openSubscription = dropdown.openChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(p => p === true)).subscribe(() => {
            setTimeout(() => {
                const elementTop = this.el.nativeElement.getBoundingClientRect().top;
                const parentTop = parentNode.getBoundingClientRect().top;
                const elementHeight = this.el.nativeElement.clientHeight;
                if (elementTop - parentTop - elementHeight < 0) {
                    this.el.nativeElement.classList.add('b1-dropdown_down');
                    this.el.nativeElement.classList.remove('b1-dropdown_up');
                }
                else {
                    this.el.nativeElement.classList.add('b1-dropdown_up');
                    this.el.nativeElement.classList.remove('b1-dropdown_down');
                }
            });
        });
    }
}
MoreAutoDirectionDirective.ɵfac = function MoreAutoDirectionDirective_Factory(t) { return new (t || MoreAutoDirectionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDropdown"], 2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
MoreAutoDirectionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MoreAutoDirectionDirective, selectors: [["", "more-auto-direction", ""]], inputs: { parentSelector: "parentSelector" } });


/***/ }),

/***/ "M1yg":
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/components/b1-card-loader/b1-card-loader.component.ts ***!
  \*******************************************************************************/
/*! exports provided: B1CardLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B1CardLoaderComponent", function() { return B1CardLoaderComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component */ "9A8T");



class B1CardLoaderComponent {
    constructor() {
        this.isLoading = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
    }
    ngOnInit() {
    }
}
B1CardLoaderComponent.ɵfac = function B1CardLoaderComponent_Factory(t) { return new (t || B1CardLoaderComponent)(); };
B1CardLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: B1CardLoaderComponent, selectors: [["b1-card-loader"]], inputs: { isLoading: "isLoading" }, decls: 2, vars: 4, consts: [[1, "b1-page-hr"]], template: function B1CardLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "ngrxPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.isLoading));
    } }, pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["PushPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiMS1jYXJkLWxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "MR0u":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _actions_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/settings.actions */ "Mght");
/* harmony import */ var _selectors_app_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selectors/app.selectors */ "TP+B");
/* harmony import */ var _selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selectors/settings.selectors */ "sqfJ");
/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selectors/user.selectors */ "DtIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@shared/directives/b1-icon.directive */ "SYr6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












function SidebarComponent_div_0_ng_container_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bankDate_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, bankDate_r9, "dd.MM.yyyy"), " ");
} }
function SidebarComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_0_ng_container_14_span_1_Template, 3, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bankDate_r9 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bankDate_r9);
} }
function SidebarComponent_div_0_nav_15_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r15 = ctx.$implicit;
    const isCollapsed_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("tooltipClass", isCollapsed_r1 ? "" : "menu-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 5, menuItem_r15.dataTranslate))("routerLink", menuItem_r15.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r15.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, menuItem_r15.dataTranslate), " ");
} }
function SidebarComponent_div_0_nav_15_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r19.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, menuItem_r19.dataTranslate), " ");
} }
function SidebarComponent_div_0_nav_15_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_0_nav_15_ng_container_5_li_1_Template, 7, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subMenu_r17 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", subMenu_r17);
} }
function SidebarComponent_div_0_nav_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_div_0_nav_15_li_3_Template, 8, 9, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_div_0_nav_15_ng_container_5_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r12 = ctx.ngrxLet;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menu_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r3.subMenu$);
} }
function SidebarComponent_div_0_ng_container_17_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](phone_r23);
} }
function SidebarComponent_div_0_ng_container_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442-\u0446\u0435\u043D\u0442\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_div_0_ng_container_17_div_1_p_5_Template, 3, 1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const callCenterPhones_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", callCenterPhones_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 2, "aside.nav.FreeTarif"), " ");
} }
function SidebarComponent_div_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_0_ng_container_17_div_1_Template, 10, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const callCenterPhones_r20 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", callCenterPhones_r20 && callCenterPhones_r20.length);
} }
function SidebarComponent_div_0_ng_container_18_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](phone_r28);
} }
function SidebarComponent_div_0_ng_container_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_0_ng_container_18_div_1_p_1_Template, 3, 1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const callCenterPhonesLocal_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", callCenterPhonesLocal_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, "aside.nav.OperatorTarif"), " ");
} }
function SidebarComponent_div_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_0_ng_container_18_div_1_Template, 6, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const callCenterPhonesLocal_r25 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", callCenterPhonesLocal_r25 && callCenterPhonesLocal_r25.length);
} }
function SidebarComponent_div_0_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const callCenterWork_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, "shared.workDates"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", callCenterWork_r30.from, " - ", callCenterWork_r30.to, " ");
} }
function SidebarComponent_div_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_0_ng_container_19_div_1_Template, 6, 5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const callCenterWork_r30 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", callCenterWork_r30);
} }
function SidebarComponent_div_0_ng_container_20_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](phone_r36);
} }
function SidebarComponent_div_0_ng_container_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0415\u0426\u041F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_div_0_ng_container_20_div_1_p_5_Template, 3, 1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ecpSupportPhone_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ecpSupportPhone_r33);
} }
function SidebarComponent_div_0_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_div_0_ng_container_20_div_1_Template, 6, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ecpSupportPhone_r33 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ecpSupportPhone_r33 && ecpSupportPhone_r33.length);
} }
function SidebarComponent_div_0_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "aside.nav.collapse"));
} }
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "ngrxPush");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SidebarComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SidebarComponent_div_0_nav_15_Template, 6, 2, "nav", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SidebarComponent_div_0_ng_container_17_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SidebarComponent_div_0_ng_container_18_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SidebarComponent_div_0_ng_container_19_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SidebarComponent_div_0_ng_container_20_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_div_0_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r38.collapseToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SidebarComponent_div_0_span_23_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isCollapsed_r1 = ctx.ngrxLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("b1-collapsed", isCollapsed_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 11, ctx_r0.customerName$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 13, "aside.nav.bankDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r0.bankDate$);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r0.menu$);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r0.callCenterPhones$);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r0.callCenterPhonesLocal$);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r0.callCenterWork$);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx_r0.ecpSupportPhone$);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !isCollapsed_r1);
} }
class SidebarComponent {
    constructor(store) {
        this.store = store;
        this.menu$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["menuSelector"]);
        this.subMenu$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["subMenuSelector"]);
        this.customerName$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["currentCustomerNameSelector"]);
        this.bankDate$ = this.store.select(_selectors_app_selectors__WEBPACK_IMPORTED_MODULE_1__["bankDateSelector"]);
        this.callCenterPhones$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["callCenterPhonesSelector"]);
        this.callCenterPhonesLocal$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["callCenterPhonesLocalSelector"]);
        this.callCenterWork$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["callCenterWorkSelector"]);
        this.ecpSupportPhone$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["ecpSupportPhonesSelector"]);
        this.isCollapsed$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_2__["isCollapsedSelector"]);
    }
    ngOnInit() {
    }
    collapseToggle() {
        this.store.dispatch(Object(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleCollapsed"])());
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 1, vars: 1, consts: [["class", "app-aside", 4, "ngrxLet"], [1, "app-aside"], [1, "main-sidemenu"], [1, "main-sidemenu__wrapper"], ["id", "aside-user"], [1, "main-sidemenu__head"], [1, "client"], [1, "client__button"], [1, "bdate", "b1-small"], [4, "ngrxLet"], [1, "main-sidemenu__contact"], [1, "main-sidemenu__collapse"], ["ga-track-event", "['left-menu','collapse']", 1, "main-sidemenu__collapse-button", 3, "click"], ["class", "b1-mr-2", 4, "ngIf"], ["b1-icon", "", "icon", "arrows"], ["class", "b1-bold", 4, "ngIf"], [1, "b1-bold"], [1, "main-sidemenu__nav"], ["class", "main-sidemenu__nav__item", "placement", "right", "container", "body", "routerLinkActive", "active", 3, "ngbTooltip", "tooltipClass", "routerLink", 4, "ngFor", "ngForOf"], [1, "b1-separator"], ["placement", "right", "container", "body", "routerLinkActive", "active", 1, "main-sidemenu__nav__item", 3, "ngbTooltip", "tooltipClass", "routerLink"], [1, "main-sidemenu__nav__item__link"], [1, "main-sidemenu__nav__item__link__icon"], ["b1-icon", "", 3, "icon"], [1, "main-sidemenu__nav__item__link__text"], ["class", "main-sidemenu__nav__item", 4, "ngFor", "ngForOf"], [1, "main-sidemenu__nav__item"], [4, "ngIf"], ["b1-icon", "", "icon", "phone", 1, "b1-color-primary"], ["data-translate", "aside.nav.CallCenterPhone", 1, "b1-color-primary", "b1-base", "b1-bold", 2, "margin-left", "4px"], [4, "ngFor", "ngForOf"], [1, "b1-micro", "b1-opacity-60"], [1, "b1-medium"], [1, "b1-flex", "b1-align-center"], ["b1-icon", "", "icon", "cog", 1, "b1-color-warning"], ["data-translate", "aside.nav.ECPTechSupport", 1, "b1-color-warning", "b1-base", "b1-ml-2"], [1, "b1-mr-2"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 25, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngrxLet", ctx.isCollapsed$);
    } }, directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_6__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_8__["B1IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], pipes: [_ngrx_component__WEBPACK_IMPORTED_MODULE_6__["PushPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n@media (max-width: 812px) {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n.main-sidemenu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  width: 240px;\n  overflow: hidden;\n  background-color: #0d233b;\n  color: #fff;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.main-sidemenu__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 257px;\n  height: 100%;\n  padding-bottom: 56px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__wrapper[_ngcontent-%COMP%] {\n  width: 97px;\n}\n.main-sidemenu__head[_ngcontent-%COMP%] {\n  background-color: #0d233b;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  min-height: 104px;\n}\n.main-sidemenu__head[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.main-sidemenu__head[_ngcontent-%COMP%]   .client__button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-family: \"Futura PT Demi\", sans-serif;\n  display: inline-block;\n  width: 100%;\n  padding: 12px 16px;\n  margin: 0 0 16px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  border-radius: 4px;\n  position: relative;\n  z-index: 9;\n  transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n  border: none;\n}\n.main-sidemenu__head[_ngcontent-%COMP%]   .client__dropdown[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n.main-sidemenu__head[_ngcontent-%COMP%]   .client__dropdown[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-bottom: 12px solid var(--color-light);\n}\n.main-sidemenu__head[_ngcontent-%COMP%]   .client__dropdown__item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px;\n}\n.main-sidemenu__head[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]:hover    > .b1-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-sidemenu__head[_ngcontent-%COMP%]   .bdate[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__head[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-sidemenu__nav[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.main-sidemenu__nav__item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-sidemenu__nav__item[_ngcontent-%COMP%]::after {\n  background-color: rgba(0, 135, 158, 0.1);\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 0;\n  left: -100%;\n  top: 0;\n  transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n  padding: 16px;\n  margin-left: 16px;\n  border-radius: 8px;\n}\n.main-sidemenu__nav__item.active[_ngcontent-%COMP%]::after, .main-sidemenu__nav__item[_ngcontent-%COMP%]:hover::after {\n  width: calc(100% - 32px);\n  left: 0px;\n}\n.main-sidemenu__nav__item.active[_ngcontent-%COMP%]::after {\n  background-color: #00879e;\n}\n.main-sidemenu__nav__item__link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  position: relative;\n  opacity: 0.8;\n  padding: 8px 16px !important;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  z-index: 9;\n  margin-left: 8px;\n}\n.main-sidemenu__nav__item__link__icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 24px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  text-align: center;\n  color: #fff;\n  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.main-sidemenu__nav__item__link__icon_opt[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.main-sidemenu__nav__item__link__text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.main-sidemenu__nav__item[_ngcontent-%COMP%]:hover   .main-sidemenu__nav__item__link[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.main-sidemenu__nav__item[_ngcontent-%COMP%]:hover   .main-sidemenu__nav__item__link__icon[_ngcontent-%COMP%] {\n  transform: translateY(2px);\n}\n.main-sidemenu__nav__item.active[_ngcontent-%COMP%]   .main-sidemenu__nav__item__link[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #fff;\n}\n.main-sidemenu__nav__item.active[_ngcontent-%COMP%]   .main-sidemenu__nav__item__link__icon[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.main-sidemenu__nav__item_opt[_ngcontent-%COMP%]::after {\n  background-color: rgba(0, 135, 158, 0.1);\n}\n.main-sidemenu__nav__item_opt.active[_ngcontent-%COMP%]::after {\n  background-color: #00879e;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__nav__item[_ngcontent-%COMP%]::after {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__nav__item__link[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n  position: relative;\n  padding: 0 !important;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__nav__item__link[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__nav__item__link[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__nav__item__link__icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 60px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 4px;\n  color: #00879e;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__nav__item__link__text[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-sidemenu__contact[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.main-sidemenu__contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__contact[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-sidemenu__collapse[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n  z-index: 500;\n}\n.main-sidemenu__collapse-button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  font-family: \"Futura PT Demi\", sans-serif;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n  height: 40px;\n  border-radius: 4px;\n  background-color: #263a50;\n}\n.main-sidemenu__collapse-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.main-sidemenu.b1-collapsed[_ngcontent-%COMP%]   .main-sidemenu__collapse[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzLm9zY2hhZFxcc2Nzc1xcX3R5cG9ncmFwaHkuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHMub3NjaGFkXFxzY3NzXFxtaXhpbnNcXF9tYWluLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0cy5vc2NoYWRcXHNjc3NcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SUU7RUFqSEEsZUFKa0I7RUFLbEIseUNBQUE7RUFDQSxjQUx5QjtBQ2YzQjtBRHNCRTtFQTZHQTtJQTVHRSxlQVhlO0lBWWYsaUJBWHNCO0VDUnhCO0FBQ0Y7QURxQkU7RUF3R0E7SUF2R0UsZUFsQmU7SUFtQmYsaUJBbEJzQjtFQ0F4QjtBQUNGO0FEMkhFO0VBckdBLGVBdEJpQjtFQXVCakIseUNBQUE7RUFDQSxpQkF2QndCO0FDSTFCO0FEcUJFO0VBaUdBO0lBaEdFLGVBN0JlO0lBOEJmLGlCQTdCc0I7RUNXeEI7QUFDRjtBRG9CRTtFQTRGQTtJQTNGRSxlQXBDZTtJQXFDZixpQkFwQ3NCO0VDbUJ4QjtBQUNGO0FEOEdFO0VBekZBLGVBeENpQjtFQXlDakIseUNBQUE7RUFDQSxpQkF6Q3dCO0FDdUIxQjtBRG9CRTtFQXFGQTtJQXBGRSxlQS9DZTtJQWdEZixpQkEvQ3NCO0VDOEJ4QjtBQUNGO0FEbUJFO0VBZ0ZBO0lBL0VFLGVBdERjO0lBdURkLGlCQXREcUI7RUNzQ3ZCO0FBQ0Y7QURpR0U7RUE3RUEsZUExRGlCO0VBMkRqQix5Q0FBQTtFQUNBLGlCQTNEd0I7QUMwQzFCO0FEbUJFO0VBeUVBO0lBeEVFLGVBakVjO0lBa0VkLGlCQWpFcUI7RUNpRHZCO0FBQ0Y7QURrQkU7RUFvRUE7SUFuRUUsZUF0RWM7SUF1RWQsaUJBdEVxQjtFQ3VEdkI7QUFDRjtBRG9GRTtFQWpFQSxlQTVFZ0I7RUE2RWhCLHlDQUFBO0VBQ0EsaUJBN0V1QjtBQzZEekI7QURrQkU7RUE2REE7SUE1REUsZUFuRmU7SUFvRmYsaUJBbkZzQjtFQ29FeEI7QUFDRjtBRGlCRTtFQXdEQTtJQXZERSxlQXhGZTtJQXlGZixpQkF4RnNCO0VDMEV4QjtBQUNGO0FEdUVFO0VBckRBLGVBOUZpQjtFQStGakIseUNBQUE7RUFDQSxpQkEvRndCO0FDZ0YxQjtBRHNFRTtFQW5EQSxlQXRHZTtFQXVHZix5Q0FBQTtFQUNBLGdCQXZHc0I7QUN1RnhCO0FEcUVFO0VBakRBLGVBOUdnQjtFQStHaEIseUNBQUE7RUFDQSxpQkEvR3VCO0FDOEZ6QjtBRG9FRTtFQS9DQSxlQXRIZ0I7RUF1SGhCLHlDQUFBO0VBQ0EsY0F2SHVCO0VBd0h2Qix5QkFBQTtBQ2xCRjtBRGtFRTtFQTVDQSx5Q0FBQTtBQ25CRjtBRG1FRTtFQTVDQSx5Q0FBQTtBQ3BCRjtBRHdCRTtFQWpIQSxlQUprQjtFQUtsQix5Q0FBQTtFQUNBLGNBTHlCO0FDa0czQjtBRDNGRTtFQTZHQTtJQTVHRSxlQVhlO0lBWWYsaUJBWHNCO0VDeUd4QjtBQUNGO0FENUZFO0VBd0dBO0lBdkdFLGVBbEJlO0lBbUJmLGlCQWxCc0I7RUNpSHhCO0FBQ0Y7QURVRTtFQXJHQSxlQXRCaUI7RUF1QmpCLHlDQUFBO0VBQ0EsaUJBdkJ3QjtBQ3FIMUI7QUQ1RkU7RUFpR0E7SUFoR0UsZUE3QmU7SUE4QmYsaUJBN0JzQjtFQzRIeEI7QUFDRjtBRDdGRTtFQTRGQTtJQTNGRSxlQXBDZTtJQXFDZixpQkFwQ3NCO0VDb0l4QjtBQUNGO0FESEU7RUF6RkEsZUF4Q2lCO0VBeUNqQix5Q0FBQTtFQUNBLGlCQXpDd0I7QUN3STFCO0FEN0ZFO0VBcUZBO0lBcEZFLGVBL0NlO0lBZ0RmLGlCQS9Dc0I7RUMrSXhCO0FBQ0Y7QUQ5RkU7RUFnRkE7SUEvRUUsZUF0RGM7SUF1RGQsaUJBdERxQjtFQ3VKdkI7QUFDRjtBRGhCRTtFQTdFQSxlQTFEaUI7RUEyRGpCLHlDQUFBO0VBQ0EsaUJBM0R3QjtBQzJKMUI7QUQ5RkU7RUF5RUE7SUF4RUUsZUFqRWM7SUFrRWQsaUJBakVxQjtFQ2tLdkI7QUFDRjtBRC9GRTtFQW9FQTtJQW5FRSxlQXRFYztJQXVFZCxpQkF0RXFCO0VDd0t2QjtBQUNGO0FEN0JFO0VBakVBLGVBNUVnQjtFQTZFaEIseUNBQUE7RUFDQSxpQkE3RXVCO0FDOEt6QjtBRC9GRTtFQTZEQTtJQTVERSxlQW5GZTtJQW9GZixpQkFuRnNCO0VDcUx4QjtBQUNGO0FEaEdFO0VBd0RBO0lBdkRFLGVBeEZlO0lBeUZmLGlCQXhGc0I7RUMyTHhCO0FBQ0Y7QUQxQ0U7RUFyREEsZUE5RmlCO0VBK0ZqQix5Q0FBQTtFQUNBLGlCQS9Gd0I7QUNpTTFCO0FEM0NFO0VBbkRBLGVBdEdlO0VBdUdmLHlDQUFBO0VBQ0EsZ0JBdkdzQjtBQ3dNeEI7QUQ1Q0U7RUFqREEsZUE5R2dCO0VBK0doQix5Q0FBQTtFQUNBLGlCQS9HdUI7QUMrTXpCO0FEN0NFO0VBL0NBLGVBdEhnQjtFQXVIaEIseUNBQUE7RUFDQSxjQXZIdUI7RUF3SHZCLHlCQUFBO0FDK0ZGO0FEL0NFO0VBNUNBLHlDQUFBO0FDOEZGO0FEOUNFO0VBNUNBLHlDQUFBO0FDNkZGO0FBOU5JO0VBREo7SUFFUSxhQUFBO0VBa09OO0FBQ0Y7QUEvTkk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUNMTix5QkNTZTtFRFJmLFdBQUE7QUR3T0Y7QUFqT1E7RUFDSSxXQUFBO0FBbU9aO0FBaE9RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWtPWjtBQS9OUTtFQUNJLFdBQUE7QUFpT1o7QUE5TlE7RUNwQk4seUJDSWU7RURIZixXQ0xZO0VGMEJGLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFpT1o7QUEvTlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFpT2hCO0FBL05nQjtFRHFFZCxlQTlHZ0I7RUErR2hCLHlDQUFBO0VBQ0EsaUJBL0d1QjtFRVl2QiwwQ0FBQTtFQUNBLFdDVlk7RUh1SFoseUNBQUE7RUM5RWtCLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0FBb09wQjtBQWpPZ0I7RUFDSSxXQUFBO0FBbU9wQjtBQWpPb0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUFtT3hCO0FBaE9vQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQWtPeEI7QUE5TmdCO0VBQ0ksYUFBQTtBQWdPcEI7QUE1Tlk7RUFDSSxZQUFBO0FBOE5oQjtBQTFOUTtFQUNJLGFBQUE7QUE0Tlo7QUF6TlE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBMk5aO0FBek5ZO0VBQ0ksa0JBQUE7QUEyTmhCO0FDMVNFO0VBQ0Usd0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EseURBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDRTSjtBQ3pTRTtFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBRDBTSjtBQ3ZTRTtFQUNFLHlCQ1hZO0FGb1RoQjtBQ3RTRTtFRjBEQSxlQXRHZTtFQXVHZix5Q0FBQTtFQUNBLGdCQXZHc0I7RUU2Q3BCLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUQwU0o7QUN6U0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQzdEUTtFRDhEUiw4R0FBQTtBRDJTTjtBQ3pTTTtFQUNFLFdDakVNO0FGNFdkO0FDdlNJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FEeVNOO0FDclNFO0VBQ0UsVUFBQTtBRHVTSjtBQ3JTSTtFQUNFLDBCQUFBO0FEdVNOO0FDblNFO0VBQ0UsVUFBQTtFQUNBLFdDdEZVO0FGMlhkO0FDblNJO0VBQ0Usc0JBQUE7QURxU047QUNoU0k7RUFDRSx3Q0FBQTtBRGtTTjtBQy9SSTtFQUNFLHlCQzdEVztBRjhWakI7QUE1UmdCO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBOFJwQjtBQTVSZ0I7RUQvQmQsZUE1RWdCO0VBNkVoQix5Q0FBQTtFQUNBLGlCQTdFdUI7RUM0R0wsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBZ1NwQjtBRG5VRTtFQzJCYztJRDFCWixlQW5GZTtJQW9GZixpQkFuRnNCO0VDeVp4QjtBQUNGO0FEcFVFO0VDc0JjO0lEckJaLGVBeEZlO0lBeUZmLGlCQXhGc0I7RUMrWnhCO0FBQ0Y7QUEzU29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNFbEdSO0FGK1loQjtBQTFTb0I7RUFDSSxhQUFBO0FBNFN4QjtBQXRTUTtFQUNJLGFBQUE7QUF3U1o7QUF0U1k7RUFDSSxrQkFBQTtBQXdTaEI7QUFwU1E7RUFDSSxhQUFBO0FBc1NaO0FBblNRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQXFTWjtBQWxTUTtFRDFETixlQXRHZTtFQXVHZix5Q0FBQTtFQUNBLGdCQXZHc0I7RUF3SHRCLHlDQUFBO0VDMENVLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUMxSlYseUJDTGU7QUZzY2pCO0FBcFNZO0VBQ0ksVUFBQTtBQXNTaEI7QUFsU1E7RUFDSSxZQUFBO0FBb1NaIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZS11bml0OiAxNjtcclxuXHJcbiRmb250LW1pY3JvLXNpemU6IDEycHg7XHJcbiRmb250LW1pY3JvLWxpbmUtaGVpZ2h0OiAxO1xyXG4kZm9udC1zbWFsbC1zaXplOiAxNHB4O1xyXG4kZm9udC1zbWFsbC1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtYmFzZS1zaXplOiAxNnB4O1xyXG4kZm9udC1iYXNlLWxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRmb250LW1lZGl1bS1zaXplOiAxOHB4O1xyXG4kZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiRmb250LWxhcmdlLXNpemU6IDI0cHg7XHJcbiRmb250LWxhcmdlLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTMtc2l6ZTogMjhweDtcclxuJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTItc2l6ZTogMzZweDtcclxuJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTEtc2l6ZTogNDhweDtcclxuJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC1kaXNwbGF5LXNpemU6IDY0cHg7XHJcbiRmb250LWRpc3BsYXktbGluZS1oZWlnaHQ6IDE7XHJcblxyXG5AbWl4aW4gZGlzcGxheSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1kaXNwbGF5LXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtZGlzcGxheS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUxLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMi1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMi1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTEge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUxLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUzLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRpdGxlMiB7XHJcbiAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMy1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMy1saW5lLWhlaWdodDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRpdGxlMyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC10aXRsZTMtc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTMtbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LWxhcmdlLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbGFyZ2UtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1tZWRpdW0tc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1tZWRpdW0tc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBiYXNlIHtcclxuICBmb250LXNpemU6ICRmb250LWJhc2Utc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1iYXNlLWxpbmUtaGVpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc21hbGwtc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1zbWFsbC1saW5lLWhlaWdodDtcclxufVxyXG5cclxuQG1peGluIG1pY3JvIHtcclxuICBmb250LXNpemU6ICRmb250LW1pY3JvLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtbWljcm8tbGluZS1oZWlnaHQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuQG1peGluIGJvbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBsaWdodCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmIxIHtcclxuICAmLWRpc3BsYXkge1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheTtcclxuICB9XHJcblxyXG4gICYtdGl0bGUxIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMTtcclxuICB9XHJcblxyXG4gICYtdGl0bGUyIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMjtcclxuICB9XHJcblxyXG4gICYtdGl0bGUzIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMztcclxuICB9XHJcblxyXG4gICYtbGFyZ2Uge1xyXG4gICAgQGluY2x1ZGUgbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAmLW1lZGl1bSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW07XHJcbiAgfVxyXG5cclxuICAmLWJhc2Uge1xyXG4gICAgQGluY2x1ZGUgYmFzZTtcclxuICB9XHJcblxyXG4gICYtc21hbGwge1xyXG4gICAgQGluY2x1ZGUgc21hbGw7XHJcbiAgfVxyXG5cclxuICAmLW1pY3JvIHtcclxuICAgIEBpbmNsdWRlIG1pY3JvO1xyXG4gIH1cclxuXHJcbiAgJi1ib2xkIHtcclxuICAgIEBpbmNsdWRlIGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmLWxpZ2h0IHtcclxuICAgIEBpbmNsdWRlIGxpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuJGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiIsIi5iMS1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLW1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5iMS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtbWljcm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmIxLWJvbGQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xufVxuLmIxLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmIxLWRpc3BsYXkge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTEge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMyB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbWVkaXVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5iMS1iYXNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmIxLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5iMS1taWNybyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYjEtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG59XG4uYjEtbGlnaHQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm1haW4tc2lkZW1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTZweDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMjQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDIzM2I7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1haW4tc2lkZW1lbnUuYjEtY29sbGFwc2VkIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4ubWFpbi1zaWRlbWVudV9fd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1N3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5tYWluLXNpZGVtZW51LmIxLWNvbGxhcHNlZCAubWFpbi1zaWRlbWVudV9fd3JhcHBlciB7XG4gIHdpZHRoOiA5N3B4O1xufVxuLm1haW4tc2lkZW1lbnVfX2hlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQyMzNiO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtaW4taGVpZ2h0OiAxMDRweDtcbn1cbi5tYWluLXNpZGVtZW51X19oZWFkIC5jbGllbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4tc2lkZW1lbnVfX2hlYWQgLmNsaWVudF9fYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBtYXJnaW46IDAgMCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW4tc2lkZW1lbnVfX2hlYWQgLmNsaWVudF9fZHJvcGRvd24ge1xuICB6LWluZGV4OiA5OTtcbn1cbi5tYWluLXNpZGVtZW51X19oZWFkIC5jbGllbnRfX2Ryb3Bkb3duOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEycHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0KTtcbn1cbi5tYWluLXNpZGVtZW51X19oZWFkIC5jbGllbnRfX2Ryb3Bkb3duX19pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG59XG4ubWFpbi1zaWRlbWVudV9faGVhZCAuY2xpZW50OmhvdmVyID4gLmIxLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLXNpZGVtZW51X19oZWFkIC5iZGF0ZSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5tYWluLXNpZGVtZW51LmIxLWNvbGxhcHNlZCAubWFpbi1zaWRlbWVudV9faGVhZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4tc2lkZW1lbnVfX25hdl9faXRlbTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNSwgMTU4LCAwLjEpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIGxlZnQ6IC0xMDAlO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW0uYWN0aXZlOjphZnRlciwgLm1haW4tc2lkZW1lbnVfX25hdl9faXRlbTpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gIGxlZnQ6IDBweDtcbn1cbi5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW0uYWN0aXZlOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg3OWU7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtX19saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDAuODtcbiAgcGFkZGluZzogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW1fX2xpbmtfX2ljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cbi5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW1fX2xpbmtfX2ljb25fb3B0IHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtX19saW5rX190ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtOmhvdmVyIC5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW1fX2xpbmsge1xuICBvcGFjaXR5OiAxO1xufVxuLm1haW4tc2lkZW1lbnVfX25hdl9faXRlbTpob3ZlciAubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtX19saW5rX19pY29uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtLmFjdGl2ZSAubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtX19saW5rIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtLmFjdGl2ZSAubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtX19saW5rX19pY29uIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW1fb3B0OjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM1LCAxNTgsIDAuMSk7XG59XG4ubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtX29wdC5hY3RpdmU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODc5ZTtcbn1cbi5tYWluLXNpZGVtZW51LmIxLWNvbGxhcHNlZCAubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWFpbi1zaWRlbWVudS5iMS1jb2xsYXBzZWQgLm1haW4tc2lkZW1lbnVfX25hdl9faXRlbV9fbGluayB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWFpbi1zaWRlbWVudS5iMS1jb2xsYXBzZWQgLm1haW4tc2lkZW1lbnVfX25hdl9faXRlbV9fbGluayB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1haW4tc2lkZW1lbnUuYjEtY29sbGFwc2VkIC5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW1fX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLm1haW4tc2lkZW1lbnUuYjEtY29sbGFwc2VkIC5tYWluLXNpZGVtZW51X19uYXZfX2l0ZW1fX2xpbmtfX2ljb24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzAwODc5ZTtcbn1cbi5tYWluLXNpZGVtZW51LmIxLWNvbGxhcHNlZCAubWFpbi1zaWRlbWVudV9fbmF2X19pdGVtX19saW5rX190ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tYWluLXNpZGVtZW51X19jb250YWN0IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluLXNpZGVtZW51X19jb250YWN0IHAge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubWFpbi1zaWRlbWVudS5iMS1jb2xsYXBzZWQgLm1haW4tc2lkZW1lbnVfX2NvbnRhY3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1haW4tc2lkZW1lbnVfX2NvbGxhcHNlIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDUwMDtcbn1cbi5tYWluLXNpZGVtZW51X19jb2xsYXBzZS1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjNhNTA7XG59XG4ubWFpbi1zaWRlbWVudV9fY29sbGFwc2UtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5tYWluLXNpZGVtZW51LmIxLWNvbGxhcHNlZCAubWFpbi1zaWRlbWVudV9fY29sbGFwc2Uge1xuICBwYWRkaW5nOiA4cHg7XG59IiwiQGltcG9ydCBcIi4uL2NvbG9yc1wiO1xyXG5cclxuQG1peGluIG5hdmJhciB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHNpZGVtZW51IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyay0xMDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodDtcclxufVxyXG5cclxuQG1peGluIHNpZGVtZW51LWhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrLTEwMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gY2xpZW50LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItbGlnaHQsIDAuMSk7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodDtcclxufVxyXG5cclxuQG1peGluIGNvbGxhcHNlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstMjAwO1xyXG59XHJcblxyXG5AbWl4aW4gc2lkZW1lbnUtbmF2LWl0ZW0ge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMSk7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyAkYW5pbWF0aW9uLXRpbWluZztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gICYuYWN0aXZlOjphZnRlcixcclxuICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgfVxyXG5cclxuICAmX19saW5rIHtcclxuICAgIEBpbmNsdWRlIGJhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0O1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAkYW5pbWF0aW9uLXRpbWluZywgY29sb3IgMC4zcyAkYW5pbWF0aW9uLXRpbWluZztcclxuXHJcbiAgICAgICZfb3B0IHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAmX19saW5rIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUgJl9fbGluayB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodDtcclxuXHJcbiAgICAmX19pY29uIHtcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9vcHQge1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci10ZXJ0aWFyeSwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGVydGlhcnk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VsZWN0ZWQtcm93IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAkbGluZWFyLWdyYWRpZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XHJcbn1cclxuQG1peGluIGhvdmVyLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogJGxpbmVhci1ncmFkaWVudC1saWdodDtcclxufVxyXG5AbWl4aW4gZGF0YS1yb3cge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAwIDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcclxuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsICRwZXJjZW50YWdlKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcclxuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50YWdlKTtcclxufVxyXG5cclxuJGNvbG9yLWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItbGlnaHQtMTAwOiAjZjJmMmYyO1xyXG4kY29sb3ItbGlnaHQtMjAwOiAjZWVlO1xyXG4kY29sb3ItbGlnaHQtMzAwOiAjZGRkO1xyXG4kY29sb3ItbGlnaHQtNDAwOiAjY2NjO1xyXG4kY29sb3ItbGlnaHQtNTAwOiAjOTk5O1xyXG5cclxuJGNvbG9yLWRhcms6ICMwMDE3MzE7XHJcbiRjb2xvci1kYXJrLTEwMDogdGludCgkY29sb3ItZGFyaywgNSUpO1xyXG4kY29sb3ItZGFyay0yMDA6IHRpbnQoJGNvbG9yLWRhcmssIDE1JSk7XHJcbiRjb2xvci1kYXJrLTMwMDogdGludCgkY29sb3ItZGFyaywgMjUlKTtcclxuJGNvbG9yLWRhcmstNDAwOiB0aW50KCRjb2xvci1kYXJrLCAyNSUpO1xyXG4kY29sb3ItZGFyay01MDA6IHRpbnQoJGNvbG9yLWRhcmssIDMwJSk7XHJcblxyXG4kY29sb3ItbGlnaHQtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4kY29sb3ItbGlnaHQtMTAwLXJnYjogMjQyLCAyNDIsIDI0MjtcclxuJGNvbG9yLWxpZ2h0LTIwMC1yZ2I6IDIzNywgMjM3LCAyMzc7XHJcbiRjb2xvci1saWdodC0zMDAtcmdiOiAyMjEsIDIyMSwgMjIxO1xyXG4kY29sb3ItbGlnaHQtNDAwLXJnYjogMjA0LCAyMDQsIDIwNDtcclxuJGNvbG9yLWxpZ2h0LTUwMC1yZ2I6IDE1MywgMTUzLCAxNTM7XHJcblxyXG4kY29sb3ItZGFyay1yZ2I6IDAsIDIzLCA0OTtcclxuJGNvbG9yLWRhcmstMTAwLXJnYjogMTMsIDM1LCA1OTtcclxuJGNvbG9yLWRhcmstMjAwLXJnYjogMjYsIDQ2LCA3MDtcclxuJGNvbG9yLWRhcmstMzAwLXJnYjogMzgsIDU4LCA4MDtcclxuJGNvbG9yLWRhcmstNDAwLXJnYjogNTEsIDY5LCA5MDtcclxuJGNvbG9yLWRhcmstNTAwLXJnYjogNjQsIDgxLCAxMDE7XHJcblxyXG4kY29sb3ItcHJpbWFyeTogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXByaW1hcnktMTAwOiB0aW50KCRjb2xvci1wcmltYXJ5LCA1JSk7XHJcbiRjb2xvci1wcmltYXJ5LTIwMDogdGludCgkY29sb3ItcHJpbWFyeSwgMTAlKTtcclxuJGNvbG9yLXByaW1hcnktMzAwOiB0aW50KCRjb2xvci1wcmltYXJ5LCAyNSUpO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXNlY29uZGFyeS0xMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgNSUpO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTIwMDogdGludCgkY29sb3Itc2Vjb25kYXJ5LCAxMCUpO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTMwMDogdGludCgkY29sb3Itc2Vjb25kYXJ5LCAyNSUpO1xyXG5cclxuJGNvbG9yLXRlcnRpYXJ5OiByZ2IoMCwgMTM1LCAxNTgpO1xyXG4kY29sb3ItdGVydGlhcnktMTAwOiB0aW50KCRjb2xvci10ZXJ0aWFyeSwgNSUpO1xyXG4kY29sb3ItdGVydGlhcnktMjAwOiB0aW50KCRjb2xvci10ZXJ0aWFyeSwgMTAlKTtcclxuJGNvbG9yLXRlcnRpYXJ5LTMwMDogdGludCgkY29sb3ItdGVydGlhcnksIDI1JSk7XHJcblxyXG4kY29sb3ItZXJyb3I6IGhzbCgwLCAxMDAlLCA1NiUpO1xyXG4kY29sb3ItaW5mbzogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXN1Y2Nlc3M6IGhzbCgxNTAsIDEwMCUsIDMxJSk7XHJcbiRjb2xvci13YXJuaW5nOiBoc2woNjIsIDkwJSwgNDQlKTtcclxuXHJcbiRjb2xvci1lcnJvci1kdDogaHNsKDAsIDkwJSwgNjElKTtcclxuJGNvbG9yLWluZm8tZHQ6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zdWNjZXNzLWR0OiBoc2woMTUwLCA5MCUsIDQxJSk7XHJcbiRjb2xvci13YXJuaW5nLWR0OiBoc2woNjIsIDgwJSwgNDklKTtcclxuXHJcbi8vICEgREVQUkVDQVRFRFxyXG5cclxuJGhlYWRpbmctZm9udDogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuJGNvbG9yLWxvYWRlci0xMDA6ICMzNDk4ZGI7XHJcbiRjb2xvci1sb2FkZXItMjAwOiAjZTc0YzNjO1xyXG4kY29sb3ItbG9hZGVyLTMwMDogI2Y5YzkyMjtcclxuXHJcbiRjb2xvci1zaWRlYmFyLTEwMDogIzZjYzE5NTtcclxuXHJcbiRjb2xvci1hbHBoYS0xMDA6ICNmZmY7XHJcbiRjb2xvci1hbHBoYS0yMDA6ICNmNGY0ZjQ7XHJcbiRjb2xvci1hbHBoYS0zMDA6ICNlZWU7XHJcbiRjb2xvci1hbHBoYS00MDA6ICNkZGQ7XHJcbiRjb2xvci1hbHBoYS01MDA6ICNjY2M7XHJcbiRjb2xvci1hbHBoYS02MDA6ICNiYmI7XHJcbiRjb2xvci1hbHBoYS03MDA6ICNhYWE7XHJcblxyXG4kY29sb3ItYmV0YS0xMDA6ICM4Y2E5ZGQ7XHJcbiRjb2xvci1iZXRhLTIwMDogIzhkYWFkZTtcclxuJGNvbG9yLWJldGEtMzAwOiAjYThjYmViO1xyXG4kY29sb3ItYmV0YS00MDA6ICM2NmFmZTk7XHJcbiRjb2xvci1iZXRhLTUwMDogIzdmYjZkNjtcclxuJGNvbG9yLWJldGEtNjAwOiAjNzI5NmRhO1xyXG4kY29sb3ItYmV0YS03MDA6ICM2NThhY2Y7XHJcbiRjb2xvci1iZXRhLTgwMDogIzNkNjliYTtcclxuJGNvbG9yLWJldGEtOTAwOiAjMDA3Mjk5O1xyXG4kY29sb3ItYmV0YS0xMjAwOiAjN2ZiNmQ2O1xyXG4kY29sb3ItYmV0YS0xMzAwOiAjM2EzZjUxO1xyXG4kY29sb3ItYmV0YS0xNDAwOiAjODljOGViO1xyXG4kY29sb3ItYmV0YS0xNTAwOiAjNzE5NmRhO1xyXG4kY29sb3ItYmV0YS0xNjAwOiAjNzc5NGQ4O1xyXG4kY29sb3ItYmV0YS0xNzAwOiAjNWY3ZmM5O1xyXG4kY29sb3ItYmV0YS0xODAwOiAjNjRiM2Q1O1xyXG4kY29sb3ItYmV0YS0xOTAwOiAjMzNhNmNjO1xyXG4kY29sb3ItYmV0YS0yMDAwOiAjNjhiNGQ2O1xyXG4kY29sb3ItYmV0YS0yMTAwOiAjNmZhYmNjO1xyXG4kY29sb3ItYmV0YS0yMjAwOiAjMDBiMWU1O1xyXG4kY29sb3ItYmV0YS0yMzAwOiAjNTdiMGUyO1xyXG4kY29sb3ItYmV0YS0yNDAwOiAjNmRiZGRlO1xyXG4kY29sb3ItYmV0YS0yNTAwOiAjOTJjMWU5O1xyXG4kY29sb3ItYmV0YS0yNjAwOiAjMjNiN2U1O1xyXG5cclxuJGNvbG9yLWJldGEtbXV0ZWQtMTAwOiAjMzQ3Mjk0O1xyXG4kY29sb3ItYmV0YS1tdXRlZC0yMDA6ICNiYTljYzU7XHJcbiRjb2xvci1iZXRhLW11dGVkLTMwMDogI2M4YjFkMDtcclxuJGNvbG9yLWJldGEtbXV0ZWQtNDAwOiAjYTI3OWIxO1xyXG4kY29sb3ItYmV0YS1tdXRlZC02MDA6ICM1ZTcxOTA7XHJcbiRjb2xvci1iZXRhLW11dGVkLTcwMDogIzU4NjY2ZTtcclxuJGNvbG9yLWJldGEtbXV0ZWQtODAwOiAjNjA0NDZiO1xyXG4kY29sb3ItYmV0YS1tdXRlZC05MDA6ICM5ZDZhYWY7XHJcbiRjb2xvci1iZXRhLW11dGVkLTEwMDA6ICNhMDc4YWY7XHJcblxyXG4kY29sb3ItcHN5LTEwMDogIzhjZGFiMjtcclxuJGNvbG9yLXBzeS0yMDA6ICM2Y2MwOTQ7XHJcbiRjb2xvci1wc3ktMzAwOiAjNmJiYmFlO1xyXG4kY29sb3ItcHN5LTQwMDogIzVmOWVhMDtcclxuJGNvbG9yLXBzeS01MDA6ICM2Y2MwOTQ7XHJcbiRjb2xvci1wc3ktNjAwOiAjNmNjMTk1O1xyXG4kY29sb3ItcHN5LTcwMDogIzZjYmQ4MztcclxuJGNvbG9yLXBzeS04MDA6ICMyN2FlNjA7XHJcbiRjb2xvci1wc3ktOTAwOiAjM2ViODc5O1xyXG4kY29sb3ItcHN5LTEwMDA6ICM1Y2EwN2Q7XHJcbiRjb2xvci1wc3ktMTIwMDogIzAwNTAzYztcclxuJGNvbG9yLXBzeS0xMzAwOiAjYjRiMmI1O1xyXG4kY29sb3ItcHN5LTE0MDA6ICM3MTZjNmM7XHJcbiRjb2xvci1wc3ktMTUwMDogIzYxYWQ4NjtcclxuJGNvbG9yLXBzeS0xNjAwOiAjMDA1MDRlO1xyXG4kY29sb3ItcHN5LTE3MDA6ICMyN2MyNGM7XHJcblxyXG4kY29sb3ItZ2FtbWEtMTAwOiAjZjU4NjhhO1xyXG4kY29sb3ItZ2FtbWEtMjAwOiAjZmM2YTcwO1xyXG4kY29sb3ItZ2FtbWEtMzAwOiAjZmY1ODVkO1xyXG4kY29sb3ItZ2FtbWEtNjAwOiAjZWQ0YjUyO1xyXG4kY29sb3ItZ2FtbWEtNzAwOiAjZmFiZmMxO1xyXG4kY29sb3ItZ2FtbWEtODAwOiAjZjA1MDUwO1xyXG4kY29sb3ItZ2FtbWEtOTAwOiAjYjcwMTA5O1xyXG4kY29sb3ItZ2FtbWEtMTAwMDogIzhiNDY0OTtcclxuJGNvbG9yLWdhbW1hLTExMDA6ICNjNWEwYmM7XHJcbiRjb2xvci1nYW1tYS0xMjAwOiAjZmEzMjNjO1xyXG5cclxuJGNvbG9yLWdhbW1hLW11dGVkLTEwMDogI2NjYWJkODtcclxuJGNvbG9yLWdhbW1hLW11dGVkLTYwMDogI2EyNzliMTtcclxuXHJcbiRjb2xvci1kZWx0YS0xMDA6ICNmZWQyYWQ7XHJcbiRjb2xvci1kZWx0YS0yMDA6ICNkY2UxMjM7XHJcbiRjb2xvci1kZWx0YS0zMDA6ICNkYmUwMjM7XHJcbiRjb2xvci1kZWx0YS00MDA6ICNkZGUwM2Q7XHJcbiRjb2xvci1kZWx0YS02MDA6ICNkYmRlM2M7XHJcbiRjb2xvci1kZWx0YS03MDA6ICNkMmRiNDY7XHJcbiRjb2xvci1kZWx0YS04MDA6ICNmZGFhNjM7XHJcbiRjb2xvci1kZWx0YS05MDA6ICNmOWIxNzg7XHJcbiRjb2xvci1kZWx0YS0xMDAwOiAjZmM2YTcwO1xyXG4kY29sb3ItZGVsdGEtMTEwMDogI2ZmZThiZjtcclxuJGNvbG9yLWRlbHRhLTEyMDA6ICNmZmNjODA7XHJcblxyXG4kY29sb3Itb21lZ2EtMTAwOiAjMDAwO1xyXG4kY29sb3Itb21lZ2EtMzAwOiAjMjIyO1xyXG4kY29sb3Itb21lZ2EtMTAwMDogIzU1NTtcclxuJGNvbG9yLW9tZWdhLTEyMDA6ICM4ODg7XHJcblxyXG4kY29sb3ItbGlnaHQtNjAwOiAjYmJiO1xyXG4kY29sb3ItbGlnaHQtNzAwOiAjYWFhO1xyXG5cclxuJGNvbG9yLWluZm8tMjAwOiAjOGRhYWRlO1xyXG4kY29sb3ItaW5mby0zMDA6ICNhOGNiZWI7XHJcbiRjb2xvci1pbmZvLTQwMDogIzY2YWZlOTtcclxuJGNvbG9yLWluZm8tNTAwOiAjN2ZiNmQ2O1xyXG4kY29sb3ItaW5mby02MDA6ICM3MTk2ZGE7XHJcbiRjb2xvci1pbmZvLTcwMDogIzY1OGFjZjtcclxuJGNvbG9yLWluZm8tODAwOiAjM2Q2OWJhO1xyXG4kY29sb3ItaW5mby05MDA6ICMwMDcyOTk7XHJcbiRjb2xvci1pbmZvLTEyMDA6ICMzYTNmNTE7XHJcblxyXG4kY29sb3ItaW5mby1tdXRlZC0yMDA6ICNiYTljYzU7XHJcbiRjb2xvci1pbmZvLW11dGVkLTYwMDogIzVlNzE5MDtcclxuJGNvbG9yLWluZm8tbXV0ZWQtODAwOiAjNjA0NDZiO1xyXG5cclxuJGNvbG9yLXN1Y2Nlc3MtMTAwOiAjOGNkYWIyO1xyXG4kY29sb3Itc3VjY2Vzcy0yMDA6ICM2Y2MwOTQ7XHJcbiRjb2xvci1zdWNjZXNzLTMwMDogIzZiYmJhZTtcclxuJGNvbG9yLXN1Y2Nlc3MtNDAwOiAjNWY5ZWEwO1xyXG4kY29sb3Itc3VjY2Vzcy02MDA6ICM2Y2MxOTU7XHJcbiRjb2xvci1zdWNjZXNzLTcwMDogIzZjYmQ4MztcclxuJGNvbG9yLXN1Y2Nlc3MtODAwOiAjMjdhZTYwO1xyXG4kY29sb3Itc3VjY2Vzcy0xMDAwOiAjNWNhMDdkO1xyXG4kY29sb3Itc3VjY2Vzcy0xMjAwOiAjMDA1MDNjO1xyXG5cclxuJGNvbG9yLWVycm9yLTEwMDogI2Y1ODY4YTtcclxuJGNvbG9yLWVycm9yLTIwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWVycm9yLTMwMDogI2ZmNTg1ZDtcclxuJGNvbG9yLWVycm9yLTYwMDogI2VkNGI1MjtcclxuJGNvbG9yLWVycm9yLTcwMDogI2ZhYmZjMTtcclxuJGNvbG9yLWVycm9yLTgwMDogI2YwNTA1MDtcclxuJGNvbG9yLWVycm9yLTkwMDogI2I3MDEwOTtcclxuJGNvbG9yLWVycm9yLTEwMDA6ICM4YjQ2NDk7XHJcbiRjb2xvci1lcnJvci0xMTAwOiAjYzVhMGJjO1xyXG4kY29sb3ItZXJyb3ItMTIwMDogI2ZhMzIzYztcclxuXHJcbiRjb2xvci1lcnJvci1tdXRlZC02MDA6ICNhMjc5YjE7XHJcblxyXG4kY29sb3Itd2FybmluZy0xMDA6ICNmZWQyYWQ7XHJcbiRjb2xvci13YXJuaW5nLTIwMDogI2RjZTEyMztcclxuJGNvbG9yLXdhcm5pbmctMzAwOiAjZGJlMDIzO1xyXG4kY29sb3Itd2FybmluZy00MDA6ICNkZGUwM2Q7XHJcbiRjb2xvci13YXJuaW5nLTYwMDogI2RiZGUzYztcclxuJGNvbG9yLXdhcm5pbmctNzAwOiAjZDJkYjQ2O1xyXG4kY29sb3Itd2FybmluZy04MDA6ICNmZGFhNjM7XHJcbiRjb2xvci13YXJuaW5nLTkwMDogI2Y5YjE3ODtcclxuJGNvbG9yLXdhcm5pbmctMTAwMDogI2ZjNmE3MDtcclxuJGNvbG9yLXdhcm5pbmctMTEwMDogI2ZmZThiZjtcclxuXHJcbiRjb2xvci1kYXJrLTEwMDA6ICM1NTU7XHJcbiRjb2xvci1kYXJrLTEyMDA6ICM4ODg7XHJcbiRjb2xvci1yZXNvdXJjZTogIzAwMTczMTtcclxuJGxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDkwLjAzZGVnLCAjMTU2ZDgxIDAuMzYlLCAjMzZhYmM1IDk5Ljk4JSk7XHJcbiRsaW5lYXItZ3JhZGllbnQtbGlnaHQ6IGxpbmVhci1ncmFkaWVudCg5MC4wM2RlZywgcmdiYSgjMTU2ZDgxLCAwLjEpIDAuMzYlLCByZ2JhKCMzNmFiYzUsIDAuMSkgOTkuOTglKTtcclxuIl19 */"] });


/***/ }),

/***/ "Mght":
/*!*********************************************************!*\
  !*** ./src/app/@core/store/actions/settings.actions.ts ***!
  \*********************************************************/
/*! exports provided: setLanguage, setResources, loadResources, setDarkMode, toggleCollapsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResources", function() { return setResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResources", function() { return loadResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDarkMode", function() { return setDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsed", function() { return toggleCollapsed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SETTINGS] set language', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// SETTINGS set resources
const setResources = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SETTINGS] set resources', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// SETTINGS load resources
const loadResources = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SETTINGS] load resources');
// SETTINGS set dark mode
const setDarkMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SETTINGS] set dark mode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleCollapsed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SETTINGS] toggle collapsed menu');


/***/ }),

/***/ "MuQe":
/*!*******************************************************!*\
  !*** ./src/app/@core/store/effects/notify.effects.ts ***!
  \*******************************************************/
/*! exports provided: NotifyEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyEffects", function() { return NotifyEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _actions_notify_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/notify.actions */ "9cjx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';




class NotifyEffects {
    constructor(actions$, toastrService) {
        this.actions$ = actions$;
        this.toastrService = toastrService;
        this.config = {
            positionClass: 'toast-top-right'
        };
        this.mobileConfig = {
            positionClass: 'toast-bottom-center'
        };
        this.showSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_notify_actions__WEBPACK_IMPORTED_MODULE_3__["successNotification"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((action) => this.toastrService.success(action.message, action.title, this.getConfig()))), { dispatch: false });
    }
    getConfig() {
        if (window.screen.width <= src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mobileWidth) {
            return this.mobileConfig;
        }
        return this.config;
    }
}
NotifyEffects.ɵfac = function NotifyEffects_Factory(t) { return new (t || NotifyEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
NotifyEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NotifyEffects, factory: NotifyEffects.ɵfac });


/***/ }),

/***/ "PBZE":
/*!*********************************************************!*\
  !*** ./src/app/@core/store/reducers/public.reducers.ts ***!
  \*********************************************************/
/*! exports provided: PUBLIC_KEY, initialState, publicReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_KEY", function() { return PUBLIC_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicReducer", function() { return publicReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_public_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/public.actions */ "7aPK");


const PUBLIC_KEY = 'PUBLIC';
const initialState = {
    banks: []
};
const publicReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_public_actions__WEBPACK_IMPORTED_MODULE_1__["loadBanksSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { banks: action.banks }))));


/***/ }),

/***/ "QJkZ":
/*!*******************************************************!*\
  !*** ./src/app/@core/store/reducers/acct.reducers.ts ***!
  \*******************************************************/
/*! exports provided: ACCT_KEY, ACCT_FILTER_FORM, ACCT_EDIT_FORM, initialState, validateAndUpdateEditForm, acctReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCT_KEY", function() { return ACCT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCT_FILTER_FORM", function() { return ACCT_FILTER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCT_EDIT_FORM", function() { return ACCT_EDIT_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAndUpdateEditForm", function() { return validateAndUpdateEditForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acctReducers", function() { return acctReducers; });
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/acct.actions */ "GAc8");
/* harmony import */ var _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/accounts/models/acct-tab.enum */ "Vc2e");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var ngrx_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-forms */ "atpF");
/* harmony import */ var ngrx_forms_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngrx-forms/validation */ "+Mqz");





const ACCT_KEY = 'acct';
const ACCT_FILTER_FORM = 'ACCT_FILTER_FORM';
const ACCT_EDIT_FORM = 'ACCT_EDIT_FORM';
const initialFormState = Object(ngrx_forms__WEBPACK_IMPORTED_MODULE_3__["createFormGroupState"])(ACCT_FILTER_FORM, {
    filter: undefined,
    currency: {
        UAH: false,
        USD: false,
        EUR: false,
        OTHER: false
    }
});
const initialEditFormState = Object(ngrx_forms__WEBPACK_IMPORTED_MODULE_3__["createFormGroupState"])(ACCT_EDIT_FORM, {
    name: ''
});
const initialState = {
    accounts: undefined,
    currentTab: _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_1__["AccountTab"].Active,
    filterForm: initialFormState,
    loadings: [],
    currentAccount: undefined,
    editForm: initialEditFormState
};
const validateAndUpdateEditForm = Object(ngrx_forms__WEBPACK_IMPORTED_MODULE_3__["updateGroup"])({
    name: Object(ngrx_forms__WEBPACK_IMPORTED_MODULE_3__["validate"])(ngrx_forms_validation__WEBPACK_IMPORTED_MODULE_4__["required"], Object(ngrx_forms_validation__WEBPACK_IMPORTED_MODULE_4__["maxLength"])(70))
});
const acctReducers = Object(ngrx_forms__WEBPACK_IMPORTED_MODULE_3__["wrapReducerWithFormStateUpdate"])(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(ngrx_forms__WEBPACK_IMPORTED_MODULE_3__["onNgrxForms"])(), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setAccounts"], (state, action) => (Object.assign(Object.assign({}, state), { accounts: action.accounts }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setTab"], (state, action) => (Object.assign(Object.assign({}, state), { currentTab: action.tab }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["loadAccounts"], (state) => (Object.assign(Object.assign({}, state), { loadings: [...state.loadings, 'list'] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setAccounts"], (state) => (Object.assign(Object.assign({}, state), { loadings: state.loadings.filter(p => p !== 'list') }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["goToDetail"], _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setCurrentAccount"], (state, action) => (Object.assign(Object.assign({}, state), { currentAccount: action.account }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["loadCurrentAccount"], (state) => (Object.assign(Object.assign({}, state), { loadings: [...state.loadings, 'account'] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["loadCurrentAccountSuccess"], _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["loadCurrentAccountFailure"], (state) => (Object.assign(Object.assign({}, state), { loadings: state.loadings.filter(p => p !== 'account') }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setEditFormInitState"], (state) => (Object.assign(Object.assign({}, state), { editForm: initialEditFormState })))), s => s.editForm, validateAndUpdateEditForm);


/***/ }),

/***/ "RXIs":
/*!*********************************************!*\
  !*** ./src/app/@shared/pipes/money.pipe.ts ***!
  \*********************************************/
/*! exports provided: MoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyPipe", function() { return MoneyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MoneyPipe {
    transform(amount, currencyCode) {
        const money = amount || 0;
        let c = 2; // rounding of the fractional part to 100 (0,00)
        const d = ',';
        const t = ' ';
        let n = money;
        c = isNaN((c = Math.abs(c))) ? 2 : c;
        const s = n < 0 ? '-' : '';
        n = parseFloat(Math.abs(n || 0).toFixed(c));
        const i = String(parseInt(n.toString()));
        let j;
        j = (j = i.length) > 3 ? j % 3 : 0;
        return (s +
            (j ? i.substr(0, j) + t : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
            (c
                ? d +
                    Math.abs(n - i)
                        .toFixed(c)
                        .slice(2)
                : '') +
            this.getCurrencySymbol(currencyCode));
    }
    getCurrencySymbol(code) {
        if (!!code) {
            switch (code.toUpperCase()) {
                case 'EUR': // Euro
                    return '€';
                case 'USD': // Dólar americano
                case 'MXN': // Peso mejicano
                case 'CAD': // Dólar de Canadá
                case 'AUD': // Dólar australiano
                case 'NZD': // Dólar neozelandés
                case 'HKD': // Dólar de Hong Kong
                case 'SGD': // Dólar de Singapur
                case 'ARS': // Peso argentino
                    return '$';
                case 'CNY': // Yuan chino
                case 'JPY': // Yen japonés
                    return '¥';
                case 'GBP': // Libra esterlina
                case 'GIP': // Libras de Gibraltar
                    return '£';
                case 'BRL': // Real brasileño
                    return 'R$';
                case 'INR': // Rupia india
                    return 'Rp';
                case 'CHF': // Franco suizo
                    return 'Fr';
                case 'SEK': // Corona sueca
                case 'NOK': // Corona noruega
                    return 'kr';
                case 'KPW': // Won de Corea del Norte
                case 'KRW': // Won de Corea del Sur
                    return '₩';
                case 'UAH': // uk
                    return '₴';
                case 'RUB':
                    return '₽';
                default:
                    return code;
            }
        }
        else {
            return '';
        }
    }
}
MoneyPipe.ɵfac = function MoneyPipe_Factory(t) { return new (t || MoneyPipe)(); };
MoneyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "money", type: MoneyPipe, pure: true });


/***/ }),

/***/ "SYr6":
/*!*********************************************************!*\
  !*** ./src/app/@shared/directives/b1-icon.directive.ts ***!
  \*********************************************************/
/*! exports provided: B1IconDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B1IconDirective", function() { return B1IconDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class B1IconDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        if (!this.elementRef.nativeElement.classList.contains('b1-icons')) {
            this.elementRef.nativeElement.classList.add('b1-icons');
        }
        if (!this.elementRef.nativeElement.classList.contains(`b1-icons-icon-${this.icon}`)) {
            this.elementRef.nativeElement.classList.add(`b1-icons-icon-${this.icon}`);
        }
    }
}
B1IconDirective.ɵfac = function B1IconDirective_Factory(t) { return new (t || B1IconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
B1IconDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: B1IconDirective, selectors: [["", "b1-icon", ""]], inputs: { icon: "icon" } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/app.actions */ "r2tv");
/* harmony import */ var _actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @actions/settings.actions */ "Mght");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @selectors/settings.selectors */ "sqfJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_components_b1_global_loader_b1_global_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@shared/components/b1-global-loader/b1-global-loader.component */ "2j62");









class AppComponent {
    constructor(translate, store, router) {
        this.translate = translate;
        this.store = store;
        this.router = router;
        this.title = 'BOneBussinesAngular';
        this.language$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_3__["currentLanguageSelector"]);
        this.darkMode$ = this.store.select(_selectors_settings_selectors__WEBPACK_IMPORTED_MODULE_3__["darkModeSelector"]);
    }
    ngOnInit() {
        this.globalLoaderStarter();
        this.lngSubscription$ = this.language$.subscribe(language => {
            this.translate.use(language);
        });
        this.darkModeSubscription$ = this.darkMode$.subscribe(darkMode => {
            console.log('dark mode');
            if (darkMode) {
                document.body.classList.add('dark-mode');
            }
            else {
                document.body.classList.remove('dark-mode');
            }
        });
        this.store.dispatch(Object(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__["loadResources"])());
    }
    ngOnDestroy() {
        this.lngSubscription$.unsubscribe();
        this.darkModeSubscription$.unsubscribe();
        this.routeEventSubscription$.unsubscribe();
    }
    globalLoaderStarter() {
        this.routeEventSubscription$ = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadStart"]) {
                this.store.dispatch(Object(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["setGlobalLoader"])({ isLoading: true }));
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadEnd"]) {
                this.store.dispatch(Object(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["setGlobalLoader"])({ isLoading: false }));
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "b1-global-loader");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_b1_global_loader_b1_global_loader_component__WEBPACK_IMPORTED_MODULE_7__["B1GlobalLoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TP+B":
/*!********************************************************!*\
  !*** ./src/app/@core/store/selectors/app.selectors.ts ***!
  \********************************************************/
/*! exports provided: featureSelector, globalLoaderSelector, bankDateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureSelector", function() { return featureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalLoaderSelector", function() { return globalLoaderSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankDateSelector", function() { return bankDateSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_app_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reducers/app.reducers */ "hmPF");
/* harmony import */ var _user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.selectors */ "DtIY");



const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_1__["APP_KEY"]);
const globalLoaderSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.globalLoader);
const bankDateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_user_selectors__WEBPACK_IMPORTED_MODULE_2__["currentCustomerSelector"], (currentCustomer) => currentCustomer === null || currentCustomer === void 0 ? void 0 : currentCustomer.BankDate);


/***/ }),

/***/ "UfwI":
/*!************************************************!*\
  !*** ./src/app/@core/services/base.service.ts ***!
  \************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class BaseService {
    constructor() {
        this.loading = false;
        this.loadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.loading$ = this.loadingSource.asObservable();
    }
    handleError(error) {
        // this.loading = false;
        console.log(error);
        if (error.url) {
            if (error.url.indexOf('demo') > 0 && error.url.indexOf('.json') > 0) {
                if (error.url.indexOf('en-US') > 0) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Function not available in demo mode!');
                }
                if (error.url.indexOf('ru-RU') > 0) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Функция не доступна в демо режиме!');
                }
                if (error.url.indexOf('uk-UA') > 0) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Функція не доступна в демо режимі!');
                }
            }
        }
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.log(`Backend returned code ${error.status}, ` +
                `body was: ${JSON.stringify(error.error)}`);
        }
        if (error.status === 401) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('');
        }
        // return an observable with a user-facing error message
        if (typeof (error.error) === 'string') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error.error);
        }
        if ('DOMException' === error.constructor.name) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error.message);
        }
        if (error.error instanceof ProgressEvent) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error.message);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }
        // error
    }
    triggerLoading(loading) {
        this.loadingSource.next(loading);
    }
}


/***/ }),

/***/ "UvNo":
/*!*****************************************************!*\
  !*** ./src/app/@core/store/actions/auth.actions.ts ***!
  \*****************************************************/
/*! exports provided: loginRequest, tokenLoginRequest, tokenOtpRequest, resetLogin, loginSuccess, loginFailure, tokenSuccess, tokenFailure, setIsLoading, setNeedOtp, authLoadProfileRequest, authLoadProfileSuccess, authLoadProfileFailure, setToken, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenLoginRequest", function() { return tokenLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenOtpRequest", function() { return tokenOtpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLogin", function() { return resetLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailure", function() { return loginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenSuccess", function() { return tokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenFailure", function() { return tokenFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsLoading", function() { return setIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNeedOtp", function() { return setNeedOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLoadProfileRequest", function() { return authLoadProfileRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLoadProfileSuccess", function() { return authLoadProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLoadProfileFailure", function() { return authLoadProfileFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loginRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] login request', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const tokenLoginRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] token with login request', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const tokenOtpRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] token with otp request', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] reset login data');
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] login success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] login error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// tokenSuccess action
const tokenSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] token success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// tokenFailure action
const tokenFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] token error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] set is loading', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// setNeedOtp action
const setNeedOtp = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] sett need otp', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// authLoadProfile action
const authLoadProfileRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] load profile request');
// authLoadProfileSuccess action
const authLoadProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] load profile success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// authLoadProfileFailure action
const authLoadProfileFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] load profile failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// setToken action
const setToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] set token', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// logout action
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[AUTH] logout');


/***/ }),

/***/ "V5UK":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: localStorageSyncReducer, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _effects_acct_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @effects/acct.effects */ "Ipjf");
/* harmony import */ var _effects_auth_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @effects/auth.effects */ "HuDP");
/* harmony import */ var _effects_notify_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @effects/notify.effects */ "MuQe");
/* harmony import */ var _effects_public_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @effects/public.effects */ "JvC3");
/* harmony import */ var _effects_route_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @effects/route.effects */ "+v5c");
/* harmony import */ var _effects_settings_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @effects/settings.effects */ "1Qsm");
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @effects/user.effects */ "FZXn");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngrx-store-localstorage */ "zzrz");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store */ "n42m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");




















function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_12__["localStorageSync"])({
        keys: [
            { settings: ['currentLanguage', 'darkModeActive'] },
            { auth: ['token'] },
            { user: ['currentClientId'] }
        ],
        rehydrate: true
    })(reducer);
}
const metaReducers = [localStorageSyncReducer];
class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_14__["reducers"], {
                metaReducers
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({ maxAge: 100, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([
                _effects_auth_effects__WEBPACK_IMPORTED_MODULE_2__["AuthEffects"],
                _effects_route_effects__WEBPACK_IMPORTED_MODULE_5__["RouteEffects"],
                _effects_user_effects__WEBPACK_IMPORTED_MODULE_7__["UserEffects"],
                _effects_settings_effects__WEBPACK_IMPORTED_MODULE_6__["SettingsEffects"],
                _effects_acct_effects__WEBPACK_IMPORTED_MODULE_1__["AcctEffects"],
                _effects_public_effects__WEBPACK_IMPORTED_MODULE_4__["PublicEffects"],
                _effects_notify_effects__WEBPACK_IMPORTED_MODULE_3__["NotifyEffects"]
            ]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_9__["StoreRouterConnectingModule"].forRoot(),
        ], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_9__["StoreRouterConnectingModule"]], exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"]] }); })();


/***/ }),

/***/ "Vc2e":
/*!**********************************************************!*\
  !*** ./src/app/modules/accounts/models/acct-tab.enum.ts ***!
  \**********************************************************/
/*! exports provided: AccountTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTab", function() { return AccountTab; });
var AccountTab;
(function (AccountTab) {
    AccountTab["Active"] = "Active";
    AccountTab["Closed"] = "Closed";
})(AccountTab || (AccountTab = {}));


/***/ }),

/***/ "Vms1":
/*!*****************************************************!*\
  !*** ./src/app/@core/store/actions/user.actions.ts ***!
  \*****************************************************/
/*! exports provided: loadProfileRequest, loadProfileSuccess, loadProfileFailure, checkProfile, profileExist, loadNotifications, setNotifications, setCurrentClientId, setMenu, setSubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfileRequest", function() { return loadProfileRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfileSuccess", function() { return loadProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfileFailure", function() { return loadProfileFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProfile", function() { return checkProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileExist", function() { return profileExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadNotifications", function() { return loadNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentClientId", function() { return setCurrentClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMenu", function() { return setMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSubMenu", function() { return setSubMenu; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// loadProfileRequest action
const loadProfileRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] load profile');
// loadProfileSuccess action
const loadProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] load profile success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// loadProfileFailure action
const loadProfileFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] load profile failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const checkProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] check profile');
const profileExist = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] profile exist');
const loadNotifications = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] load notifications');
const setNotifications = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] set notifications', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setCurrentClientId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] set current client id', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setMenu = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] set menu', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setSubMenu = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[USER] set sub menu', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "YCCE":
/*!***********************************************************!*\
  !*** ./src/app/@shared/directives/web-class.directive.ts ***!
  \***********************************************************/
/*! exports provided: WebClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebClassDirective", function() { return WebClassDirective; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WebClassDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        if (window.screen.width > src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].mobileWidth && this.webClass) {
            this.el.nativeElement.className += ' ' + this.webClass;
        }
    }
}
WebClassDirective.ɵfac = function WebClassDirective_Factory(t) { return new (t || WebClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
WebClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebClassDirective, selectors: [["", "webClass", ""]], inputs: { webClass: "webClass" } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@core/core.module */ "V5UK");
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@core/interceptors/auth.interceptor */ "LQbr");
/* harmony import */ var _shared_components_b1_global_loader_b1_global_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@shared/components/b1-global-loader/b1-global-loader.component */ "2j62");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_authorized_layout_authorized_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/authorized-layout/authorized-layout.component */ "Glcz");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@shared/shared.module */ "pk6O");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "MR0u");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptor"],
            multi: true,
        },
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngrx_component__WEBPACK_IMPORTED_MODULE_13__["ReactiveComponentModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
        ], _ngrx_component__WEBPACK_IMPORTED_MODULE_13__["ReactiveComponentModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _shared_components_b1_global_loader_b1_global_loader_component__WEBPACK_IMPORTED_MODULE_7__["B1GlobalLoaderComponent"],
        _layout_authorized_layout_authorized_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthorizedLayoutComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ngrx_component__WEBPACK_IMPORTED_MODULE_13__["ReactiveComponentModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"], // ToastrModule added
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]], exports: [_ngrx_component__WEBPACK_IMPORTED_MODULE_13__["ReactiveComponentModule"]] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "a43w":
/*!************************************************!*\
  !*** ./src/app/@core/services/acct.service.ts ***!
  \************************************************/
/*! exports provided: AcctService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcctService", function() { return AcctService; });
/* harmony import */ var _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/accounts/models/acct-tab.enum */ "Vc2e");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "UfwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AcctService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    /**
     *
     */
    constructor(http) {
        super();
        this.http = http;
    }
    getAccounts(clientId) {
        return this.http.get(`api/v1/acct/accounts/${clientId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(accounts => {
            accounts.forEach(account => this.mapAccount(account));
            return accounts;
        }));
    }
    getAccount(bankId, accountId, clientId) {
        return this.http.get(`api/v1/acct/accounts/${bankId}/${accountId}/${clientId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(account => this.mapAccount(account)));
    }
    updateAccount(bankId, accountId, clientId, updateAccount) {
        return this.http.put(`api/v1/acct/accounts/${bankId}/${accountId}/${clientId}`, { AccName: updateAccount.name });
    }
    mapAccount(account) {
        account.Status = !account.ClosingDate ? _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_0__["AccountTab"].Active : _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_0__["AccountTab"].Closed;
        return account;
    }
}
AcctService.ɵfac = function AcctService_Factory(t) { return new (t || AcctService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AcctService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AcctService, factory: AcctService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fhUz":
/*!*************************************************************!*\
  !*** ./src/app/@shared/directives/mobile-more.directive.ts ***!
  \*************************************************************/
/*! exports provided: MobileMoreDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMoreDirective", function() { return MobileMoreDirective; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class MobileMoreDirective {
    constructor(dropdown, el) {
        this.dropdown = dropdown;
        this.el = el;
        this.parentNode = el.nativeElement.parentNode;
        const div = document.createElement('ngb-modal-backdrop');
        div.className = 'modal-backdrop fade show';
        const body = document.getElementsByTagName('body')[0];
        this.openSubscription = dropdown.openChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => window.screen.width <= src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mobileWidth)).subscribe((isOpen) => {
            if (isOpen) {
                // el.nativeElement.style.position = 'fixed';
                // el.nativeElement.style.top = 'auto';
                // el.nativeElement.style.bottom = '0';
                // el.nativeElement.style['z-index'] = 1050;
                body.appendChild(el.nativeElement);
                body.appendChild(div);
                setTimeout(() => {
                    el.nativeElement.classList.add('mobile-more-show');
                });
            }
            else {
                this.parentNode.appendChild(el.nativeElement);
                body.removeChild(div);
                el.nativeElement.classList.remove('mobile-more-show');
            }
        });
    }
    ngOnDestroy() {
        this.openSubscription.unsubscribe();
    }
}
MobileMoreDirective.ɵfac = function MobileMoreDirective_Factory(t) { return new (t || MobileMoreDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDropdown"], 2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
MobileMoreDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MobileMoreDirective, selectors: [["", "mobile-more", ""]] });


/***/ }),

/***/ "hmPF":
/*!******************************************************!*\
  !*** ./src/app/@core/store/reducers/app.reducers.ts ***!
  \******************************************************/
/*! exports provided: APP_KEY, initialState, appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_KEY", function() { return APP_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/app.actions */ "r2tv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const APP_KEY = 'app';
const initialState = {
    globalLoader: false
};
const appReducers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["setGlobalLoader"], (state, action) => (Object.assign(Object.assign({}, state), { globalLoader: action.isLoading }))));


/***/ }),

/***/ "i8I7":
/*!**************************************************!*\
  !*** ./src/app/@core/services/public.service.ts ***!
  \**************************************************/
/*! exports provided: PublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicService", function() { return PublicService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "UfwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PublicService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    /**
     *
     */
    constructor(http) {
        super();
        this.http = http;
    }
    getBanks() {
        return this.http.get(`api/v1/public/banks/`);
    }
}
PublicService.ɵfac = function PublicService_Factory(t) { return new (t || PublicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PublicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PublicService, factory: PublicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "i8hp":
/*!*********************************************************!*\
  !*** ./src/app/@core/store/selectors/auth.selectors.ts ***!
  \*********************************************************/
/*! exports provided: featureSelector, phoneSelector, loginDataSelector, errorSelector, isLoadingSelector, tokenSelector, isNeedOtpSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureSelector", function() { return featureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneSelector", function() { return phoneSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginDataSelector", function() { return loginDataSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSelector", function() { return errorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function() { return isLoadingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenSelector", function() { return tokenSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNeedOtpSelector", function() { return isNeedOtpSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reducers/auth.reducers */ "5N+I");


const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_1__["AUTH_KEY"]);
const phoneSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.phone);
const loginDataSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.loginData);
const errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.error);
const isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.isLoading);
const tokenSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.token);
const isNeedOtpSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.isNeedOtp);


/***/ }),

/***/ "j9Os":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/models/login-otp.model.ts ***!
  \********************************************************/
/*! exports provided: LoginOtpModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOtpModel", function() { return LoginOtpModel; });
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.model */ "FA7H");

class LoginOtpModel extends _login_model__WEBPACK_IMPORTED_MODULE_0__["LogInModel"] {
    constructor(code, loginData) {
        super();
        this.ConfirmCode = code;
        this.Password = loginData === null || loginData === void 0 ? void 0 : loginData.Password;
        this.Username = loginData === null || loginData === void 0 ? void 0 : loginData.Username;
    }
}


/***/ }),

/***/ "jBaC":
/*!******************************************************!*\
  !*** ./src/app/@shared/directives/iban.directive.ts ***!
  \******************************************************/
/*! exports provided: IbanDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IbanDirective", function() { return IbanDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_iban_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/iban.service */ "BQfU");


class IbanDirective {
    constructor(elementRef, ibanService) {
        this.elementRef = elementRef;
        this.ibanService = ibanService;
    }
    ngOnChanges(changes) {
        if (changes.iban.currentValue !== changes.iban.previousValue && this.ibanService.isIban(this.iban)) {
            const countryCode = this.iban.substring(0, 2);
            const mfo = this.ibanService.getMfo(this.iban);
            const checkNumbers = this.iban.substring(2, 4);
            const accountNumber = this.ibanService.getNls(this.iban);
            let zeros = '';
            while ((countryCode.length +
                mfo.length +
                checkNumbers.length +
                zeros.length +
                accountNumber.length) !== this.ibanService.IbanLength) {
                zeros += '0';
            }
            let html = `<span style='opacity:0.6'>${countryCode}</span>`;
            html += `<span style='opacity:0.6'>${checkNumbers}</span>`;
            html += `<span style=''>${mfo}</span>`;
            html += `<span style='opacity:0.6'>${zeros}</span>`;
            html += `<span style=''>${accountNumber}</span>`;
            this.elementRef.nativeElement.innerHTML = html;
        }
    }
}
IbanDirective.ɵfac = function IbanDirective_Factory(t) { return new (t || IbanDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_iban_service__WEBPACK_IMPORTED_MODULE_1__["IbanService"])); };
IbanDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IbanDirective, selectors: [["", "iban", ""]], inputs: { iban: "iban" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "lgMu":
/*!**************************************************************!*\
  !*** ./src/app/@shared/directives/connect-form.directive.ts ***!
  \**************************************************************/
/*! exports provided: ConnectFormDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectFormDirective", function() { return ConnectFormDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class ConnectFormDirective {
    constructor(formGroupDirective, store) {
        this.formGroupDirective = formGroupDirective;
        this.store = store;
        this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.debounce = 300;
    }
    ngAfterViewInit() {
        if (!!this.formChange) {
            this.formChangeSubscription = this.formGroupDirective.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(this.debounce)).subscribe((value) => {
                var _a;
                (_a = this.formChange) === null || _a === void 0 ? void 0 : _a.emit(value);
            });
        }
        if (!!this.value) {
            this.value.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(value => this.formGroupDirective.form.patchValue(value));
        }
    }
    ngOnDestroy() {
        this.formChangeSubscription.unsubscribe();
    }
}
ConnectFormDirective.ɵfac = function ConnectFormDirective_Factory(t) { return new (t || ConnectFormDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ConnectFormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ConnectFormDirective, selectors: [["", "connectForm", ""]], inputs: { debounce: "debounce", value: "value" }, outputs: { formChange: "formChange" } });


/***/ }),

/***/ "mvWm":
/*!*********************************************************!*\
  !*** ./src/app/@core/store/selectors/acct.selectors.ts ***!
  \*********************************************************/
/*! exports provided: featureSelector, countActiveAccountsSelector, countClosedAccountsSelector, accountsSelector, accountsOnTabSelector, currentTabSelector, formSelector, editFormSelector, filterAccountsSelector, FilterCurrencySelector, isLoadingAccountsSelector, isLoadingCurrentAccountSelector, currentAccountSelector, currentAccountRouteParamsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureSelector", function() { return featureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countActiveAccountsSelector", function() { return countActiveAccountsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countClosedAccountsSelector", function() { return countClosedAccountsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountsSelector", function() { return accountsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountsOnTabSelector", function() { return accountsOnTabSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTabSelector", function() { return currentTabSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSelector", function() { return formSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editFormSelector", function() { return editFormSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAccountsSelector", function() { return filterAccountsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCurrencySelector", function() { return FilterCurrencySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingAccountsSelector", function() { return isLoadingAccountsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingCurrentAccountSelector", function() { return isLoadingCurrentAccountSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentAccountSelector", function() { return currentAccountSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentAccountRouteParamsSelector", function() { return currentAccountRouteParamsSelector; });
/* harmony import */ var _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/accounts/models/acct-tab.enum */ "Vc2e");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reducers/acct.reducers */ "QJkZ");
/* harmony import */ var src_app_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/models/filter.model */ "uTAe");
/* harmony import */ var _router_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router.selectors */ "IZWX");





const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_2__["ACCT_KEY"]);
const countActiveAccountsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => !state.accounts ? 0 : state.accounts.filter(p => p.Status === _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_0__["AccountTab"].Active).length);
const countClosedAccountsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => !state.accounts ? 0 : state.accounts.filter(p => p.Status === _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_0__["AccountTab"].Closed).length);
const accountsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.accounts);
const accountsOnTabSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => { var _a; return ((_a = state.accounts) === null || _a === void 0 ? void 0 : _a.filter(p => p.Status === state.currentTab)) || []; });
const currentTabSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.currentTab);
const formSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.filterForm);
const editFormSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.editForm);
const filterAccountsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.filterForm.controls.filter.value);
const FilterCurrencySelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => {
    if (state.filterForm.value.currency.OTHER === true) {
        const result = {
            currencies: Object.keys(state.filterForm.value.currency).filter(p => p !== 'OTHER'),
            type: src_app_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_3__["FilterCurrencyType"].Exclude
        };
        return result;
    }
    else {
        const result = {
            currencies: Object.keys(state.filterForm.value.currency).filter(p => p !== 'OTHER' && state.filterForm.value.currency[p] === true),
            type: src_app_shared_models_filter_model__WEBPACK_IMPORTED_MODULE_3__["FilterCurrencyType"].Include
        };
        return result;
    }
});
const isLoadingAccountsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.loadings.indexOf('list') >= 0);
const isLoadingCurrentAccountSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.loadings.indexOf('account') >= 0);
const currentAccountSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, state => state.currentAccount);
const currentAccountRouteParamsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_router_selectors__WEBPACK_IMPORTED_MODULE_4__["selectRouteNestedParams"], ({ bankId, accountId }) => ({ bankId: bankId || '', accountId: parseInt(accountId || '', 10) }));


/***/ }),

/***/ "n42m":
/*!**************************************!*\
  !*** ./src/app/@core/store/index.ts ***!
  \**************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reducers/acct.reducers */ "QJkZ");
/* harmony import */ var _reducers_app_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reducers/app.reducers */ "hmPF");
/* harmony import */ var _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reducers/auth.reducers */ "5N+I");
/* harmony import */ var _reducers_public_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reducers/public.reducers */ "PBZE");
/* harmony import */ var _reducers_settings_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reducers/settings.reducers */ "uEaY");
/* harmony import */ var _reducers_user_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reducers/user.reducers */ "4ozZ");







const reducers = {
    [_reducers_settings_reducers__WEBPACK_IMPORTED_MODULE_5__["SETTINGS_KEY"]]: _reducers_settings_reducers__WEBPACK_IMPORTED_MODULE_5__["settingsReducer"],
    [_reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]]: _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_3__["authReducer"],
    [_reducers_user_reducers__WEBPACK_IMPORTED_MODULE_6__["USER_KEY"]]: _reducers_user_reducers__WEBPACK_IMPORTED_MODULE_6__["userReducer"],
    [_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_2__["APP_KEY"]]: _reducers_app_reducers__WEBPACK_IMPORTED_MODULE_2__["appReducers"],
    [_reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_1__["ACCT_KEY"]]: _reducers_acct_reducers__WEBPACK_IMPORTED_MODULE_1__["acctReducers"],
    [_reducers_public_reducers__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_KEY"]]: _reducers_public_reducers__WEBPACK_IMPORTED_MODULE_4__["publicReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
};


/***/ }),

/***/ "na3P":
/*!***************************************************************!*\
  !*** ./src/app/@shared/directives/virtual-patch.directive.ts ***!
  \***************************************************************/
/*! exports provided: CdkVirtualScrollViewportPatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewportPatchDirective", function() { return CdkVirtualScrollViewportPatchDirective; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CdkVirtualScrollViewportPatchDirective {
    constructor(viewport) {
        this.viewport = viewport;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        console.log('CdkVirtualScrollViewportPatchDirective started');
        const viewportObject = this.viewport;
        const renderedRangeStream = this.viewport.renderedRangeStream;
        this.renderedRangeStreamSub = renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(() => {
            setTimeout(() => {
                const strategy = viewportObject._scrollStrategy;
                const item = viewportObject.elementRef.nativeElement.children[0].children[0];
                const style = getComputedStyle(item);
                const itemSize = item.clientHeight +
                    parseInt(style.marginTop, 10) +
                    parseInt(style.marginBottom, 10) +
                    parseInt(style.paddingBottom, 10) +
                    parseInt(style.paddingTop, 10);
                debugger;
                viewportObject.setRenderedRange({ start: 0, end: (viewportObject.getViewportSize() + strategy._minBufferPx) / itemSize });
                strategy.updateItemAndBufferSize(itemSize, strategy._minBufferPx, strategy._maxBufferPx);
            });
        });
    }
    ngOnDestroy() {
        this.renderedRangeStreamSub.unsubscribe();
    }
}
CdkVirtualScrollViewportPatchDirective.ɵfac = function CdkVirtualScrollViewportPatchDirective_Factory(t) { return new (t || CdkVirtualScrollViewportPatchDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], 2)); };
CdkVirtualScrollViewportPatchDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkVirtualScrollViewportPatchDirective, selectors: [["cdk-virtual-scroll-viewport", "autosize", ""]] });


/***/ }),

/***/ "pk6O":
/*!******************************************!*\
  !*** ./src/app/@shared/shared.module.ts ***!
  \******************************************/
/*! exports provided: CustomVirtualScrollStrategy, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomVirtualScrollStrategy", function() { return CustomVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/b1-icon.directive */ "SYr6");
/* harmony import */ var _directives_check_state_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/check-state.directive */ "vrDe");
/* harmony import */ var _components_b1_card_loader_b1_card_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/b1-card-loader/b1-card-loader.component */ "M1yg");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollbar */ "G1Gu");
/* harmony import */ var _directives_connect_form_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/connect-form.directive */ "lgMu");
/* harmony import */ var ngrx_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngrx-forms */ "atpF");
/* harmony import */ var _pipes_accounts_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/accounts-filter.pipe */ "3TYl");
/* harmony import */ var _pipes_money_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/money.pipe */ "RXIs");
/* harmony import */ var _directives_virtual_patch_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/virtual-patch.directive */ "na3P");
/* harmony import */ var _directives_iban_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/iban.directive */ "jBaC");
/* harmony import */ var _directives_mobile_more_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/mobile-more.directive */ "fhUz");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _directives_web_class_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/web-class.directive */ "YCCE");
/* harmony import */ var _directives_mobile_class_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/mobile-class.directive */ "GHAp");
/* harmony import */ var _directives_more_auto_direction_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/more-auto-direction.directive */ "Lpap");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class CustomVirtualScrollStrategy extends _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["FixedSizeVirtualScrollStrategy"] {
    constructor() {
        super(50, 98, 98);
    }
}
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["VIRTUAL_SCROLL_STRATEGY"],
            useClass: CustomVirtualScrollStrategy,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_4__["NgOtpInputModule"],
            _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ReactiveComponentModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
            ngrx_forms__WEBPACK_IMPORTED_MODULE_12__["NgrxFormsModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_18__["NgxSkeletonLoaderModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        ng_otp_input__WEBPACK_IMPORTED_MODULE_4__["NgOtpInputModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
        ngrx_forms__WEBPACK_IMPORTED_MODULE_12__["NgrxFormsModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_18__["NgxSkeletonLoaderModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_check_state_directive__WEBPACK_IMPORTED_MODULE_6__["CheckStateDirective"],
        _directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_5__["B1IconDirective"],
        _components_b1_card_loader_b1_card_loader_component__WEBPACK_IMPORTED_MODULE_7__["B1CardLoaderComponent"],
        _directives_connect_form_directive__WEBPACK_IMPORTED_MODULE_11__["ConnectFormDirective"],
        _pipes_accounts_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["AccountFilterPipe"],
        _pipes_money_pipe__WEBPACK_IMPORTED_MODULE_14__["MoneyPipe"],
        _directives_virtual_patch_directive__WEBPACK_IMPORTED_MODULE_15__["CdkVirtualScrollViewportPatchDirective"],
        _directives_iban_directive__WEBPACK_IMPORTED_MODULE_16__["IbanDirective"],
        _directives_mobile_more_directive__WEBPACK_IMPORTED_MODULE_17__["MobileMoreDirective"],
        _directives_web_class_directive__WEBPACK_IMPORTED_MODULE_19__["WebClassDirective"],
        _directives_mobile_class_directive__WEBPACK_IMPORTED_MODULE_20__["MobileClassDirective"],
        _directives_more_auto_direction_directive__WEBPACK_IMPORTED_MODULE_21__["MoreAutoDirectionDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        ng_otp_input__WEBPACK_IMPORTED_MODULE_4__["NgOtpInputModule"],
        _ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ReactiveComponentModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
        ngrx_forms__WEBPACK_IMPORTED_MODULE_12__["NgrxFormsModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_18__["NgxSkeletonLoaderModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _directives_check_state_directive__WEBPACK_IMPORTED_MODULE_6__["CheckStateDirective"],
        ng_otp_input__WEBPACK_IMPORTED_MODULE_4__["NgOtpInputModule"],
        _directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_5__["B1IconDirective"],
        _components_b1_card_loader_b1_card_loader_component__WEBPACK_IMPORTED_MODULE_7__["B1CardLoaderComponent"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
        _directives_connect_form_directive__WEBPACK_IMPORTED_MODULE_11__["ConnectFormDirective"],
        ngrx_forms__WEBPACK_IMPORTED_MODULE_12__["NgrxFormsModule"],
        _pipes_accounts_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["AccountFilterPipe"],
        _pipes_money_pipe__WEBPACK_IMPORTED_MODULE_14__["MoneyPipe"],
        _directives_virtual_patch_directive__WEBPACK_IMPORTED_MODULE_15__["CdkVirtualScrollViewportPatchDirective"],
        _directives_iban_directive__WEBPACK_IMPORTED_MODULE_16__["IbanDirective"],
        _directives_mobile_more_directive__WEBPACK_IMPORTED_MODULE_17__["MobileMoreDirective"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_18__["NgxSkeletonLoaderModule"],
        _directives_web_class_directive__WEBPACK_IMPORTED_MODULE_19__["WebClassDirective"],
        _directives_mobile_class_directive__WEBPACK_IMPORTED_MODULE_20__["MobileClassDirective"],
        _directives_more_auto_direction_directive__WEBPACK_IMPORTED_MODULE_21__["MoreAutoDirectionDirective"]] }); })();


/***/ }),

/***/ "r2tv":
/*!****************************************************!*\
  !*** ./src/app/@core/store/actions/app.actions.ts ***!
  \****************************************************/
/*! exports provided: setGlobalLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalLoader", function() { return setGlobalLoader; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// APP set global loader action
const setGlobalLoader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[APP] set global loader', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "sqfJ":
/*!*************************************************************!*\
  !*** ./src/app/@core/store/selectors/settings.selectors.ts ***!
  \*************************************************************/
/*! exports provided: featureSelector, currentLanguageSelector, allowedLanguagesSelector, darkModeSelector, logoSelector, callCenterPhonesSelector, callCenterPhonesLocalSelector, callCenterWorkSelector, ecpSupportPhonesSelector, isCollapsedSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureSelector", function() { return featureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLanguageSelector", function() { return currentLanguageSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedLanguagesSelector", function() { return allowedLanguagesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkModeSelector", function() { return darkModeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoSelector", function() { return logoSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callCenterPhonesSelector", function() { return callCenterPhonesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callCenterPhonesLocalSelector", function() { return callCenterPhonesLocalSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callCenterWorkSelector", function() { return callCenterWorkSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecpSupportPhonesSelector", function() { return ecpSupportPhonesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollapsedSelector", function() { return isCollapsedSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_settings_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reducers/settings.reducers */ "uEaY");


const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_settings_reducers__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_KEY"]);
const currentLanguageSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.currentLanguage);
const allowedLanguagesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.allowedLanguages);
const darkModeSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.darkModeActive);
const logoSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => { var _a; return ((_a = state.resources) === null || _a === void 0 ? void 0 : _a.Owner.LogoImage) || ''; });
const callCenterPhonesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => { var _a; return (_a = state.resources) === null || _a === void 0 ? void 0 : _a.Owner.CallCenterPhone; });
const callCenterPhonesLocalSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => { var _a; return (_a = state.resources) === null || _a === void 0 ? void 0 : _a.Owner.CallCenterPhoneLocal; });
const callCenterWorkSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => {
    var _a, _b;
    return {
        from: (_a = state.resources) === null || _a === void 0 ? void 0 : _a.Owner.CallCenterWorkFrom,
        to: (_b = state.resources) === null || _b === void 0 ? void 0 : _b.Owner.CallCenterWorkTo
    };
});
const ecpSupportPhonesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => { var _a; return (_a = state.resources) === null || _a === void 0 ? void 0 : _a.Owner.ECPTechSupportPhone; });
const isCollapsedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, state => state.isCollapsed);


/***/ }),

/***/ "t5Jg":
/*!******************************************************!*\
  !*** ./src/app/@core/store/actions/route.actions.ts ***!
  \******************************************************/
/*! exports provided: routeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTo", function() { return routeTo; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// routeTo action
const routeTo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ROUTE] route to', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "uEaY":
/*!***********************************************************!*\
  !*** ./src/app/@core/store/reducers/settings.reducers.ts ***!
  \***********************************************************/
/*! exports provided: SETTINGS_KEY, initialState, settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return SETTINGS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
/* harmony import */ var _actions_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/settings.actions */ "Mght");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");



const SETTINGS_KEY = 'settings';
const initialState = {
    currentLanguage: 'uk',
    allowedLanguages: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].languages,
    resources: undefined,
    darkModeActive: false,
    isCollapsed: false
};
const settingsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_0__["setLanguage"], (state, action) => (Object.assign(Object.assign({}, state), { currentLanguage: action.language }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_0__["setResources"], (state, action) => (Object.assign(Object.assign({}, state), { resources: action.resources }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_0__["setDarkMode"], (state, action) => (Object.assign(Object.assign({}, state), { darkModeActive: action.isActive }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleCollapsed"], (state, action) => (Object.assign(Object.assign({}, state), { isCollapsed: !state.isCollapsed }))));


/***/ }),

/***/ "uN0L":
/*!**********************************************!*\
  !*** ./src/app/@core/facades/user.facade.ts ***!
  \**********************************************/
/*! exports provided: UserFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFacade", function() { return UserFacade; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/user.actions */ "Vms1");
/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selectors/user.selectors */ "DtIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class UserFacade {
    constructor(store) {
        this.store = store;
        this.profile$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__["profileSelector"]);
        this.countCustomers$ = this.store.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_1__["countCustomersSelector"]);
    }
    loadProfile() {
        console.log('load profile');
        this.store.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["checkProfile"])());
    }
    loadNotifications() {
        this.store.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["loadNotifications"])());
    }
}
UserFacade.ɵfac = function UserFacade_Factory(t) { return new (t || UserFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
UserFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserFacade, factory: UserFacade.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uTAe":
/*!************************************************!*\
  !*** ./src/app/@shared/models/filter.model.ts ***!
  \************************************************/
/*! exports provided: FilterCurrencyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCurrencyType", function() { return FilterCurrencyType; });
var FilterCurrencyType;
(function (FilterCurrencyType) {
    FilterCurrencyType["Include"] = "INCLUDE";
    FilterCurrencyType["Exclude"] = "EXCLUDE";
})(FilterCurrencyType || (FilterCurrencyType = {}));


/***/ }),

/***/ "ucNU":
/*!************************************************!*\
  !*** ./src/app/@core/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "UfwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    /**
     *
     */
    constructor(http) {
        super();
        this.http = http;
    }
    logIn(loginData) {
        return this.http.post('api/v1/auth/login', loginData);
    }
    loginWithData(loginData) {
        console.log(loginData);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('grant_type', 'password')
            .set('username', (loginData === null || loginData === void 0 ? void 0 : loginData.Username) || '')
            .set('userdata', (loginData === null || loginData === void 0 ? void 0 : loginData.UserData) || '')
            .set('client_id', 'CORP-LIGHT-WEB') // TODO add to environment
            .set('passphrase', (loginData === null || loginData === void 0 ? void 0 : loginData.Password) || '');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post('api/v1/auth/token', params, httpOptions);
    }
    loginOtp(loginData) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('grant_type', 'password')
            .set('username', loginData.Username || '')
            .set('userdata', loginData.UserData)
            .set('client_id', 'CORP-LIGHT-WEB') // TODO add to environment
            .set('passphrase', loginData.Password || '')
            .set('confirmCode', loginData.ConfirmCode || '');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post('api/v1/auth/token', params, httpOptions);
    }
    refreshToken(refreshToken, sessionId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('grant_type', 'refresh_token')
            .set('refresh_token', refreshToken || '')
            .set('sessionId', sessionId || '')
            .set('client_id', 'CORP-LIGHT-WEB'); // TODO add to environment
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post('api/v1/auth/token', params, httpOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vAy1":
/*!************************************************!*\
  !*** ./src/app/@core/services/menu.service.ts ***!
  \************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "UfwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MenuService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
        this.menu = {
            accounts: {
                ngClass: '{active:$state.includes(\'app.acct\')}',
                ngValue: 'accounts',
                icon: 'university',
                dataRole: 'Director,Accountant,AccountsViewer,StatsViewer,PaymentsManager,ForeignCurrencyPaymentsManager,ForeignCurrencyApplicationsManager',
                route: 'accounts',
                // //gaTrackEvent: "['left-menu', 'view-accts']",
                dataTranslate: 'aside.nav.ACCOUNTS',
                moduleName: 'Accounts',
                position: 0
            },
            loans: {
                ngClass: '{active:$state.includes(\'app.loan\')}',
                ngValue: 'loans',
                icon: 'pie-chart',
                dataRole: 'Director,Accountant,LoansViewer',
                route: 'app.loan.loans',
                // gaTrackEvent: '[\'left-menu\', \'view-loans\']',
                dataTranslate: 'aside.nav.LOANS',
                moduleName: 'Loans',
                position: 1
            },
            deposits: {
                ngClass: '{active:$state.includes(\'app.dpt.index\')}',
                ngValue: 'deposits',
                icon: 'piggy-bank',
                dataRole: 'Director,Accountant,DepositsViewer',
                route: 'app.dpt.index',
                // gaTrackEvent: '[\'left-menu\', \'view-dpt\']',
                dataTranslate: 'aside.nav.DEPOSITS',
                moduleName: 'Deposits',
                position: 2
            },
            payments: {
                ngClass: '{active: ($state.includes(\'app.payments\') || $state.includes(\'app.paymentsAuto\')) && !$state.includes(\'app.payments.recipients\')}',
                ngValue: 'payments',
                icon: 'money-bill-wave',
                dataRole: 'Director,Accountant,PaymentsManager,ForeignCurrencyPaymentsManager',
                route: 'app.payments.incomings',
                // gaTrackEvent: '[\'left-menu\', \'view-payments\']',
                dataTranslate: 'aside.nav.DOCUMENTS',
                moduleName: 'Payments',
                position: 3
            },
            applications: {
                ngClass: '{active: $state.includes(\'app.fcapplications\')}',
                ngValue: 'applications',
                icon: 'coins',
                dataRole: 'Director,Accountant,ForeignCurrencyApplicationsManager',
                route: 'app.fcapplications.list.made',
                // gaTrackEvent: '[\'left-menu\', \'view-fcapplications\']',
                dataTranslate: 'aside.nav.APPLICATION',
                moduleName: 'Applications',
                position: 4
            },
            supdocuments: {
                ngClass: '{active: $state.includes(\'app.supdocuments\')}',
                ngValue: 'supdocuments',
                icon: 'file',
                dataRole: 'Director,Accountant,ForeignCurrencyApplicationsManager',
                route: 'app.supdocuments.list.documents',
                // gaTrackEvent: '[\'left-menu\', \'view-sup-docs\']',
                dataTranslate: 'aside.nav.SUPDOCUMENTS',
                moduleName: 'SupportDocuments',
                position: 5
            },
            salary: {
                ngClass: '{active: $state.includes(\'app.salary\')}',
                ngValue: 'salary',
                icon: 'wallet',
                dataRole: 'Director,Accountant,SalaryAccountant',
                route: 'app.salary.projects',
                // gaTrackEvent: '[\'left-menu\', \'view-salary\']',
                dataTranslate: 'aside.nav.SALARY',
                moduleName: 'Salary',
                position: 6
            },
            corpcards: {
                ngClass: '{active: $state.includes(\'app.corpcards.index\')}',
                ngValue: 'corpcards',
                icon: 'credit-card',
                dataRole: 'Director,Accountant',
                route: 'app.corpcards.index',
                // gaTrackEvent: '[\'left-menu\', \'view-salary\']',
                dataTranslate: 'aside.nav.CORPCARDS',
                moduleName: 'CorpCards',
                position: 7
            }
        };
        this.subMenu = {
            branches: {
                ngClass: '{active:$state.includes(\'app.map.index\')}',
                ngValue: 'branches',
                icon: 'map-marker',
                dataRole: '',
                route: 'app.map.index',
                dataTranslate: 'aside.nav.BranchesAndAtms',
                moduleName: 'Branches',
                position: 0
            },
            promotion: {
                ngClass: '{active:$state.includes(\'app.prm.products\')}',
                ngValue: 'promotion',
                icon: 'basket',
                dataRole: '',
                route: 'app.prm.products',
                dataTranslate: 'aside.nav.orderProduct',
                moduleName: 'Promotion',
                position: 0
            },
            calculator: {
                ngClass: '{active:$state.includes(\'app.payments.calculator\')}',
                ngValue: 'calculator',
                icon: 'calculator',
                dataRole: '',
                route: 'app.payments.calculator',
                dataTranslate: 'aside.nav.CALCULATOR',
                moduleName: 'Calculator',
                position: 0
            },
            users: {
                ngClass: '{active:$state.includes(\'app.admin.index\')}',
                ngValue: 'users',
                icon: 'users',
                dataRole: 'Director,Accountant,UsersManager',
                route: 'app.admin.index',
                dataTranslate: 'aside.nav.EMPLOYEES',
                moduleName: 'Users',
                position: 0
            },
            agents: {
                ngClass: '{active:$state.includes(\'app.payments.recipients\')}',
                ngValue: 'agents',
                icon: 'agents',
                dataRole: 'Director,Accountant,PaymentsManager',
                route: 'app.payments.recipients',
                dataTranslate: 'aside.nav.CORRESPONDENTS',
                moduleName: 'ClientAgents',
                position: 0
            },
            instruction: {
                ngClass: '{active:$state.includes(\'app.docs\')}',
                ngValue: 'instruction',
                icon: 'book-reader',
                dataRole: '',
                route: 'app.docs.index',
                dataTranslate: 'aside.nav.UserManual',
                moduleName: 'Instruction',
                position: 0
            },
            mobiles: {
                ngClass: '{active:$state.includes(\'app.mobile.index\')}',
                ngValue: 'mobiles',
                icon: 'mobile',
                dataRole: '',
                route: 'app.mobile.index',
                dataTranslate: 'aside.nav.MOBILEAPP',
                moduleName: 'Mobiles',
                position: 0
            }
        };
    }
    getMenuForCustomer(customer) {
        const result = new Array();
        customer.MenuSettings.forEach((item) => {
            const menuItem = Object.assign({}, this.menu[item.Name]);
            if (menuItem) {
                menuItem.position = item.Number;
                result.push(menuItem);
            }
        });
        return result.sort(p => p.position);
    }
    getSubMenu() {
        return Object.keys(this.subMenu).map(p => this.subMenu[p]);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vEZ/":
/*!************************************************!*\
  !*** ./src/app/@core/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "UfwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    /**
     *
     */
    constructor(http) {
        super();
        this.http = http;
    }
    getProfile() {
        return this.http.get('api/v1/user/profile').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((response) => console.log(response)));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_authorized_layout_authorized_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/authorized-layout/authorized-layout.component */ "Glcz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/auth/logon', pathMatch: 'full' },
    { path: 'auth', redirectTo: '/auth/logon', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | modules-auth-auth-module */ "modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then(p => p.AuthModule) },
    {
        path: '',
        component: _layout_authorized_layout_authorized_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthorizedLayoutComponent"],
        children: [
            { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "XoyV")).then(p => p.DashboardModule) },
            { path: 'accounts', loadChildren: () => __webpack_require__.e(/*! import() | modules-accounts-accounts-module */ "modules-accounts-accounts-module").then(__webpack_require__.bind(null, /*! ./modules/accounts/accounts.module */ "I89L")).then(p => p.AccountsModule) }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vrDe":
/*!*************************************************************!*\
  !*** ./src/app/@shared/directives/check-state.directive.ts ***!
  \*************************************************************/
/*! exports provided: CheckStateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckStateDirective", function() { return CheckStateDirective; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CheckStateDirective {
    constructor(elementRef, router) {
        this.elementRef = elementRef;
        this.router = router;
        this.originalDisplay = elementRef.nativeElement.style.display;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.style.display =
            this.router.url.includes(this.checkState) ? this.originalDisplay : 'none';
        this.eventsSubscription$ = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                console.log(this.router.url);
                if (!this.router.url.includes(this.checkState)) {
                    this.elementRef.nativeElement.style.display = 'none';
                }
                else {
                    this.elementRef.nativeElement.style.display = this.originalDisplay;
                }
            }
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.eventsSubscription$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
CheckStateDirective.ɵfac = function CheckStateDirective_Factory(t) { return new (t || CheckStateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
CheckStateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CheckStateDirective, selectors: [["", "checkState", ""]], inputs: { checkState: "checkState" } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map