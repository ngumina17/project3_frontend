webpackHotUpdate("static/development/pages/Search.js",{

/***/ "./pages/Search.js":
/*!*************************!*\
  !*** ./pages/Search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_SearchRes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SearchRes */ "./components/SearchRes.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/pages/Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




class Search extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log("state", this.state);
      return;
    });

    this.state = {
      keywords: '',
      location: ''
    };
  }

  render() {
    console.log('state passed as props', this.state);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), __jsx(_components_SearchRes__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: this.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=Search.js.b7d717de2f7f8a780bef.hot-update.js.map