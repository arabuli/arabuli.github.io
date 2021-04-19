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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\r\n\r\n\r\n\r\n(0,_navbar__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_webpage__WEBPACK_IMPORTED_MODULE_1__.displayIntro)();\r\n(0,_projects__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById(\"container\");\r\n\r\n\r\n\r\nfunction createNavigation() {\r\n  const navigation = document.createElement(\"NAV\");\r\n  navigation.classList.add(\"navbar\");\r\n  const list = document.createElement(\"ul\");\r\n\r\n  const homeItem = document.createElement(\"li\");\r\n  const homea = document.createElement(\"a\");\r\n  homea.textContent = \"Home\";\r\n  homea.setAttribute(\"href\", \"#welcome\");\r\n  homeItem.appendChild(homea);\r\n\r\n  const projectsItem = document.createElement(\"li\");\r\n  const projectsa = document.createElement(\"a\");\r\n  projectsa.textContent = \"Projects\";\r\n  projectsa.setAttribute(\"href\", \"#projects\");\r\n  projectsItem.appendChild(projectsa);\r\n\r\n  const contactItem = document.createElement(\"li\");\r\n  const contacta = document.createElement(\"a\");\r\n  contacta.textContent = \"Contact\";\r\n  contacta.setAttribute(\"href\", \"#contact\");\r\n  contactItem.appendChild(contacta);\r\n\r\n\r\n  list.appendChild(homeItem);\r\n  list.appendChild(projectsItem);\r\n  list.appendChild(contactItem);\r\n\r\n  navigation.appendChild(list);\r\n\r\n\r\n\r\n  //Add Home Button\r\n  // let homepageButton = document.createElement(\"button\");\r\n  // homepageButton.textContent = \"Home\";\r\n  // navigationDiv.appendChild(homepageButton);\r\n  // homepageButton.addEventListener(\"click\", function () {\r\n  //   singleSection.innerHTML = \"\";\r\n  //   singleSection.appendChild(homePage());\r\n  //   content.appendChild(singleSection);\r\n  // });\r\n\r\n\r\n\r\n\r\n  //Add Menu Button\r\n  // let menuButton = document.createElement(\"button\");\r\n  // menuButton.textContent = \"Menu\";\r\n  // navigationDiv.appendChild(menuButton);\r\n  // menuButton.addEventListener(\"click\", function () {\r\n  //   singleSection.innerHTML = \"\";\r\n  //   singleSection.appendChild(menuPage());\r\n  //   getConentContainer.appendChild(singleSection);\r\n  // });\r\n\r\n  // //Add Contact Button\r\n  // let contactButton = document.createElement(\"button\");\r\n  // contactButton.textContent = \"Contact\";\r\n  // navigationDiv.appendChild(contactButton);\r\n  // contactButton.addEventListener(\"click\", function () {\r\n  //   singleSection.innerHTML = \"\";\r\n  //   singleSection.appendChild(contact());\r\n  //   getConentContainer.appendChild(singleSection);\r\n  // });\r\n  content.appendChild(navigation);\r\n  return navigation;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavigation);\n\n//# sourceURL=webpack://portfolio/./src/navbar.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects)\n/* harmony export */ });\nconst container = document.getElementById(\"container\");\r\n\r\nfunction displayProjects() {\r\n  const section = document.createElement(\"section\");\r\n  section.setAttribute(\"id\", \"projects\");\r\n\r\n  const header = document.createElement(\"h3\");\r\n  header.textContent = \"Here are some of my projects\";\r\n\r\n  const projectsContainer = document.createElement(\"div\");\r\n  projectsContainer.setAttribute(\"id\", \"projects-container\");\r\n\r\n  const projectOne = document.createElement(\"div\");\r\n  projectOne.setAttribute(\"id\", \"project-one\");\r\n  projectOne.setAttribute(\"onclick\", \"window.open('https://arabuli.github.io/library/')\");\r\n  projectOne.textContent = \"Library\";\r\n\r\n\r\n  const projectTwo = document.createElement(\"div\");\r\n  projectTwo.setAttribute(\"id\", \"project-two\");\r\n  projectTwo.setAttribute(\"onclick\", \"window.open('https://arabuli.github.io/calculator/')\");\r\n  projectTwo.textContent = \"Calculator\";\r\n\r\n  const projectThree = document.createElement(\"div\");\r\n  projectThree.setAttribute(\"id\", \"project-three\");\r\n  projectThree.setAttribute(\"onclick\", \"window.open('https://arabuli.github.io/calculator/')\");\r\n  projectThree.textContent = \"Calculator\";\r\n\r\n  const projectFour = document.createElement(\"div\");\r\n  projectFour.setAttribute(\"id\", \"project-four\");\r\n  projectFour.setAttribute(\"onclick\", \"window.open('https://arabuli.github.io/calculator/')\");\r\n  projectFour.textContent = \"Calculator\";\r\n\r\n  projectsContainer.appendChild(projectOne);\r\n  projectsContainer.appendChild(projectTwo);\r\n  projectsContainer.appendChild(projectThree);\r\n  projectsContainer.appendChild(projectFour);\r\n\r\n\r\n\r\n  section.appendChild(header);\r\n  section.appendChild(projectsContainer);\r\n\r\n  container.appendChild(section);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/projects.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayIntro\": () => (/* binding */ displayIntro)\n/* harmony export */ });\nconst container = document.getElementById(\"container\");\r\n\r\nfunction displayName() {\r\n  const name = document.createElement(\"h1\");\r\n  name.textContent = \"Hello, this is Beka 😊\";\r\n  container.appendChild(name);\r\n  return name;\r\n}\r\n\r\nfunction displayDescription() {\r\n  const description = document.createElement(\"h4\");\r\n  description.textContent = \"Fucking Renegade\";\r\n  container.appendChild(description);\r\n  return description;\r\n}\r\n\r\nfunction displayIntro() {\r\n  const section = document.createElement(\"section\");\r\n  section.classList.add(\"welcome-section\");\r\n  section.setAttribute(\"id\", \"welcome\");\r\n  section.appendChild(displayName());\r\n  section.appendChild(displayDescription());\r\n  container.appendChild(section);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/webpage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;