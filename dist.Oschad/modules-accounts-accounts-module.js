(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-accounts-accounts-module"],{

/***/ "E1DO":
/*!*************************************************************!*\
  !*** ./src/app/modules/accounts/accounts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/account/account.component */ "x6s/");
/* harmony import */ var _views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/accounts/accounts.component */ "x0ii");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountsComponent"] },
    { path: ':bankId/:accountId', component: _views_account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"] }
];
class AccountsRoutingModule {
}
AccountsRoutingModule.ɵfac = function AccountsRoutingModule_Factory(t) { return new (t || AccountsRoutingModule)(); };
AccountsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AccountsRoutingModule });
AccountsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccountsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "GnPv":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/accounts-list/accounts-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccountsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsListComponent", function() { return AccountsListComponent; });
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/acct.actions */ "GAc8");
/* harmony import */ var _selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selectors/acct.selectors */ "mvWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-scrollbar */ "G1Gu");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _shared_directives_virtual_patch_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@shared/directives/virtual-patch.directive */ "na3P");
/* harmony import */ var _account_row_account_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../account-row/account-row.component */ "WRqx");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _shared_pipes_accounts_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@shared/pipes/accounts-filter.pipe */ "3TYl");












function AccountsListComponent_ng_container_0_ng_container_1_ng_scrollbar_1_app_account_row_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-account-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountsListComponent_ng_container_0_ng_container_1_ng_scrollbar_1_app_account_row_2_Template_app_account_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const account_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r8.toDetail(account_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("account", account_r7);
} }
function AccountsListComponent_ng_container_0_ng_container_1_ng_scrollbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-scrollbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AccountsListComponent_ng_container_0_ng_container_1_ng_scrollbar_1_app_account_row_2_Template, 1, 1, "app-account-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "accountsFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "ngrxPush");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "ngrxPush");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const accounts_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngrxLet;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 1, accounts_r1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx_r4.filter$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, ctx_r4.filterCurrency$)));
} }
function AccountsListComponent_ng_container_0_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ngx-skeleton-loader", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-skeleton-loader", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ngx-skeleton-loader", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ngx-skeleton-loader", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ngx-skeleton-loader", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ngx-skeleton-loader", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ngx-skeleton-loader", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [0, 1, 2, 3, 4, 5, 6]; };
function AccountsListComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AccountsListComponent_ng_container_0_ng_container_1_ng_container_2_div_2_Template, 19, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function AccountsListComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccountsListComponent_ng_container_0_ng_container_1_ng_scrollbar_1_Template, 6, 9, "ng-scrollbar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AccountsListComponent_ng_container_0_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const isLoading_r3 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !isLoading_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isLoading_r3);
} }
function AccountsListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccountsListComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r0.isLoadingAccounts$);
} }
class AccountsListComponent {
    constructor(store) {
        this.store = store;
        this.accounts$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__["accountsOnTabSelector"]);
        this.filter$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__["filterAccountsSelector"]);
        this.filterCurrency$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__["FilterCurrencySelector"]);
        this.isLoadingAccounts$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__["isLoadingAccountsSelector"]);
    }
    // isLoadingAccounts$ = of(true);
    ngAfterViewInit() {
    }
    toDetail(account) {
        this.store.dispatch(Object(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["goToDetail"])({ account }));
    }
}
AccountsListComponent.ɵfac = function AccountsListComponent_Factory(t) { return new (t || AccountsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AccountsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccountsListComponent, selectors: [["app-accounts-list"]], decls: 1, vars: 1, consts: [[4, "ngrxLet"], ["class", "virtual-scroll b1-page-data", 4, "ngIf"], [4, "ngIf"], [1, "virtual-scroll", "b1-page-data"], ["scrollViewport", "", "smoothScroll", "", "autosize", ""], ["class", "b1-page-data__row", 3, "account", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "b1-page-data__row", 3, "account", "click"], [1, "b1-page-data", "b1-page-data_skeleton"], ["class", "b1-page-data__row skeleton", 4, "ngFor", "ngForOf"], [1, "b1-page-data__row", "skeleton"], [1, "account-skeleton"], [1, "account-skeleton-icon"], ["animation", "pulse"], [1, "account-skeleton-body"], [1, "account-skeleton-name", "b1-ellipsis"], [1, "account-skeleton-number"], [1, "account-skeleton-date"], [1, "account-skeleton-amount"], [1, "account-skeleton-balance"], [1, "account-skeleton-turns"], [1, "account-skeleton-turns-debit"], [1, "account-skeleton-turns-credit"]], template: function AccountsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AccountsListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx.accounts$);
    } }, directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_4__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__["NgScrollbar"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualScrollViewport"], _shared_directives_virtual_patch_directive__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewportPatchDirective"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__["ScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkVirtualForOf"], _account_row_account_row_component__WEBPACK_IMPORTED_MODULE_9__["AccountRowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__["NgxSkeletonLoaderComponent"]], pipes: [_shared_pipes_accounts_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["AccountFilterPipe"], _ngrx_component__WEBPACK_IMPORTED_MODULE_4__["PushPipe"]], styles: [".b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n@media (max-width: 812px) {\n  [_nghost-%COMP%] {\n    margin-top: 16px;\n  }\n}\n  ng-scrollbar.virtual-scroll {\n  --scrollbar-size: 8px;\n  --scrollbar-thumb-color: rgba(var(--color-dark-rgb), 0.5) !important;\n  --scrollbar-thumb-hover-color: rgba(var(--color-dark-rgb), 0.8) !important;\n  --scrollbar-hover-size: 12px;\n  --scrollbar-track-color: rgba(var(--color-dark-rgb), 0.1);\n  --scrollbar-border-radius: 10px;\n}\n[_nghost-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n[_nghost-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.account-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 812px) {\n  .account-skeleton[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    align-items: flex-start;\n    padding: 8px 16px;\n    padding-bottom: 0;\n  }\n}\n.account-skeleton-body[_ngcontent-%COMP%] {\n  width: calc(100% - 100px);\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 812px) {\n  .account-skeleton-body[_ngcontent-%COMP%] {\n    width: calc(100% - 32px);\n    flex-direction: column;\n  }\n}\n.account-skeleton-icon[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  width: 24px;\n  height: 24px;\n}\n@media (max-width: 812px) {\n  .account-skeleton-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.account-skeleton-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n  margin-left: 42px;\n  width: 40%;\n}\n@media (max-width: 812px) {\n  .account-skeleton-name[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n.account-skeleton-number[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  font-family: \"Futura PT Demi\", sans-serif;\n  height: 14px;\n}\n@media (max-width: 812px) {\n  .account-skeleton-number[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.account-skeleton-date[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  font-family: \"Futura PT Demi\", sans-serif;\n  margin-left: 42px;\n  height: 14px;\n  width: 250px;\n}\n@media (max-width: 812px) {\n  .account-skeleton-date[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n    color: #999;\n    font-family: \"Futura PT Book\", sans-serif;\n  }\n}\n.account-skeleton-amount[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n@media (max-width: 812px) {\n  .account-skeleton-amount[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.account-skeleton-balance[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n  height: 24px;\n  width: 150px;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .account-skeleton-balance[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .account-skeleton-balance[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 812px) {\n  .account-skeleton-balance[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-family: \"Futura PT Demi\", sans-serif;\n    line-height: 1.25;\n    margin-top: 10px;\n  }\n}\n.account-skeleton-turns[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  font-family: \"Futura PT Book\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.account-skeleton-turns-credit[_ngcontent-%COMP%] {\n  color: #009e4f;\n  margin-left: 42px;\n  height: 14px;\n  width: 100px;\n}\n@media (max-width: 812px) {\n  .account-skeleton-turns-credit[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n.account-skeleton-turns-debit[_ngcontent-%COMP%] {\n  height: 14px;\n  color: #ff1f1f;\n  width: 100px;\n}\n@media (max-width: 812px) {\n  .account-skeleton-turns[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    display: none;\n  }\n}\n.account-skeleton-more[_ngcontent-%COMP%]   .b1-card__v-dots[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  width: 90px;\n  height: 90px;\n}\n@media (max-width: 812px) {\n  .account-skeleton-more[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHMub3NjaGFkXFxzY3NzXFxfdHlwb2dyYXBoeS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYWNjb3VudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHMub3NjaGFkXFxzY3NzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUlFO0VBakhBLGVBSmtCO0VBS2xCLHlDQUFBO0VBQ0EsY0FMeUI7QUNmM0I7QURzQkU7RUE2R0E7SUE1R0UsZUFYZTtJQVlmLGlCQVhzQjtFQ1J4QjtBQUNGO0FEcUJFO0VBd0dBO0lBdkdFLGVBbEJlO0lBbUJmLGlCQWxCc0I7RUNBeEI7QUFDRjtBRDJIRTtFQXJHQSxlQXRCaUI7RUF1QmpCLHlDQUFBO0VBQ0EsaUJBdkJ3QjtBQ0kxQjtBRHFCRTtFQWlHQTtJQWhHRSxlQTdCZTtJQThCZixpQkE3QnNCO0VDV3hCO0FBQ0Y7QURvQkU7RUE0RkE7SUEzRkUsZUFwQ2U7SUFxQ2YsaUJBcENzQjtFQ21CeEI7QUFDRjtBRDhHRTtFQXpGQSxlQXhDaUI7RUF5Q2pCLHlDQUFBO0VBQ0EsaUJBekN3QjtBQ3VCMUI7QURvQkU7RUFxRkE7SUFwRkUsZUEvQ2U7SUFnRGYsaUJBL0NzQjtFQzhCeEI7QUFDRjtBRG1CRTtFQWdGQTtJQS9FRSxlQXREYztJQXVEZCxpQkF0RHFCO0VDc0N2QjtBQUNGO0FEaUdFO0VBN0VBLGVBMURpQjtFQTJEakIseUNBQUE7RUFDQSxpQkEzRHdCO0FDMEMxQjtBRG1CRTtFQXlFQTtJQXhFRSxlQWpFYztJQWtFZCxpQkFqRXFCO0VDaUR2QjtBQUNGO0FEa0JFO0VBb0VBO0lBbkVFLGVBdEVjO0lBdUVkLGlCQXRFcUI7RUN1RHZCO0FBQ0Y7QURvRkU7RUFqRUEsZUE1RWdCO0VBNkVoQix5Q0FBQTtFQUNBLGlCQTdFdUI7QUM2RHpCO0FEa0JFO0VBNkRBO0lBNURFLGVBbkZlO0lBb0ZmLGlCQW5Gc0I7RUNvRXhCO0FBQ0Y7QURpQkU7RUF3REE7SUF2REUsZUF4RmU7SUF5RmYsaUJBeEZzQjtFQzBFeEI7QUFDRjtBRHVFRTtFQXJEQSxlQTlGaUI7RUErRmpCLHlDQUFBO0VBQ0EsaUJBL0Z3QjtBQ2dGMUI7QURzRUU7RUFuREEsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0FDdUZ4QjtBRHFFRTtFQWpEQSxlQTlHZ0I7RUErR2hCLHlDQUFBO0VBQ0EsaUJBL0d1QjtBQzhGekI7QURvRUU7RUEvQ0EsZUF0SGdCO0VBdUhoQix5Q0FBQTtFQUNBLGNBdkh1QjtFQXdIdkIseUJBQUE7QUNsQkY7QURrRUU7RUE1Q0EseUNBQUE7QUNuQkY7QURtRUU7RUE1Q0EseUNBQUE7QUNwQkY7QUR3QkU7RUFqSEEsZUFKa0I7RUFLbEIseUNBQUE7RUFDQSxjQUx5QjtBQ2tHM0I7QUQzRkU7RUE2R0E7SUE1R0UsZUFYZTtJQVlmLGlCQVhzQjtFQ3lHeEI7QUFDRjtBRDVGRTtFQXdHQTtJQXZHRSxlQWxCZTtJQW1CZixpQkFsQnNCO0VDaUh4QjtBQUNGO0FEVUU7RUFyR0EsZUF0QmlCO0VBdUJqQix5Q0FBQTtFQUNBLGlCQXZCd0I7QUNxSDFCO0FENUZFO0VBaUdBO0lBaEdFLGVBN0JlO0lBOEJmLGlCQTdCc0I7RUM0SHhCO0FBQ0Y7QUQ3RkU7RUE0RkE7SUEzRkUsZUFwQ2U7SUFxQ2YsaUJBcENzQjtFQ29JeEI7QUFDRjtBREhFO0VBekZBLGVBeENpQjtFQXlDakIseUNBQUE7RUFDQSxpQkF6Q3dCO0FDd0kxQjtBRDdGRTtFQXFGQTtJQXBGRSxlQS9DZTtJQWdEZixpQkEvQ3NCO0VDK0l4QjtBQUNGO0FEOUZFO0VBZ0ZBO0lBL0VFLGVBdERjO0lBdURkLGlCQXREcUI7RUN1SnZCO0FBQ0Y7QURoQkU7RUE3RUEsZUExRGlCO0VBMkRqQix5Q0FBQTtFQUNBLGlCQTNEd0I7QUMySjFCO0FEOUZFO0VBeUVBO0lBeEVFLGVBakVjO0lBa0VkLGlCQWpFcUI7RUNrS3ZCO0FBQ0Y7QUQvRkU7RUFvRUE7SUFuRUUsZUF0RWM7SUF1RWQsaUJBdEVxQjtFQ3dLdkI7QUFDRjtBRDdCRTtFQWpFQSxlQTVFZ0I7RUE2RWhCLHlDQUFBO0VBQ0EsaUJBN0V1QjtBQzhLekI7QUQvRkU7RUE2REE7SUE1REUsZUFuRmU7SUFvRmYsaUJBbkZzQjtFQ3FMeEI7QUFDRjtBRGhHRTtFQXdEQTtJQXZERSxlQXhGZTtJQXlGZixpQkF4RnNCO0VDMkx4QjtBQUNGO0FEMUNFO0VBckRBLGVBOUZpQjtFQStGakIseUNBQUE7RUFDQSxpQkEvRndCO0FDaU0xQjtBRDNDRTtFQW5EQSxlQXRHZTtFQXVHZix5Q0FBQTtFQUNBLGdCQXZHc0I7QUN3TXhCO0FENUNFO0VBakRBLGVBOUdnQjtFQStHaEIseUNBQUE7RUFDQSxpQkEvR3VCO0FDK016QjtBRDdDRTtFQS9DQSxlQXRIZ0I7RUF1SGhCLHlDQUFBO0VBQ0EsY0F2SHVCO0VBd0h2Qix5QkFBQTtBQytGRjtBRC9DRTtFQTVDQSx5Q0FBQTtBQzhGRjtBRDlDRTtFQTVDQSx5Q0FBQTtBQzZGRjtBQTlOQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUFpT0o7QUFoT0k7RUFKSjtJQUtRLGdCQUFBO0VBbU9OO0FBQ0Y7QUFoT0k7RUFDSSxxQkFBQTtFQUNBLG9FQUFBO0VBQ0EsMEVBQUE7RUFDQSw0QkFBQTtFQUNBLHlEQUFBO0VBQ0EsK0JBQUE7QUFtT1I7QUE5TkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFpT0o7QUFoT0k7RUFDSSxnQkFBQTtBQWtPUjtBQTlOQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaU9KO0FBaE9JO0VBTEo7SUFNUSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBbU9OO0FBQ0Y7QUFsT0k7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQW9PUjtBQW5PUTtFQUpKO0lBS1Esd0JBQUE7SUFDQSxzQkFBQTtFQXNPVjtBQUNGO0FBcE9JO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXNPUjtBQXJPUTtFQUpKO0lBS1EsYUFBQTtFQXdPVjtBQUNGO0FBck9JO0VEMENGLGVBOUZpQjtFQStGakIseUNBQUE7RUFDQSxpQkEvRndCO0VDcURsQixpQkFBQTtFQUNBLFVBQUE7QUF5T1I7QUF4T1E7RUFKSjtJQUtRLGNBQUE7SUFDQSxXQUFBO0VBMk9WO0FBQ0Y7QUF4T0k7RURzQ0YsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0VBd0h0Qix5Q0FBQTtFQ3RETSxZQUFBO0FBNE9SO0FBM09RO0VBSko7SUFLUSxhQUFBO0VBOE9WO0FBQ0Y7QUEzT0k7RUQ2QkYsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0VBd0h0Qix5Q0FBQTtFQzdDTSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBK09SO0FBOU9RO0VBTko7SUFPUSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdDM0VNO0lGc0hoQix5Q0FBQTtFQ3VNQTtBQUNGO0FBOU9JO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFnUFI7QUEvT1E7RUFOSjtJQU9RLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBa1BWO0FBQ0Y7QUFoUEk7RURyQkYsZUE1RWdCO0VBNkVoQix5Q0FBQTtFQUNBLGlCQTdFdUI7RUNrR2pCLFlBQUE7RUFDQSxZQUFBO0FBb1BSO0FEeFFFO0VDaUJFO0lEaEJBLGVBbkZlO0lBb0ZmLGlCQW5Gc0I7RUM4VnhCO0FBQ0Y7QUR6UUU7RUNZRTtJRFhBLGVBeEZlO0lBeUZmLGlCQXhGc0I7RUNvV3hCO0FBQ0Y7QUEvUFE7RUFKSjtJRExGLGVBOUZpQjtJQStGakIseUNBQUE7SUFDQSxpQkEvRndCO0lDd0dkLGdCQUFBO0VBb1FWO0FBQ0Y7QUFsUUk7RURSRixlQXRHZTtFQXVHZix5Q0FBQTtFQUNBLGdCQXZHc0I7RUE0SHRCLHlDQUFBO0VDWk0sYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFzUVI7QUFwUVE7RUFDSSxjQ3ZFSTtFRHdFSixpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBc1FaO0FBclFZO0VBTEo7SUFNUSxnQkFBQTtFQXdRZDtBQUNGO0FBdFFRO0VBQ0ksWUFBQTtFQUNBLGNDbkZFO0VEb0ZGLFlBQUE7QUF3UVo7QUFuUVE7RUF4Qko7SUF5QlEsc0JBQUE7SUFDQSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0EsYUFBQTtFQXNRVjtBQUNGO0FBblFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBcVFaO0FBblFRO0VBUko7SUFTUSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7RUFzUVY7QUFDRiIsImZpbGUiOiJhY2NvdW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2UtdW5pdDogMTY7XHJcblxyXG4kZm9udC1taWNyby1zaXplOiAxMnB4O1xyXG4kZm9udC1taWNyby1saW5lLWhlaWdodDogMTtcclxuJGZvbnQtc21hbGwtc2l6ZTogMTRweDtcclxuJGZvbnQtc21hbGwtbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiRmb250LWJhc2Utc2l6ZTogMTZweDtcclxuJGZvbnQtYmFzZS1saW5lLWhlaWdodDogMS41O1xyXG4kZm9udC1tZWRpdW0tc2l6ZTogMThweDtcclxuJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC1sYXJnZS1zaXplOiAyNHB4O1xyXG4kZm9udC1sYXJnZS1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUzLXNpemU6IDI4cHg7XHJcbiRmb250LXRpdGxlMy1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUyLXNpemU6IDM2cHg7XHJcbiRmb250LXRpdGxlMi1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUxLXNpemU6IDQ4cHg7XHJcbiRmb250LXRpdGxlMS1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtZGlzcGxheS1zaXplOiA2NHB4O1xyXG4kZm9udC1kaXNwbGF5LWxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuQG1peGluIGRpc3BsYXkge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtZGlzcGxheS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LWRpc3BsYXktbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMS1saW5lLWhlaWdodDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGl0bGUxIHtcclxuICBmb250LXNpemU6ICRmb250LXRpdGxlMS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUyLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMy1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMy1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTIge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUyLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTMtc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTMtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTMge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUzLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LWxhcmdlLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbGFyZ2UtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LW1lZGl1bS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LW1lZGl1bS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYmFzZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1iYXNlLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtYmFzZS1saW5lLWhlaWdodDtcclxufVxyXG5cclxuQG1peGluIHNtYWxsIHtcclxuICBmb250LXNpemU6ICRmb250LXNtYWxsLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtc21hbGwtbGluZS1oZWlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBtaWNybyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1taWNyby1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LW1pY3JvLWxpbmUtaGVpZ2h0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkIHtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gbGlnaHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iMSB7XHJcbiAgJi1kaXNwbGF5IHtcclxuICAgIEBpbmNsdWRlIGRpc3BsYXk7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMSB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTE7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMiB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTI7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMyB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTM7XHJcbiAgfVxyXG5cclxuICAmLWxhcmdlIHtcclxuICAgIEBpbmNsdWRlIGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgJi1tZWRpdW0ge1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgJi1iYXNlIHtcclxuICAgIEBpbmNsdWRlIGJhc2U7XHJcbiAgfVxyXG5cclxuICAmLXNtYWxsIHtcclxuICAgIEBpbmNsdWRlIHNtYWxsO1xyXG4gIH1cclxuXHJcbiAgJi1taWNybyB7XHJcbiAgICBAaW5jbHVkZSBtaWNybztcclxuICB9XHJcblxyXG4gICYtYm9sZCB7XHJcbiAgICBAaW5jbHVkZSBib2xkO1xyXG4gIH1cclxuXHJcbiAgJi1saWdodCB7XHJcbiAgICBAaW5jbHVkZSBsaWdodDtcclxuICB9XHJcbn1cclxuXHJcbiRmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4iLCIuYjEtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLWRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUxIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTIge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUzIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLWxhcmdlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS1tZWRpdW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmIxLWJhc2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uYjEtc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmIxLW1pY3JvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5iMS1ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbn1cbi5iMS1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5iMS1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLW1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5iMS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtbWljcm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmIxLWJvbGQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xufVxuLmIxLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG59XG5cbjo6bmctZGVlcCBuZy1zY3JvbGxiYXIudmlydHVhbC1zY3JvbGwge1xuICAtLXNjcm9sbGJhci1zaXplOiA4cHg7XG4gIC0tc2Nyb2xsYmFyLXRodW1iLWNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLWRhcmstcmdiKSwgMC41KSAhaW1wb3J0YW50O1xuICAtLXNjcm9sbGJhci10aHVtYi1ob3Zlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1kYXJrLXJnYiksIDAuOCkgIWltcG9ydGFudDtcbiAgLS1zY3JvbGxiYXItaG92ZXItc2l6ZTogMTJweDtcbiAgLS1zY3JvbGxiYXItdHJhY2stY29sb3I6IHJnYmEodmFyKC0tY29sb3ItZGFyay1yZ2IpLCAwLjEpO1xuICAtLXNjcm9sbGJhci1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46aG9zdCBuZ3gtc2tlbGV0b24tbG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCBuZ3gtc2tlbGV0b24tbG9hZGVyIHNwYW4ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYWNjb3VudC1za2VsZXRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24ge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuLmFjY291bnQtc2tlbGV0b24tYm9keSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tYm9keSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5hY2NvdW50LXNrZWxldG9uLWljb24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuYWNjb3VudC1za2VsZXRvbi1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYWNjb3VudC1za2VsZXRvbi1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gIHdpZHRoOiA0MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5hY2NvdW50LXNrZWxldG9uLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50LXNrZWxldG9uLW51bWJlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFjY291bnQtc2tlbGV0b24tZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50LXNrZWxldG9uLWRhdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIH1cbn1cbi5hY2NvdW50LXNrZWxldG9uLWFtb3VudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tYW1vdW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmFjY291bnQtc2tlbGV0b24tYmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tYmFsYW5jZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tYmFsYW5jZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tYmFsYW5jZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmFjY291bnQtc2tlbGV0b24tdHVybnMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYWNjb3VudC1za2VsZXRvbi10dXJucy1jcmVkaXQge1xuICBjb2xvcjogIzAwOWU0ZjtcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50LXNrZWxldG9uLXR1cm5zLWNyZWRpdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuLmFjY291bnQtc2tlbGV0b24tdHVybnMtZGViaXQge1xuICBoZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjZmYxZjFmO1xuICB3aWR0aDogMTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tdHVybnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hY2NvdW50LXNrZWxldG9uLW1vcmUgLmIxLWNhcmRfX3YtZG90czo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtc2tlbGV0b24tbW9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSIsIkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcclxuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsICRwZXJjZW50YWdlKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcclxuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50YWdlKTtcclxufVxyXG5cclxuJGNvbG9yLWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItbGlnaHQtMTAwOiAjZjJmMmYyO1xyXG4kY29sb3ItbGlnaHQtMjAwOiAjZWVlO1xyXG4kY29sb3ItbGlnaHQtMzAwOiAjZGRkO1xyXG4kY29sb3ItbGlnaHQtNDAwOiAjY2NjO1xyXG4kY29sb3ItbGlnaHQtNTAwOiAjOTk5O1xyXG5cclxuJGNvbG9yLWRhcms6ICMwMDE3MzE7XHJcbiRjb2xvci1kYXJrLTEwMDogdGludCgkY29sb3ItZGFyaywgNSUpO1xyXG4kY29sb3ItZGFyay0yMDA6IHRpbnQoJGNvbG9yLWRhcmssIDE1JSk7XHJcbiRjb2xvci1kYXJrLTMwMDogdGludCgkY29sb3ItZGFyaywgMjUlKTtcclxuJGNvbG9yLWRhcmstNDAwOiB0aW50KCRjb2xvci1kYXJrLCAyNSUpO1xyXG4kY29sb3ItZGFyay01MDA6IHRpbnQoJGNvbG9yLWRhcmssIDMwJSk7XHJcblxyXG4kY29sb3ItbGlnaHQtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4kY29sb3ItbGlnaHQtMTAwLXJnYjogMjQyLCAyNDIsIDI0MjtcclxuJGNvbG9yLWxpZ2h0LTIwMC1yZ2I6IDIzNywgMjM3LCAyMzc7XHJcbiRjb2xvci1saWdodC0zMDAtcmdiOiAyMjEsIDIyMSwgMjIxO1xyXG4kY29sb3ItbGlnaHQtNDAwLXJnYjogMjA0LCAyMDQsIDIwNDtcclxuJGNvbG9yLWxpZ2h0LTUwMC1yZ2I6IDE1MywgMTUzLCAxNTM7XHJcblxyXG4kY29sb3ItZGFyay1yZ2I6IDAsIDIzLCA0OTtcclxuJGNvbG9yLWRhcmstMTAwLXJnYjogMTMsIDM1LCA1OTtcclxuJGNvbG9yLWRhcmstMjAwLXJnYjogMjYsIDQ2LCA3MDtcclxuJGNvbG9yLWRhcmstMzAwLXJnYjogMzgsIDU4LCA4MDtcclxuJGNvbG9yLWRhcmstNDAwLXJnYjogNTEsIDY5LCA5MDtcclxuJGNvbG9yLWRhcmstNTAwLXJnYjogNjQsIDgxLCAxMDE7XHJcblxyXG4kY29sb3ItcHJpbWFyeTogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXByaW1hcnktMTAwOiB0aW50KCRjb2xvci1wcmltYXJ5LCA1JSk7XHJcbiRjb2xvci1wcmltYXJ5LTIwMDogdGludCgkY29sb3ItcHJpbWFyeSwgMTAlKTtcclxuJGNvbG9yLXByaW1hcnktMzAwOiB0aW50KCRjb2xvci1wcmltYXJ5LCAyNSUpO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeTogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXNlY29uZGFyeS0xMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgNSUpO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTIwMDogdGludCgkY29sb3Itc2Vjb25kYXJ5LCAxMCUpO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTMwMDogdGludCgkY29sb3Itc2Vjb25kYXJ5LCAyNSUpO1xyXG5cclxuJGNvbG9yLXRlcnRpYXJ5OiByZ2IoMCwgMTM1LCAxNTgpO1xyXG4kY29sb3ItdGVydGlhcnktMTAwOiB0aW50KCRjb2xvci10ZXJ0aWFyeSwgNSUpO1xyXG4kY29sb3ItdGVydGlhcnktMjAwOiB0aW50KCRjb2xvci10ZXJ0aWFyeSwgMTAlKTtcclxuJGNvbG9yLXRlcnRpYXJ5LTMwMDogdGludCgkY29sb3ItdGVydGlhcnksIDI1JSk7XHJcblxyXG4kY29sb3ItZXJyb3I6IGhzbCgwLCAxMDAlLCA1NiUpO1xyXG4kY29sb3ItaW5mbzogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXN1Y2Nlc3M6IGhzbCgxNTAsIDEwMCUsIDMxJSk7XHJcbiRjb2xvci13YXJuaW5nOiBoc2woNjIsIDkwJSwgNDQlKTtcclxuXHJcbiRjb2xvci1lcnJvci1kdDogaHNsKDAsIDkwJSwgNjElKTtcclxuJGNvbG9yLWluZm8tZHQ6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zdWNjZXNzLWR0OiBoc2woMTUwLCA5MCUsIDQxJSk7XHJcbiRjb2xvci13YXJuaW5nLWR0OiBoc2woNjIsIDgwJSwgNDklKTtcclxuXHJcbi8vICEgREVQUkVDQVRFRFxyXG5cclxuJGhlYWRpbmctZm9udDogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuJGNvbG9yLWxvYWRlci0xMDA6ICMzNDk4ZGI7XHJcbiRjb2xvci1sb2FkZXItMjAwOiAjZTc0YzNjO1xyXG4kY29sb3ItbG9hZGVyLTMwMDogI2Y5YzkyMjtcclxuXHJcbiRjb2xvci1zaWRlYmFyLTEwMDogIzZjYzE5NTtcclxuXHJcbiRjb2xvci1hbHBoYS0xMDA6ICNmZmY7XHJcbiRjb2xvci1hbHBoYS0yMDA6ICNmNGY0ZjQ7XHJcbiRjb2xvci1hbHBoYS0zMDA6ICNlZWU7XHJcbiRjb2xvci1hbHBoYS00MDA6ICNkZGQ7XHJcbiRjb2xvci1hbHBoYS01MDA6ICNjY2M7XHJcbiRjb2xvci1hbHBoYS02MDA6ICNiYmI7XHJcbiRjb2xvci1hbHBoYS03MDA6ICNhYWE7XHJcblxyXG4kY29sb3ItYmV0YS0xMDA6ICM4Y2E5ZGQ7XHJcbiRjb2xvci1iZXRhLTIwMDogIzhkYWFkZTtcclxuJGNvbG9yLWJldGEtMzAwOiAjYThjYmViO1xyXG4kY29sb3ItYmV0YS00MDA6ICM2NmFmZTk7XHJcbiRjb2xvci1iZXRhLTUwMDogIzdmYjZkNjtcclxuJGNvbG9yLWJldGEtNjAwOiAjNzI5NmRhO1xyXG4kY29sb3ItYmV0YS03MDA6ICM2NThhY2Y7XHJcbiRjb2xvci1iZXRhLTgwMDogIzNkNjliYTtcclxuJGNvbG9yLWJldGEtOTAwOiAjMDA3Mjk5O1xyXG4kY29sb3ItYmV0YS0xMjAwOiAjN2ZiNmQ2O1xyXG4kY29sb3ItYmV0YS0xMzAwOiAjM2EzZjUxO1xyXG4kY29sb3ItYmV0YS0xNDAwOiAjODljOGViO1xyXG4kY29sb3ItYmV0YS0xNTAwOiAjNzE5NmRhO1xyXG4kY29sb3ItYmV0YS0xNjAwOiAjNzc5NGQ4O1xyXG4kY29sb3ItYmV0YS0xNzAwOiAjNWY3ZmM5O1xyXG4kY29sb3ItYmV0YS0xODAwOiAjNjRiM2Q1O1xyXG4kY29sb3ItYmV0YS0xOTAwOiAjMzNhNmNjO1xyXG4kY29sb3ItYmV0YS0yMDAwOiAjNjhiNGQ2O1xyXG4kY29sb3ItYmV0YS0yMTAwOiAjNmZhYmNjO1xyXG4kY29sb3ItYmV0YS0yMjAwOiAjMDBiMWU1O1xyXG4kY29sb3ItYmV0YS0yMzAwOiAjNTdiMGUyO1xyXG4kY29sb3ItYmV0YS0yNDAwOiAjNmRiZGRlO1xyXG4kY29sb3ItYmV0YS0yNTAwOiAjOTJjMWU5O1xyXG4kY29sb3ItYmV0YS0yNjAwOiAjMjNiN2U1O1xyXG5cclxuJGNvbG9yLWJldGEtbXV0ZWQtMTAwOiAjMzQ3Mjk0O1xyXG4kY29sb3ItYmV0YS1tdXRlZC0yMDA6ICNiYTljYzU7XHJcbiRjb2xvci1iZXRhLW11dGVkLTMwMDogI2M4YjFkMDtcclxuJGNvbG9yLWJldGEtbXV0ZWQtNDAwOiAjYTI3OWIxO1xyXG4kY29sb3ItYmV0YS1tdXRlZC02MDA6ICM1ZTcxOTA7XHJcbiRjb2xvci1iZXRhLW11dGVkLTcwMDogIzU4NjY2ZTtcclxuJGNvbG9yLWJldGEtbXV0ZWQtODAwOiAjNjA0NDZiO1xyXG4kY29sb3ItYmV0YS1tdXRlZC05MDA6ICM5ZDZhYWY7XHJcbiRjb2xvci1iZXRhLW11dGVkLTEwMDA6ICNhMDc4YWY7XHJcblxyXG4kY29sb3ItcHN5LTEwMDogIzhjZGFiMjtcclxuJGNvbG9yLXBzeS0yMDA6ICM2Y2MwOTQ7XHJcbiRjb2xvci1wc3ktMzAwOiAjNmJiYmFlO1xyXG4kY29sb3ItcHN5LTQwMDogIzVmOWVhMDtcclxuJGNvbG9yLXBzeS01MDA6ICM2Y2MwOTQ7XHJcbiRjb2xvci1wc3ktNjAwOiAjNmNjMTk1O1xyXG4kY29sb3ItcHN5LTcwMDogIzZjYmQ4MztcclxuJGNvbG9yLXBzeS04MDA6ICMyN2FlNjA7XHJcbiRjb2xvci1wc3ktOTAwOiAjM2ViODc5O1xyXG4kY29sb3ItcHN5LTEwMDA6ICM1Y2EwN2Q7XHJcbiRjb2xvci1wc3ktMTIwMDogIzAwNTAzYztcclxuJGNvbG9yLXBzeS0xMzAwOiAjYjRiMmI1O1xyXG4kY29sb3ItcHN5LTE0MDA6ICM3MTZjNmM7XHJcbiRjb2xvci1wc3ktMTUwMDogIzYxYWQ4NjtcclxuJGNvbG9yLXBzeS0xNjAwOiAjMDA1MDRlO1xyXG4kY29sb3ItcHN5LTE3MDA6ICMyN2MyNGM7XHJcblxyXG4kY29sb3ItZ2FtbWEtMTAwOiAjZjU4NjhhO1xyXG4kY29sb3ItZ2FtbWEtMjAwOiAjZmM2YTcwO1xyXG4kY29sb3ItZ2FtbWEtMzAwOiAjZmY1ODVkO1xyXG4kY29sb3ItZ2FtbWEtNjAwOiAjZWQ0YjUyO1xyXG4kY29sb3ItZ2FtbWEtNzAwOiAjZmFiZmMxO1xyXG4kY29sb3ItZ2FtbWEtODAwOiAjZjA1MDUwO1xyXG4kY29sb3ItZ2FtbWEtOTAwOiAjYjcwMTA5O1xyXG4kY29sb3ItZ2FtbWEtMTAwMDogIzhiNDY0OTtcclxuJGNvbG9yLWdhbW1hLTExMDA6ICNjNWEwYmM7XHJcbiRjb2xvci1nYW1tYS0xMjAwOiAjZmEzMjNjO1xyXG5cclxuJGNvbG9yLWdhbW1hLW11dGVkLTEwMDogI2NjYWJkODtcclxuJGNvbG9yLWdhbW1hLW11dGVkLTYwMDogI2EyNzliMTtcclxuXHJcbiRjb2xvci1kZWx0YS0xMDA6ICNmZWQyYWQ7XHJcbiRjb2xvci1kZWx0YS0yMDA6ICNkY2UxMjM7XHJcbiRjb2xvci1kZWx0YS0zMDA6ICNkYmUwMjM7XHJcbiRjb2xvci1kZWx0YS00MDA6ICNkZGUwM2Q7XHJcbiRjb2xvci1kZWx0YS02MDA6ICNkYmRlM2M7XHJcbiRjb2xvci1kZWx0YS03MDA6ICNkMmRiNDY7XHJcbiRjb2xvci1kZWx0YS04MDA6ICNmZGFhNjM7XHJcbiRjb2xvci1kZWx0YS05MDA6ICNmOWIxNzg7XHJcbiRjb2xvci1kZWx0YS0xMDAwOiAjZmM2YTcwO1xyXG4kY29sb3ItZGVsdGEtMTEwMDogI2ZmZThiZjtcclxuJGNvbG9yLWRlbHRhLTEyMDA6ICNmZmNjODA7XHJcblxyXG4kY29sb3Itb21lZ2EtMTAwOiAjMDAwO1xyXG4kY29sb3Itb21lZ2EtMzAwOiAjMjIyO1xyXG4kY29sb3Itb21lZ2EtMTAwMDogIzU1NTtcclxuJGNvbG9yLW9tZWdhLTEyMDA6ICM4ODg7XHJcblxyXG4kY29sb3ItbGlnaHQtNjAwOiAjYmJiO1xyXG4kY29sb3ItbGlnaHQtNzAwOiAjYWFhO1xyXG5cclxuJGNvbG9yLWluZm8tMjAwOiAjOGRhYWRlO1xyXG4kY29sb3ItaW5mby0zMDA6ICNhOGNiZWI7XHJcbiRjb2xvci1pbmZvLTQwMDogIzY2YWZlOTtcclxuJGNvbG9yLWluZm8tNTAwOiAjN2ZiNmQ2O1xyXG4kY29sb3ItaW5mby02MDA6ICM3MTk2ZGE7XHJcbiRjb2xvci1pbmZvLTcwMDogIzY1OGFjZjtcclxuJGNvbG9yLWluZm8tODAwOiAjM2Q2OWJhO1xyXG4kY29sb3ItaW5mby05MDA6ICMwMDcyOTk7XHJcbiRjb2xvci1pbmZvLTEyMDA6ICMzYTNmNTE7XHJcblxyXG4kY29sb3ItaW5mby1tdXRlZC0yMDA6ICNiYTljYzU7XHJcbiRjb2xvci1pbmZvLW11dGVkLTYwMDogIzVlNzE5MDtcclxuJGNvbG9yLWluZm8tbXV0ZWQtODAwOiAjNjA0NDZiO1xyXG5cclxuJGNvbG9yLXN1Y2Nlc3MtMTAwOiAjOGNkYWIyO1xyXG4kY29sb3Itc3VjY2Vzcy0yMDA6ICM2Y2MwOTQ7XHJcbiRjb2xvci1zdWNjZXNzLTMwMDogIzZiYmJhZTtcclxuJGNvbG9yLXN1Y2Nlc3MtNDAwOiAjNWY5ZWEwO1xyXG4kY29sb3Itc3VjY2Vzcy02MDA6ICM2Y2MxOTU7XHJcbiRjb2xvci1zdWNjZXNzLTcwMDogIzZjYmQ4MztcclxuJGNvbG9yLXN1Y2Nlc3MtODAwOiAjMjdhZTYwO1xyXG4kY29sb3Itc3VjY2Vzcy0xMDAwOiAjNWNhMDdkO1xyXG4kY29sb3Itc3VjY2Vzcy0xMjAwOiAjMDA1MDNjO1xyXG5cclxuJGNvbG9yLWVycm9yLTEwMDogI2Y1ODY4YTtcclxuJGNvbG9yLWVycm9yLTIwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWVycm9yLTMwMDogI2ZmNTg1ZDtcclxuJGNvbG9yLWVycm9yLTYwMDogI2VkNGI1MjtcclxuJGNvbG9yLWVycm9yLTcwMDogI2ZhYmZjMTtcclxuJGNvbG9yLWVycm9yLTgwMDogI2YwNTA1MDtcclxuJGNvbG9yLWVycm9yLTkwMDogI2I3MDEwOTtcclxuJGNvbG9yLWVycm9yLTEwMDA6ICM4YjQ2NDk7XHJcbiRjb2xvci1lcnJvci0xMTAwOiAjYzVhMGJjO1xyXG4kY29sb3ItZXJyb3ItMTIwMDogI2ZhMzIzYztcclxuXHJcbiRjb2xvci1lcnJvci1tdXRlZC02MDA6ICNhMjc5YjE7XHJcblxyXG4kY29sb3Itd2FybmluZy0xMDA6ICNmZWQyYWQ7XHJcbiRjb2xvci13YXJuaW5nLTIwMDogI2RjZTEyMztcclxuJGNvbG9yLXdhcm5pbmctMzAwOiAjZGJlMDIzO1xyXG4kY29sb3Itd2FybmluZy00MDA6ICNkZGUwM2Q7XHJcbiRjb2xvci13YXJuaW5nLTYwMDogI2RiZGUzYztcclxuJGNvbG9yLXdhcm5pbmctNzAwOiAjZDJkYjQ2O1xyXG4kY29sb3Itd2FybmluZy04MDA6ICNmZGFhNjM7XHJcbiRjb2xvci13YXJuaW5nLTkwMDogI2Y5YjE3ODtcclxuJGNvbG9yLXdhcm5pbmctMTAwMDogI2ZjNmE3MDtcclxuJGNvbG9yLXdhcm5pbmctMTEwMDogI2ZmZThiZjtcclxuXHJcbiRjb2xvci1kYXJrLTEwMDA6ICM1NTU7XHJcbiRjb2xvci1kYXJrLTEyMDA6ICM4ODg7XHJcbiRjb2xvci1yZXNvdXJjZTogIzAwMTczMTtcclxuJGxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDkwLjAzZGVnLCAjMTU2ZDgxIDAuMzYlLCAjMzZhYmM1IDk5Ljk4JSk7XHJcbiRsaW5lYXItZ3JhZGllbnQtbGlnaHQ6IGxpbmVhci1ncmFkaWVudCg5MC4wM2RlZywgcmdiYSgjMTU2ZDgxLCAwLjEpIDAuMzYlLCByZ2JhKCMzNmFiYzUsIDAuMSkgOTkuOTglKTtcclxuIl19 */"] });


/***/ }),

/***/ "I89L":
/*!*****************************************************!*\
  !*** ./src/app/modules/accounts/accounts.module.ts ***!
  \*****************************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/shared.module */ "pk6O");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts-routing.module */ "E1DO");
