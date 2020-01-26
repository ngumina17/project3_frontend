webpackHotUpdate("static/development/pages/RestForm.js",{

/***/ "./components/Restraunt_Form/FormImg.js":
/*!**********************************************!*\
  !*** ./components/Restraunt_Form/FormImg.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Restraunt_Form/FormImg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FormImg(props) {
  let newImage = props.newImage;

  function handleChange(e) {
    let image = e.target.value;
    newImage(image);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Image Url"), __jsx("input", {
    type: "text",
    placeholder: "Image URL",
    onChange: handleChange,
    name: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FormImg);

/***/ })

})
//# sourceMappingURL=RestForm.js.5c3c285c4e78d1a3ffba.hot-update.js.map