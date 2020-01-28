webpackHotUpdate("static/development/pages/Search.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Components_SearchKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header_Components/SearchKey */ "./components/Header_Components/SearchKey.js");
/* harmony import */ var _Header_Components_SearchLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header_Components/SearchLocation */ "./components/Header_Components/SearchLocation.js");
/* harmony import */ var _Header_Components_SearchButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header_Components/SearchButton */ "./components/Header_Components/SearchButton.js");
/* harmony import */ var _Header_Components_SearchRestaurant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header_Components/SearchRestaurant */ "./components/Header_Components/SearchRestaurant.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log("state", this.state);
    });
  }

  render() {
    return __jsx("nav", {
      id: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("img", {
      src: "https://s3-media0.fl.yelpcdn.com/assets/public/default.yelp_design_web.yji-b085a608c15f110ce750ccef3e1e1db0.png",
      alt: "yelp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx(_Header_Components_SearchButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx(_Header_Components_SearchLocation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx(_Header_Components_SearchKey__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(_Header_Components_SearchRestaurant__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=Search.js.a0bb0cbad03aa12a3717.hot-update.js.map