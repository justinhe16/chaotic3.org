webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faYoutube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faYoutube */ "./node_modules/@fortawesome/fontawesome-free-brands/faYoutube.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faYoutube__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faYoutube__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faFacebook */ "./node_modules/@fortawesome/fontawesome-free-brands/faFacebook.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faInstagram */ "./node_modules/@fortawesome/fontawesome-free-brands/faInstagram.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/wayneyu/Desktop/Projects/web/chaotic3_next/components/Main.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this = this;

      var close = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "close",
        onClick: function onClick() {
          _this.props.onCloseArticle();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main",
        style: this.props.timeout ? {
          display: 'flex'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        id: "intro",
        className: "".concat(this.props.article === 'intro' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Intro"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "image main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/pic01.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Chaotic 3 is the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "second best"), " dance team based at the University of Southern California. Originally founded as an artistic outlet for members of the Chinese American Student Association, Chaotic 3 has evolved into a well-known team that strives to foster the passion for dance from new and veteran dancers alike. Through exhibition and competition performances on USC's campus and around Southern California such as Maxt Out, Prelude aka The Bridge, Urban Street Jam and All Cal, they hope to continue to be influenced by the best while maintaining the spirit that is Chaotic 3."), close), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        id: "awards",
        className: "".concat(this.props.article === 'awards' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Awards"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "image main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./../static/images/pic02.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "USC's Best Dance Crew 2019 - 2nd Place"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Maxt Out 2018 - 2nd Place"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Urban Street Jam 2018 - 1st Place"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Urban Street Jam 2016 - 3rd Place"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Ulimate Brawl 2015 - 3rd Place")), close), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        id: "audition",
        className: "".concat(this.props.article === 'audition' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Audition"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "image main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/pic03.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "We're glad that you're excited about joining the team! To sign up for auditions or view your audition results, click on this ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/audition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "link")), "."), close), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        id: "contact",
        className: "".concat(this.props.article === 'contact' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "major",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "post",
        action: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field half first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "name",
        id: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "email",
        id: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        name: "message",
        id: "message",
        rows: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Send Message",
        className: "special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "reset",
        value: "Reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.facebook.com/chaoticthree/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: _fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_4___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.instagram.com/chaoticthree/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_5___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.youtube.com/user/chaoticthree",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: _fortawesome_fontawesome_free_brands_faYoutube__WEBPACK_IMPORTED_MODULE_3___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })))), close));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Main.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  articleTimeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onCloseArticle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.85795af34a00310c82a7.hot-update.js.map