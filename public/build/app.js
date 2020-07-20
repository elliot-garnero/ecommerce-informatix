(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _paths_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paths/Paths */ "./assets/js/paths/Paths.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_4__);





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_paths_Paths__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/Navbar.js":
/*!****************************************!*\
  !*** ./assets/js/components/Navbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Navbar = /*#__PURE__*/function (_Component) {
  _inherits(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _super.apply(this, arguments);
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("nav", {
        className: "navbarPerso navbar navbar-expand-lg bg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Link"], {
        className: 'navbar-brand navbarPerso',
        to: '/'
      }, ' ', "Informatix", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: "nav-item active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "navbarPerso nav-link",
        href: "#"
      }, "Home ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
        className: "sr-only"
      }, "(current)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "navbarPerso nav-link",
        href: "/add"
      }, "Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: "nav-item dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "navbarPerso nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdown",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "Dropdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "navbarPerso dropdown-item",
        href: "#"
      }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "navbarPerso dropdown-item",
        href: "#"
      }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "dropdown-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "navbarPerso dropdown-item",
        href: "#"
      }, "Something else here"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "navbarPerso nav-link disabled",
        href: "#"
      }, "Disabled"))))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./assets/js/components/products/AsideCatalog.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/products/AsideCatalog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);



















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AsideCatalog = /*#__PURE__*/function (_Component) {
  _inherits(AsideCatalog, _Component);

  var _super = _createSuper(AsideCatalog);

  function AsideCatalog(props) {
    var _this;

    _classCallCheck(this, AsideCatalog);

    _this = _super.call(this, props);
    _this.state = {
      isLoaded: false,
      items: []
    };
    return _this;
  }

  _createClass(AsideCatalog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://localhost:8000/api/products').then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          isLoaded: true,
          items: json
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoaded = _this$state.isLoaded,
          items = _this$state.items;
      var count = Object.keys(items).length;

      if (!isLoaded) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", null, "Chargement...");
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
          id: "div_catalog"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
          className: "title_lign"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("h1", null, "CATALOGUE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("p", null, count, " produits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
          className: "div_all_product"
        }, items.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
            className: "product_lign",
            key: item.id_product
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("img", {
            src: "https://media.materiel.net/r550/products/MN0005048928_1.jpg",
            alt: "product",
            width: "250px"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
            className: "product_info"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("h2", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("p", null, item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("p", null, item.characteristics), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("p", null, "N avis"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
            className: "product_price"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("h2", null, item.price, " \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("h4", null, item.stock, " en stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("button", {
            type: "button",
            className: "btn btn-success"
          }, "AJOUTER AU PANIER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("hr", null));
        })));
      }
    }
  }]);

  return AsideCatalog;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AsideCatalog);

/***/ }),

/***/ "./assets/js/components/products/AsideFilter.js":
/*!******************************************************!*\
  !*** ./assets/js/components/products/AsideFilter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);




















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var AsideFilter = /*#__PURE__*/function (_Component) {
  _inherits(AsideFilter, _Component);

  var _super = _createSuper(AsideFilter);

  function AsideFilter(props) {
    var _this;

    _classCallCheck(this, AsideFilter);

    _this = _super.call(this, props);
    _this.state = {
      price_min: '0',
      price_max: '500',
      brand: [],
      search: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.byBrand = _this.byBrand.bind(_assertThisInitialized(_this));
    _this.byBrandChange = _this.byBrandChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AsideFilter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        brand: [{
          id: 'msi',
          name: 'MSI'
        }, {
          id: 'amd',
          name: 'AMD'
        }, {
          id: 'gygabyte',
          name: 'GIGABYTE'
        }, {
          id: 'asus',
          name: 'ASUS'
        }]
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$setState;

      var target = event.target;
      var price_min = target.name;
      var price_max = target.name;
      this.setState((_this$setState = {}, _defineProperty(_this$setState, price_min, event.target.value), _defineProperty(_this$setState, price_max, event.target.value), _this$setState));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      //alert('Votre prix est : ' + this.state.price_min + this.state.price_max);
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_20___default()({
        method: 'post',
        url: 'http://localhost:8000/api/searchByPrice',
        data: {
          'min': this.state.price_min,
          'max': this.state.price_max
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        //handle success
        console.log(response);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var brand = this.state.brand;
      var brandList = brand.length > 0 && brand.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
          key: i,
          value: item.id
        }, item.name);
      }, this);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        id: "aside_blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h5", null, "Affiner votre recherche :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h5", null, "Par prix :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "form-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "form-group col-md-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
        htmlFor: "inputState"
      }, "min"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("select", {
        value: this.state.price_min,
        onChange: this.handleChange,
        name: "price_min",
        id: "price_min",
        className: "form-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "0",
        defaultValue: true
      }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "50"
      }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "100"
      }, "100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "200"
      }, "200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "400"
      }, "400"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "500"
      }, "500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "600"
      }, "600"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "700"
      }, "700"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "800"
      }, "800"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "900"
      }, "900"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "1000"
      }, "1000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "1500"
      }, "1500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "2000"
      }, "2000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "form-group col-md-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
        htmlFor: "inputState"
      }, "max"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("select", {
        value: this.state.price_max,
        onChange: this.handleChange,
        name: "price_max",
        id: "price_max",
        className: "form-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "0"
      }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "50"
      }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "100"
      }, "100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "200"
      }, "200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "400"
      }, "400"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "500",
        defaultValue: true
      }, "500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "600"
      }, "600"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "700"
      }, "700"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "800"
      }, "800"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "900"
      }, "900"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "1000"
      }, "1000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "1500"
      }, "1500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
        value: "2000"
      }, "2000")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-secondary mb-2"
      }, "valider"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h5", null, "Par marque :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("form", {
        onSubmit: this.byBrand,
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "form-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "form-group col-md-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("select", {
        value: this.state.search,
        onChange: this.byBrandChange,
        name: "brand_name",
        id: "brand_name",
        className: "form-control"
      }, brandList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-secondary mb-2"
      }, "valider"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h5", null, "Par nom :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h5", null, "Par cat\xE9gorie :"));
    }
  }]);

  return AsideFilter;
}(react__WEBPACK_IMPORTED_MODULE_19__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AsideFilter);