/* harmony import */ var _views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/accounts/accounts.component */ "x0ii");
/* harmony import */ var _components_accounts_header_accounts_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accounts-header/accounts-header.component */ "umgc");
/* harmony import */ var _components_accounts_tabs_accounts_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/accounts-tabs/accounts-tabs.component */ "TNsa");
/* harmony import */ var _components_accounts_actions_accounts_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/accounts-actions/accounts-actions.component */ "tqVM");
/* harmony import */ var _components_accounts_list_accounts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accounts-list/accounts-list.component */ "GnPv");
/* harmony import */ var _components_account_row_account_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/account-row/account-row.component */ "WRqx");
/* harmony import */ var _components_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account-header/account-header.component */ "XciD");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/account/account.component */ "x6s/");
/* harmony import */ var _components_account_card_account_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/account-card/account-card.component */ "NWW/");
/* harmony import */ var _components_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/account-details/account-details.component */ "w7hj");
/* harmony import */ var _components_account_edit_modal_account_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/account-edit-modal/account-edit-modal.component */ "r6jU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AccountsModule {
}
AccountsModule.ɵfac = function AccountsModule_Factory(t) { return new (t || AccountsModule)(); };
AccountsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AccountsModule });
AccountsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"],
            _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AccountsModule, { declarations: [_views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__["AccountsComponent"],
        _components_accounts_header_accounts_header_component__WEBPACK_IMPORTED_MODULE_5__["AccountsHeaderComponent"],
        _components_accounts_tabs_accounts_tabs_component__WEBPACK_IMPORTED_MODULE_6__["AccountsTabsComponent"],
        _components_accounts_actions_accounts_actions_component__WEBPACK_IMPORTED_MODULE_7__["AccountsActionsComponent"],
        _components_accounts_list_accounts_list_component__WEBPACK_IMPORTED_MODULE_8__["AccountsListComponent"],
        _components_account_row_account_row_component__WEBPACK_IMPORTED_MODULE_9__["AccountRowComponent"],
        _components_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_10__["AccountHeaderComponent"],
        _views_account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
        _components_account_card_account_card_component__WEBPACK_IMPORTED_MODULE_12__["AccountCardComponent"],
        _components_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_13__["AccountDetailsComponent"],
        _components_account_edit_modal_account_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["AccountEditModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"],
        _ngrx_component__WEBPACK_IMPORTED_MODULE_1__["ReactiveComponentModule"]] }); })();


