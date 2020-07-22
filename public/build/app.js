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
      nameProduct: [],
      categorie: [],
      search: '',
      update: ''
    };
    _this.byPriceChange = _this.byPriceChange.bind(_assertThisInitialized(_this));
    _this.byPrice = _this.byPrice.bind(_assertThisInitialized(_this));
    _this.byBrand = _this.byBrand.bind(_assertThisInitialized(_this));
    _this.byName = _this.byName.bind(_assertThisInitialized(_this));
    _this.byCategorie = _this.byCategorie.bind(_assertThisInitialized(_this));
    _this.inputChange = _this.inputChange.bind(_assertThisInitialized(_this));
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
        });

        console.log(_this2.state.categorie);
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
    key: "inputChange",
    value: function inputChange(event) {
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
    key: "sendToParent",
    value: function sendToParent() {
      var update = this.state;
      this.props.dataToParent(update);
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
        onChange: this.inputChange,
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
        onChange: this.inputChange,
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
        onChange: this.inputChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvQXNpZGVDYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL0FzaWRlRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL01haW5BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvTWFpbkNhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhdGhzL1BhdGhzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdmJhciIsIkNvbXBvbmVudCIsIkFzaWRlQ2F0YWxvZyIsInByb3BzIiwic3RhdGUiLCJpc0xvYWRlZCIsIml0ZW1zIiwiZGF0YUZyb21QYXJlbnQiLCJ1cGRhdGVkYXRhcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImRhdGEiLCJ1bmRlZmluZWQiLCJjb3VudCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImlkX3Byb2R1Y3QiLCJwaWN0dXJlMSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNoYXJhY3RlcmlzdGljcyIsInByaWNlIiwic3RvY2siLCJBc2lkZUZpbHRlciIsInByaWNlX21pbiIsInByaWNlX21heCIsImJyYW5kIiwibmFtZVByb2R1Y3QiLCJjYXRlZ29yaWUiLCJzZWFyY2giLCJ1cGRhdGUiLCJieVByaWNlQ2hhbmdlIiwiYmluZCIsImJ5UHJpY2UiLCJieUJyYW5kIiwiYnlOYW1lIiwiYnlDYXRlZ29yaWUiLCJpbnB1dENoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInNlbmRUb1BhcmVudCIsImRhdGFUb1BhcmVudCIsImJyYW5kTGlzdCIsInByb2R1Y3ROYW1lTGlzdCIsImNhdGVnb3JpZUxpc3QiLCJjYXROYW1lIiwiTWFpbkFkZCIsImNhdGVnb3JpZXMiLCJsb2FkaW5nIiwiZ2V0Q2F0ZWdvcmllcyIsImdldCIsImlkQ2F0IiwiTWFpbkNhdGFsb2ciLCJ1cGRhdGVTdGF0ZSIsIlBhdGhzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxnREFBUSxDQUFDQyxNQUFULGVBQ0UsMkRBQUMsOERBQUQscUJBQ0UsMkRBQUMsb0RBQUQsT0FERixDQURGLEVBSUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0lBRU1DLE07Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCwwQkFDRSxzRkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSw0REFBQyxzREFBRDtBQUFNLGlCQUFTLEVBQUUsMEJBQWpCO0FBQTZDLFVBQUUsRUFBRTtBQUFqRCxTQUNHLEdBREgsZ0JBRWEsR0FGYixDQURGLGVBS0U7QUFDRSxpQkFBUyxFQUFDLGdCQURaO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSx1QkFBWSxVQUhkO0FBSUUsdUJBQVkseUJBSmQ7QUFLRSx5QkFBYyx3QkFMaEI7QUFNRSx5QkFBYyxPQU5oQjtBQU9FLHNCQUFXO0FBUGIsc0JBU0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFFBVEYsQ0FMRixlQWdCRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBMEMsVUFBRSxFQUFDO0FBQTdDLHNCQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLHNCQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLHNCQUNFO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFvQyxZQUFJLEVBQUM7QUFBekMsK0JBQ087QUFBTSxpQkFBUyxFQUFDO0FBQWhCLHFCQURQLENBREYsQ0FERixlQU1FO0FBQUksaUJBQVMsRUFBQztBQUFkLHNCQUNFO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFvQyxZQUFJLEVBQUM7QUFBekMsZUFERixDQU5GLGVBV0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsc0JBQ0U7QUFDRSxpQkFBUyxFQUFDLHNDQURaO0FBRUUsWUFBSSxFQUFDLEdBRlA7QUFHRSxVQUFFLEVBQUMsZ0JBSEw7QUFJRSxZQUFJLEVBQUMsUUFKUDtBQUtFLHVCQUFZLFVBTGQ7QUFNRSx5QkFBYyxNQU5oQjtBQU9FLHlCQUFjO0FBUGhCLG9CQURGLGVBWUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBK0IsMkJBQWdCO0FBQS9DLHNCQUNFO0FBQUcsaUJBQVMsRUFBQywyQkFBYjtBQUF5QyxZQUFJLEVBQUM7QUFBOUMsa0JBREYsZUFJRTtBQUFHLGlCQUFTLEVBQUMsMkJBQWI7QUFBeUMsWUFBSSxFQUFDO0FBQTlDLDBCQUpGLGVBT0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFQRixlQVFFO0FBQUcsaUJBQVMsRUFBQywyQkFBYjtBQUF5QyxZQUFJLEVBQUM7QUFBOUMsK0JBUkYsQ0FaRixDQVhGLGVBb0NFO0FBQUksaUJBQVMsRUFBQztBQUFkLHNCQUNFO0FBQUcsaUJBQVMsRUFBQywrQkFBYjtBQUE2QyxZQUFJLEVBQUM7QUFBbEQsb0JBREYsQ0FwQ0YsQ0FERixDQWhCRixDQURGLENBREY7QUFpRUQ7Ozs7RUFuRWtCQyxnRDs7QUFzRU5ELHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBOztJQUVNRSxZOzs7OztBQUNGLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQUFFLEtBREM7QUFFWEMsV0FBSyxFQUFFLE1BQUtILEtBQUwsQ0FBV0ksY0FBWCxDQUEwQkM7QUFGdEIsS0FBYjtBQUhlO0FBUWxCOzs7O3dDQUltQjtBQUFBOztBQUNoQkMsV0FBSyxDQUFDLG9DQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BRFgsRUFFR0YsSUFGSCxDQUVRLFVBQUFFLElBQUksRUFBSTtBQUNWLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1pSLGtCQUFRLEVBQUUsSUFERTtBQUVaQyxlQUFLLEVBQUVNO0FBRkssU0FBZDtBQUtILE9BUkg7QUFTSDs7OzZCQUdPO0FBRUosVUFBRyxLQUFLVCxLQUFMLENBQVdJLGNBQVgsQ0FBMEJDLFdBQTFCLENBQXNDTSxJQUF0QyxLQUErQyxLQUFLVixLQUFMLENBQVdFLEtBQTFELElBQW1FLEtBQUtILEtBQUwsQ0FBV0ksY0FBWCxDQUEwQkMsV0FBMUIsQ0FBc0NNLElBQXRDLEtBQStDQyxTQUFySCxFQUNBO0FBQ0ksYUFBS0YsUUFBTCxDQUFjO0FBQUNQLGVBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdJLGNBQVgsQ0FBMEJDLFdBQTFCLENBQXNDTTtBQUE5QyxTQUFkO0FBQ0g7O0FBTEcsd0JBTXFCLEtBQUtWLEtBTjFCO0FBQUEsVUFNQ0MsUUFORCxlQU1DQSxRQU5EO0FBQUEsVUFNV0MsS0FOWCxlQU1XQSxLQU5YO0FBT0osVUFBSVUsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVosS0FBWixFQUFtQmEsTUFBL0I7O0FBRUEsVUFBSSxDQUFDZCxRQUFMLEVBQWM7QUFDViw0QkFBTyx5RkFBUDtBQUNILE9BRkQsTUFHSTtBQUVBLDRCQUNJO0FBQUssWUFBRSxFQUFDO0FBQVIsd0JBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsd0JBQ0ksb0ZBREosZUFFSSx1RUFBSVcsS0FBSixjQUZKLENBREosZUFNSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNLVixLQUFLLENBQUNjLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw4QkFDUDtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUE4QixlQUFHLEVBQUVBLENBQW5DO0FBQXNDLGNBQUUsRUFBRUQsSUFBSSxDQUFDRTtBQUEvQywwQkFDSTtBQUFLLGVBQUcsRUFBRUYsSUFBSSxDQUFDRyxRQUFmO0FBQXlCLGVBQUcsRUFBQyxTQUE3QjtBQUF1QyxpQkFBSyxFQUFDO0FBQTdDLFlBREosZUFFSTtBQUFLLHFCQUFTLEVBQUM7QUFBZiwwQkFDSSx3RUFBS0gsSUFBSSxDQUFDSSxJQUFWLENBREosZUFFSSx1RUFBSUosSUFBSSxDQUFDSyxXQUFULENBRkosZUFHSSx1RUFBSUwsSUFBSSxDQUFDTSxlQUFULENBSEosZUFLSSxzRkFDSSxnRkFESixDQUxKLENBRkosZUFXSTtBQUFLLHFCQUFTLEVBQUM7QUFBZiwwQkFDSSx3RUFBS04sSUFBSSxDQUFDTyxLQUFWLFlBREosZUFFSSx3RUFBS1AsSUFBSSxDQUFDUSxLQUFWLGNBRkosZUFHSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDO0FBQWhDLGlDQUhKLENBWEosZUFnQkksdUVBaEJKLENBRE87QUFBQSxTQUFWLENBREwsQ0FOSixDQURKO0FBaUNIO0FBRUo7Ozs7RUEzRXNCNUIsZ0Q7O0FBOEVaQywyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTs7SUFFTTRCLFc7Ozs7O0FBQ0YsdUJBQVkzQixLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWDJCLGVBQVMsRUFBRSxFQURBO0FBRVhDLGVBQVMsRUFBRSxFQUZBO0FBR1hDLFdBQUssRUFBQyxFQUhLO0FBSVhDLGlCQUFXLEVBQUUsRUFKRjtBQUtYQyxlQUFTLEVBQUUsRUFMQTtBQU1YQyxZQUFNLEVBQUUsRUFORztBQU9YQyxZQUFNLEVBQUM7QUFQSSxLQUFiO0FBU0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQiwrQkFBckI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBQ0EsVUFBS0UsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUYsSUFBYiwrQkFBZjtBQUNBLFVBQUtHLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlILElBQVosK0JBQWQ7QUFDQSxVQUFLSSxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJKLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtLLFdBQUwsR0FBa0IsTUFBS0EsV0FBTCxDQUFpQkwsSUFBakIsK0JBQWxCO0FBaEJjO0FBbUJqQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDaEI5QixXQUFLLENBQUMsb0NBQUQsQ0FBTCxDQUNLQyxJQURMLENBQ1UsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsT0FEYixFQUVLRixJQUZMLENBRVUsVUFBQUUsSUFBSSxFQUFJO0FBQ1YsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRXFCLHFCQUFXLEVBQUV0QjtBQUFmLFNBQWQsRUFEVSxDQUVWOztBQUNILE9BTEw7QUFNQUgsV0FBSyxDQUFDLHlDQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BRGIsRUFFS0YsSUFGTCxDQUVVLFVBQUFFLElBQUksRUFBSTtBQUNWLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVvQixlQUFLLEVBQUVyQjtBQUFULFNBQWQ7O0FBQ0FpQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUMxQyxLQUFMLENBQVc2QixLQUF2QjtBQUNILE9BTEw7QUFNQXhCLFdBQUssQ0FBQyx5Q0FBRCxDQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQURiLEVBRUtGLElBRkwsQ0FFVSxVQUFBRSxJQUFJLEVBQUk7QUFDVixjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFc0IsbUJBQVMsRUFBRXZCO0FBQWIsU0FBZDs7QUFDQWlDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUksQ0FBQzFDLEtBQUwsQ0FBVytCLFNBQXZCO0FBQ0gsT0FMTDtBQU1IOzs7a0NBRWFZLEssRUFBTztBQUFBOztBQUNqQixVQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBckI7QUFDQSxVQUFNakIsU0FBUyxHQUFHaUIsTUFBTSxDQUFDdkIsSUFBekI7QUFDQSxVQUFNTyxTQUFTLEdBQUdnQixNQUFNLENBQUN2QixJQUF6QjtBQUNBLFdBQUtaLFFBQUwsdURBQWdCa0IsU0FBaEIsRUFBNEJnQixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBekMsbUNBQWlEakIsU0FBakQsRUFBNkRlLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUExRTtBQUNIOzs7NEJBRU9GLEssRUFBTztBQUFBOztBQUNYQSxXQUFLLENBQUNHLGNBQU47QUFDQUMsbURBQUssQ0FBQztBQUNOQyxjQUFNLEVBQUUsTUFERjtBQUVOQyxXQUFHLEVBQUUseUNBRkM7QUFHTnZDLFlBQUksRUFBRTtBQUFDLGlCQUFPLEtBQUtWLEtBQUwsQ0FBVzJCLFNBQW5CO0FBQTZCLGlCQUFPLEtBQUszQixLQUFMLENBQVc0QjtBQUEvQyxTQUhBO0FBSU5zQixlQUFPLEVBQUU7QUFBQywwQkFBZ0Isa0JBQWpCO0FBQXFDLHlDQUErQjtBQUFwRTtBQUpILE9BQUQsQ0FBTCxDQU1DNUMsSUFORCxDQU1PLFVBQUM2QyxRQUFELEVBQWM7QUFDakJWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUyxRQUFaOztBQUNBLGNBQUksQ0FBQzFDLFFBQUwsQ0FBYztBQUFDd0IsZ0JBQU0sRUFBQ2tCO0FBQVIsU0FBZDs7QUFDQSxjQUFJLENBQUNDLFlBQUw7QUFDSCxPQVZELFdBV08sVUFBQ0QsUUFBRCxFQUFhO0FBQ2hCVixlQUFPLENBQUNDLEdBQVIsQ0FBWVMsUUFBWjtBQUNILE9BYkQ7QUFjSDs7O2dDQUVXUixLLEVBQU87QUFDZixXQUFLbEMsUUFBTCxDQUFjO0FBQUN1QixjQUFNLEVBQUVXLEtBQUssQ0FBQ0MsTUFBTixDQUFhQztBQUF0QixPQUFkO0FBQ0g7Ozs0QkFFT0YsSyxFQUFPO0FBQUE7O0FBQ1hBLFdBQUssQ0FBQ0csY0FBTixHQURXLENBRVg7O0FBQ0FDLG1EQUFLLENBQUM7QUFDTkMsY0FBTSxFQUFFLE1BREY7QUFFTkMsV0FBRyxFQUFFLHlDQUZDO0FBR052QyxZQUFJLEVBQUU7QUFBQyxtQkFBUyxLQUFLVixLQUFMLENBQVdnQztBQUFyQixTQUhBO0FBSU5rQixlQUFPLEVBQUU7QUFBQywwQkFBZ0I7QUFBakI7QUFKSCxPQUFELENBQUwsQ0FNQzVDLElBTkQsQ0FNTyxVQUFDNkMsUUFBRCxFQUFjO0FBQ2pCO0FBQ0FWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUyxRQUFaOztBQUNBLGNBQUksQ0FBQzFDLFFBQUwsQ0FBYztBQUFDd0IsZ0JBQU0sRUFBQ2tCO0FBQVIsU0FBZDs7QUFDQSxjQUFJLENBQUNDLFlBQUw7QUFDSCxPQVhELFdBWU8sVUFBQ0QsUUFBRCxFQUFhO0FBQ2hCVixlQUFPLENBQUNDLEdBQVIsQ0FBWVMsUUFBWjtBQUNILE9BZEQ7QUFlSDs7OzJCQUVNUixLLEVBQU87QUFBQTs7QUFDVkEsV0FBSyxDQUFDRyxjQUFOO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUsxQyxLQUFMLENBQVdnQyxNQUF2QjtBQUNBZSxtREFBSyxDQUFDO0FBQ05DLGNBQU0sRUFBRSxNQURGO0FBRU5DLFdBQUcsRUFBRSx3Q0FGQztBQUdOdkMsWUFBSSxFQUFFO0FBQUMsa0JBQVEsS0FBS1YsS0FBTCxDQUFXZ0M7QUFBcEIsU0FIQTtBQUlOa0IsZUFBTyxFQUFFO0FBQUMsMEJBQWdCO0FBQWpCO0FBSkgsT0FBRCxDQUFMLENBTUM1QyxJQU5ELENBTU0sVUFBQzZDLFFBQUQsRUFBYTtBQUNmVixlQUFPLENBQUNDLEdBQVIsQ0FBWVMsUUFBWjs7QUFDQSxjQUFJLENBQUMxQyxRQUFMLENBQWM7QUFBQ3dCLGdCQUFNLEVBQUNrQjtBQUFSLFNBQWQ7O0FBQ0EsY0FBSSxDQUFDQyxZQUFMO0FBQ0gsT0FWRCxXQVdPLFVBQUNELFFBQUQsRUFBYTtBQUNoQlYsZUFBTyxDQUFDQyxHQUFSLENBQVlTLFFBQVo7QUFDSCxPQWJEO0FBY0g7OztnQ0FFV1IsSyxFQUFPO0FBQUE7O0FBQ2ZBLFdBQUssQ0FBQ0csY0FBTjtBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLMUMsS0FBTCxDQUFXZ0MsTUFBdkI7QUFDQWUsbURBQUssQ0FBQztBQUNOQyxjQUFNLEVBQUUsTUFERjtBQUVOQyxXQUFHLEVBQUUsNkNBRkM7QUFHTnZDLFlBQUksRUFBRTtBQUFDLGtCQUFRLEtBQUtWLEtBQUwsQ0FBV2dDO0FBQXBCLFNBSEE7QUFJTmtCLGVBQU8sRUFBRTtBQUFDLDBCQUFnQjtBQUFqQjtBQUpILE9BQUQsQ0FBTCxDQU1DNUMsSUFORCxDQU1NLFVBQUM2QyxRQUFELEVBQWM7QUFDaEJWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUyxRQUFaOztBQUNBLGNBQUksQ0FBQzFDLFFBQUwsQ0FBYztBQUFDd0IsZ0JBQU0sRUFBQ2tCO0FBQVIsU0FBZDs7QUFDQSxjQUFJLENBQUNDLFlBQUw7QUFDSCxPQVZELFdBV08sVUFBQ0QsUUFBRCxFQUFhO0FBQ2hCVixlQUFPLENBQUNDLEdBQVIsQ0FBWVMsUUFBWjtBQUNILE9BYkQ7QUFjSDs7O21DQUVjO0FBQ1gsVUFBTWxCLE1BQU0sR0FBRyxLQUFLakMsS0FBcEI7QUFDQSxXQUFLRCxLQUFMLENBQVdzRCxZQUFYLENBQXdCcEIsTUFBeEI7QUFDSDs7OzZCQUVPO0FBQUEsVUFDSUosS0FESixHQUNjLEtBQUs3QixLQURuQixDQUNJNkIsS0FESjtBQUVKLFVBQUl5QixTQUFTLEdBQUd6QixLQUFLLENBQUNkLE1BQU4sR0FBZSxDQUFmLElBQ1RjLEtBQUssQ0FBQ2IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBRTFCLDRCQUNJO0FBQVEsYUFBRyxFQUFFQSxDQUFiO0FBQWdCLGVBQUssRUFBRUQsSUFBSSxDQUFDWTtBQUE1QixXQUFvQ1osSUFBSSxDQUFDWSxLQUF6QyxDQURKO0FBR0MsT0FMRSxFQUtBLElBTEEsQ0FEUDtBQUZJLFVBVUlDLFdBVkosR0FVb0IsS0FBSzlCLEtBVnpCLENBVUk4QixXQVZKO0FBV0osVUFBSXlCLGVBQWUsR0FBR3pCLFdBQVcsQ0FBQ2YsTUFBWixHQUFxQixDQUFyQixJQUNmZSxXQUFXLENBQUNkLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDaEMsNEJBQ0k7QUFBUSxhQUFHLEVBQUVBLENBQWI7QUFBZ0IsZUFBSyxFQUFFRCxJQUFJLENBQUNJO0FBQTVCLFdBQW1DSixJQUFJLENBQUNJLElBQXhDLENBREo7QUFHQyxPQUpFLEVBSUEsSUFKQSxDQURQO0FBWEksVUFrQklVLFNBbEJKLEdBa0JrQixLQUFLL0IsS0FsQnZCLENBa0JJK0IsU0FsQko7QUFtQkosVUFBSXlCLGFBQWEsR0FBR3pCLFNBQVMsQ0FBQ2hCLE1BQVYsR0FBbUIsQ0FBbkIsSUFDYmdCLFNBQVMsQ0FBQ2YsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzlCLDRCQUNJO0FBQVEsYUFBRyxFQUFFQSxDQUFiO0FBQWdCLGVBQUssRUFBRUQsSUFBSSxDQUFDd0M7QUFBNUIsV0FBdUN4QyxJQUFJLENBQUN3QyxPQUE1QyxDQURKO0FBR0MsT0FKRSxFQUlBLElBSkEsQ0FEUDtBQU9KLDBCQUNJO0FBQUssVUFBRSxFQUFDO0FBQVIsc0JBQ0ksb0dBREosZUFFSSxxRkFGSixlQUdJO0FBQU0sZ0JBQVEsRUFBSyxLQUFLckIsT0FBeEI7QUFBa0MsY0FBTSxFQUFDO0FBQXpDLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQU8sZUFBTyxFQUFDO0FBQWYsZUFESixlQUVJO0FBQVEsYUFBSyxFQUFFLEtBQUtwQyxLQUFMLENBQVcyQixTQUExQjtBQUFxQyxnQkFBUSxFQUFFLEtBQUtPLGFBQXBEO0FBQW1FLFlBQUksRUFBQyxXQUF4RTtBQUFvRixVQUFFLEVBQUMsV0FBdkY7QUFBbUcsaUJBQVMsRUFBQztBQUE3RyxzQkFDSTtBQUFRLGFBQUssRUFBQyxHQUFkO0FBQWtCLG9CQUFZO0FBQTlCLGFBREosZUFFSTtBQUFRLGFBQUssRUFBQztBQUFkLGNBRkosZUFHSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBSEosZUFJSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBSkosZUFLSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBTEosZUFNSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBTkosZUFPSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBUEosZUFRSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBUkosZUFTSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBVEosZUFVSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBVkosZUFXSTtBQUFRLGFBQUssRUFBQztBQUFkLGdCQVhKLGVBWUk7QUFBUSxhQUFLLEVBQUM7QUFBZCxnQkFaSixlQWFJO0FBQVEsYUFBSyxFQUFDO0FBQWQsZ0JBYkosQ0FGSixDQURKLGVBbUJJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQU8sZUFBTyxFQUFDO0FBQWYsZUFESixlQUVJO0FBQVEsYUFBSyxFQUFFLEtBQUtsQyxLQUFMLENBQVc0QixTQUExQjtBQUFxQyxnQkFBUSxFQUFFLEtBQUtNLGFBQXBEO0FBQW1FLFlBQUksRUFBQyxXQUF4RTtBQUFvRixVQUFFLEVBQUMsV0FBdkY7QUFBbUcsaUJBQVMsRUFBQztBQUE3RyxzQkFDQTtBQUFRLGFBQUssRUFBQztBQUFkLGFBREEsZUFFSTtBQUFRLGFBQUssRUFBQztBQUFkLGNBRkosZUFHSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBSEosZUFJSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBSkosZUFLSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBTEosZUFNSTtBQUFRLGFBQUssRUFBQyxLQUFkO0FBQW9CLG9CQUFZO0FBQWhDLGVBTkosZUFPSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBUEosZUFRSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBUkosZUFTSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBVEosZUFVSTtBQUFRLGFBQUssRUFBQztBQUFkLGVBVkosZUFXSTtBQUFRLGFBQUssRUFBQztBQUFkLGdCQVhKLGVBWUk7QUFBUSxhQUFLLEVBQUM7QUFBZCxnQkFaSixlQWFJO0FBQVEsYUFBSyxFQUFDO0FBQWQsZ0JBYkosQ0FGSixDQW5CSixDQURKLGVBdUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQztBQUFoQyxtQkFESixDQXZDSixDQUhKLGVBK0NJLHVGQS9DSixlQWdESTtBQUFNLGdCQUFRLEVBQUssS0FBS0csT0FBeEI7QUFBa0MsY0FBTSxFQUFDO0FBQXpDLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQVEsYUFBSyxFQUFFLEtBQUtyQyxLQUFMLENBQVdnQyxNQUExQjtBQUFrQyxnQkFBUSxFQUFFLEtBQUtRLFdBQWpEO0FBQThELFlBQUksRUFBQyxZQUFuRTtBQUFnRixVQUFFLEVBQUMsWUFBbkY7QUFBZ0csaUJBQVMsRUFBQztBQUExRyxTQUNDYyxTQURELENBRkosQ0FESixDQURKLGVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDO0FBQWhDLG1CQURKLENBVEosQ0FoREosZUE4REksb0ZBOURKLGVBK0RJO0FBQU0sZ0JBQVEsRUFBSyxLQUFLaEIsTUFBeEI7QUFBaUMsY0FBTSxFQUFDO0FBQXhDLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQVEsYUFBSyxFQUFFLEtBQUt0QyxLQUFMLENBQVdnQyxNQUExQjtBQUFrQyxnQkFBUSxFQUFFLEtBQUtRLFdBQWpEO0FBQThELFlBQUksRUFBQyxjQUFuRTtBQUFrRixVQUFFLEVBQUMsY0FBckY7QUFBb0csaUJBQVMsRUFBQztBQUE5RyxTQUNDZSxlQURELENBRkosQ0FESixDQURKLGVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDO0FBQWhDLG1CQURKLENBVEosQ0EvREosZUE2RUksNkZBN0VKLGVBOEVJO0FBQU0sZ0JBQVEsRUFBSyxLQUFLaEIsV0FBeEI7QUFBc0MsY0FBTSxFQUFDO0FBQTdDLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQVEsYUFBSyxFQUFFLEtBQUt2QyxLQUFMLENBQVdnQyxNQUExQjtBQUFrQyxnQkFBUSxFQUFFLEtBQUtRLFdBQWpEO0FBQThELFlBQUksRUFBQyxnQkFBbkU7QUFBb0YsVUFBRSxFQUFDLGdCQUF2RjtBQUF3RyxpQkFBUyxFQUFDO0FBQWxILFNBQ0NnQixhQURELENBRkosQ0FESixDQURKLGVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDO0FBQWhDLG1CQURKLENBVEosQ0E5RUosQ0FESjtBQThGQzs7OztFQS9QcUIzRCxnRDs7QUFrUVg2QiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclFBO0FBQ0E7O0lBRU1nQyxPOzs7OztBQUNKLHFCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7QUFFQSxVQUFLMUQsS0FBTCxHQUFhO0FBQUUyRCxnQkFBVSxFQUFFLEVBQWQ7QUFBa0JDLGFBQU8sRUFBRTtBQUEzQixLQUFiO0FBSFk7QUFJYjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsYUFBTDtBQUNEOzs7b0NBRWU7QUFBQTs7QUFDZGQsbURBQUssQ0FBQ2UsR0FBTiw0Q0FDQ3hELElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYixZQUFNb0QsVUFBVSxHQUFHcEQsR0FBRyxDQUFDRyxJQUF2Qjs7QUFDQSxjQUFJLENBQUNELFFBQUwsQ0FBYztBQUFFa0Qsb0JBQVUsRUFBVkEsVUFBRjtBQUFjQyxpQkFBTyxFQUFFO0FBQXZCLFNBQWQ7QUFDRCxPQUpEO0FBS0Q7Ozs2QkFFUTtBQUNQLFVBQU1BLE9BQU8sR0FBRyxLQUFLNUQsS0FBTCxDQUFXNEQsT0FBM0I7QUFDQSxVQUFNRCxVQUFVLEdBQUcsS0FBSzNELEtBQUwsQ0FBVzJELFVBQTlCO0FBQ0EsMEJBQ0U7QUFBTSxjQUFNLEVBQUMsTUFBYjtBQUFvQixjQUFNLEVBQUMsb0JBQTNCO0FBQWdELGlCQUFTLEVBQUM7QUFBMUQsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsc0JBQ0UsaUhBREYsQ0FERixlQUlFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8sZUFBTyxFQUFDO0FBQWYscUJBREYsZUFFRTtBQUFRLGlCQUFTLEVBQUMsY0FBbEI7QUFBaUMsWUFBSSxFQUFDO0FBQXRDLFNBQ0dBLFVBQVUsQ0FBQzNDLEdBQVgsQ0FBZSxVQUFDZSxTQUFEO0FBQUEsNEJBQ2Q7QUFBUSxhQUFHLEVBQUVBLFNBQVMsQ0FBQ2dDLEtBQXZCO0FBQThCLGVBQUssRUFBRWhDLFNBQVMsQ0FBQ2dDO0FBQS9DLFdBQ0doQyxTQUFTLENBQUMwQixPQURiLENBRGM7QUFBQSxPQUFmLENBREgsQ0FGRixDQUpGLGVBZUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBTyxlQUFPLEVBQUM7QUFBZixlQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUdFLFVBQUUsRUFBQyxNQUhMO0FBSUUsZ0JBQVEsTUFKVjtBQUtFLFlBQUksRUFBQztBQUxQLFFBRkYsQ0FmRixlQTBCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFPLGVBQU8sRUFBQztBQUFmLHVCQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsR0FEUDtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUdFLFVBQUUsRUFBQyxhQUhMO0FBSUUsZ0JBQVEsTUFKVjtBQUtFLFlBQUksRUFBQztBQUxQLFFBRkYsQ0ExQkYsZUFxQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBTyxlQUFPLEVBQUM7QUFBZixrQkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxpQkFBUyxFQUFDLGNBRlo7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLGdCQUFRLE1BSlY7QUFLRSxZQUFJLEVBQUM7QUFMUCxRQUZGLENBckNGLGVBZ0RFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8sZUFBTyxFQUFDO0FBQWYsaUJBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBR0UsVUFBRSxFQUFDLE9BSEw7QUFJRSxnQkFBUSxNQUpWO0FBS0UsWUFBSSxFQUFDO0FBTFAsUUFGRixDQWhERixlQTJERTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsaUJBQVMsRUFBQyxrQkFGWjtBQUdFLFVBQUUsRUFBQyxLQUhMO0FBSUUsWUFBSSxFQUFDO0FBSlAsUUFERixlQU9FO0FBQU8sZUFBTyxFQUFDLEtBQWY7QUFBcUIsaUJBQVMsRUFBQztBQUEvQix3QkFQRixDQTNERixlQXVFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsaUJBQVMsRUFBQyxrQkFGWjtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsWUFBSSxFQUFDO0FBSlAsUUFERixlQU9FO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBdUIsaUJBQVMsRUFBQztBQUFqQyxxQkFQRixDQXZFRixlQW1GRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFPLGVBQU8sRUFBQztBQUFmLG1CQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUdFLFVBQUUsRUFBQyxVQUhMO0FBSUUsWUFBSSxFQUFDO0FBSlAsUUFGRixDQW5GRixlQTZGRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFPLGVBQU8sRUFBQztBQUFmLG1CQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUdFLFVBQUUsRUFBQyxVQUhMO0FBSUUsWUFBSSxFQUFDO0FBSlAsUUFGRixDQTdGRixlQXVHRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFPLGVBQU8sRUFBQztBQUFmLG1CQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUdFLFVBQUUsRUFBQyxVQUhMO0FBSUUsWUFBSSxFQUFDO0FBSlAsUUFGRixDQXZHRixlQWlIRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFPLGVBQU8sRUFBQztBQUFmLCtCQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsY0FGWjtBQUdFLFVBQUUsRUFBQyxpQkFITDtBQUlFLGdCQUFRLE1BSlY7QUFLRSxZQUFJLEVBQUM7QUFMUCxRQUZGLENBakhGLGVBNEhFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8sZUFBTyxFQUFDO0FBQWYsZ0JBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBR0UsVUFBRSxFQUFDLE9BSEw7QUFJRSxnQkFBUSxNQUpWO0FBS0UsWUFBSSxFQUFDLE9BTFA7QUFNRSxXQUFHLEVBQUMsR0FOTjtBQU9FLFlBQUksRUFBQztBQVBQLFFBRkYsQ0E1SEYsZUF5SUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBTyxlQUFPLEVBQUM7QUFBZiwyQkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxpQkFBUyxFQUFDLGNBRlo7QUFHRSxVQUFFLEVBQUMsUUFITDtBQUlFLGdCQUFRLE1BSlY7QUFLRSxZQUFJLEVBQUMsUUFMUDtBQU1FLFdBQUcsRUFBQztBQU5OLFFBRkYsQ0F6SUYsZUFxSkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBTyxlQUFPLEVBQUM7QUFBZixtQkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxpQkFBUyxFQUFDLGNBRlo7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLGdCQUFRLE1BSlY7QUFLRSxZQUFJLEVBQUM7QUFMUCxRQUZGLENBckpGLGVBZ0tFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8sZUFBTyxFQUFDO0FBQWYsMENBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBR0UsVUFBRSxFQUFDLE1BSEw7QUFJRSxnQkFBUSxNQUpWO0FBS0UsWUFBSSxFQUFDO0FBTFAsUUFGRixDQWhLRixlQTJLRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQywyQkFGWjtBQUdFLGFBQUssRUFBQztBQUhSLFFBM0tGLGVBZ0xFLHVFQWhMRixDQURGLENBREY7QUFzTEQ7Ozs7RUE1TW1CNUQsZ0Q7O0FBK01QNkQsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOQTtBQUNBO0FBQ0E7O0lBRU1NLFc7Ozs7O0FBQ0YsdUJBQVlqRSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDYkksaUJBQVcsRUFBRTtBQURBLEtBQWI7QUFHRixVQUFLNkQsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCOUIsSUFBakIsK0JBQW5CO0FBTGlCO0FBTWxCOzs7O2dDQUdXVSxLLEVBQU87QUFDZixXQUFLcEMsUUFBTCxDQUFjO0FBQUNMLG1CQUFXLEVBQUN5QyxLQUFLLENBQUNaO0FBQW5CLE9BQWQ7QUFFSDs7OzZCQUVPO0FBQ0osVUFBTTdCLFdBQVcsR0FBRyxLQUFLSixLQUF6QjtBQUVBLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLDREQUFDLHFEQUFEO0FBQWEsb0JBQVksRUFBRSxLQUFLaUU7QUFBaEMsUUFESixDQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksNERBQUMsc0RBQUQ7QUFBYyxzQkFBYyxFQUFFN0Q7QUFBOUIsUUFESixDQUpKLENBREosQ0FESjtBQVlIOzs7O0VBOUJxQlAsZ0Q7O0FBaUNYbUUsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBRU1FLEs7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCwwQkFDRSxzRkFDRSw0REFBQywyREFBRCxPQURGLGVBRUUsNERBQUMsd0RBQUQscUJBQ0UsNERBQUMsMERBQUQ7QUFBVSxhQUFLLE1BQWY7QUFBZ0IsWUFBSSxFQUFDLEdBQXJCO0FBQXlCLFVBQUUsRUFBQztBQUE1QixRQURGLGVBRUUsNERBQUMsdURBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixpQkFBUyxFQUFFRix5RUFBV0E7QUFBN0MsUUFGRixlQUdFLDREQUFDLHVEQUFEO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBRU4scUVBQU9BO0FBQXJDLFFBSEYsQ0FGRixDQURGO0FBVUQ7Ozs7RUFaaUI3RCxnRDs7QUFlTHFFLG9FQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBQYXRocyBmcm9tICcuL3BhdGhzL1BhdGhzJztcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlcj5cclxuICAgIDxQYXRocyAvPlxyXG4gIDwvUm91dGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIGJnXCI+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9eyduYXZiYXItYnJhbmQgbmF2YmFyUGVyc28nfSB0bz17Jy8nfT5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgSW5mb3JtYXRpeHsnICd9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gbmF2LWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICBIb21lIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIG5hdi1saW5rXCIgaHJlZj1cIi9hZGRcIj5cclxuICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhclBlcnNvIG5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJEcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gbmF2LWxpbmsgZGlzYWJsZWRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICBEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBBc2lkZUNhdGFsb2cgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXRlbXM6IHRoaXMucHJvcHMuZGF0YUZyb21QYXJlbnQudXBkYXRlZGF0YXMsXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdHMnKVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGpzb24sXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGFGcm9tUGFyZW50LnVwZGF0ZWRhdGFzLmRhdGEgIT09IHRoaXMuc3RhdGUuaXRlbXMgJiYgdGhpcy5wcm9wcy5kYXRhRnJvbVBhcmVudC51cGRhdGVkYXRhcy5kYXRhICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgeyAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiB0aGlzLnByb3BzLmRhdGFGcm9tUGFyZW50LnVwZGF0ZWRhdGFzLmRhdGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyeyBpc0xvYWRlZCwgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdmFyIGNvdW50ID0gT2JqZWN0LmtleXMoaXRlbXMpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKCFpc0xvYWRlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkaXZfY2F0YWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfbGlnblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q0FUQUxPR1VFPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdW50fSBwcm9kdWl0czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdl9hbGxfcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfbGlnblwiIGtleT17aX0gaWQ9e2l0ZW0uaWRfcHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0ucGljdHVyZTF9IGFsdD1cInByb2R1Y3RcIiB3aWR0aD1cIjI1MHB4XCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5jaGFyYWN0ZXJpc3RpY3N9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk4gYXZpczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS5wcmljZX0g4oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnN0b2NrfSBlbiBzdG9jazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkFKT1VURVIgQVUgUEFOSUVSPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNpZGVDYXRhbG9nOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBBc2lkZUZpbHRlciBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIHByaWNlX21pbjogJycsXHJcbiAgICAgICAgICBwcmljZV9tYXg6ICcnLFxyXG4gICAgICAgICAgYnJhbmQ6W10sXHJcbiAgICAgICAgICBuYW1lUHJvZHVjdDogW10sXHJcbiAgICAgICAgICBjYXRlZ29yaWU6IFtdLFxyXG4gICAgICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgICAgIHVwZGF0ZTonJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ5UHJpY2VDaGFuZ2UgPSB0aGlzLmJ5UHJpY2VDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJ5UHJpY2UgPSB0aGlzLmJ5UHJpY2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJ5QnJhbmQgPSB0aGlzLmJ5QnJhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZSA9IHRoaXMuYnlOYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ieUNhdGVnb3JpZSA9IHRoaXMuYnlDYXRlZ29yaWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlID10aGlzLmlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdHMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZVByb2R1Y3Q6IGpzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUubmFtZVByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9kdWN0c0JyYW5kJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyYW5kOiBqc29uIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5icmFuZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldGNhdGVnb3JpZXMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllOiBqc29uIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jYXRlZ29yaWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBieVByaWNlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHByaWNlX21pbiA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHByaWNlX21heCA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1twcmljZV9taW5dOiBldmVudC50YXJnZXQudmFsdWUsIFtwcmljZV9tYXhdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuICBcclxuICAgIGJ5UHJpY2UoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaEJ5UHJpY2UnLFxyXG4gICAgICAgIGRhdGE6IHsnbWluJzogdGhpcy5zdGF0ZS5wcmljZV9taW4sJ21heCc6IHRoaXMuc3RhdGUucHJpY2VfbWF4IH0sXHJcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1cGRhdGU6cmVzcG9uc2V9KTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVG9QYXJlbnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dENoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ5QnJhbmQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VhcmNoKTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zZWFyY2hCeUJyYW5kJyxcclxuICAgICAgICBkYXRhOiB7J2JyYW5kJzogdGhpcy5zdGF0ZS5zZWFyY2ggfSxcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1cGRhdGU6cmVzcG9uc2V9KTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVG9QYXJlbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ5TmFtZShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWFyY2gpO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaEJ5TmFtZScsXHJcbiAgICAgICAgZGF0YTogeyduYW1lJzogdGhpcy5zdGF0ZS5zZWFyY2ggfSxcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VwZGF0ZTpyZXNwb25zZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRUb1BhcmVudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBieUNhdGVnb3JpZShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWFyY2gpO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaEJ5Q2F0ZWdvcmllJyxcclxuICAgICAgICBkYXRhOiB7J25hbWUnOiB0aGlzLnN0YXRlLnNlYXJjaCB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VwZGF0ZTpyZXNwb25zZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRUb1BhcmVudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VuZFRvUGFyZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhVG9QYXJlbnQodXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGJyYW5kIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBicmFuZExpc3QgPSBicmFuZC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICYmIGJyYW5kLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2l0ZW0uYnJhbmR9PntpdGVtLmJyYW5kfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWVQcm9kdWN0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBwcm9kdWN0TmFtZUxpc3QgPSBuYW1lUHJvZHVjdC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICYmIG5hbWVQcm9kdWN0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLm5hbWV9PntpdGVtLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2F0ZWdvcmllIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBjYXRlZ29yaWVMaXN0ID0gY2F0ZWdvcmllLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgJiYgY2F0ZWdvcmllLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpdGVtLmNhdE5hbWV9ID57aXRlbS5jYXROYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPVwiYXNpZGVfYmx1ZVwiPlxyXG4gICAgICAgICAgICA8aDU+QWZmaW5lciB2b3RyZSByZWNoZXJjaGUgOjwvaDU+XHJcbiAgICAgICAgICAgIDxoNT5QYXIgcHJpeCA6PC9oNT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlQcmljZSB9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRTdGF0ZVwiPm1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2VfbWlufSBvbkNoYW5nZT17dGhpcy5ieVByaWNlQ2hhbmdlfSBuYW1lPVwicHJpY2VfbWluXCIgaWQ9XCJwcmljZV9taW5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCIgZGVmYXVsdFZhbHVlPjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwXCI+MjAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDAwXCI+NDAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAwXCI+NTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjAwXCI+NjAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNzAwXCI+NzAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiODAwXCI+ODAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOTAwXCI+OTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMFwiPjEwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNTAwXCI+MTUwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMDBcIj4yMDAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0U3RhdGVcIj5tYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlX21heH0gb25DaGFuZ2U9e3RoaXMuYnlQcmljZUNoYW5nZX0gbmFtZT1cInByaWNlX21heFwiIGlkPVwicHJpY2VfbWF4XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDBcIj4yMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBcIj40MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDBcIiBkZWZhdWx0VmFsdWU+NTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjAwXCI+NjAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNzAwXCI+NzAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiODAwXCI+ODAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOTAwXCI+OTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMFwiPjEwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNTAwXCI+MTUwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMDBcIj4yMDAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG1iLTJcIj52YWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGg1PlBhciBtYXJxdWUgOjwvaDU+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0geyB0aGlzLmJ5QnJhbmQgfSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZX0gbmFtZT1cImJyYW5kX25hbWVcIiBpZD1cImJyYW5kX25hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JyYW5kTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbWItMlwiPnZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8aDU+UGFyIG5vbSA6PC9oNT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlOYW1lIH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2V9IG5hbWU9XCJwcm9kdWN0X25hbWVcIiBpZD1cInByb2R1Y3RfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdE5hbWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBtYi0yXCI+dmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxoNT5QYXIgY2F0w6lnb3JpZSA6PC9oNT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlDYXRlZ29yaWUgfSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZX0gbmFtZT1cImNhdGVnb3JpZV9uYW1lXCIgaWQ9XCJjYXRlZ29yaWVfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbWItMlwiPnZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNpZGVGaWx0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIE1haW5BZGQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBjYXRlZ29yaWVzOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldENhdGVnb3JpZXMoKTtcclxuICB9XHJcblxyXG4gIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0Y2F0ZWdvcmllc2ApXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSByZXMuZGF0YTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvYXBpL2NyZWF0ZXByb2R1Y3RcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNCB0eHQtY29sb3JcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz5BZG1pbmlzdHJhdGV1ciAvQWpvdXRlciB1biBwcm9kdWl0PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhdGVnb3JpZVwiPkNhdGVnb3JpZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNhdGVnb3JpZVwiPlxyXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0ZWdvcmllLmlkQ2F0fSB2YWx1ZT17Y2F0ZWdvcmllLmlkQ2F0fT5cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZS5jYXROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob208L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiM1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnJhbmRcIj5NYXJxdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cImJyYW5kXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJicmFuZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RvY2tcIj5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzdG9ja1wiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwic3RvY2tcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgIGlkPVwibmV3XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmV3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgTm91dmVhdXTDqVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicHJvbW9cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcm9tb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJvbW9cIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgUHJvbW90aW9uXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGljdHVyZTFcIj5JbWFnZSAxPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaWN0dXJlMVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBpY3R1cmUxXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaWN0dXJlMlwiPkltYWdlIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInBpY3R1cmUyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGljdHVyZTJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBpY3R1cmUzXCI+SW1hZ2UgMzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGljdHVyZTNcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaWN0dXJlM1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hhcmFjdGVyaXN0aWNzXCI+Q2FyYWN0w6lyaXN0aXF1ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cImNoYXJhY3RlcmlzdGljc1wiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiY2hhcmFjdGVyaXN0aWNzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlByaXg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2VpZ2h0XCI+UG9pZHMgKGdyYW1tZXMpPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cIndlaWdodFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwid2VpZ2h0XCJcclxuICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xvclwiPkNvdWxldXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cImNvbG9yXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb2xvclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2l6ZVwiPlRhaWxsZSAobG9uZ3VldXIgeCBsYXJnZXVyIGNtKTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFzaWRlRmlsdGVyIGZyb20gXCIuL0FzaWRlRmlsdGVyXCI7XG5pbXBvcnQgQXNpZGVDYXRhbG9nIGZyb20gXCIuL0FzaWRlQ2F0YWxvZ1wiO1xuXG5jbGFzcyBNYWluQ2F0YWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB1cGRhdGVkYXRhczogW11cbiAgICAgIH0gXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIFxuICAgIHVwZGF0ZVN0YXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VwZGF0ZWRhdGFzOnZhbHVlLnVwZGF0ZX0pXG4gICAgXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB1cGRhdGVkYXRhcyA9IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc2lkZUZpbHRlciBkYXRhVG9QYXJlbnQ9e3RoaXMudXBkYXRlU3RhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNpZGVDYXRhbG9nIGRhdGFGcm9tUGFyZW50PXt1cGRhdGVkYXRhc30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ2F0YWxvZzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBNYWluQ2F0YWxvZyBmcm9tICcuLi9jb21wb25lbnRzL3Byb2R1Y3RzL01haW5DYXRhbG9nJztcclxuaW1wb3J0IE1haW5BZGQgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9NYWluQWRkJztcclxuXHJcbmNsYXNzIFBhdGhzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgPFJlZGlyZWN0IGV4YWN0IGZyb209XCIvXCIgdG89XCIvY2F0YWxvZ1wiIC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXRhbG9nXCIgY29tcG9uZW50PXtNYWluQ2F0YWxvZ30gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkZFwiIGNvbXBvbmVudD17TWFpbkFkZH0gLz5cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=