/***/ }),

/***/ "./assets/js/components/products/MainAdd.js":
/*!**************************************************!*\
  !*** ./assets/js/components/products/MainAdd.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MainAdd = /*#__PURE__*/function (_Component) {
  _inherits(MainAdd, _Component);

  var _super = _createSuper(MainAdd);

  function MainAdd() {
    var _this;

    _classCallCheck(this, MainAdd);

    _this = _super.call(this);
    _this.state = {
      categories: [],
      loading: true
    };
    return _this;
  }

  _createClass(MainAdd, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCategories();
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("http://localhost:8000/api/getcategories").then(function (res) {
        var categories = res.data;

        _this2.setState({
          categories: categories,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      var categories = this.state.categories;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
        method: "POST",
        action: "/api/createproduct",
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("h2", {
        className: "card-header info-color white-text text-center py-4 txt-color"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("strong", null, "Administrateur /Ajouter un produit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "categorie"
      }, "Categorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("select", {
        className: "form-control",
        name: "categorie"
      }, categories.map(function (categorie) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("option", {
          key: categorie.idCat,
          value: categorie.idCat
        }, categorie.catName);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "name"
      }, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "name",
        required: true,
        name: "name"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "description"
      }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("textarea", {
        rows: "3",
        className: "form-control",
        id: "description",
        required: true,
        name: "description"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "brand"
      }, "Marque"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "brand",
        required: true,
        name: "brand"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "stock"
      }, "Stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        id: "stock",
        required: true,
        name: "stock"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "checkbox",
        className: "form-check-input",
        id: "new",
        name: "new"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "new",
        className: "form-check-label"
      }, "Nouveaut\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "checkbox",
        className: "form-check-input",
        id: "promo",
        name: "promo"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "promo",
        className: "form-check-label"
      }, "Promotion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "picture1"
      }, "Image 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "picture1",
        name: "picture1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "picture2"
      }, "Image 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "picture2",
        name: "picture2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "picture3"
      }, "Image 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "picture3",
        name: "picture3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "characteristics"
      }, "Caract\xE9ristiques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "characteristics",
        required: true,
        name: "characteristics"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "price"
      }, "Prix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        id: "price",
        required: true,
        name: "price",
        min: "1",
        step: "0.01"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "weight"
      }, "Poids (grammes)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        id: "weight",
        required: true,
        name: "weight",
        min: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "color"
      }, "Couleur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "color",
        required: true,
        name: "color"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "card-header info-color white-text text-center py-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "size"
      }, "Taille (longueur x largeur cm)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "size",
        required: true,
        name: "size"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: "submit",
        className: "btn btn-primary btn-block",
        value: "Submit"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", null)));
    }
  }]);

  return MainAdd;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainAdd);

/***/ }),

/***/ "./assets/js/components/products/MainCatalog.js":
/*!******************************************************!*\
  !*** ./assets/js/components/products/MainCatalog.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _AsideFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AsideFilter */ "./assets/js/components/products/AsideFilter.js");
