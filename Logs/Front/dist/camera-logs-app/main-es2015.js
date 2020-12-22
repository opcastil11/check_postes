(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _logs_view_logs_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs-view/logs-view.component */ "./src/app/logs-view/logs-view.component.ts");



class AppComponent {
    constructor() {
        this.title = 'camera-logs-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logs-view");
    } }, directives: [_logs_view_logs_view_component__WEBPACK_IMPORTED_MODULE_1__["LogsViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _logs_view_logs_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logs-view/logs-view.component */ "./src/app/logs-view/logs-view.component.ts");
/* harmony import */ var _dropdown_dropdown_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown/dropdown-basic.component */ "./src/app/dropdown/dropdown-basic.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _logs_view_logs_view_component__WEBPACK_IMPORTED_MODULE_6__["LogsViewComponent"], _dropdown_dropdown_basic_component__WEBPACK_IMPORTED_MODULE_7__["NgbdDropdownBasic"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _logs_view_logs_view_component__WEBPACK_IMPORTED_MODULE_6__["LogsViewComponent"], _dropdown_dropdown_basic_component__WEBPACK_IMPORTED_MODULE_7__["NgbdDropdownBasic"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dropdown/dropdown-basic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dropdown/dropdown-basic.component.ts ***!
  \******************************************************/
/*! exports provided: NgbdDropdownBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasic", function() { return NgbdDropdownBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class NgbdDropdownBasic {
    constructor() { }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cameras = [1, 2];
        });
    }
}
NgbdDropdownBasic.ɵfac = function NgbdDropdownBasic_Factory(t) { return new (t || NgbdDropdownBasic)(); };
NgbdDropdownBasic.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgbdDropdownBasic, selectors: [["ngbd-dropdown-basic"]], decls: 5, vars: 0, consts: [[1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"]], template: function NgbdDropdownBasic_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgbdDropdownBasic, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngbd-dropdown-basic',
                templateUrl: './dropdown-basic.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/logs-view/logs-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/logs-view/logs-view.component.ts ***!
  \**************************************************/
/*! exports provided: LogsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsViewComponent", function() { return LogsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");










function LogsViewComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const status_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.SetfilterLogsByStatus(status_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](status_r5);
} }
function LogsViewComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const norme_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.SetfilterLogsByNorme(norme_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const norme_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](norme_r8);
} }
function LogsViewComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const delete_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.SetfilterLogsByDeleted(delete_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const delete_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](delete_r11);
} }
function LogsViewComponent_tr_66_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_66_tr_33_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const status_r20 = ctx.$implicit; const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.editStatusLog(log_r14, status_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](status_r20);
} }
function LogsViewComponent_tr_66_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_66_tr_39_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const check_r24 = ctx.$implicit; const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.editCheckLog(log_r14, check_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const check_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](check_r24);
} }
function LogsViewComponent_tr_66_tr_45_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_66_tr_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const deleted_r28 = ctx.$implicit; const log_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.editDeleteLog(log_r14, deleted_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deleted_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deleted_r28);
} }
function LogsViewComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_66_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const log_r14 = ctx.$implicit; const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.editDminLog(log_r14, _r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "figure", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_tr_66_Template_figure_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const log_r14 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.onImgClick(log_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, LogsViewComponent_tr_66_tr_33_Template, 3, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, LogsViewComponent_tr_66_tr_39_Template, 3, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, LogsViewComponent_tr_66_tr_45_Template, 3, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.lat_p);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.lon_p);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", log_r14.dmin_telecom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.norme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.pathImage(log_r14.image_path), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.video_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.frame_c);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.last_time_reviewed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.status_edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.check_h);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.check_edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r14.deleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.deleted_edit);
} }
function LogsViewComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "header", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_div_70_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.onCloseClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.currentLog.id, " ", ctx_r4.currentLog.norme, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.pathImage(ctx_r4.currentLog.image_path), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return { itemsPerPage: 100, currentPage: a1 }; };
class LogsViewComponent {
    constructor(http) {
        this.http = http;
        this.displayModal = false;
        this.p = 1;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.getInitLogs();
            this.corsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:9091/'
            });
            this.logs = [];
            this.filterByStatus = "All";
            this.filterByNorme = "All";
            this.filterByDeleted = "All";
            this.button_status = "All";
            this.button_norme = "All";
            this.button_deleted = "All";
            this.button_check = "All";
            this.status_s = ["All", "reviewed", "unreviewed"];
            this.status_edit = ["reviewed", "unreviewed"];
            this.deleted_s = ["All", "active", "deleted"];
            this.deleted_edit = ["active", "deleted"];
            this.normes = ["All", "Fuera de norma", "En norma"];
            this.check_edit = ["correct", "check"];
            setTimeout(function () { location.reload(); }, 1200000);
            const fetchResponse = yield fetch('http://localhost:9091/records');
            const responseObject = yield fetchResponse.json();
            this.logs = responseObject;
            this.logs_to_show = this.logs;
        });
    }
    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
    onImgClick(value) {
        this.currentLog = this.logs_to_show.filter((log) => log.id === value)[0];
        this.displayModal = true;
    }
    onCloseClick() {
        this.displayModal = false;
        this.currentLog = undefined;
    }
    formatId(value) {
        return "link";
    }
    ;
    SetfilterLogsByStatus(value) {
        this.filterByStatus = value;
        this.filterLogs();
    }
    ;
    SetfilterLogsByNorme(value) {
        this.filterByNorme = value;
        this.filterLogs();
    }
    ;
    SetfilterLogsByDeleted(value) {
        this.filterByDeleted = value;
        this.filterLogs();
    }
    ;
    filterLogs() {
        if (this.filterByStatus === "All" && this.filterByNorme === "All") {
            var filtered = this.logs;
            this.button_status = "All";
            this.button_norme = "All";
        }
        else {
            if (this.filterByNorme === "All") {
                var filtered = this.logs.filter(log => log.status == this.filterByStatus);
            }
            else if (this.filterByStatus === "All") {
                var filtered = this.logs.filter(log => log.norme == this.filterByNorme);
            }
            else {
                var filtered = this.logs.filter(log => log.status == this.filterByStatus).filter(log => log.norme == this.filterByNorme);
            }
            this.button_status = this.filterByStatus;
            this.button_norme = this.filterByNorme;
        }
        this.logs_to_show = filtered;
        if (this.filterByDeleted === "All") {
            this.button_deleted = "All";
        }
        else {
            this.logs_to_show = this.logs_to_show.filter(log => log.deleted == this.filterByDeleted);
            this.button_deleted = this.filterByDeleted;
        }
        ;
    }
    ;
    errorImage(image) {
        image.src = "http://localhost:9091/images/no_image.png";
    }
    ;
    pathImage(value) {
        if (value == '') {
            return "http://localhost:9091/images/no_image.png";
        }
        else {
            var path = "http://localhost:9091/images?image_path=" + value;
            console.log(path);
            return path;
        }
    }
    ;
    editStatusLog(log, status) {
        var id = log.id;
        var requestOptions = {
            headers: this.corsHeaders,
        };
        var path = 'http://localhost:9091/records/' + id + '?type=status&value=' + status;
        this.http.put(path, requestOptions).subscribe(data => {
            var log_d = this.logs.filter(log => log.id == id);
            log_d.status = data[25];
            log.status = data[25];
            log_d.last_time_reviewed = data[24];
            log.last_time_reviewed = data[24];
            this.filterLogs();
        }, error => {
            console.error('There was an error!', error);
        });
    }
    ;
    editDminLog(log, input_dmin_telecom) {
        var id = log.id;
        var dmin_telecom = input_dmin_telecom.value;
        var requestOptions = {
            headers: this.corsHeaders,
        };
        var path = 'http://localhost:9091/records/' + id + '?type=dmin_telecom&value=' + dmin_telecom;
        this.http.put(path, requestOptions).subscribe(data => {
            var log_d = this.logs.filter(log => log.id == id);
            log_d.dmin_telecom = data[4];
            log.dmin_telecom = data[4];
            log_d.norme = data[5];
            log.norme = data[5];
            log_d.last_time_reviewed = data[24];
            log.last_time_reviewed = data[24];
            this.filterLogs();
        }, error => {
            console.error('There was an error!', error);
        });
    }
    ;
    editCheckLog(log, check) {
        var id = log.id;
        var requestOptions = {
            headers: this.corsHeaders,
        };
        var path = 'http://localhost:9091/records/' + id + '?type=check_h&value=' + check;
        this.http.put(path, requestOptions).subscribe(data => {
            var log_d = this.logs.filter(log => log.id == id);
            log_d.check_h = data[26];
            log.check_h = data[26];
            this.filterLogs();
        }, error => {
            console.error('There was an error!', error);
        });
    }
    ;
    editDeleteLog(log, deleted) {
        var id = log.id;
        var requestOptions = {
            headers: this.corsHeaders,
        };
        var path = 'http://localhost:9091/records/' + id + '?type=deleted&value=' + deleted;
        this.http.put(path, requestOptions).subscribe(data => {
            var log_d = this.logs.filter(log => log.id == id);
            log_d.deleted = data[27];
            log.deleted = data[27];
            this.filterLogs();
        }, error => {
            console.error('There was an error!', error);
        });
    }
    ;
    // deleteRecord(log: any){
    //   var id = log.id;
    //   var requestOptions = {                                                                                                                                                                                 
    //     headers: this.corsHeaders, 
    //   };
    //   var path = 'http://localhost:9091/records/'+id;
    //   this.http.delete<any>(path, requestOptions).subscribe(data => {
    //     this.logs = this.logs.filter(function(log) { return log.id != id });
    //     // log_d.dmin_telecom = data[4];
    //     // log.dmin_telecom = data[4];
    //     // log_d.norme = data[5];
    //     // log.norme = data[5];
    //     // log_d.last_time_reviewed = data[12];
    //     // log.last_time_reviewed = data[12];
    //     this.filterLogs();
    //   },error => {
    //       console.error('There was an error!', error);
    //   })
    // };
    clearExcel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (confirm("Estas seguro que deseas limpiar el excel?")) {
                yield fetch('http://localhost:9091/clear');
                console.log("clearExcel");
                setTimeout(function () { location.reload(); }, 2000);
            }
        });
    }
    ;
}
LogsViewComponent.ɵfac = function LogsViewComponent_Factory(t) { return new (t || LogsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LogsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogsViewComponent, selectors: [["app-logs-view"]], decls: 71, vars: 17, consts: [[1, "container", 2, "max-width", "1500px"], [1, "navbar"], [1, "navbar-item"], [1, "title", "is-4", 2, "margin-right", "10px"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 2, "height", "85"], [4, "ngFor", "ngForOf"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", 2, "margin-left", "15px"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", 2, "margin-left", "30px"], [2, "margin-left", "50px"], ["href", "http://localhost:9091/download", "download", ""], ["href", "http://localhost:9091/download_final", "download", ""], ["href", "#", 3, "click"], [1, "navbar", 2, "z-index", "0"], ["type", "text", "name", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "is-fullwidth", "is-hoverable", "is-bordered"], [3, "pageChange"], ["class", "modal is-active", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "row"], [2, "width", "50%", "margin-left", "6px", 3, "value"], ["input_dmin_telecom", ""], [1, "btn", "btn-outline-primary", 2, "width", "36%", "margin-left", "9px", "font-size", "10px", 3, "click"], [1, "image", "is-3by2", 3, "click"], ["alt", "", "onerror", "errorImage(this)", 3, "src"], [1, "modal", "is-active"], [1, "modal-background"], [1, "modal-card", "is-clipped"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body"], [1, "image", "is-4by3"], [3, "src"]], template: function LogsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Display Events Detected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LogsViewComponent_tr_10_Template, 3, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LogsViewComponent_tr_16_Template, 3, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LogsViewComponent_tr_22_Template, 3, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Download revised excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Download final excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogsViewComponent_Template_a_click_30_listener() { return ctx.clearExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Clear excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LogsViewComponent_Template_input_ngModelChange_33_listener($event) { return ctx.filtered = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "ID Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Dmin_Telecom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Norme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Video T");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Frame C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Reviewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Check Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, LogsViewComponent_tr_66_Template, 46, 17, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "pagination-controls", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function LogsViewComponent_Template_pagination_controls_pageChange_69_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, LogsViewComponent_div_70_Template, 10, 3, "div", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.button_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.status_s);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.button_norme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.normes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.button_deleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.deleted_s);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filtered);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](67, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](68, 12, ctx.logs_to_show, ctx.filtered), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayModal);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipe"]], styles: ["td[_ngcontent-%COMP%]:first-child    + td[_ngcontent-%COMP%]\n { \n  width: 11% ;\n  overflow-wrap: anywhere;\n\n }\ntd[_ngcontent-%COMP%]:first-child    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]\n { \n  width: 5% ;\n  overflow-wrap: anywhere;\n\n }\ntd[_ngcontent-%COMP%]:first-child    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]\n { \n  width: 5% ;\n  overflow-wrap: anywhere;\n\n }\ntd[_ngcontent-%COMP%]:first-child    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]\n { \n  width: 5% ;\n  overflow-wrap: anywhere;\n\n }\ntd[_ngcontent-%COMP%]:first-child    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%]\n { \n  width: 7% ;\n  overflow-wrap: anywhere;\n\n }\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #3498DB;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\n  background-color: #2980B9;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #ddd}\n\n.show[_ngcontent-%COMP%] {display:block;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncy12aWV3L2xvZ3Mtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7RUFDWCx1QkFBdUI7O0NBRXhCO0FBQ0Q7O0VBRUUsVUFBVTtFQUNWLHVCQUF1Qjs7Q0FFeEI7QUFDRDs7RUFFRSxVQUFVO0VBQ1YsdUJBQXVCOztDQUV4QjtBQUNBOztFQUVDLFVBQVU7RUFDVix1QkFBdUI7O0NBRXhCO0FBQ0E7O0VBRUMsVUFBVTtFQUNWLHVCQUF1Qjs7Q0FFeEI7QUFDRDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBLHFDQUFxQztBQUNyQztFQUNFLHlCQUF5QjtBQUMzQjtBQUVBLGtFQUFrRTtBQUNsRTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHNCQUFzQjtBQUVqRCxxSUFBcUk7QUFDckksT0FBTyxhQUFhLENBQUMiLCJmaWxlIjoic3JjL2FwcC9sb2dzLXZpZXcvbG9ncy12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZDpmaXJzdC1jaGlsZCArIHRkXG4geyBcbiAgd2lkdGg6IDExJSA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuXG4gfVxudGQ6Zmlyc3QtY2hpbGQgKyB0ZCArIHRkICsgdGRcbiB7IFxuICB3aWR0aDogNSUgO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcblxuIH1cbnRkOmZpcnN0LWNoaWxkICsgdGQgKyB0ZCArIHRkICsgdGRcbiB7IFxuICB3aWR0aDogNSUgO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcblxuIH1cbiB0ZDpmaXJzdC1jaGlsZCArIHRkICsgdGQgKyB0ZCArIHRkICsgdGRcbiB7IFxuICB3aWR0aDogNSUgO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcblxuIH1cbiB0ZDpmaXJzdC1jaGlsZCArIHRkICsgdGQgKyB0ZCArIHRkICsgdGQgKyB0ZCArIHRkICsgdGQgKyB0ZFxuIHsgXG4gIHdpZHRoOiA3JSA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuXG4gfVxuLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xufVxuXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkfVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xuLnNob3cge2Rpc3BsYXk6YmxvY2s7fSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-logs-view',
                templateUrl: './logs-view.component.html',
                styleUrls: ['./logs-view.component.css'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kai/Desktop/PROGRAMACION/check_postes/check_postes/Logs/Front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map