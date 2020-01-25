webpackHotUpdate("static/development/pages/RestForm.js",{

/***/ "./components/Restraunt_form.js":
/*!**************************************!*\
  !*** ./components/Restraunt_form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Restraunt_Form_FormImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Restraunt_Form/FormImg */ "./components/Restraunt_Form/FormImg.js");
/* harmony import */ var _Restraunt_Form_FormName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Restraunt_Form/FormName */ "./components/Restraunt_Form/FormName.js");
/* harmony import */ var _Review_Form_Star_Review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Review_Form/Star_Review */ "./components/Review_Form/Star_Review.js");
/* harmony import */ var _Review_Form_Review_Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Review_Form/Review_Field */ "./components/Review_Form/Review_Field.js");
/* harmony import */ var _Restraunt_Form_FormState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Restraunt_Form/FormState */ "./components/Restraunt_Form/FormState.js");
/* harmony import */ var _Restraunt_Form_FormStreet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Restraunt_Form/FormStreet */ "./components/Restraunt_Form/FormStreet.js");
/* harmony import */ var _Restraunt_Form_FormZipcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Restraunt_Form/FormZipcode */ "./components/Restraunt_Form/FormZipcode.js");
/* harmony import */ var _Restraunt_Form_FormSubmit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Restraunt_Form/FormSubmit */ "./components/Restraunt_Form/FormSubmit.js");
var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Restraunt_form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Restraunt_form(props) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: ''
  });
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    address: ''
  });
  const {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    city: ''
  });
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    state: ''
  });
  const {
    0: zip,
    1: setZip
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    zip: 0
  });
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
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    image: ''
  });

  function newImage(image) {
    setImage({
      image: image
    });
  }

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

  function newZip(zip) {
    setZip({
      zip: zip
    });
  }

  function newCity(city) {
    setCity({
      city: city
    });
  }

  function newState(state) {
    setState({
      state: state
    });
  }

  function newName(name) {
    setName({
      name: name
    });
  }

  function newAddress(address) {
    setAddress({
      address: address
    });
  }

  console.log(zip);
  return __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_Restraunt_Form_FormImg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    newImage: newImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_Restraunt_Form_FormName__WEBPACK_IMPORTED_MODULE_2__["default"], {
    newName: newName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_Restraunt_Form_FormState__WEBPACK_IMPORTED_MODULE_5__["default"], {
    newState: newState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_Restraunt_Form_FormStreet__WEBPACK_IMPORTED_MODULE_6__["default"], {
    newAddress: newAddress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_Restraunt_Form_FormZipcode__WEBPACK_IMPORTED_MODULE_7__["default"], {
    newZip: newZip,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_Review_Form_Star_Review__WEBPACK_IMPORTED_MODULE_3__["default"], {
    newRating: newRating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_Review_Form_Review_Field__WEBPACK_IMPORTED_MODULE_4__["default"], {
    newText: newText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_Restraunt_Form_FormSubmit__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Restraunt_form);

/***/ })

})
//# sourceMappingURL=RestForm.js.2251e902626bf5095083.hot-update.js.map