/***/ }),

/***/ "NWW/":
/*!************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/account-card/account-card.component.ts ***!
  \************************************************************************************/
/*! exports provided: AccountCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCardComponent", function() { return AccountCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-details/account-details.component */ "w7hj");


class AccountCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountCardComponent.ɵfac = function AccountCardComponent_Factory(t) { return new (t || AccountCardComponent)(); };
AccountCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountCardComponent, selectors: [["app-account-card"]], decls: 3, vars: 0, consts: [[1, "b1-full-data"], [1, "b1-page-card", "b1-bg-light"]], template: function AccountCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-account-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_1__["AccountDetailsComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjY291bnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUFDSiIsImZpbGUiOiJhY2NvdW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "TNsa":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/accounts-tabs/accounts-tabs.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccountsTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsTabsComponent", function() { return AccountsTabsComponent; });
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/acct.actions */ "GAc8");
/* harmony import */ var _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/accounts/models/acct-tab.enum */ "Vc2e");
/* harmony import */ var _selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @selectors/acct.selectors */ "mvWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@shared/directives/b1-icon.directive */ "SYr6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngrx_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngrx-forms */ "atpF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const countActiveAccounts_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "components.acct.active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bounce-in", countActiveAccounts_r3 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](countActiveAccounts_r3);
} }
function AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const countClosedAccounts_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "components.acct.closed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bounce-in", countClosedAccounts_r5 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](countClosedAccounts_r5);
} }
function AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r11.setTab(ctx_r11.accountTab.Active); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r13.setTab(ctx_r13.accountTab.Closed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_div_17_Template, 6, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_div_18_Template, 6, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_Template_select_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r14.selectTab(_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const countClosedAccounts_r5 = ctx.ngrxLet;
    const countActiveAccounts_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngrxLet;
    const currentTab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngrxLet;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", currentTab_r1 == ctx_r4.accountTab.Active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 20, "components.acct.active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bounce-in", countActiveAccounts_r3 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](countActiveAccounts_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", currentTab_r1 == ctx_r4.accountTab.Closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 22, "components.acct.closed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bounce-in", countClosedAccounts_r5 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](countClosedAccounts_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", currentTab_r1 == ctx_r4.accountTab.Active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", currentTab_r1 == ctx_r4.accountTab.Closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.accountTab.Active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 24, "components.acct.active"), " (", countActiveAccounts_r3, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.accountTab.Closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 26, "components.acct.closed"), " (", countClosedAccounts_r5, ") ");
} }
function AccountsTabsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountsTabsComponent_ng_container_0_ng_container_1_ng_container_1_Template, 28, 28, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx_r2.countClosedAccounts$);
} }
function AccountsTabsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountsTabsComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx_r0.countActiveAccounts$);
} }
class AccountsTabsComponent {
    constructor(store) {
        this.store = store;
        this.accountTab = _modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_1__["AccountTab"];
        this.countActiveAccounts$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["countActiveAccountsSelector"]);
        this.countClosedAccounts$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["countClosedAccountsSelector"]);
        this.currentTab$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_2__["currentTabSelector"]);
    }
    ngOnInit() {
        this.setTab(_modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_1__["AccountTab"].Active);
    }
    setTab(tab) {
        this.store.dispatch(Object(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setTab"])({ tab }));
    }
    selectTab(tabString) {
        const tab = tabString;
        this.setTab(_modules_accounts_models_acct_tab_enum__WEBPACK_IMPORTED_MODULE_1__["AccountTab"][tab]);
    }
}
AccountsTabsComponent.ɵfac = function AccountsTabsComponent_Factory(t) { return new (t || AccountsTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AccountsTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountsTabsComponent, selectors: [["app-accounts-tabs"]], decls: 1, vars: 1, consts: [[4, "ngrxLet"], [1, "b1-page-tabs", "b1-base", "b1-bold", "accounts-tabs"], [1, "b1-page-tabs__item"], [1, "b1-filter-block__link", 3, "click"], [1, "b1-mr-2"], [1, "b1-page-badge", "b1-page-badge__success"], [1, "b1-page-badge", "b1-page-badge__error"], [1, "accounts-tabs-mobile"], [4, "ngIf"], ["b1-icon", "", "icon", "chevron-down", 1, "b1-color-primary", "accounts-tabs-list_chevron"], ["name", "tabs", "id", "tabs", 1, "accounts-tabs-list", 3, "change"], ["selectList", ""], [3, "value"], [1, "b1-page-badge"]], template: function AccountsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AccountsTabsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngrxLet", ctx.currentTab$);
    } }, directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_7__["B1IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"], ngrx_forms__WEBPACK_IMPORTED_MODULE_9__["NgrxSelectMultipleOption"], ngrx_forms__WEBPACK_IMPORTED_MODULE_9__["NgrxSelectOption"], ngrx_forms__WEBPACK_IMPORTED_MODULE_9__["NgrxFallbackSelectOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n@media (max-width: 812px) {\n  .accounts-tabs[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.accounts-tabs-mobile[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 24px;\n  left: 16px;\n  background: rgba(0, 135, 158, 0.2);\n  border-radius: 8px;\n  width: calc(100% - 32px);\n  height: 40px;\n  outline: none;\n  border: none;\n  color: #00879e;\n  text-align: center;\n}\n@media (max-width: 812px) {\n  .accounts-tabs-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.accounts-tabs-list[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.accounts-tabs-list_chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 16px;\n  font-size: 14px;\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHMub3NjaGFkXFxzY3NzXFxfdHlwb2dyYXBoeS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYWNjb3VudHMtdGFicy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHMub3NjaGFkXFxzY3NzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUlFO0VBakhBLGVBSmtCO0VBS2xCLHlDQUFBO0VBQ0EsY0FMeUI7QUNmM0I7QURzQkU7RUE2R0E7SUE1R0UsZUFYZTtJQVlmLGlCQVhzQjtFQ1J4QjtBQUNGO0FEcUJFO0VBd0dBO0lBdkdFLGVBbEJlO0lBbUJmLGlCQWxCc0I7RUNBeEI7QUFDRjtBRDJIRTtFQXJHQSxlQXRCaUI7RUF1QmpCLHlDQUFBO0VBQ0EsaUJBdkJ3QjtBQ0kxQjtBRHFCRTtFQWlHQTtJQWhHRSxlQTdCZTtJQThCZixpQkE3QnNCO0VDV3hCO0FBQ0Y7QURvQkU7RUE0RkE7SUEzRkUsZUFwQ2U7SUFxQ2YsaUJBcENzQjtFQ21CeEI7QUFDRjtBRDhHRTtFQXpGQSxlQXhDaUI7RUF5Q2pCLHlDQUFBO0VBQ0EsaUJBekN3QjtBQ3VCMUI7QURvQkU7RUFxRkE7SUFwRkUsZUEvQ2U7SUFnRGYsaUJBL0NzQjtFQzhCeEI7QUFDRjtBRG1CRTtFQWdGQTtJQS9FRSxlQXREYztJQXVEZCxpQkF0RHFCO0VDc0N2QjtBQUNGO0FEaUdFO0VBN0VBLGVBMURpQjtFQTJEakIseUNBQUE7RUFDQSxpQkEzRHdCO0FDMEMxQjtBRG1CRTtFQXlFQTtJQXhFRSxlQWpFYztJQWtFZCxpQkFqRXFCO0VDaUR2QjtBQUNGO0FEa0JFO0VBb0VBO0lBbkVFLGVBdEVjO0lBdUVkLGlCQXRFcUI7RUN1RHZCO0FBQ0Y7QURvRkU7RUFqRUEsZUE1RWdCO0VBNkVoQix5Q0FBQTtFQUNBLGlCQTdFdUI7QUM2RHpCO0FEa0JFO0VBNkRBO0lBNURFLGVBbkZlO0lBb0ZmLGlCQW5Gc0I7RUNvRXhCO0FBQ0Y7QURpQkU7RUF3REE7SUF2REUsZUF4RmU7SUF5RmYsaUJBeEZzQjtFQzBFeEI7QUFDRjtBRHVFRTtFQXJEQSxlQTlGaUI7RUErRmpCLHlDQUFBO0VBQ0EsaUJBL0Z3QjtBQ2dGMUI7QURzRUU7RUFuREEsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0FDdUZ4QjtBRHFFRTtFQWpEQSxlQTlHZ0I7RUErR2hCLHlDQUFBO0VBQ0EsaUJBL0d1QjtBQzhGekI7QURvRUU7RUEvQ0EsZUF0SGdCO0VBdUhoQix5Q0FBQTtFQUNBLGNBdkh1QjtFQXdIdkIseUJBQUE7QUNsQkY7QURrRUU7RUE1Q0EseUNBQUE7QUNuQkY7QURtRUU7RUE1Q0EseUNBQUE7QUNwQkY7QUR3QkU7RUFqSEEsZUFKa0I7RUFLbEIseUNBQUE7RUFDQSxjQUx5QjtBQ2tHM0I7QUQzRkU7RUE2R0E7SUE1R0UsZUFYZTtJQVlmLGlCQVhzQjtFQ3lHeEI7QUFDRjtBRDVGRTtFQXdHQTtJQXZHRSxlQWxCZTtJQW1CZixpQkFsQnNCO0VDaUh4QjtBQUNGO0FEVUU7RUFyR0EsZUF0QmlCO0VBdUJqQix5Q0FBQTtFQUNBLGlCQXZCd0I7QUNxSDFCO0FENUZFO0VBaUdBO0lBaEdFLGVBN0JlO0lBOEJmLGlCQTdCc0I7RUM0SHhCO0FBQ0Y7QUQ3RkU7RUE0RkE7SUEzRkUsZUFwQ2U7SUFxQ2YsaUJBcENzQjtFQ29JeEI7QUFDRjtBREhFO0VBekZBLGVBeENpQjtFQXlDakIseUNBQUE7RUFDQSxpQkF6Q3dCO0FDd0kxQjtBRDdGRTtFQXFGQTtJQXBGRSxlQS9DZTtJQWdEZixpQkEvQ3NCO0VDK0l4QjtBQUNGO0FEOUZFO0VBZ0ZBO0lBL0VFLGVBdERjO0lBdURkLGlCQXREcUI7RUN1SnZCO0FBQ0Y7QURoQkU7RUE3RUEsZUExRGlCO0VBMkRqQix5Q0FBQTtFQUNBLGlCQTNEd0I7QUMySjFCO0FEOUZFO0VBeUVBO0lBeEVFLGVBakVjO0lBa0VkLGlCQWpFcUI7RUNrS3ZCO0FBQ0Y7QUQvRkU7RUFvRUE7SUFuRUUsZUF0RWM7SUF1RWQsaUJBdEVxQjtFQ3dLdkI7QUFDRjtBRDdCRTtFQWpFQSxlQTVFZ0I7RUE2RWhCLHlDQUFBO0VBQ0EsaUJBN0V1QjtBQzhLekI7QUQvRkU7RUE2REE7SUE1REUsZUFuRmU7SUFvRmYsaUJBbkZzQjtFQ3FMeEI7QUFDRjtBRGhHRTtFQXdEQTtJQXZERSxlQXhGZTtJQXlGZixpQkF4RnNCO0VDMkx4QjtBQUNGO0FEMUNFO0VBckRBLGVBOUZpQjtFQStGakIseUNBQUE7RUFDQSxpQkEvRndCO0FDaU0xQjtBRDNDRTtFQW5EQSxlQXRHZTtFQXVHZix5Q0FBQTtFQUNBLGdCQXZHc0I7QUN3TXhCO0FENUNFO0VBakRBLGVBOUdnQjtFQStHaEIseUNBQUE7RUFDQSxpQkEvR3VCO0FDK016QjtBRDdDRTtFQS9DQSxlQXRIZ0I7RUF1SGhCLHlDQUFBO0VBQ0EsY0F2SHVCO0VBd0h2Qix5QkFBQTtBQytGRjtBRC9DRTtFQTVDQSx5Q0FBQTtBQzhGRjtBRDlDRTtFQTVDQSx5Q0FBQTtBQzZGRjtBQTlOSTtFQURKO0lBRVEsYUFBQTtFQWtPTjtBQUNGO0FBak9JO0VBQ0ksYUFBQTtFQU1BLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQ2VRO0VEZFIsa0JBQUE7QUE4TlI7QUE3T1E7RUFGSjtJQUdRLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBZ1BWO0FBQ0Y7QUFuT0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBcU9SO0FBcE9RO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXNPWjtBQWxPQTtFQUNJLGFBQUE7QUFxT0o7QUFuT0E7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXNPSiIsImZpbGUiOiJhY2NvdW50cy10YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2UtdW5pdDogMTY7XHJcblxyXG4kZm9udC1taWNyby1zaXplOiAxMnB4O1xyXG4kZm9udC1taWNyby1saW5lLWhlaWdodDogMTtcclxuJGZvbnQtc21hbGwtc2l6ZTogMTRweDtcclxuJGZvbnQtc21hbGwtbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiRmb250LWJhc2Utc2l6ZTogMTZweDtcclxuJGZvbnQtYmFzZS1saW5lLWhlaWdodDogMS41O1xyXG4kZm9udC1tZWRpdW0tc2l6ZTogMThweDtcclxuJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC1sYXJnZS1zaXplOiAyNHB4O1xyXG4kZm9udC1sYXJnZS1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUzLXNpemU6IDI4cHg7XHJcbiRmb250LXRpdGxlMy1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUyLXNpemU6IDM2cHg7XHJcbiRmb250LXRpdGxlMi1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUxLXNpemU6IDQ4cHg7XHJcbiRmb250LXRpdGxlMS1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtZGlzcGxheS1zaXplOiA2NHB4O1xyXG4kZm9udC1kaXNwbGF5LWxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuQG1peGluIGRpc3BsYXkge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtZGlzcGxheS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LWRpc3BsYXktbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMS1saW5lLWhlaWdodDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGl0bGUxIHtcclxuICBmb250LXNpemU6ICRmb250LXRpdGxlMS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUyLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMy1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMy1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTIge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUyLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTMtc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTMtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTMge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUzLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LWxhcmdlLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbGFyZ2UtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LW1lZGl1bS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LW1lZGl1bS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYmFzZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1iYXNlLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtYmFzZS1saW5lLWhlaWdodDtcclxufVxyXG5cclxuQG1peGluIHNtYWxsIHtcclxuICBmb250LXNpemU6ICRmb250LXNtYWxsLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtc21hbGwtbGluZS1oZWlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBtaWNybyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1taWNyby1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LW1pY3JvLWxpbmUtaGVpZ2h0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkIHtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gbGlnaHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iMSB7XHJcbiAgJi1kaXNwbGF5IHtcclxuICAgIEBpbmNsdWRlIGRpc3BsYXk7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMSB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTE7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMiB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTI7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMyB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTM7XHJcbiAgfVxyXG5cclxuICAmLWxhcmdlIHtcclxuICAgIEBpbmNsdWRlIGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgJi1tZWRpdW0ge1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgJi1iYXNlIHtcclxuICAgIEBpbmNsdWRlIGJhc2U7XHJcbiAgfVxyXG5cclxuICAmLXNtYWxsIHtcclxuICAgIEBpbmNsdWRlIHNtYWxsO1xyXG4gIH1cclxuXHJcbiAgJi1taWNybyB7XHJcbiAgICBAaW5jbHVkZSBtaWNybztcclxuICB9XHJcblxyXG4gICYtYm9sZCB7XHJcbiAgICBAaW5jbHVkZSBib2xkO1xyXG4gIH1cclxuXHJcbiAgJi1saWdodCB7XHJcbiAgICBAaW5jbHVkZSBsaWdodDtcclxuICB9XHJcbn1cclxuXHJcbiRmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4iLCIuYjEtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLWRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUxIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTIge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUzIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLWxhcmdlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS1tZWRpdW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmIxLWJhc2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uYjEtc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmIxLW1pY3JvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5iMS1ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbn1cbi5iMS1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5iMS1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLW1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5iMS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtbWljcm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmIxLWJvbGQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xufVxuLmIxLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50cy10YWJzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYWNjb3VudHMtdGFicy1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMzUsIDE1OCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gIGhlaWdodDogNDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzAwODc5ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50cy10YWJzLW1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4uYWNjb3VudHMtdGFicy1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmFjY291bnRzLXRhYnMtbGlzdF9jaGV2cm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICByaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgdGV4dC1pbmRlbnQ6IDFweDtcbiAgdGV4dC1vdmVyZmxvdzogXCJcIjtcbn0iLCJAZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XHJcbn1cclxuXHJcbiRjb2xvci1saWdodDogI2ZmZjtcclxuJGNvbG9yLWxpZ2h0LTEwMDogI2YyZjJmMjtcclxuJGNvbG9yLWxpZ2h0LTIwMDogI2VlZTtcclxuJGNvbG9yLWxpZ2h0LTMwMDogI2RkZDtcclxuJGNvbG9yLWxpZ2h0LTQwMDogI2NjYztcclxuJGNvbG9yLWxpZ2h0LTUwMDogIzk5OTtcclxuXHJcbiRjb2xvci1kYXJrOiAjMDAxNzMxO1xyXG4kY29sb3ItZGFyay0xMDA6IHRpbnQoJGNvbG9yLWRhcmssIDUlKTtcclxuJGNvbG9yLWRhcmstMjAwOiB0aW50KCRjb2xvci1kYXJrLCAxNSUpO1xyXG4kY29sb3ItZGFyay0zMDA6IHRpbnQoJGNvbG9yLWRhcmssIDI1JSk7XHJcbiRjb2xvci1kYXJrLTQwMDogdGludCgkY29sb3ItZGFyaywgMjUlKTtcclxuJGNvbG9yLWRhcmstNTAwOiB0aW50KCRjb2xvci1kYXJrLCAzMCUpO1xyXG5cclxuJGNvbG9yLWxpZ2h0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuJGNvbG9yLWxpZ2h0LTEwMC1yZ2I6IDI0MiwgMjQyLCAyNDI7XHJcbiRjb2xvci1saWdodC0yMDAtcmdiOiAyMzcsIDIzNywgMjM3O1xyXG4kY29sb3ItbGlnaHQtMzAwLXJnYjogMjIxLCAyMjEsIDIyMTtcclxuJGNvbG9yLWxpZ2h0LTQwMC1yZ2I6IDIwNCwgMjA0LCAyMDQ7XHJcbiRjb2xvci1saWdodC01MDAtcmdiOiAxNTMsIDE1MywgMTUzO1xyXG5cclxuJGNvbG9yLWRhcmstcmdiOiAwLCAyMywgNDk7XHJcbiRjb2xvci1kYXJrLTEwMC1yZ2I6IDEzLCAzNSwgNTk7XHJcbiRjb2xvci1kYXJrLTIwMC1yZ2I6IDI2LCA0NiwgNzA7XHJcbiRjb2xvci1kYXJrLTMwMC1yZ2I6IDM4LCA1OCwgODA7XHJcbiRjb2xvci1kYXJrLTQwMC1yZ2I6IDUxLCA2OSwgOTA7XHJcbiRjb2xvci1kYXJrLTUwMC1yZ2I6IDY0LCA4MSwgMTAxO1xyXG5cclxuJGNvbG9yLXByaW1hcnk6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1wcmltYXJ5LTEwMDogdGludCgkY29sb3ItcHJpbWFyeSwgNSUpO1xyXG4kY29sb3ItcHJpbWFyeS0yMDA6IHRpbnQoJGNvbG9yLXByaW1hcnksIDEwJSk7XHJcbiRjb2xvci1wcmltYXJ5LTMwMDogdGludCgkY29sb3ItcHJpbWFyeSwgMjUlKTtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zZWNvbmRhcnktMTAwOiB0aW50KCRjb2xvci1zZWNvbmRhcnksIDUlKTtcclxuJGNvbG9yLXNlY29uZGFyeS0yMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgMTAlKTtcclxuJGNvbG9yLXNlY29uZGFyeS0zMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgMjUlKTtcclxuXHJcbiRjb2xvci10ZXJ0aWFyeTogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXRlcnRpYXJ5LTEwMDogdGludCgkY29sb3ItdGVydGlhcnksIDUlKTtcclxuJGNvbG9yLXRlcnRpYXJ5LTIwMDogdGludCgkY29sb3ItdGVydGlhcnksIDEwJSk7XHJcbiRjb2xvci10ZXJ0aWFyeS0zMDA6IHRpbnQoJGNvbG9yLXRlcnRpYXJ5LCAyNSUpO1xyXG5cclxuJGNvbG9yLWVycm9yOiBoc2woMCwgMTAwJSwgNTYlKTtcclxuJGNvbG9yLWluZm86IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zdWNjZXNzOiBoc2woMTUwLCAxMDAlLCAzMSUpO1xyXG4kY29sb3Itd2FybmluZzogaHNsKDYyLCA5MCUsIDQ0JSk7XHJcblxyXG4kY29sb3ItZXJyb3ItZHQ6IGhzbCgwLCA5MCUsIDYxJSk7XHJcbiRjb2xvci1pbmZvLWR0OiByZ2IoMCwgMTM1LCAxNTgpO1xyXG4kY29sb3Itc3VjY2Vzcy1kdDogaHNsKDE1MCwgOTAlLCA0MSUpO1xyXG4kY29sb3Itd2FybmluZy1kdDogaHNsKDYyLCA4MCUsIDQ5JSk7XHJcblxyXG4vLyAhIERFUFJFQ0FURURcclxuXHJcbiRoZWFkaW5nLWZvbnQ6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiRjb2xvci1sb2FkZXItMTAwOiAjMzQ5OGRiO1xyXG4kY29sb3ItbG9hZGVyLTIwMDogI2U3NGMzYztcclxuJGNvbG9yLWxvYWRlci0zMDA6ICNmOWM5MjI7XHJcblxyXG4kY29sb3Itc2lkZWJhci0xMDA6ICM2Y2MxOTU7XHJcblxyXG4kY29sb3ItYWxwaGEtMTAwOiAjZmZmO1xyXG4kY29sb3ItYWxwaGEtMjAwOiAjZjRmNGY0O1xyXG4kY29sb3ItYWxwaGEtMzAwOiAjZWVlO1xyXG4kY29sb3ItYWxwaGEtNDAwOiAjZGRkO1xyXG4kY29sb3ItYWxwaGEtNTAwOiAjY2NjO1xyXG4kY29sb3ItYWxwaGEtNjAwOiAjYmJiO1xyXG4kY29sb3ItYWxwaGEtNzAwOiAjYWFhO1xyXG5cclxuJGNvbG9yLWJldGEtMTAwOiAjOGNhOWRkO1xyXG4kY29sb3ItYmV0YS0yMDA6ICM4ZGFhZGU7XHJcbiRjb2xvci1iZXRhLTMwMDogI2E4Y2JlYjtcclxuJGNvbG9yLWJldGEtNDAwOiAjNjZhZmU5O1xyXG4kY29sb3ItYmV0YS01MDA6ICM3ZmI2ZDY7XHJcbiRjb2xvci1iZXRhLTYwMDogIzcyOTZkYTtcclxuJGNvbG9yLWJldGEtNzAwOiAjNjU4YWNmO1xyXG4kY29sb3ItYmV0YS04MDA6ICMzZDY5YmE7XHJcbiRjb2xvci1iZXRhLTkwMDogIzAwNzI5OTtcclxuJGNvbG9yLWJldGEtMTIwMDogIzdmYjZkNjtcclxuJGNvbG9yLWJldGEtMTMwMDogIzNhM2Y1MTtcclxuJGNvbG9yLWJldGEtMTQwMDogIzg5YzhlYjtcclxuJGNvbG9yLWJldGEtMTUwMDogIzcxOTZkYTtcclxuJGNvbG9yLWJldGEtMTYwMDogIzc3OTRkODtcclxuJGNvbG9yLWJldGEtMTcwMDogIzVmN2ZjOTtcclxuJGNvbG9yLWJldGEtMTgwMDogIzY0YjNkNTtcclxuJGNvbG9yLWJldGEtMTkwMDogIzMzYTZjYztcclxuJGNvbG9yLWJldGEtMjAwMDogIzY4YjRkNjtcclxuJGNvbG9yLWJldGEtMjEwMDogIzZmYWJjYztcclxuJGNvbG9yLWJldGEtMjIwMDogIzAwYjFlNTtcclxuJGNvbG9yLWJldGEtMjMwMDogIzU3YjBlMjtcclxuJGNvbG9yLWJldGEtMjQwMDogIzZkYmRkZTtcclxuJGNvbG9yLWJldGEtMjUwMDogIzkyYzFlOTtcclxuJGNvbG9yLWJldGEtMjYwMDogIzIzYjdlNTtcclxuXHJcbiRjb2xvci1iZXRhLW11dGVkLTEwMDogIzM0NzI5NDtcclxuJGNvbG9yLWJldGEtbXV0ZWQtMjAwOiAjYmE5Y2M1O1xyXG4kY29sb3ItYmV0YS1tdXRlZC0zMDA6ICNjOGIxZDA7XHJcbiRjb2xvci1iZXRhLW11dGVkLTQwMDogI2EyNzliMTtcclxuJGNvbG9yLWJldGEtbXV0ZWQtNjAwOiAjNWU3MTkwO1xyXG4kY29sb3ItYmV0YS1tdXRlZC03MDA6ICM1ODY2NmU7XHJcbiRjb2xvci1iZXRhLW11dGVkLTgwMDogIzYwNDQ2YjtcclxuJGNvbG9yLWJldGEtbXV0ZWQtOTAwOiAjOWQ2YWFmO1xyXG4kY29sb3ItYmV0YS1tdXRlZC0xMDAwOiAjYTA3OGFmO1xyXG5cclxuJGNvbG9yLXBzeS0xMDA6ICM4Y2RhYjI7XHJcbiRjb2xvci1wc3ktMjAwOiAjNmNjMDk0O1xyXG4kY29sb3ItcHN5LTMwMDogIzZiYmJhZTtcclxuJGNvbG9yLXBzeS00MDA6ICM1ZjllYTA7XHJcbiRjb2xvci1wc3ktNTAwOiAjNmNjMDk0O1xyXG4kY29sb3ItcHN5LTYwMDogIzZjYzE5NTtcclxuJGNvbG9yLXBzeS03MDA6ICM2Y2JkODM7XHJcbiRjb2xvci1wc3ktODAwOiAjMjdhZTYwO1xyXG4kY29sb3ItcHN5LTkwMDogIzNlYjg3OTtcclxuJGNvbG9yLXBzeS0xMDAwOiAjNWNhMDdkO1xyXG4kY29sb3ItcHN5LTEyMDA6ICMwMDUwM2M7XHJcbiRjb2xvci1wc3ktMTMwMDogI2I0YjJiNTtcclxuJGNvbG9yLXBzeS0xNDAwOiAjNzE2YzZjO1xyXG4kY29sb3ItcHN5LTE1MDA6ICM2MWFkODY7XHJcbiRjb2xvci1wc3ktMTYwMDogIzAwNTA0ZTtcclxuJGNvbG9yLXBzeS0xNzAwOiAjMjdjMjRjO1xyXG5cclxuJGNvbG9yLWdhbW1hLTEwMDogI2Y1ODY4YTtcclxuJGNvbG9yLWdhbW1hLTIwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWdhbW1hLTMwMDogI2ZmNTg1ZDtcclxuJGNvbG9yLWdhbW1hLTYwMDogI2VkNGI1MjtcclxuJGNvbG9yLWdhbW1hLTcwMDogI2ZhYmZjMTtcclxuJGNvbG9yLWdhbW1hLTgwMDogI2YwNTA1MDtcclxuJGNvbG9yLWdhbW1hLTkwMDogI2I3MDEwOTtcclxuJGNvbG9yLWdhbW1hLTEwMDA6ICM4YjQ2NDk7XHJcbiRjb2xvci1nYW1tYS0xMTAwOiAjYzVhMGJjO1xyXG4kY29sb3ItZ2FtbWEtMTIwMDogI2ZhMzIzYztcclxuXHJcbiRjb2xvci1nYW1tYS1tdXRlZC0xMDA6ICNjY2FiZDg7XHJcbiRjb2xvci1nYW1tYS1tdXRlZC02MDA6ICNhMjc5YjE7XHJcblxyXG4kY29sb3ItZGVsdGEtMTAwOiAjZmVkMmFkO1xyXG4kY29sb3ItZGVsdGEtMjAwOiAjZGNlMTIzO1xyXG4kY29sb3ItZGVsdGEtMzAwOiAjZGJlMDIzO1xyXG4kY29sb3ItZGVsdGEtNDAwOiAjZGRlMDNkO1xyXG4kY29sb3ItZGVsdGEtNjAwOiAjZGJkZTNjO1xyXG4kY29sb3ItZGVsdGEtNzAwOiAjZDJkYjQ2O1xyXG4kY29sb3ItZGVsdGEtODAwOiAjZmRhYTYzO1xyXG4kY29sb3ItZGVsdGEtOTAwOiAjZjliMTc4O1xyXG4kY29sb3ItZGVsdGEtMTAwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWRlbHRhLTExMDA6ICNmZmU4YmY7XHJcbiRjb2xvci1kZWx0YS0xMjAwOiAjZmZjYzgwO1xyXG5cclxuJGNvbG9yLW9tZWdhLTEwMDogIzAwMDtcclxuJGNvbG9yLW9tZWdhLTMwMDogIzIyMjtcclxuJGNvbG9yLW9tZWdhLTEwMDA6ICM1NTU7XHJcbiRjb2xvci1vbWVnYS0xMjAwOiAjODg4O1xyXG5cclxuJGNvbG9yLWxpZ2h0LTYwMDogI2JiYjtcclxuJGNvbG9yLWxpZ2h0LTcwMDogI2FhYTtcclxuXHJcbiRjb2xvci1pbmZvLTIwMDogIzhkYWFkZTtcclxuJGNvbG9yLWluZm8tMzAwOiAjYThjYmViO1xyXG4kY29sb3ItaW5mby00MDA6ICM2NmFmZTk7XHJcbiRjb2xvci1pbmZvLTUwMDogIzdmYjZkNjtcclxuJGNvbG9yLWluZm8tNjAwOiAjNzE5NmRhO1xyXG4kY29sb3ItaW5mby03MDA6ICM2NThhY2Y7XHJcbiRjb2xvci1pbmZvLTgwMDogIzNkNjliYTtcclxuJGNvbG9yLWluZm8tOTAwOiAjMDA3Mjk5O1xyXG4kY29sb3ItaW5mby0xMjAwOiAjM2EzZjUxO1xyXG5cclxuJGNvbG9yLWluZm8tbXV0ZWQtMjAwOiAjYmE5Y2M1O1xyXG4kY29sb3ItaW5mby1tdXRlZC02MDA6ICM1ZTcxOTA7XHJcbiRjb2xvci1pbmZvLW11dGVkLTgwMDogIzYwNDQ2YjtcclxuXHJcbiRjb2xvci1zdWNjZXNzLTEwMDogIzhjZGFiMjtcclxuJGNvbG9yLXN1Y2Nlc3MtMjAwOiAjNmNjMDk0O1xyXG4kY29sb3Itc3VjY2Vzcy0zMDA6ICM2YmJiYWU7XHJcbiRjb2xvci1zdWNjZXNzLTQwMDogIzVmOWVhMDtcclxuJGNvbG9yLXN1Y2Nlc3MtNjAwOiAjNmNjMTk1O1xyXG4kY29sb3Itc3VjY2Vzcy03MDA6ICM2Y2JkODM7XHJcbiRjb2xvci1zdWNjZXNzLTgwMDogIzI3YWU2MDtcclxuJGNvbG9yLXN1Y2Nlc3MtMTAwMDogIzVjYTA3ZDtcclxuJGNvbG9yLXN1Y2Nlc3MtMTIwMDogIzAwNTAzYztcclxuXHJcbiRjb2xvci1lcnJvci0xMDA6ICNmNTg2OGE7XHJcbiRjb2xvci1lcnJvci0yMDA6ICNmYzZhNzA7XHJcbiRjb2xvci1lcnJvci0zMDA6ICNmZjU4NWQ7XHJcbiRjb2xvci1lcnJvci02MDA6ICNlZDRiNTI7XHJcbiRjb2xvci1lcnJvci03MDA6ICNmYWJmYzE7XHJcbiRjb2xvci1lcnJvci04MDA6ICNmMDUwNTA7XHJcbiRjb2xvci1lcnJvci05MDA6ICNiNzAxMDk7XHJcbiRjb2xvci1lcnJvci0xMDAwOiAjOGI0NjQ5O1xyXG4kY29sb3ItZXJyb3ItMTEwMDogI2M1YTBiYztcclxuJGNvbG9yLWVycm9yLTEyMDA6ICNmYTMyM2M7XHJcblxyXG4kY29sb3ItZXJyb3ItbXV0ZWQtNjAwOiAjYTI3OWIxO1xyXG5cclxuJGNvbG9yLXdhcm5pbmctMTAwOiAjZmVkMmFkO1xyXG4kY29sb3Itd2FybmluZy0yMDA6ICNkY2UxMjM7XHJcbiRjb2xvci13YXJuaW5nLTMwMDogI2RiZTAyMztcclxuJGNvbG9yLXdhcm5pbmctNDAwOiAjZGRlMDNkO1xyXG4kY29sb3Itd2FybmluZy02MDA6ICNkYmRlM2M7XHJcbiRjb2xvci13YXJuaW5nLTcwMDogI2QyZGI0NjtcclxuJGNvbG9yLXdhcm5pbmctODAwOiAjZmRhYTYzO1xyXG4kY29sb3Itd2FybmluZy05MDA6ICNmOWIxNzg7XHJcbiRjb2xvci13YXJuaW5nLTEwMDA6ICNmYzZhNzA7XHJcbiRjb2xvci13YXJuaW5nLTExMDA6ICNmZmU4YmY7XHJcblxyXG4kY29sb3ItZGFyay0xMDAwOiAjNTU1O1xyXG4kY29sb3ItZGFyay0xMjAwOiAjODg4O1xyXG4kY29sb3ItcmVzb3VyY2U6ICMwMDE3MzE7XHJcbiRsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MC4wM2RlZywgIzE1NmQ4MSAwLjM2JSwgIzM2YWJjNSA5OS45OCUpO1xyXG4kbGluZWFyLWdyYWRpZW50LWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQoOTAuMDNkZWcsIHJnYmEoIzE1NmQ4MSwgMC4xKSAwLjM2JSwgcmdiYSgjMzZhYmM1LCAwLjEpIDk5Ljk4JSk7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "WRqx":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/accounts/components/account-row/account-row.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRowComponent", function() { return AccountRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_iban_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@shared/directives/iban.directive */ "jBaC");
/* harmony import */ var _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@shared/directives/b1-icon.directive */ "SYr6");
/* harmony import */ var _shared_directives_web_class_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@shared/directives/web-class.directive */ "YCCE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_directives_mobile_more_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@shared/directives/mobile-more.directive */ "fhUz");
/* harmony import */ var _shared_directives_more_auto_direction_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@shared/directives/more-auto-direction.directive */ "Lpap");
/* harmony import */ var _shared_directives_mobile_class_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@shared/directives/mobile-class.directive */ "GHAp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_pipes_money_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@shared/pipes/money.pipe */ "RXIs");











function AccountRowComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "components.acct.currentAccount"));
} }
function AccountRowComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "components.acct.cardAccount"));
} }
function AccountRowComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "components.acct.share"), " ");
} }
class AccountRowComponent {
    constructor() { }
    ngOnInit() {
    }
    test() {
        console.log('test');
    }
}
AccountRowComponent.ɵfac = function AccountRowComponent_Factory(t) { return new (t || AccountRowComponent)(); };
AccountRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountRowComponent, selectors: [["app-account-row"]], inputs: { account: "account" }, decls: 72, vars: 40, consts: [[1, "account"], [1, "account-icon"], ["b1-icon", "", "icon", "university", "class", "b1-large", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], ["b1-icon", "", "icon", "account-card", "class", "b1-large", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], [1, "account-body"], [1, "account-name", "b1-ellipsis"], [1, "account-number", 3, "iban"], [1, "account-date"], [1, "b1-ml-2", "b1-mr-2"], [1, "account-amount"], [1, "account-balance"], [1, "b1-ml-2"], [1, "account-turns"], [1, "account-turns-debit"], ["b1-icon", "", "icon", "chevron-down"], [1, "account-turns-credit"], ["b1-icon", "", "icon", "chevron-up"], [1, "account-more", "b1-card__col", "b1-card__col_dot", 2, "position", "relative"], [1, "dropdown"], [1, "b1-card__v-dots", 3, "click"], ["webClass", "b1-animate fade-in-up", "role", "menu", "ngbDropdown", "", "mobile-more", "", "more-auto-direction", "", 1, "b1-dropdown", "b1-bg-light", 2, "width", "360px"], ["dropdown", "ngbDropdown"], ["class", "b1-dropdown__item", 4, "ngIf"], ["ng-if", "account.IsPayingAccount", 1, "b1-dropdown__item"], ["webClass", "b1-base", "mobileClass", "b1-medium", "ng-click", "accountsCtrl.accActions.createPayment($event, account.Id,'INNER')", 1, "b1-dropdown__link"], ["b1-icon", "", "icon", "cards", 1, "b1-medium", "b1-mr-3"], ["webClass", "b1-base", "mobileClass", "b1-medium", "ng-click", "accountsCtrl.accActions.createPayment($event, account.Id, 'OUTER')", 1, "b1-dropdown__link"], ["b1-icon", "", "icon", "country", 1, "b1-medium", "b1-mr-3"], ["data-role-in", "Director,Accountant,ForeignCurrencyPaymentsManager", "webClass", "b1-base", "mobileClass", "b1-medium", "ng-show", "accountsCtrl.isForeignCurrency(account.CurrencyCode)", "ng-click", "accountsCtrl.accActions.createPayment($event, account.Id,\n                                   'SWIFT')", 1, "b1-dropdown__link"], ["b1-icon", "", "icon", "swift", 1, "b1-mr-3"], ["b1-icon", "", "icon", "university", "placement", "right", 1, "b1-large", 3, "ngbTooltip"], ["b1-icon", "", "icon", "account-card", "placement", "right", 1, "b1-large", 3, "ngbTooltip"], [1, "b1-dropdown__item"], ["webClass", "b1-base", "mobileClass", "b1-medium", "ng-click", "accountsCtrl.accActions.share(account)", 1, "b1-dropdown__link"], ["b1-icon", "", "icon", "file-details", 1, "b1-mr-3", "b1-medium"]], template: function AccountRowComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountRowComponent_i_2_Template, 2, 3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountRowComponent_i_3_Template, 2, 3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountRowComponent_Template_a_click_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); $event.stopPropagation(); return _r2.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AccountRowComponent_li_38_Template, 5, 3, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.account.IsCardAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.account.IsCardAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.account.Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iban", ctx.account.Number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, "components.acct.acctDetail.turnoverDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 19, ctx.account.LastActive, "dd.MM.yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 22, ctx.account.Balance / 100));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.CurrencyCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 24, ctx.account.DebitTurns / 100), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 26, ctx.account.CreditTurns / 100), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.account.CurrencyCode == "UAH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 28, "components.acct.newPayment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 30, "components.pay.actions.innerPay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 32, "components.acct.newPayment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 34, "components.pay.actions.inUrainePay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 36, "components.acct.newPayment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 38, "components.pay.actions.swift"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_directives_iban_directive__WEBPACK_IMPORTED_MODULE_2__["IbanDirective"], _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_3__["B1IconDirective"], _shared_directives_web_class_directive__WEBPACK_IMPORTED_MODULE_4__["WebClassDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _shared_directives_mobile_more_directive__WEBPACK_IMPORTED_MODULE_6__["MobileMoreDirective"], _shared_directives_more_auto_direction_directive__WEBPACK_IMPORTED_MODULE_7__["MoreAutoDirectionDirective"], _shared_directives_mobile_class_directive__WEBPACK_IMPORTED_MODULE_8__["MobileClassDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _shared_pipes_money_pipe__WEBPACK_IMPORTED_MODULE_10__["MoneyPipe"]], styles: [".b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n[_nghost-%COMP%] {\n  height: 90px;\n}\n@media (max-width: 812px) {\n  [_nghost-%COMP%] {\n    height: 120px;\n  }\n}\n.account[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 812px) {\n  .account[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    align-items: flex-start;\n    padding: 8px 16px;\n    padding-bottom: 0;\n  }\n}\n.account-body[_ngcontent-%COMP%] {\n  width: calc(100% - 100px);\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 812px) {\n  .account-body[_ngcontent-%COMP%] {\n    width: calc(100% - 32px);\n    flex-direction: column;\n  }\n}\n.account-icon[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  width: 24px;\n  height: 24px;\n}\n@media (max-width: 812px) {\n  .account-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.account-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n  margin-left: 42px;\n  width: 40%;\n}\n@media (max-width: 812px) {\n  .account-name[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n.account-number[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n@media (max-width: 812px) {\n  .account-number[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.account-date[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  font-family: \"Futura PT Demi\", sans-serif;\n  margin-left: 42px;\n}\n@media (max-width: 812px) {\n  .account-date[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n    color: #999;\n    font-family: \"Futura PT Book\", sans-serif;\n  }\n}\n.account-amount[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 40%;\n}\n@media (max-width: 812px) {\n  .account-amount[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n  }\n}\n.account-balance[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .account-balance[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .account-balance[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 812px) {\n  .account-balance[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-family: \"Futura PT Demi\", sans-serif;\n    line-height: 1.25;\n  }\n}\n.account-turns[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n  font-family: \"Futura PT Book\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.account-turns-credit[_ngcontent-%COMP%] {\n  color: #009e4f;\n  margin-left: 42px;\n}\n@media (max-width: 812px) {\n  .account-turns-credit[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n.account-turns-debit[_ngcontent-%COMP%] {\n  color: #ff1f1f;\n}\n@media (max-width: 812px) {\n  .account-turns[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n}\n.account-more[_ngcontent-%COMP%]   .b1-card__v-dots[_ngcontent-%COMP%]:not(.without-after):after {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n}\n@media (max-width: 812px) {\n  .account-more[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHMub3NjaGFkXFxzY3NzXFxfdHlwb2dyYXBoeS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYWNjb3VudC1yb3cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzLm9zY2hhZFxcc2Nzc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJRTtFQWpIQSxlQUprQjtFQUtsQix5Q0FBQTtFQUNBLGNBTHlCO0FDZjNCO0FEc0JFO0VBNkdBO0lBNUdFLGVBWGU7SUFZZixpQkFYc0I7RUNSeEI7QUFDRjtBRHFCRTtFQXdHQTtJQXZHRSxlQWxCZTtJQW1CZixpQkFsQnNCO0VDQXhCO0FBQ0Y7QUQySEU7RUFyR0EsZUF0QmlCO0VBdUJqQix5Q0FBQTtFQUNBLGlCQXZCd0I7QUNJMUI7QURxQkU7RUFpR0E7SUFoR0UsZUE3QmU7SUE4QmYsaUJBN0JzQjtFQ1d4QjtBQUNGO0FEb0JFO0VBNEZBO0lBM0ZFLGVBcENlO0lBcUNmLGlCQXBDc0I7RUNtQnhCO0FBQ0Y7QUQ4R0U7RUF6RkEsZUF4Q2lCO0VBeUNqQix5Q0FBQTtFQUNBLGlCQXpDd0I7QUN1QjFCO0FEb0JFO0VBcUZBO0lBcEZFLGVBL0NlO0lBZ0RmLGlCQS9Dc0I7RUM4QnhCO0FBQ0Y7QURtQkU7RUFnRkE7SUEvRUUsZUF0RGM7SUF1RGQsaUJBdERxQjtFQ3NDdkI7QUFDRjtBRGlHRTtFQTdFQSxlQTFEaUI7RUEyRGpCLHlDQUFBO0VBQ0EsaUJBM0R3QjtBQzBDMUI7QURtQkU7RUF5RUE7SUF4RUUsZUFqRWM7SUFrRWQsaUJBakVxQjtFQ2lEdkI7QUFDRjtBRGtCRTtFQW9FQTtJQW5FRSxlQXRFYztJQXVFZCxpQkF0RXFCO0VDdUR2QjtBQUNGO0FEb0ZFO0VBakVBLGVBNUVnQjtFQTZFaEIseUNBQUE7RUFDQSxpQkE3RXVCO0FDNkR6QjtBRGtCRTtFQTZEQTtJQTVERSxlQW5GZTtJQW9GZixpQkFuRnNCO0VDb0V4QjtBQUNGO0FEaUJFO0VBd0RBO0lBdkRFLGVBeEZlO0lBeUZmLGlCQXhGc0I7RUMwRXhCO0FBQ0Y7QUR1RUU7RUFyREEsZUE5RmlCO0VBK0ZqQix5Q0FBQTtFQUNBLGlCQS9Gd0I7QUNnRjFCO0FEc0VFO0VBbkRBLGVBdEdlO0VBdUdmLHlDQUFBO0VBQ0EsZ0JBdkdzQjtBQ3VGeEI7QURxRUU7RUFqREEsZUE5R2dCO0VBK0doQix5Q0FBQTtFQUNBLGlCQS9HdUI7QUM4RnpCO0FEb0VFO0VBL0NBLGVBdEhnQjtFQXVIaEIseUNBQUE7RUFDQSxjQXZIdUI7RUF3SHZCLHlCQUFBO0FDbEJGO0FEa0VFO0VBNUNBLHlDQUFBO0FDbkJGO0FEbUVFO0VBNUNBLHlDQUFBO0FDcEJGO0FEd0JFO0VBakhBLGVBSmtCO0VBS2xCLHlDQUFBO0VBQ0EsY0FMeUI7QUNrRzNCO0FEM0ZFO0VBNkdBO0lBNUdFLGVBWGU7SUFZZixpQkFYc0I7RUN5R3hCO0FBQ0Y7QUQ1RkU7RUF3R0E7SUF2R0UsZUFsQmU7SUFtQmYsaUJBbEJzQjtFQ2lIeEI7QUFDRjtBRFVFO0VBckdBLGVBdEJpQjtFQXVCakIseUNBQUE7RUFDQSxpQkF2QndCO0FDcUgxQjtBRDVGRTtFQWlHQTtJQWhHRSxlQTdCZTtJQThCZixpQkE3QnNCO0VDNEh4QjtBQUNGO0FEN0ZFO0VBNEZBO0lBM0ZFLGVBcENlO0lBcUNmLGlCQXBDc0I7RUNvSXhCO0FBQ0Y7QURIRTtFQXpGQSxlQXhDaUI7RUF5Q2pCLHlDQUFBO0VBQ0EsaUJBekN3QjtBQ3dJMUI7QUQ3RkU7RUFxRkE7SUFwRkUsZUEvQ2U7SUFnRGYsaUJBL0NzQjtFQytJeEI7QUFDRjtBRDlGRTtFQWdGQTtJQS9FRSxlQXREYztJQXVEZCxpQkF0RHFCO0VDdUp2QjtBQUNGO0FEaEJFO0VBN0VBLGVBMURpQjtFQTJEakIseUNBQUE7RUFDQSxpQkEzRHdCO0FDMkoxQjtBRDlGRTtFQXlFQTtJQXhFRSxlQWpFYztJQWtFZCxpQkFqRXFCO0VDa0t2QjtBQUNGO0FEL0ZFO0VBb0VBO0lBbkVFLGVBdEVjO0lBdUVkLGlCQXRFcUI7RUN3S3ZCO0FBQ0Y7QUQ3QkU7RUFqRUEsZUE1RWdCO0VBNkVoQix5Q0FBQTtFQUNBLGlCQTdFdUI7QUM4S3pCO0FEL0ZFO0VBNkRBO0lBNURFLGVBbkZlO0lBb0ZmLGlCQW5Gc0I7RUNxTHhCO0FBQ0Y7QURoR0U7RUF3REE7SUF2REUsZUF4RmU7SUF5RmYsaUJBeEZzQjtFQzJMeEI7QUFDRjtBRDFDRTtFQXJEQSxlQTlGaUI7RUErRmpCLHlDQUFBO0VBQ0EsaUJBL0Z3QjtBQ2lNMUI7QUQzQ0U7RUFuREEsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0FDd014QjtBRDVDRTtFQWpEQSxlQTlHZ0I7RUErR2hCLHlDQUFBO0VBQ0EsaUJBL0d1QjtBQytNekI7QUQ3Q0U7RUEvQ0EsZUF0SGdCO0VBdUhoQix5Q0FBQTtFQUNBLGNBdkh1QjtFQXdIdkIseUJBQUE7QUMrRkY7QUQvQ0U7RUE1Q0EseUNBQUE7QUM4RkY7QUQ5Q0U7RUE1Q0EseUNBQUE7QUM2RkY7QUEvTkE7RUFDSSxZQUFBO0FBa09KO0FBak9JO0VBRko7SUFHUSxhQUFBO0VBb09OO0FBQ0Y7QUFsT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXFPSjtBQXBPSTtFQUxKO0lBTVEsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQXVPTjtBQUNGO0FBdE9JO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF3T1I7QUF2T1E7RUFKSjtJQUtRLHdCQUFBO0lBQ0Esc0JBQUE7RUEwT1Y7QUFDRjtBQXhPSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEwT1I7QUF6T1E7RUFKSjtJQUtRLGFBQUE7RUE0T1Y7QUFDRjtBQXpPSTtFRGtFRixlQTlGaUI7RUErRmpCLHlDQUFBO0VBQ0EsaUJBL0Z3QjtFQzZCbEIsaUJBQUE7RUFDQSxVQUFBO0FBNk9SO0FBNU9RO0VBSko7SUFLUSxjQUFBO0lBQ0EsV0FBQTtFQStPVjtBQUNGO0FBNU9JO0VEOERGLGVBdEdlO0VBdUdmLHlDQUFBO0VBQ0EsZ0JBdkdzQjtFQXdIdEIseUNBQUE7QUNpS0Y7QUEvT1E7RUFISjtJQUlRLGFBQUE7RUFrUFY7QUFDRjtBQS9PSTtFRHNERixlQXRHZTtFQXVHZix5Q0FBQTtFQUNBLGdCQXZHc0I7RUF3SHRCLHlDQUFBO0VDdEVNLGlCQUFBO0FBbVBSO0FBbFBRO0VBSko7SUFLUSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdDaERNO0lGc0hoQix5Q0FBQTtFQ2dMQTtBQUNGO0FBbFBJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBb1BSO0FBblBRO0VBSEo7SUFJUSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFzUFY7QUFDRjtBQXBQSTtFRFVGLGVBNUVnQjtFQTZFaEIseUNBQUE7RUFDQSxpQkE3RXVCO0FDMFR6QjtBRDNPRTtFQ2RFO0lEZUEsZUFuRmU7SUFvRmYsaUJBbkZzQjtFQ2lVeEI7QUFDRjtBRDVPRTtFQ25CRTtJRG9CQSxlQXhGZTtJQXlGZixpQkF4RnNCO0VDdVV4QjtBQUNGO0FBblFRO0VBRko7SUQwQkYsZUE5RmlCO0lBK0ZqQix5Q0FBQTtJQUNBLGlCQS9Gd0I7RUM4VXhCO0FBQ0Y7QUF0UUk7RUQwQkYsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0VBNEh0Qix5Q0FBQTtFQzlDTSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTBRUjtBQXhRUTtFQUNJLGNDckNJO0VEc0NKLGlCQUFBO0FBMFFaO0FBelFZO0VBSEo7SUFJUSxnQkFBQTtFQTRRZDtBQUNGO0FBMVFRO0VBQ0ksY0M5Q0U7QUQwVGQ7QUF2UVE7RUFwQko7SUFxQlEsc0JBQUE7SUFDQSx1QkFBQTtJQUNBLDJCQUFBO0VBMFFWO0FBQ0Y7QUF2UVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXlRWjtBQXZRUTtFQVRKO0lBVVEsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VBMFFWO0FBQ0YiLCJmaWxlIjoiYWNjb3VudC1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZS11bml0OiAxNjtcclxuXHJcbiRmb250LW1pY3JvLXNpemU6IDEycHg7XHJcbiRmb250LW1pY3JvLWxpbmUtaGVpZ2h0OiAxO1xyXG4kZm9udC1zbWFsbC1zaXplOiAxNHB4O1xyXG4kZm9udC1zbWFsbC1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtYmFzZS1zaXplOiAxNnB4O1xyXG4kZm9udC1iYXNlLWxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRmb250LW1lZGl1bS1zaXplOiAxOHB4O1xyXG4kZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiRmb250LWxhcmdlLXNpemU6IDI0cHg7XHJcbiRmb250LWxhcmdlLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTMtc2l6ZTogMjhweDtcclxuJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTItc2l6ZTogMzZweDtcclxuJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC10aXRsZTEtc2l6ZTogNDhweDtcclxuJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC1kaXNwbGF5LXNpemU6IDY0cHg7XHJcbiRmb250LWRpc3BsYXktbGluZS1oZWlnaHQ6IDE7XHJcblxyXG5AbWl4aW4gZGlzcGxheSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1kaXNwbGF5LXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtZGlzcGxheS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUxLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMi1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMi1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTEge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUxLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUxLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUzLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRpdGxlMiB7XHJcbiAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMy1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMy1saW5lLWhlaWdodDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRpdGxlMyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC10aXRsZTMtc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTMtbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LWxhcmdlLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbGFyZ2UtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1tZWRpdW0tc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1tZWRpdW0tc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1tZWRpdW0tbGluZS1oZWlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBiYXNlIHtcclxuICBmb250LXNpemU6ICRmb250LWJhc2Utc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1iYXNlLWxpbmUtaGVpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc21hbGwtc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1zbWFsbC1saW5lLWhlaWdodDtcclxufVxyXG5cclxuQG1peGluIG1pY3JvIHtcclxuICBmb250LXNpemU6ICRmb250LW1pY3JvLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtbWljcm8tbGluZS1oZWlnaHQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuQG1peGluIGJvbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBsaWdodCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmIxIHtcclxuICAmLWRpc3BsYXkge1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheTtcclxuICB9XHJcblxyXG4gICYtdGl0bGUxIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMTtcclxuICB9XHJcblxyXG4gICYtdGl0bGUyIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMjtcclxuICB9XHJcblxyXG4gICYtdGl0bGUzIHtcclxuICAgIEBpbmNsdWRlIHRpdGxlMztcclxuICB9XHJcblxyXG4gICYtbGFyZ2Uge1xyXG4gICAgQGluY2x1ZGUgbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAmLW1lZGl1bSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW07XHJcbiAgfVxyXG5cclxuICAmLWJhc2Uge1xyXG4gICAgQGluY2x1ZGUgYmFzZTtcclxuICB9XHJcblxyXG4gICYtc21hbGwge1xyXG4gICAgQGluY2x1ZGUgc21hbGw7XHJcbiAgfVxyXG5cclxuICAmLW1pY3JvIHtcclxuICAgIEBpbmNsdWRlIG1pY3JvO1xyXG4gIH1cclxuXHJcbiAgJi1ib2xkIHtcclxuICAgIEBpbmNsdWRlIGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmLWxpZ2h0IHtcclxuICAgIEBpbmNsdWRlIGxpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuJGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiIsIi5iMS1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLW1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5iMS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtbWljcm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmIxLWJvbGQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xufVxuLmIxLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmIxLWRpc3BsYXkge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTEge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMyB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbWVkaXVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5iMS1iYXNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmIxLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5iMS1taWNybyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYjEtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG59XG4uYjEtbGlnaHQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxufVxuXG4uYWNjb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuLmFjY291bnQtYm9keSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtYm9keSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5hY2NvdW50LWljb24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuYWNjb3VudC1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYWNjb3VudC1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gIHdpZHRoOiA0MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5hY2NvdW50LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuYWNjb3VudC1udW1iZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hY2NvdW50LWRhdGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50LWRhdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIH1cbn1cbi5hY2NvdW50LWFtb3VudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50LWFtb3VudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5hY2NvdW50LWJhbGFuY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmFjY291bnQtYmFsYW5jZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFjY291bnQtYmFsYW5jZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmFjY291bnQtYmFsYW5jZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5hY2NvdW50LXR1cm5zIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmFjY291bnQtdHVybnMtY3JlZGl0IHtcbiAgY29sb3I6ICMwMDllNGY7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50LXR1cm5zLWNyZWRpdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuLmFjY291bnQtdHVybnMtZGViaXQge1xuICBjb2xvcjogI2ZmMWYxZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuYWNjb3VudC10dXJucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi5hY2NvdW50LW1vcmUgLmIxLWNhcmRfX3YtZG90czpub3QoLndpdGhvdXQtYWZ0ZXIpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5hY2NvdW50LW1vcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iLCJAZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XHJcbn1cclxuXHJcbiRjb2xvci1saWdodDogI2ZmZjtcclxuJGNvbG9yLWxpZ2h0LTEwMDogI2YyZjJmMjtcclxuJGNvbG9yLWxpZ2h0LTIwMDogI2VlZTtcclxuJGNvbG9yLWxpZ2h0LTMwMDogI2RkZDtcclxuJGNvbG9yLWxpZ2h0LTQwMDogI2NjYztcclxuJGNvbG9yLWxpZ2h0LTUwMDogIzk5OTtcclxuXHJcbiRjb2xvci1kYXJrOiAjMDAxNzMxO1xyXG4kY29sb3ItZGFyay0xMDA6IHRpbnQoJGNvbG9yLWRhcmssIDUlKTtcclxuJGNvbG9yLWRhcmstMjAwOiB0aW50KCRjb2xvci1kYXJrLCAxNSUpO1xyXG4kY29sb3ItZGFyay0zMDA6IHRpbnQoJGNvbG9yLWRhcmssIDI1JSk7XHJcbiRjb2xvci1kYXJrLTQwMDogdGludCgkY29sb3ItZGFyaywgMjUlKTtcclxuJGNvbG9yLWRhcmstNTAwOiB0aW50KCRjb2xvci1kYXJrLCAzMCUpO1xyXG5cclxuJGNvbG9yLWxpZ2h0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuJGNvbG9yLWxpZ2h0LTEwMC1yZ2I6IDI0MiwgMjQyLCAyNDI7XHJcbiRjb2xvci1saWdodC0yMDAtcmdiOiAyMzcsIDIzNywgMjM3O1xyXG4kY29sb3ItbGlnaHQtMzAwLXJnYjogMjIxLCAyMjEsIDIyMTtcclxuJGNvbG9yLWxpZ2h0LTQwMC1yZ2I6IDIwNCwgMjA0LCAyMDQ7XHJcbiRjb2xvci1saWdodC01MDAtcmdiOiAxNTMsIDE1MywgMTUzO1xyXG5cclxuJGNvbG9yLWRhcmstcmdiOiAwLCAyMywgNDk7XHJcbiRjb2xvci1kYXJrLTEwMC1yZ2I6IDEzLCAzNSwgNTk7XHJcbiRjb2xvci1kYXJrLTIwMC1yZ2I6IDI2LCA0NiwgNzA7XHJcbiRjb2xvci1kYXJrLTMwMC1yZ2I6IDM4LCA1OCwgODA7XHJcbiRjb2xvci1kYXJrLTQwMC1yZ2I6IDUxLCA2OSwgOTA7XHJcbiRjb2xvci1kYXJrLTUwMC1yZ2I6IDY0LCA4MSwgMTAxO1xyXG5cclxuJGNvbG9yLXByaW1hcnk6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1wcmltYXJ5LTEwMDogdGludCgkY29sb3ItcHJpbWFyeSwgNSUpO1xyXG4kY29sb3ItcHJpbWFyeS0yMDA6IHRpbnQoJGNvbG9yLXByaW1hcnksIDEwJSk7XHJcbiRjb2xvci1wcmltYXJ5LTMwMDogdGludCgkY29sb3ItcHJpbWFyeSwgMjUlKTtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zZWNvbmRhcnktMTAwOiB0aW50KCRjb2xvci1zZWNvbmRhcnksIDUlKTtcclxuJGNvbG9yLXNlY29uZGFyeS0yMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgMTAlKTtcclxuJGNvbG9yLXNlY29uZGFyeS0zMDA6IHRpbnQoJGNvbG9yLXNlY29uZGFyeSwgMjUlKTtcclxuXHJcbiRjb2xvci10ZXJ0aWFyeTogcmdiKDAsIDEzNSwgMTU4KTtcclxuJGNvbG9yLXRlcnRpYXJ5LTEwMDogdGludCgkY29sb3ItdGVydGlhcnksIDUlKTtcclxuJGNvbG9yLXRlcnRpYXJ5LTIwMDogdGludCgkY29sb3ItdGVydGlhcnksIDEwJSk7XHJcbiRjb2xvci10ZXJ0aWFyeS0zMDA6IHRpbnQoJGNvbG9yLXRlcnRpYXJ5LCAyNSUpO1xyXG5cclxuJGNvbG9yLWVycm9yOiBoc2woMCwgMTAwJSwgNTYlKTtcclxuJGNvbG9yLWluZm86IHJnYigwLCAxMzUsIDE1OCk7XHJcbiRjb2xvci1zdWNjZXNzOiBoc2woMTUwLCAxMDAlLCAzMSUpO1xyXG4kY29sb3Itd2FybmluZzogaHNsKDYyLCA5MCUsIDQ0JSk7XHJcblxyXG4kY29sb3ItZXJyb3ItZHQ6IGhzbCgwLCA5MCUsIDYxJSk7XHJcbiRjb2xvci1pbmZvLWR0OiByZ2IoMCwgMTM1LCAxNTgpO1xyXG4kY29sb3Itc3VjY2Vzcy1kdDogaHNsKDE1MCwgOTAlLCA0MSUpO1xyXG4kY29sb3Itd2FybmluZy1kdDogaHNsKDYyLCA4MCUsIDQ5JSk7XHJcblxyXG4vLyAhIERFUFJFQ0FURURcclxuXHJcbiRoZWFkaW5nLWZvbnQ6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiRjb2xvci1sb2FkZXItMTAwOiAjMzQ5OGRiO1xyXG4kY29sb3ItbG9hZGVyLTIwMDogI2U3NGMzYztcclxuJGNvbG9yLWxvYWRlci0zMDA6ICNmOWM5MjI7XHJcblxyXG4kY29sb3Itc2lkZWJhci0xMDA6ICM2Y2MxOTU7XHJcblxyXG4kY29sb3ItYWxwaGEtMTAwOiAjZmZmO1xyXG4kY29sb3ItYWxwaGEtMjAwOiAjZjRmNGY0O1xyXG4kY29sb3ItYWxwaGEtMzAwOiAjZWVlO1xyXG4kY29sb3ItYWxwaGEtNDAwOiAjZGRkO1xyXG4kY29sb3ItYWxwaGEtNTAwOiAjY2NjO1xyXG4kY29sb3ItYWxwaGEtNjAwOiAjYmJiO1xyXG4kY29sb3ItYWxwaGEtNzAwOiAjYWFhO1xyXG5cclxuJGNvbG9yLWJldGEtMTAwOiAjOGNhOWRkO1xyXG4kY29sb3ItYmV0YS0yMDA6ICM4ZGFhZGU7XHJcbiRjb2xvci1iZXRhLTMwMDogI2E4Y2JlYjtcclxuJGNvbG9yLWJldGEtNDAwOiAjNjZhZmU5O1xyXG4kY29sb3ItYmV0YS01MDA6ICM3ZmI2ZDY7XHJcbiRjb2xvci1iZXRhLTYwMDogIzcyOTZkYTtcclxuJGNvbG9yLWJldGEtNzAwOiAjNjU4YWNmO1xyXG4kY29sb3ItYmV0YS04MDA6ICMzZDY5YmE7XHJcbiRjb2xvci1iZXRhLTkwMDogIzAwNzI5OTtcclxuJGNvbG9yLWJldGEtMTIwMDogIzdmYjZkNjtcclxuJGNvbG9yLWJldGEtMTMwMDogIzNhM2Y1MTtcclxuJGNvbG9yLWJldGEtMTQwMDogIzg5YzhlYjtcclxuJGNvbG9yLWJldGEtMTUwMDogIzcxOTZkYTtcclxuJGNvbG9yLWJldGEtMTYwMDogIzc3OTRkODtcclxuJGNvbG9yLWJldGEtMTcwMDogIzVmN2ZjOTtcclxuJGNvbG9yLWJldGEtMTgwMDogIzY0YjNkNTtcclxuJGNvbG9yLWJldGEtMTkwMDogIzMzYTZjYztcclxuJGNvbG9yLWJldGEtMjAwMDogIzY4YjRkNjtcclxuJGNvbG9yLWJldGEtMjEwMDogIzZmYWJjYztcclxuJGNvbG9yLWJldGEtMjIwMDogIzAwYjFlNTtcclxuJGNvbG9yLWJldGEtMjMwMDogIzU3YjBlMjtcclxuJGNvbG9yLWJldGEtMjQwMDogIzZkYmRkZTtcclxuJGNvbG9yLWJldGEtMjUwMDogIzkyYzFlOTtcclxuJGNvbG9yLWJldGEtMjYwMDogIzIzYjdlNTtcclxuXHJcbiRjb2xvci1iZXRhLW11dGVkLTEwMDogIzM0NzI5NDtcclxuJGNvbG9yLWJldGEtbXV0ZWQtMjAwOiAjYmE5Y2M1O1xyXG4kY29sb3ItYmV0YS1tdXRlZC0zMDA6ICNjOGIxZDA7XHJcbiRjb2xvci1iZXRhLW11dGVkLTQwMDogI2EyNzliMTtcclxuJGNvbG9yLWJldGEtbXV0ZWQtNjAwOiAjNWU3MTkwO1xyXG4kY29sb3ItYmV0YS1tdXRlZC03MDA6ICM1ODY2NmU7XHJcbiRjb2xvci1iZXRhLW11dGVkLTgwMDogIzYwNDQ2YjtcclxuJGNvbG9yLWJldGEtbXV0ZWQtOTAwOiAjOWQ2YWFmO1xyXG4kY29sb3ItYmV0YS1tdXRlZC0xMDAwOiAjYTA3OGFmO1xyXG5cclxuJGNvbG9yLXBzeS0xMDA6ICM4Y2RhYjI7XHJcbiRjb2xvci1wc3ktMjAwOiAjNmNjMDk0O1xyXG4kY29sb3ItcHN5LTMwMDogIzZiYmJhZTtcclxuJGNvbG9yLXBzeS00MDA6ICM1ZjllYTA7XHJcbiRjb2xvci1wc3ktNTAwOiAjNmNjMDk0O1xyXG4kY29sb3ItcHN5LTYwMDogIzZjYzE5NTtcclxuJGNvbG9yLXBzeS03MDA6ICM2Y2JkODM7XHJcbiRjb2xvci1wc3ktODAwOiAjMjdhZTYwO1xyXG4kY29sb3ItcHN5LTkwMDogIzNlYjg3OTtcclxuJGNvbG9yLXBzeS0xMDAwOiAjNWNhMDdkO1xyXG4kY29sb3ItcHN5LTEyMDA6ICMwMDUwM2M7XHJcbiRjb2xvci1wc3ktMTMwMDogI2I0YjJiNTtcclxuJGNvbG9yLXBzeS0xNDAwOiAjNzE2YzZjO1xyXG4kY29sb3ItcHN5LTE1MDA6ICM2MWFkODY7XHJcbiRjb2xvci1wc3ktMTYwMDogIzAwNTA0ZTtcclxuJGNvbG9yLXBzeS0xNzAwOiAjMjdjMjRjO1xyXG5cclxuJGNvbG9yLWdhbW1hLTEwMDogI2Y1ODY4YTtcclxuJGNvbG9yLWdhbW1hLTIwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWdhbW1hLTMwMDogI2ZmNTg1ZDtcclxuJGNvbG9yLWdhbW1hLTYwMDogI2VkNGI1MjtcclxuJGNvbG9yLWdhbW1hLTcwMDogI2ZhYmZjMTtcclxuJGNvbG9yLWdhbW1hLTgwMDogI2YwNTA1MDtcclxuJGNvbG9yLWdhbW1hLTkwMDogI2I3MDEwOTtcclxuJGNvbG9yLWdhbW1hLTEwMDA6ICM4YjQ2NDk7XHJcbiRjb2xvci1nYW1tYS0xMTAwOiAjYzVhMGJjO1xyXG4kY29sb3ItZ2FtbWEtMTIwMDogI2ZhMzIzYztcclxuXHJcbiRjb2xvci1nYW1tYS1tdXRlZC0xMDA6ICNjY2FiZDg7XHJcbiRjb2xvci1nYW1tYS1tdXRlZC02MDA6ICNhMjc5YjE7XHJcblxyXG4kY29sb3ItZGVsdGEtMTAwOiAjZmVkMmFkO1xyXG4kY29sb3ItZGVsdGEtMjAwOiAjZGNlMTIzO1xyXG4kY29sb3ItZGVsdGEtMzAwOiAjZGJlMDIzO1xyXG4kY29sb3ItZGVsdGEtNDAwOiAjZGRlMDNkO1xyXG4kY29sb3ItZGVsdGEtNjAwOiAjZGJkZTNjO1xyXG4kY29sb3ItZGVsdGEtNzAwOiAjZDJkYjQ2O1xyXG4kY29sb3ItZGVsdGEtODAwOiAjZmRhYTYzO1xyXG4kY29sb3ItZGVsdGEtOTAwOiAjZjliMTc4O1xyXG4kY29sb3ItZGVsdGEtMTAwMDogI2ZjNmE3MDtcclxuJGNvbG9yLWRlbHRhLTExMDA6ICNmZmU4YmY7XHJcbiRjb2xvci1kZWx0YS0xMjAwOiAjZmZjYzgwO1xyXG5cclxuJGNvbG9yLW9tZWdhLTEwMDogIzAwMDtcclxuJGNvbG9yLW9tZWdhLTMwMDogIzIyMjtcclxuJGNvbG9yLW9tZWdhLTEwMDA6ICM1NTU7XHJcbiRjb2xvci1vbWVnYS0xMjAwOiAjODg4O1xyXG5cclxuJGNvbG9yLWxpZ2h0LTYwMDogI2JiYjtcclxuJGNvbG9yLWxpZ2h0LTcwMDogI2FhYTtcclxuXHJcbiRjb2xvci1pbmZvLTIwMDogIzhkYWFkZTtcclxuJGNvbG9yLWluZm8tMzAwOiAjYThjYmViO1xyXG4kY29sb3ItaW5mby00MDA6ICM2NmFmZTk7XHJcbiRjb2xvci1pbmZvLTUwMDogIzdmYjZkNjtcclxuJGNvbG9yLWluZm8tNjAwOiAjNzE5NmRhO1xyXG4kY29sb3ItaW5mby03MDA6ICM2NThhY2Y7XHJcbiRjb2xvci1pbmZvLTgwMDogIzNkNjliYTtcclxuJGNvbG9yLWluZm8tOTAwOiAjMDA3Mjk5O1xyXG4kY29sb3ItaW5mby0xMjAwOiAjM2EzZjUxO1xyXG5cclxuJGNvbG9yLWluZm8tbXV0ZWQtMjAwOiAjYmE5Y2M1O1xyXG4kY29sb3ItaW5mby1tdXRlZC02MDA6ICM1ZTcxOTA7XHJcbiRjb2xvci1pbmZvLW11dGVkLTgwMDogIzYwNDQ2YjtcclxuXHJcbiRjb2xvci1zdWNjZXNzLTEwMDogIzhjZGFiMjtcclxuJGNvbG9yLXN1Y2Nlc3MtMjAwOiAjNmNjMDk0O1xyXG4kY29sb3Itc3VjY2Vzcy0zMDA6ICM2YmJiYWU7XHJcbiRjb2xvci1zdWNjZXNzLTQwMDogIzVmOWVhMDtcclxuJGNvbG9yLXN1Y2Nlc3MtNjAwOiAjNmNjMTk1O1xyXG4kY29sb3Itc3VjY2Vzcy03MDA6ICM2Y2JkODM7XHJcbiRjb2xvci1zdWNjZXNzLTgwMDogIzI3YWU2MDtcclxuJGNvbG9yLXN1Y2Nlc3MtMTAwMDogIzVjYTA3ZDtcclxuJGNvbG9yLXN1Y2Nlc3MtMTIwMDogIzAwNTAzYztcclxuXHJcbiRjb2xvci1lcnJvci0xMDA6ICNmNTg2OGE7XHJcbiRjb2xvci1lcnJvci0yMDA6ICNmYzZhNzA7XHJcbiRjb2xvci1lcnJvci0zMDA6ICNmZjU4NWQ7XHJcbiRjb2xvci1lcnJvci02MDA6ICNlZDRiNTI7XHJcbiRjb2xvci1lcnJvci03MDA6ICNmYWJmYzE7XHJcbiRjb2xvci1lcnJvci04MDA6ICNmMDUwNTA7XHJcbiRjb2xvci1lcnJvci05MDA6ICNiNzAxMDk7XHJcbiRjb2xvci1lcnJvci0xMDAwOiAjOGI0NjQ5O1xyXG4kY29sb3ItZXJyb3ItMTEwMDogI2M1YTBiYztcclxuJGNvbG9yLWVycm9yLTEyMDA6ICNmYTMyM2M7XHJcblxyXG4kY29sb3ItZXJyb3ItbXV0ZWQtNjAwOiAjYTI3OWIxO1xyXG5cclxuJGNvbG9yLXdhcm5pbmctMTAwOiAjZmVkMmFkO1xyXG4kY29sb3Itd2FybmluZy0yMDA6ICNkY2UxMjM7XHJcbiRjb2xvci13YXJuaW5nLTMwMDogI2RiZTAyMztcclxuJGNvbG9yLXdhcm5pbmctNDAwOiAjZGRlMDNkO1xyXG4kY29sb3Itd2FybmluZy02MDA6ICNkYmRlM2M7XHJcbiRjb2xvci13YXJuaW5nLTcwMDogI2QyZGI0NjtcclxuJGNvbG9yLXdhcm5pbmctODAwOiAjZmRhYTYzO1xyXG4kY29sb3Itd2FybmluZy05MDA6ICNmOWIxNzg7XHJcbiRjb2xvci13YXJuaW5nLTEwMDA6ICNmYzZhNzA7XHJcbiRjb2xvci13YXJuaW5nLTExMDA6ICNmZmU4YmY7XHJcblxyXG4kY29sb3ItZGFyay0xMDAwOiAjNTU1O1xyXG4kY29sb3ItZGFyay0xMjAwOiAjODg4O1xyXG4kY29sb3ItcmVzb3VyY2U6ICMwMDE3MzE7XHJcbiRsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MC4wM2RlZywgIzE1NmQ4MSAwLjM2JSwgIzM2YWJjNSA5OS45OCUpO1xyXG4kbGluZWFyLWdyYWRpZW50LWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQoOTAuMDNkZWcsIHJnYmEoIzE1NmQ4MSwgMC4xKSAwLjM2JSwgcmdiYSgjMzZhYmM1LCAwLjEpIDk5Ljk4JSk7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "XciD":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/account-header/account-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AccountHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHeaderComponent", function() { return AccountHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class AccountHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountHeaderComponent.ɵfac = function AccountHeaderComponent_Factory(t) { return new (t || AccountHeaderComponent)(); };
AccountHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountHeaderComponent, selectors: [["app-account-header"]], decls: 4, vars: 3, consts: [[1, "b1-page-title"], [1, "b1-title2"]], template: function AccountHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "components.acct.detailAccount"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "r6jU":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/account-edit-modal/account-edit-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AccountEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditModalComponent", function() { return AccountEditModalComponent; });
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/acct.actions */ "GAc8");
/* harmony import */ var _selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selectors/acct.selectors */ "mvWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@shared/directives/b1-icon.directive */ "SYr6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngrx_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngrx-forms */ "atpF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function AccountEditModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountEditModalComponent_div_0_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.activeModal.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountEditModalComponent_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const editForm_r1 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, "components.acct.editAccount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, "componenets.acct.accName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxFormControlState", editForm_r1.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", editForm_r1.isInvalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 9, "actions.save"), " ");
} }
class AccountEditModalComponent {
    constructor(activeModal, store) {
        this.activeModal = activeModal;
        this.store = store;
        this.editForm$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__["editFormSelector"]);
    }
    ngOnInit() {
        this.store.dispatch(Object(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setEditFormInitState"])());
        if (this.name) {
            this.store.dispatch(Object(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["setAccountName"])({ name: this.name }));
        }
    }
    save() {
        this.store.dispatch(Object(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["sumbitEditForm"])());
        this.activeModal.close();
    }
}
AccountEditModalComponent.ɵfac = function AccountEditModalComponent_Factory(t) { return new (t || AccountEditModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AccountEditModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccountEditModalComponent, selectors: [["app-account-edit-modal"]], inputs: { name: "name" }, decls: 1, vars: 1, consts: [["class", "b1-modal-data", 4, "ngrxLet"], [1, "b1-modal-data"], [1, "b1-modal-close"], ["b1-icon", "", "icon", "cancel", 3, "click"], [1, "b1-modal-header"], [1, "b1-title2"], ["name", "form", 1, "b1-modal-body", "b1-modal-wrapper"], [1, "row"], [1, "col-md-12"], [1, "b1-input"], [1, "b1-input__label", "b1-input__label_top"], [1, "w-full", "b1-base", "b1-input__control", "b1-input__control_textarea", 2, "max-width", "360px", "max-height", "360px", 3, "ngrxFormControlState"], ["ngbAutofocus", "", 1, "b1-modal-footer"], ["type", "button", 1, "b1-button-primary", 3, "disabled", "click"], ["b1-icon", "", "icon", "save"]], template: function AccountEditModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AccountEditModalComponent_div_0_Template, 20, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx.editForm$);
    } }, directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_6__["B1IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], ngrx_forms__WEBPACK_IMPORTED_MODULE_8__["NgrxDefaultViewAdapter"], ngrx_forms__WEBPACK_IMPORTED_MODULE_8__["NgrxFormControlDirective"], ngrx_forms__WEBPACK_IMPORTED_MODULE_8__["NgrxStatusCssClassesDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "tqVM":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/accounts-actions/accounts-actions.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AccountsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsActionsComponent", function() { return AccountsActionsComponent; });
/* harmony import */ var _selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @selectors/acct.selectors */ "mvWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngrx_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngrx-forms */ "atpF");
/* harmony import */ var _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@shared/directives/b1-icon.directive */ "SYr6");







function AccountsActionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u20B4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const formState_r1 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxFormState", formState_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxFormControlState", formState_r1.controls.currency.controls.UAH);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxFormControlState", formState_r1.controls.currency.controls.USD);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxFormControlState", formState_r1.controls.currency.controls.EUR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxFormControlState", formState_r1.controls.currency.controls.OTHER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxFormControlState", formState_r1.controls.filter);
} }
class AccountsActionsComponent {
    constructor(store) {
        this.store = store;
        this.formState$ = store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_0__["formSelector"]);
    }
    ngOnInit() {
    }
}
AccountsActionsComponent.ɵfac = function AccountsActionsComponent_Factory(t) { return new (t || AccountsActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AccountsActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountsActionsComponent, selectors: [["app-accounts-actions"]], decls: 1, vars: 1, consts: [[4, "ngrxLet"], ["novalidate", "", 1, "b1-page-actions", 3, "ngrxFormState"], [1, "b1-page-actions__left"], [1, "b1-page-icons", 2, "margin-left", "0"], [1, "b1-group-checkboxs"], [1, "b1-group-checkboxs_item"], ["name", "currency", "id", "\u20B4", "type", "checkbox", 1, "pointer", 3, "ngrxFormControlState"], ["for", "\u20B4", 1, "b1-large", "b1-flex", "b1-align-center", "b1-justify-center", "pointer"], ["name", "currency", "id", "$", "type", "checkbox", 1, "pointer", 3, "ngrxFormControlState"], ["for", "$", 1, "b1-large", "b1-flex", "b1-align-center", "b1-justify-center", "pointer"], ["name", "currency", "id", "\u20AC", "type", "checkbox", 1, "pointer", 3, "ngrxFormControlState"], ["for", "\u20AC", 1, "b1-large", "b1-flex", "b1-align-center", "b1-justify-center", "pointer"], ["name", "currency", "id", "other", "type", "checkbox", 1, "pointer", 3, "ngrxFormControlState"], ["for", "other", 1, "b1-large", "b1-flex", "b1-align-center", "b1-justify-center", "pointer"], ["name", "search", 1, "b1-page-actions__right"], [1, "b1-page-inputWithIcon", "width-100"], ["name", "search", "id", "search", "type", "text", "placeholder", "\u043F\u043E\u0448\u0443\u043A", 1, "b1-input__control", "without-label", "b1-base", "b1-page-input", "resize", 3, "ngrxFormControlState"], ["b1-icon", "", "icon", "search", "for", "search", 1, "resize"]], template: function AccountsActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AccountsActionsComponent_ng_container_0_Template, 25, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngrxLet", ctx.formState$);
    } }, directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["LetDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], ngrx_forms__WEBPACK_IMPORTED_MODULE_5__["NgrxFormDirective"], ngrx_forms__WEBPACK_IMPORTED_MODULE_5__["NgrxStatusCssClassesDirective"], ngrx_forms__WEBPACK_IMPORTED_MODULE_5__["NgrxCheckboxViewAdapter"], ngrx_forms__WEBPACK_IMPORTED_MODULE_5__["NgrxFormControlDirective"], ngrx_forms__WEBPACK_IMPORTED_MODULE_5__["NgrxDefaultViewAdapter"], _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_6__["B1IconDirective"]], styles: ["@media (max-width: 812px) {\n  [_nghost-%COMP%] {\n    margin-top: 64px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjY291bnRzLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFESjtJQUVRLGdCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJhY2NvdW50cy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "umgc":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/accounts-header/accounts-header.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountsHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsHeaderComponent", function() { return AccountsHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class AccountsHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountsHeaderComponent.ɵfac = function AccountsHeaderComponent_Factory(t) { return new (t || AccountsHeaderComponent)(); };
AccountsHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountsHeaderComponent, selectors: [["app-accounts-header"]], decls: 4, vars: 3, consts: [[1, "b1-page-title"], [1, "b1-title2"]], template: function AccountsHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "aside.nav.ACCOUNTS"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "w7hj":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/accounts/components/account-details/account-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsComponent", function() { return AccountDetailsComponent; });
/* harmony import */ var _selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @selectors/acct.selectors */ "mvWm");
/* harmony import */ var _account_edit_modal_account_edit_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-edit-modal/account-edit-modal.component */ "r6jU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ "9A8T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@shared/directives/b1-icon.directive */ "SYr6");
/* harmony import */ var _shared_directives_iban_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@shared/directives/iban.directive */ "jBaC");
/* harmony import */ var _shared_directives_web_class_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@shared/directives/web-class.directive */ "YCCE");
/* harmony import */ var _shared_directives_mobile_more_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@shared/directives/mobile-more.directive */ "fhUz");
/* harmony import */ var _shared_directives_mobile_class_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@shared/directives/mobile-class.directive */ "GHAp");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _shared_pipes_money_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../@shared/pipes/money.pipe */ "RXIs");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function AccountDetailsComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountDetailsComponent_ng_container_0_ng_container_1_div_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const account_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngrxLet; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.editAccount(account_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "money");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "money");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "money");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "money");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountDetailsComponent_ng_container_0_ng_container_1_div_1_Template_a_click_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](50); $event.stopPropagation(); return _r6.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ul", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", account_r1.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 18, account_r1.Balance / 100, ""), " ", account_r1.CurrencyCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 21, account_r1.DebitTurns / 100, ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 24, account_r1.CreditTurns / 100, ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 27, "components.pay.account"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iban", account_r1.Number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 29, "components.acct.acctDetail.futureBalance"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](38, 31, account_r1.PlannedBalance / 100, ""), " ", account_r1.CurrencyCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 34, "components.acct.acctDetail.turnoverDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](45, 36, account_r1.LastActive, "dd.MM.yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 39, "components.acct.newPayment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 41, "components.pay.actions.innerPay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 43, "components.acct.newPayment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](72, 45, "components.pay.actions.inUrainePay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](78, 47, "components.acct.newPayment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](83, 49, "components.pay.actions.swift"));
} }
function AccountDetailsComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "ngx-skeleton-loader", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AccountDetailsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccountDetailsComponent_ng_container_0_ng_container_1_div_1_Template, 84, 51, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AccountDetailsComponent_ng_container_0_ng_container_1_div_2_Template, 33, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const isLoading_r3 = ctx.ngrxLet;
    const account_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", account_r1 && !isLoading_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isLoading_r3);
} }
function AccountDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccountDetailsComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx_r0.isLoading$);
} }
class AccountDetailsComponent {
    constructor(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.account$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_0__["currentAccountSelector"]);
        this.isLoading$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_0__["isLoadingCurrentAccountSelector"]);
    }
    ngOnInit() {
    }
    editAccount(account) {
        const modalRef = this.modalService.open(_account_edit_modal_account_edit_modal_component__WEBPACK_IMPORTED_MODULE_1__["AccountEditModalComponent"]);
        modalRef.componentInstance.name = account.Name;
    }
}
AccountDetailsComponent.ɵfac = function AccountDetailsComponent_Factory(t) { return new (t || AccountDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
AccountDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccountDetailsComponent, selectors: [["app-account-details"]], decls: 1, vars: 1, consts: [[4, "ngrxLet"], ["class", "b1-account", 4, "ngIf"], [1, "b1-account"], [1, "b1-account-header"], [1, "b1-account-header_card"], [1, "b1-flex", "b1-align-center", "b1-justify-between"], [1, "b1-medium", "b1-ellipsis"], [1, "b1-large", "b1-ml-2", "b1-hover-info", "pointer", 3, "click"], ["b1-icon", "", "icon", "edit"], [1, "b1-large", "b1-mt-6"], [1, "b1-base", "b1-bold"], [1, "b1-flex", "b1-align-center"], [1, "b1-color-error", "b1-mr-5", "b1-light"], ["b1-icon", "", "icon", "chevron-down", 1, "b1-mr-2"], [1, "b1-color-success", "b1-light"], ["b1-icon", "", "icon", "chevron-up", 1, "b1-mr-2"], [1, "b1-account-header_info"], [1, "row"], [1, "col-md-12"], [1, "b1-base", "b1-color-light-500"], [1, "b1-base", "b1-bold", "b1-ellipsis"], [3, "iban"], ["webClass", "b1-mt-5", 1, "row"], [1, "col-8"], [1, "col-4"], [1, "b1-card__col", "b1-card__col_dots", "b1-account-more"], [1, "dropdown"], [1, "b1-card__v-dots", "without-after", "b1-rotate-90", 3, "click"], ["webClass", "b1-animate fade-in-up", "role", "menu", "ngbDropdown", "", "mobile-more", "", 1, "b1-dropdown", "b1-bg-light", "test", 2, "width", "360px"], ["dropdown", "ngbDropdown"], ["ng-if", "account.IsPayingAccount", 1, "b1-dropdown__item"], ["webClass", "b1-base", "mobileClass", "b1-medium", "ng-click", "accountsCtrl.accActions.createPayment($event, account.Id,'INNER')", 1, "b1-dropdown__link"], ["b1-icon", "", "icon", "cards", 1, "b1-medium", "b1-mr-3"], ["webClass", "b1-base", "mobileClass", "b1-medium", "ng-click", "accountsCtrl.accActions.createPayment($event, account.Id, 'OUTER')", 1, "b1-dropdown__link"], ["b1-icon", "", "icon", "country", 1, "b1-medium", "b1-mr-3"], ["data-role-in", "Director,Accountant,ForeignCurrencyPaymentsManager", "webClass", "b1-base", "mobileClass", "b1-medium", "ng-show", "accountsCtrl.isForeignCurrency(account.CurrencyCode)", "ng-click", "accountsCtrl.accActions.createPayment($event, account.Id,\n                                   'SWIFT')", 1, "b1-dropdown__link"], ["b1-icon", "", "icon", "swift", 1, "b1-mr-3"], [1, "b1-medium", "b1-ellipsis", "width-100"], ["animation", "pulse"], [1, "b1-color-error", "b1-mr-5", "b1-flex", "b1-align-center"], [1, "b1-color-success", "b1-flex", "b1-align-center"], [1, "b1-micro", "b1-page-data__subtitle", "b1-mb-2", "width-50"], [1, "col-md-6"]], template: function AccountDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AccountDetailsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngrxLet", ctx.account$);
    } }, directives: [_ngrx_component__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_directives_b1_icon_directive__WEBPACK_IMPORTED_MODULE_7__["B1IconDirective"], _shared_directives_iban_directive__WEBPACK_IMPORTED_MODULE_8__["IbanDirective"], _shared_directives_web_class_directive__WEBPACK_IMPORTED_MODULE_9__["WebClassDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _shared_directives_mobile_more_directive__WEBPACK_IMPORTED_MODULE_10__["MobileMoreDirective"], _shared_directives_mobile_class_directive__WEBPACK_IMPORTED_MODULE_11__["MobileClassDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__["NgxSkeletonLoaderComponent"]], pipes: [_shared_pipes_money_pipe__WEBPACK_IMPORTED_MODULE_13__["MoneyPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.b1-display[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-display[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n.b1-title1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n.b1-title2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-title3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-title3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.25;\n  }\n}\n.b1-large[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n@media (max-width: 767px) {\n  .b1-large[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.25;\n  }\n}\n.b1-medium[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura PT Demi\", sans-serif;\n  line-height: 1.25;\n}\n.b1-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.5;\n}\n.b1-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1.25;\n}\n.b1-micro[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Futura PT Book\", sans-serif;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.b1-bold[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Demi\", sans-serif;\n}\n.b1-light[_ngcontent-%COMP%] {\n  font-family: \"Futura PT Book\", sans-serif;\n}\n.b1-account[_ngcontent-%COMP%] {\n  padding: 24px;\n  position: relative;\n}\n@media (max-width: 812px) {\n  .b1-account[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.b1-account-more[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24px;\n  top: 24px;\n}\n@media (max-width: 812px) {\n  .b1-account-more[_ngcontent-%COMP%] {\n    top: -32px;\n    right: 16px;\n  }\n}\n.b1-account-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.b1-account-header_card[_ngcontent-%COMP%] {\n  width: 412px;\n  height: 194px;\n  border-radius: 4px;\n  border: 1px solid #999;\n  padding: 32px;\n}\n@media (max-width: 812px) {\n  .b1-account-header_card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    padding: 16px;\n  }\n}\n.b1-account-header_info[_ngcontent-%COMP%] {\n  margin-left: 64px;\n  width: 100%;\n  max-width: 550px;\n}\n@media (max-width: 812px) {\n  .b1-account-header_info[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-top: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHMub3NjaGFkXFxzY3NzXFxfdHlwb2dyYXBoeS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYWNjb3VudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJRTtFQWpIQSxlQUprQjtFQUtsQix5Q0FBQTtFQUNBLGNBTHlCO0FDZjNCO0FEc0JFO0VBNkdBO0lBNUdFLGVBWGU7SUFZZixpQkFYc0I7RUNSeEI7QUFDRjtBRHFCRTtFQXdHQTtJQXZHRSxlQWxCZTtJQW1CZixpQkFsQnNCO0VDQXhCO0FBQ0Y7QUQySEU7RUFyR0EsZUF0QmlCO0VBdUJqQix5Q0FBQTtFQUNBLGlCQXZCd0I7QUNJMUI7QURxQkU7RUFpR0E7SUFoR0UsZUE3QmU7SUE4QmYsaUJBN0JzQjtFQ1d4QjtBQUNGO0FEb0JFO0VBNEZBO0lBM0ZFLGVBcENlO0lBcUNmLGlCQXBDc0I7RUNtQnhCO0FBQ0Y7QUQ4R0U7RUF6RkEsZUF4Q2lCO0VBeUNqQix5Q0FBQTtFQUNBLGlCQXpDd0I7QUN1QjFCO0FEb0JFO0VBcUZBO0lBcEZFLGVBL0NlO0lBZ0RmLGlCQS9Dc0I7RUM4QnhCO0FBQ0Y7QURtQkU7RUFnRkE7SUEvRUUsZUF0RGM7SUF1RGQsaUJBdERxQjtFQ3NDdkI7QUFDRjtBRGlHRTtFQTdFQSxlQTFEaUI7RUEyRGpCLHlDQUFBO0VBQ0EsaUJBM0R3QjtBQzBDMUI7QURtQkU7RUF5RUE7SUF4RUUsZUFqRWM7SUFrRWQsaUJBakVxQjtFQ2lEdkI7QUFDRjtBRGtCRTtFQW9FQTtJQW5FRSxlQXRFYztJQXVFZCxpQkF0RXFCO0VDdUR2QjtBQUNGO0FEb0ZFO0VBakVBLGVBNUVnQjtFQTZFaEIseUNBQUE7RUFDQSxpQkE3RXVCO0FDNkR6QjtBRGtCRTtFQTZEQTtJQTVERSxlQW5GZTtJQW9GZixpQkFuRnNCO0VDb0V4QjtBQUNGO0FEaUJFO0VBd0RBO0lBdkRFLGVBeEZlO0lBeUZmLGlCQXhGc0I7RUMwRXhCO0FBQ0Y7QUR1RUU7RUFyREEsZUE5RmlCO0VBK0ZqQix5Q0FBQTtFQUNBLGlCQS9Gd0I7QUNnRjFCO0FEc0VFO0VBbkRBLGVBdEdlO0VBdUdmLHlDQUFBO0VBQ0EsZ0JBdkdzQjtBQ3VGeEI7QURxRUU7RUFqREEsZUE5R2dCO0VBK0doQix5Q0FBQTtFQUNBLGlCQS9HdUI7QUM4RnpCO0FEb0VFO0VBL0NBLGVBdEhnQjtFQXVIaEIseUNBQUE7RUFDQSxjQXZIdUI7RUF3SHZCLHlCQUFBO0FDbEJGO0FEa0VFO0VBNUNBLHlDQUFBO0FDbkJGO0FEbUVFO0VBNUNBLHlDQUFBO0FDcEJGO0FEd0JFO0VBakhBLGVBSmtCO0VBS2xCLHlDQUFBO0VBQ0EsY0FMeUI7QUNrRzNCO0FEM0ZFO0VBNkdBO0lBNUdFLGVBWGU7SUFZZixpQkFYc0I7RUN5R3hCO0FBQ0Y7QUQ1RkU7RUF3R0E7SUF2R0UsZUFsQmU7SUFtQmYsaUJBbEJzQjtFQ2lIeEI7QUFDRjtBRFVFO0VBckdBLGVBdEJpQjtFQXVCakIseUNBQUE7RUFDQSxpQkF2QndCO0FDcUgxQjtBRDVGRTtFQWlHQTtJQWhHRSxlQTdCZTtJQThCZixpQkE3QnNCO0VDNEh4QjtBQUNGO0FEN0ZFO0VBNEZBO0lBM0ZFLGVBcENlO0lBcUNmLGlCQXBDc0I7RUNvSXhCO0FBQ0Y7QURIRTtFQXpGQSxlQXhDaUI7RUF5Q2pCLHlDQUFBO0VBQ0EsaUJBekN3QjtBQ3dJMUI7QUQ3RkU7RUFxRkE7SUFwRkUsZUEvQ2U7SUFnRGYsaUJBL0NzQjtFQytJeEI7QUFDRjtBRDlGRTtFQWdGQTtJQS9FRSxlQXREYztJQXVEZCxpQkF0RHFCO0VDdUp2QjtBQUNGO0FEaEJFO0VBN0VBLGVBMURpQjtFQTJEakIseUNBQUE7RUFDQSxpQkEzRHdCO0FDMkoxQjtBRDlGRTtFQXlFQTtJQXhFRSxlQWpFYztJQWtFZCxpQkFqRXFCO0VDa0t2QjtBQUNGO0FEL0ZFO0VBb0VBO0lBbkVFLGVBdEVjO0lBdUVkLGlCQXRFcUI7RUN3S3ZCO0FBQ0Y7QUQ3QkU7RUFqRUEsZUE1RWdCO0VBNkVoQix5Q0FBQTtFQUNBLGlCQTdFdUI7QUM4S3pCO0FEL0ZFO0VBNkRBO0lBNURFLGVBbkZlO0lBb0ZmLGlCQW5Gc0I7RUNxTHhCO0FBQ0Y7QURoR0U7RUF3REE7SUF2REUsZUF4RmU7SUF5RmYsaUJBeEZzQjtFQzJMeEI7QUFDRjtBRDFDRTtFQXJEQSxlQTlGaUI7RUErRmpCLHlDQUFBO0VBQ0EsaUJBL0Z3QjtBQ2lNMUI7QUQzQ0U7RUFuREEsZUF0R2U7RUF1R2YseUNBQUE7RUFDQSxnQkF2R3NCO0FDd014QjtBRDVDRTtFQWpEQSxlQTlHZ0I7RUErR2hCLHlDQUFBO0VBQ0EsaUJBL0d1QjtBQytNekI7QUQ3Q0U7RUEvQ0EsZUF0SGdCO0VBdUhoQix5Q0FBQTtFQUNBLGNBdkh1QjtFQXdIdkIseUJBQUE7QUMrRkY7QUQvQ0U7RUE1Q0EseUNBQUE7QUM4RkY7QUQ5Q0U7RUE1Q0EseUNBQUE7QUM2RkY7QUEvTkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFrT0o7QUFqT0k7RUFISjtJQUlRLGFBQUE7RUFvT047QUFDRjtBQW5PSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFxT1I7QUFwT1E7RUFKSjtJQUtRLFVBQUE7SUFDQSxXQUFBO0VBdU9WO0FBQ0Y7QUFyT0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBdU9SO0FBdE9RO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQXVPWjtBQXRPWTtFQVBKO0lBUVEsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBeU9kO0FBQ0Y7QUF2T1E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXlPWjtBQXhPWTtFQUpKO0lBS1EsU0FBQTtJQUNBLGdCQUFBO0VBMk9kO0FBQ0YiLCJmaWxlIjoiYWNjb3VudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2UtdW5pdDogMTY7XHJcblxyXG4kZm9udC1taWNyby1zaXplOiAxMnB4O1xyXG4kZm9udC1taWNyby1saW5lLWhlaWdodDogMTtcclxuJGZvbnQtc21hbGwtc2l6ZTogMTRweDtcclxuJGZvbnQtc21hbGwtbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiRmb250LWJhc2Utc2l6ZTogMTZweDtcclxuJGZvbnQtYmFzZS1saW5lLWhlaWdodDogMS41O1xyXG4kZm9udC1tZWRpdW0tc2l6ZTogMThweDtcclxuJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4kZm9udC1sYXJnZS1zaXplOiAyNHB4O1xyXG4kZm9udC1sYXJnZS1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUzLXNpemU6IDI4cHg7XHJcbiRmb250LXRpdGxlMy1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUyLXNpemU6IDM2cHg7XHJcbiRmb250LXRpdGxlMi1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtdGl0bGUxLXNpemU6IDQ4cHg7XHJcbiRmb250LXRpdGxlMS1saW5lLWhlaWdodDogMS4yNTtcclxuJGZvbnQtZGlzcGxheS1zaXplOiA2NHB4O1xyXG4kZm9udC1kaXNwbGF5LWxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuQG1peGluIGRpc3BsYXkge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtZGlzcGxheS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LWRpc3BsYXktbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMS1saW5lLWhlaWdodDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTItc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTItbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGl0bGUxIHtcclxuICBmb250LXNpemU6ICRmb250LXRpdGxlMS1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUyLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXRpdGxlMy1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LXRpdGxlMy1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTIge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUyLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUyLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC10aXRsZTMtc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC10aXRsZTMtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0aXRsZTMge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtdGl0bGUzLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1sYXJnZS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LWxhcmdlLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LWxhcmdlLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbGFyZ2UtbGluZS1oZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtbGFyZ2Utc2l6ZTtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAkZm9udC1sYXJnZS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LW1lZGl1bS1zaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRmb250LW1lZGl1bS1saW5lLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtbWVkaXVtLWxpbmUtaGVpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYmFzZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1iYXNlLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtYmFzZS1saW5lLWhlaWdodDtcclxufVxyXG5cclxuQG1peGluIHNtYWxsIHtcclxuICBmb250LXNpemU6ICRmb250LXNtYWxsLXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogJGZvbnQtc21hbGwtbGluZS1oZWlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBtaWNybyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1taWNyby1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6ICRmb250LW1pY3JvLWxpbmUtaGVpZ2h0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkIHtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gbGlnaHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iMSB7XHJcbiAgJi1kaXNwbGF5IHtcclxuICAgIEBpbmNsdWRlIGRpc3BsYXk7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMSB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTE7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMiB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTI7XHJcbiAgfVxyXG5cclxuICAmLXRpdGxlMyB7XHJcbiAgICBAaW5jbHVkZSB0aXRsZTM7XHJcbiAgfVxyXG5cclxuICAmLWxhcmdlIHtcclxuICAgIEBpbmNsdWRlIGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgJi1tZWRpdW0ge1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgJi1iYXNlIHtcclxuICAgIEBpbmNsdWRlIGJhc2U7XHJcbiAgfVxyXG5cclxuICAmLXNtYWxsIHtcclxuICAgIEBpbmNsdWRlIHNtYWxsO1xyXG4gIH1cclxuXHJcbiAgJi1taWNybyB7XHJcbiAgICBAaW5jbHVkZSBtaWNybztcclxuICB9XHJcblxyXG4gICYtYm9sZCB7XHJcbiAgICBAaW5jbHVkZSBib2xkO1xyXG4gIH1cclxuXHJcbiAgJi1saWdodCB7XHJcbiAgICBAaW5jbHVkZSBsaWdodDtcclxuICB9XHJcbn1cclxuXHJcbiRmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xyXG4iLCIuYjEtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLWRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUxIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTIge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUzIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLWxhcmdlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS1tZWRpdW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmIxLWJhc2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uYjEtc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmIxLW1pY3JvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgQm9va1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5iMS1ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbn1cbi5iMS1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5iMS1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtdGl0bGUxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iMS10aXRsZTEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLXRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtdGl0bGUyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbi5iMS10aXRsZTMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmIxLXRpdGxlMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG59XG4uYjEtbGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBEZW1pXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmIxLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYjEtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxufVxuLmIxLW1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIERlbWlcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5iMS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYjEtbWljcm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1dHVyYSBQVCBCb29rXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmIxLWJvbGQge1xuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiLCBzYW5zLXNlcmlmO1xufVxuLmIxLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiRnV0dXJhIFBUIEJvb2tcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmIxLWFjY291bnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmIxLWFjY291bnQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbn1cbi5iMS1hY2NvdW50LW1vcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNHB4O1xuICB0b3A6IDI0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmIxLWFjY291bnQtbW9yZSB7XG4gICAgdG9wOiAtMzJweDtcbiAgICByaWdodDogMTZweDtcbiAgfVxufVxuLmIxLWFjY291bnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmIxLWFjY291bnQtaGVhZGVyX2NhcmQge1xuICB3aWR0aDogNDEycHg7XG4gIGhlaWdodDogMTk0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgcGFkZGluZzogMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuYjEtYWNjb3VudC1oZWFkZXJfY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbn1cbi5iMS1hY2NvdW50LWhlYWRlcl9pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDU1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5iMS1hY2NvdW50LWhlYWRlcl9pbmZvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "x0ii":
/*!***********************************************************************!*\
  !*** ./src/app/modules/accounts/views/accounts/accounts.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/acct.actions */ "GAc8");
/* harmony import */ var _selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @selectors/acct.selectors */ "mvWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _components_accounts_header_accounts_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/accounts-header/accounts-header.component */ "umgc");
/* harmony import */ var _components_accounts_tabs_accounts_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/accounts-tabs/accounts-tabs.component */ "TNsa");
/* harmony import */ var _components_accounts_actions_accounts_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/accounts-actions/accounts-actions.component */ "tqVM");
/* harmony import */ var _shared_components_b1_card_loader_b1_card_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@shared/components/b1-card-loader/b1-card-loader.component */ "M1yg");
/* harmony import */ var _components_accounts_list_accounts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/accounts-list/accounts-list.component */ "GnPv");









