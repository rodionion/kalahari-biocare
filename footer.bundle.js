"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkalahari_biocare"] = self["webpackChunkkalahari_biocare"] || []).push([["footer"],{

/***/ "./src/scripts/footer.js":
/*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphics_phone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphics/phone.png */ \"./src/graphics/phone.png\");\n/* harmony import */ var _graphics_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphics/map.png */ \"./src/graphics/map.png\");\n/* harmony import */ var _graphics_whatsapp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphics/whatsapp.png */ \"./src/graphics/whatsapp.png\");\n/* harmony import */ var _graphics_facebook_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphics/facebook.png */ \"./src/graphics/facebook.png\");\n/* harmony import */ var _graphics_instagram_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphics/instagram.png */ \"./src/graphics/instagram.png\");\n\n\n\n\n\n\n// \t------------------------------\n// \tFooter\n// \t------------------------------\n\n// \tFooter copyright text with auto year update. \n//  Embedded in <p> at the bottom of the footer\n\nconst currentYear = new Date().getFullYear();\n\nclass footer extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n\n        this.innerHTML = `\n        <footer>\n\n        <div id=\"footer\">\n\n            <div id=\"footer-contacts\">\n\n                    <p><a class=\"footer-contactText\" href=\"tel:+260977521516\"><img class=\"contactIcon\" src=\"./phone.png\"> +260 977521516</a></p>\n\n                    <p><img class=\"contactIcon\" src=\"./map.png\">PO Box 51386, Ridgeway, Lusaka, Zambia</p>\n\n                    <a href=\"https://wa.me/260977521516/\"><img class=\"socialMedia\" src=\"./whatsapp.png\"></a>\n\n                    <a href=\"https://facebook.com/kalaharibiocare/\"><img class=\"socialMedia\" src=\"./facebook.png\"></a>\n\n                    <a href=\"https://instagram.com/kalaharibiocare/\"><img class=\"socialMedia\" src=\"./instagram.png\"></a>\n            \n            </div>\n            \n            <nav id=\"footerMenu\">\n\n                <ul>\n\n                    <li><a class=\"footerMenu-link\" href=\"https://rodionlee.github.io/kalahari-biocare/\">Home</a></li>\n\n                    <li><a class=\"footerMenu-link\" href=\"https://rodionlee.github.io/kalahari-biocare/about\">About</a></li>\n\n                    <li><a class=\"footerMenu-link\" href=\"https://rodionlee.github.io/kalahari-biocare/contact\">Contact</a></li>\n\n                    <li><a class=\"footerMenu-link\" href=\"https://rodionlee.github.io/kalahari-biocare/products\">Products</a></li>\n                \n                    <li><a class=\"footerMenu-link\" href=\"https://rodionlee.github.io/kalahari-biocare/blog\">Blog</a></li>\n\n                    <li><a class=\"footerMenu-link\" href=\"https://rodionlee.github.io/kalahari-biocare/privacy\">Privacy</a></li>\n\n                    <li><a class=\"footerMenu-link\" href=\"https://rodionlee.github.io/kalahari-biocare/terms\">Terms</a></li>\n\n                </ul>\n            \n            </nav>\n\n            \n            <p id=\"footer-copyright\">\n            Copyright © ${currentYear} Kalahari Biocare\n            </p>\n            \n        </div>\n\n    </footer>\n        `;\n    }\n}\n\ncustomElements.define(\"footer-component\", footer);\n\n//# sourceURL=webpack://kalahari-biocare/./src/scripts/footer.js?");

/***/ }),

/***/ "./src/graphics/facebook.png":
/*!***********************************!*\
  !*** ./src/graphics/facebook.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"facebook.png\";\n\n//# sourceURL=webpack://kalahari-biocare/./src/graphics/facebook.png?");

/***/ }),

/***/ "./src/graphics/instagram.png":
/*!************************************!*\
  !*** ./src/graphics/instagram.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"instagram.png\";\n\n//# sourceURL=webpack://kalahari-biocare/./src/graphics/instagram.png?");

/***/ }),

/***/ "./src/graphics/map.png":
/*!******************************!*\
  !*** ./src/graphics/map.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"map.png\";\n\n//# sourceURL=webpack://kalahari-biocare/./src/graphics/map.png?");

/***/ }),

/***/ "./src/graphics/phone.png":
/*!********************************!*\
  !*** ./src/graphics/phone.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"phone.png\";\n\n//# sourceURL=webpack://kalahari-biocare/./src/graphics/phone.png?");

/***/ }),

/***/ "./src/graphics/whatsapp.png":
/*!***********************************!*\
  !*** ./src/graphics/whatsapp.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"whatsapp.png\";\n\n//# sourceURL=webpack://kalahari-biocare/./src/graphics/whatsapp.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/footer.js"));
/******/ }
]);