webpackHotUpdate("static/development/pages/RestForm.js",{

/***/ "./components/Restaurant_Form_Components/FormName.js":
/*!***********************************************************!*\
  !*** ./components/Restaurant_Form_Components/FormName.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Restaurant_Form_Components/FormName.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FormName(props) {
  handleChange = e => {
    let name = e.target.value;
    props.newName(name);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Form Name"), __jsx("input", {
    type: "text",
    placeholder: "Form Name",
    onChange: this.handleChange,
    name: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FormName);

/***/ })

})
//# sourceMappingURL=RestForm.js.e125fbe5921beff5847f.hot-update.js.map