class AccountsComponent {
    constructor(store) {
        this.store = store;
        this.accounts$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__["accountsSelector"]);
        this.isLoadingAccounts$ = this.store.select(_selectors_acct_selectors__WEBPACK_IMPORTED_MODULE_1__["isLoadingAccountsSelector"]);
    }
    ngOnInit() {
        this.store.dispatch(Object(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["loadAccounts"])({ reload: true }));
    }
}
AccountsComponent.ɵfac = function AccountsComponent_Factory(t) { return new (t || AccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccountsComponent, selectors: [["app-accounts"]], decls: 8, vars: 1, consts: [[1, "b1-wrapper", "no-wrap-xs", "b1-full-screen"], [1, "full-screen", 2, "position", "relative"], [1, "b1-page-card", "b1-bg-light"], [3, "isLoading"]], template: function AccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-accounts-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-accounts-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-accounts-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "b1-card-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-accounts-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isLoading", ctx.isLoadingAccounts$);
    } }, directives: [_components_accounts_header_accounts_header_component__WEBPACK_IMPORTED_MODULE_4__["AccountsHeaderComponent"], _components_accounts_tabs_accounts_tabs_component__WEBPACK_IMPORTED_MODULE_5__["AccountsTabsComponent"], _components_accounts_actions_accounts_actions_component__WEBPACK_IMPORTED_MODULE_6__["AccountsActionsComponent"], _shared_components_b1_card_loader_b1_card_loader_component__WEBPACK_IMPORTED_MODULE_7__["B1CardLoaderComponent"], _components_accounts_list_accounts_list_component__WEBPACK_IMPORTED_MODULE_8__["AccountsListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "x6s/":
/*!*********************************************************************!*\
  !*** ./src/app/modules/accounts/views/account/account.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/acct.actions */ "GAc8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _components_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/account-header/account-header.component */ "XciD");
/* harmony import */ var _components_account_card_account_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/account-card/account-card.component */ "NWW/");





class AccountComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(Object(_actions_acct_actions__WEBPACK_IMPORTED_MODULE_0__["loadCurrentAccount"])());
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 3, vars: 0, consts: [[1, "b1-wrapper", "no-wrap-xs", "b1-full-screen"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-account-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-account-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_3__["AccountHeaderComponent"], _components_account_card_account_card_component__WEBPACK_IMPORTED_MODULE_4__["AccountCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=modules-accounts-accounts-module.js.map