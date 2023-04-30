/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ burger)
/* harmony export */ });
function burger() {
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.header__menu');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }
  }

/***/ }),

/***/ "./js/modules/clearform.js":
/*!*********************************!*\
  !*** ./js/modules/clearform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchForm)
/* harmony export */ });
function searchForm() {
    const btnClear = document.querySelector('.work__button-clear');
    const inputsClear = document.querySelectorAll('#myInput');


    btnClear.addEventListener('click', (event) => {
    event.preventDefault()
    inputsClear.forEach(input => input.value = '')
    });
}

/***/ }),

/***/ "./js/modules/dots.js":
/*!****************************!*\
  !*** ./js/modules/dots.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dots)
/* harmony export */ });
function dots() {
    const txtSub = document.querySelector('#txtsubtitle');
    const dots = document.querySelector('.text__dots');

    dots.addEventListener('click', hideTxt);

    function hideTxt() {
        if (txtSub.style.display === "none") {
            txtSub.style.display = "block";
        } else {
            txtSub.style.display = "none";
        }
    }
}

/***/ }),

/***/ "./js/modules/popup.js":
/*!*****************************!*\
  !*** ./js/modules/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ popup)
/* harmony export */ });
function popup() {
    const iconPad = document.querySelector('#icon-pad');
    const popup = document.querySelector('#popup');

    iconPad.addEventListener('mouseover', showPopup);
    iconPad.addEventListener('mouseout', hidePopup);

    function showPopup(e) {
        popup.style.display = "block";
      }

      function hidePopup(e) {
        popup.style.display = "none";
      }
}

/***/ }),

/***/ "./js/modules/search.js":
/*!******************************!*\
  !*** ./js/modules/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerSearch)
/* harmony export */ });
function headerSearch() {
    const form = document.querySelector('.header__search');
    const input = document.querySelector('.header__search-input');
    const btnSearch = document.querySelector('._icon-Search ');

    input.addEventListener('click', () => {
    form.classList.add('focus');
    btnSearch.classList.add('focus-btn');
    });

    document.addEventListener( 'click', (e) => {
        const click = e.composedPath().includes(form);

        if (!click) {
            form.classList.remove('focus');
        btnSearch.classList.remove('focus-btn');
        }
    })
}

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabs)
/* harmony export */ });
function tabs() {
    function tabsPlugin(activeTab = 1) {
        const tabs = document.querySelectorAll('#tabs');

        tabs[activeTab].classList.add('activeTab');

        for (const tab of tabs) {
          tab.addEventListener('click', () => {
            clearActiveClass()

            tab.classList.add('activeTab');
          });
        };

        function clearActiveClass() {
          tabs.forEach((tab) => {
            tab.classList.remove('activeTab');
          });
        };

      }

      tabsPlugin();
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup */ "./js/modules/popup.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_dots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dots */ "./js/modules/dots.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/search */ "./js/modules/search.js");
/* harmony import */ var _modules_clearform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/clearform */ "./js/modules/clearform.js");






(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_dots__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_search__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_clearform__WEBPACK_IMPORTED_MODULE_5__["default"])();

// SlickSlider
$(document).ready(function(){
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map