webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/SearchKey.js":
/*!****************************************!*\
  !*** ./components/Header/SearchKey.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Header/SearchKey.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SearchKey(props) {
  function handleChange(e) {
    let keywords = e.target.value;
    props.newKeywords(keywords);
  }

  return __jsx("input", {
    type: "text",
    onChange: handleChange,
    placeholder: "Search Keywords...",
    name: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SearchKey);

/***/ })

})
//# sourceMappingURL=index.js.4e48c3e8a6067ea4ab24.hot-update.js.map