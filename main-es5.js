function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bubble-chart/bubble-chart.component */
    "./src/app/bubble-chart/bubble-chart.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'webapp-landing';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 33,
      vars: 0,
      consts: [["target", "_blank", "href", "https://twitter.com/_n_o_b_e_"], ["target", "_blank", "href", "https://github.com/nobebon/webapp-fortnite-landing-spot"], ["target", "_blank", "href", "https://getbootstrap.com"], ["target", "_blank", "href", "https://angular.io"], ["target", "_blank", "href", "https://valor-software.com/ng2-charts/"], ["target", "_blank", "href", "https://chartjs.org"], ["target", "_blank", "href", "https://www.npmjs.com/package/chartjs-plugin-datalabels"], ["target", "_blank", "href", "https://www.reddit.com/r/FortniteCompetitive/comments/f86wjq/dreamhack_anaheim_2020_ft_fortnite_statistics_by/"], [2, "width", "100%"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dreamhack Anaheim 2020 - Landing spots - Final ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Developed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "nobe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Github repo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | Powered by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ng2-charts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ChartJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "chartjs-plugin-datalabels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Data by Alpa / War Legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-bubble-chart", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");
        }
      },
      directives: [_bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_1__["BubbleChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bubble-chart/bubble-chart.component */
    "./src/app/bubble-chart/bubble-chart.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_5__["BubbleChartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_5__["BubbleChartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bubble-chart/bubble-chart.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/bubble-chart/bubble-chart.component.ts ***!
    \********************************************************/

  /*! exports provided: BubbleChartComponent */

  /***/
  function srcAppBubbleChartBubbleChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BubbleChartComponent", function () {
      return BubbleChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! chartjs-plugin-datalabels */
    "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
    /* harmony import */


    var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _assets_test_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/test.json */
    "./src/assets/test.json");

    var _assets_test_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/test.json */
    "./src/assets/test.json", 1);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BubbleChartComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BubbleChartComponent_button_8_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var idx_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.changeData(idx_r3 + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r2);
      }
    }

    function BubbleChartComponent_span_10_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BubbleChartComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BubbleChartComponent_span_10_span_1_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var leg_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", leg_r6.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0 ", leg_r6.name, " ");
      }
    }

    var BubbleChartComponent =
    /*#__PURE__*/
    function () {
      function BubbleChartComponent() {
        _classCallCheck(this, BubbleChartComponent);

        this.bubbleChartOptions = {
          responsive: false,
          animation: {
            duration: 0
          },
          legend: {
            display: false,
            position: 'top'
          },
          scales: {
            xAxes: [{
              display: false,
              ticks: {
                min: 0,
                max: 2048,
                padding: 0
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                min: 0,
                max: 2048,
                padding: 0
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function label(tooltipItem, data) {
                var lab;
                lab = ' (' + (tooltipItem.datasetIndex + 1).toString() + ')  ' + data.datasets[tooltipItem.datasetIndex].label;

                if (data.datasets[tooltipItem.datasetIndex].data.length > 1) {
                  lab = lab + ' - Game ' + (tooltipItem.index + 1).toString();
                }

                return lab;
              }
            }
          },
          plugins: {
            datalabels: {
              color: 'black',
              font: {
                size: 7,
                weight: 'bold'
              },
              formatter: function formatter(value, context) {
                return context.datasetIndex + 1;
              }
            }
          }
        };
        this.bubleChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__];
        this.bubbleChartType = 'bubble';
        this.bubbleChartLegend = true;
      }

      _createClass(BubbleChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bubbleChartData = JSON.parse(JSON.stringify(_assets_test_json__WEBPACK_IMPORTED_MODULE_2__));
          this.gamesList = this.getGamesList();
          this.legends = this.getLegendsList();
        }
      }, {
        key: "getGamesList",
        value: function getGamesList() {
          var result = [];
          var numGames = 0;
          this.bubbleChartData.forEach(function (dataset) {
            if (dataset.data && Array.isArray(dataset.data)) {
              numGames = numGames >= dataset.data.length ? numGames : dataset.data.length;
            }
          });

          for (var i = 0; i < numGames; i++) {
            result.push('Game ' + (i + 1));
          }

          return result;
        }
      }, {
        key: "getLegendsList",
        value: function getLegendsList() {
          var result = [];
          this.bubbleChartData.forEach(function (dataset, index) {
            if (dataset.backgroundColor && dataset.label) {
              var obj = {
                color: '',
                name: '',
                index: 0
              };

              if (typeof dataset.backgroundColor === 'string') {
                obj.color = dataset.backgroundColor;
              } else {
                obj.color = 'black';
              }

              obj.name = dataset.label;
              obj.index = index + 1;
              result.push(obj);
            }
          });
          return result;
        }
      }, {
        key: "changeData",
        value: function changeData(index) {
          if (index === 0) {
            this.bubbleChartData = JSON.parse(JSON.stringify(_assets_test_json__WEBPACK_IMPORTED_MODULE_2__));
          } else {
            var clone = JSON.parse(JSON.stringify(_assets_test_json__WEBPACK_IMPORTED_MODULE_2__));

            _assets_test_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (elt, idx) {
              if (elt.data.length >= index) {
                var temp = [];
                temp.push(elt.data[index - 1]);
                clone[idx].data = temp;
              } else {
                clone[idx].data = [];
              }
            });

            this.bubbleChartData = clone;
          }
        }
      }]);

      return BubbleChartComponent;
    }();

    BubbleChartComponent.ɵfac = function BubbleChartComponent_Factory(t) {
      return new (t || BubbleChartComponent)();
    };

    BubbleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BubbleChartComponent,
      selectors: [["app-bubble-chart"]],
      decls: 11,
      vars: 6,
      consts: [[1, "w-100"], [1, "row", "w-100"], [1, "col", 2, "max-width", "750px"], ["baseChart", "", "height", "720", "width", "720", 3, "datasets", "options", "legend", "chartType"], [1, "col", 2, "max-width", "120px"], ["role", "group", 1, "btn-group-vertical"], ["type", "button", "autofocus", "", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngFor", "ngForOf"], [1, "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [4, "ngIf"], [1, "badge", 2, "background-color", "black", "color", "white"], [1, "badge", "badge-light"]],
      template: function BubbleChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BubbleChartComponent_Template_button_click_6_listener($event) {
            return ctx.changeData(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BubbleChartComponent_button_8_Template, 2, 1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BubbleChartComponent_span_10_Template, 6, 5, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.bubbleChartData)("options", ctx.bubbleChartOptions)("legend", ctx.bubbleChartLegend)("chartType", ctx.bubbleChartType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gamesList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.legends);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["canvas[_ngcontent-%COMP%] {\r\n    background-image: url('C2S1_map_720x720.jpg');\r\n    background-repeat: no-repeat;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnViYmxlLWNoYXJ0L2J1YmJsZS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkNBQTBEO0lBQzFELDRCQUE0QjtDQUMvQjs7Q0FFQTs7Ozs7O0lBTUciLCJmaWxlIjoic3JjL2FwcC9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0MyUzFfbWFwXzcyMHg3MjAuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuIH1cclxuXHJcbiAvKiAuY29udGFpbmVyIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuIH1cclxuXHJcbiAuYm9yZGVyIHtcclxuICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gfSAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BubbleChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bubble-chart',
          templateUrl: './bubble-chart.component.html',
          styleUrls: ['./bubble-chart.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/test.json":
  /*!******************************!*\
    !*** ./src/assets/test.json ***!
    \******************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, default */

  /***/
  function srcAssetsTestJson(module) {
    module.exports = JSON.parse("[{\"data\":[{\"x\":1246,\"y\":396,\"r\":6},{\"x\":1247,\"y\":382,\"r\":6},{\"x\":1247,\"y\":395,\"r\":6},{\"x\":1244,\"y\":360,\"r\":6},{\"x\":1257,\"y\":393,\"r\":6},{\"x\":1259,\"y\":333,\"r\":6},{\"x\":1244,\"y\":397,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"100T Rehx\",\"backgroundColor\":\"red\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"red\",\"hoverBorderColor\":\"red\"},{\"data\":[{\"x\":1598,\"y\":1804,\"r\":6},{\"x\":1603,\"y\":1809,\"r\":6},{\"x\":1598,\"y\":1810,\"r\":6},{\"x\":1601,\"y\":1857,\"r\":6},{\"x\":1607,\"y\":1808,\"r\":6},{\"x\":1594,\"y\":1790,\"r\":6},{\"x\":1600,\"y\":1806,\"r\":6},{\"x\":1603,\"y\":1810,\"r\":6}],\"label\":\"187 cyfare\",\"backgroundColor\":\"yellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"yellow\",\"hoverBorderColor\":\"yellow\"},{\"data\":[{\"x\":409,\"y\":1274,\"r\":6},{\"x\":418,\"y\":1288,\"r\":6},{\"x\":413,\"y\":1281,\"r\":6},{\"x\":419,\"y\":1287,\"r\":6},{\"x\":432,\"y\":1293,\"r\":6},{\"x\":414,\"y\":1285,\"r\":6},{\"x\":415,\"y\":1281,\"r\":6},{\"x\":424,\"y\":1288,\"r\":6}],\"label\":\"alecc .\",\"backgroundColor\":\"cyan\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"cyan\",\"hoverBorderColor\":\"cyan\"},{\"data\":[{\"x\":873,\"y\":1872,\"r\":6},{\"x\":881,\"y\":1882,\"r\":6},{\"x\":865,\"y\":1881,\"r\":6},{\"x\":997,\"y\":1866,\"r\":6},{\"x\":878,\"y\":1881,\"r\":6},{\"x\":873,\"y\":1871,\"r\":6},{\"x\":873,\"y\":1874,\"r\":6},{\"x\":996,\"y\":1864,\"r\":6}],\"label\":\"Assault Vohade\",\"backgroundColor\":\"magenta\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"magenta\",\"hoverBorderColor\":\"magenta\"},{\"data\":[{\"x\":1411,\"y\":1729,\"r\":6},{\"x\":663,\"y\":485,\"r\":6},{\"x\":1410,\"y\":1728,\"r\":6},{\"x\":1411,\"y\":1729,\"r\":6},{\"x\":1408,\"y\":1725,\"r\":6},{\"x\":1416,\"y\":1732,\"r\":6},{\"x\":257,\"y\":1175,\"r\":6},{\"x\":1415,\"y\":1729,\"r\":6}],\"label\":\"BBG Nittle.\",\"backgroundColor\":\"pink\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"pink\",\"hoverBorderColor\":\"pink\"},{\"data\":[{\"x\":801,\"y\":1126,\"r\":6},{\"x\":801,\"y\":1125,\"r\":6},{\"x\":801,\"y\":1128,\"r\":6},{\"x\":1399,\"y\":1618,\"r\":6},{\"x\":801,\"y\":1130,\"r\":6},{\"x\":694,\"y\":1189,\"r\":6},{\"x\":801,\"y\":1125,\"r\":6},{\"x\":801,\"y\":1127,\"r\":6}],\"label\":\"BeckTHD\",\"backgroundColor\":\"dimgray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"dimgray\",\"hoverBorderColor\":\"dimgray\"},{\"data\":[{\"x\":1378,\"y\":1335,\"r\":6},{\"x\":1374,\"y\":1344,\"r\":6},{\"x\":1377,\"y\":1334,\"r\":6},{\"x\":1376,\"y\":1341,\"r\":6},{\"x\":1390,\"y\":1348,\"r\":6},{\"x\":1378,\"y\":1336,\"r\":6},{\"x\":1379,\"y\":1335,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"BL Raifla\",\"backgroundColor\":\"slateblue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"slateblue\",\"hoverBorderColor\":\"slateblue\"},{\"data\":[{\"x\":1040,\"y\":439,\"r\":6},{\"x\":1040,\"y\":440,\"r\":6},{\"x\":1251,\"y\":510,\"r\":6},{\"x\":1040,\"y\":438,\"r\":6},{\"x\":1131,\"y\":735,\"r\":6},{\"x\":1031,\"y\":431,\"r\":6},{\"x\":1249,\"y\":514,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"blacky.BDS\",\"backgroundColor\":\"indianRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"indianRed\",\"hoverBorderColor\":\"indianRed\"},{\"data\":[{\"x\":1625,\"y\":1295,\"r\":6},{\"x\":780,\"y\":382,\"r\":6},{\"x\":861,\"y\":1464,\"r\":6},{\"x\":519,\"y\":370,\"r\":6},{\"x\":839,\"y\":812,\"r\":6},{\"x\":557,\"y\":394,\"r\":6},{\"x\":793,\"y\":364,\"r\":6},{\"x\":622,\"y\":386,\"r\":6}],\"label\":\"bumpaah\",\"backgroundColor\":\"lightYellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightYellow\",\"hoverBorderColor\":\"lightYellow\"},{\"data\":[{\"x\":812,\"y\":457,\"r\":6},{\"x\":815,\"y\":463,\"r\":6},{\"x\":813,\"y\":458,\"r\":6},{\"x\":811,\"y\":455,\"r\":6},{\"x\":844,\"y\":463,\"r\":6},{\"x\":810,\"y\":460,\"r\":6},{\"x\":817,\"y\":454,\"r\":6},{\"x\":810,\"y\":452,\"r\":6}],\"label\":\"CLG Jay.\",\"backgroundColor\":\"darkRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkRed\",\"hoverBorderColor\":\"darkRed\"},{\"data\":[{\"x\":516,\"y\":1238,\"r\":6},{\"x\":494,\"y\":1239,\"r\":6},{\"x\":519,\"y\":1235,\"r\":6},{\"x\":493,\"y\":1239,\"r\":6},{\"x\":492,\"y\":1239,\"r\":6},{\"x\":492,\"y\":1240,\"r\":6},{\"x\":493,\"y\":1239,\"r\":6},{\"x\":492,\"y\":1241,\"r\":6}],\"label\":\"coL Punisher\",\"backgroundColor\":\"darkviolet\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkviolet\",\"hoverBorderColor\":\"darkviolet\"},{\"data\":[{\"x\":1136,\"y\":261,\"r\":6},{\"x\":1136,\"y\":261,\"r\":6},{\"x\":1136,\"y\":262,\"r\":6},{\"x\":1133,\"y\":262,\"r\":6},{\"x\":1079,\"y\":263,\"r\":6},{\"x\":1134,\"y\":262,\"r\":6},{\"x\":1135,\"y\":261,\"r\":6},{\"x\":1142,\"y\":264,\"r\":6}],\"label\":\"COOLER Noward\",\"backgroundColor\":\"lightslategray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightslategray\",\"hoverBorderColor\":\"lightslategray\"},{\"data\":[{\"x\":860,\"y\":1471,\"r\":6},{\"x\":870,\"y\":1470,\"r\":6},{\"x\":858,\"y\":1497,\"r\":6},{\"x\":858,\"y\":1494,\"r\":6},{\"x\":857,\"y\":1474,\"r\":6},{\"x\":856,\"y\":1471,\"r\":6},{\"x\":856,\"y\":1466,\"r\":6},{\"x\":857,\"y\":1466,\"r\":6}],\"label\":\"CoolPenguinX6\",\"backgroundColor\":\"olivedrab\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"olivedrab\",\"hoverBorderColor\":\"olivedrab\"},{\"data\":[{\"x\":668,\"y\":1778,\"r\":6},{\"x\":625,\"y\":1896,\"r\":6},{\"x\":672,\"y\":1782,\"r\":6},{\"x\":657,\"y\":792,\"r\":6},{\"x\":715,\"y\":1713,\"r\":6},{\"x\":1337,\"y\":884,\"r\":6},{\"x\":716,\"y\":1713,\"r\":6},{\"x\":710,\"y\":833,\"r\":6}],\"label\":\"CrazyiConick\",\"backgroundColor\":\"darkKhaki\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkKhaki\",\"hoverBorderColor\":\"darkKhaki\"},{\"data\":[{\"x\":631,\"y\":550,\"r\":6},{\"x\":654,\"y\":600,\"r\":6},{\"x\":619,\"y\":547,\"r\":6},{\"x\":608,\"y\":518,\"r\":6},{\"x\":661,\"y\":495,\"r\":6},{\"x\":611,\"y\":515,\"r\":6},{\"x\":0,\"y\":0,\"r\":0},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Dabzi.\",\"backgroundColor\":\"royalBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"royalBlue\",\"hoverBorderColor\":\"royalBlue\"},{\"data\":[{\"x\":997,\"y\":243,\"r\":6},{\"x\":997,\"y\":242,\"r\":6},{\"x\":999,\"y\":248,\"r\":6},{\"x\":997,\"y\":243,\"r\":6},{\"x\":997,\"y\":247,\"r\":6},{\"x\":997,\"y\":244,\"r\":6},{\"x\":996,\"y\":255,\"r\":6},{\"x\":1004,\"y\":250,\"r\":6}],\"label\":\"dennsheezy\",\"backgroundColor\":\"darkgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkgreen\",\"hoverBorderColor\":\"darkgreen\"},{\"data\":[{\"x\":412,\"y\":597,\"r\":6},{\"x\":481,\"y\":532,\"r\":6},{\"x\":412,\"y\":594,\"r\":6},{\"x\":412,\"y\":595,\"r\":6},{\"x\":417,\"y\":569,\"r\":6},{\"x\":412,\"y\":596,\"r\":6},{\"x\":420,\"y\":578,\"r\":6},{\"x\":424,\"y\":590,\"r\":6}],\"label\":\"Festivalxd\",\"backgroundColor\":\"springgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"springgreen\",\"hoverBorderColor\":\"springgreen\"},{\"data\":[{\"x\":1806,\"y\":747,\"r\":6},{\"x\":1815,\"y\":748,\"r\":6},{\"x\":1809,\"y\":748,\"r\":6},{\"x\":1814,\"y\":749,\"r\":6},{\"x\":1102,\"y\":1289,\"r\":6},{\"x\":1813,\"y\":747,\"r\":6},{\"x\":1814,\"y\":721,\"r\":6},{\"x\":1813,\"y\":748,\"r\":6}],\"label\":\"Gen.G Moqiiǃ\",\"backgroundColor\":\"lightBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightBlue\",\"hoverBorderColor\":\"lightBlue\"},{\"data\":[{\"x\":1135,\"y\":742,\"r\":6},{\"x\":1131,\"y\":758,\"r\":6},{\"x\":1143,\"y\":741,\"r\":6},{\"x\":1136,\"y\":740,\"r\":6},{\"x\":1188,\"y\":785,\"r\":6},{\"x\":1057,\"y\":808,\"r\":6},{\"x\":1187,\"y\":782,\"r\":6},{\"x\":1186,\"y\":782,\"r\":6}],\"label\":\"Ghost Bizzle\",\"backgroundColor\":\"deepskyBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"deepskyBlue\",\"hoverBorderColor\":\"deepskyBlue\"},{\"data\":[{\"x\":1543,\"y\":1451,\"r\":6},{\"x\":1530,\"y\":1583,\"r\":6},{\"x\":703,\"y\":550,\"r\":6},{\"x\":1528,\"y\":1572,\"r\":6},{\"x\":798,\"y\":1127,\"r\":6},{\"x\":1540,\"y\":1451,\"r\":6},{\"x\":1540,\"y\":1450,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Granit SUBO\",\"backgroundColor\":\"orange\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"orange\",\"hoverBorderColor\":\"orange\"},{\"data\":[{\"x\":496,\"y\":717,\"r\":6},{\"x\":508,\"y\":716,\"r\":6},{\"x\":501,\"y\":736,\"r\":6},{\"x\":509,\"y\":716,\"r\":6},{\"x\":517,\"y\":729,\"r\":6},{\"x\":506,\"y\":716,\"r\":6},{\"x\":524,\"y\":723,\"r\":6},{\"x\":515,\"y\":725,\"r\":6}],\"label\":\"heretics pgod -\",\"backgroundColor\":\"red\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"red\",\"hoverBorderColor\":\"red\"},{\"data\":[{\"x\":515,\"y\":1556,\"r\":6},{\"x\":566,\"y\":1576,\"r\":6},{\"x\":518,\"y\":1555,\"r\":6},{\"x\":566,\"y\":1576,\"r\":6},{\"x\":516,\"y\":1553,\"r\":6},{\"x\":520,\"y\":1556,\"r\":6},{\"x\":516,\"y\":1555,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Kenshi士\",\"backgroundColor\":\"yellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"yellow\",\"hoverBorderColor\":\"yellow\"},{\"data\":[{\"x\":1745,\"y\":1129,\"r\":6},{\"x\":1738,\"y\":1130,\"r\":6},{\"x\":1738,\"y\":1129,\"r\":6},{\"x\":1744,\"y\":1129,\"r\":6},{\"x\":1745,\"y\":1131,\"r\":6},{\"x\":1742,\"y\":1129,\"r\":6},{\"x\":1739,\"y\":1131,\"r\":6},{\"x\":1745,\"y\":1131,\"r\":6}],\"label\":\"Khanada 3200 dpi\",\"backgroundColor\":\"cyan\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"cyan\",\"hoverBorderColor\":\"cyan\"},{\"data\":[{\"x\":440,\"y\":917,\"r\":6},{\"x\":418,\"y\":920,\"r\":6},{\"x\":438,\"y\":916,\"r\":6},{\"x\":418,\"y\":919,\"r\":6},{\"x\":440,\"y\":921,\"r\":6},{\"x\":440,\"y\":918,\"r\":6},{\"x\":446,\"y\":915,\"r\":6},{\"x\":440,\"y\":916,\"r\":6}],\"label\":\"kolorfvl\",\"backgroundColor\":\"magenta\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"magenta\",\"hoverBorderColor\":\"magenta\"},{\"data\":[{\"x\":1435,\"y\":1211,\"r\":6},{\"x\":1452,\"y\":1263,\"r\":6},{\"x\":1340,\"y\":1244,\"r\":6},{\"x\":1434,\"y\":1211,\"r\":6},{\"x\":1376,\"y\":1342,\"r\":6},{\"x\":1312,\"y\":1118,\"r\":6},{\"x\":1340,\"y\":1247,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Legacy Khetzui\",\"backgroundColor\":\"pink\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"pink\",\"hoverBorderColor\":\"pink\"},{\"data\":[{\"x\":1521,\"y\":800,\"r\":6},{\"x\":1518,\"y\":907,\"r\":6},{\"x\":1525,\"y\":902,\"r\":6},{\"x\":1521,\"y\":802,\"r\":6},{\"x\":1529,\"y\":944,\"r\":6},{\"x\":1521,\"y\":804,\"r\":6},{\"x\":1520,\"y\":800,\"r\":6},{\"x\":1537,\"y\":905,\"r\":6}],\"label\":\"LG Hogman\",\"backgroundColor\":\"dimgray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"dimgray\",\"hoverBorderColor\":\"dimgray\"},{\"data\":[{\"x\":1168,\"y\":352,\"r\":6},{\"x\":1175,\"y\":366,\"r\":6},{\"x\":1178,\"y\":366,\"r\":6},{\"x\":1178,\"y\":363,\"r\":6},{\"x\":1178,\"y\":363,\"r\":6},{\"x\":1251,\"y\":377,\"r\":6},{\"x\":1190,\"y\":349,\"r\":6},{\"x\":1191,\"y\":350,\"r\":6}],\"label\":\"LiquidCented.\",\"backgroundColor\":\"slateblue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"slateblue\",\"hoverBorderColor\":\"slateblue\"},{\"data\":[{\"x\":1223,\"y\":1491,\"r\":6},{\"x\":1209,\"y\":1377,\"r\":6},{\"x\":1224,\"y\":1489,\"r\":6},{\"x\":1222,\"y\":1487,\"r\":6},{\"x\":1222,\"y\":1491,\"r\":6},{\"x\":1225,\"y\":1487,\"r\":6},{\"x\":1222,\"y\":1489,\"r\":6},{\"x\":1224,\"y\":1490,\"r\":6}],\"label\":\"littlеXX\",\"backgroundColor\":\"indianRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"indianRed\",\"hoverBorderColor\":\"indianRed\"},{\"data\":[{\"x\":1886,\"y\":1199,\"r\":6},{\"x\":1820,\"y\":1189,\"r\":6},{\"x\":1851,\"y\":1229,\"r\":6},{\"x\":1875,\"y\":1200,\"r\":6},{\"x\":1875,\"y\":1197,\"r\":6},{\"x\":1876,\"y\":1200,\"r\":6},{\"x\":1886,\"y\":1199,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"lmао.\",\"backgroundColor\":\"lightYellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightYellow\",\"hoverBorderColor\":\"lightYellow\"},{\"data\":[{\"x\":520,\"y\":1278,\"r\":6},{\"x\":521,\"y\":1287,\"r\":6},{\"x\":494,\"y\":1283,\"r\":6},{\"x\":490,\"y\":1280,\"r\":6},{\"x\":523,\"y\":1284,\"r\":6},{\"x\":516,\"y\":1279,\"r\":6},{\"x\":496,\"y\":1292,\"r\":6},{\"x\":497,\"y\":1250,\"r\":6}],\"label\":\"Lnuef\",\"backgroundColor\":\"darkRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkRed\",\"hoverBorderColor\":\"darkRed\"},{\"data\":[{\"x\":417,\"y\":922,\"r\":6},{\"x\":389,\"y\":942,\"r\":6},{\"x\":410,\"y\":933,\"r\":6},{\"x\":393,\"y\":939,\"r\":6},{\"x\":392,\"y\":939,\"r\":6},{\"x\":417,\"y\":922,\"r\":6},{\"x\":421,\"y\":937,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"LZR Kreo\",\"backgroundColor\":\"darkviolet\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkviolet\",\"hoverBorderColor\":\"darkviolet\"},{\"data\":[{\"x\":1279,\"y\":385,\"r\":6},{\"x\":1282,\"y\":385,\"r\":6},{\"x\":1285,\"y\":381,\"r\":6},{\"x\":1277,\"y\":382,\"r\":6},{\"x\":1284,\"y\":384,\"r\":6},{\"x\":1287,\"y\":395,\"r\":6},{\"x\":0,\"y\":0,\"r\":0},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Mａr k\",\"backgroundColor\":\"lightslategray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightslategray\",\"hoverBorderColor\":\"lightslategray\"},{\"data\":[{\"x\":1793,\"y\":1659,\"r\":6},{\"x\":1743,\"y\":1648,\"r\":6},{\"x\":1790,\"y\":1656,\"r\":6},{\"x\":1783,\"y\":1683,\"r\":6},{\"x\":1796,\"y\":1687,\"r\":6},{\"x\":1795,\"y\":1656,\"r\":6},{\"x\":1748,\"y\":1597,\"r\":6},{\"x\":1795,\"y\":1660,\"r\":6}],\"label\":\"Maseff2x\",\"backgroundColor\":\"olivedrab\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"olivedrab\",\"hoverBorderColor\":\"olivedrab\"},{\"data\":[{\"x\":1090,\"y\":1238,\"r\":6},{\"x\":1131,\"y\":1259,\"r\":6},{\"x\":1078,\"y\":1259,\"r\":6},{\"x\":1118,\"y\":1226,\"r\":6},{\"x\":1138,\"y\":1257,\"r\":6},{\"x\":1077,\"y\":1252,\"r\":6},{\"x\":1132,\"y\":1232,\"r\":6},{\"x\":1143,\"y\":1274,\"r\":6}],\"label\":\"MCES Andilex\",\"backgroundColor\":\"darkKhaki\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkKhaki\",\"hoverBorderColor\":\"darkKhaki\"},{\"data\":[{\"x\":1787,\"y\":771,\"r\":6},{\"x\":1766,\"y\":761,\"r\":6},{\"x\":1790,\"y\":772,\"r\":6},{\"x\":1765,\"y\":762,\"r\":6},{\"x\":1774,\"y\":762,\"r\":6},{\"x\":1776,\"y\":760,\"r\":6},{\"x\":1788,\"y\":771,\"r\":6},{\"x\":1789,\"y\":772,\"r\":6}],\"label\":\"Merijn 46\",\"backgroundColor\":\"royalBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"royalBlue\",\"hoverBorderColor\":\"royalBlue\"},{\"data\":[{\"x\":1076,\"y\":225,\"r\":6},{\"x\":1065,\"y\":219,\"r\":6},{\"x\":1070,\"y\":229,\"r\":6},{\"x\":1079,\"y\":263,\"r\":6},{\"x\":1064,\"y\":216,\"r\":6},{\"x\":1077,\"y\":224,\"r\":6},{\"x\":1074,\"y\":220,\"r\":6},{\"x\":1081,\"y\":231,\"r\":6}],\"label\":\"MRKN Av\",\"backgroundColor\":\"darkgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkgreen\",\"hoverBorderColor\":\"darkgreen\"},{\"data\":[{\"x\":1543,\"y\":73,\"r\":6},{\"x\":1538,\"y\":71,\"r\":6},{\"x\":1543,\"y\":78,\"r\":6},{\"x\":1538,\"y\":73,\"r\":6},{\"x\":1544,\"y\":79,\"r\":6},{\"x\":1543,\"y\":78,\"r\":6},{\"x\":1536,\"y\":74,\"r\":6},{\"x\":1540,\"y\":83,\"r\":6}],\"label\":\"MrSavage\",\"backgroundColor\":\"springgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"springgreen\",\"hoverBorderColor\":\"springgreen\"},{\"data\":[{\"x\":282,\"y\":1571,\"r\":6},{\"x\":345,\"y\":1617,\"r\":6},{\"x\":285,\"y\":1575,\"r\":6},{\"x\":341,\"y\":1604,\"r\":6},{\"x\":283,\"y\":1571,\"r\":6},{\"x\":282,\"y\":1570,\"r\":6},{\"x\":344,\"y\":1620,\"r\":6},{\"x\":328,\"y\":1626,\"r\":6}],\"label\":\"Nakama Fray\",\"backgroundColor\":\"lightBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightBlue\",\"hoverBorderColor\":\"lightBlue\"},{\"data\":[{\"x\":1206,\"y\":882,\"r\":6},{\"x\":1207,\"y\":882,\"r\":6},{\"x\":1211,\"y\":881,\"r\":6},{\"x\":1204,\"y\":882,\"r\":6},{\"x\":1212,\"y\":881,\"r\":6},{\"x\":1212,\"y\":882,\"r\":6},{\"x\":1214,\"y\":882,\"r\":6},{\"x\":1213,\"y\":882,\"r\":6}],\"label\":\"nanоlite\",\"backgroundColor\":\"deepskyBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"deepskyBlue\",\"hoverBorderColor\":\"deepskyBlue\"},{\"data\":[{\"x\":1929,\"y\":1167,\"r\":6},{\"x\":1933,\"y\":1173,\"r\":6},{\"x\":1907,\"y\":1196,\"r\":6},{\"x\":1942,\"y\":1236,\"r\":6},{\"x\":1937,\"y\":1168,\"r\":6},{\"x\":1932,\"y\":1160,\"r\":6},{\"x\":1940,\"y\":1157,\"r\":6},{\"x\":1927,\"y\":1169,\"r\":6}],\"label\":\"Nobu Beef\",\"backgroundColor\":\"orange\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"orange\",\"hoverBorderColor\":\"orange\"},{\"data\":[{\"x\":1750,\"y\":702,\"r\":6},{\"x\":1754,\"y\":697,\"r\":6},{\"x\":1745,\"y\":706,\"r\":6},{\"x\":1745,\"y\":707,\"r\":6},{\"x\":1752,\"y\":696,\"r\":6},{\"x\":1752,\"y\":695,\"r\":6},{\"x\":1752,\"y\":696,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"NRG benjуfishу\",\"backgroundColor\":\"red\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"red\",\"hoverBorderColor\":\"red\"},{\"data\":[{\"x\":1065,\"y\":163,\"r\":6},{\"x\":1098,\"y\":144,\"r\":6},{\"x\":1099,\"y\":147,\"r\":6},{\"x\":1099,\"y\":147,\"r\":6},{\"x\":1099,\"y\":147,\"r\":6},{\"x\":1067,\"y\":159,\"r\":6},{\"x\":1098,\"y\":147,\"r\":6},{\"x\":1098,\"y\":148,\"r\":6}],\"label\":\"NRG Edgey\",\"backgroundColor\":\"yellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"yellow\",\"hoverBorderColor\":\"yellow\"},{\"data\":[{\"x\":219,\"y\":1404,\"r\":6},{\"x\":217,\"y\":1406,\"r\":6},{\"x\":218,\"y\":1404,\"r\":6},{\"x\":219,\"y\":1404,\"r\":6},{\"x\":218,\"y\":1408,\"r\":6},{\"x\":219,\"y\":1404,\"r\":6},{\"x\":218,\"y\":1403,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"NRG EpikWhale\",\"backgroundColor\":\"cyan\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"cyan\",\"hoverBorderColor\":\"cyan\"},{\"data\":[{\"x\":464,\"y\":1279,\"r\":6},{\"x\":483,\"y\":1362,\"r\":6},{\"x\":479,\"y\":1371,\"r\":6},{\"x\":474,\"y\":1365,\"r\":6},{\"x\":479,\"y\":1372,\"r\":6},{\"x\":477,\"y\":1375,\"r\":6},{\"x\":485,\"y\":1368,\"r\":6},{\"x\":473,\"y\":1366,\"r\":6}],\"label\":\"NRG Zayt -α-\",\"backgroundColor\":\"magenta\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"magenta\",\"hoverBorderColor\":\"magenta\"},{\"data\":[{\"x\":652,\"y\":790,\"r\":6},{\"x\":438,\"y\":915,\"r\":6},{\"x\":446,\"y\":956,\"r\":6},{\"x\":452,\"y\":913,\"r\":6},{\"x\":443,\"y\":956,\"r\":6},{\"x\":388,\"y\":945,\"r\":6},{\"x\":441,\"y\":913,\"r\":6},{\"x\":661,\"y\":786,\"r\":6}],\"label\":\"nоlаn.\",\"backgroundColor\":\"pink\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"pink\",\"hoverBorderColor\":\"pink\"},{\"data\":[{\"x\":1031,\"y\":1854,\"r\":6},{\"x\":999,\"y\":1872,\"r\":6},{\"x\":861,\"y\":1467,\"r\":6},{\"x\":997,\"y\":1875,\"r\":6},{\"x\":998,\"y\":1866,\"r\":6},{\"x\":996,\"y\":1867,\"r\":6},{\"x\":852,\"y\":1499,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"oDxnied.\",\"backgroundColor\":\"dimgray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"dimgray\",\"hoverBorderColor\":\"dimgray\"},{\"data\":[{\"x\":1227,\"y\":1786,\"r\":6},{\"x\":1225,\"y\":1809,\"r\":6},{\"x\":1240,\"y\":1770,\"r\":6},{\"x\":1240,\"y\":1770,\"r\":6},{\"x\":1229,\"y\":1802,\"r\":6},{\"x\":1229,\"y\":1804,\"r\":6},{\"x\":1239,\"y\":1771,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"os susscript\",\"backgroundColor\":\"slateblue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"slateblue\",\"hoverBorderColor\":\"slateblue\"},{\"data\":[{\"x\":1601,\"y\":1373,\"r\":6},{\"x\":1448,\"y\":1455,\"r\":6},{\"x\":276,\"y\":1674,\"r\":6},{\"x\":1227,\"y\":1051,\"r\":6},{\"x\":1383,\"y\":1507,\"r\":6},{\"x\":1301,\"y\":1196,\"r\":6},{\"x\":1380,\"y\":452,\"r\":6},{\"x\":440,\"y\":1680,\"r\":6}],\"label\":\"OT Inspyre\",\"backgroundColor\":\"indianRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"indianRed\",\"hoverBorderColor\":\"indianRed\"},{\"data\":[{\"x\":273,\"y\":731,\"r\":6},{\"x\":284,\"y\":747,\"r\":6},{\"x\":274,\"y\":735,\"r\":6},{\"x\":275,\"y\":731,\"r\":6},{\"x\":251,\"y\":749,\"r\":6},{\"x\":281,\"y\":740,\"r\":6},{\"x\":274,\"y\":735,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Persecute.\",\"backgroundColor\":\"lightYellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightYellow\",\"hoverBorderColor\":\"lightYellow\"},{\"data\":[{\"x\":1573,\"y\":1846,\"r\":6},{\"x\":1717,\"y\":1624,\"r\":6},{\"x\":1746,\"y\":1607,\"r\":6},{\"x\":1767,\"y\":1597,\"r\":6},{\"x\":1760,\"y\":1600,\"r\":6},{\"x\":1742,\"y\":1631,\"r\":6},{\"x\":1744,\"y\":1593,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Prosecutοr\",\"backgroundColor\":\"darkRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkRed\",\"hoverBorderColor\":\"darkRed\"},{\"data\":[{\"x\":1474,\"y\":625,\"r\":6},{\"x\":480,\"y\":1371,\"r\":6},{\"x\":1477,\"y\":631,\"r\":6},{\"x\":1419,\"y\":617,\"r\":6},{\"x\":1425,\"y\":697,\"r\":6},{\"x\":1440,\"y\":662,\"r\":6},{\"x\":1468,\"y\":585,\"r\":6},{\"x\":1471,\"y\":632,\"r\":6}],\"label\":\"reeted on\",\"backgroundColor\":\"darkviolet\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkviolet\",\"hoverBorderColor\":\"darkviolet\"},{\"data\":[{\"x\":785,\"y\":753,\"r\":6},{\"x\":875,\"y\":963,\"r\":6},{\"x\":798,\"y\":860,\"r\":6},{\"x\":798,\"y\":859,\"r\":6},{\"x\":832,\"y\":801,\"r\":6},{\"x\":797,\"y\":861,\"r\":6},{\"x\":847,\"y\":811,\"r\":6},{\"x\":798,\"y\":859,\"r\":6}],\"label\":\"renuityǃ\",\"backgroundColor\":\"lightslategray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightslategray\",\"hoverBorderColor\":\"lightslategray\"},{\"data\":[{\"x\":1728,\"y\":770,\"r\":6},{\"x\":1700,\"y\":714,\"r\":6},{\"x\":1728,\"y\":761,\"r\":6},{\"x\":1728,\"y\":769,\"r\":6},{\"x\":1728,\"y\":762,\"r\":6},{\"x\":1728,\"y\":771,\"r\":6},{\"x\":1727,\"y\":762,\"r\":6},{\"x\":1728,\"y\":770,\"r\":6}],\"label\":\"RepulseGod\",\"backgroundColor\":\"olivedrab\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"olivedrab\",\"hoverBorderColor\":\"olivedrab\"},{\"data\":[{\"x\":1749,\"y\":349,\"r\":6},{\"x\":1606,\"y\":337,\"r\":6},{\"x\":1747,\"y\":350,\"r\":6},{\"x\":1779,\"y\":316,\"r\":6},{\"x\":1749,\"y\":350,\"r\":6},{\"x\":1755,\"y\":349,\"r\":6},{\"x\":1616,\"y\":346,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Reverse2k\",\"backgroundColor\":\"darkKhaki\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkKhaki\",\"hoverBorderColor\":\"darkKhaki\"},{\"data\":[{\"x\":1267,\"y\":123,\"r\":6},{\"x\":1265,\"y\":126,\"r\":6},{\"x\":1267,\"y\":123,\"r\":6},{\"x\":1267,\"y\":122,\"r\":6},{\"x\":1267,\"y\":123,\"r\":6},{\"x\":1267,\"y\":123,\"r\":6},{\"x\":1267,\"y\":122,\"r\":6},{\"x\":1267,\"y\":123,\"r\":6}],\"label\":\"RNG Jynх\",\"backgroundColor\":\"royalBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"royalBlue\",\"hoverBorderColor\":\"royalBlue\"},{\"data\":[{\"x\":622,\"y\":386,\"r\":6},{\"x\":769,\"y\":563,\"r\":6},{\"x\":252,\"y\":1082,\"r\":6},{\"x\":721,\"y\":567,\"r\":6},{\"x\":713,\"y\":558,\"r\":6},{\"x\":703,\"y\":547,\"r\":6},{\"x\":715,\"y\":558,\"r\":6},{\"x\":248,\"y\":1089,\"r\":6}],\"label\":\"ROG Skydeun\",\"backgroundColor\":\"darkgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkgreen\",\"hoverBorderColor\":\"darkgreen\"},{\"data\":[{\"x\":1880,\"y\":1042,\"r\":6},{\"x\":1852,\"y\":1184,\"r\":6},{\"x\":1877,\"y\":1044,\"r\":6},{\"x\":1879,\"y\":1043,\"r\":6},{\"x\":1881,\"y\":1043,\"r\":6},{\"x\":1831,\"y\":1084,\"r\":6},{\"x\":1880,\"y\":1043,\"r\":6},{\"x\":1876,\"y\":1042,\"r\":6}],\"label\":\"RS clarityG\",\"backgroundColor\":\"springgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"springgreen\",\"hoverBorderColor\":\"springgreen\"},{\"data\":[{\"x\":1611,\"y\":321,\"r\":6},{\"x\":1444,\"y\":374,\"r\":6},{\"x\":1617,\"y\":327,\"r\":6},{\"x\":1608,\"y\":327,\"r\":6},{\"x\":1609,\"y\":327,\"r\":6},{\"x\":1633,\"y\":336,\"r\":6},{\"x\":1484,\"y\":382,\"r\":6},{\"x\":1611,\"y\":321,\"r\":6}],\"label\":\"Rysix DiegoGB\",\"backgroundColor\":\"lightBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightBlue\",\"hoverBorderColor\":\"lightBlue\"},{\"data\":[{\"x\":621,\"y\":1894,\"r\":6},{\"x\":625,\"y\":1896,\"r\":6},{\"x\":617,\"y\":1889,\"r\":6},{\"x\":631,\"y\":1893,\"r\":6},{\"x\":634,\"y\":1893,\"r\":6},{\"x\":620,\"y\":1894,\"r\":6},{\"x\":655,\"y\":1944,\"r\":6},{\"x\":619,\"y\":1892,\"r\":6}],\"label\":\"Rysix FlowiS\",\"backgroundColor\":\"deepskyBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"deepskyBlue\",\"hoverBorderColor\":\"deepskyBlue\"},{\"data\":[{\"x\":1292,\"y\":658,\"r\":6},{\"x\":1363,\"y\":714,\"r\":6},{\"x\":1371,\"y\":702,\"r\":6},{\"x\":1373,\"y\":704,\"r\":6},{\"x\":1377,\"y\":706,\"r\":6},{\"x\":1364,\"y\":702,\"r\":6},{\"x\":1372,\"y\":703,\"r\":6},{\"x\":1375,\"y\":703,\"r\":6}],\"label\":\"Rysix Lareez\",\"backgroundColor\":\"orange\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"orange\",\"hoverBorderColor\":\"orange\"},{\"data\":[{\"x\":1687,\"y\":406,\"r\":6},{\"x\":1687,\"y\":407,\"r\":6},{\"x\":1689,\"y\":404,\"r\":6},{\"x\":1687,\"y\":406,\"r\":6},{\"x\":1688,\"y\":405,\"r\":6},{\"x\":1688,\"y\":404,\"r\":6},{\"x\":1686,\"y\":400,\"r\":6},{\"x\":1690,\"y\":404,\"r\":6}],\"label\":\"SD verT\",\"backgroundColor\":\"red\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"red\",\"hoverBorderColor\":\"red\"},{\"data\":[{\"x\":851,\"y\":1113,\"r\":6},{\"x\":850,\"y\":1111,\"r\":6},{\"x\":850,\"y\":1111,\"r\":6},{\"x\":847,\"y\":1114,\"r\":6},{\"x\":850,\"y\":1111,\"r\":6},{\"x\":854,\"y\":1113,\"r\":6},{\"x\":850,\"y\":1110,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Secret Fuzzy\",\"backgroundColor\":\"yellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"yellow\",\"hoverBorderColor\":\"yellow\"},{\"data\":[{\"x\":1324,\"y\":853,\"r\":6},{\"x\":1328,\"y\":892,\"r\":6},{\"x\":1322,\"y\":857,\"r\":6},{\"x\":1319,\"y\":854,\"r\":6},{\"x\":1336,\"y\":893,\"r\":6},{\"x\":1319,\"y\":855,\"r\":6},{\"x\":1336,\"y\":865,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Secret Mexe\",\"backgroundColor\":\"cyan\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"cyan\",\"hoverBorderColor\":\"cyan\"},{\"data\":[{\"x\":627,\"y\":727,\"r\":6},{\"x\":657,\"y\":784,\"r\":6},{\"x\":1427,\"y\":667,\"r\":6},{\"x\":615,\"y\":508,\"r\":6},{\"x\":1317,\"y\":676,\"r\":6},{\"x\":621,\"y\":558,\"r\":6},{\"x\":656,\"y\":786,\"r\":6},{\"x\":704,\"y\":547,\"r\":6}],\"label\":\"SEN Animal\",\"backgroundColor\":\"magenta\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"magenta\",\"hoverBorderColor\":\"magenta\"},{\"data\":[{\"x\":1205,\"y\":1523,\"r\":6},{\"x\":1216,\"y\":1521,\"r\":6},{\"x\":1204,\"y\":1524,\"r\":6},{\"x\":1207,\"y\":1524,\"r\":6},{\"x\":1198,\"y\":1525,\"r\":6},{\"x\":1206,\"y\":1524,\"r\":6},{\"x\":1217,\"y\":1520,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"SEN HighSky -α-\",\"backgroundColor\":\"pink\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"pink\",\"hoverBorderColor\":\"pink\"},{\"data\":[{\"x\":1620,\"y\":328,\"r\":6},{\"x\":1609,\"y\":316,\"r\":6},{\"x\":1208,\"y\":1060,\"r\":6},{\"x\":1312,\"y\":1081,\"r\":6},{\"x\":1212,\"y\":1053,\"r\":6},{\"x\":1607,\"y\":315,\"r\":6},{\"x\":1214,\"y\":1052,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"snоwXX\",\"backgroundColor\":\"dimgray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"dimgray\",\"hoverBorderColor\":\"dimgray\"},{\"data\":[{\"x\":1544,\"y\":1254,\"r\":6},{\"x\":1234,\"y\":405,\"r\":6},{\"x\":1565,\"y\":1057,\"r\":6},{\"x\":1172,\"y\":490,\"r\":6},{\"x\":1225,\"y\":1060,\"r\":6},{\"x\":1245,\"y\":516,\"r\":6},{\"x\":1248,\"y\":383,\"r\":6},{\"x\":1205,\"y\":356,\"r\":6}],\"label\":\"Sparebow\",\"backgroundColor\":\"slateblue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"slateblue\",\"hoverBorderColor\":\"slateblue\"},{\"data\":[{\"x\":840,\"y\":1313,\"r\":6},{\"x\":838,\"y\":1315,\"r\":6},{\"x\":830,\"y\":1315,\"r\":6},{\"x\":832,\"y\":1314,\"r\":6},{\"x\":838,\"y\":1314,\"r\":6},{\"x\":838,\"y\":1314,\"r\":6},{\"x\":839,\"y\":1317,\"r\":6},{\"x\":840,\"y\":1316,\"r\":6}],\"label\":\"steanzz\",\"backgroundColor\":\"indianRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"indianRed\",\"hoverBorderColor\":\"indianRed\"},{\"data\":[{\"x\":1618,\"y\":144,\"r\":6},{\"x\":1618,\"y\":150,\"r\":6},{\"x\":1619,\"y\":149,\"r\":6},{\"x\":1618,\"y\":144,\"r\":6},{\"x\":1615,\"y\":147,\"r\":6},{\"x\":1618,\"y\":144,\"r\":6},{\"x\":1618,\"y\":146,\"r\":6},{\"x\":1618,\"y\":148,\"r\":6}],\"label\":\"Tavern.\",\"backgroundColor\":\"lightYellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightYellow\",\"hoverBorderColor\":\"lightYellow\"},{\"data\":[{\"x\":932,\"y\":489,\"r\":6},{\"x\":936,\"y\":482,\"r\":6},{\"x\":939,\"y\":482,\"r\":6},{\"x\":931,\"y\":475,\"r\":6},{\"x\":924,\"y\":488,\"r\":6},{\"x\":937,\"y\":482,\"r\":6},{\"x\":944,\"y\":475,\"r\":6},{\"x\":932,\"y\":483,\"r\":6}],\"label\":\"Tchub_\",\"backgroundColor\":\"darkRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkRed\",\"hoverBorderColor\":\"darkRed\"},{\"data\":[{\"x\":1214,\"y\":1734,\"r\":6},{\"x\":1213,\"y\":1737,\"r\":6},{\"x\":1213,\"y\":1738,\"r\":6},{\"x\":1196,\"y\":1754,\"r\":6},{\"x\":1205,\"y\":1753,\"r\":6},{\"x\":1205,\"y\":1758,\"r\":6},{\"x\":1213,\"y\":1734,\"r\":6},{\"x\":1213,\"y\":1736,\"r\":6}],\"label\":\"Thomuss_\",\"backgroundColor\":\"darkviolet\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkviolet\",\"hoverBorderColor\":\"darkviolet\"},{\"data\":[{\"x\":1432,\"y\":1452,\"r\":6},{\"x\":1408,\"y\":1522,\"r\":6},{\"x\":1429,\"y\":1454,\"r\":6},{\"x\":1402,\"y\":1522,\"r\":6},{\"x\":1410,\"y\":1522,\"r\":6},{\"x\":1403,\"y\":1509,\"r\":6},{\"x\":1399,\"y\":1460,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Timbers Criizux.\",\"backgroundColor\":\"lightslategray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightslategray\",\"hoverBorderColor\":\"lightslategray\"},{\"data\":[{\"x\":666,\"y\":521,\"r\":6},{\"x\":718,\"y\":562,\"r\":6},{\"x\":677,\"y\":561,\"r\":6},{\"x\":608,\"y\":1918,\"r\":6},{\"x\":716,\"y\":517,\"r\":6},{\"x\":717,\"y\":562,\"r\":6},{\"x\":755,\"y\":504,\"r\":6},{\"x\":683,\"y\":589,\"r\":6}],\"label\":\"Timbers Jelty\",\"backgroundColor\":\"olivedrab\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"olivedrab\",\"hoverBorderColor\":\"olivedrab\"},{\"data\":[{\"x\":714,\"y\":552,\"r\":6},{\"x\":677,\"y\":558,\"r\":6},{\"x\":719,\"y\":543,\"r\":6},{\"x\":719,\"y\":545,\"r\":6},{\"x\":719,\"y\":544,\"r\":6},{\"x\":719,\"y\":545,\"r\":6},{\"x\":718,\"y\":550,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"toff 暁\",\"backgroundColor\":\"darkKhaki\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkKhaki\",\"hoverBorderColor\":\"darkKhaki\"},{\"data\":[{\"x\":1328,\"y\":1255,\"r\":6},{\"x\":1331,\"y\":1253,\"r\":6},{\"x\":1337,\"y\":1247,\"r\":6},{\"x\":1335,\"y\":1232,\"r\":6},{\"x\":1352,\"y\":1248,\"r\":6},{\"x\":1328,\"y\":1256,\"r\":6},{\"x\":1328,\"y\":1255,\"r\":6},{\"x\":1341,\"y\":1243,\"r\":6}],\"label\":\"TrainH Alpha.\",\"backgroundColor\":\"royalBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"royalBlue\",\"hoverBorderColor\":\"royalBlue\"},{\"data\":[{\"x\":801,\"y\":1756,\"r\":6},{\"x\":808,\"y\":1760,\"r\":6},{\"x\":803,\"y\":1754,\"r\":6},{\"x\":824,\"y\":1720,\"r\":6},{\"x\":805,\"y\":1759,\"r\":6},{\"x\":799,\"y\":1766,\"r\":6},{\"x\":799,\"y\":1760,\"r\":6},{\"x\":810,\"y\":1761,\"r\":6}],\"label\":\"TrainH Seth\",\"backgroundColor\":\"darkgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkgreen\",\"hoverBorderColor\":\"darkgreen\"},{\"data\":[{\"x\":612,\"y\":515,\"r\":6},{\"x\":611,\"y\":507,\"r\":6},{\"x\":634,\"y\":507,\"r\":6},{\"x\":639,\"y\":508,\"r\":6},{\"x\":637,\"y\":507,\"r\":6},{\"x\":640,\"y\":506,\"r\":6},{\"x\":643,\"y\":508,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"TrainH Yagsou\",\"backgroundColor\":\"springgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"springgreen\",\"hoverBorderColor\":\"springgreen\"},{\"data\":[{\"x\":946,\"y\":1487,\"r\":6},{\"x\":938,\"y\":1563,\"r\":6},{\"x\":871,\"y\":1569,\"r\":6},{\"x\":881,\"y\":1569,\"r\":6},{\"x\":899,\"y\":1574,\"r\":6},{\"x\":871,\"y\":1568,\"r\":6},{\"x\":882,\"y\":1567,\"r\":6},{\"x\":882,\"y\":1567,\"r\":6}],\"label\":\"Triggу\",\"backgroundColor\":\"lightBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightBlue\",\"hoverBorderColor\":\"lightBlue\"},{\"data\":[{\"x\":1411,\"y\":731,\"r\":6},{\"x\":1413,\"y\":696,\"r\":6},{\"x\":1416,\"y\":723,\"r\":6},{\"x\":1411,\"y\":690,\"r\":6},{\"x\":1410,\"y\":730,\"r\":6},{\"x\":1413,\"y\":690,\"r\":6},{\"x\":1412,\"y\":720,\"r\":6},{\"x\":1428,\"y\":696,\"r\":6}],\"label\":\"TSM_Crue\",\"backgroundColor\":\"deepskyBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"deepskyBlue\",\"hoverBorderColor\":\"deepskyBlue\"},{\"data\":[{\"x\":1396,\"y\":1460,\"r\":6},{\"x\":419,\"y\":580,\"r\":6},{\"x\":1395,\"y\":1465,\"r\":6},{\"x\":1432,\"y\":1453,\"r\":6},{\"x\":1450,\"y\":1454,\"r\":6},{\"x\":1395,\"y\":1465,\"r\":6},{\"x\":1450,\"y\":1455,\"r\":6},{\"x\":1447,\"y\":1456,\"r\":6}],\"label\":\"TSM_Zexrow\",\"backgroundColor\":\"orange\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"orange\",\"hoverBorderColor\":\"orange\"},{\"data\":[{\"x\":1706,\"y\":1620,\"r\":6},{\"x\":1688,\"y\":1632,\"r\":6},{\"x\":1702,\"y\":1621,\"r\":6},{\"x\":1709,\"y\":1636,\"r\":6},{\"x\":1700,\"y\":1622,\"r\":6},{\"x\":1706,\"y\":1599,\"r\":6},{\"x\":1720,\"y\":1628,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"Twitch Bullywyd\",\"backgroundColor\":\"red\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"red\",\"hoverBorderColor\":\"red\"},{\"data\":[{\"x\":610,\"y\":1016,\"r\":6},{\"x\":715,\"y\":1066,\"r\":6},{\"x\":716,\"y\":1070,\"r\":6},{\"x\":718,\"y\":1066,\"r\":6},{\"x\":622,\"y\":1019,\"r\":6},{\"x\":717,\"y\":1073,\"r\":6},{\"x\":612,\"y\":1018,\"r\":6},{\"x\":716,\"y\":1068,\"r\":6}],\"label\":\"Twitch konoszn\",\"backgroundColor\":\"yellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"yellow\",\"hoverBorderColor\":\"yellow\"},{\"data\":[{\"x\":1261,\"y\":1045,\"r\":6},{\"x\":412,\"y\":596,\"r\":6},{\"x\":1364,\"y\":191,\"r\":6},{\"x\":1628,\"y\":936,\"r\":6},{\"x\":1237,\"y\":1062,\"r\":6},{\"x\":401,\"y\":552,\"r\":6},{\"x\":1236,\"y\":1061,\"r\":6},{\"x\":412,\"y\":594,\"r\":6}],\"label\":\"Twitch Maximoe\",\"backgroundColor\":\"cyan\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"cyan\",\"hoverBorderColor\":\"cyan\"},{\"data\":[{\"x\":1871,\"y\":532,\"r\":6},{\"x\":1870,\"y\":531,\"r\":6},{\"x\":1870,\"y\":531,\"r\":6},{\"x\":1872,\"y\":534,\"r\":6},{\"x\":1871,\"y\":534,\"r\":6},{\"x\":1872,\"y\":534,\"r\":6},{\"x\":1872,\"y\":533,\"r\":6},{\"x\":1870,\"y\":532,\"r\":6}],\"label\":\"Twitter ShakaFN\",\"backgroundColor\":\"magenta\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"magenta\",\"hoverBorderColor\":\"magenta\"},{\"data\":[{\"x\":998,\"y\":1874,\"r\":6},{\"x\":559,\"y\":389,\"r\":6},{\"x\":996,\"y\":1873,\"r\":6},{\"x\":1050,\"y\":1832,\"r\":6},{\"x\":1048,\"y\":1828,\"r\":6},{\"x\":1033,\"y\":1855,\"r\":6},{\"x\":1048,\"y\":1827,\"r\":6},{\"x\":1048,\"y\":1827,\"r\":6}],\"label\":\"Umplify\",\"backgroundColor\":\"pink\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"pink\",\"hoverBorderColor\":\"pink\"},{\"data\":[{\"x\":1757,\"y\":1343,\"r\":6},{\"x\":1757,\"y\":1342,\"r\":6},{\"x\":1753,\"y\":1340,\"r\":6},{\"x\":1757,\"y\":1344,\"r\":6},{\"x\":1750,\"y\":1328,\"r\":6},{\"x\":1756,\"y\":1340,\"r\":6},{\"x\":1757,\"y\":1342,\"r\":6},{\"x\":1775,\"y\":1325,\"r\":6}],\"label\":\"veloce saevid\",\"backgroundColor\":\"dimgray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"dimgray\",\"hoverBorderColor\":\"dimgray\"},{\"data\":[{\"x\":1418,\"y\":616,\"r\":6},{\"x\":1410,\"y\":613,\"r\":6},{\"x\":1418,\"y\":617,\"r\":6},{\"x\":1606,\"y\":1812,\"r\":6},{\"x\":1419,\"y\":617,\"r\":6},{\"x\":1411,\"y\":613,\"r\":6},{\"x\":1420,\"y\":618,\"r\":6},{\"x\":1425,\"y\":618,\"r\":6}],\"label\":\"Vitality BadSnpR\",\"backgroundColor\":\"slateblue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"slateblue\",\"hoverBorderColor\":\"slateblue\"},{\"data\":[{\"x\":1628,\"y\":937,\"r\":6},{\"x\":1620,\"y\":954,\"r\":6},{\"x\":1634,\"y\":953,\"r\":6},{\"x\":1629,\"y\":936,\"r\":6},{\"x\":1629,\"y\":936,\"r\":6},{\"x\":1610,\"y\":948,\"r\":6},{\"x\":0,\"y\":0,\"r\":0},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"VYХ.\",\"backgroundColor\":\"indianRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"indianRed\",\"hoverBorderColor\":\"indianRed\"},{\"data\":[{\"x\":552,\"y\":1117,\"r\":6},{\"x\":429,\"y\":1075,\"r\":6},{\"x\":554,\"y\":1125,\"r\":6},{\"x\":559,\"y\":1105,\"r\":6},{\"x\":553,\"y\":1125,\"r\":6},{\"x\":552,\"y\":1120,\"r\":6},{\"x\":552,\"y\":1127,\"r\":6},{\"x\":573,\"y\":1128,\"r\":6}],\"label\":\"washed jamz\",\"backgroundColor\":\"lightYellow\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightYellow\",\"hoverBorderColor\":\"lightYellow\"},{\"data\":[{\"x\":1024,\"y\":1655,\"r\":6},{\"x\":1023,\"y\":1655,\"r\":6},{\"x\":930,\"y\":1556,\"r\":6},{\"x\":1023,\"y\":1656,\"r\":6},{\"x\":1024,\"y\":1655,\"r\":6},{\"x\":1024,\"y\":1653,\"r\":6},{\"x\":1313,\"y\":1082,\"r\":6},{\"x\":1021,\"y\":1659,\"r\":6}],\"label\":\"WF Zoluc\",\"backgroundColor\":\"darkRed\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkRed\",\"hoverBorderColor\":\"darkRed\"},{\"data\":[{\"x\":1071,\"y\":1046,\"r\":6},{\"x\":1069,\"y\":1090,\"r\":6},{\"x\":1038,\"y\":1064,\"r\":6},{\"x\":1069,\"y\":1059,\"r\":6},{\"x\":1068,\"y\":1058,\"r\":6},{\"x\":1037,\"y\":1063,\"r\":6},{\"x\":1067,\"y\":1059,\"r\":6},{\"x\":1067,\"y\":1058,\"r\":6}],\"label\":\"wxlfiez\",\"backgroundColor\":\"darkviolet\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkviolet\",\"hoverBorderColor\":\"darkviolet\"},{\"data\":[{\"x\":525,\"y\":1286,\"r\":6},{\"x\":512,\"y\":1319,\"r\":6},{\"x\":527,\"y\":1283,\"r\":6},{\"x\":526,\"y\":1285,\"r\":6},{\"x\":526,\"y\":1278,\"r\":6},{\"x\":524,\"y\":1284,\"r\":6},{\"x\":527,\"y\":1283,\"r\":6},{\"x\":526,\"y\":1284,\"r\":6}],\"label\":\"Wіzz\",\"backgroundColor\":\"lightslategray\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightslategray\",\"hoverBorderColor\":\"lightslategray\"},{\"data\":[{\"x\":1175,\"y\":365,\"r\":6},{\"x\":1616,\"y\":1662,\"r\":6},{\"x\":1101,\"y\":774,\"r\":6},{\"x\":1530,\"y\":1346,\"r\":6},{\"x\":1627,\"y\":1610,\"r\":6},{\"x\":1531,\"y\":1346,\"r\":6},{\"x\":1535,\"y\":1585,\"r\":6},{\"x\":1528,\"y\":1582,\"r\":6}],\"label\":\"Xen Alexx ζ\",\"backgroundColor\":\"olivedrab\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"olivedrab\",\"hoverBorderColor\":\"olivedrab\"},{\"data\":[{\"x\":1201,\"y\":1755,\"r\":6},{\"x\":1204,\"y\":1754,\"r\":6},{\"x\":1200,\"y\":1754,\"r\":6},{\"x\":1214,\"y\":1736,\"r\":6},{\"x\":1214,\"y\":1735,\"r\":6},{\"x\":1214,\"y\":1736,\"r\":6},{\"x\":1197,\"y\":1752,\"r\":6},{\"x\":1199,\"y\":1755,\"r\":6}],\"label\":\"yt cyrzr\",\"backgroundColor\":\"darkKhaki\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkKhaki\",\"hoverBorderColor\":\"darkKhaki\"},{\"data\":[{\"x\":302,\"y\":804,\"r\":6},{\"x\":509,\"y\":717,\"r\":6},{\"x\":341,\"y\":808,\"r\":6},{\"x\":340,\"y\":809,\"r\":6},{\"x\":341,\"y\":809,\"r\":6},{\"x\":342,\"y\":822,\"r\":6},{\"x\":341,\"y\":808,\"r\":6},{\"x\":314,\"y\":819,\"r\":6}],\"label\":\"zastruh ǃ\",\"backgroundColor\":\"royalBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"royalBlue\",\"hoverBorderColor\":\"royalBlue\"},{\"data\":[{\"x\":251,\"y\":1084,\"r\":6},{\"x\":245,\"y\":1078,\"r\":6},{\"x\":257,\"y\":1080,\"r\":6},{\"x\":250,\"y\":1076,\"r\":6},{\"x\":251,\"y\":1081,\"r\":6},{\"x\":251,\"y\":1082,\"r\":6},{\"x\":251,\"y\":1080,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"ZinqxzX6\",\"backgroundColor\":\"darkgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"darkgreen\",\"hoverBorderColor\":\"darkgreen\"},{\"data\":[{\"x\":1522,\"y\":161,\"r\":6},{\"x\":1522,\"y\":160,\"r\":6},{\"x\":1524,\"y\":165,\"r\":6},{\"x\":1496,\"y\":135,\"r\":6},{\"x\":1525,\"y\":164,\"r\":6},{\"x\":1497,\"y\":161,\"r\":6},{\"x\":1498,\"y\":162,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"аndrewXX\",\"backgroundColor\":\"springgreen\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"springgreen\",\"hoverBorderColor\":\"springgreen\"},{\"data\":[{\"x\":1624,\"y\":500,\"r\":6},{\"x\":1619,\"y\":499,\"r\":6},{\"x\":1618,\"y\":499,\"r\":6},{\"x\":1587,\"y\":436,\"r\":6},{\"x\":1579,\"y\":437,\"r\":6},{\"x\":1622,\"y\":499,\"r\":6},{\"x\":1620,\"y\":498,\"r\":6},{\"x\":0,\"y\":0,\"r\":0}],\"label\":\"ЅcarFN\",\"backgroundColor\":\"lightBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"lightBlue\",\"hoverBorderColor\":\"lightBlue\"},{\"data\":[{\"x\":1527,\"y\":1340,\"r\":6},{\"x\":1444,\"y\":670,\"r\":6},{\"x\":1151,\"y\":732,\"r\":6},{\"x\":1259,\"y\":283,\"r\":6},{\"x\":1091,\"y\":783,\"r\":6},{\"x\":1259,\"y\":285,\"r\":6},{\"x\":1428,\"y\":666,\"r\":6},{\"x\":1378,\"y\":454,\"r\":6}],\"label\":\"Ѕtrafes\",\"backgroundColor\":\"deepskyBlue\",\"borderColor\":\"black\",\"hoverBackgroundColor\":\"deepskyBlue\",\"hoverBorderColor\":\"deepskyBlue\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\DEV\WEB\Fortnite\DHAnaheim2020\webapp-landing\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map