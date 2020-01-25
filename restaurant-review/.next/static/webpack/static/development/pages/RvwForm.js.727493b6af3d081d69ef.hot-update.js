webpackHotUpdate("static/development/pages/RvwForm.js",{

/***/ "./components/Review_Form.js":
/*!***********************************!*\
  !*** ./components/Review_Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Review_Form_Star_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review_Form/Star_Review */ "./components/Review_Form/Star_Review.js");
/* harmony import */ var _Review_Form_Review_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review_Form/Review_Field */ "./components/Review_Form/Review_Field.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Review_Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Review_Form() {
  const {
    0: rating,
    1: setRating
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    rating: 0
  });
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    text: ''
  });

  function newRating(rating) {
    setRating({
      rating: rating
    });
  }

  function newText(text) {
    setText({
      text: text
    });
  }

  return __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_Review_Form_Star_Review__WEBPACK_IMPORTED_MODULE_1__["default"], {
    newRating: newRating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_Review_Form_Review_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Submit")));
}

/* harmony default export */ __webpack_exports__["default"] = (Review_Form);

/***/ })

})
//# sourceMappingURL=RvwForm.js.727493b6af3d081d69ef.hot-update.js.map