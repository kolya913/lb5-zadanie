/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateCircleArea: () => (/* binding */ calculateCircleArea),\n/* harmony export */   calculateRectangleArea: () => (/* binding */ calculateRectangleArea),\n/* harmony export */   calculateTriangleArea: () => (/* binding */ calculateTriangleArea)\n/* harmony export */ });\nfunction calculateTriangleArea(x1, y1, x2, y2, x3, y3) {\n  const isCollinear = (x2 - x1) * (y3 - y1) === (x3 - x1) * (y2 - y1);\n  if (isCollinear) {\n      throw new Error(\"The three points lie on the same line, so the area of the triangle is zero.\");\n  }\n  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);\n}\n\nfunction calculateCircleArea(radius) {\n  if (radius < 0) {\n      throw new Error(\"The radius cannot be negative.\");\n  }\n  return Math.PI * Math.pow(radius, 2);\n}\n\nfunction calculateRectangleArea(width, height) {\n  if (width < 0 || height < 0) {\n      throw new Error(\"Width and height cannot be negative.\");\n  }\n  if (width === 0 || height === 0) {\n      throw new Error(\"Width and height cannot be zero.\");\n  }\n  return width * height;\n}\n\n\n\n//# sourceURL=webpack://lb5/./assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;