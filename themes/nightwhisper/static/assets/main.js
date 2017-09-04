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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ExternalLinks = __webpack_require__(2);\n\nvar _ExternalLinks2 = _interopRequireDefault(_ExternalLinks);\n\nvar _Toggle = __webpack_require__(3);\n\nvar _Toggle2 = _interopRequireDefault(_Toggle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _ExternalLinks2.default();\nnew _Toggle2.default();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hc3NldHMvamF2YXNjcmlwdHMvbWFpbi5qcz85ZDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRlcm5hbExpbmtzIGZyb20gJy4vY29tcG9uZW50cy9FeHRlcm5hbExpbmtzJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9jb21wb25lbnRzL1RvZ2dsZSc7XG5cbm5ldyBFeHRlcm5hbExpbmtzKCk7XG5uZXcgVG9nZ2xlKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXNzZXRzL2phdmFzY3JpcHRzL21haW4uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ExternalLinks = function () {\n  function ExternalLinks() {\n    _classCallCheck(this, ExternalLinks);\n\n    this.links = [].slice.call(document.links);\n\n    this.setAttributes();\n  }\n\n  _createClass(ExternalLinks, [{\n    key: 'setAttributes',\n    value: function setAttributes() {\n      this.links.map(function (link) {\n        if (link.hostname && link.hostname !== location.hostname) {\n          link.setAttribute('target', '_blank');\n          link.setAttribute('rel', 'nofollow');\n        }\n      });\n    }\n  }]);\n\n  return ExternalLinks;\n}();\n\nexports.default = ExternalLinks;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9FeHRlcm5hbExpbmtzLmpzPzE1ODMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXh0ZXJuYWxMaW5rcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlua3MgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmxpbmtzKTtcblxuICAgIHRoaXMuc2V0QXR0cmlidXRlcygpO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmxpbmtzLm1hcChsaW5rID0+IHtcbiAgICAgIGlmIChsaW5rLmhvc3RuYW1lICYmIGxpbmsuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9mb2xsb3cnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbExpbmtzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9FeHRlcm5hbExpbmtzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Toggle = function () {\n  function Toggle() {\n    _classCallCheck(this, Toggle);\n\n    this.btn = document.querySelector('.Header-toggle');\n    this.socialNav = document.querySelector('.SocialNav');\n    this.siteNav = document.querySelector('.SiteNav');\n\n    this.toggle = this.toggle.bind(this);\n    this.btn.addEventListener('click', this.toggle);\n  }\n\n  _createClass(Toggle, [{\n    key: 'toggle',\n    value: function toggle() {\n      this.btn.classList.toggle('js-active');\n      this.socialNav.classList.toggle('js-open');\n      this.siteNav.classList.toggle('js-open');\n    }\n  }]);\n\n  return Toggle;\n}();\n\nexports.default = Toggle;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9Ub2dnbGUuanM/MmZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2dnbGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5IZWFkZXItdG9nZ2xlJyk7XG4gICAgdGhpcy5zb2NpYWxOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU29jaWFsTmF2Jyk7XG4gICAgdGhpcy5zaXRlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNpdGVOYXYnKTtcblxuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdqcy1hY3RpdmUnKTtcbiAgICB0aGlzLnNvY2lhbE5hdi5jbGFzc0xpc3QudG9nZ2xlKCdqcy1vcGVuJyk7XG4gICAgdGhpcy5zaXRlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ2pzLW9wZW4nKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL1RvZ2dsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXNoZWV0cy9tYWluLnNjc3M/MzVmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0eWxlc2hlZXRzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);