/* harmony import */ var _AsideCatalog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AsideCatalog */ "./assets/js/components/products/AsideCatalog.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var MainCatalog = /*#__PURE__*/function (_Component) {
  _inherits(MainCatalog, _Component);

  var _super = _createSuper(MainCatalog);

  function MainCatalog() {
    _classCallCheck(this, MainCatalog);

    return _super.apply(this, arguments);
  }

  _createClass(MainCatalog, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_AsideFilter__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_AsideCatalog__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
    }
  }]);

  return MainCatalog;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainCatalog);

/***/ }),

/***/ "./assets/js/paths/Paths.js":
/*!**********************************!*\
  !*** ./assets/js/paths/Paths.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Navbar */ "./assets/js/components/Navbar.js");
/* harmony import */ var _components_products_MainCatalog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/products/MainCatalog */ "./assets/js/components/products/MainCatalog.js");
/* harmony import */ var _components_products_MainAdd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/products/MainAdd */ "./assets/js/components/products/MainAdd.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Paths = /*#__PURE__*/function (_Component) {
  _inherits(Paths, _Component);

  var _super = _createSuper(Paths);

  function Paths() {
    _classCallCheck(this, Paths);

    return _super.apply(this, arguments);
  }

  _createClass(Paths, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Redirect"], {
        exact: true,
        from: "/",
        to: "/catalog"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/catalog",
        component: _components_products_MainCatalog__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/add",
        component: _components_products_MainAdd__WEBPACK_IMPORTED_MODULE_18__["default"]
      })));
    }
  }]);

  return Paths;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Paths);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvQXNpZGVDYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL0FzaWRlRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL01haW5BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvTWFpbkNhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhdGhzL1BhdGhzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdmJhciIsIkNvbXBvbmVudCIsIkFzaWRlQ2F0YWxvZyIsInByb3BzIiwic3RhdGUiLCJpc0xvYWRlZCIsIml0ZW1zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNldFN0YXRlIiwiY291bnQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImlkX3Byb2R1Y3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjaGFyYWN0ZXJpc3RpY3MiLCJwcmljZSIsInN0b2NrIiwiQXNpZGVGaWx0ZXIiLCJwcmljZV9taW4iLCJwcmljZV9tYXgiLCJicmFuZCIsInNlYXJjaCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJieUJyYW5kIiwiYnlCcmFuZENoYW5nZSIsImlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImJyYW5kTGlzdCIsImkiLCJNYWluQWRkIiwiY2F0ZWdvcmllcyIsImxvYWRpbmciLCJnZXRDYXRlZ29yaWVzIiwiZ2V0IiwiY2F0ZWdvcmllIiwiaWRDYXQiLCJjYXROYW1lIiwiTWFpbkNhdGFsb2ciLCJQYXRocyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNFLDJEQUFDLDhEQUFELHFCQUNFLDJEQUFDLG9EQUFELE9BREYsQ0FERixFQUlFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztJQUVNQyxNOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsMEJBQ0Usc0ZBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsNERBQUMsc0RBQUQ7QUFBTSxpQkFBUyxFQUFFLDBCQUFqQjtBQUE2QyxVQUFFLEVBQUU7QUFBakQsU0FDRyxHQURILGdCQUVhLEdBRmIsQ0FERixlQUtFO0FBQ0UsaUJBQVMsRUFBQyxnQkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsdUJBQVksVUFIZDtBQUlFLHVCQUFZLHlCQUpkO0FBS0UseUJBQWMsd0JBTGhCO0FBTUUseUJBQWMsT0FOaEI7QUFPRSxzQkFBVztBQVBiLHNCQVNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQVRGLENBTEYsZUFnQkU7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQTBDLFVBQUUsRUFBQztBQUE3QyxzQkFDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxzQkFDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxzQkFDRTtBQUFHLGlC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Z0IsWUFBSSxFQUFDLEdBQXJCO0FBQXlCLFVBQUUsRUFBQztBQUE1QixRQURGLGVBRUUsNERBQUMsdURBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixpQkFBUyxFQUFFRCx5RUFBV0E7QUFBN0MsUUFGRixlQUdFLDREQUFDLHVEQUFEO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBRVIscUVBQU9BO0FBQXJDLFFBSEYsQ0FGRixDQURGO0FBVUQ7Ozs7RUFaaUJoRCxnRDs7QUFlTHlELG9FQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQYXRocyBmcm9tICcuL3BhdGhzL1BhdGhzJztcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSb3V0ZXI+XG4gICAgPFBhdGhzIC8+XG4gIDwvUm91dGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBiZ1wiPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17J25hdmJhci1icmFuZCBuYXZiYXJQZXJzbyd9IHRvPXsnLyd9PlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIEluZm9ybWF0aXh7JyAnfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICBIb21lIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXYtbGlua1wiIGhyZWY9XCIvYWRkXCI+XG4gICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJEcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEcm9wZG93blxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIGRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIG5hdi1saW5rIGRpc2FibGVkXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIERpc2FibGVkXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFzaWRlQ2F0YWxvZyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH07XG4gICAgfVxuICAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdHMnKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpdGVtczoganNvbixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmVuZGVyKCl7XG5cbiAgICAgICAgdmFyeyBpc0xvYWRlZCwgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBjb3VudCA9IE9iamVjdC5rZXlzKGl0ZW1zKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFpc0xvYWRlZCl7XG4gICAgICAgICAgICByZXR1cm4gPGRpdj5DaGFyZ2VtZW50Li4uPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkaXZfY2F0YWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX2xpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5DQVRBTE9HVUU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdW50fSBwcm9kdWl0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdl9hbGxfcHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfbGlnblwiIGtleT17aXRlbS5pZF9wcm9kdWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLm1hdGVyaWVsLm5ldC9yNTUwL3Byb2R1Y3RzL01OMDAwNTA0ODkyOF8xLmpwZ1wiIGFsdD1cInByb2R1Y3RcIiB3aWR0aD1cIjI1MHB4XCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uY2hhcmFjdGVyaXN0aWNzfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OIGF2aXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLnByaWNlfSDigqw8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnN0b2NrfSBlbiBzdG9jazwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5BSk9VVEVSIEFVIFBBTklFUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzaWRlQ2F0YWxvZzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQXNpZGVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgcHJpY2VfbWluOiAnMCcsXG4gICAgICAgICAgcHJpY2VfbWF4OiAnNTAwJyxcbiAgICAgICAgICBicmFuZDpbXSxcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnlCcmFuZCA9IHRoaXMuYnlCcmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJ5QnJhbmRDaGFuZ2UgPXRoaXMuYnlCcmFuZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGJyYW5kOiBbXG4gICAgICAgICAgICB7aWQ6ICdtc2knLCBuYW1lOiAnTVNJJ30sXG4gICAgICAgICAgICB7aWQ6ICdhbWQnLCBuYW1lOiAnQU1EJ30sXG4gICAgICAgICAgICB7aWQ6ICdneWdhYnl0ZScsIG5hbWU6ICdHSUdBQllURSd9LFxuICAgICAgICAgICAge2lkOiAnYXN1cycsIG5hbWU6ICdBU1VTJ31cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJpY2VfbWluID0gdGFyZ2V0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHByaWNlX21heCA9IHRhcmdldC5uYW1lO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtbcHJpY2VfbWluXTogZXZlbnQudGFyZ2V0LnZhbHVlLCBbcHJpY2VfbWF4XTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuICBcbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgIC8vYWxlcnQoJ1ZvdHJlIHByaXggZXN0IDogJyArIHRoaXMuc3RhdGUucHJpY2VfbWluICsgdGhpcy5zdGF0ZS5wcmljZV9tYXgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFxuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zZWFyY2hCeVByaWNlJyxcbiAgICAgICAgZGF0YTogeydtaW4nOiB0aGlzLnN0YXRlLnByaWNlX21pbiwnbWF4JzogdGhpcy5zdGF0ZS5wcmljZV9tYXggfSxcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vaGFuZGxlIHN1Y2Nlc3NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGJyYW5kIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGJyYW5kTGlzdCA9IGJyYW5kLmxlbmd0aCA+IDBcbiAgICBcdCYmIGJyYW5kLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvb3B0aW9uPlxuICAgICAgKVxuICAgIH0sIHRoaXMpO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXNpZGVfYmx1ZVwiPlxuICAgICAgICAgICAgICAgIDxoNT5BZmZpbmVyIHZvdHJlIHJlY2hlcmNoZSA6PC9oNT5cbiAgICAgICAgICAgICAgICA8aDU+UGFyIHByaXggOjwvaDU+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuaGFuZGxlU3VibWl0IH0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFN0YXRlXCI+bWluPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlX21pbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwicHJpY2VfbWluXCIgaWQ9XCJwcmljZV9taW5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIiBkZWZhdWx0VmFsdWU+MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDBcIj4yMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwMFwiPjQwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAwXCI+NTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDBcIj42MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjcwMFwiPjcwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiODAwXCI+ODAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5MDBcIj45MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMDBcIj4xMDAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNTAwXCI+MTUwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwMFwiPjIwMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFN0YXRlXCI+bWF4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlX21heH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwicHJpY2VfbWF4XCIgaWQ9XCJwcmljZV9tYXhcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPjA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwXCI+MjAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBcIj40MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwMFwiIGRlZmF1bHRWYWx1ZT41MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjYwMFwiPjYwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNzAwXCI+NzAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4MDBcIj44MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjkwMFwiPjkwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMFwiPjEwMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE1MDBcIj4xNTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDAwXCI+MjAwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbWItMlwiPnZhbGlkZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxoNT5QYXIgbWFycXVlIDo8L2g1PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0geyB0aGlzLmJ5QnJhbmQgfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTEwXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5ieUJyYW5kQ2hhbmdlfSBuYW1lPVwiYnJhbmRfbmFtZVwiIGlkPVwiYnJhbmRfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICB7YnJhbmRMaXN0fVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG1iLTJcIj52YWxpZGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxoNT5QYXIgbm9tIDo8L2g1PlxuICAgICAgICAgICAgICAgIDxoNT5QYXIgY2F0w6lnb3JpZSA6PC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzaWRlRmlsdGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBNYWluQWRkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGNhdGVnb3JpZXM6IFtdLCBsb2FkaW5nOiB0cnVlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldENhdGVnb3JpZXMoKTtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldGNhdGVnb3JpZXNgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSByZXMuZGF0YTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvYXBpL2NyZWF0ZXByb2R1Y3RcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00IHR4dC1jb2xvclwiPlxuICAgICAgICAgICAgPHN0cm9uZz5BZG1pbmlzdHJhdGV1ciAvQWpvdXRlciB1biBwcm9kdWl0PC9zdHJvbmc+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhdGVnb3JpZVwiPkNhdGVnb3JpZTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjYXRlZ29yaWVcIj5cbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yaWUpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0ZWdvcmllLmlkQ2F0fSB2YWx1ZT17Y2F0ZWdvcmllLmlkQ2F0fT5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWUuY2F0TmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5vbTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnJhbmRcIj5NYXJxdWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgaWQ9XCJicmFuZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG5hbWU9XCJicmFuZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdG9ja1wiPlN0b2NrPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgaWQ9XCJzdG9ja1wiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG5hbWU9XCJzdG9ja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICBpZD1cIm5ld1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJuZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICBOb3V2ZWF1dMOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICBpZD1cInByb21vXCJcbiAgICAgICAgICAgICAgbmFtZT1cInByb21vXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21vXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICBQcm9tb3Rpb25cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBpY3R1cmUxXCI+SW1hZ2UgMTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cInBpY3R1cmUxXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBpY3R1cmUxXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBpY3R1cmUyXCI+SW1hZ2UgMjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cInBpY3R1cmUyXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBpY3R1cmUyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBpY3R1cmUzXCI+SW1hZ2UgMzwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cInBpY3R1cmUzXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBpY3R1cmUzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoYXJhY3RlcmlzdGljc1wiPkNhcmFjdMOpcmlzdGlxdWVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwiY2hhcmFjdGVyaXN0aWNzXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJhY3RlcmlzdGljc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlByaXg8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndlaWdodFwiPlBvaWRzIChncmFtbWVzKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwid2VpZ2h0XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbmFtZT1cIndlaWdodFwiXG4gICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29sb3JcIj5Db3VsZXVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwiY29sb3JcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBuYW1lPVwiY29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2l6ZVwiPlRhaWxsZSAobG9uZ3VldXIgeCBsYXJnZXVyIGNtKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cInNpemVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkFkZDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXNpZGVGaWx0ZXIgZnJvbSBcIi4vQXNpZGVGaWx0ZXJcIjtcbmltcG9ydCBBc2lkZUNhdGFsb2cgZnJvbSBcIi4vQXNpZGVDYXRhbG9nXCI7XG5cbmNsYXNzIE1haW5DYXRhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNpZGVGaWx0ZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc2lkZUNhdGFsb2cgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNhdGFsb2c7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1haW5DYXRhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdHMvTWFpbkNhdGFsb2cnO1xuaW1wb3J0IE1haW5BZGQgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9NYWluQWRkJztcblxuY2xhc3MgUGF0aHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8UmVkaXJlY3QgZXhhY3QgZnJvbT1cIi9cIiB0bz1cIi9jYXRhbG9nXCIgLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXRhbG9nXCIgY29tcG9uZW50PXtNYWluQ2F0YWxvZ30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZGRcIiBjb21wb25lbnQ9e01haW5BZGR9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXRocztcbiJdLCJzb3VyY2VSb290IjoiIn0=