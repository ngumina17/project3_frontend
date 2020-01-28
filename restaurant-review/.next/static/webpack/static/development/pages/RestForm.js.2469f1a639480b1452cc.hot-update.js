webpackHotUpdate("static/development/pages/RestForm.js",{

/***/ "./components/Restaurant_form.js":
/*!***************************************!*\
  !*** ./components/Restaurant_form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Restaurant_Form_Components_FormImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Restaurant_Form_Components/FormImg */ "./components/Restaurant_Form_Components/FormImg.js");
/* harmony import */ var _Restaurant_Form_Components_FormName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Restaurant_Form_Components/FormName */ "./components/Restaurant_Form_Components/FormName.js");
/* harmony import */ var _Review_Form_Star_Review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Review_Form/Star_Review */ "./components/Review_Form/Star_Review.js");
/* harmony import */ var _Review_Form_Review_Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Review_Form/Review_Field */ "./components/Review_Form/Review_Field.js");
/* harmony import */ var _Restaurant_Form_Components_FormState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Restaurant_Form_Components/FormState */ "./components/Restaurant_Form_Components/FormState.js");
/* harmony import */ var _Restaurant_Form_Components_FormStreet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Restaurant_Form_Components/FormStreet */ "./components/Restaurant_Form_Components/FormStreet.js");
/* harmony import */ var _Restaurant_Form_Components_FormZipcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Restaurant_Form_Components/FormZipcode */ "./components/Restaurant_Form_Components/FormZipcode.js");
/* harmony import */ var _Restaurant_Form_Components_FormCity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Restaurant_Form_Components/FormCity */ "./components/Restaurant_Form_Components/FormCity.js");
/* harmony import */ var _Restaurant_Form_Components_FormSubmit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Restaurant_Form_Components/FormSubmit */ "./components/Restaurant_Form_Components/FormSubmit.js");
var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Restaurant_form.js";
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

  return __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_Restaurant_Form_Components_FormImg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    newImage: newImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_Restaurant_Form_Components_FormName__WEBPACK_IMPORTED_MODULE_2__["default"], {
    newName: newName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_Restaurant_Form_Components_FormCity__WEBPACK_IMPORTED_MODULE_8__["default"], {
    newCity: newCity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_Restaurant_Form_Components_FormState__WEBPACK_IMPORTED_MODULE_5__["default"], {
    newState: newState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_Restaurant_Form_Components_FormStreet__WEBPACK_IMPORTED_MODULE_6__["default"], {
    newAddress: newAddress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_Restaurant_Form_Components_FormZipcode__WEBPACK_IMPORTED_MODULE_7__["default"], {
    newZip: newZip,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_Review_Form_Star_Review__WEBPACK_IMPORTED_MODULE_3__["default"], {
    newRating: newRating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_Review_Form_Review_Field__WEBPACK_IMPORTED_MODULE_4__["default"], {
    newText: newText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_Restaurant_Form_Components_FormSubmit__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: name.name,
    address: address.address,
    city: city.city,
    image: image.image,
    state: state.state,
    zip: zip.zip,
    text: text.text,
    rating: rating.rating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Restraunt_form);

/***/ })

})
//# sourceMappingURL=RestForm.js.2469f1a639480b1452cc.hot-update.js.map