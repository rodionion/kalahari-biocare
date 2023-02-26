"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkalahari_biocare"] = self["webpackChunkkalahari_biocare"] || []).push([["header"],{

/***/ "./src/styles/style-about.css":
/*!************************************!*\
  !*** ./src/styles/style-about.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-about.css?");

/***/ }),

/***/ "./src/styles/style-blog.css":
/*!***********************************!*\
  !*** ./src/styles/style-blog.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-blog.css?");

/***/ }),

/***/ "./src/styles/style-contact.css":
/*!**************************************!*\
  !*** ./src/styles/style-contact.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-contact.css?");

/***/ }),

/***/ "./src/styles/style-global.css":
/*!*************************************!*\
  !*** ./src/styles/style-global.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-global.css?");

/***/ }),

/***/ "./src/styles/style-index.css":
/*!************************************!*\
  !*** ./src/styles/style-index.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-index.css?");

/***/ }),

/***/ "./src/styles/style-product.css":
/*!**************************************!*\
  !*** ./src/styles/style-product.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-product.css?");

/***/ }),

/***/ "./src/styles/style-products-general.css":
/*!***********************************************!*\
  !*** ./src/styles/style-products-general.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-products-general.css?");

/***/ }),

/***/ "./src/styles/style-products-specific.css":
/*!************************************************!*\
  !*** ./src/styles/style-products-specific.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kalahari-biocare/./src/styles/style-products-specific.css?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style-global.css */ \"./src/styles/style-global.css\");\n/* harmony import */ var _styles_style_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style-about.css */ \"./src/styles/style-about.css\");\n/* harmony import */ var _styles_style_blog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style-blog.css */ \"./src/styles/style-blog.css\");\n/* harmony import */ var _styles_style_contact_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style-contact.css */ \"./src/styles/style-contact.css\");\n/* harmony import */ var _styles_style_product_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style-product.css */ \"./src/styles/style-product.css\");\n/* harmony import */ var _styles_style_products_general_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style-products-general.css */ \"./src/styles/style-products-general.css\");\n/* harmony import */ var _styles_style_products_specific_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/style-products-specific.css */ \"./src/styles/style-products-specific.css\");\n/* harmony import */ var _styles_style_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/style-index.css */ \"./src/styles/style-index.css\");\n/* harmony import */ var _graphics_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphics/logo.png */ \"./src/graphics/logo.png\");\n\n\n\n\n\n\n\n\n\n\n// \t------------------------------\n// \tHeader\n// \t------------------------------\n\nconsole.log(\"1234\");\n\n\nclass header extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.innerHTML = \n        `\n        <header>\n\n            <!-- Header Logo -->\n            <a href=\"./index.html\">\n                <img id=\"logo\" src=\"./logo.png\" alt=\"kalahari-biocare-logo\"></a>\n\n            <!-- Header hamburger icon -->\n            <input type=\"checkbox\" id=\"hamburger-checkbox\">\n            <label id=\"hamburger\" for=\"hamburger-checkbox\">\n                <span class=\"hamburgerLine\" id=\"hamburgerLine-1\"></span>\n                <span class=\"hamburgerLine\" id=\"hamburgerLine-2\"></span>\n                <span class=\"hamburgerLine\" id=\"hamburgerLine-3\"></span>\n            </label>\n\n            <!-- Header menu links -->\n            <nav id=\"headerMenu\">\n                <ul>\n                    <li><a class=\"headerMenu-link\" href=\"./products.html\">Products</a></li>\n                    <li><a class=\"headerMenu-link\" href=\"./contact.html\">Contact</a></li>\n                    <li><a class=\"headerMenu-link\" href=\"./about.html\">About</a></li>\n                    <li><a class=\"headerMenu-link\" href=\"./blog.html\">Blog</a></li>\n                </ul>\n            </nav>\n        </header>\n        `;\n    }\n}\n\ncustomElements.define(\"header-component\", header);\n\n\n// Reveal header on scroll down\nconst headerElement = document.querySelector(\"header\");\ndocument.addEventListener(\"scroll\", \n    () => headerElement.classList.add(\"headerAfterScroll\"), \n    { once: true });\n\n//# sourceURL=webpack://kalahari-biocare/./src/scripts/header.js?");

/***/ }),

/***/ "./src/graphics/logo.png":
/*!*******************************!*\
  !*** ./src/graphics/logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"logo.png\";\n\n//# sourceURL=webpack://kalahari-biocare/./src/graphics/logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/header.js"));
/******/ }
]);