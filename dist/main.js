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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n\r\n  const frameNavItem = document.querySelectorAll('.frame-nav__item');\r\n\r\n  // let frame = {\r\n  // 1:\r\n  // }\r\n\r\n  frameNavItem.forEach(function (item) {\r\n    item.addEventListener('click', function (e) {\r\n      if (!item.classList.contains('current-menu-item')) {\r\n        document.querySelector('.frame-nav__item.current-menu-item').classList.remove('current-menu-item');\r\n        // let frameItem = item.getAttribute('data-frameItem');\r\n        // document.querySelector('.frame-content.current-frame-item').classList.remove('current-frame-item');\r\n        // document.getElementById(frameItem).classList.add('current-frame-item');\r\n      }\r\n      item.classList.add('current-menu-item');\r\n\r\n    });\r\n  });\r\n\r\n  const faqItem = document.querySelectorAll('.faq-item');\r\n\r\n  faqItem.forEach(function (item) {\r\n    item.addEventListener('click', function () {\r\n      item.classList.toggle('current-faq-item');\r\n      if (item.querySelector('.faq-item__btn').textContent == 'Свернуть')\r\n        item.querySelector('.faq-item__btn').textContent = 'Развернуть';\r\n      else\r\n        item.querySelector('.faq-item__btn').textContent = 'Свернуть';\r\n\r\n    });\r\n  });\r\n\r\n  $(window).scroll(function () {\r\n    if ($(this).scrollTop() > 100) {\r\n      document.querySelector('.header').classList.add('fix');\r\n    } else {\r\n      // бла-бла-бла\r\n      document.querySelector('.header').classList.remove('fix');\r\n\r\n    }\r\n  });\r\n\r\n\r\n\r\n\r\n\r\n\r\n  const burger = document.querySelector('.header-burger')\r\n\r\n  burger.addEventListener('click', function () {\r\n    burger.classList.toggle('active');\r\n    if (burger.classList.contains('active')) {\r\n      document.querySelector('.header-nav').style.top = '90px';\r\n      document.querySelector('.header-btn').style.top = '20px';\r\n    } else {\r\n      document.querySelector('.header-nav').style.top = '-150px';\r\n      document.querySelector('.header-btn').style.top = '-180px';\r\n\r\n    }\r\n  });\r\n\r\n  $('.frame-slider').slick({\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n    arrows: false,\r\n    fade: true,\r\n    infinite: false,\r\n    asNavFor: '.frame-nav',\r\n    swipe: false,\r\n    adaptiveHeight: true,\r\n    responsive: [{\r\n        breakpoint: 960,\r\n        settings: {\r\n          swipe: true,\r\n        },\r\n\r\n      },\r\n      {\r\n\r\n        breakpoint: 768,\r\n        settings: {\r\n          arrows: false,\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          infinite: false,\r\n          swipe: true\r\n        }\r\n      },\r\n      {\r\n\r\n        breakpoint: 550,\r\n        settings: {\r\n          arrows: false,\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          infinite: false,\r\n          swipe: true\r\n        }\r\n      },\r\n      {\r\n\r\n        breakpoint: 425,\r\n        settings: {\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          infinite: true,\r\n          swipe: true,\r\n          arrows: false,\r\n        },\r\n      }\r\n    ]\r\n  });\r\n  $('.frame-nav').slick({\r\n    slidesToShow: 4,\r\n    infinite: false,\r\n    slidesToScroll: 1,\r\n    asNavFor: '.frame-slider',\r\n    // dots: true,\r\n    arrows: false,\r\n    focusOnSelect: true,\r\n    responsive: [{\r\n        breakpoint: 961,\r\n        settings: {\r\n          swipe: true,\r\n          slidesToShow: 3,\r\n          slidesToScroll: 1,\r\n          infinite: false,\r\n\r\n\r\n        },\r\n\r\n      },\r\n      {\r\n\r\n        breakpoint: 768,\r\n        settings: {\r\n          swipe: true,\r\n          slidesToShow: 2,\r\n          slidesToScroll: 1,\r\n          infinite: false,\r\n\r\n\r\n        },\r\n      },\r\n      {\r\n\r\n        breakpoint: 550,\r\n        settings: {\r\n          swipe: true,\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          infinite: false,\r\n\r\n\r\n        },\r\n      },\r\n      {\r\n\r\n        breakpoint: 425,\r\n        settings: {\r\n          swipe: true,\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          infinite: true,\r\n          arrows: true,\r\n          prevArrow: $(''),\r\n          nextArrow: $('.frame-nav__arrow')\r\n        },\r\n      }\r\n    ]\r\n  });\r\n\r\n  document.querySelector('#policy').addEventListener('click', function () {\r\n    document.querySelector('.policy-modal').classList.add('active')\r\n  });\r\n\r\n\r\n  document.querySelector('.thanks-close').addEventListener('click', function () {\r\n    document.querySelector('.thanks').classList.remove('active')\r\n  });\r\n  document.querySelector('.error-close').addEventListener('click', function () {\r\n    document.querySelector('.error').classList.remove('active')\r\n  });\r\n\r\n  document.querySelector('.policy-close').addEventListener('click', function () {\r\n    document.querySelector('.policy-modal').classList.remove('active')\r\n  });\r\n  document.querySelector('.policy-btn').addEventListener('click', function () {\r\n    document.querySelector('.policy-modal').classList.remove('active')\r\n  });\r\n\r\n\r\n  document.querySelectorAll('.toOne').forEach(function (item) {\r\n    item.addEventListener('click', function () {\r\n      document.querySelector('.one-modal').classList.add('active')\r\n    })\r\n  });\r\n\r\n  document.querySelector('.one-close').addEventListener('click', function () {\r\n    document.querySelector('.one-modal').classList.remove('active')\r\n  });\r\n\r\n  $('.input-phone').mask('+7 (000) 000 00-00')\r\n\r\n\r\n  $('#brifForm').validate({\r\n    rules: {\r\n      name: {\r\n        required: true\r\n      },\r\n      phone: {\r\n        required: true,\r\n        // minlenght: 11\r\n      }\r\n    },\r\n    messages: {\r\n      name: {\r\n        required: jQuery.validator.format(\"Укажите имя\")\r\n      },\r\n      phone: {\r\n        minlength: jQuery.validator.format(\"Номер указан не полностью\"),\r\n        required: jQuery.validator.format(\"Укажите телефон\")\r\n      },\r\n\r\n    },\r\n    errorElement: \"div\",\r\n    errorClass: \"invalid\",\r\n    submitHandler: function (form) {\r\n      $.ajax({\r\n        url: form.action,\r\n        type: form.method,\r\n        data: $(form).serialize(),\r\n      }).done(function () {\r\n        $('.thanks').addClass('active');\r\n      }).fail(function () {\r\n        $('.error').addClass('active');\r\n        console.log(\"error: mail doesn't send \" + data);\r\n      });;\r\n    }\r\n  }, );\r\n\r\n  $('#oneForm').validate({\r\n    rules: {\r\n      name: {\r\n        required: true\r\n      },\r\n      place: {\r\n        required: true,\r\n      },\r\n      mail: {\r\n        required: true,\r\n        email: true,\r\n      }\r\n    },\r\n    messages: {\r\n      name: {\r\n        required: jQuery.validator.format(\"Укажите Веше ФИО\")\r\n      },\r\n      place: {\r\n        required: jQuery.validator.format(\"Укажите Вашу организацию\")\r\n      },\r\n      mail: {\r\n        required: jQuery.validator.format(\"Укажите Ваш E-mail\"),\r\n        email: jQuery.validator.format(\"Укажите Ваш E-mail\")\r\n      },\r\n\r\n    },\r\n    errorElement: \"div\",\r\n    errorClass: \"invalid\",\r\n    submitHandler: function (form) {\r\n      $('.one-modal').removeClass('active');\r\n      $.ajax({\r\n        url: form.action,\r\n        type: form.method,\r\n        data: $('#oneForm').serialize(),\r\n      }).done(function () {\r\n        $('.thanks').addClass('active');\r\n      }).fail(function () {\r\n        $('.error').addClass('active');\r\n        console.log(\"error: mail doesn't send \" + $('#oneForm').serialize());\r\n      });;\r\n    }\r\n  }, );\r\n\r\n\r\n\r\n\r\n\r\n\r\n  // $('#brifForm').submit(function () {\r\n\r\n  //   let th = $(this);\r\n\r\n  //   if (!$th.valid()) return false;\r\n  //   $.ajax({\r\n  //     type: \"POST\",\r\n  //     url: \"mail.php\",\r\n  //     data: th.serialize()\r\n  //   }).done(function () {\r\n  //     $('.thanks').addClass('active');\r\n  //   }).fail(function () {\r\n  //     $('.error').addClass('active');\r\n  //     console.log(\"error: mail doesn't send \" + data);\r\n  //   });\r\n  //   // return false;\r\n\r\n  // });\r\n\r\n});\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ })

/******/ });