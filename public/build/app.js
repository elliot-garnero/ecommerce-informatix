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

 //import './../../../css/app.css';

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
      search: '',
      update: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.byBrand = _this.byBrand.bind(_assertThisInitialized(_this));
    _this.byBrandChange = _this.byBrandChange.bind(_assertThisInitialized(_this));
    return _this;
  } // componentDidUpdate(){
  //     if (this.state.update !== '') {
  //         this.sendToParent()
  //     }
  // }


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
    key: "byBrandChange",
    value: function byBrandChange(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: "byBrand",
    value: function byBrand(event) {
      var _this2 = this;

      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_20___default()({
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

        _this2.setState({
          update: response
        });

        _this2.sendToParent();
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    }
  }, {
    key: "sendToParent",
    value: function sendToParent() {
      var update = this.state;
      this.props.valueHandler(update);
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
    _this.doSomething = _this.doSomething.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MainCatalog, [{
    key: "doSomething",
    value: function doSomething(value) {
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
        valueHandler: this.doSomething
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvQXNpZGVDYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL0FzaWRlRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Byb2R1Y3RzL01haW5BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdHMvTWFpbkNhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhdGhzL1BhdGhzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdmJhciIsIkNvbXBvbmVudCIsIkFzaWRlQ2F0YWxvZyIsInByb3BzIiwic3RhdGUiLCJpc0xvYWRlZCIsIml0ZW1zIiwiZGF0YUZyb21QYXJlbnQiLCJ1cGRhdGVkYXRhcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImRhdGEiLCJ1bmRlZmluZWQiLCJjb3VudCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaWRfcHJvZHVjdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNoYXJhY3RlcmlzdGljcyIsInByaWNlIiwic3RvY2siLCJBc2lkZUZpbHRlciIsInByaWNlX21pbiIsInByaWNlX21heCIsImJyYW5kIiwic2VhcmNoIiwidXBkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImJ5QnJhbmQiLCJieUJyYW5kQ2hhbmdlIiwiaWQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kVG9QYXJlbnQiLCJ2YWx1ZUhhbmRsZXIiLCJicmFuZExpc3QiLCJpIiwiTWFpbkFkZCIsImNhdGVnb3JpZXMiLCJsb2FkaW5nIiwiZ2V0Q2F0ZWdvcmllcyIsImdldCIsImNhdGVnb3JpZSIsImlkQ2F0IiwiY2F0TmFtZSIsIk1haW5DYXRhbG9nIiwiZG9Tb21ldGhpbmciLCJQYXRocyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNFLDJEQUFDLDhEQUFELHFCQUNFLDJEQUFDLG9EQUFELE9BREYsQ0FERixFQUlFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztJQUVNQyxNOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsMEJBQ0Usc0ZBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsNERBQUMsc0RBQUQ7QUFBTSxpQkFBUyxFQUFFLDBCQUFqQjtBQUE2QyxVQUFFLEVBQUU7QUFBakQsU0FDRyxHQURILGdCQUVhLEdBRmIsQ0FERixlQUtFO0FBQ0UsaUJBQVMsRUFBQyxnQkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsdUJBQVksVUFIZDtBQUlFLHVCQUFZLHlCQUpkO0FBS0UseUJBQWMsd0JBTGhCO0FBTUUseUJBQWMsT0FOaEI7QUFPRSxzQkFBVztBQVBiLHNCQVNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQVRGLENBTEYsZUFnQkU7QUFBSyxpQkFBUyxFQUFD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QUtKLEtBQXpCO0FBRUEsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksNERBQUMscURBQUQ7QUFBYSxvQkFBWSxFQUFFLEtBQUs0RDtBQUFoQyxRQURKLENBREosZUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSw0REFBQyxzREFBRDtBQUFjLHNCQUFjLEVBQUV4RDtBQUE5QixRQURKLENBSkosQ0FESixDQURKO0FBWUg7Ozs7RUE5QnFCUCxnRDs7QUFpQ1g4RCwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7SUFFTUUsSzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLDBCQUNFLHNGQUNFLDREQUFDLDJEQUFELE9BREYsZUFFRSw0REFBQyx3REFBRCxxQkFDRSw0REFBQywwREFBRDtBQUFVLGFBQUssTUFBZjtBQUFnQixZQUFJLEVBQUMsR0FBckI7QUFBeUIsVUFBRSxFQUFDO0FBQTVCLFFBREYsZUFFRSw0REFBQyx1REFBRDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFTLEVBQUVGLHlFQUFXQTtBQUE3QyxRQUZGLGVBR0UsNERBQUMsdURBQUQ7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFFUixxRUFBT0E7QUFBckMsUUFIRixDQUZGLENBREY7QUFVRDs7OztFQVppQnRELGdEOztBQWVMZ0Usb0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFBhdGhzIGZyb20gJy4vcGF0aHMvUGF0aHMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8Um91dGVyPlxyXG4gICAgPFBhdGhzIC8+XHJcbiAgPC9Sb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgYmdcIj5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17J25hdmJhci1icmFuZCBuYXZiYXJQZXJzbyd9IHRvPXsnLyd9PlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICBJbmZvcm1hdGl4eycgJ31cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWUgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gbmF2LWxpbmtcIiBocmVmPVwiL2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyUGVyc28gbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICBBbm90aGVyIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJQZXJzbyBuYXYtbGluayBkaXNhYmxlZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIERpc2FibGVkXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCAnLi8uLi8uLi8uLi9jc3MvYXBwLmNzcyc7XG5cbmNsYXNzIEFzaWRlQ2F0YWxvZyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogdGhpcy5wcm9wcy5kYXRhRnJvbVBhcmVudC51cGRhdGVkYXRhcyxcbiAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2R1Y3RzJylcbiAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IGpzb24sXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YUZyb21QYXJlbnQudXBkYXRlZGF0YXMuZGF0YSAhPT0gdGhpcy5zdGF0ZS5pdGVtcyAmJiB0aGlzLnByb3BzLmRhdGFGcm9tUGFyZW50LnVwZGF0ZWRhdGFzLmRhdGEgIT09IHVuZGVmaW5lZClcbiAgICAgICAgeyAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogdGhpcy5wcm9wcy5kYXRhRnJvbVBhcmVudC51cGRhdGVkYXRhcy5kYXRhfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyeyBpc0xvYWRlZCwgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBjb3VudCA9IE9iamVjdC5rZXlzKGl0ZW1zKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFpc0xvYWRlZCl7XG4gICAgICAgICAgICByZXR1cm4gPGRpdj5DaGFyZ2VtZW50Li4uPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkaXZfY2F0YWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX2xpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5DQVRBTE9HVUU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdW50fSBwcm9kdWl0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdl9hbGxfcHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfbGlnblwiIGtleT17aXRlbS5pZF9wcm9kdWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLm1hdGVyaWVsLm5ldC9yNTUwL3Byb2R1Y3RzL01OMDAwNTA0ODkyOF8xLmpwZ1wiIGFsdD1cInByb2R1Y3RcIiB3aWR0aD1cIjI1MHB4XCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uY2hhcmFjdGVyaXN0aWNzfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OIGF2aXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLnByaWNlfSDigqw8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnN0b2NrfSBlbiBzdG9jazwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5BSk9VVEVSIEFVIFBBTklFUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzaWRlQ2F0YWxvZzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQXNpZGVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgcHJpY2VfbWluOiAnMCcsXG4gICAgICAgICAgcHJpY2VfbWF4OiAnNTAwJyxcbiAgICAgICAgICBicmFuZDpbXSxcbiAgICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICAgIHVwZGF0ZTonJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJ5QnJhbmQgPSB0aGlzLmJ5QnJhbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ieUJyYW5kQ2hhbmdlID10aGlzLmJ5QnJhbmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLy8gY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLnVwZGF0ZSAhPT0gJycpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2VuZFRvUGFyZW50KClcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBicmFuZDogW1xuICAgICAgICAgICAge2lkOiAnbXNpJywgbmFtZTogJ01TSSd9LFxuICAgICAgICAgICAge2lkOiAnYW1kJywgbmFtZTogJ0FNRCd9LFxuICAgICAgICAgICAge2lkOiAnZ3lnYWJ5dGUnLCBuYW1lOiAnR0lHQUJZVEUnfSxcbiAgICAgICAgICAgIHtpZDogJ2FzdXMnLCBuYW1lOiAnQVNVUyd9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHByaWNlX21pbiA9IHRhcmdldC5uYW1lO1xuICAgICAgICBjb25zdCBwcmljZV9tYXggPSB0YXJnZXQubmFtZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W3ByaWNlX21pbl06IGV2ZW50LnRhcmdldC52YWx1ZSwgW3ByaWNlX21heF06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cbiAgXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2VhcmNoQnlQcmljZScsXG4gICAgICAgIGRhdGE6IHsnbWluJzogdGhpcy5zdGF0ZS5wcmljZV9taW4sJ21heCc6IHRoaXMuc3RhdGUucHJpY2VfbWF4IH0sXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ5QnJhbmRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9XG4gICAgXG4gICAgYnlCcmFuZChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaEJ5QnJhbmQnLFxuICAgICAgICBkYXRhOiB7J2JyYW5kJzogdGhpcy5zdGF0ZS5zZWFyY2ggfSxcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1cGRhdGU6cmVzcG9uc2V9KTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRvUGFyZW50KClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHNlbmRUb1BhcmVudCgpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5wcm9wcy52YWx1ZUhhbmRsZXIodXBkYXRlKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgYnJhbmQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgYnJhbmRMaXN0ID0gYnJhbmQubGVuZ3RoID4gMFxuICAgIFx0JiYgYnJhbmQubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICApXG4gICAgfSwgdGhpcyk7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc2lkZV9ibHVlXCI+XG4gICAgICAgICAgICAgICAgPGg1PkFmZmluZXIgdm90cmUgcmVjaGVyY2hlIDo8L2g1PlxuICAgICAgICAgICAgICAgIDxoNT5QYXIgcHJpeCA6PC9oNT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHsgdGhpcy5oYW5kbGVTdWJtaXQgfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0U3RhdGVcIj5taW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2VfbWlufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJwcmljZV9taW5cIiBpZD1cInByaWNlX21pblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiIGRlZmF1bHRWYWx1ZT4wPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMFwiPjIwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDAwXCI+NDAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDBcIj41MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjYwMFwiPjYwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNzAwXCI+NzAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4MDBcIj44MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjkwMFwiPjkwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMFwiPjEwMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE1MDBcIj4xNTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDAwXCI+MjAwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0U3RhdGVcIj5tYXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2VfbWF4fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJwcmljZV9tYXhcIiBpZD1cInByaWNlX21heFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDBcIj4yMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwMFwiPjQwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAwXCIgZGVmYXVsdFZhbHVlPjUwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNjAwXCI+NjAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3MDBcIj43MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjgwMFwiPjgwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOTAwXCI+OTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDAwXCI+MTAwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTUwMFwiPjE1MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMDBcIj4yMDAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBtYi0yXCI+dmFsaWRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGg1PlBhciBtYXJxdWUgOjwvaDU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7IHRoaXMuYnlCcmFuZCB9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLmJ5QnJhbmRDaGFuZ2V9IG5hbWU9XCJicmFuZF9uYW1lXCIgaWQ9XCJicmFuZF9uYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIHticmFuZExpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbWItMlwiPnZhbGlkZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGg1PlBhciBub20gOjwvaDU+XG4gICAgICAgICAgICAgICAgPGg1PlBhciBjYXTDqWdvcmllIDo8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNpZGVGaWx0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIE1haW5BZGQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBjYXRlZ29yaWVzOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldENhdGVnb3JpZXMoKTtcclxuICB9XHJcblxyXG4gIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0Y2F0ZWdvcmllc2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gcmVzLmRhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2FwaS9jcmVhdGVwcm9kdWN0XCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTQgdHh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+QWRtaW5pc3RyYXRldXIgL0Fqb3V0ZXIgdW4gcHJvZHVpdDwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yaWVcIj5DYXRlZ29yaWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjYXRlZ29yaWVcIj5cclxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3JpZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NhdGVnb3JpZS5pZENhdH0gdmFsdWU9e2NhdGVnb3JpZS5pZENhdH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWUuY2F0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJyYW5kXCI+TWFycXVlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJicmFuZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiYnJhbmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0b2NrXCI+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwic3RvY2tcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInN0b2NrXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICBpZD1cIm5ld1wiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5ld1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIE5vdXZlYXV0w6lcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICBpZD1cInByb21vXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJvbW9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21vXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIFByb21vdGlvblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBpY3R1cmUxXCI+SW1hZ2UgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGljdHVyZTFcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaWN0dXJlMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGljdHVyZTJcIj5JbWFnZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaWN0dXJlMlwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBpY3R1cmUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaW5mby1jb2xvciB3aGl0ZS10ZXh0IHRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaWN0dXJlM1wiPkltYWdlIDM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInBpY3R1cmUzXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGljdHVyZTNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoYXJhY3RlcmlzdGljc1wiPkNhcmFjdMOpcmlzdGlxdWVzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjaGFyYWN0ZXJpc3RpY3NcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJhY3RlcmlzdGljc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5Qcml4PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndlaWdodFwiPlBvaWRzIChncmFtbWVzKTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ3ZWlnaHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cIndlaWdodFwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGluZm8tY29sb3Igd2hpdGUtdGV4dCB0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29sb3JcIj5Db3VsZXVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBpbmZvLWNvbG9yIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpemVcIj5UYWlsbGUgKGxvbmd1ZXVyIHggbGFyZ2V1ciBjbSk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInNpemVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNpemVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFkZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBc2lkZUZpbHRlciBmcm9tIFwiLi9Bc2lkZUZpbHRlclwiO1xuaW1wb3J0IEFzaWRlQ2F0YWxvZyBmcm9tIFwiLi9Bc2lkZUNhdGFsb2dcIjtcblxuY2xhc3MgTWFpbkNhdGFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdXBkYXRlZGF0YXM6IFtdXG4gICAgICB9IFxuICAgICAgdGhpcy5kb1NvbWV0aGluZyA9IHRoaXMuZG9Tb21ldGhpbmcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBcbiAgICBkb1NvbWV0aGluZyh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt1cGRhdGVkYXRhczp2YWx1ZS51cGRhdGV9KVxuICAgIFxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgdXBkYXRlZGF0YXMgPSB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNpZGVGaWx0ZXIgdmFsdWVIYW5kbGVyPXt0aGlzLmRvU29tZXRoaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzaWRlQ2F0YWxvZyBkYXRhRnJvbVBhcmVudD17dXBkYXRlZGF0YXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNhdGFsb2c7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgTWFpbkNhdGFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9NYWluQ2F0YWxvZyc7XHJcbmltcG9ydCBNYWluQWRkIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdHMvTWFpbkFkZCc7XHJcblxyXG5jbGFzcyBQYXRocyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgIDxSZWRpcmVjdCBleGFjdCBmcm9tPVwiL1wiIHRvPVwiL2NhdGFsb2dcIiAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2F0YWxvZ1wiIGNvbXBvbmVudD17TWFpbkNhdGFsb2d9IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZGRcIiBjb21wb25lbnQ9e01haW5BZGR9IC8+XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGhzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9