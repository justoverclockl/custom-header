module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);





flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('justoverclock/custom-header', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (vdom) {
    if (vdom.children && vdom.children.splice) {
      var user = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
      var bg = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-custom-header/bg.jpg';
      var LinkButtonOne = 'https://flarum.it';
      var LinkButtonTwo = 'https://flarum.it'; // definiamo il tasto di iscrizione

      var HeaderButtons = {
        view: function view(vnode) {
          if (!user) return m('a', {
            className: 'Button StreamsSignUp js-signup',
            onclick: function onclick() {
              return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a);
            },
            'data-component': 'hero',
            'data-element': 'buttons'
          }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('custom-header.forum.signup'));
        }
      }; // definiamo il tasto login

      var LoginButton = {
        view: function view(vnode) {
          if (!user) return m('a', {
            className: 'Button StreamsLogin js-login',
            onclick: function onclick() {
              return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default.a);
            }
          }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('custom-header.forum.login'));
        }
      };
      var twitterIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('twitterIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-twitter'
            });
          }
        }
      };
      var facebookIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('facebookIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-facebook-square'
            });
          }
        }
      };
      var youtubeIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('youtubeIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-youtube'
            });
          }
        }
      };
      var gitHubIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('githubIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-github-square'
            });
          }
        }
      };
      var insert = m('div', {
        className: 'StreamsHero-image'
      }, m('div', {
        className: 'StreamsHero-content'
      }, [m('div', {
        className: 'StreamsHero-buttonContainer'
      }, [m('a', {
        className: 'js-nav',
        'data-element': 'logo',
        target: '_blank'
      }, [m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('twitterIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('custom-header.forum.twitter')
      }, m(twitterIcon)), m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('facebookIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('custom-header.forum.facebook')
      }, m(facebookIcon)), m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('youtubeIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('custom-header.forum.youtube')
      }, m(youtubeIcon)), m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('githubIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('custom-header.forum.github')
      }, m(gitHubIcon))]), m(HeaderButtons), m(LoginButton)]), m('h2', {
        className: 'StreamsHero-header'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('headerTitle')), m('p', {
        className: 'StreamsHero-blurb'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('headerTagline')), m('button', {
        className: 'headerButtons'
      }, m('a', {
        className: 'buttontext',
        href: LinkButtonOne
      }, 'Text Here')), m('button', {
        className: 'headerButtons'
      }, m('a', {
        className: 'buttontext',
        href: LinkButtonTwo
      }, 'Text Super Here'))]));
      vdom.children.splice(0, 0, insert);
    }
  });
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function (vnode) {
  var welcomeHero = document.getElementsByClassName('Hero WelcomeHero'); // nascondiamo la welcome hero nella pagina principale

  if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a)) {
    for (var i = 0; i < welcomeHero.length; i++) {
      welcomeHero[i].style.display = 'none';
    }
  }
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map