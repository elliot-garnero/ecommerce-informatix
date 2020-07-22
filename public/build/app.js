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
      items: _this.props.dataFromParent.updatedatas
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
      if (this.props.dataFromParent.updatedatas.data !== this.state.items && this.props.dataFromParent.updatedatas.data !== undefined) {
        this.setState({
          items: this.props.dataFromParent.updatedatas.data
        });
      }

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
        }, items.map(function (item, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
            className: "product_lign",
            key: i,
            id: item.id_product
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("img", {
            src: item.picture1,
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
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);





















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
      price_min: '',
      price_max: '',
      brand: [],
      search: '',
      update: '',
      nameProduct: [],
      categorie: []
    };
    _this.byPriceChange = _this.byPriceChange.bind(_assertThisInitialized(_this));
    _this.byPrice = _this.byPrice.bind(_assertThisInitialized(_this));
    _this.byBrand = _this.byBrand.bind(_assertThisInitialized(_this));
    _this.byBrandChange = _this.byBrandChange.bind(_assertThisInitialized(_this));
    _this.byName = _this.byName.bind(_assertThisInitialized(_this));
    _this.byNameChange = _this.byNameChange.bind(_assertThisInitialized(_this));
    _this.byCategorie = _this.byCategorie.bind(_assertThisInitialized(_this));
    _this.byCategorieChange = _this.byCategorieChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AsideFilter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://localhost:8000/api/products').then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          nameProduct: json
        }); //console.log(this.state.nameProduct);

      });
      fetch('http://localhost:8000/api/productsBrand').then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          brand: json
        });

        console.log(_this2.state.brand);
      });
      fetch('http://localhost:8000/api/getcategories').then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          categorie: json
        }); //console.log(this.state.categorie);

      });
    }
  }, {
    key: "byPriceChange",
    value: function byPriceChange(event) {
      var _this$setState;

      var target = event.target;
      var price_min = target.name;
      var price_max = target.name;
      this.setState((_this$setState = {}, _defineProperty(_this$setState, price_min, event.target.value), _defineProperty(_this$setState, price_max, event.target.value), _this$setState));
    }
  }, {
    key: "byPrice",
    value: function byPrice(event) {
      var _this3 = this;

      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'post',
        url: 'http://localhost:8000/api/searchByPrice',
        data: {
          'min': this.state.price_min,
          'max': this.state.price_max
        },
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (response) {
        console.log(response);

        _this3.setState({
          update: response
        });

        _this3.sendToParent();
      })["catch"](function (response) {
        console.log(response);
      });
    }
  }, {
    key: "byBrandChange",
    value: function byBrandChange(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: "byBrand",
    value: function byBrand(event) {
      var _this4 = this;

      event.preventDefault(); // console.log(this.state.search);

      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'post',
        url: 'http://localhost:8000/api/searchByBrand',
        data: {
          'brand': this.state.search
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        //handle success
        console.log(response);

        _this4.setState({
          update: response
        });

        _this4.sendToParent();
      })["catch"](function (response) {
        console.log(response);
      });
    }
  }, {
    key: "sendToParent",
    value: function sendToParent() {
      var update = this.state;
      this.props.dataToParent(update);
    }
  }, {
    key: "byNameChange",
    value: function byNameChange(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: "byName",
    value: function byName(event) {
      var _this5 = this;

      event.preventDefault();
      console.log(this.state.search);
      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'post',
        url: 'http://localhost:8000/api/searchByName',
        data: {
          'name': this.state.search
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response);

        _this5.setState({
          update: response
        });

        _this5.sendToParent();
      })["catch"](function (response) {
        console.log(response);
      });
    }
  }, {
    key: "byCategorieChange",
    value: function byCategorieChange(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: "byCategorie",
    value: function byCategorie(event) {
      var _this6 = this;

      event.preventDefault();
      console.log(this.state.search);
      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'post',
        url: 'http://localhost:8000/api/searchByCategorie',
        data: {
          'name': this.state.search
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response);

        _this6.setState({
          update: response
        });

        _this6.sendToParent();
      })["catch"](function (response) {
        console.log(response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var brand = this.state.brand;
      var brandList = brand.length > 0 && brand.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
          key: i,
          value: item.brand
        }, item.brand);
      }, this);
      var nameProduct = this.state.nameProduct;
      var productNameList = nameProduct.length > 0 && nameProduct.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
          key: i,
          value: item.name
        }, item.name);
      }, this);
      var categorie = this.state.categorie;
      var categorieList = categorie.length > 0 && categorie.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
          key: i,
          value: item.catName
        }, item.catName);
      }, this);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        id: "aside_blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h5", null, "Affiner votre recherche :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h5", null, "Par prix :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("form", {
        onSubmit: this.byPrice,
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-group col-md-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("label", {
        htmlFor: "inputState"
      }, "min"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("select", {
        value: this.state.price_min,
        onChange: this.byPriceChange,
        name: "price_min",
        id: "price_min",
        className: "form-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "0",
        defaultValue: true
      }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "50"
      }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "100"
      }, "100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "200"
      }, "200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "400"
      }, "400"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "500"
      }, "500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "600"
      }, "600"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "700"
      }, "700"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "800"
      }, "800"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "900"
      }, "900"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "1000"
      }, "1000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "1500"
      }, "1500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "2000"
      }, "2000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-group col-md-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("label", {
        htmlFor: "inputState"
      }, "max"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("select", {
        value: this.state.price_max,
        onChange: this.byPriceChange,
        name: "price_max",
        id: "price_max",
        className: "form-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "0"
      }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "50"
      }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "100"
      }, "100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "200"
      }, "200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "400"
      }, "400"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "500",
        defaultValue: true
      }, "500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "600"
      }, "600"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "700"
      }, "700"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "800"
      }, "800"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "900"
      }, "900"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "1000"
      }, "1000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "1500"
      }, "1500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("option", {
        value: "2000"
      }, "2000")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-secondary mb-2"
      }, "valider"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h5", null, "Par marque :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("form", {
        onSubmit: this.byBrand,
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-group col-md-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("select", {
        value: this.state.search,
        onChange: this.byBrandChange,
        name: "brand_name",
        id: "brand_name",
        className: "form-control"
      }, brandList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-secondary mb-2"
      }, "valider"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h5", null, "Par nom :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("form", {
        onSubmit: this.byName,
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-group col-md-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("select", {
        value: this.state.search,
        onChange: this.byNameChange,
        name: "product_name",
        id: "product_name",
        className: "form-control"
      }, productNameList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-secondary mb-2"
      }, "valider"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h5", null, "Par cat\xE9gorie :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("form", {
        onSubmit: this.byCategorie,
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "form-group col-md-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("select", {
        value: this.state.search,
        onChange: this.byCategorieChange,
        name: "categorie_name",
        id: "categorie_name",
        className: "form-control"
      }, categorieList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-secondary mb-2"
      }, "valider"))));
    }
  }]);

  return AsideFilter;
}(react__WEBPACK_IMPORTED_MODULE_20__["Component"]);

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
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var _AsideFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AsideFilter */ "./assets/js/components/products/AsideFilter.js");
/* harmony import */ var _AsideCatalog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AsideCatalog */ "./assets/js/components/products/AsideCatalog.js");
















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

  function MainCatalog(props) {
    var _this;

    _classCallCheck(this, MainCatalog);

    _this = _super.call(this, props);
    _this.state = {
      updatedatas: []
    };
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MainCatalog, [{
    key: "updateState",
    value: function updateState(value) {
      this.setState({
        updatedatas: value.update
      });
    }
  }, {
    key: "render",
    value: function render() {
      var updatedatas = this.state;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_AsideFilter__WEBPACK_IMPORTED_MODULE_16__["default"], {
        dataToParent: this.updateState
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "col-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_AsideCatalog__WEBPACK_IMPORTED_MODULE_17__["default"], {
        dataFromParent: updatedatas
      }))));
    }
  }]);

  return MainCatalog;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvQXNpZGVDYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL0FzaWRlRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL01haW5BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvTWFpbkNhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhdGhzL1BhdGhzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdmJhciIsIkNvbXBvbmVudCIsIkFzaWRlQ2F0YWxvZyIsInByb3BzIiwic3RhdGUiLCJpc0xvYWRlZCIsIml0ZW1zIiwiZGF0YUZyb21QYXJlbnQiLCJ1cGRhdGVkYXRhcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImRhdGEiLCJ1bmRlZmluZWQiLCJjb3VudCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImlkX3Byb2R1Y3QiLCJwaWN0dXJlMSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNoYXJhY3RlcmlzdGljcyIsInByaWNlIiwic3RvY2siLCJBc2lkZUZpbHRlciIsInByaWNlX21pbiIsInByaWNlX21heCIsImJyYW5kIiwic2VhcmNoIiwidXBkYXRlIiwibmFtZVByb2R1Y3QiLCJjYXRlZ29yaWUiLCJieVByaWNlQ2hhbmdlIiwiYmluZCIsImJ5UHJpY2UiLCJieUJyYW5kIiwiYnlCcmFuZENoYW5nZSIsImJ5TmFtZSIsImJ5TmFtZUNoYW5nZSIsImJ5Q2F0ZWdvcmllIiwiYnlDYXRlZ29yaWVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJzZW5kVG9QYXJlbnQiLCJkYXRhVG9QYXJlbnQiLCJicmFuZExpc3QiLCJwcm9kdWN0TmFtZUxpc3QiLCJjYXRlZ29yaWVMaXN0IiwiY2F0TmFtZSIsIk1haW5BZGQiLCJjYXRlZ29yaWVzIiwibG9hZGluZyIsImdldENhdGVnb3JpZXMiLCJnZXQiLCJpZENhdCIsIk1haW5DYXRhbG9nIiwidXBkYXRlU3RhdGUiLCJQYXRocyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNFLDJEQUFDLDhEQUFELHFCQUNFLDJEQUFDLG9EQUFELE9BREYsQ0FERixFQUlFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztJQUVNQyxNOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsMEJBQ0Usc0ZBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsNERBQUMsc0RBQUQ7QUFBTSxpQkFBUyxFQUFFLDBCQUFqQjtBQUE2QyxVQUFFLEVBQUU7QUFBakQsU0FDRyxHQURILGdCQUVhLEdBRmIsQ0FERixlQUtFO0FBQ0UsaUJBQVMsRUFBQyxnQkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsdUJBQVksVUFIZDtBQUlFLHVCQUFZLHlCQUpkO0FB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SixDQURKLENBREo7QUFZSDs7OztFQTlCcUJQLGdEOztBQWlDWHFFLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztJQUVNRSxLOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsMEJBQ0Usc0ZBQ0UsNERBQUMsMkRBQUQsT0FERixlQUVFLDREQUFDLHdEQUFELHFCQUNFLDREQUFDLDBEQUFEO0FBQVUsYUFBSyxNQUFmO0FBQWdCLFlBQUksRUFBQyxHQUFyQjtBQUF5QixVQUFFLEVBQUM7QUFBNUIsUUFERixlQUVFLDREQUFDLHVEQUFEO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsaUJBQVMsRUFBRUYseUVBQVdBO0FBQTdDLFFBRkYsZUFHRSw0REFBQyx1REFBRDtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUVOLHFFQUFPQTtBQUFyQyxRQUhGLENBRkYsQ0FERjtBQVVEOzs7O0VBWmlCL0QsZ0Q7O0FBZUx1RSxvRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUGF0aHMgZnJvbSAnLi9wYXRocy9QYXRocyc7XHJcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSb3V0ZXI+XHJcbiAgICA8UGF0aHMgLz5cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBiZ1wiPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXsnbmF2YmFyLWJyYW5kIG5hdmJhclBlcnNvJ30gdG89eycvJ30+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIEluZm9ybWF0aXh7JyAnfVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIG5hdi1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgSG9tZSA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXYtbGlua1wiIGhyZWY9XCIvYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRHJvcGRvd25cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIGRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIGRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIGRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyBlbHNlIGhlcmVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIG5hdi1saW5rIGRpc2FibGVkXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEFzaWRlQ2F0YWxvZyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICBpdGVtczogdGhpcy5wcm9wcy5kYXRhRnJvbVBhcmVudC51cGRhdGVkYXRhcyxcclxuICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2R1Y3RzJylcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBqc29uLFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhRnJvbVBhcmVudC51cGRhdGVkYXRhcy5kYXRhICE9PSB0aGlzLnN0YXRlLml0ZW1zICYmIHRoaXMucHJvcHMuZGF0YUZyb21QYXJlbnQudXBkYXRlZGF0YXMuZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHsgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogdGhpcy5wcm9wcy5kYXRhRnJvbVBhcmVudC51cGRhdGVkYXRhcy5kYXRhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcnsgaXNMb2FkZWQsIGl0ZW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHZhciBjb3VudCA9IE9iamVjdC5rZXlzKGl0ZW1zKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICghaXNMb2FkZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGl2X2NhdGFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX2xpZ25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNBVEFMT0dVRTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3VudH0gcHJvZHVpdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZfYWxsX3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X2xpZ25cIiBrZXk9e2l9IGlkPXtpdGVtLmlkX3Byb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBpY3R1cmUxfSBhbHQ9XCJwcm9kdWN0XCIgd2lkdGg9XCIyNTBweFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uY2hhcmFjdGVyaXN0aWNzfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OIGF2aXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0ucHJpY2V9IOKCrDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5zdG9ja30gZW4gc3RvY2s8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5BSk9VVEVSIEFVIFBBTklFUjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzaWRlQ2F0YWxvZzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgQXNpZGVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBwcmljZV9taW46ICcnLFxyXG4gICAgICAgICAgcHJpY2VfbWF4OiAnJyxcclxuICAgICAgICAgIGJyYW5kOltdLFxyXG4gICAgICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgICAgIHVwZGF0ZTonJyxcclxuICAgICAgICAgIG5hbWVQcm9kdWN0OiBbXSxcclxuICAgICAgICAgIGNhdGVnb3JpZTogW10sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnlQcmljZUNoYW5nZSA9IHRoaXMuYnlQcmljZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnlQcmljZSA9IHRoaXMuYnlQcmljZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnlCcmFuZCA9IHRoaXMuYnlCcmFuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnlCcmFuZENoYW5nZSA9dGhpcy5ieUJyYW5kQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWUgPSB0aGlzLmJ5TmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnlOYW1lQ2hhbmdlID10aGlzLmJ5TmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnlDYXRlZ29yaWUgPSB0aGlzLmJ5Q2F0ZWdvcmllLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ieUNhdGVnb3JpZUNoYW5nZSA9dGhpcy5ieUNhdGVnb3JpZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2R1Y3RzJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVQcm9kdWN0OiBqc29uIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWVQcm9kdWN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdHNCcmFuZCcpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmFuZDoganNvbiB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnJhbmQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRjYXRlZ29yaWVzJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZToganNvbiB9KTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5jYXRlZ29yaWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBieVByaWNlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHByaWNlX21pbiA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHByaWNlX21heCA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1twcmljZV9taW5dOiBldmVudC50YXJnZXQudmFsdWUsIFtwcmljZV9tYXhdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuICBcclxuICAgIGJ5UHJpY2UoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaEJ5UHJpY2UnLFxyXG4gICAgICAgIGRhdGE6IHsnbWluJzogdGhpcy5zdGF0ZS5wcmljZV9taW4sJ21heCc6IHRoaXMuc3RhdGUucHJpY2VfbWF4IH0sXHJcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1cGRhdGU6cmVzcG9uc2V9KTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVG9QYXJlbnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBieUJyYW5kQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYnlCcmFuZChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWFyY2gpO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaEJ5QnJhbmQnLFxyXG4gICAgICAgIGRhdGE6IHsnYnJhbmQnOiB0aGlzLnN0YXRlLnNlYXJjaCB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VwZGF0ZTpyZXNwb25zZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRUb1BhcmVudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VuZFRvUGFyZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhVG9QYXJlbnQodXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBieU5hbWVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWFyY2gpO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaEJ5TmFtZScsXHJcbiAgICAgICAgZGF0YTogeyduYW1lJzogdGhpcy5zdGF0ZS5zZWFyY2ggfSxcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VwZGF0ZTpyZXNwb25zZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRUb1BhcmVudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBieUNhdGVnb3JpZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnlDYXRlZ29yaWUoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VhcmNoKTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zZWFyY2hCeUNhdGVnb3JpZScsXHJcbiAgICAgICAgZGF0YTogeyduYW1lJzogdGhpcy5zdGF0ZS5zZWFyY2ggfSxcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1cGRhdGU6cmVzcG9uc2V9KTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVG9QYXJlbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICBjb25zdCB7IGJyYW5kIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGJyYW5kTGlzdCA9IGJyYW5kLmxlbmd0aCA+IDBcclxuICAgIFx0JiYgYnJhbmQubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLmJyYW5kfT57aXRlbS5icmFuZH08L29wdGlvbj5cclxuICAgICAgKVxyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICBjb25zdCB7IG5hbWVQcm9kdWN0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHByb2R1Y3ROYW1lTGlzdCA9IG5hbWVQcm9kdWN0Lmxlbmd0aCA+IDBcclxuICAgICAgICAmJiBuYW1lUHJvZHVjdC5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2l0ZW0ubmFtZX0+e2l0ZW0ubmFtZX08L29wdGlvbj5cclxuICAgICAgICApXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgY29uc3QgeyBjYXRlZ29yaWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgY2F0ZWdvcmllTGlzdCA9IGNhdGVnb3JpZS5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgY2F0ZWdvcmllLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aXRlbS5jYXROYW1lfT57aXRlbS5jYXROYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgIClcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXNpZGVfYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PkFmZmluZXIgdm90cmUgcmVjaGVyY2hlIDo8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg1PlBhciBwcml4IDo8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlQcmljZSB9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRTdGF0ZVwiPm1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlX21pbn0gb25DaGFuZ2U9e3RoaXMuYnlQcmljZUNoYW5nZX0gbmFtZT1cInByaWNlX21pblwiIGlkPVwicHJpY2VfbWluXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIiBkZWZhdWx0VmFsdWU+MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDBcIj4yMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDAwXCI+NDAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwMFwiPjUwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDBcIj42MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNzAwXCI+NzAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjgwMFwiPjgwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5MDBcIj45MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMFwiPjEwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTUwMFwiPjE1MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwMFwiPjIwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0U3RhdGVcIj5tYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5wcmljZV9tYXh9IG9uQ2hhbmdlPXt0aGlzLmJ5UHJpY2VDaGFuZ2V9IG5hbWU9XCJwcmljZV9tYXhcIiBpZD1cInByaWNlX21heFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj4wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMFwiPjIwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBcIj40MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAwXCIgZGVmYXVsdFZhbHVlPjUwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDBcIj42MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNzAwXCI+NzAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjgwMFwiPjgwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5MDBcIj45MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMFwiPjEwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTUwMFwiPjE1MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwMFwiPjIwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBtYi0yXCI+dmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoNT5QYXIgbWFycXVlIDo8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlCcmFuZCB9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5ieUJyYW5kQ2hhbmdlfSBuYW1lPVwiYnJhbmRfbmFtZVwiIGlkPVwiYnJhbmRfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyYW5kTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBtYi0yXCI+dmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoNT5QYXIgbm9tIDo8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlOYW1lIH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLmJ5TmFtZUNoYW5nZX0gbmFtZT1cInByb2R1Y3RfbmFtZVwiIGlkPVwicHJvZHVjdF9uYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdE5hbWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG1iLTJcIj52YWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGg1PlBhciBjYXTDqWdvcmllIDo8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlDYXRlZ29yaWUgfSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMuYnlDYXRlZ29yaWVDaGFuZ2V9IG5hbWU9XCJjYXRlZ29yaWVfbmFtZVwiIGlkPVwiY2F0ZWdvcmllX25hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG1iLTJcIj52YWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzaWRlRmlsdGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBNYWluQWRkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgY2F0ZWdvcmllczogW10sIGxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDYXRlZ29yaWVzKCkge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldGNhdGVnb3JpZXNgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gcmVzLmRhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2FwaS9jcmVhdGVwcm9kdWN0XCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTQgdHh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+QWRtaW5pc3RyYXRldXIgL0Fqb3V0ZXIgdW4gcHJvZHVpdDwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yaWVcIj5DYXRlZ29yaWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjYXRlZ29yaWVcIj5cclxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3JpZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NhdGVnb3JpZS5pZENhdH0gdmFsdWU9e2NhdGVnb3JpZS5pZENhdH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWUuY2F0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJyYW5kXCI+TWFycXVlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJicmFuZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiYnJhbmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0b2NrXCI+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwic3RvY2tcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInN0b2NrXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICBpZD1cIm5ld1wiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5ld1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIE5vdXZlYXV0w6lcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICBpZD1cInByb21vXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJvbW9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21vXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIFByb21vdGlvblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBpY3R1cmUxXCI+SW1hZ2UgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGljdHVyZTFcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaWN0dXJlMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGljdHVyZTJcIj5JbWFnZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaWN0dXJlMlwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBpY3R1cmUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaWN0dXJlM1wiPkltYWdlIDM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInBpY3R1cmUzXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGljdHVyZTNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoYXJhY3RlcmlzdGljc1wiPkNhcmFjdMOpcmlzdGlxdWVzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjaGFyYWN0ZXJpc3RpY3NcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJhY3RlcmlzdGljc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5Qcml4PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndlaWdodFwiPlBvaWRzIChncmFtbWVzKTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ3ZWlnaHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cIndlaWdodFwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29sb3JcIj5Db3VsZXVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpemVcIj5UYWlsbGUgKGxvbmd1ZXVyIHggbGFyZ2V1ciBjbSk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInNpemVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNpemVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFkZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBc2lkZUZpbHRlciBmcm9tIFwiLi9Bc2lkZUZpbHRlclwiO1xuaW1wb3J0IEFzaWRlQ2F0YWxvZyBmcm9tIFwiLi9Bc2lkZUNhdGFsb2dcIjtcblxuY2xhc3MgTWFpbkNhdGFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdXBkYXRlZGF0YXM6IFtdXG4gICAgICB9IFxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBcbiAgICB1cGRhdGVTdGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt1cGRhdGVkYXRhczp2YWx1ZS51cGRhdGV9KVxuICAgIFxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgdXBkYXRlZGF0YXMgPSB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNpZGVGaWx0ZXIgZGF0YVRvUGFyZW50PXt0aGlzLnVwZGF0ZVN0YXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzaWRlQ2F0YWxvZyBkYXRhRnJvbVBhcmVudD17dXBkYXRlZGF0YXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNhdGFsb2c7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgTWFpbkNhdGFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9NYWluQ2F0YWxvZyc7XHJcbmltcG9ydCBNYWluQWRkIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdHMvTWFpbkFkZCc7XHJcblxyXG5jbGFzcyBQYXRocyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgIDxSZWRpcmVjdCBleGFjdCBmcm9tPVwiL1wiIHRvPVwiL2NhdGFsb2dcIiAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2F0YWxvZ1wiIGNvbXBvbmVudD17TWFpbkNhdGFsb2d9IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZGRcIiBjb21wb25lbnQ9e01haW5BZGR9IC8+XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGhzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9