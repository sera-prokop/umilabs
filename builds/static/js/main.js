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
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/static/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../Users/seraimila/npm/lib/node_modules/tars-cli/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./markup/components/form/form.js":
/*!****************************************!*\
  !*** ./markup/components/form/form.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/dist/imask.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(imask__WEBPACK_IMPORTED_MODULE_0__);

var form = document.querySelector('.form__form'),
    validateFields = form.querySelectorAll('.form__input:not(textarea)'),
    mailField = form.querySelector('#mail'),
    phoneField = form.querySelector('#phone'),
    mailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    phoneReg = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
    nameReg = /^(\w+\S+)$/,
    defaultErrorText = 'Поле не должно быть пустым',
    mailErrorText = 'Введите корректный e-mail адрес',
    phoneErrorText = 'Введите корректный номер телефона'; // Phone mask

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = imask__WEBPACK_IMPORTED_MODULE_0___default()(phoneField, maskOptions); // Validation functions

var removeValidation = function removeValidation() {
  var errors = form.querySelectorAll('.error-block');

  for (var i = 0; i < errors.length; i++) {
    var parent = errors[i].parentElement;
    parent.classList.remove('error');
    errors[i].remove();
  }
};

var generateError = function generateError(text) {
  var error = document.createElement('div');
  error.className = 'error-block';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
};

var checkFieldsAll = function checkFieldsAll() {
  var errorClass, errorElement;

  for (var i = 0; i < validateFields.length; i++) {
    errorClass = validateFields[i].parentElement;
    errorElement = errorClass.querySelectorAll('.error-block');
  }

  if (!errorClass.classList.contains('error') && !errorElement.length) {
    form.classList.add('validate');
  } else {
    form.classList.remove('validate');
  }
};

var checkFieldsPresence = function checkFieldsPresence() {
  for (var i = 0; i < validateFields.length; i++) {
    if (!validateFields[i].value) {
      validateFields[i].parentElement.classList.add('error');
      var error = generateError(defaultErrorText);
      validateFields[i].parentElement.appendChild(error);
    }
  }
};

var checkFields = function checkFields(reg, field, generateText) {
  var value = field.value,
      child = field.parentElement.querySelector('.error-block');

  if (!reg.test(value)) {
    field.parentElement.classList.add('error');
    var error = generateError(generateText);
    child ? child.textContent = generateText : field.parentElement.appendChild(error);
  } else {
    var _error = field.parentElement.querySelector('.error-block');

    if (_error) {
      var parent = _error.parentElement;
      parent.classList.remove('error');

      _error.remove();
    }
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  removeValidation();
  checkFieldsPresence();
  checkFields(mailReg, mailField, mailErrorText);
  checkFields(phoneReg, phoneField, phoneErrorText);
  checkFieldsAll();

  if (form.classList.contains('validate')) {
    var modalWindow = document.getElementById('jsModal');
    modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
  }
});

for (var i = 0; i < validateFields.length; i++) {
  validateFields[i].addEventListener('input', function (e) {
    e.preventDefault();
    var currentElement = this.id,
        generateText = '',
        reg;

    switch (currentElement) {
      case 'mail':
        generateText = mailErrorText;
        reg = mailReg;
        break;

      case 'phone':
        generateText = phoneErrorText;
        reg = phoneReg;
        break;

      case 'name':
        generateText = defaultErrorText;
        reg = nameReg;
        break;

      default:
        generateText = defaultErrorText;
    }

    checkFields(reg, this, generateText);
  });
}

/***/ }),

/***/ "./markup/components/popup/popup.js":
/*!******************************************!*\
  !*** ./markup/components/popup/popup.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  /* Opening modal window function */
  function openModal() {
    /* Get trigger element */
    var modalTrigger = document.getElementsByClassName('jsModalTrigger');
    /* Set onclick event handler for all trigger elements */

    for (var i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].onclick = function () {
        var target = this.getAttribute('href').substr(1);
        var modalWindow = document.getElementById(target);
        modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
      };
    }
  }

  function closeModal() {
    /* Get close button */
    var closeButton = document.getElementsByClassName('jsModalClose');
    var closeOverlay = document.getElementsByClassName('jsOverlay');
    /* Set onclick event handler for close buttons */

    for (var i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function () {
        var modalWindow = this.parentNode.parentNode;
        modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      };
    }
    /* Set onclick event handler for modal overlay */


    for (var i = 0; i < closeOverlay.length; i++) {
      closeOverlay[i].onclick = function () {
        var modalWindow = this.parentNode;
        modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      };
    }
  }
  /* Handling domready event IE9+ */


  function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  /* Triggering modal window function after dom ready */


  ready(openModal);
  ready(closeModal);
})();

/***/ }),

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/form/form */ "./markup/components/form/form.js");
/* harmony import */ var components_popup_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/popup/popup */ "./markup/components/popup/popup.js");
/* harmony import */ var components_popup_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_popup_popup__WEBPACK_IMPORTED_MODULE_1__);




/*
    This file can be used as entry point for webpack!
 */

/***/ }),

/***/ "./node_modules/imask/dist/imask.js":
/*!******************************************!*\
  !*** ./node_modules/imask/dist/imask.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  var ceil = Math.ceil;
  var floor = Math.floor; // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger

  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min; // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength

  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // `String.prototype.repeat` method implementation
  // https://tc39.github.io/ecma262/#sec-string.prototype.repeat


  var stringRepeat = ''.repeat || function repeat(count) {
    var str = String(requireObjectCoercible(this));
    var result = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

    return result;
  };

  // https://github.com/tc39/proposal-string-pad-start-end






  var stringPad = function (that, maxLength, fillString, left) {
    var S = String(requireObjectCoercible(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$1 = typeof window == 'object' && window && window.Math == Math ? window : typeof self == 'object' && self && self.Math == Math ? self // eslint-disable-next-line no-new-func
  : Function('return this')();

  var navigator = global$1.navigator;
  var userAgent = navigator && navigator.userAgent || '';

  // https://github.com/zloirock/core-js/issues/280
   // eslint-disable-next-line unicorn/no-unsafe-regex


  var webkitStringPadBug = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
    1: 2
  }, 1);
  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = nativeGetOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings




  var split = ''.split;
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // toObject with fallback for non-array-like ES3 strings




  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // 7.1.1 ToPrimitive(input [, PreferredType])
   // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE


  var exist = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return exist ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor$1(O, P);
    } catch (error) {
      /* empty */
    }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$1
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  var nativeDefineProperty = Object.defineProperty;
  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$2
  };

  var hide = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var setGlobal = function (key, value) {
    try {
      hide(global$1, key, value);
    } catch (error) {
      global$1[key] = value;
    }

    return value;
  };

  var shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = global$1[SHARED] || setGlobal(SHARED, {});
  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.0.1',
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var functionToString = shared('native-function-to-string', Function.toString);

  var WeakMap = global$1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
  };

  var shared$1 = shared('keys');



  var sharedKey = function (key) {
    return shared$1[key] || (shared$1[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global$1.WeakMap;

  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap) {
    var store = new WeakMap$1();
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;

    set = function (it, metadata) {
      wmset.call(store, it, metadata);
      return metadata;
    };

    get = function (it) {
      return wmget.call(store, it) || {};
    };

    has$1 = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;

    set = function (it, metadata) {
      hide(it, STATE, metadata);
      return metadata;
    };

    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };

    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(functionToString).split('toString');

  shared('inspectSource', function (it) {
    return functionToString.call(it);
  });

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
      enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }

    if (O === global$1) {
      if (simple) O[key] = value;else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
  });
  });

  var max = Math.max;
  var min$1 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  // false -> Array#indexOf
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  // true  -> Array#includes
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes


  var arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIndexOf = arrayIncludes(false);



  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }

    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)


  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  var Reflect$1 = global$1.Reflect; // all object keys, includes non-enumerable and symbols


  var ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;










  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */


  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$1;
    } else if (STATIC) {
      target = global$1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        hide(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  };

  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend


  _export({
    target: 'String',
    proto: true,
    forced: webkitStringPadBug
  }, {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart


  _export({
    target: 'String',
    proto: true,
    forced: webkitStringPadBug
  }, {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

  // `String.prototype.repeat` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.repeat
  _export({
    target: 'String',
    proto: true
  }, {
    repeat: stringRepeat
  });

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set$1(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set$1 = Reflect.set;
    } else {
      set$1 = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set$1(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set$1(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }
  /**
    Direction
    @prop {string} NONE
    @prop {string} LEFT
    @prop {string} FORCE_LEFT
    @prop {string} RIGHT
    @prop {string} FORCE_RIGHT
  */

  var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
    /**
      Direction
      @enum {string}
    */

  };
  /** */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;

      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;

      default:
        return direction;
    }
  }
  /** Escapes regular expression control chars */

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i;

    if (arrA && arrB) {
      if (a.length != b.length) return false;

      for (i = 0; i < a.length; i++) {
        if (!objectIncludes(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;

    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var dateA = a instanceof Date,
          dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      }

      for (i = 0; i < keys.length; i++) {
        if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      }

      return true;
    }

    return false;
  }
  /* eslint-disable no-undef */

  var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};
  /* eslint-enable no-undef */

  /** Selection range */

  /** Provides details of changing input */

  var ActionDetails =
  /*#__PURE__*/
  function () {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */
    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails);

      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }
    /**
      Start changing position
      @readonly
    */


    _createClass(ActionDetails, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      /**
        Inserted symbols count
        @readonly
      */

    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
      /**
        Inserted symbols
        @readonly
      */

    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      /**
        Removed symbols count
        @readonly
      */

    }, {
      key: "removedCount",
      get: function get() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
      }
      /**
        Removed symbols
        @readonly
      */

    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      /**
        Unchanged head symbols
        @readonly
      */

    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
      /**
        Unchanged tail symbols
        @readonly
      */

    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      /**
        Remove direction
        @readonly
      */

    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

        return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);

    return ActionDetails;
  }();

  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.skip] - Can skip chars
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
  */
  var ChangeDetails =
  /*#__PURE__*/
  function () {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */
    function ChangeDetails(details) {
      _classCallCheck(this, ChangeDetails);

      _extends(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }
    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */


    _createClass(ChangeDetails, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
      /** Total offset considering all changes */

    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);

    return ChangeDetails;
  }();

  /** Provides details of continuous extracted tail */
  var ContinuousTailDetails =
  /*#__PURE__*/
  function () {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */
    function ContinuousTailDetails() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var stop = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, ContinuousTailDetails);

      this.value = value;
      this.from = from;
      this.stop = stop;
    }

    _createClass(ContinuousTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(tail) {
        this.value += String(tail);
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        });
      }
    }, {
      key: "shiftBefore",
      value: function shiftBefore(pos) {
        if (this.from >= pos || !this.value.length) return '';
        var shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set(state) {
        _extends(this, state);
      }
    }]);

    return ContinuousTailDetails;
  }();

  /** Provides common masking stuff */
  var Masked =
  /*#__PURE__*/
  function () {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */
    // $FlowFixMe no ideas

    /** Transforms value before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing in the end of editing */

    /** Enable characters overwriting */

    /** */
    function Masked(opts) {
      _classCallCheck(this, Masked);

      this._value = '';

      this._update(opts);

      this.isInitialized = true;
    }
    /** Sets and applies new options */


    _createClass(Masked, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length) return;
        this.withValueRefresh(this._update.bind(this, opts));
      }
      /**
        Sets new options
        @protected
      */

    }, {
      key: "_update",
      value: function _update(opts) {
        _extends(this, opts);
      }
      /** Mask state */

    }, {
      key: "reset",

      /** Resets value */
      value: function reset() {
        this._value = '';
      }
      /** */

    }, {
      key: "resolve",

      /** Resolve new value */
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, '');
        this.doCommit();
        return this.value;
      }
      /** */

    }, {
      key: "nearestInputPos",

      /** Finds nearest input position in direction */
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      /** Extracts value in range considering flags */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }
      /** Extracts tail in range */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
      /** Stores state before tail */

    }, {
      key: "_storeBeforeTailState",
      value: function _storeBeforeTailState() {
        this._beforeTailState = this.state;
      }
      /** Restores state before tail */

    }, {
      key: "_restoreBeforeTailState",
      value: function _restoreBeforeTailState() {
        this.state = this._beforeTailState;
      }
      /** Resets state before tail */

    }, {
      key: "_resetBeforeTailState",
      value: function _resetBeforeTailState() {
        this._beforeTailState = null;
      }
      /** Appends tail */
      // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
      /** Appends char */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
      /** Appends char */

    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        ch = this.doPrepare(ch, flags);
        if (!ch) return new ChangeDetails();
        var consistentState = this.state;
        var consistentTail;

        var details = this._appendCharRaw(ch, flags);

        if (details.inserted) {
          var appended = this.doValidate(flags) !== false;

          if (appended && checkTail != null) {
            // validation ok, check tail
            this._storeBeforeTailState();

            if (this.overwrite) {
              consistentTail = checkTail.state;
              checkTail.shiftBefore(this.value.length);
            }

            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

            if (appended && tailDetails.inserted) this._restoreBeforeTailState();
          } // revert all if something went wrong


          if (!appended) {
            details.rawInserted = details.inserted = '';
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }

        return details;
      }
      /** Appends symbols considering flags */
      // $FlowFixMe no ideas

    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = new ChangeDetails();
        var checkTail = tail && (isString(tail) ? new ContinuousTailDetails(String(tail)) : tail);

        for (var ci = 0; ci < str.length; ++ci) {
          details.aggregate(this._appendChar(str[ci], flags, checkTail));
        } // append tail but aggregate only tailShift


        if (checkTail != null) {
          this._storeBeforeTailState();

          details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }

        return details;
      }
      /** */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }
      /** Calls function and reapplies current value */

    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        var unmasked = this.unmaskedValue;
        var value = this.value;
        var ret = fn(); // try to update with raw value first to keep fixed chars

        if (this.resolve(value) !== value) {
          // or fallback to unmasked
          this.unmaskedValue = unmasked;
        }

        delete this._refreshing;
        return ret;
      }
      /**
        Prepares string before mask processing
        @protected
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }
      /**
        Validates if value is acceptable
        @protected
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
      /**
        Does additional processing in the end of editing
        @protected
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      /** */

    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var startChangePos = this.nearestInputPos(start, removeDirection);
        var changeDetails = new ChangeDetails({
          tailShift: startChangePos - start // adjust tailShift if start was aligned

        }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
          input: true
        }, tail));
        return changeDetails;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(state) {
        this._value = state._value;
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        this.resolve(value);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.reset();
        this.append(value, {}, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "typedValue",
      get: function get() {
        return this.unmaskedValue;
      },
      set: function set(value) {
        this.unmaskedValue = value;
      }
      /** Value that includes raw user input */

    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }]);

    return Masked;
  }();

  /** Get Masked class by mask type */
  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    }

    if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
    if (isString(mask)) return g.IMask.MaskedPattern;
    if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic; // $FlowFixMe

    if (mask.prototype instanceof g.IMask.Masked) return mask; // $FlowFixMe

    if (mask instanceof Function) return g.IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console

    return g.IMask.Masked;
  }
  /** Creates new {@link Masked} depending on mask type */

  function createMask(opts) {
    opts = _objectSpread({}, opts);
    var mask = opts.mask;
    if (mask instanceof g.IMask.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    return new MaskedClass(opts);
  }

  var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };
  /** */

  var PatternInputDefinition =
  /*#__PURE__*/
  function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternInputDefinition(opts) {
      _classCallCheck(this, PatternInputDefinition);

      var mask = opts.mask,
          blockOpts = _objectWithoutProperties(opts, ["mask"]);

      this.masked = createMask({
        mask: mask
      });

      _extends(this, blockOpts);
    }

    _createClass(PatternInputDefinition, [{
      key: "reset",
      value: function reset() {
        this._isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        if (fromPos === 0 && toPos >= 1) {
          this._isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }

        return new ChangeDetails();
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this._isFilled) return new ChangeDetails();
        var state = this.masked.state; // simulate input

        var details = this.masked._appendChar(str, flags);

        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }

        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }

        details.skip = !details.inserted && !this.isOptional;
        this._isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked;

        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._isFilled || this.isOptional) return details;
        this._isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked2;

        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked3;

        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;

          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked4, _this$parent;

        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          _isFilled: this._isFilled
        };
      },
      set: function set(state) {
        this.masked.state = state.masked;
        this._isFilled = state._isFilled;
      }
    }]);

    return PatternInputDefinition;
  }();

  var PatternFixedDefinition =
  /*#__PURE__*/
  function () {
    /** */

    /** */

    /** */

    /** */
    function PatternFixedDefinition(opts) {
      _classCallCheck(this, PatternFixedDefinition);

      _extends(this, opts);

      this._value = '';
    }

    _createClass(PatternFixedDefinition, [{
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = '';
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;

          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = new ChangeDetails();
        if (this._value) return details;
        var appended = this.char === str[0];
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._value) return details;
        this._value = details.inserted = this.char;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails('');
      } // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = this._appendChar(str, flags);

        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }

        return details;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : '';
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(state) {
        _extends(this, state);
      }
    }]);

    return PatternFixedDefinition;
  }();

  var ChunksTailDetails =
  /*#__PURE__*/
  function () {
    /** */
    function ChunksTailDetails() {
      var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, ChunksTailDetails);

      this.chunks = chunks;
      this.from = from;
    }

    _createClass(ChunksTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join('');
      } // $FlowFixMe no ideas

    }, {
      key: "extend",
      value: function extend(tailChunk) {
        if (!String(tailChunk)) return;
        if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
        var lastChunk = this.chunks[this.chunks.length - 1];
        var extendLast = lastChunk && ( // if stops are same or tail has no stop
        lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;

        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            var firstTailChunk;

            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift();
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          } // if tail chunk still has value


          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        if (!(masked instanceof g.IMask.MaskedPattern)) {
          var tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }

        var details = new ChangeDetails();

        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          var chunk = this.chunks[ci];

          var lastBlockIter = masked._mapPosToBlock(masked.value.length);

          var stop = chunk.stop;
          var chunkBlock = void 0;

          if (stop && ( // if block not found or stop is behind lastBlock
          !lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              details.aggregate(masked._appendPlaceholder(stop));
            }

            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }

          if (chunkBlock) {
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last

            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted; // get not inserted chars

            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }
        return details;
      }
    }, {
      key: "shiftBefore",
      value: function shiftBefore(pos) {
        if (this.from >= pos || !this.chunks.length) return '';
        var chunkShiftPos = pos - this.from;
        var ci = 0;

        while (ci < this.chunks.length) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.shiftBefore(chunkShiftPos);

          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }

          if (shiftChar) return shiftChar;
        }

        return '';
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function (c) {
            return c.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set(state) {
        var chunks = state.chunks,
            props = _objectWithoutProperties(state, ["chunks"]);

        _extends(this, props);

        this.chunks = chunks.map(function (cstate) {
          var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

          chunk.state = cstate;
          return chunk;
        });
      }
    }]);

    return ChunksTailDetails;
  }();

  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.blocks
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {boolean} opts.lazy
  */
  var MaskedPattern =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedPattern, _Masked);

    /** */

    /** */

    /** Single char for empty input */

    /** Show placeholder only when needed */
    function MaskedPattern() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MaskedPattern);

      // TODO type $Shape<MaskedPatternOptions>={} does not work
      opts.definitions = _extends({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedPattern).call(this, _objectSpread({}, MaskedPattern.DEFAULTS, opts)));
    }
    /**
      @override
      @param {Object} opts
    */


    _createClass(MaskedPattern, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = _extends({}, this.definitions, opts.definitions);

        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

        this._rebuildMask();
      }
      /** */

    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this = this;

        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs) return;
        var unmaskingBlock = false;
        var optionalBlock = false;

        for (var i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            var _ret = function () {
              var p = pattern.slice(i);
              var bNames = Object.keys(_this.blocks).filter(function (bName) {
                return p.indexOf(bName) === 0;
              }); // order by key length

              bNames.sort(function (a, b) {
                return b.length - a.length;
              }); // use block name with max length

              var bName = bNames[0];

              if (bName) {
                var maskedBlock = createMask(_objectSpread({
                  parent: _this,
                  lazy: _this.lazy,
                  placeholderChar: _this.placeholderChar
                }, _this.blocks[bName]));

                if (maskedBlock) {
                  _this._blocks.push(maskedBlock); // store block index


                  if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                  _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                }

                i += bName.length - 1;
                return "continue";
              }
            }();

            if (_ret === "continue") continue;
          }

          var char = pattern[i];

          var _isInput = char in defs;

          if (char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);

            continue;
          }

          if (char === '{' || char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }

          if (char === '[' || char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }

          if (char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            char = pattern[i];
            if (!char) break;
            _isInput = false;
          }

          var def = _isInput ? new PatternInputDefinition({
            parent: this,
            lazy: this.lazy,
            placeholderChar: this.placeholderChar,
            mask: defs[char],
            isOptional: optionalBlock
          }) : new PatternFixedDefinition({
            char: char,
            isUnmasking: unmaskingBlock
          });

          this._blocks.push(def);
        }
      }
      /**
        @override
      */

    }, {
      key: "_storeBeforeTailState",

      /**
        @override
      */
      value: function _storeBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _storeBeforeTailState is not exist in PatternBlock
          if (typeof b._storeBeforeTailState === 'function') {
            b._storeBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_storeBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "_restoreBeforeTailState",
      value: function _restoreBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _restoreBeforeTailState is not exist in PatternBlock
          if (typeof b._restoreBeforeTailState === 'function') {
            b._restoreBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_restoreBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "_resetBeforeTailState",
      value: function _resetBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _resetBeforeTailState is not exist in PatternBlock
          if (typeof b._resetBeforeTailState === 'function') {
            b._resetBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_resetBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

        this._blocks.forEach(function (b) {
          return b.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "doCommit",

      /**
        @override
      */
      value: function doCommit() {
        this._blocks.forEach(function (b) {
          return b.doCommit();
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "appendTail",

      /**
        @override
      */
      value: function appendTail(tail) {
        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blockIter = this._mapPosToBlock(this.value.length);

        var details = new ChangeDetails();
        if (!blockIter) return details;

        for (var bi = blockIter.index;; ++bi) {
          var _block = this._blocks[bi];
          if (!_block) break;

          var blockDetails = _block._appendChar(ch, flags);

          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted) break; // go next char
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this2 = this;

        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;

        this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
          var blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = _this2._findStopBefore(bi);
          blockChunk.from = _this2._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });

        return chunkTail;
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return '';
        var input = '';

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
          input += b.extractInput(fromPos, toPos, flags);
        });

        return input;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(blockIndex) {
        var stopBefore;

        for (var si = 0; si < this._stops.length; ++si) {
          var stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }

        return stopBefore;
      }
      /** Appends placeholder depending on laziness */

    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this3 = this;

        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;

        var startBlockIter = this._mapPosToBlock(this.value.length);

        if (!startBlockIter) return details;
        var startBlockIndex = startBlockIter.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
          if (typeof b._appendPlaceholder === 'function') {
            // $FlowFixMe `_blocks` may not be present
            var args = b._blocks != null ? [b._blocks.length] : [];

            var bDetails = b._appendPlaceholder.apply(b, args);

            _this3._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });

        return details;
      }
      /** Finds block in pos */

    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = '';

        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var _block2 = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += _block2.value;

          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      /** */

    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
          return pos += b.value.length;
        }, 0);
      }
      /** */

    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : undefined;

        var fromBlockIter = this._mapPosToBlock(fromPos);

        if (fromBlockIter) {
          var toBlockIter = this._mapPosToBlock(toPos); // process first block


          var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          var fromBlockStartPos = fromBlockIter.offset;
          var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
            } // process last block


            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });

        return removeDetails;
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        // TODO refactor - extract alignblock
        var beginBlockData = this._mapPosToBlock(cursorPos) || {
          index: 0,
          offset: 0
        };
        var beginBlockOffset = beginBlockData.offset,
            beginBlockIndex = beginBlockData.index;
        var beginBlock = this._blocks[beginBlockIndex];
        if (!beginBlock) return cursorPos;
        var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

        if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
          beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
        }

        var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
        var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

        if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
        var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

        if (direction === DIRECTION.NONE) {
          // NONE direction used to calculate start input position if no chars were removed
          // FOR NONE:
          // -
          // input|any
          // ->
          //  any|input
          // <-
          //  filled-input|any
          // check if first block at left is input
          if (searchBlockIndex > 0) {
            var blockIndexAtLeft = searchBlockIndex - 1;
            var blockAtLeft = this._blocks[blockIndexAtLeft];
            var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

            if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
              return this._blockStartPos(searchBlockIndex);
            }
          } // ->


          var firstInputAtRight = searchBlockIndex;

          for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
            var _block3 = this._blocks[bi];

            var _blockInputPos = _block3.nearestInputPos(0, DIRECTION.NONE);

            if (_blockInputPos !== _block3.value.length) {
              return this._blockStartPos(bi) + _blockInputPos;
            }
          }

          return this.value.length;
        }

        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // -
          //  any|filled-input
          // <-
          //  any|first not empty is not-len-aligned
          //  not-0-aligned|any
          // ->
          //  any|not-len-aligned or end
          // check if first block at right is filled input
          var firstFilledBlockIndexAtRight;

          for (var _bi = searchBlockIndex; _bi < this._blocks.length; ++_bi) {
            if (this._blocks[_bi].value) {
              firstFilledBlockIndexAtRight = _bi;
              break;
            }
          }

          if (firstFilledBlockIndexAtRight != null) {
            var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

            var _blockInputPos2 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

            if (_blockInputPos2 === 0 && filledBlock.unmaskedValue.length) {
              // filled block is input
              return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos2;
            }
          } // <-
          // find this vars


          var firstFilledInputBlockIndex = -1;
          var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

          for (var _bi2 = searchBlockIndex - 1; _bi2 >= 0; --_bi2) {
            var _block4 = this._blocks[_bi2];

            var _blockInputPos3 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

            if (firstEmptyInputBlockIndex == null && (!_block4.value || _blockInputPos3 !== 0)) {
              firstEmptyInputBlockIndex = _bi2;
            }

            if (_blockInputPos3 !== 0) {
              if (_blockInputPos3 !== _block4.value.length) {
                // aligned inside block - return immediately
                return this._blockStartPos(_bi2) + _blockInputPos3;
              } else {
                // found filled
                firstFilledInputBlockIndex = _bi2;
                break;
              }
            }
          }

          if (direction === DIRECTION.LEFT) {
            // try find first empty input before start searching position only when not forced
            for (var _bi3 = firstFilledInputBlockIndex + 1; _bi3 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi3) {
              var _block5 = this._blocks[_bi3];

              var _blockInputPos4 = _block5.nearestInputPos(0, DIRECTION.NONE);

              var blockAlignedPos = this._blockStartPos(_bi3) + _blockInputPos4; // if block is empty and last or not lazy input


              if ((!_block5.value.length && blockAlignedPos === this.value.length || _blockInputPos4 !== _block5.value.length) && blockAlignedPos <= cursorPos) {
                return blockAlignedPos;
              }
            }
          } // process overflow


          if (firstFilledInputBlockIndex >= 0) {
            return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
          } // for lazy if has aligned left inside fixed and has came to the start - use start position


          if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
            return 0;
          }

          if (firstEmptyInputBlockIndex != null) {
            return this._blockStartPos(firstEmptyInputBlockIndex);
          } // find first input


          for (var _bi4 = searchBlockIndex; _bi4 < this._blocks.length; ++_bi4) {
            var _block6 = this._blocks[_bi4];

            var _blockInputPos5 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


            if (!_block6.value.length || _blockInputPos5 !== _block6.value.length) {
              return this._blockStartPos(_bi4) + _blockInputPos5;
            }
          }

          return 0;
        }

        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // ->
          //  any|not-len-aligned and filled
          //  any|not-len-aligned
          // <-
          var firstInputBlockAlignedIndex;
          var firstInputBlockAlignedPos;

          for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
            var _block7 = this._blocks[_bi5];

            var _blockInputPos6 = _block7.nearestInputPos(0, DIRECTION.NONE);

            if (_blockInputPos6 !== _block7.value.length) {
              firstInputBlockAlignedPos = this._blockStartPos(_bi5) + _blockInputPos6;
              firstInputBlockAlignedIndex = _bi5;
              break;
            }
          }

          if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
            for (var _bi6 = firstInputBlockAlignedIndex; _bi6 < this._blocks.length; ++_bi6) {
              var _block8 = this._blocks[_bi6];

              var _blockInputPos7 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

              if (_blockInputPos7 !== _block8.value.length) {
                return this._blockStartPos(_bi6) + _blockInputPos7;
              }
            }

            return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
          }

          for (var _bi7 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi7 >= 0; --_bi7) {
            var _block9 = this._blocks[_bi7];

            var _blockInputPos8 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

            if (_blockInputPos8 !== 0) {
              var alignedPos = this._blockStartPos(_bi7) + _blockInputPos8;

              if (alignedPos >= cursorPos) return alignedPos;
              break;
            }
          }
        }

        return cursorPos;
      }
      /** Get block by name */

    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
      /** Get all blocks by name */

    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this4 = this;

        var indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(function (gi) {
          return _this4._blocks[gi];
        });
      }
    }, {
      key: "state",
      get: function get() {
        return _objectSpread({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map(function (b) {
            return b.state;
          })
        });
      },
      set: function set(state) {
        var _blocks = state._blocks,
            maskedState = _objectWithoutProperties(state, ["_blocks"]);

        this._blocks.forEach(function (b, bi) {
          return b.state = _blocks[bi];
        });

        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
      }
    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isComplete;
        });
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (str, b) {
          return str += b.unmaskedValue;
        }, '');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "value",
      get: function get() {
        // TODO return _value when not in change?
        return this._blocks.reduce(function (str, b) {
          return str += b.value;
        }, '');
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
      }
    }]);

    return MaskedPattern;
  }(Masked);
  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;

  function isInput(block) {
    if (!block) return false;
    var value = block.value;
    return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
  }

  /** Pattern which accepts ranges */
  var MaskedRange =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedRange, _MaskedPattern);

    function MaskedRange() {
      _classCallCheck(this, MaskedRange);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRange).apply(this, arguments));
    }

    _createClass(MaskedRange, [{
      key: "_update",

      /**
        @override
      */
      value: function _update(opts) {
        // TODO type
        opts = _objectSpread({
          to: this.to || 0,
          from: this.from || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var fromStr = String(opts.from).padStart(maxLength, '0');
        var toStr = String(opts.to).padStart(maxLength, '0');
        var sameCharsCount = 0;

        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
          ++sameCharsCount;
        }

        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "boundaries",
      value: function boundaries(str) {
        var minstr = '';
        var maxstr = '';

        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
            _ref2 = _slicedToArray(_ref, 3),
            placeholder = _ref2[1],
            num = _ref2[2];

        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }

        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      }
      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
        if (!this.autofix) return str;
        var fromStr = String(this.from).padStart(this.maxLength, '0');
        var toStr = String(this.to).padStart(this.maxLength, '0');
        var val = this.value;
        var prepStr = '';

        for (var ci = 0; ci < str.length; ++ci) {
          var nextVal = val + prepStr + str[ci];

          var _this$boundaries = this.boundaries(nextVal),
              _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
              minstr = _this$boundaries2[0],
              maxstr = _this$boundaries2[1];

          if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
        }

        return prepStr;
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var str = this.value;
        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

        var _this$boundaries3 = this.boundaries(str),
            _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
            minstr = _this$boundaries4[0],
            maxstr = _this$boundaries4[1];

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "_matchFrom",

      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */

      /** Min bound */

      /** Max bound */

      /** */
      get: function get() {
        return this.maxLength - String(this.from).length;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
      }
    }]);

    return MaskedRange;
  }(MaskedPattern);

  /** Date mask */

  var MaskedDate =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedDate, _MaskedPattern);

    /** Parse string to Date */

    /** Format Date to string */

    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** */

    /**
      @param {Object} opts
    */
    function MaskedDate(opts) {
      _classCallCheck(this, MaskedDate);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedDate).call(this, _objectSpread({}, MaskedDate.DEFAULTS, opts)));
    }
    /**
      @override
    */


    _createClass(MaskedDate, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;

        if (opts.pattern) {
          opts.mask = opts.pattern;
          delete opts.pattern;
        }

        var blocks = opts.blocks;
        opts.blocks = _extends({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;

          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }

        _extends(opts.blocks, blocks); // add autofix


        Object.keys(opts.blocks).forEach(function (bk) {
          var b = opts.blocks[bk];
          if (!('autofix' in b)) b.autofix = opts.autofix;
        });

        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var date = this.date;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
      /** Checks if date is exists */

    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str)) === str;
      }
      /** Parsed Date */

    }, {
      key: "date",
      get: function get() {
        return this.isComplete ? this.parse(this.value) : null;
      },
      set: function set(date) {
        this.value = this.format(date);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.date;
      },
      set: function set(value) {
        this.date = value;
      }
    }]);

    return MaskedDate;
  }(MaskedPattern);
  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
          _str$split2 = _slicedToArray(_str$split, 3),
          day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

      return new Date(year, month - 1, day);
    }
  };

  MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };

  /**
    Generic element API to use with mask
    @interface
  */
  var MaskElement =
  /*#__PURE__*/
  function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement);
    }

    _createClass(MaskElement, [{
      key: "select",

      /** Safely sets element selection */
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }
      /** Should be overriden in subclasses */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {}
      /** Should be overriden in subclasses */

    }, {
      key: "bindEvents",

      /** Should be overriden in subclasses */
      value: function bindEvents(handlers) {}
      /** Should be overriden in subclasses */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }, {
      key: "selectionStart",

      /** */

      /** */

      /** */

      /** Safely returns selection start */
      get: function get() {
        var start;

        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}

        return start != null ? start : this.value.length;
      }
      /** Safely returns selection end */

    }, {
      key: "selectionEnd",
      get: function get() {
        var end;

        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}

        return end != null ? end : this.value.length;
      }
    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
    }]);

    return MaskElement;
  }();

  /** Bridge between HTMLElement and {@link Masked} */

  var HTMLMaskElement =
  /*#__PURE__*/
  function (_MaskElement) {
    _inherits(HTMLMaskElement, _MaskElement);

    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
      @param {HTMLInputElement|HTMLTextAreaElement} input
    */
    function HTMLMaskElement(input) {
      var _this;

      _classCallCheck(this, HTMLMaskElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMaskElement).call(this));
      _this.input = input;
      _this._handlers = {};
      return _this;
    }
    /**
      Is element in focus
      @readonly
    */


    _createClass(HTMLMaskElement, [{
      key: "_unsafeSelect",

      /**
        Sets HTMLElement selection
        @override
      */
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      /**
        HTMLElement value
        @override
      */

    }, {
      key: "bindEvents",

      /**
        Binds HTMLElement events to mask internal events
        @override
      */
      value: function bindEvents(handlers) {
        var _this2 = this;

        Object.keys(handlers).forEach(function (event) {
          return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }
      /**
        Unbinds HTMLElement events to mask internal events
        @override
      */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this3 = this;

        Object.keys(this._handlers).forEach(function (event) {
          return _this3._toggleEventHandler(event);
        });
      }
      /** */

    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }

        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }, {
      key: "isActive",
      get: function get() {
        return this.input === document.activeElement;
      }
      /**
        Returns HTMLElement selection start
        @override
      */

    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
      /**
        Returns HTMLElement selection end
        @override
      */

    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
    }]);

    return HTMLMaskElement;
  }(MaskElement);
  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
  };

  /** Listens to element events and controls changes between element and {@link Masked} */

  var InputMask =
  /*#__PURE__*/
  function () {
    /**
      View element
      @readonly
    */

    /**
      Internal {@link Masked} model
      @readonly
    */

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */
    function InputMask(el, opts) {
      _classCallCheck(this, InputMask);

      this.el = el instanceof MaskElement ? el : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

      this._bindEvents(); // refresh


      this.updateValue();

      this._onChange();
    }
    /** Read or update mask */


    _createClass(InputMask, [{
      key: "_bindEvents",

      /**
        Starts listening to element events
        @protected
      */
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this.alignCursorFriendly,
          focus: this._onFocus,
          commit: this._onChange
        });
      }
      /**
        Stops listening to element events
        @protected
       */

    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        this.el.unbindEvents();
      }
      /**
        Fires custom event
        @protected
       */

    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        var listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(function (l) {
          return l();
        });
      }
      /**
        Current selection start
        @readonly
      */

    }, {
      key: "_saveSelection",

      /**
        Stores current selection
        @protected
      */
      value: function _saveSelection()
      /* ev */
      {
        if (this.value !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }

        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
      /** Syncronizes model value from view */

    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
      /** Syncronizes view from model value, fires change events */

    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newValue) this.el.value = newValue;
        if (isChanged) this._fireChangeEvents();
      }
      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (objectIncludes(this.masked, opts)) return;

        var mask = opts.mask,
            restOpts = _objectWithoutProperties(opts, ["mask"]);

        this.mask = mask;
        this.masked.updateOptions(restOpts);
        this.updateControl();
      }
      /** Updates cursor */

    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

        this._delayUpdateCursor(cursorPos);
      }
      /**
        Delays cursor update to support mobile browsers
        @private
      */

    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;

        this._abortUpdateCursor();

        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this.el) return; // if was destroyed

          _this.cursorPos = _this._changingCursorPos;

          _this._abortUpdateCursor();
        }, 10);
      }
      /**
        Fires custom events
        @protected
      */

    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent('accept');

        if (this.masked.isComplete) this._fireEvent('complete');
      }
      /**
        Aborts delayed cursor update
        @private
      */

    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
      /** Aligns cursor to nearest available position */

    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
      }
      /** Aligns cursor only if selection is empty */

    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

        this.alignCursor();
      }
      /** Adds listener on custom event */

    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];

        this._listeners[ev].push(handler);

        return this;
      }
      /** Removes custom event listener */

    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return this;

        if (!handler) {
          delete this._listeners[ev];
          return this;
        }

        var hIndex = this._listeners[ev].indexOf(handler);

        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
      /** Handles view input event */

    }, {
      key: "_onInput",
      value: function _onInput() {
        this._abortUpdateCursor(); // fix strange IE behavior


        if (!this._selection) return this.updateValue();
        var details = new ActionDetails( // new state
        this.el.value, this.cursorPos, // old state
        this.value, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        this.updateControl();
        this.updateCursor(cursorPos);
      }
      /** Handles view change event and commits model value */

    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }

        this.masked.doCommit();
        this.updateControl();

        this._saveSelection();
      }
      /** Handles view drop event, prevents by default */

    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      /** Restore last selection on focus */

    }, {
      key: "_onFocus",
      value: function _onFocus(ev) {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

        if (this._selection) this.cursorPos = this._selection.end;
        this.alignCursorFriendly();
      }
      /** Unbind view events and removes element reference */

    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents(); // $FlowFixMe why not do so?


        this._listeners.length = 0;
        delete this.el;
      }
    }, {
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(mask) {
        if (mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate) return;

        if (this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask: mask
          });
          return;
        }

        var masked = createMask({
          mask: mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
      /** Raw value */

    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Unmasked value */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(str) {
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Typed unmasked value */

    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(val) {
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      /** Current cursor position */

    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(pos) {
        if (!this.el.isActive) return;
        this.el.select(pos, pos);

        this._saveSelection();
      }
    }]);

    return InputMask;
  }();

  /** Pattern which validates enum values */

  var MaskedEnum =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedEnum, _MaskedPattern);

    function MaskedEnum() {
      _classCallCheck(this, MaskedEnum);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
    }

    _createClass(MaskedEnum, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        // TODO type
        if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this = this,
            _get2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.enum.some(function (e) {
          return e.indexOf(_this.unmaskedValue) >= 0;
        }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);

    return MaskedEnum;
  }(MaskedPattern);

  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */
  var MaskedNumber =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedNumber, _Masked);

    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */
    function MaskedNumber(opts) {
      _classCallCheck(this, MaskedNumber);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumber).call(this, _objectSpread({}, MaskedNumber.DEFAULTS, opts)));
    }
    /**
      @override
    */


    _createClass(MaskedNumber, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

        this._updateRegExps();
      }
      /** */

    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        // use different regexp to process user input (more strict, input suffix) and tail shifting
        var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        var midInput = '(0|([1-9]+\\d*))?';
        var mid = '\\d*';
        var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      /** */

    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      /** */

    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var _get2;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
      }
      /** */

    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(to) {
        var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var count = 0;

        for (var pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }

        return count;
      }
      /** */

    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;

        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

        fromPos = _this$_adjustRangeWit2[0];
        toPos = _this$_adjustRangeWit2[1];
        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(flags.tail && this._beforeTailState ? this._beforeTailState._value : this._value);

        this._value = this._removeThousandsSeparators(this.value);

        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        this._value = this._insertThousandsSeparators(this._value);

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(flags.tail && this._beforeTailState ? this._beforeTailState._value : this._value);

        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        return appendDetails;
      }
      /** */

    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          var searchFrom = pos - this.thousandsSeparator.length + 1;
          var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }

        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(from, to) {
        var separatorAroundFromPos = this._findSeparatorAround(from);

        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

        var separatorAroundToPos = this._findSeparatorAround(to);

        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

        fromPos = _this$_adjustRangeWit4[0];
        toPos = _this$_adjustRangeWit4[1];
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);

        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;

        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

              if (separatorAtLeftPos >= 0) {
                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }

              break;
            }

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              var separatorAtRightPos = this._findSeparatorAround(cursorPos);

              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }

        return cursorPos;
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

        var valid = regexp.test(this._removeThousandsSeparators(this.value));

        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && ( // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }

        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var number = this.number;
          var validnum = number; // check bounds

          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = String(validnum);
          var formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }

        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
      }
      /** */

    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        }); // add leading zero

        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      /** */

    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value) return value;
        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
      }
      /** Parsed Number */

    }, {
      key: "number",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set(number) {
        this.unmaskedValue = String(number);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.number;
      },
      set: function set(value) {
        this.number = value;
      }
      /**
        Is negative allowed
        @readonly
      */

    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
    }]);

    return MaskedNumber;
  }(Masked);
  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };

  /** Masking by RegExp */

  var MaskedRegExp =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedRegExp, _Masked);

    function MaskedRegExp() {
      _classCallCheck(this, MaskedRegExp);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
    }

    _createClass(MaskedRegExp, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        if (opts.mask) opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };

        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedRegExp;
  }(Masked);

  /** Masking by custom Function */

  var MaskedFunction =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedFunction, _Masked);

    function MaskedFunction() {
      _classCallCheck(this, MaskedFunction);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
    }

    _createClass(MaskedFunction, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        if (opts.mask) opts.validate = opts.mask;

        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedFunction;
  }(Masked);

  /** Dynamic mask for choosing apropriate mask in run-time */
  var MaskedDynamic =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedDynamic, _Masked);

    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
      @param {Object} opts
    */
    function MaskedDynamic(opts) {
      var _this;

      _classCallCheck(this, MaskedDynamic);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedDynamic).call(this, _objectSpread({}, MaskedDynamic.DEFAULTS, opts)));
      _this.currentMask = null;
      return _this;
    }
    /**
      @override
    */


    _createClass(MaskedDynamic, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

        if ('mask' in opts) {
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
            return createMask(m);
          }) : [];
        }
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw() {
        var details = this._applyDispatch.apply(this, arguments);

        if (this.currentMask) {
          var _this$currentMask;

          details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
        }

        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var prevValueBeforeTail = flags.tail && this._beforeTailState ? this._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && this._beforeTailState ? // $FlowFixMe - tired to fight with type system
        this._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask && prevMask.state;
        var prevMaskBeforeTailState = prevMask && prevMask._beforeTailState;
        this.currentMask = this.doDispatch(appended, flags); // restore state after dispatch

        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;

            if (tailValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
            this.currentMask._beforeTailState = prevMaskBeforeTailState;
          }
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.dispatch(appended, this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2, _this$currentMask2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        if (this.currentMask) this.currentMask.reset();
        this.compiledMasks.forEach(function (m) {
          return m.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "remove",

      /**
        @override
      */
      value: function remove() {
        var details = new ChangeDetails();

        if (this.currentMask) {
          var _this$currentMask3;

          details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
          .aggregate(this._applyDispatch());
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "extractInput",

      /**
        @override
      */
      value: function extractInput() {
        var _this$currentMask4;

        return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask5, _get3;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();

        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask6, _get4;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
      }
    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : '';
      } // probably typedValue should not be used with dynamic
      ,
      set: function set(value) {
        var unmaskedValue = String(value); // double check it

        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }

        this.unmaskedValue = unmaskedValue;
      }
      /**
        @override
      */

    }, {
      key: "isComplete",
      get: function get() {
        return !!this.currentMask && this.currentMask.isComplete;
      }
    }, {
      key: "state",
      get: function get() {
        return _objectSpread({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (m) {
            return m.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        });
      },
      set: function set(state) {
        var compiledMasks = state.compiledMasks,
            currentMaskRef = state.currentMaskRef,
            currentMask = state.currentMask,
            maskedState = _objectWithoutProperties(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

        this.compiledMasks.forEach(function (m, mi) {
          return m.state = compiledMasks[mi];
        });

        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }

        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
      }
    }]);

    return MaskedDynamic;
  }(Masked);
  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length) return;
      var inputValue = masked.rawInputValue; // simulate input

      var inputs = masked.compiledMasks.map(function (m, index) {
        m.rawInputValue = inputValue;
        m.append(appended, flags);
        var weight = m.rawInputValue.length;
        return {
          weight: weight,
          index: index
        };
      }); // pop masks with longer values first

      inputs.sort(function (i1, i2) {
        return i2.weight - i1.weight;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };

  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */

  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new InputMask(el, opts);
  }
  /** {@link InputMask} */

  IMask.InputMask = InputMask;
  /** {@link Masked} */

  IMask.Masked = Masked;
  /** {@link MaskedPattern} */

  IMask.MaskedPattern = MaskedPattern;
  /** {@link MaskedEnum} */

  IMask.MaskedEnum = MaskedEnum;
  /** {@link MaskedRange} */

  IMask.MaskedRange = MaskedRange;
  /** {@link MaskedNumber} */

  IMask.MaskedNumber = MaskedNumber;
  /** {@link MaskedDate} */

  IMask.MaskedDate = MaskedDate;
  /** {@link MaskedRegExp} */

  IMask.MaskedRegExp = MaskedRegExp;
  /** {@link MaskedFunction} */

  IMask.MaskedFunction = MaskedFunction;
  /** {@link MaskedDynamic} */

  IMask.MaskedDynamic = MaskedDynamic;
  /** {@link createMask} */

  IMask.createMask = createMask;
  /** {@link MaskElement} */

  IMask.MaskElement = MaskElement;
  /** {@link HTMLMaskElement} */

  IMask.HTMLMaskElement = HTMLMaskElement;
  g.IMask = IMask;

  return IMask;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Users/seraimila/npm/lib/node_modules/tars-cli/node_modules/webpack/buildin/global.js */ "../../../../Users/seraimila/npm/lib/node_modules/tars-cli/node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcGFkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlYmtpdC1zdHJpbmctcGFkLWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5wYWQtZW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5wYWQtc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvY29yZS9jaGFuZ2UtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9zcmMvbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9kYXRlLmpzIiwid2VicGFjazovLy8uLi9zcmMvY29udHJvbHMvbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb250cm9scy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9lbnVtLmpzIiwid2VicGFjazovLy8uLi9zcmMvbWFza2VkL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ltYXNrLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGF0ZUZpZWxkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYWlsRmllbGQiLCJwaG9uZUZpZWxkIiwibWFpbFJlZyIsInBob25lUmVnIiwibmFtZVJlZyIsImRlZmF1bHRFcnJvclRleHQiLCJtYWlsRXJyb3JUZXh0IiwicGhvbmVFcnJvclRleHQiLCJtYXNrT3B0aW9ucyIsIm1hc2siLCJJTWFzayIsInJlbW92ZVZhbGlkYXRpb24iLCJlcnJvcnMiLCJpIiwibGVuZ3RoIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdlbmVyYXRlRXJyb3IiLCJ0ZXh0IiwiZXJyb3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb2xvciIsImlubmVySFRNTCIsImNoZWNrRmllbGRzQWxsIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsImNvbnRhaW5zIiwiYWRkIiwiY2hlY2tGaWVsZHNQcmVzZW5jZSIsInZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJjaGVja0ZpZWxkcyIsInJlZyIsImZpZWxkIiwiZ2VuZXJhdGVUZXh0IiwiY2hpbGQiLCJ0ZXN0IiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibW9kYWxXaW5kb3ciLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRFbGVtZW50IiwiaWQiLCJvcGVuTW9kYWwiLCJtb2RhbFRyaWdnZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25jbGljayIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInN1YnN0ciIsImNsb3NlTW9kYWwiLCJjbG9zZUJ1dHRvbiIsImNsb3NlT3ZlcmxheSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVhZHkiLCJmbiIsInJlYWR5U3RhdGUiLCJjZWlsIiwiTWF0aCIsImZsb29yIiwibW9kdWxlIiwiYXJndW1lbnQiLCJpc05hTiIsIm1pbiIsInRvSW50ZWdlciIsIml0IiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwicmVwZWF0IiwiY291bnQiLCJzdHIiLCJTdHJpbmciLCJyZXF1aXJlT2JqZWN0Q29lcmNpYmxlIiwicmVzdWx0IiwibiIsIkluZmluaXR5IiwiUmFuZ2VFcnJvciIsInRoYXQiLCJtYXhMZW5ndGgiLCJmaWxsU3RyaW5nIiwibGVmdCIsIlMiLCJzdHJpbmdMZW5ndGgiLCJmaWxsU3RyIiwiaW50TWF4TGVuZ3RoIiwidG9MZW5ndGgiLCJmaWxsTGVuIiwic3RyaW5nRmlsbGVyIiwiY2FsbCIsInNsaWNlIiwid2luZG93Iiwic2VsZiIsIkZ1bmN0aW9uIiwibmF2aWdhdG9yIiwiZ2xvYmFsIiwidXNlckFnZW50IiwiZXhlYyIsInJlcXVpcmUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImEiLCJuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiTkFTSE9STl9CVUciLCJleHBvcnRzIiwiViIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiYml0bWFwIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ0b1N0cmluZyIsImZhaWxzIiwiY2xhc3NvZiIsIkluZGV4ZWRPYmplY3QiLCJpc09iamVjdCIsInZhbCIsInZhbHVlT2YiLCJoYXNPd25Qcm9wZXJ0eSIsImtleSIsImV4aXN0IiwiREVTQ1JJUFRPUlMiLCJPIiwiUCIsInRvSW5kZXhlZE9iamVjdCIsInRvUHJpbWl0aXZlIiwiSUU4X0RPTV9ERUZJTkUiLCJoYXMiLCJjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSIsImYiLCJuYXRpdmVEZWZpbmVQcm9wZXJ0eSIsIkF0dHJpYnV0ZXMiLCJhbk9iamVjdCIsIm9iamVjdCIsImRlZmluZVByb3BlcnR5TW9kdWxlIiwiaGlkZSIsIlNIQVJFRCIsInN0b3JlIiwic2V0R2xvYmFsIiwicHVzaCIsInZlcnNpb24iLCJtb2RlIiwiY29weXJpZ2h0IiwiV2Vha01hcCIsIm5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmciLCJwb3N0Zml4IiwicmFuZG9tIiwiY29uY2F0Iiwic2hhcmVkIiwidWlkIiwic2V0IiwiZW5mb3JjZSIsImdldHRlckZvciIsIlRZUEUiLCJzdGF0ZSIsInR5cGUiLCJOQVRJVkVfV0VBS19NQVAiLCJ3bWdldCIsIndtaGFzIiwid21zZXQiLCJtZXRhZGF0YSIsIlNUQVRFIiwic2hhcmVkS2V5IiwiaGlkZGVuS2V5cyIsIm9iamVjdEhhcyIsImdldEludGVybmFsU3RhdGUiLCJJbnRlcm5hbFN0YXRlTW9kdWxlIiwiZW5mb3JjZUludGVybmFsU3RhdGUiLCJURU1QTEFURSIsIm9wdGlvbnMiLCJ1bnNhZmUiLCJzaW1wbGUiLCJub1RhcmdldEdldCIsInNvdXJjZSIsInByb3RvdHlwZSIsIm1heCIsImluZGV4IiwiaW50ZWdlciIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsInRvQWJzb2x1dGVJbmRleCIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImludGVybmFsT2JqZWN0S2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIlJlZmxlY3QiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5TmFtZXNNb2R1bGUiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUiLCJyZXBsYWNlbWVudCIsImlzRm9yY2VkIiwiZmVhdHVyZSIsImRldGVjdGlvbiIsImRhdGEiLCJub3JtYWxpemUiLCJQT0xZRklMTCIsIk5BVElWRSIsInN0cmluZyIsInRvTG93ZXJDYXNlIiwiVEFSR0VUIiwiR0xPQkFMIiwiU1RBVElDIiwic3RhdCIsIkZPUkNFRCIsInRhcmdldFByb3BlcnR5Iiwic291cmNlUHJvcGVydHkiLCJmb3JjZWQiLCJjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzIiwic2hhbSIsInJlZGVmaW5lIiwicHJvdG8iLCJXRUJLSVRfQlVHIiwicGFkRW5kIiwiaW50ZXJuYWxTdHJpbmdQYWQiLCJhcmd1bWVudHMiLCJwYWRTdGFydCIsImlzU3RyaW5nIiwiRElSRUNUSU9OIiwiTk9ORSIsIkxFRlQiLCJGT1JDRV9MRUZUIiwiUklHSFQiLCJGT1JDRV9SSUdIVCIsImZvcmNlRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiZXNjYXBlUmVnRXhwIiwib2JqZWN0SW5jbHVkZXMiLCJiIiwiYXJyQSIsIkFycmF5IiwiaXNBcnJheSIsImFyckIiLCJkYXRlQSIsIkRhdGUiLCJkYXRlQiIsImdldFRpbWUiLCJyZWdleHBBIiwicmVnZXhwQiIsImciLCJBY3Rpb25EZXRhaWxzIiwiY3Vyc29yUG9zIiwib2xkVmFsdWUiLCJvbGRTZWxlY3Rpb24iLCJzdGFydENoYW5nZVBvcyIsInN0YXJ0IiwiaW5zZXJ0ZWRDb3VudCIsImVuZCIsInJlbW92ZWRDb3VudCIsInN1YnN0cmluZyIsIkNoYW5nZURldGFpbHMiLCJkZXRhaWxzIiwiaW5zZXJ0ZWQiLCJyYXdJbnNlcnRlZCIsInNraXAiLCJ0YWlsU2hpZnQiLCJDb250aW51b3VzVGFpbERldGFpbHMiLCJmcm9tIiwic3RvcCIsInRhaWwiLCJtYXNrZWQiLCJhcHBlbmQiLCJwb3MiLCJzaGlmdENoYXIiLCJNYXNrZWQiLCJvcHRzIiwiX3ZhbHVlIiwiX3VwZGF0ZSIsImlzSW5pdGlhbGl6ZWQiLCJ3aXRoVmFsdWVSZWZyZXNoIiwiYmluZCIsInJlc2V0IiwiaW5wdXQiLCJkb0NvbW1pdCIsImZyb21Qb3MiLCJ0b1BvcyIsImV4dHJhY3RJbnB1dCIsIl9iZWZvcmVUYWlsU3RhdGUiLCJhcHBlbmRUbyIsImNoIiwiZmxhZ3MiLCJjaGVja1RhaWwiLCJkb1ByZXBhcmUiLCJjb25zaXN0ZW50U3RhdGUiLCJjb25zaXN0ZW50VGFpbCIsIl9hcHBlbmRDaGFyUmF3IiwiYXBwZW5kZWQiLCJkb1ZhbGlkYXRlIiwiX3N0b3JlQmVmb3JlVGFpbFN0YXRlIiwib3ZlcndyaXRlIiwic2hpZnRCZWZvcmUiLCJ0YWlsRGV0YWlscyIsImFwcGVuZFRhaWwiLCJfcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSIsImNpIiwiYWdncmVnYXRlIiwiX2FwcGVuZENoYXIiLCJfcmVmcmVzaGluZyIsInVubWFza2VkIiwidW5tYXNrZWRWYWx1ZSIsInJldCIsInJlc29sdmUiLCJwcmVwYXJlIiwidmFsaWRhdGUiLCJjb21taXQiLCJkZWxldGVDb3VudCIsInJlbW92ZURpcmVjdGlvbiIsInRhaWxQb3MiLCJleHRyYWN0VGFpbCIsIm5lYXJlc3RJbnB1dFBvcyIsImNoYW5nZURldGFpbHMiLCJyYXciLCJtYXNrZWRDbGFzcyIsIkVycm9yIiwiTWFza2VkUmVnRXhwIiwiTWFza2VkUGF0dGVybiIsIk1hc2tlZERhdGUiLCJOdW1iZXIiLCJNYXNrZWROdW1iZXIiLCJNYXNrZWREeW5hbWljIiwiTWFza2VkRnVuY3Rpb24iLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZU1hc2siLCJNYXNrZWRDbGFzcyIsIkRFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMiLCJQYXR0ZXJuSW5wdXREZWZpbml0aW9uIiwiYmxvY2tPcHRzIiwiX2lzRmlsbGVkIiwiaXNPcHRpb25hbCIsImxhenkiLCJwbGFjZWhvbGRlckNoYXIiLCJCb29sZWFuIiwibWluUG9zIiwibWF4UG9zIiwiYm91bmRQb3MiLCJpc0NvbXBsZXRlIiwiUGF0dGVybkZpeGVkRGVmaW5pdGlvbiIsIl9pc1Jhd0lucHV0IiwiY2hhciIsImlzUmVzb2x2ZWQiLCJpc1VubWFza2luZyIsIkNodW5rc1RhaWxEZXRhaWxzIiwiY2h1bmtzIiwibWFwIiwidGFpbENodW5rIiwibGFzdENodW5rIiwiZXh0ZW5kTGFzdCIsImV4dGVuZCIsImZpcnN0VGFpbENodW5rIiwic2hpZnQiLCJibG9ja0luZGV4IiwiY2h1bmsiLCJsYXN0QmxvY2tJdGVyIiwiX21hcFBvc1RvQmxvY2siLCJjaHVua0Jsb2NrIiwiX3N0b3BzIiwiaW5kZXhPZiIsIl9hcHBlbmRQbGFjZWhvbGRlciIsIl9ibG9ja3MiLCJyZW1haW5DaGFycyIsImNodW5rU2hpZnRQb3MiLCJzcGxpY2UiLCJjIiwicHJvcHMiLCJjc3RhdGUiLCJkZWZpbml0aW9ucyIsIkRFRkFVTFRTIiwiX3JlYnVpbGRNYXNrIiwiZGVmcyIsIl9tYXNrZWRCbG9ja3MiLCJwYXR0ZXJuIiwidW5tYXNraW5nQmxvY2siLCJvcHRpb25hbEJsb2NrIiwiYmxvY2tzIiwicCIsImJOYW1lcyIsImZpbHRlciIsImJOYW1lIiwic29ydCIsIm1hc2tlZEJsb2NrIiwiaXNJbnB1dCIsIlNUT1BfQ0hBUiIsIkVTQ0FQRV9DSEFSIiwiZGVmIiwiZm9yRWFjaCIsIl9yZXNldEJlZm9yZVRhaWxTdGF0ZSIsImJsb2NrSXRlciIsImJpIiwiYmxvY2siLCJibG9ja0RldGFpbHMiLCJjaHVua1RhaWwiLCJfZm9yRWFjaEJsb2Nrc0luUmFuZ2UiLCJiRnJvbVBvcyIsImJUb1BvcyIsImJsb2NrQ2h1bmsiLCJfZmluZFN0b3BCZWZvcmUiLCJfYmxvY2tTdGFydFBvcyIsIl8iLCJzdG9wQmVmb3JlIiwic2kiLCJ0b0Jsb2NrSW5kZXgiLCJzdGFydEJsb2NrSXRlciIsInN0YXJ0QmxvY2tJbmRleCIsImVuZEJsb2NrSW5kZXgiLCJhcmdzIiwiYkRldGFpbHMiLCJhcHBseSIsImFjY1ZhbCIsImJsb2NrU3RhcnRQb3MiLCJvZmZzZXQiLCJyZWR1Y2UiLCJmcm9tQmxvY2tJdGVyIiwidG9CbG9ja0l0ZXIiLCJpc1NhbWVCbG9jayIsImZyb21CbG9ja1N0YXJ0UG9zIiwiZnJvbUJsb2NrRW5kUG9zIiwicmVtb3ZlRGV0YWlscyIsImJlZ2luQmxvY2tEYXRhIiwiYmVnaW5CbG9ja09mZnNldCIsImJlZ2luQmxvY2tJbmRleCIsImJlZ2luQmxvY2siLCJiZWdpbkJsb2NrQ3Vyc29yUG9zIiwiY3Vyc29yQXRSaWdodCIsImN1cnNvckF0TGVmdCIsInNlYXJjaEJsb2NrSW5kZXgiLCJibG9ja0luZGV4QXRMZWZ0IiwiYmxvY2tBdExlZnQiLCJibG9ja0lucHV0UG9zIiwiZmlyc3RJbnB1dEF0UmlnaHQiLCJmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0IiwiZmlsbGVkQmxvY2siLCJmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCIsImZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXgiLCJibG9ja0FsaWduZWRQb3MiLCJmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXgiLCJmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zIiwiYWxpZ25lZFBvcyIsIm5hbWUiLCJtYXNrZWRCbG9ja3MiLCJpbmRpY2VzIiwiZ2kiLCJtYXNrZWRTdGF0ZSIsImV2ZXJ5IiwiSW5wdXREZWZpbml0aW9uIiwiRml4ZWREZWZpbml0aW9uIiwiTWFza2VkUmFuZ2UiLCJ0byIsImZyb21TdHIiLCJ0b1N0ciIsInNhbWVDaGFyc0NvdW50IiwibWluc3RyIiwibWF4c3RyIiwibWF0Y2giLCJwbGFjZWhvbGRlciIsIm51bSIsImF1dG9maXgiLCJwcmVwU3RyIiwibmV4dFZhbCIsImJvdW5kYXJpZXMiLCJmaXJzdE5vblplcm8iLCJzZWFyY2giLCJfbWF0Y2hGcm9tIiwiR0VUX0RFRkFVTFRfQkxPQ0tTIiwiWSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJiayIsImRhdGUiLCJpc0RhdGVFeGlzdCIsImZvcm1hdCIsInBhcnNlIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiTWFza0VsZW1lbnQiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsIl91bnNhZmVTZWxlY3QiLCJoYW5kbGVycyIsIl91bnNhZmVTZWxlY3Rpb25TdGFydCIsIl91bnNhZmVTZWxlY3Rpb25FbmQiLCJIVE1MTWFza0VsZW1lbnQiLCJfaGFuZGxlcnMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImV2ZW50IiwiX3RvZ2dsZUV2ZW50SGFuZGxlciIsIkVWRU5UU19NQVAiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJzZWxlY3Rpb25DaGFuZ2UiLCJkcm9wIiwiY2xpY2siLCJmb2N1cyIsIklucHV0TWFzayIsIl9saXN0ZW5lcnMiLCJfdW5tYXNrZWRWYWx1ZSIsIl9zYXZlU2VsZWN0aW9uIiwiX29uSW5wdXQiLCJfb25DaGFuZ2UiLCJfb25Ecm9wIiwiX29uRm9jdXMiLCJhbGlnbkN1cnNvciIsImFsaWduQ3Vyc29yRnJpZW5kbHkiLCJfYmluZEV2ZW50cyIsInVwZGF0ZVZhbHVlIiwiYmluZEV2ZW50cyIsInVuYmluZEV2ZW50cyIsImV2IiwibGlzdGVuZXJzIiwibCIsIl9zZWxlY3Rpb24iLCJuZXdVbm1hc2tlZFZhbHVlIiwibmV3VmFsdWUiLCJpc0NoYW5nZWQiLCJfZmlyZUNoYW5nZUV2ZW50cyIsInJlc3RPcHRzIiwidXBkYXRlT3B0aW9ucyIsInVwZGF0ZUNvbnRyb2wiLCJfZGVsYXlVcGRhdGVDdXJzb3IiLCJfYWJvcnRVcGRhdGVDdXJzb3IiLCJfY2hhbmdpbmdDdXJzb3JQb3MiLCJfY3Vyc29yQ2hhbmdpbmciLCJzZXRUaW1lb3V0IiwiX2ZpcmVFdmVudCIsImNsZWFyVGltZW91dCIsImhJbmRleCIsIm9sZFJhd1ZhbHVlIiwicmF3SW5wdXRWYWx1ZSIsInJlbW92ZWQiLCJ1cGRhdGVDdXJzb3IiLCJzdG9wUHJvcGFnYXRpb24iLCJfdW5iaW5kRXZlbnRzIiwiY29uc3RydWN0b3IiLCJ0eXBlZFZhbHVlIiwiaXNBY3RpdmUiLCJzZWxlY3QiLCJNYXNrZWRFbnVtIiwiZW51bSIsInNvbWUiLCJfdXBkYXRlUmVnRXhwcyIsImFsbG93TmVnYXRpdmUiLCJtaWRJbnB1dCIsIm1pZCIsInNjYWxlIiwicmFkaXgiLCJfbnVtYmVyUmVnRXhwSW5wdXQiLCJfbnVtYmVyUmVnRXhwIiwiX21hcFRvUmFkaXhSZWdFeHAiLCJtYXBUb1JhZGl4IiwiX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCIsInRob3VzYW5kc1NlcGFyYXRvciIsInBhcnRzIiwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMiLCJleHRlbmRPblNlcGFyYXRvcnMiLCJfc2VwYXJhdG9yc0NvdW50IiwiX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMiLCJwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCIsIl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UiLCJhcHBlbmREZXRhaWxzIiwiX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMiLCJiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50Iiwic2VhcmNoRnJvbSIsInNlcGFyYXRvclBvcyIsInNlcGFyYXRvckFyb3VuZEZyb21Qb3MiLCJfZmluZFNlcGFyYXRvckFyb3VuZCIsInNlcGFyYXRvckFyb3VuZFRvUG9zIiwidmFsdWVCZWZvcmVQb3MiLCJ2YWx1ZUFmdGVyUG9zIiwic2VwYXJhdG9yQXRMZWZ0UG9zIiwic2VwYXJhdG9yQXRMZWZ0RW5kUG9zIiwic2VwYXJhdG9yQXRSaWdodFBvcyIsInJlZ2V4cCIsInZhbGlkIiwibnVtYmVyIiwidmFsaWRudW0iLCJmb3JtYXR0ZWQiLCJub3JtYWxpemVaZXJvcyIsIl9ub3JtYWxpemVaZXJvcyIsInBhZEZyYWN0aW9uYWxaZXJvcyIsIl9wYWRGcmFjdGlvbmFsWmVyb3MiLCJzaWduIiwiemVyb3MiLCJzaWduZWQiLCJjdXJyZW50TWFzayIsImNvbXBpbGVkTWFza3MiLCJfYXBwbHlEaXNwYXRjaCIsInByZXZWYWx1ZUJlZm9yZVRhaWwiLCJpbnB1dFZhbHVlIiwiaW5zZXJ0VmFsdWUiLCJfcmF3SW5wdXRWYWx1ZSIsInRhaWxWYWx1ZSIsInByZXZNYXNrIiwicHJldk1hc2tTdGF0ZSIsInByZXZNYXNrQmVmb3JlVGFpbFN0YXRlIiwiZG9EaXNwYXRjaCIsImRpc3BhdGNoIiwiY3VycmVudE1hc2tSZWYiLCJtaSIsImlucHV0cyIsIndlaWdodCIsImkxIiwiaTIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hE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TUFBVHlGLElBQVMsdUVBQUosRUFBSTtFQUM1QjtFQUNDLFNBQU8sSUFBSXlPLFNBQUosQ0FBY2xVLEVBQWQsRUFBa0J5RixJQUFsQixDQUFQO0VBQ0Q7RUFFRDs7RUFDQWpSLEtBQUssQ0FBQzBmLFNBQU4sR0FBa0JBLFNBQWxCO0VBRUE7O0VBQ0ExZixLQUFLLENBQUNnUixNQUFOLEdBQWVBLE1BQWY7RUFDQTs7RUFDQWhSLEtBQUssQ0FBQ21VLGFBQU4sR0FBc0JBLGFBQXRCO0VBQ0E7O0VBQ0FuVSxLQUFLLENBQUNxaUIsVUFBTixHQUFtQkEsVUFBbkI7RUFDQTs7RUFDQXJpQixLQUFLLENBQUNzYyxXQUFOLEdBQW9CQSxXQUFwQjtFQUNBOztFQUNBdGMsS0FBSyxDQUFDc1UsWUFBTixHQUFxQkEsWUFBckI7RUFDQTs7RUFDQXRVLEtBQUssQ0FBQ29VLFVBQU4sR0FBbUJBLFVBQW5CO0VBQ0E7O0VBQ0FwVSxLQUFLLENBQUNrVSxZQUFOLEdBQXFCQSxZQUFyQjtFQUNBOztFQUNBbFUsS0FBSyxDQUFDd1UsY0FBTixHQUF1QkEsY0FBdkI7RUFDQTs7RUFDQXhVLEtBQUssQ0FBQ3VVLGFBQU4sR0FBc0JBLGFBQXRCO0VBQ0E7O0VBQ0F2VSxLQUFLLENBQUMyVSxVQUFOLEdBQW1CQSxVQUFuQjtFQUNBOztFQUNBM1UsS0FBSyxDQUFDc2UsV0FBTixHQUFvQkEsV0FBcEI7RUFDQTs7RUFDQXRlLEtBQUssQ0FBQzZlLGVBQU4sR0FBd0JBLGVBQXhCO0VBRUF0UCxDQUFDLENBQUN2UCxLQUFGLEdBQVVBLEtBQVYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcblxuXG5cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19mb3JtJyksXG4gICAgICB2YWxpZGF0ZUZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0Om5vdCh0ZXh0YXJlYSknKSxcbiAgICAgIG1haWxGaWVsZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI21haWwnKSxcbiAgICAgIHBob25lRmllbGQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZScpLFxuICAgICAgbWFpbFJlZyA9IC9eKFtBLVphLXowLTlfXFwtXFwuXSkrXFxAKFtBLVphLXowLTlfXFwtXFwuXSkrXFwuKFtBLVphLXpdezIsNH0pJC8sXG4gICAgICBwaG9uZVJlZyA9IC9cXCs3XFwoXFxkezN9XFwpXFxkezN9LVxcZHsyfS1cXGR7Mn0vLFxuICAgICAgbmFtZVJlZyA9IC9eKFxcdytcXFMrKSQvLFxuICAgICAgZGVmYXVsdEVycm9yVGV4dCA9ICfQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnLFxuICAgICAgbWFpbEVycm9yVGV4dCA9ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBlLW1haWwg0LDQtNGA0LXRgScsXG4gICAgICBwaG9uZUVycm9yVGV4dCA9ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnO1xuXG5cblxuLy8gUGhvbmUgbWFza1xuXG52YXIgbWFza09wdGlvbnMgPSB7XG4gIG1hc2s6ICcrezd9KDAwMCkwMDAtMDAtMDAnXG59O1xuXG52YXIgbWFzayA9IElNYXNrKHBob25lRmllbGQsIG1hc2tPcHRpb25zKTtcblxuXG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbmxldCByZW1vdmVWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBlcnJvcnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1ibG9jaycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBsZXQgcGFyZW50ID0gZXJyb3JzW2ldLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBlcnJvcnNbaV0ucmVtb3ZlKCk7XG5cbiAgfVxufTtcblxuXG5cbmxldCBnZW5lcmF0ZUVycm9yID0gZnVuY3Rpb24gKHRleHQpIHtcblxuICBsZXQgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBlcnJvci5jbGFzc05hbWUgPSAnZXJyb3ItYmxvY2snO1xuICBlcnJvci5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICBlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xuXG4gIHJldHVybiBlcnJvclxuXG59O1xuXG5cblxubGV0IGNoZWNrRmllbGRzQWxsID0gZnVuY3Rpb24gKCkge1xuXG4gIGxldCBlcnJvckNsYXNzLCBlcnJvckVsZW1lbnRcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRlRmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBlcnJvckNsYXNzID0gdmFsaWRhdGVGaWVsZHNbaV0ucGFyZW50RWxlbWVudDtcbiAgICBlcnJvckVsZW1lbnQgPSBlcnJvckNsYXNzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1ibG9jaycpO1xuXG4gIH1cblxuICBpZighZXJyb3JDbGFzcy5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykgJiYgIWVycm9yRWxlbWVudC5sZW5ndGggKSB7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd2YWxpZGF0ZScpXG4gIH1lbHNle1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmFsaWRhdGUnKVxuICB9XG59O1xuXG5cblxuXG5sZXQgY2hlY2tGaWVsZHNQcmVzZW5jZSA9IGZ1bmN0aW9uICgpIHtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRlRmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBpZiAoIXZhbGlkYXRlRmllbGRzW2ldLnZhbHVlKSB7XG5cbiAgICAgIHZhbGlkYXRlRmllbGRzW2ldLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgIGxldCBlcnJvciA9IGdlbmVyYXRlRXJyb3IoZGVmYXVsdEVycm9yVGV4dCk7XG4gICAgICB2YWxpZGF0ZUZpZWxkc1tpXS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yKTtcblxuICAgIH1cbiAgfVxufTtcblxuXG5cbmxldCBjaGVja0ZpZWxkcyA9IGZ1bmN0aW9uIChyZWcsIGZpZWxkLCBnZW5lcmF0ZVRleHQpIHtcblxuICBsZXQgdmFsdWUgPSBmaWVsZC52YWx1ZSxcbiAgICAgIGNoaWxkID0gZmllbGQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItYmxvY2snKTtcblxuICBpZighcmVnLnRlc3QodmFsdWUpKXtcbiAgICBmaWVsZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG5cbiAgICBsZXQgZXJyb3IgPSBnZW5lcmF0ZUVycm9yKGdlbmVyYXRlVGV4dCk7XG5cbiAgICAoY2hpbGQpID8gY2hpbGQudGV4dENvbnRlbnQgPSBnZW5lcmF0ZVRleHQgOiBmaWVsZC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yKTtcblxuICB9ZWxzZXtcbiAgICBsZXQgZXJyb3IgPSBmaWVsZC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ibG9jaycpO1xuICAgIGlmKGVycm9yKXtcbiAgICAgIGxldCBwYXJlbnQgPSBlcnJvci5wYXJlbnRFbGVtZW50O1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgICBlcnJvci5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHJlbW92ZVZhbGlkYXRpb24oKTtcblxuICBjaGVja0ZpZWxkc1ByZXNlbmNlKCk7XG5cbiAgY2hlY2tGaWVsZHMoXG4gICAgbWFpbFJlZyxcbiAgICBtYWlsRmllbGQsXG4gICAgbWFpbEVycm9yVGV4dFxuICApO1xuXG4gIGNoZWNrRmllbGRzKFxuICAgIHBob25lUmVnLFxuICAgIHBob25lRmllbGQsXG4gICAgcGhvbmVFcnJvclRleHRcbiAgKTtcblxuICBjaGVja0ZpZWxkc0FsbCgpO1xuXG4gIGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCd2YWxpZGF0ZScpKXtcblxuICAgIHZhciBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc01vZGFsJyk7XG5cbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QgPyBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdvcGVuJykgOiBtb2RhbFdpbmRvdy5jbGFzc05hbWUgKz0gJyAnICsgJ29wZW4nO1xuICB9XG5cbn0pO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdGVGaWVsZHMubGVuZ3RoOyBpKyspe1xuICB2YWxpZGF0ZUZpZWxkc1tpXS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLmlkLFxuICAgICAgICBnZW5lcmF0ZVRleHQgPSAnJywgcmVnO1xuXG4gICAgc3dpdGNoIChjdXJyZW50RWxlbWVudCl7XG4gICAgICBjYXNlICdtYWlsJzpcblxuICAgICAgICBnZW5lcmF0ZVRleHQgPSBtYWlsRXJyb3JUZXh0O1xuICAgICAgICByZWcgPSBtYWlsUmVnO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwaG9uZSc6XG5cbiAgICAgICAgZ2VuZXJhdGVUZXh0ID0gcGhvbmVFcnJvclRleHQ7XG4gICAgICAgIHJlZyA9IHBob25lUmVnO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICduYW1lJzpcblxuICAgICAgICBnZW5lcmF0ZVRleHQgPSBkZWZhdWx0RXJyb3JUZXh0O1xuICAgICAgICByZWcgPSBuYW1lUmVnO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuXG4gICAgICAgIGdlbmVyYXRlVGV4dCA9IGRlZmF1bHRFcnJvclRleHQ7XG5cbiAgICB9XG5cblxuICAgIGNoZWNrRmllbGRzKFxuICAgICAgcmVnLFxuICAgICAgdGhpcyxcbiAgICAgIGdlbmVyYXRlVGV4dFxuICAgICk7XG5cbiAgfSk7XG59XG5cblxuIiwiKGZ1bmN0aW9uKCkge1xuICAvKiBPcGVuaW5nIG1vZGFsIHdpbmRvdyBmdW5jdGlvbiAqL1xuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgLyogR2V0IHRyaWdnZXIgZWxlbWVudCAqL1xuICAgIHZhciBtb2RhbFRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqc01vZGFsVHJpZ2dlcicpO1xuXG4gICAgLyogU2V0IG9uY2xpY2sgZXZlbnQgaGFuZGxlciBmb3IgYWxsIHRyaWdnZXIgZWxlbWVudHMgKi9cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbW9kYWxUcmlnZ2VyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBtb2RhbFRyaWdnZXJbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSk7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG5cbiAgICAgICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0ID8gbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnb3BlbicpIDogbW9kYWxXaW5kb3cuY2xhc3NOYW1lICs9ICcgJyArICdvcGVuJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCl7XG4gICAgLyogR2V0IGNsb3NlIGJ1dHRvbiAqL1xuICAgIHZhciBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzTW9kYWxDbG9zZScpO1xuICAgIHZhciBjbG9zZU92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqc092ZXJsYXknKTtcblxuICAgIC8qIFNldCBvbmNsaWNrIGV2ZW50IGhhbmRsZXIgZm9yIGNsb3NlIGJ1dHRvbnMgKi9cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2xvc2VCdXR0b24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNsb3NlQnV0dG9uW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0ID8gbW9kYWxXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpIDogbW9kYWxXaW5kb3cuY2xhc3NOYW1lID0gbW9kYWxXaW5kb3cuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArICdvcGVuJy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBTZXQgb25jbGljayBldmVudCBoYW5kbGVyIGZvciBtb2RhbCBvdmVybGF5ICovXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNsb3NlT3ZlcmxheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2xvc2VPdmVybGF5W2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdCA/IG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKSA6IG1vZGFsV2luZG93LmNsYXNzTmFtZSA9IG1vZGFsV2luZG93LmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyAnb3Blbicuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKiBIYW5kbGluZyBkb21yZWFkeSBldmVudCBJRTkrICovXG4gIGZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gJ2xvYWRpbmcnKXtcbiAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxuICB9XG5cbiAgLyogVHJpZ2dlcmluZyBtb2RhbCB3aW5kb3cgZnVuY3Rpb24gYWZ0ZXIgZG9tIHJlYWR5ICovXG4gIHJlYWR5KG9wZW5Nb2RhbCk7XG4gIHJlYWR5KGNsb3NlTW9kYWwpO1xufSgpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdjb21wb25lbnRzL2Zvcm0vZm9ybSc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvcG9wdXAvcG9wdXAnO1xuXG5cblxuLypcbiAgICBUaGlzIGZpbGUgY2FuIGJlIHVzZWQgYXMgZW50cnkgcG9pbnQgZm9yIHdlYnBhY2shXG4gKi9cbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gJycucmVwZWF0IHx8IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG51bWJlciBvZiByZXBldGl0aW9ucycpO1xuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KSB7XG4gIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhhdCkpO1xuICB2YXIgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGg7XG4gIHZhciBmaWxsU3RyID0gZmlsbFN0cmluZyA9PT0gdW5kZWZpbmVkID8gJyAnIDogU3RyaW5nKGZpbGxTdHJpbmcpO1xuICB2YXIgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgdmFyIGZpbGxMZW4sIHN0cmluZ0ZpbGxlcjtcbiAgaWYgKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGggfHwgZmlsbFN0ciA9PSAnJykgcmV0dXJuIFM7XG4gIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGg7XG4gIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgaWYgKHN0cmluZ0ZpbGxlci5sZW5ndGggPiBmaWxsTGVuKSBzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG4gIHJldHVybiBsZWZ0ID8gc3RyaW5nRmlsbGVyICsgUyA6IFMgKyBzdHJpbmdGaWxsZXI7XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgd2luZG93Lk1hdGggPT0gTWF0aCA/IHdpbmRvd1xuICA6IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMjgwXG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZXItYWdlbnQnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdW5zYWZlLXJlZ2V4XG5tb2R1bGUuZXhwb3J0cyA9IC9WZXJzaW9uXFwvMTBcXC5cXGQrKFxcLlxcZCspPyggTW9iaWxlXFwvXFx3Kyk/IFNhZmFyaVxcLy8udGVzdCh1c2VyQWdlbnQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGV4aXN0ID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gZXhpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50JykoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBoaWRlKGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMC4xJyxcbiAgbW9kZTogcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsInZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFdlYWtNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJykuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QobmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKFdlYWtNYXApKTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRlJyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIFdlYWtNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJykuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBoaWRlKGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcobmF0aXZlRnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoJ3RvU3RyaW5nJyk7XG5cbnJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKSgnaW5zcGVjdFNvdXJjZScsIGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gbmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbn0pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGhpZGUodmFsdWUsICduYW1lJywga2V5KTtcbiAgICBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSkuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgaGlkZShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihsZW5ndGgsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBSZWZsZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLlJlZmxlY3Q7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgaGlkZShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxTdHJpbmdQYWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXBhZCcpO1xudmFyIFdFQktJVF9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Via2l0LXN0cmluZy1wYWQtYnVnJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnBhZEVuZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnBhZGVuZFxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogV0VCS0lUX0JVRyB9LCB7XG4gIHBhZEVuZDogZnVuY3Rpb24gcGFkRW5kKG1heExlbmd0aCAvKiAsIGZpbGxTdHJpbmcgPSAnICcgKi8pIHtcbiAgICByZXR1cm4gaW50ZXJuYWxTdHJpbmdQYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgZmFsc2UpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbFN0cmluZ1BhZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcGFkJyk7XG52YXIgV0VCS0lUX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWJraXQtc3RyaW5nLXBhZC1idWcnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5wYWRzdGFydFxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogV0VCS0lUX0JVRyB9LCB7XG4gIHBhZFN0YXJ0OiBmdW5jdGlvbiBwYWRTdGFydChtYXhMZW5ndGggLyogLCBmaWxsU3RyaW5nID0gJyAnICovKSB7XG4gICAgcmV0dXJuIGludGVybmFsU3RyaW5nUGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRydWUpO1xuICB9XG59KTtcbiIsIi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUgfSwge1xuICByZXBlYXQ6IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jylcbn0pO1xuIiwiLy8gQGZsb3dcclxuXHJcblxyXG4vKiogQ2hlY2tzIGlmIHZhbHVlIGlzIHN0cmluZyAqL1xyXG5leHBvcnRcclxuZnVuY3Rpb24gaXNTdHJpbmcgKHN0cjogbWl4ZWQpOiBib29sZWFuICVjaGVja3Mge1xyXG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gIERpcmVjdGlvblxyXG4gIEBwcm9wIHtzdHJpbmd9IE5PTkVcclxuICBAcHJvcCB7c3RyaW5nfSBMRUZUXHJcbiAgQHByb3Age3N0cmluZ30gRk9SQ0VfTEVGVFxyXG4gIEBwcm9wIHtzdHJpbmd9IFJJR0hUXHJcbiAgQHByb3Age3N0cmluZ30gRk9SQ0VfUklHSFRcclxuKi9cclxuZXhwb3J0XHJcbmNvbnN0IERJUkVDVElPTiA9IHtcclxuICBOT05FOiAnTk9ORScsXHJcbiAgTEVGVDogJ0xFRlQnLFxyXG4gIEZPUkNFX0xFRlQ6ICdGT1JDRV9MRUZUJyxcclxuICBSSUdIVDogJ1JJR0hUJyxcclxuICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJyxcclxufVxyXG4vKipcclxuICBEaXJlY3Rpb25cclxuICBAZW51bSB7c3RyaW5nfVxyXG4qL1xyXG5leHBvcnRcclxudHlwZSBEaXJlY3Rpb24gPSAkVmFsdWVzPHR5cGVvZiBESVJFQ1RJT04+O1xyXG5cclxuLyoqIFJldHVybnMgbmV4dCBjaGFyIGluZGV4IGluIGRpcmVjdGlvbiAqL1xyXG5leHBvcnRcclxuZnVuY3Rpb24gaW5kZXhJbkRpcmVjdGlvbiAocG9zOiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uKTogbnVtYmVyIHtcclxuICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkgLS1wb3M7XHJcbiAgcmV0dXJuIHBvcztcclxufVxyXG5cclxuLyoqIFJldHVybnMgbmV4dCBjaGFyIHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xyXG5leHBvcnRcclxuZnVuY3Rpb24gcG9zSW5EaXJlY3Rpb24gKHBvczogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbik6IG51bWJlciB7XHJcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XHJcbiAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxyXG4gICAgICByZXR1cm4gLS1wb3M7XHJcbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxyXG4gICAgICByZXR1cm4gKytwb3M7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gcG9zO1xyXG4gIH1cclxufVxyXG5cclxuLyoqICovXHJcbmV4cG9ydFxyXG5mdW5jdGlvbiBmb3JjZURpcmVjdGlvbiAoZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiBEaXJlY3Rpb24ge1xyXG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX0xFRlQ7XHJcbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9SSUdIVDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgfVxyXG59XHJcblxyXG4vKiogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY29udHJvbCBjaGFycyAqL1xyXG5leHBvcnRcclxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwIChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXS9cXFxcXSkvZywgJ1xcXFwkMScpO1xyXG59XHJcblxyXG5cclxuLy8gY2xvbmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Vwb2JlcmV6a2luL2Zhc3QtZGVlcC1lcXVhbCB3aXRoIHNtYWxsIGNoYW5nZXNcclxuZXhwb3J0XHJcbmZ1bmN0aW9uIG9iamVjdEluY2x1ZGVzIChiOiBhbnksIGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgdmFyIGFyckEgPSBBcnJheS5pc0FycmF5KGEpXHJcbiAgICAsIGFyckIgPSBBcnJheS5pc0FycmF5KGIpXHJcbiAgICAsIGk7XHJcblxyXG4gIGlmIChhcnJBICYmIGFyckIpIHtcclxuICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspXHJcbiAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcclxuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlXHJcbiAgICAgICwgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcclxuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xyXG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwXHJcbiAgICAgICwgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XHJcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcclxuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgLy8gaWYgKGtleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKylcclxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKylcclxuICAgICAgaWYoIW9iamVjdEluY2x1ZGVzKGJba2V5c1tpXV0sIGFba2V5c1tpXV0pKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmV4cG9ydFxyXG5jb25zdCBnOiBhbnkgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgfHxcclxuICB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsIHx8XHJcbiAgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8XHJcbiAge307XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cclxuXHJcbi8qKiBTZWxlY3Rpb24gcmFuZ2UgKi9cclxuZXhwb3J0XHJcbnR5cGUgU2VsZWN0aW9uID0ge1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn07XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB7dHlwZSBEaXJlY3Rpb24sIHR5cGUgU2VsZWN0aW9uLCBESVJFQ1RJT059IGZyb20gJy4vdXRpbHMuanMnO1xyXG5cclxuXHJcbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIEFjdGlvbkRldGFpbHMge1xyXG4gIC8qKiBDdXJyZW50IGlucHV0IHZhbHVlICovXHJcbiAgdmFsdWU6IHN0cmluZztcclxuICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cclxuICBjdXJzb3JQb3M6IG51bWJlcjtcclxuICAvKiogT2xkIGlucHV0IHZhbHVlICovXHJcbiAgb2xkVmFsdWU6IHN0cmluZztcclxuICAvKiogT2xkIHNlbGVjdGlvbiAqL1xyXG4gIG9sZFNlbGVjdGlvbjogU2VsZWN0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgY3Vyc29yUG9zOiBudW1iZXIsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nLFxyXG4gICAgb2xkU2VsZWN0aW9uOiBTZWxlY3Rpb25cclxuICApIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xyXG4gICAgdGhpcy5vbGRTZWxlY3Rpb24gPSBvbGRTZWxlY3Rpb247XHJcblxyXG4gICAgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcclxuICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XHJcbiAgICAgIC0tdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFN0YXJ0IGNoYW5naW5nIHBvc2l0aW9uXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGdldCBzdGFydENoYW5nZVBvcyAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmN1cnNvclBvcywgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBJbnNlcnRlZCBzeW1ib2xzIGNvdW50XHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGdldCBpbnNlcnRlZENvdW50ICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgaW5zZXJ0ZWQgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5pbnNlcnRlZENvdW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgUmVtb3ZlZCBzeW1ib2xzIGNvdW50XHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGdldCByZW1vdmVkQ291bnQgKCk6IG51bWJlciB7XHJcbiAgICAvLyBNYXRoLm1heCBmb3Igb3Bwb3NpdGUgb3BlcmF0aW9uXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoKHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MpIHx8XHJcbiAgICAgIC8vIGZvciBEZWxldGVcclxuICAgICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFJlbW92ZWQgc3ltYm9sc1xyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgcmVtb3ZlZCAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9sZFZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLnJlbW92ZWRDb3VudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFVuY2hhbmdlZCBoZWFkIHN5bWJvbHNcclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZ2V0IGhlYWQgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5zdGFydENoYW5nZVBvcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFVuY2hhbmdlZCB0YWlsIHN5bWJvbHNcclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZ2V0IHRhaWwgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFJlbW92ZSBkaXJlY3Rpb25cclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZ2V0IHJlbW92ZURpcmVjdGlvbiAoKTogRGlyZWN0aW9uIHtcclxuICAgIGlmICghdGhpcy5yZW1vdmVkQ291bnQgfHwgdGhpcy5pbnNlcnRlZENvdW50KSByZXR1cm4gRElSRUNUSU9OLk5PTkU7XHJcblxyXG4gICAgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0IG9yIGlmIHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxyXG4gICAgcmV0dXJuICh0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMuY3Vyc29yUG9zIHx8IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID09PSB0aGlzLmN1cnNvclBvcykgP1xyXG4gICAgICBESVJFQ1RJT04uUklHSFQgOlxyXG4gICAgICBESVJFQ1RJT04uTEVGVDtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuXHJcblxyXG4vKipcclxuICBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIG1vZGVsIHZhbHVlXHJcbiAgQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzXVxyXG4gIEBwYXJhbSB7c3RyaW5nfSBbZGV0YWlscy5pbnNlcnRlZF0gLSBJbnNlcnRlZCBzeW1ib2xzXHJcbiAgQHBhcmFtIHtib29sZWFufSBbZGV0YWlscy5za2lwXSAtIENhbiBza2lwIGNoYXJzXHJcbiAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnJlbW92ZUNvdW50XSAtIFJlbW92ZWQgc3ltYm9scyBjb3VudFxyXG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy50YWlsU2hpZnRdIC0gQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWxcclxuKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgQ2hhbmdlRGV0YWlscyB7XHJcbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgKi9cclxuICBpbnNlcnRlZDogc3RyaW5nO1xyXG4gIC8qKiBDYW4gc2tpcCBjaGFycyAqL1xyXG4gIHNraXA6IGJvb2xlYW47XHJcbiAgLyoqIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsICovXHJcbiAgdGFpbFNoaWZ0OiBudW1iZXI7XHJcbiAgLyoqIFJhdyBpbnNlcnRlZCBpcyB1c2VkIGJ5IGR5bmFtaWMgbWFzayAqL1xyXG4gIHJhd0luc2VydGVkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChkZXRhaWxzPzoge1xyXG4gICAgaW5zZXJ0ZWQ/OiAkUHJvcGVydHlUeXBlPENoYW5nZURldGFpbHMsICdpbnNlcnRlZCc+LFxyXG4gICAgcmF3SW5zZXJ0ZWQ/OiAkUHJvcGVydHlUeXBlPENoYW5nZURldGFpbHMsICdyYXdJbnNlcnRlZCc+LFxyXG4gICAgc2tpcD86ICRQcm9wZXJ0eVR5cGU8Q2hhbmdlRGV0YWlscywgJ3NraXAnPixcclxuICAgIHRhaWxTaGlmdD86ICRQcm9wZXJ0eVR5cGU8Q2hhbmdlRGV0YWlscywgJ3RhaWxTaGlmdCc+LFxyXG4gIH0pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICBpbnNlcnRlZDogJycsXHJcbiAgICAgIHJhd0luc2VydGVkOiAnJyxcclxuICAgICAgc2tpcDogZmFsc2UsXHJcbiAgICAgIHRhaWxTaGlmdDogMCxcclxuICAgIH0sIGRldGFpbHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBBZ2dyZWdhdGUgY2hhbmdlc1xyXG4gICAgQHJldHVybnMge0NoYW5nZURldGFpbHN9IGB0aGlzYFxyXG4gICovXHJcbiAgYWdncmVnYXRlIChkZXRhaWxzOiBDaGFuZ2VEZXRhaWxzKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICB0aGlzLnJhd0luc2VydGVkICs9IGRldGFpbHMucmF3SW5zZXJ0ZWQ7XHJcbiAgICB0aGlzLnNraXAgPSB0aGlzLnNraXAgfHwgZGV0YWlscy5za2lwO1xyXG4gICAgdGhpcy5pbnNlcnRlZCArPSBkZXRhaWxzLmluc2VydGVkO1xyXG4gICAgdGhpcy50YWlsU2hpZnQgKz0gZGV0YWlscy50YWlsU2hpZnQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBUb3RhbCBvZmZzZXQgY29uc2lkZXJpbmcgYWxsIGNoYW5nZXMgKi9cclxuICBnZXQgb2Zmc2V0ICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudGFpbFNoaWZ0ICsgdGhpcy5pbnNlcnRlZC5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB0eXBlIHsgVGFpbERldGFpbHMsIEFwcGVuZFRhaWwgfSBmcm9tICcuL3RhaWwtZGV0YWlscy5qcyc7XHJcbmltcG9ydCB0eXBlIENoYW5nZURldGFpbHMgZnJvbSAnLi9jaGFuZ2UtZGV0YWlscy5qcyc7XHJcblxyXG5cclxudHlwZSBDb250aW51b3VzVGFpbFN0YXRlID0ge1xyXG4gIHZhbHVlOiAkUHJvcGVydHlUeXBlPENvbnRpbnVvdXNUYWlsRGV0YWlscywgJ3ZhbHVlJz4sXHJcbiAgZnJvbTogJFByb3BlcnR5VHlwZTxDb250aW51b3VzVGFpbERldGFpbHMsICdmcm9tJz4sXHJcbiAgc3RvcD86ICRQcm9wZXJ0eVR5cGU8Q29udGludW91c1RhaWxEZXRhaWxzLCAnc3RvcCc+LFxyXG59O1xyXG5cclxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBDb250aW51b3VzVGFpbERldGFpbHMgaW1wbGVtZW50cyBUYWlsRGV0YWlscyB7XHJcbiAgLyoqIFRhaWwgdmFsdWUgYXMgc3RyaW5nICovXHJcbiAgdmFsdWU6IHN0cmluZztcclxuICAvKiogVGFpbCBzdGFydCBwb3NpdGlvbiAqL1xyXG4gIGZyb206IG51bWJlcjtcclxuICAvKiogU3RhcnQgcG9zaXRpb24gKi9cclxuICBzdG9wOiA/bnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWU/OiBzdHJpbmc9JycsIGZyb20/OiBudW1iZXI9MCwgc3RvcD86IG51bWJlcikge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5mcm9tID0gZnJvbTtcclxuICAgIHRoaXMuc3RvcCA9IHN0b3A7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZyAoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudmFsdWU7IH1cclxuXHJcbiAgZXh0ZW5kICh0YWlsOiBzdHJpbmcgfCBUYWlsRGV0YWlscyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSArPSBTdHJpbmcodGFpbCk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRUbyAobWFza2VkOiBBcHBlbmRUYWlsKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICByZXR1cm4gbWFza2VkLmFwcGVuZCh0aGlzLnRvU3RyaW5nKCksIHsgdGFpbDogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIGdldCBzdGF0ZSAoKTogQ29udGludW91c1RhaWxTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgZnJvbTogdGhpcy5mcm9tLFxyXG4gICAgICBzdG9wOiB0aGlzLnN0b3AsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXRlIChzdGF0ZTogQ29udGludW91c1RhaWxTdGF0ZSkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBzaGlmdEJlZm9yZSAocG9zOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMudmFsdWUubGVuZ3RoKSByZXR1cm4gJyc7XHJcblxyXG4gICAgY29uc3Qgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVswXTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDEpO1xyXG4gICAgcmV0dXJuIHNoaWZ0Q2hhcjtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XHJcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XHJcbmltcG9ydCB7IHR5cGUgRGlyZWN0aW9uLCBESVJFQ1RJT04sIGlzU3RyaW5nIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XHJcbmltcG9ydCB7IHR5cGUgVGFpbERldGFpbHMgfSBmcm9tICcuLi9jb3JlL3RhaWwtZGV0YWlscy5qcyc7XHJcblxyXG5cclxuLyoqIFN1cHBvcnRlZCBtYXNrIHR5cGUgKi9cclxuZXhwb3J0XHJcbnR5cGUgTWFzayA9XHJcbiAgc3RyaW5nIHxcclxuICBTdHJpbmcgfFxyXG4gIFJlZ0V4cCB8XHJcbiAgQ2xhc3M8TnVtYmVyPiB8XHJcbiAgQ2xhc3M8RGF0ZT4gfFxyXG4gIEFycmF5PGFueT4gfFxyXG4gICRQcm9wZXJ0eVR5cGU8TWFza2VkPCo+LCAndmFsaWRhdGUnPiB8XHJcbiAgTWFza2VkPCo+IHxcclxuICBDbGFzczxNYXNrZWQ8Kj4+O1xyXG5cclxuZXhwb3J0XHJcbnR5cGUgTWFza2VkU3RhdGUgPSB7fFxyXG4gIF92YWx1ZTogc3RyaW5nLFxyXG58fTtcclxuXHJcbi8qKiBBcHBlbmQgZmxhZ3MgKi9cclxuZXhwb3J0XHJcbnR5cGUgQXBwZW5kRmxhZ3MgPSB7XHJcbiAgaW5wdXQ/OiBib29sZWFuLFxyXG4gIHRhaWw/OiBib29sZWFuLFxyXG4gIHJhdz86IGJvb2xlYW5cclxufTtcclxuXHJcbi8qKiBFeHRyYWN0IGZsYWdzICovXHJcbmV4cG9ydFxyXG50eXBlIEV4dHJhY3RGbGFncyA9IHtcclxuICByYXc/OiBib29sZWFuXHJcbn07XHJcblxyXG5leHBvcnRcclxudHlwZSBNYXNrZWRPcHRpb25zPE1hc2tUeXBlPiA9IHtcclxuICBtYXNrOiAkUHJvcGVydHlUeXBlPE1hc2tlZDxNYXNrVHlwZT4sICdtYXNrJz4sXHJcbiAgcGFyZW50PzogJFByb3BlcnR5VHlwZTxNYXNrZWQ8Kj4sICdwYXJlbnQnPixcclxuICBwcmVwYXJlPzogJFByb3BlcnR5VHlwZTxNYXNrZWQ8TWFza1R5cGU+LCAncHJlcGFyZSc+LFxyXG4gIHZhbGlkYXRlPzogJFByb3BlcnR5VHlwZTxNYXNrZWQ8TWFza1R5cGU+LCAndmFsaWRhdGUnPixcclxuICBjb21taXQ/OiAkUHJvcGVydHlUeXBlPE1hc2tlZDxNYXNrVHlwZT4sICdjb21taXQnPixcclxuICBvdmVyd3JpdGU/OiAkUHJvcGVydHlUeXBlPE1hc2tlZDxNYXNrVHlwZT4sICdvdmVyd3JpdGUnPixcclxufTtcclxuXHJcblxyXG4vKiogUHJvdmlkZXMgY29tbW9uIG1hc2tpbmcgc3R1ZmYgKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgTWFza2VkPE1hc2tUeXBlPiB7XHJcbiAgc3RhdGljIERFRkFVTFRTOiBhbnk7IC8vICRTaGFwZTxNYXNrZWRPcHRpb25zPjsgVE9ETyBhZnRlciBmaXggaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3NzNcclxuXHJcbiAgLyoqIEB0eXBlIHtNYXNrfSAqL1xyXG4gIG1hc2s6IE1hc2tUeXBlO1xyXG4gIC8qKiAqLyAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXHJcbiAgcGFyZW50OiA/TWFza2VkPCo+O1xyXG4gIC8qKiBUcmFuc2Zvcm1zIHZhbHVlIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmcgKi9cclxuICBwcmVwYXJlOiAoc3RyaW5nLCBNYXNrZWQ8TWFza1R5cGU+LCBBcHBlbmRGbGFncykgPT4gc3RyaW5nO1xyXG4gIC8qKiBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZSAqL1xyXG4gIHZhbGlkYXRlOiAoc3RyaW5nLCBNYXNrZWQ8TWFza1R5cGU+LCBBcHBlbmRGbGFncykgPT4gYm9vbGVhbjtcclxuICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXHJcbiAgY29tbWl0OiAoc3RyaW5nLCBNYXNrZWQ8TWFza1R5cGU+KSA9PiB2b2lkO1xyXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xyXG4gIG92ZXJ3cml0ZTogP2Jvb2xlYW47XHJcbiAgLyoqICovXHJcbiAgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcclxuICBfdmFsdWU6IHN0cmluZztcclxuICBfcmVmcmVzaGluZzogYm9vbGVhbjtcclxuICBfYmVmb3JlVGFpbFN0YXRlOiA/TWFza2VkU3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChvcHRzOiB7W3N0cmluZ106IGFueX0pIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcbiAgICB0aGlzLl91cGRhdGUob3B0cyk7XHJcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgYW5kIGFwcGxpZXMgbmV3IG9wdGlvbnMgKi9cclxuICB1cGRhdGVPcHRpb25zIChvcHRzOiB7W3N0cmluZ106IGFueX0pIHtcclxuICAgIGlmICghT2JqZWN0LmtleXMob3B0cykubGVuZ3RoKSByZXR1cm47XHJcbiAgICB0aGlzLndpdGhWYWx1ZVJlZnJlc2godGhpcy5fdXBkYXRlLmJpbmQodGhpcywgb3B0cykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBTZXRzIG5ldyBvcHRpb25zXHJcbiAgICBAcHJvdGVjdGVkXHJcbiAgKi9cclxuICBfdXBkYXRlIChvcHRzOiB7W3N0cmluZ106IGFueX0pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKiogTWFzayBzdGF0ZSAqL1xyXG4gIGdldCBzdGF0ZSAoKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF92YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXQgc3RhdGUgKHN0YXRlOiBhbnkpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gc3RhdGUuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc2V0cyB2YWx1ZSAqL1xyXG4gIHJlc2V0ICgpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBnZXQgdmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUgKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVzb2x2ZSBuZXcgdmFsdWUgKi9cclxuICByZXNvbHZlICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7aW5wdXQ6IHRydWV9LCAnJyk7XHJcbiAgICB0aGlzLmRvQ29tbWl0KCk7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIGdldCB1bm1hc2tlZFZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdW5tYXNrZWRWYWx1ZSAodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5hcHBlbmQodmFsdWUsIHt9LCAnJyk7XHJcbiAgICB0aGlzLmRvQ29tbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBnZXQgdHlwZWRWYWx1ZSAoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnVubWFza2VkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdHlwZWRWYWx1ZSAodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogVmFsdWUgdGhhdCBpbmNsdWRlcyByYXcgdXNlciBpbnB1dCAqL1xyXG4gIGdldCByYXdJbnB1dFZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZXh0cmFjdElucHV0KDAsIHRoaXMudmFsdWUubGVuZ3RoLCB7cmF3OiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBzZXQgcmF3SW5wdXRWYWx1ZSAodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5hcHBlbmQodmFsdWUsIHtyYXc6IHRydWV9LCAnJyk7XHJcbiAgICB0aGlzLmRvQ29tbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBnZXQgaXNDb21wbGV0ZSAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBGaW5kcyBuZWFyZXN0IGlucHV0IHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xyXG4gIG5lYXJlc3RJbnB1dFBvcyAoY3Vyc29yUG9zOiBudW1iZXIsIGRpcmVjdGlvbj86IERpcmVjdGlvbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gY3Vyc29yUG9zO1xyXG4gIH1cclxuXHJcbiAgLyoqIEV4dHJhY3RzIHZhbHVlIGluIHJhbmdlIGNvbnNpZGVyaW5nIGZsYWdzICovXHJcbiAgZXh0cmFjdElucHV0IChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoLCBmbGFncz86IEV4dHJhY3RGbGFncyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XHJcbiAgfVxyXG5cclxuICAvKiogRXh0cmFjdHMgdGFpbCBpbiByYW5nZSAqL1xyXG4gIGV4dHJhY3RUYWlsIChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoKTogVGFpbERldGFpbHMge1xyXG4gICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MpLCBmcm9tUG9zKTtcclxuICB9XHJcblxyXG4gIC8qKiBTdG9yZXMgc3RhdGUgYmVmb3JlIHRhaWwgKi9cclxuICBfc3RvcmVCZWZvcmVUYWlsU3RhdGUgKCkge1xyXG4gICAgdGhpcy5fYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKiBSZXN0b3JlcyBzdGF0ZSBiZWZvcmUgdGFpbCAqL1xyXG4gIF9yZXN0b3JlQmVmb3JlVGFpbFN0YXRlICgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9iZWZvcmVUYWlsU3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKiogUmVzZXRzIHN0YXRlIGJlZm9yZSB0YWlsICovXHJcbiAgX3Jlc2V0QmVmb3JlVGFpbFN0YXRlICgpIHtcclxuICAgIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKiogQXBwZW5kcyB0YWlsICovXHJcbiAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xyXG4gIGFwcGVuZFRhaWwgKHRhaWw6IHN0cmluZyB8IFRhaWxEZXRhaWxzKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XHJcblxyXG4gICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiogQXBwZW5kcyBjaGFyICovXHJcbiAgX2FwcGVuZENoYXJSYXcgKGNoOiBzdHJpbmcsIGZsYWdzOiBBcHBlbmRGbGFncz17fSk6IENoYW5nZURldGFpbHMge1xyXG4gICAgdGhpcy5fdmFsdWUgKz0gY2g7XHJcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xyXG4gICAgICBpbnNlcnRlZDogY2gsXHJcbiAgICAgIHJhd0luc2VydGVkOiBjaCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFwcGVuZHMgY2hhciAqL1xyXG4gIF9hcHBlbmRDaGFyIChjaDogc3RyaW5nLCBmbGFnczogQXBwZW5kRmxhZ3M9e30sIGNoZWNrVGFpbD86IFRhaWxEZXRhaWxzKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBjaCA9IHRoaXMuZG9QcmVwYXJlKGNoLCBmbGFncyk7XHJcbiAgICBpZiAoIWNoKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHJcbiAgICBjb25zdCBjb25zaXN0ZW50U3RhdGU6IE1hc2tlZFN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBjb25zaXN0ZW50VGFpbDtcclxuICAgIGNvbnN0IGRldGFpbHM6IENoYW5nZURldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XHJcblxyXG4gICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQpIHtcclxuICAgICAgbGV0IGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoYXBwZW5kZWQgJiYgY2hlY2tUYWlsICE9IG51bGwpIHtcclxuICAgICAgICAvLyB2YWxpZGF0aW9uIG9rLCBjaGVjayB0YWlsXHJcbiAgICAgICAgdGhpcy5fc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5vdmVyd3JpdGUpIHtcclxuICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xyXG4gICAgICAgICAgY2hlY2tUYWlsLnNoaWZ0QmVmb3JlKHRoaXMudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XHJcblxyXG4gICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQgPT09IGNoZWNrVGFpbC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBpZiBvaywgcm9sbGJhY2sgc3RhdGUgYWZ0ZXIgdGFpbFxyXG4gICAgICAgIGlmIChhcHBlbmRlZCAmJiB0YWlsRGV0YWlscy5pbnNlcnRlZCkgdGhpcy5fcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXZlcnQgYWxsIGlmIHNvbWV0aGluZyB3ZW50IHdyb25nXHJcbiAgICAgIGlmICghYXBwZW5kZWQpIHtcclxuICAgICAgICBkZXRhaWxzLnJhd0luc2VydGVkID0gZGV0YWlscy5pbnNlcnRlZCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XHJcbiAgICAgICAgaWYgKGNoZWNrVGFpbCAmJiBjb25zaXN0ZW50VGFpbCkgY2hlY2tUYWlsLnN0YXRlID0gY29uc2lzdGVudFRhaWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFwcGVuZHMgc3ltYm9scyBjb25zaWRlcmluZyBmbGFncyAqL1xyXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcclxuICBhcHBlbmQgKHN0cjogc3RyaW5nLCBmbGFncz86IEFwcGVuZEZsYWdzLCB0YWlsPzogc3RyaW5nIHwgVGFpbERldGFpbHMpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG4gICAgY29uc3QgY2hlY2tUYWlsID0gdGFpbCAmJiAoaXNTdHJpbmcodGFpbCkgPyBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSkgOiB0YWlsKTtcclxuXHJcbiAgICBmb3IgKGxldCBjaT0wOyBjaTxzdHIubGVuZ3RoOyArK2NpKSB7XHJcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXIoc3RyW2NpXSwgZmxhZ3MsIGNoZWNrVGFpbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFwcGVuZCB0YWlsIGJ1dCBhZ2dyZWdhdGUgb25seSB0YWlsU2hpZnRcclxuICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9zdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKS50YWlsU2hpZnQ7XHJcbiAgICAgIC8vIFRPRE8gaXQncyBhIGdvb2QgaWRlYSB0byBjbGVhciBzdGF0ZSBhZnRlciBhcHBlbmRpbmcgZW5kc1xyXG4gICAgICAvLyBidXQgaXQgY2F1c2VzIGJ1Z3Mgd2hlbiBvbmUgYXBwZW5kIGNhbGxzIGFub3RoZXIgKHdoZW4gZHluYW1pYyBkaXNwYXRjaCBzZXQgcmF3SW5wdXRWYWx1ZSlcclxuICAgICAgLy8gdGhpcy5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIHJlbW92ZSAoZnJvbVBvcz86IG51bWJlcj0wLCB0b1Bvcz86IG51bWJlcj10aGlzLnZhbHVlLmxlbmd0aCk6IENoYW5nZURldGFpbHMge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XHJcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBDYWxscyBmdW5jdGlvbiBhbmQgcmVhcHBsaWVzIGN1cnJlbnQgdmFsdWUgKi9cclxuICB3aXRoVmFsdWVSZWZyZXNoPFQ+KGZuOiAoKSA9PiBUKTogVCB7XHJcbiAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4oKTtcclxuICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHVubWFza2VkID0gdGhpcy51bm1hc2tlZFZhbHVlO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IGZuKCk7XHJcblxyXG4gICAgLy8gdHJ5IHRvIHVwZGF0ZSB3aXRoIHJhdyB2YWx1ZSBmaXJzdCB0byBrZWVwIGZpeGVkIGNoYXJzXHJcbiAgICBpZiAodGhpcy5yZXNvbHZlKHZhbHVlKSAhPT0gdmFsdWUpIHtcclxuICAgICAgLy8gb3IgZmFsbGJhY2sgdG8gdW5tYXNrZWRcclxuICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlIHRoaXMuX3JlZnJlc2hpbmc7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBQcmVwYXJlcyBzdHJpbmcgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZ1xyXG4gICAgQHByb3RlY3RlZFxyXG4gICovXHJcbiAgZG9QcmVwYXJlIChzdHI6IHN0cmluZywgZmxhZ3M6IEFwcGVuZEZsYWdzPXt9KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnByZXBhcmUgP1xyXG4gICAgICB0aGlzLnByZXBhcmUoc3RyLCB0aGlzLCBmbGFncykgOlxyXG4gICAgICBzdHI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlXHJcbiAgICBAcHJvdGVjdGVkXHJcbiAgKi9cclxuICBkb1ZhbGlkYXRlIChmbGFnczogQXBwZW5kRmxhZ3MpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMudmFsaWRhdGUgfHwgdGhpcy52YWxpZGF0ZSh0aGlzLnZhbHVlLCB0aGlzLCBmbGFncykpICYmXHJcbiAgICAgICghdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuZG9WYWxpZGF0ZShmbGFncykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuICAgIEBwcm90ZWN0ZWRcclxuICAqL1xyXG4gIGRvQ29tbWl0ICgpIHtcclxuICAgIGlmICh0aGlzLmNvbW1pdCkgdGhpcy5jb21taXQodGhpcy52YWx1ZSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBzcGxpY2UgKHN0YXJ0OiBudW1iZXIsIGRlbGV0ZUNvdW50OiBudW1iZXIsIGluc2VydGVkOiBzdHJpbmcsIHJlbW92ZURpcmVjdGlvbjogRGlyZWN0aW9uKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBjb25zdCB0YWlsUG9zOiBudW1iZXIgPSBzdGFydCArIGRlbGV0ZUNvdW50O1xyXG4gICAgY29uc3QgdGFpbDogVGFpbERldGFpbHMgPSB0aGlzLmV4dHJhY3RUYWlsKHRhaWxQb3MpO1xyXG5cclxuICAgIGxldCBzdGFydENoYW5nZVBvczogbnVtYmVyID0gdGhpcy5uZWFyZXN0SW5wdXRQb3Moc3RhcnQsIHJlbW92ZURpcmVjdGlvbik7XHJcbiAgICBjb25zdCBjaGFuZ2VEZXRhaWxzOiBDaGFuZ2VEZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoe1xyXG4gICAgICB0YWlsU2hpZnQ6IHN0YXJ0Q2hhbmdlUG9zIC0gc3RhcnQgIC8vIGFkanVzdCB0YWlsU2hpZnQgaWYgc3RhcnQgd2FzIGFsaWduZWRcclxuICAgIH0pLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpXHJcbiAgICAgIC5hZ2dyZWdhdGUodGhpcy5hcHBlbmQoaW5zZXJ0ZWQsIHtpbnB1dDogdHJ1ZX0sIHRhaWwpKTtcclxuXHJcbiAgICByZXR1cm4gY2hhbmdlRGV0YWlscztcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IHtnLCBpc1N0cmluZ30gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XHJcbmltcG9ydCB0eXBlIE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xyXG5pbXBvcnQge3R5cGUgTWFza30gZnJvbSAnLi9iYXNlLmpzJztcclxuXHJcblxyXG4vKiogR2V0IE1hc2tlZCBjbGFzcyBieSBtYXNrIHR5cGUgKi9cclxuZXhwb3J0XHJcbmZ1bmN0aW9uIG1hc2tlZENsYXNzIChtYXNrOiBNYXNrKTogQ2xhc3M8TWFza2VkPCo+PiB7XHJcbiAgaWYgKG1hc2sgPT0gbnVsbCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXNrIHByb3BlcnR5IHNob3VsZCBiZSBkZWZpbmVkJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIGcuSU1hc2suTWFza2VkUmVnRXhwO1xyXG4gIGlmIChpc1N0cmluZyhtYXNrKSkgcmV0dXJuIGcuSU1hc2suTWFza2VkUGF0dGVybjtcclxuICBpZiAobWFzayBpbnN0YW5jZW9mIERhdGUgfHwgbWFzayA9PT0gRGF0ZSkgcmV0dXJuIGcuSU1hc2suTWFza2VkRGF0ZTtcclxuICBpZiAobWFzayBpbnN0YW5jZW9mIE51bWJlciB8fCB0eXBlb2YgbWFzayA9PT0gJ251bWJlcicgfHwgbWFzayA9PT0gTnVtYmVyKSByZXR1cm4gZy5JTWFzay5NYXNrZWROdW1iZXI7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFzaykgfHwgbWFzayA9PT0gQXJyYXkpIHJldHVybiBnLklNYXNrLk1hc2tlZER5bmFtaWM7XHJcbiAgLy8gJEZsb3dGaXhNZVxyXG4gIGlmIChtYXNrLnByb3RvdHlwZSBpbnN0YW5jZW9mIGcuSU1hc2suTWFza2VkKSByZXR1cm4gbWFzaztcclxuICAvLyAkRmxvd0ZpeE1lXHJcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIGcuSU1hc2suTWFza2VkRnVuY3Rpb247XHJcblxyXG4gIGNvbnNvbGUud2FybignTWFzayBub3QgZm91bmQgZm9yIG1hc2snLCBtYXNrKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG4gIHJldHVybiBnLklNYXNrLk1hc2tlZDtcclxufVxyXG5cclxuLyoqIENyZWF0ZXMgbmV3IHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBtYXNrIHR5cGUgKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuZnVuY3Rpb24gY3JlYXRlTWFzayAob3B0czoge21hc2s6IE1hc2t9KTogTWFza2VkPCo+IHtcclxuICBvcHRzID0gey4uLm9wdHN9O1xyXG4gIGNvbnN0IG1hc2sgPSBvcHRzLm1hc2s7XHJcblxyXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWQpIHJldHVybiBtYXNrO1xyXG5cclxuICBjb25zdCBNYXNrZWRDbGFzcyA9IG1hc2tlZENsYXNzKG1hc2spO1xyXG4gIHJldHVybiBuZXcgTWFza2VkQ2xhc3Mob3B0cyk7XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi4vZmFjdG9yeS5qcyc7XHJcbmltcG9ydCB0eXBlIE1hc2tlZCBmcm9tICcuLi9iYXNlLmpzJztcclxuaW1wb3J0IHR5cGUgTWFza2VkUGF0dGVybiBmcm9tICcuLi9wYXR0ZXJuLmpzJztcclxuaW1wb3J0IHt0eXBlIFRhaWxEZXRhaWxzfSBmcm9tICcuLi8uLi9jb3JlL3RhaWwtZGV0YWlscy5qcyc7XHJcbmltcG9ydCB7dHlwZSBNYXNrLCB0eXBlIEV4dHJhY3RGbGFncywgdHlwZSBBcHBlbmRGbGFnc30gZnJvbSAnLi4vYmFzZS5qcyc7XHJcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xyXG5pbXBvcnQge0RJUkVDVElPTiwgdHlwZSBEaXJlY3Rpb259IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xyXG5pbXBvcnQge3R5cGUgUGF0dGVybkJsb2NrfSBmcm9tICcuL2Jsb2NrLmpzJztcclxuXHJcblxyXG5leHBvcnRcclxudHlwZSBEZWZpbml0aW9ucyA9IHtbc3RyaW5nXTogTWFza307XHJcblxyXG4vKiogKi9cclxudHlwZSBQYXR0ZXJuSW5wdXREZWZpbml0aW9uT3B0aW9ucyA9IHtcclxuICBwYXJlbnQ6ICRQcm9wZXJ0eVR5cGU8UGF0dGVybklucHV0RGVmaW5pdGlvbiwgJ3BhcmVudCc+LFxyXG4gIG1hc2s6IE1hc2ssXHJcbiAgaXNPcHRpb25hbDogJFByb3BlcnR5VHlwZTxQYXR0ZXJuSW5wdXREZWZpbml0aW9uLCAnaXNPcHRpb25hbCc+LFxyXG4gIGxhenk6ICRQcm9wZXJ0eVR5cGU8UGF0dGVybklucHV0RGVmaW5pdGlvbiwgJ2xhenknPixcclxuICBwbGFjZWhvbGRlckNoYXI6ICRQcm9wZXJ0eVR5cGU8UGF0dGVybklucHV0RGVmaW5pdGlvbiwgJ3BsYWNlaG9sZGVyQ2hhcic+LFxyXG59O1xyXG5cclxudHlwZSBQYXR0ZXJuSW5wdXREZWZpbml0aW9uU3RhdGUgPSB7XHJcbiAgbWFza2VkOiAqLFxyXG4gIF9pc0ZpbGxlZDogYm9vbGVhbixcclxufTtcclxuXHJcbmV4cG9ydFxyXG5jb25zdCBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TID0ge1xyXG4gICcwJzogL1xcZC8sXHJcbiAgJ2EnOiAvW1xcdTAwNDEtXFx1MDA1QVxcdTAwNjEtXFx1MDA3QVxcdTAwQUFcXHUwMEI1XFx1MDBCQVxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDUyN1xcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3QTVcXHUwN0IxXFx1MDdDQS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODE1XFx1MDgxQVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhBMFxcdTA4QTItXFx1MDhBQ1xcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdGXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFDXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlDMS1cXHUxOUM3XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0QlxcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YxXFx1MUNGNVxcdTFDRjZcXHUxRDAwLVxcdTFEQkZcXHUxRTAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTJGLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE4M1xcdTIxODRcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJFMkZcXHUzMDA1XFx1MzAwNlxcdTMwMzEtXFx1MzAzNVxcdTMwM0JcXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OTdcXHVBNkEwLVxcdUE2RTVcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3OEVcXHVBNzkwLVxcdUE3OTNcXHVBN0EwLVxcdUE3QUFcXHVBN0Y4LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTgwLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCQzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vLCAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcclxuICAnKic6IC8uL1xyXG59O1xyXG5cclxuXHJcbi8qKiAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uIGltcGxlbWVudHMgUGF0dGVybkJsb2NrIHtcclxuICAvKiogKi9cclxuICArbWFza2VkOiBNYXNrZWQ8Kj47XHJcbiAgLyoqICovXHJcbiAgcGFyZW50OiBNYXNrZWQ8Kj47XHJcbiAgLyoqICovXHJcbiAgaXNPcHRpb25hbDogYm9vbGVhbjtcclxuICAvKiogKi9cclxuICBfaXNGaWxsZWQ6IGJvb2xlYW47XHJcbiAgLyoqICovXHJcbiAgbGF6eTogJFByb3BlcnR5VHlwZTxNYXNrZWRQYXR0ZXJuLCAnbGF6eSc+O1xyXG4gIC8qKiAqL1xyXG4gIHBsYWNlaG9sZGVyQ2hhcjogJFByb3BlcnR5VHlwZTxNYXNrZWRQYXR0ZXJuLCAncGxhY2Vob2xkZXJDaGFyJz47XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRzOiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uT3B0aW9ucykge1xyXG4gICAgY29uc3Qge21hc2ssIC4uLmJsb2NrT3B0c30gPSBvcHRzO1xyXG5cclxuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayh7bWFza30pO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBibG9ja09wdHMpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQgKCkge1xyXG4gICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWFza2VkLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGlmIChmcm9tUG9zID09PSAwICYmIHRvUG9zID49IDEpIHtcclxuICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgfHxcclxuICAgICAgKHRoaXMuX2lzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgP1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJDaGFyIDpcclxuICAgICAgICAnJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdW5tYXNrZWRWYWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ29tcGxldGUgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tYXNrZWQudmFsdWUpIHx8IHRoaXMuaXNPcHRpb25hbDtcclxuICB9XHJcblxyXG4gIF9hcHBlbmRDaGFyIChzdHI6IHN0cmluZywgZmxhZ3M6IEFwcGVuZEZsYWdzPXt9KTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBpZiAodGhpcy5faXNGaWxsZWQpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5tYXNrZWQuc3RhdGU7XHJcbiAgICAvLyBzaW11bGF0ZSBpbnB1dFxyXG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMubWFza2VkLl9hcHBlbmRDaGFyKHN0ciwgZmxhZ3MpO1xyXG5cclxuICAgIGlmIChkZXRhaWxzLmluc2VydGVkICYmIHRoaXMuZG9WYWxpZGF0ZShmbGFncykgPT09IGZhbHNlKSB7XHJcbiAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSBkZXRhaWxzLnJhd0luc2VydGVkID0gJyc7XHJcbiAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcclxuICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xyXG4gICAgfVxyXG4gICAgZGV0YWlscy5za2lwID0gIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbDtcclxuICAgIHRoaXMuX2lzRmlsbGVkID0gQm9vbGVhbihkZXRhaWxzLmluc2VydGVkKTtcclxuXHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIGFwcGVuZCAoLi4uYXJnczogKik6IENoYW5nZURldGFpbHMge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmFwcGVuZCguLi5hcmdzKTtcclxuICB9XHJcblxyXG4gIF9hcHBlbmRQbGFjZWhvbGRlciAoKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5faXNGaWxsZWQgfHwgdGhpcy5pc09wdGlvbmFsKSByZXR1cm4gZGV0YWlscztcclxuXHJcbiAgICB0aGlzLl9pc0ZpbGxlZCA9IHRydWU7XHJcbiAgICBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5wbGFjZWhvbGRlckNoYXI7XHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIGV4dHJhY3RUYWlsICguLi5hcmdzOiAqKTogVGFpbERldGFpbHMge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RUYWlsKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kVGFpbCAoLi4uYXJnczogKik6IENoYW5nZURldGFpbHMge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmFwcGVuZFRhaWwoLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICBleHRyYWN0SW5wdXQgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgsIGZsYWdzPzogRXh0cmFjdEZsYWdzKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm1hc2tlZC5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcclxuICB9XHJcblxyXG4gIG5lYXJlc3RJbnB1dFBvcyAoY3Vyc29yUG9zOiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uPURJUkVDVElPTi5OT05FKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG1pblBvcyA9IDA7XHJcbiAgICBjb25zdCBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcclxuICAgIGNvbnN0IGJvdW5kUG9zID0gTWF0aC5taW4oTWF0aC5tYXgoY3Vyc29yUG9zLCBtaW5Qb3MpLCBtYXhQb3MpO1xyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWluUG9zO1xyXG4gICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWF4UG9zO1xyXG4gICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gYm91bmRQb3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1ZhbGlkYXRlICguLi5hcmdzOiAqKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuZG9WYWxpZGF0ZSguLi5hcmdzKSAmJiAoXHJcbiAgICAgICF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRvQ29tbWl0ICgpIHtcclxuICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdGUgKCk6IFBhdHRlcm5JbnB1dERlZmluaXRpb25TdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtYXNrZWQ6IHRoaXMubWFza2VkLnN0YXRlLFxyXG4gICAgICBfaXNGaWxsZWQ6IHRoaXMuX2lzRmlsbGVkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldCBzdGF0ZSAoc3RhdGU6IFBhdHRlcm5JbnB1dERlZmluaXRpb25TdGF0ZSkge1xyXG4gICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZS5tYXNrZWQ7XHJcbiAgICB0aGlzLl9pc0ZpbGxlZCA9IHN0YXRlLl9pc0ZpbGxlZDtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XHJcbmltcG9ydCB7IERJUkVDVElPTiwgdHlwZSBEaXJlY3Rpb24sIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XHJcbmltcG9ydCB7IHR5cGUgVGFpbERldGFpbHMgfSBmcm9tICcuLi8uLi9jb3JlL3RhaWwtZGV0YWlscy5qcyc7XHJcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XHJcbmltcG9ydCB7IHR5cGUgRXh0cmFjdEZsYWdzLCB0eXBlIEFwcGVuZEZsYWdzLCB0eXBlIE1hc2tlZFN0YXRlIH0gZnJvbSAnLi4vYmFzZS5qcyc7XHJcbmltcG9ydCB7IHR5cGUgUGF0dGVybkJsb2NrIH0gZnJvbSAnLi9ibG9jay5qcyc7XHJcblxyXG5cclxuLyoqICovXHJcbnR5cGUgUGF0dGVybkZpeGVkRGVmaW5pdGlvbk9wdGlvbnMgPSB7XHJcbiAgY2hhcjogJFByb3BlcnR5VHlwZTxQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCAnY2hhcic+LFxyXG4gIGlzVW5tYXNraW5nPzogJFByb3BlcnR5VHlwZTxQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCAnaXNVbm1hc2tpbmcnPixcclxufTtcclxuXHJcbnR5cGUgUGF0dGVybkZpeGVkRGVmaW5pdGlvblN0YXRlID0ge3xcclxuICAuLi5NYXNrZWRTdGF0ZSxcclxuICBfaXNSYXdJbnB1dDogP2Jvb2xlYW4sXHJcbnx9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiBpbXBsZW1lbnRzIFBhdHRlcm5CbG9jayB7XHJcbiAgLyoqICovXHJcbiAgX3ZhbHVlOiBzdHJpbmc7XHJcbiAgLyoqICovXHJcbiAgY2hhcjogc3RyaW5nO1xyXG4gIC8qKiAqL1xyXG4gIGlzVW5tYXNraW5nOiA/Ym9vbGVhbjtcclxuICAvKiogKi9cclxuICBfaXNSYXdJbnB1dDogP2Jvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdHM6IFBhdHRlcm5GaXhlZERlZmluaXRpb25PcHRpb25zKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xyXG4gICAgdGhpcy5fdmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCB1bm1hc2tlZFZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNVbm1hc2tpbmcgPyB0aGlzLnZhbHVlIDogJyc7XHJcbiAgfVxyXG5cclxuICByZXNldCAoKSB7XHJcbiAgICB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XHJcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlIChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMuX3ZhbHVlLmxlbmd0aCk6IENoYW5nZURldGFpbHMge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuX3ZhbHVlLnNsaWNlKHRvUG9zKTtcclxuICAgIGlmICghdGhpcy5fdmFsdWUpIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuICB9XHJcblxyXG4gIG5lYXJlc3RJbnB1dFBvcyAoY3Vyc29yUG9zOiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uPURJUkVDVElPTi5OT05FKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG1pblBvcyA9IDA7XHJcbiAgICBjb25zdCBtYXhQb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcclxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcclxuICAgICAgICByZXR1cm4gbWluUG9zO1xyXG4gICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxyXG4gICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBtYXhQb3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHRyYWN0SW5wdXQgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy5fdmFsdWUubGVuZ3RoLCBmbGFncz86IEV4dHJhY3RGbGFncz17fSkge1xyXG4gICAgcmV0dXJuIGZsYWdzLnJhdyAmJiB0aGlzLl9pc1Jhd0lucHV0ICYmIHRoaXMuX3ZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKSB8fCAnJztcclxuICB9XHJcblxyXG4gIGdldCBpc0NvbXBsZXRlICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgX2FwcGVuZENoYXIgKHN0cjogc3RyaW5nLCBmbGFncz86IEFwcGVuZEZsYWdzPXt9KSB7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xyXG5cclxuICAgIGNvbnN0IGFwcGVuZGVkID0gdGhpcy5jaGFyID09PSBzdHJbMF07XHJcbiAgICBjb25zdCBpc1Jlc29sdmVkID0gYXBwZW5kZWQgJiYgKHRoaXMuaXNVbm1hc2tpbmcgfHwgZmxhZ3MuaW5wdXQgfHwgZmxhZ3MucmF3KSAmJiAhZmxhZ3MudGFpbDtcclxuICAgIGlmIChpc1Jlc29sdmVkKSBkZXRhaWxzLnJhd0luc2VydGVkID0gdGhpcy5jaGFyO1xyXG4gICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xyXG4gICAgdGhpcy5faXNSYXdJbnB1dCA9IGlzUmVzb2x2ZWQgJiYgKGZsYWdzLnJhdyB8fCBmbGFncy5pbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICBfYXBwZW5kUGxhY2Vob2xkZXIgKCk6IENoYW5nZURldGFpbHMge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFjdFRhaWwgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgpOiBUYWlsRGV0YWlscyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygnJyk7XHJcbiAgfVxyXG5cclxuICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXHJcbiAgYXBwZW5kVGFpbCAodGFpbDogc3RyaW5nIHwgVGFpbERldGFpbHMpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGlmIChpc1N0cmluZyh0YWlsKSkgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKTtcclxuXHJcbiAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZCAoc3RyOiBzdHJpbmcsIGZsYWdzPzogQXBwZW5kRmxhZ3MsIHRhaWw/OiBUYWlsRGV0YWlscyk6IENoYW5nZURldGFpbHMge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XHJcblxyXG4gICAgaWYgKHRhaWwgIT0gbnVsbCkge1xyXG4gICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwodGFpbCkudGFpbFNoaWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgZG9Db21taXQgKCkge31cclxuXHJcbiAgZ2V0IHN0YXRlICgpOiBQYXR0ZXJuRml4ZWREZWZpbml0aW9uU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcclxuICAgICAgX2lzUmF3SW5wdXQ6IHRoaXMuX2lzUmF3SW5wdXQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXRlIChzdGF0ZTogUGF0dGVybkZpeGVkRGVmaW5pdGlvblN0YXRlKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IHsgZyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xyXG5pbXBvcnQgdHlwZSB7IFRhaWxEZXRhaWxzLCBBcHBlbmRUYWlsIH0gZnJvbSAnLi4vLi4vY29yZS90YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcclxuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcclxuXHJcblxyXG50eXBlIENodW5rc1RhaWxTdGF0ZSA9IHtcclxuICBjaHVua3M6ICRQcm9wZXJ0eVR5cGU8Q2h1bmtzVGFpbERldGFpbHMsICdjaHVua3MnPixcclxuICBmcm9tOiAkUHJvcGVydHlUeXBlPENodW5rc1RhaWxEZXRhaWxzLCAnZnJvbSc+LFxyXG4gIHN0b3A/OiAkUHJvcGVydHlUeXBlPENodW5rc1RhaWxEZXRhaWxzLCAnc3RvcCc+LFxyXG4gIGJsb2NrSW5kZXg/OiAkUHJvcGVydHlUeXBlPENodW5rc1RhaWxEZXRhaWxzLCAnYmxvY2tJbmRleCc+LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgQ2h1bmtzVGFpbERldGFpbHMgaW1wbGVtZW50cyBUYWlsRGV0YWlscyB7XHJcbiAgY2h1bmtzOiBBcnJheTxUYWlsRGV0YWlscz47XHJcbiAgZnJvbTogbnVtYmVyO1xyXG4gIHN0b3A6ID9udW1iZXI7XHJcbiAgLyoqICovXHJcbiAgYmxvY2tJbmRleDogP251bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IgKGNodW5rcz86IEFycmF5PFRhaWxEZXRhaWxzPj1bXSwgZnJvbT86IG51bWJlcj0wKSB7XHJcbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcclxuICAgIHRoaXMuZnJvbSA9IGZyb207XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZyAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNodW5rcy5tYXAoU3RyaW5nKS5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcclxuICBleHRlbmQgKHRhaWxDaHVuazogc3RyaW5nIHwgVGFpbERldGFpbHMpOiB2b2lkIHtcclxuICAgIGlmICghU3RyaW5nKHRhaWxDaHVuaykpIHJldHVybjtcclxuICAgIGlmIChpc1N0cmluZyh0YWlsQ2h1bmspKSB0YWlsQ2h1bmsgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsQ2h1bmspKTtcclxuXHJcbiAgICBjb25zdCBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGgtMV07XHJcbiAgICBjb25zdCBleHRlbmRMYXN0ID0gbGFzdENodW5rICYmXHJcbiAgICAgIC8vIGlmIHN0b3BzIGFyZSBzYW1lIG9yIHRhaWwgaGFzIG5vIHN0b3BcclxuICAgICAgKGxhc3RDaHVuay5zdG9wID09PSB0YWlsQ2h1bmsuc3RvcCB8fCB0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSAmJlxyXG4gICAgICAvLyBpZiB0YWlsIGNodW5rIGdvZXMganVzdCBhZnRlciBsYXN0IGNodW5rXHJcbiAgICAgIHRhaWxDaHVuay5mcm9tID09PSAobGFzdENodW5rLmZyb20gKyBsYXN0Q2h1bmsudG9TdHJpbmcoKS5sZW5ndGgpO1xyXG5cclxuICAgIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDb250aW51b3VzVGFpbERldGFpbHMpIHtcclxuICAgICAgLy8gY2hlY2sgdGhlIGFiaWxpdHkgdG8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXHJcbiAgICAgIGlmIChleHRlbmRMYXN0KSB7XHJcbiAgICAgICAgLy8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXHJcbiAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gYXBwZW5kIG5ldyBjaHVua1xyXG4gICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykge1xyXG4gICAgICBpZiAodGFpbENodW5rLnN0b3AgPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIHVud3JhcCBmbG9hdGluZyBjaHVua3MgdG8gcGFyZW50LCBrZWVwaW5nIGBmcm9tYCBwb3NcclxuICAgICAgICBsZXQgZmlyc3RUYWlsQ2h1bms7XHJcbiAgICAgICAgd2hpbGUgKHRhaWxDaHVuay5jaHVua3MubGVuZ3RoICYmIHRhaWxDaHVuay5jaHVua3NbMF0uc3RvcCA9PSBudWxsKSB7XHJcbiAgICAgICAgICBmaXJzdFRhaWxDaHVuayA9IHRhaWxDaHVuay5jaHVua3Muc2hpZnQoKTtcclxuICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XHJcbiAgICAgICAgICB0aGlzLmV4dGVuZChmaXJzdFRhaWxDaHVuayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0YWlsIGNodW5rIHN0aWxsIGhhcyB2YWx1ZVxyXG4gICAgICBpZiAodGFpbENodW5rLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAvLyBpZiBjaHVua3MgY29udGFpbnMgc3RvcHMsIHRoZW4gcG9wdXAgc3RvcCB0byBjb250YWluZXJcclxuICAgICAgICB0YWlsQ2h1bmsuc3RvcCA9IHRhaWxDaHVuay5ibG9ja0luZGV4O1xyXG4gICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kVG8gKG1hc2tlZDogQXBwZW5kVGFpbCk6IENoYW5nZURldGFpbHMge1xyXG4gICAgaWYgKCEobWFza2VkIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWRQYXR0ZXJuKSkge1xyXG4gICAgICBjb25zdCB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG5cclxuICAgIGZvciAobGV0IGNpPTA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoICYmICFkZXRhaWxzLnNraXA7ICsrY2kpIHtcclxuICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XHJcblxyXG4gICAgICBjb25zdCBsYXN0QmxvY2tJdGVyID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKG1hc2tlZC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBzdG9wID0gY2h1bmsuc3RvcDtcclxuICAgICAgbGV0IGNodW5rQmxvY2s7XHJcbiAgICAgIGlmIChzdG9wICYmXHJcbiAgICAgICAgLy8gaWYgYmxvY2sgbm90IGZvdW5kIG9yIHN0b3AgaXMgYmVoaW5kIGxhc3RCbG9ja1xyXG4gICAgICAgICghbGFzdEJsb2NrSXRlciB8fCBsYXN0QmxvY2tJdGVyLmluZGV4IDw9IHN0b3ApXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgfHxcclxuICAgICAgICAgIC8vIGZvciBjb250aW51b3VzIGJsb2NrIGFsc28gY2hlY2sgaWYgc3RvcCBpcyBleGlzdFxyXG4gICAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoc3RvcCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaHVua0Jsb2NrID0gY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyAmJiBtYXNrZWQuX2Jsb2Nrc1tzdG9wXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNodW5rQmxvY2spIHtcclxuICAgICAgICBjb25zdCB0YWlsRGV0YWlscyA9IGNodW5rQmxvY2suYXBwZW5kVGFpbChjaHVuayk7XHJcbiAgICAgICAgdGFpbERldGFpbHMuc2tpcCA9IGZhbHNlOyAvLyBhbHdheXMgaWdub3JlIHNraXAsIGl0IHdpbGwgYmUgc2V0IG9uIGxhc3RcclxuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0YWlsRGV0YWlscyk7XHJcbiAgICAgICAgbWFza2VkLl92YWx1ZSArPSB0YWlsRGV0YWlscy5pbnNlcnRlZDtcclxuXHJcbiAgICAgICAgLy8gZ2V0IG5vdCBpbnNlcnRlZCBjaGFyc1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbkNoYXJzID0gY2h1bmsudG9TdHJpbmcoKS5zbGljZSh0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChyZW1haW5DaGFycykgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChyZW1haW5DaGFycywgeyB0YWlsOiB0cnVlIH0pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKGNodW5rLnRvU3RyaW5nKCksIHsgdGFpbDogdHJ1ZSB9KSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdGUgKCk6IENodW5rc1RhaWxTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaHVua3M6IHRoaXMuY2h1bmtzLm1hcChjID0+IGMuc3RhdGUpLFxyXG4gICAgICBmcm9tOiB0aGlzLmZyb20sXHJcbiAgICAgIHN0b3A6IHRoaXMuc3RvcCxcclxuICAgICAgYmxvY2tJbmRleDogdGhpcy5ibG9ja0luZGV4LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldCBzdGF0ZSAoc3RhdGU6IENodW5rc1RhaWxTdGF0ZSkge1xyXG4gICAgY29uc3QgeyBjaHVua3MsIC4uLnByb3BzIH0gPSBzdGF0ZTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xyXG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3MubWFwKGNzdGF0ZSA9PiB7XHJcbiAgICAgIGNvbnN0IGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgP1xyXG4gICAgICAgIG5ldyBDaHVua3NUYWlsRGV0YWlscygpIDpcclxuICAgICAgICBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCk7XHJcbiAgICAgIC8vICRGbG93Rml4TWUgYWxyZWFkeSBjaGVja2VkIGFib3ZlXHJcbiAgICAgIGNodW5rLnN0YXRlID0gY3N0YXRlO1xyXG4gICAgICByZXR1cm4gY2h1bms7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNoaWZ0QmVmb3JlIChwb3M6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy5jaHVua3MubGVuZ3RoKSByZXR1cm4gJyc7XHJcblxyXG4gICAgY29uc3QgY2h1bmtTaGlmdFBvcyA9IHBvcyAtIHRoaXMuZnJvbTtcclxuICAgIGxldCBjaT0wO1xyXG4gICAgd2hpbGUgKGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xyXG4gICAgICBjb25zdCBzaGlmdENoYXIgPSBjaHVuay5zaGlmdEJlZm9yZShjaHVua1NoaWZ0UG9zKTtcclxuXHJcbiAgICAgIGlmIChjaHVuay50b1N0cmluZygpKSB7XHJcbiAgICAgICAgLy8gY2h1bmsgc3RpbGwgY29udGFpbnMgdmFsdWVcclxuICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxyXG4gICAgICAgIGlmICghc2hpZnRDaGFyKSBicmVhaztcclxuICAgICAgICArK2NpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNsZWFuIGlmIGNodW5rIGhhcyBubyB2YWx1ZVxyXG4gICAgICAgIHRoaXMuY2h1bmtzLnNwbGljZShjaSwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQge0RJUkVDVElPTiwgdHlwZSBEaXJlY3Rpb24sIGZvcmNlRGlyZWN0aW9ufSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcclxuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XHJcbmltcG9ydCBNYXNrZWQsIHt0eXBlIEFwcGVuZEZsYWdzLCB0eXBlIEV4dHJhY3RGbGFncywgdHlwZSBNYXNrZWRPcHRpb25zLCB0eXBlIE1hc2tlZFN0YXRlfSBmcm9tICcuL2Jhc2UuanMnO1xyXG5pbXBvcnQgUGF0dGVybklucHV0RGVmaW5pdGlvbiwge0RFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMsIHR5cGUgRGVmaW5pdGlvbnN9IGZyb20gJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcclxuaW1wb3J0IFBhdHRlcm5GaXhlZERlZmluaXRpb24gZnJvbSAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xyXG5pbXBvcnQgeyB0eXBlIFRhaWxEZXRhaWxzIH0gZnJvbSAnLi4vY29yZS90YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgQ2h1bmtzVGFpbERldGFpbHMgZnJvbSAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XHJcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XHJcbmltcG9ydCB7dHlwZSBQYXR0ZXJuQmxvY2t9IGZyb20gJy4vcGF0dGVybi9ibG9jay5qcyc7XHJcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XHJcblxyXG5cclxudHlwZSBNYXNrZWRQYXR0ZXJuT3B0aW9ucyA9IHtcclxuICAuLi5NYXNrZWRPcHRpb25zPHN0cmluZz4sXHJcbiAgZGVmaW5pdGlvbnM/OiAkUHJvcGVydHlUeXBlPE1hc2tlZFBhdHRlcm4sICdkZWZpbml0aW9ucyc+LFxyXG4gIGJsb2Nrcz86ICRQcm9wZXJ0eVR5cGU8TWFza2VkUGF0dGVybiwgJ2Jsb2Nrcyc+LFxyXG4gIHBsYWNlaG9sZGVyQ2hhcj86ICRQcm9wZXJ0eVR5cGU8TWFza2VkUGF0dGVybiwgJ3BsYWNlaG9sZGVyQ2hhcic+LFxyXG4gIGxhenk/OiAkUHJvcGVydHlUeXBlPE1hc2tlZFBhdHRlcm4sICdsYXp5Jz4sXHJcbn07XHJcblxyXG50eXBlIE1hc2tlZFBhdHRlcm5TdGF0ZSA9IHt8XHJcbiAgLi4uTWFza2VkU3RhdGUsXHJcbiAgX2Jsb2NrczogQXJyYXk8Kj4sXHJcbnx9O1xyXG5cclxudHlwZSBCbG9ja1Bvc0RhdGEgPSB7XHJcbiAgaW5kZXg6IG51bWJlcixcclxuICBvZmZzZXQ6IG51bWJlcixcclxufTtcclxuXHJcbi8qKlxyXG4gIFBhdHRlcm4gbWFza1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHMuYmxvY2tzXHJcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHMuZGVmaW5pdGlvbnNcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5wbGFjZWhvbGRlckNoYXJcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubGF6eVxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBNYXNrZWRQYXR0ZXJuIGV4dGVuZHMgTWFza2VkPHN0cmluZz4ge1xyXG4gIHN0YXRpYyBERUZBVUxUUzogYW55O1xyXG4gIHN0YXRpYyBTVE9QX0NIQVI6IHN0cmluZztcclxuICBzdGF0aWMgRVNDQVBFX0NIQVI6IHN0cmluZztcclxuICBzdGF0aWMgSW5wdXREZWZpbml0aW9uOiBDbGFzczxQYXR0ZXJuSW5wdXREZWZpbml0aW9uPjtcclxuICBzdGF0aWMgRml4ZWREZWZpbml0aW9uOiBDbGFzczxQYXR0ZXJuRml4ZWREZWZpbml0aW9uPjtcclxuXHJcbiAgLyoqICovXHJcbiAgYmxvY2tzOiB7W3N0cmluZ106IE1hc2tlZDwqPn07XHJcbiAgLyoqICovXHJcbiAgZGVmaW5pdGlvbnM6IERlZmluaXRpb25zO1xyXG4gIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cclxuICBwbGFjZWhvbGRlckNoYXI6IHN0cmluZztcclxuICAvKiogU2hvdyBwbGFjZWhvbGRlciBvbmx5IHdoZW4gbmVlZGVkICovXHJcbiAgbGF6eTogYm9vbGVhbjtcclxuICBfYmxvY2tzOiBBcnJheTxQYXR0ZXJuQmxvY2s+O1xyXG4gIF9tYXNrZWRCbG9ja3M6IHtbc3RyaW5nXTogQXJyYXk8bnVtYmVyPn07XHJcbiAgX3N0b3BzOiBBcnJheTxudW1iZXI+O1xyXG5cclxuICBjb25zdHJ1Y3RvciAob3B0czogYW55PXt9KSB7ICAvLyBUT0RPIHR5cGUgJFNoYXBlPE1hc2tlZFBhdHRlcm5PcHRpb25zPj17fSBkb2VzIG5vdCB3b3JrXHJcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgb3B0cy5kZWZpbml0aW9ucyk7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIC4uLk1hc2tlZFBhdHRlcm4uREVGQVVMVFMsXHJcbiAgICAgIC4uLm9wdHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cclxuICBfdXBkYXRlIChvcHRzOiAkU2hhcGU8TWFza2VkUGF0dGVybk9wdGlvbnM+PXt9KSB7XHJcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZpbml0aW9ucywgb3B0cy5kZWZpbml0aW9ucyk7XHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gICAgdGhpcy5fcmVidWlsZE1hc2soKTtcclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIF9yZWJ1aWxkTWFzayAoKSB7XHJcbiAgICBjb25zdCBkZWZzID0gdGhpcy5kZWZpbml0aW9ucztcclxuICAgIHRoaXMuX2Jsb2NrcyA9IFtdO1xyXG4gICAgdGhpcy5fc3RvcHMgPSBbXTtcclxuICAgIHRoaXMuX21hc2tlZEJsb2NrcyA9IHt9O1xyXG5cclxuICAgIGxldCBwYXR0ZXJuID0gdGhpcy5tYXNrO1xyXG4gICAgaWYgKCFwYXR0ZXJuIHx8ICFkZWZzKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHVubWFza2luZ0Jsb2NrID0gZmFsc2U7XHJcbiAgICBsZXQgb3B0aW9uYWxCbG9jayA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGk9MDsgaTxwYXR0ZXJuLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmICh0aGlzLmJsb2Nrcykge1xyXG4gICAgICAgIGNvbnN0IHAgPSBwYXR0ZXJuLnNsaWNlKGkpO1xyXG4gICAgICAgIGNvbnN0IGJOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuYmxvY2tzKS5maWx0ZXIoYk5hbWUgPT4gcC5pbmRleE9mKGJOYW1lKSA9PT0gMCk7XHJcbiAgICAgICAgLy8gb3JkZXIgYnkga2V5IGxlbmd0aFxyXG4gICAgICAgIGJOYW1lcy5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKTtcclxuICAgICAgICAvLyB1c2UgYmxvY2sgbmFtZSB3aXRoIG1heCBsZW5ndGhcclxuICAgICAgICBjb25zdCBiTmFtZSA9IGJOYW1lc1swXTtcclxuICAgICAgICBpZiAoYk5hbWUpIHtcclxuICAgICAgICAgIGNvbnN0IG1hc2tlZEJsb2NrID0gY3JlYXRlTWFzayh7XHJcbiAgICAgICAgICAgIHBhcmVudDogdGhpcyxcclxuICAgICAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IHRoaXMucGxhY2Vob2xkZXJDaGFyLFxyXG4gICAgICAgICAgICAuLi50aGlzLmJsb2Nrc1tiTmFtZV1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9yZSBibG9jayBpbmRleFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0pIHRoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBjaGFyID0gcGF0dGVybltpXTtcclxuICAgICAgbGV0IGlzSW5wdXQgPSBjaGFyIGluIGRlZnM7XHJcblxyXG4gICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5TVE9QX0NIQVIpIHtcclxuICAgICAgICB0aGlzLl9zdG9wcy5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICd9Jykge1xyXG4gICAgICAgIHVubWFza2luZ0Jsb2NrID0gIXVubWFza2luZ0Jsb2NrO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hhciA9PT0gJ1snIHx8IGNoYXIgPT09ICddJykge1xyXG4gICAgICAgIG9wdGlvbmFsQmxvY2sgPSAhb3B0aW9uYWxCbG9jaztcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcclxuICAgICAgICArK2k7XHJcbiAgICAgICAgY2hhciA9IHBhdHRlcm5baV07XHJcbiAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcclxuICAgICAgICBpc0lucHV0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRlZiA9IGlzSW5wdXQgP1xyXG4gICAgICAgIG5ldyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKHtcclxuICAgICAgICAgIHBhcmVudDogdGhpcyxcclxuICAgICAgICAgIGxhenk6IHRoaXMubGF6eSxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogdGhpcy5wbGFjZWhvbGRlckNoYXIsXHJcbiAgICAgICAgICBtYXNrOiBkZWZzW2NoYXJdLFxyXG4gICAgICAgICAgaXNPcHRpb25hbDogb3B0aW9uYWxCbG9jayxcclxuICAgICAgICB9KSA6XHJcbiAgICAgICAgbmV3IFBhdHRlcm5GaXhlZERlZmluaXRpb24oe1xyXG4gICAgICAgICAgY2hhcixcclxuICAgICAgICAgIGlzVW5tYXNraW5nOiB1bm1hc2tpbmdCbG9jayxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKGRlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHN0YXRlICgpOiBNYXNrZWRQYXR0ZXJuU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3VwZXIuc3RhdGUsXHJcbiAgICAgIF9ibG9ja3M6IHRoaXMuX2Jsb2Nrcy5tYXAoYiA9PiBiLnN0YXRlKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXQgc3RhdGUgKHN0YXRlOiBNYXNrZWRQYXR0ZXJuU3RhdGUpIHtcclxuICAgIGNvbnN0IHtfYmxvY2tzLCAuLi5tYXNrZWRTdGF0ZX0gPSBzdGF0ZTtcclxuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKChiLCBiaSkgPT4gYi5zdGF0ZSA9IF9ibG9ja3NbYmldKTtcclxuICAgIHN1cGVyLnN0YXRlID0gbWFza2VkU3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX3N0b3JlQmVmb3JlVGFpbFN0YXRlICgpIHtcclxuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAvLyAkRmxvd0ZpeE1lIF9zdG9yZUJlZm9yZVRhaWxTdGF0ZSBpcyBub3QgZXhpc3QgaW4gUGF0dGVybkJsb2NrXHJcbiAgICAgIGlmICh0eXBlb2YgYi5fc3RvcmVCZWZvcmVUYWlsU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBiLl9zdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHN1cGVyLl9zdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF9yZXN0b3JlQmVmb3JlVGFpbFN0YXRlICgpIHtcclxuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAvLyAkRmxvd0ZpeE1lIF9yZXN0b3JlQmVmb3JlVGFpbFN0YXRlIGlzIG5vdCBleGlzdCBpbiBQYXR0ZXJuQmxvY2tcclxuICAgICAgaWYgKHR5cGVvZiBiLl9yZXN0b3JlQmVmb3JlVGFpbFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgYi5fcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHN1cGVyLl9yZXN0b3JlQmVmb3JlVGFpbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX3Jlc2V0QmVmb3JlVGFpbFN0YXRlICgpIHtcclxuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAvLyAkRmxvd0ZpeE1lIF9yZXNldEJlZm9yZVRhaWxTdGF0ZSBpcyBub3QgZXhpc3QgaW4gUGF0dGVybkJsb2NrXHJcbiAgICAgIGlmICh0eXBlb2YgYi5fcmVzZXRCZWZvcmVUYWlsU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBiLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHN1cGVyLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIHJlc2V0ICgpIHtcclxuICAgIHN1cGVyLnJlc2V0KCk7XHJcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChiID0+IGIucmVzZXQoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IGlzQ29tcGxldGUgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShiID0+IGIuaXNDb21wbGV0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9Db21taXQgKCkge1xyXG4gICAgdGhpcy5fYmxvY2tzLmZvckVhY2goYiA9PiBiLmRvQ29tbWl0KCkpO1xyXG4gICAgc3VwZXIuZG9Db21taXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgdW5tYXNrZWRWYWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKChzdHIsIGIpID0+IHN0ciArPSBiLnVubWFza2VkVmFsdWUsICcnKTtcclxuICB9XHJcblxyXG4gIHNldCB1bm1hc2tlZFZhbHVlICh1bm1hc2tlZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCB2YWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIC8vIFRPRE8gcmV0dXJuIF92YWx1ZSB3aGVuIG5vdCBpbiBjaGFuZ2U/XHJcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZSgoc3RyLCBiKSA9PiBzdHIgKz0gYi52YWx1ZSwgJycpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlICh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlci52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGFwcGVuZFRhaWwgKHRhaWw6IHN0cmluZyB8IFRhaWxEZXRhaWxzKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICByZXR1cm4gc3VwZXIuYXBwZW5kVGFpbCh0YWlsKS5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX2FwcGVuZENoYXJSYXcgKGNoOiBzdHJpbmcsIGZsYWdzOiBBcHBlbmRGbGFncz17fSk6IENoYW5nZURldGFpbHMge1xyXG4gICAgY29uc3QgYmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuICAgIGlmICghYmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcclxuXHJcbiAgICBmb3IgKGxldCBiaT1ibG9ja0l0ZXIuaW5kZXg7IDsgKytiaSkge1xyXG4gICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XHJcbiAgICAgIGlmICghYmxvY2spIGJyZWFrO1xyXG5cclxuICAgICAgY29uc3QgYmxvY2tEZXRhaWxzID0gYmxvY2suX2FwcGVuZENoYXIoY2gsIGZsYWdzKTtcclxuXHJcbiAgICAgIGNvbnN0IHNraXAgPSBibG9ja0RldGFpbHMuc2tpcDtcclxuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYmxvY2tEZXRhaWxzKTtcclxuXHJcbiAgICAgIGlmIChza2lwIHx8IGJsb2NrRGV0YWlscy5yYXdJbnNlcnRlZCkgYnJlYWs7IC8vIGdvIG5leHQgY2hhclxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGV4dHJhY3RUYWlsIChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoKTogQ2h1bmtzVGFpbERldGFpbHMge1xyXG4gICAgY29uc3QgY2h1bmtUYWlsID0gbmV3IENodW5rc1RhaWxEZXRhaWxzKCk7XHJcbiAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiBjaHVua1RhaWw7XHJcblxyXG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIChiLCBiaSwgYkZyb21Qb3MsIGJUb1BvcykgPT4ge1xyXG4gICAgICBjb25zdCBibG9ja0NodW5rID0gYi5leHRyYWN0VGFpbChiRnJvbVBvcywgYlRvUG9zKTtcclxuICAgICAgYmxvY2tDaHVuay5zdG9wID0gdGhpcy5fZmluZFN0b3BCZWZvcmUoYmkpO1xyXG4gICAgICBibG9ja0NodW5rLmZyb20gPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKTtcclxuICAgICAgaWYgKGJsb2NrQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykgYmxvY2tDaHVuay5ibG9ja0luZGV4ID0gYmk7XHJcblxyXG4gICAgICBjaHVua1RhaWwuZXh0ZW5kKGJsb2NrQ2h1bmspO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNodW5rVGFpbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBleHRyYWN0SW5wdXQgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgsIGZsYWdzOiBFeHRyYWN0RmxhZ3M9e30pOiBzdHJpbmcge1xyXG4gICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gJyc7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gJyc7XHJcblxyXG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIChiLCBfLCBmcm9tUG9zLCB0b1BvcykgPT4ge1xyXG4gICAgICBpbnB1dCArPSBiLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgX2ZpbmRTdG9wQmVmb3JlIChibG9ja0luZGV4OiBudW1iZXIpOiA/bnVtYmVyIHtcclxuICAgIGxldCBzdG9wQmVmb3JlO1xyXG4gICAgZm9yIChsZXQgc2k9MDsgc2k8dGhpcy5fc3RvcHMubGVuZ3RoOyArK3NpKSB7XHJcbiAgICAgIGNvbnN0IHN0b3AgPSB0aGlzLl9zdG9wc1tzaV07XHJcbiAgICAgIGlmIChzdG9wIDw9IGJsb2NrSW5kZXgpIHN0b3BCZWZvcmUgPSBzdG9wO1xyXG4gICAgICBlbHNlIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0b3BCZWZvcmU7XHJcbiAgfVxyXG5cclxuICAvKiogQXBwZW5kcyBwbGFjZWhvbGRlciBkZXBlbmRpbmcgb24gbGF6aW5lc3MgKi9cclxuICBfYXBwZW5kUGxhY2Vob2xkZXIgKHRvQmxvY2tJbmRleDogP251bWJlcik6IENoYW5nZURldGFpbHMge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcbiAgICBpZiAodGhpcy5sYXp5ICYmIHRvQmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlscztcclxuXHJcbiAgICBjb25zdCBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xyXG4gICAgaWYgKCFzdGFydEJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRCbG9ja0luZGV4ID0gc3RhcnRCbG9ja0l0ZXIuaW5kZXg7XHJcbiAgICBjb25zdCBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMuX2Jsb2Nrcy5zbGljZShzdGFydEJsb2NrSW5kZXgsIGVuZEJsb2NrSW5kZXgpXHJcbiAgICAgIC5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYi5fYXBwZW5kUGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIC8vICRGbG93Rml4TWUgYF9ibG9ja3NgIG1heSBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgY29uc3QgYXJncyA9IGIuX2Jsb2NrcyAhPSBudWxsID8gW2IuX2Jsb2Nrcy5sZW5ndGhdIDogW107XHJcbiAgICAgICAgICBjb25zdCBiRGV0YWlscyA9IGIuX2FwcGVuZFBsYWNlaG9sZGVyLmFwcGx5KGIsIGFyZ3MpO1xyXG4gICAgICAgICAgdGhpcy5fdmFsdWUgKz0gYkRldGFpbHMuaW5zZXJ0ZWQ7XHJcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShiRGV0YWlscyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cclxuICBfbWFwUG9zVG9CbG9jayAocG9zOiBudW1iZXIpOiA/QmxvY2tQb3NEYXRhIHtcclxuICAgIGxldCBhY2NWYWwgPSAnJztcclxuICAgIGZvciAobGV0IGJpPTA7IGJpPHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcclxuICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG4gICAgICBjb25zdCBibG9ja1N0YXJ0UG9zID0gYWNjVmFsLmxlbmd0aDtcclxuXHJcbiAgICAgIGFjY1ZhbCArPSBibG9jay52YWx1ZTtcclxuXHJcbiAgICAgIGlmIChwb3MgPD0gYWNjVmFsLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpbmRleDogYmksXHJcbiAgICAgICAgICBvZmZzZXQ6IHBvcyAtIGJsb2NrU3RhcnRQb3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX2Jsb2NrU3RhcnRQb3MgKGJsb2NrSW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzXHJcbiAgICAgIC5zbGljZSgwLCBibG9ja0luZGV4KVxyXG4gICAgICAucmVkdWNlKChwb3MsIGIpID0+IHBvcyArPSBiLnZhbHVlLmxlbmd0aCwgMCk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfZm9yRWFjaEJsb2Nrc0luUmFuZ2UgKGZyb21Qb3M6IG51bWJlciwgdG9Qb3M6IG51bWJlcj10aGlzLnZhbHVlLmxlbmd0aCwgZm46IChibG9jazogUGF0dGVybkJsb2NrLCBibG9ja0luZGV4OiBudW1iZXIsIGZyb21Qb3M6IG51bWJlciwgdG9Qb3M6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgZnJvbUJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2soZnJvbVBvcyk7XHJcblxyXG4gICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcclxuICAgICAgY29uc3QgdG9CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRvUG9zKTtcclxuICAgICAgLy8gcHJvY2VzcyBmaXJzdCBibG9ja1xyXG4gICAgICBjb25zdCBpc1NhbWVCbG9jayA9IHRvQmxvY2tJdGVyICYmIGZyb21CbG9ja0l0ZXIuaW5kZXggPT09IHRvQmxvY2tJdGVyLmluZGV4O1xyXG4gICAgICBjb25zdCBmcm9tQmxvY2tTdGFydFBvcyA9IGZyb21CbG9ja0l0ZXIub2Zmc2V0O1xyXG4gICAgICBjb25zdCBmcm9tQmxvY2tFbmRQb3MgPSB0b0Jsb2NrSXRlciAmJiBpc1NhbWVCbG9jayA/XHJcbiAgICAgICAgdG9CbG9ja0l0ZXIub2Zmc2V0IDpcclxuICAgICAgICB0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0udmFsdWUubGVuZ3RoO1xyXG4gICAgICBmbih0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0sIGZyb21CbG9ja0l0ZXIuaW5kZXgsIGZyb21CbG9ja1N0YXJ0UG9zLCBmcm9tQmxvY2tFbmRQb3MpO1xyXG5cclxuICAgICAgaWYgKHRvQmxvY2tJdGVyICYmICFpc1NhbWVCbG9jaykge1xyXG4gICAgICAgIC8vIHByb2Nlc3MgaW50ZXJtZWRpYXRlIGJsb2Nrc1xyXG4gICAgICAgIGZvciAobGV0IGJpPWZyb21CbG9ja0l0ZXIuaW5kZXgrMTsgYmk8dG9CbG9ja0l0ZXIuaW5kZXg7ICsrYmkpIHtcclxuICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tiaV0sIGJpLCAwLCB0aGlzLl9ibG9ja3NbYmldLnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIGxhc3QgYmxvY2tcclxuICAgICAgICBmbih0aGlzLl9ibG9ja3NbdG9CbG9ja0l0ZXIuaW5kZXhdLCB0b0Jsb2NrSXRlci5pbmRleCwgMCwgdG9CbG9ja0l0ZXIub2Zmc2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIHJlbW92ZSAoZnJvbVBvczogbnVtYmVyPTAsIHRvUG9zOiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IHJlbW92ZURldGFpbHMgPSBzdXBlci5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpO1xyXG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIChiLCBfLCBiRnJvbVBvcywgYlRvUG9zKSA9PiB7XHJcbiAgICAgIHJlbW92ZURldGFpbHMuYWdncmVnYXRlKGIucmVtb3ZlKGJGcm9tUG9zLCBiVG9Qb3MpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgbmVhcmVzdElucHV0UG9zIChjdXJzb3JQb3M6IG51bWJlciwgZGlyZWN0aW9uOiBEaXJlY3Rpb249RElSRUNUSU9OLk5PTkUpOiBudW1iZXIge1xyXG4gICAgLy8gVE9ETyByZWZhY3RvciAtIGV4dHJhY3QgYWxpZ25ibG9ja1xyXG5cclxuICAgIGNvbnN0IGJlZ2luQmxvY2tEYXRhID0gdGhpcy5fbWFwUG9zVG9CbG9jayhjdXJzb3JQb3MpIHx8IHtpbmRleDogMCwgb2Zmc2V0OiAwfTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgb2Zmc2V0OiBiZWdpbkJsb2NrT2Zmc2V0LFxyXG4gICAgICBpbmRleDogYmVnaW5CbG9ja0luZGV4LFxyXG4gICAgfSA9IGJlZ2luQmxvY2tEYXRhO1xyXG4gICAgY29uc3QgYmVnaW5CbG9jayA9IHRoaXMuX2Jsb2Nrc1tiZWdpbkJsb2NrSW5kZXhdO1xyXG5cclxuICAgIGlmICghYmVnaW5CbG9jaykgcmV0dXJuIGN1cnNvclBvcztcclxuXHJcbiAgICBsZXQgYmVnaW5CbG9ja0N1cnNvclBvcyA9IGJlZ2luQmxvY2tPZmZzZXQ7XHJcbiAgICAvLyBpZiBwb3NpdGlvbiBpbnNpZGUgYmxvY2sgLSB0cnkgdG8gYWRqdXN0IGl0XHJcbiAgICBpZiAoYmVnaW5CbG9ja0N1cnNvclBvcyAhPT0gMCAmJiBiZWdpbkJsb2NrQ3Vyc29yUG9zIDwgYmVnaW5CbG9jay52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgYmVnaW5CbG9ja0N1cnNvclBvcyA9IGJlZ2luQmxvY2submVhcmVzdElucHV0UG9zKGJlZ2luQmxvY2tPZmZzZXQsIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnNvckF0UmlnaHQgPSBiZWdpbkJsb2NrQ3Vyc29yUG9zID09PSBiZWdpbkJsb2NrLnZhbHVlLmxlbmd0aDtcclxuICAgIGNvbnN0IGN1cnNvckF0TGVmdCA9IGJlZ2luQmxvY2tDdXJzb3JQb3MgPT09IDA7XHJcblxyXG4gICAgLy8gIGN1cnNvciBpcyBJTlNJREUgZmlyc3QgYmxvY2sgKG5vdCBhdCBib3VuZHMpXHJcbiAgICBpZiAoIWN1cnNvckF0TGVmdCAmJiAhY3Vyc29yQXRSaWdodCkgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmVnaW5CbG9ja0luZGV4KSArIGJlZ2luQmxvY2tDdXJzb3JQb3M7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoQmxvY2tJbmRleCA9IGN1cnNvckF0UmlnaHQgPyBiZWdpbkJsb2NrSW5kZXggKyAxIDogYmVnaW5CbG9ja0luZGV4O1xyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5OT05FKSB7XHJcbiAgICAgIC8vIE5PTkUgZGlyZWN0aW9uIHVzZWQgdG8gY2FsY3VsYXRlIHN0YXJ0IGlucHV0IHBvc2l0aW9uIGlmIG5vIGNoYXJzIHdlcmUgcmVtb3ZlZFxyXG4gICAgICAvLyBGT1IgTk9ORTpcclxuICAgICAgLy8gLVxyXG4gICAgICAvLyBpbnB1dHxhbnlcclxuICAgICAgLy8gLT5cclxuICAgICAgLy8gIGFueXxpbnB1dFxyXG4gICAgICAvLyA8LVxyXG4gICAgICAvLyAgZmlsbGVkLWlucHV0fGFueVxyXG5cclxuICAgICAgLy8gY2hlY2sgaWYgZmlyc3QgYmxvY2sgYXQgbGVmdCBpcyBpbnB1dFxyXG4gICAgICBpZiAoc2VhcmNoQmxvY2tJbmRleCA+IDApIHtcclxuICAgICAgICBjb25zdCBibG9ja0luZGV4QXRMZWZ0ID0gc2VhcmNoQmxvY2tJbmRleC0xO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrQXRMZWZ0ID0gdGhpcy5fYmxvY2tzW2Jsb2NrSW5kZXhBdExlZnRdO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSW5wdXRQb3MgPSBibG9ja0F0TGVmdC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xyXG4gICAgICAgIC8vIGlzIGlucHV0XHJcbiAgICAgICAgaWYgKCFibG9ja0F0TGVmdC52YWx1ZS5sZW5ndGggfHwgYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhzZWFyY2hCbG9ja0luZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC0+XHJcbiAgICAgIGxldCBmaXJzdElucHV0QXRSaWdodCA9IHNlYXJjaEJsb2NrSW5kZXg7XHJcbiAgICAgIGZvciAobGV0IGJpPWZpcnN0SW5wdXRBdFJpZ2h0OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcclxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XHJcbiAgICAgICAgY29uc3QgYmxvY2tJbnB1dFBvcyA9IGJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XHJcbiAgICAgICAgaWYgKGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgYmxvY2tJbnB1dFBvcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XHJcbiAgICAgIC8vIC1cclxuICAgICAgLy8gIGFueXxmaWxsZWQtaW5wdXRcclxuICAgICAgLy8gPC1cclxuICAgICAgLy8gIGFueXxmaXJzdCBub3QgZW1wdHkgaXMgbm90LWxlbi1hbGlnbmVkXHJcbiAgICAgIC8vICBub3QtMC1hbGlnbmVkfGFueVxyXG4gICAgICAvLyAtPlxyXG4gICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZCBvciBlbmRcclxuXHJcbiAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IHJpZ2h0IGlzIGZpbGxlZCBpbnB1dFxyXG4gICAgICBsZXQgZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodDtcclxuICAgICAgZm9yIChsZXQgYmk9c2VhcmNoQmxvY2tJbmRleDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUpIHtcclxuICAgICAgICAgIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgPSBiaTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZmlsbGVkQmxvY2sgPSB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodF07XHJcbiAgICAgICAgY29uc3QgYmxvY2tJbnB1dFBvcyA9IGZpbGxlZEJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uUklHSFQpO1xyXG4gICAgICAgIGlmIChibG9ja0lucHV0UG9zID09PSAwICYmIGZpbGxlZEJsb2NrLnVubWFza2VkVmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAvLyBmaWxsZWQgYmxvY2sgaXMgaW5wdXRcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQpICsgYmxvY2tJbnB1dFBvcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDwtXHJcbiAgICAgIC8vIGZpbmQgdGhpcyB2YXJzXHJcbiAgICAgIGxldCBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IC0xO1xyXG4gICAgICBsZXQgZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleDsgIC8vIFRPRE8gY29uc2lkZXIgbmVzdGVkIGVtcHR5IGlucHV0c1xyXG4gICAgICBmb3IgKGxldCBiaT1zZWFyY2hCbG9ja0luZGV4LTE7IGJpID49IDA7IC0tYmkpIHtcclxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XHJcbiAgICAgICAgY29uc3QgYmxvY2tJbnB1dFBvcyA9IGJsb2NrLm5lYXJlc3RJbnB1dFBvcyhibG9jay52YWx1ZS5sZW5ndGgsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcclxuICAgICAgICBpZiAoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCA9PSBudWxsICYmICghYmxvY2sudmFsdWUgfHwgYmxvY2tJbnB1dFBvcyAhPT0gMCkpIHtcclxuICAgICAgICAgIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggPSBiaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJsb2NrSW5wdXRQb3MgIT09IDApIHtcclxuICAgICAgICAgIGlmIChibG9ja0lucHV0UG9zICE9PSBibG9jay52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gYWxpZ25lZCBpbnNpZGUgYmxvY2sgLSByZXR1cm4gaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgYmxvY2tJbnB1dFBvcztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGZvdW5kIGZpbGxlZFxyXG4gICAgICAgICAgICBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IGJpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XHJcbiAgICAgICAgLy8gdHJ5IGZpbmQgZmlyc3QgZW1wdHkgaW5wdXQgYmVmb3JlIHN0YXJ0IHNlYXJjaGluZyBwb3NpdGlvbiBvbmx5IHdoZW4gbm90IGZvcmNlZFxyXG4gICAgICAgIGZvciAobGV0IGJpPWZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4KzE7IGJpIDw9IE1hdGgubWluKHNlYXJjaEJsb2NrSW5kZXgsIHRoaXMuX2Jsb2Nrcy5sZW5ndGgtMSk7ICsrYmkpIHtcclxuICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcclxuICAgICAgICAgIGNvbnN0IGJsb2NrSW5wdXRQb3MgPSBibG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xyXG4gICAgICAgICAgY29uc3QgYmxvY2tBbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBibG9ja0lucHV0UG9zO1xyXG4gICAgICAgICAgLy8gaWYgYmxvY2sgaXMgZW1wdHkgYW5kIGxhc3Qgb3Igbm90IGxhenkgaW5wdXRcclxuICAgICAgICAgIGlmICgoIWJsb2NrLnZhbHVlLmxlbmd0aCAmJiBibG9ja0FsaWduZWRQb3MgPT09IHRoaXMudmFsdWUubGVuZ3RoIHx8IGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrLnZhbHVlLmxlbmd0aCkgJiYgYmxvY2tBbGlnbmVkUG9zIDw9IGN1cnNvclBvcykge1xyXG4gICAgICAgICAgICByZXR1cm4gYmxvY2tBbGlnbmVkUG9zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcHJvY2VzcyBvdmVyZmxvd1xyXG4gICAgICBpZiAoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4KSArIHRoaXMuX2Jsb2Nrc1tmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleF0udmFsdWUubGVuZ3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBmb3IgbGF6eSBpZiBoYXMgYWxpZ25lZCBsZWZ0IGluc2lkZSBmaXhlZCBhbmQgaGFzIGNhbWUgdG8gdGhlIHN0YXJ0IC0gdXNlIHN0YXJ0IHBvc2l0aW9uXHJcbiAgICAgIGlmIChcclxuICAgICAgICBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUIHx8XHJcbiAgICAgICAgdGhpcy5sYXp5ICYmICF0aGlzLmV4dHJhY3RJbnB1dCgpICYmICFpc0lucHV0KHRoaXMuX2Jsb2Nrc1tzZWFyY2hCbG9ja0luZGV4XSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4ICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZmluZCBmaXJzdCBpbnB1dFxyXG4gICAgICBmb3IgKGxldCBiaT1zZWFyY2hCbG9ja0luZGV4OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcclxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XHJcbiAgICAgICAgY29uc3QgYmxvY2tJbnB1dFBvcyA9IGJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XHJcbiAgICAgICAgLy8gaXMgaW5wdXRcclxuICAgICAgICBpZiAoIWJsb2NrLnZhbHVlLmxlbmd0aCB8fCBibG9ja0lucHV0UG9zICE9PSBibG9jay52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKSArIGJsb2NrSW5wdXRQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uUklHSFQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHtcclxuICAgICAgLy8gLT5cclxuICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgYW5kIGZpbGxlZFxyXG4gICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZFxyXG4gICAgICAvLyA8LVxyXG4gICAgICAvLyAgbm90LTAtYWxpZ25lZCBvciBzdGFydHxhbnlcclxuICAgICAgbGV0IGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleDogP251bWJlcjtcclxuICAgICAgbGV0IGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3M6ID9udW1iZXI7XHJcbiAgICAgIGZvciAobGV0IGJpPXNlYXJjaEJsb2NrSW5kZXg7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcclxuICAgICAgICBjb25zdCBibG9ja0lucHV0UG9zID0gYmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcclxuICAgICAgICBpZiAoYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2sudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBibG9ja0lucHV0UG9zO1xyXG4gICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ID0gYmk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXggIT0gbnVsbCAmJiBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zICE9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBiaT1maXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xyXG4gICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG4gICAgICAgICAgY29uc3QgYmxvY2tJbnB1dFBvcyA9IGJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uRk9SQ0VfUklHSFQpO1xyXG4gICAgICAgICAgaWYgKGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBibG9ja0lucHV0UG9zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQgP1xyXG4gICAgICAgICAgdGhpcy52YWx1ZS5sZW5ndGggOlxyXG4gICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgYmk9TWF0aC5taW4oc2VhcmNoQmxvY2tJbmRleCwgdGhpcy5fYmxvY2tzLmxlbmd0aC0xKTsgYmkgPj0gMDsgLS1iaSkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcclxuICAgICAgICBjb25zdCBibG9ja0lucHV0UG9zID0gYmxvY2submVhcmVzdElucHV0UG9zKGJsb2NrLnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkxFRlQpO1xyXG4gICAgICAgIGlmIChibG9ja0lucHV0UG9zICE9PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCBhbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBibG9ja0lucHV0UG9zO1xyXG4gICAgICAgICAgaWYgKGFsaWduZWRQb3MgPj0gY3Vyc29yUG9zKSByZXR1cm4gYWxpZ25lZFBvcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJzb3JQb3M7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IGJsb2NrIGJ5IG5hbWUgKi9cclxuICBtYXNrZWRCbG9jayAobmFtZTogc3RyaW5nKTogP1BhdHRlcm5CbG9jayB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXNrZWRCbG9ja3MobmFtZSlbMF07XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IGFsbCBibG9ja3MgYnkgbmFtZSAqL1xyXG4gIG1hc2tlZEJsb2NrcyAobmFtZTogc3RyaW5nKTogQXJyYXk8UGF0dGVybkJsb2NrPiB7XHJcbiAgICBjb25zdCBpbmRpY2VzID0gdGhpcy5fbWFza2VkQmxvY2tzW25hbWVdO1xyXG4gICAgaWYgKCFpbmRpY2VzKSByZXR1cm4gW107XHJcbiAgICByZXR1cm4gaW5kaWNlcy5tYXAoZ2kgPT4gdGhpcy5fYmxvY2tzW2dpXSk7XHJcbiAgfVxyXG59XHJcbk1hc2tlZFBhdHRlcm4uREVGQVVMVFMgPSB7XHJcbiAgbGF6eTogdHJ1ZSxcclxuICBwbGFjZWhvbGRlckNoYXI6ICdfJ1xyXG59O1xyXG5NYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUiA9ICdgJztcclxuTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUiA9ICdcXFxcJztcclxuTWFza2VkUGF0dGVybi5JbnB1dERlZmluaXRpb24gPSBQYXR0ZXJuSW5wdXREZWZpbml0aW9uO1xyXG5NYXNrZWRQYXR0ZXJuLkZpeGVkRGVmaW5pdGlvbiA9IFBhdHRlcm5GaXhlZERlZmluaXRpb247XHJcblxyXG5mdW5jdGlvbiBpc0lucHV0IChibG9jazogUGF0dGVybkJsb2NrKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFibG9jaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IGJsb2NrLnZhbHVlO1xyXG4gIHJldHVybiAhdmFsdWUgfHwgYmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKSAhPT0gdmFsdWUubGVuZ3RoO1xyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XHJcbmltcG9ydCB7IHR5cGUgQXBwZW5kRmxhZ3MgfSBmcm9tICcuL2Jhc2UuanMnO1xyXG5cclxuXHJcbi8qKiBQYXR0ZXJuIHdoaWNoIGFjY2VwdHMgcmFuZ2VzICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIE1hc2tlZFJhbmdlIGV4dGVuZHMgTWFza2VkUGF0dGVybiB7XHJcbiAgLyoqXHJcbiAgICBPcHRpb25hbGx5IHNldHMgbWF4IGxlbmd0aCBvZiBwYXR0ZXJuLlxyXG4gICAgVXNlZCB3aGVuIHBhdHRlcm4gbGVuZ3RoIGlzIGxvbmdlciB0aGVuIGB0b2AgcGFyYW0gbGVuZ3RoLiBQYWRzIHplcm9zIGF0IHN0YXJ0IGluIHRoaXMgY2FzZS5cclxuICAqL1xyXG4gIG1heExlbmd0aDogbnVtYmVyO1xyXG4gIC8qKiBNaW4gYm91bmQgKi9cclxuICBmcm9tOiBudW1iZXI7XHJcbiAgLyoqIE1heCBib3VuZCAqL1xyXG4gIHRvOiBudW1iZXI7XHJcbiAgLyoqICovXHJcbiAgYXV0b2ZpeDogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IF9tYXRjaEZyb20gKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX3VwZGF0ZSAob3B0czogYW55KSB7ICAvLyBUT0RPIHR5cGVcclxuICAgIG9wdHMgPSB7XHJcbiAgICAgIHRvOiB0aGlzLnRvIHx8IDAsXHJcbiAgICAgIGZyb206IHRoaXMuZnJvbSB8fCAwLFxyXG4gICAgICAuLi5vcHRzLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgbWF4TGVuZ3RoID0gU3RyaW5nKG9wdHMudG8pLmxlbmd0aDtcclxuICAgIGlmIChvcHRzLm1heExlbmd0aCAhPSBudWxsKSBtYXhMZW5ndGggPSBNYXRoLm1heChtYXhMZW5ndGgsIG9wdHMubWF4TGVuZ3RoKTtcclxuICAgIG9wdHMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGZyb21TdHIgPSBTdHJpbmcob3B0cy5mcm9tKS5wYWRTdGFydChtYXhMZW5ndGgsICcwJyk7XHJcbiAgICBjb25zdCB0b1N0ciA9IFN0cmluZyhvcHRzLnRvKS5wYWRTdGFydChtYXhMZW5ndGgsICcwJyk7XHJcbiAgICBsZXQgc2FtZUNoYXJzQ291bnQgPSAwO1xyXG4gICAgd2hpbGUgKHNhbWVDaGFyc0NvdW50IDwgdG9TdHIubGVuZ3RoICYmIHRvU3RyW3NhbWVDaGFyc0NvdW50XSA9PT0gZnJvbVN0cltzYW1lQ2hhcnNDb3VudF0pICsrc2FtZUNoYXJzQ291bnQ7XHJcbiAgICBvcHRzLm1hc2sgPSB0b1N0ci5zbGljZSgwLCBzYW1lQ2hhcnNDb3VudCkucmVwbGFjZSgvMC9nLCAnXFxcXDAnKSArICcwJy5yZXBlYXQobWF4TGVuZ3RoIC0gc2FtZUNoYXJzQ291bnQpO1xyXG5cclxuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IGlzQ29tcGxldGUgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN1cGVyLmlzQ29tcGxldGUgJiYgQm9vbGVhbih0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGJvdW5kYXJpZXMgKHN0cjogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XHJcbiAgICBsZXQgbWluc3RyID0gJyc7XHJcbiAgICBsZXQgbWF4c3RyID0gJyc7XHJcblxyXG4gICAgY29uc3QgWywgcGxhY2Vob2xkZXIsIG51bV0gPSBzdHIubWF0Y2goL14oXFxEKikoXFxkKikoXFxEKikvKSB8fCBbXTtcclxuICAgIGlmIChudW0pIHtcclxuICAgICAgbWluc3RyID0gJzAnLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xyXG4gICAgICBtYXhzdHIgPSAnOScucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XHJcbiAgICB9XHJcbiAgICBtaW5zdHIgPSBtaW5zdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xyXG4gICAgbWF4c3RyID0gbWF4c3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzknKTtcclxuXHJcbiAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBkb1ByZXBhcmUgKHN0cjogc3RyaW5nLCBmbGFnczogQXBwZW5kRmxhZ3M9e30pOiBzdHJpbmcge1xyXG4gICAgc3RyID0gc3VwZXIuZG9QcmVwYXJlKHN0ciwgZmxhZ3MpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XHJcbiAgICBpZiAoIXRoaXMuYXV0b2ZpeCkgcmV0dXJuIHN0cjtcclxuXHJcbiAgICBjb25zdCBmcm9tU3RyID0gU3RyaW5nKHRoaXMuZnJvbSkucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XHJcbiAgICBjb25zdCB0b1N0ciA9IFN0cmluZyh0aGlzLnRvKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcclxuXHJcbiAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgbGV0IHByZXBTdHIgPSAnJztcclxuICAgIGZvciAobGV0IGNpPTA7IGNpPHN0ci5sZW5ndGg7ICsrY2kpIHtcclxuICAgICAgY29uc3QgbmV4dFZhbCA9IHZhbCArIHByZXBTdHIgKyBzdHJbY2ldO1xyXG4gICAgICBjb25zdCBbbWluc3RyLCBtYXhzdHJdID0gdGhpcy5ib3VuZGFyaWVzKG5leHRWYWwpO1xyXG5cclxuICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSBwcmVwU3RyICs9IGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtcclxuICAgICAgZWxzZSBpZiAoTnVtYmVyKG1pbnN0cikgPiB0aGlzLnRvKSBwcmVwU3RyICs9IHRvU3RyW25leHRWYWwubGVuZ3RoIC0gMV07XHJcbiAgICAgIGVsc2UgcHJlcFN0ciArPSBzdHJbY2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmVwU3RyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvVmFsaWRhdGUgKC4uLmFyZ3M6ICopOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHN0ciA9IHRoaXMudmFsdWU7XHJcblxyXG4gICAgY29uc3QgZmlyc3ROb25aZXJvID0gc3RyLnNlYXJjaCgvW14wXS8pO1xyXG4gICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gLTEgJiYgc3RyLmxlbmd0aCA8PSB0aGlzLl9tYXRjaEZyb20pIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IFttaW5zdHIsIG1heHN0cl0gPSB0aGlzLmJvdW5kYXJpZXMoc3RyKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiZcclxuICAgICAgc3VwZXIuZG9WYWxpZGF0ZSguLi5hcmdzKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcclxuaW1wb3J0IE1hc2tlZFJhbmdlIGZyb20gJy4vcmFuZ2UuanMnO1xyXG5cclxuXHJcbi8qKiBEYXRlIG1hc2sgKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgTWFza2VkRGF0ZSBleHRlbmRzIE1hc2tlZFBhdHRlcm4ge1xyXG4gIHN0YXRpYyBHRVRfREVGQVVMVF9CTE9DS1M6ICgpID0+IHtbc3RyaW5nXTogYW55fTtcclxuICBzdGF0aWMgREVGQVVMVFM6IGFueTtcclxuXHJcbiAgLyoqIFBhcnNlIHN0cmluZyB0byBEYXRlICovXHJcbiAgcGFyc2U6IChzdHJpbmcpID0+IERhdGU7XHJcbiAgLyoqIEZvcm1hdCBEYXRlIHRvIHN0cmluZyAqL1xyXG4gIGZvcm1hdDogKERhdGUpID0+IHN0cmluZztcclxuICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXHJcbiAgcGF0dGVybjogc3RyaW5nO1xyXG4gIC8qKiBTdGFydCBkYXRlICovXHJcbiAgbWluOiA/RGF0ZTtcclxuICAvKiogRW5kIGRhdGUgKi9cclxuICBtYXg6ID9EYXRlO1xyXG4gIC8qKiAqL1xyXG4gIGF1dG9maXg6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yIChvcHRzOiBhbnkpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgLi4uTWFza2VkRGF0ZS5ERUZBVUxUUyxcclxuICAgICAgLi4ub3B0c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX3VwZGF0ZSAob3B0czogYW55KSB7XHJcbiAgICBpZiAob3B0cy5tYXNrID09PSBEYXRlKSBkZWxldGUgb3B0cy5tYXNrO1xyXG4gICAgaWYgKG9wdHMucGF0dGVybikge1xyXG4gICAgICBvcHRzLm1hc2sgPSBvcHRzLnBhdHRlcm47XHJcbiAgICAgIGRlbGV0ZSBvcHRzLnBhdHRlcm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvY2tzID0gb3B0cy5ibG9ja3M7XHJcbiAgICBvcHRzLmJsb2NrcyA9IE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTKCkpO1xyXG4gICAgLy8gYWRqdXN0IHllYXIgYmxvY2tcclxuICAgIGlmIChvcHRzLm1pbikgb3B0cy5ibG9ja3MuWS5mcm9tID0gb3B0cy5taW4uZ2V0RnVsbFllYXIoKTtcclxuICAgIGlmIChvcHRzLm1heCkgb3B0cy5ibG9ja3MuWS50byA9IG9wdHMubWF4LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBpZiAob3B0cy5taW4gJiYgb3B0cy5tYXggJiYgb3B0cy5ibG9ja3MuWS5mcm9tID09PSBvcHRzLmJsb2Nrcy5ZLnRvXHJcbiAgICApIHtcclxuICAgICAgb3B0cy5ibG9ja3MubS5mcm9tID0gb3B0cy5taW4uZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgIG9wdHMuYmxvY2tzLm0udG8gPSBvcHRzLm1heC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICAgIGlmIChvcHRzLmJsb2Nrcy5tLmZyb20gPT09IG9wdHMuYmxvY2tzLm0udG8pIHtcclxuICAgICAgICBvcHRzLmJsb2Nrcy5kLmZyb20gPSBvcHRzLm1pbi5nZXREYXRlKCk7XHJcbiAgICAgICAgb3B0cy5ibG9ja3MuZC50byA9IG9wdHMubWF4LmdldERhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmFzc2lnbihvcHRzLmJsb2NrcywgYmxvY2tzKTtcclxuXHJcbiAgICAvLyBhZGQgYXV0b2ZpeFxyXG4gICAgT2JqZWN0LmtleXMob3B0cy5ibG9ja3MpLmZvckVhY2goYmsgPT4ge1xyXG4gICAgICBjb25zdCBiID0gb3B0cy5ibG9ja3NbYmtdO1xyXG4gICAgICBpZiAoISgnYXV0b2ZpeCcgaW4gYikpIGIuYXV0b2ZpeCA9IG9wdHMuYXV0b2ZpeDtcclxuICAgIH0pO1xyXG5cclxuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9WYWxpZGF0ZSAoLi4uYXJnczogKik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZTtcclxuXHJcbiAgICByZXR1cm4gc3VwZXIuZG9WYWxpZGF0ZSguLi5hcmdzKSAmJlxyXG4gICAgICAoIXRoaXMuaXNDb21wbGV0ZSB8fFxyXG4gICAgICAgIHRoaXMuaXNEYXRlRXhpc3QodGhpcy52YWx1ZSkgJiYgZGF0ZSAhPSBudWxsICYmXHJcbiAgICAgICAgKHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPD0gZGF0ZSkgJiZcclxuICAgICAgICAodGhpcy5tYXggPT0gbnVsbCB8fCBkYXRlIDw9IHRoaXMubWF4KSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2hlY2tzIGlmIGRhdGUgaXMgZXhpc3RzICovXHJcbiAgaXNEYXRlRXhpc3QgKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQodGhpcy5wYXJzZShzdHIpKSA9PT0gc3RyO1xyXG4gIH1cclxuXHJcbiAgLyoqIFBhcnNlZCBEYXRlICovXHJcbiAgZ2V0IGRhdGUgKCk6ID9EYXRlIHtcclxuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgP1xyXG4gICAgICB0aGlzLnBhcnNlKHRoaXMudmFsdWUpIDpcclxuICAgICAgbnVsbDtcclxuICB9XHJcbiAgc2V0IGRhdGUgKGRhdGU6IERhdGUpIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1hdChkYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgdHlwZWRWYWx1ZSAoKTogP0RhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICB9XHJcbiAgc2V0IHR5cGVkVmFsdWUgKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuTWFza2VkRGF0ZS5ERUZBVUxUUyA9IHtcclxuICBwYXR0ZXJuOiAnZHsufWBtey59YFknLFxyXG4gIGZvcm1hdDogZGF0ZSA9PiB7XHJcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdLmpvaW4oJy4nKTtcclxuICB9LFxyXG4gIHBhcnNlOiBzdHIgPT4ge1xyXG4gICAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gc3RyLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xyXG4gIH0sXHJcbn07XHJcbk1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTID0gKCkgPT4gKHtcclxuICBkOiB7XHJcbiAgICBtYXNrOiBNYXNrZWRSYW5nZSxcclxuICAgIGZyb206IDEsXHJcbiAgICB0bzogMzEsXHJcbiAgICBtYXhMZW5ndGg6IDIsXHJcbiAgfSxcclxuICBtOiB7XHJcbiAgICBtYXNrOiBNYXNrZWRSYW5nZSxcclxuICAgIGZyb206IDEsXHJcbiAgICB0bzogMTIsXHJcbiAgICBtYXhMZW5ndGg6IDIsXHJcbiAgfSxcclxuICBZOiB7XHJcbiAgICBtYXNrOiBNYXNrZWRSYW5nZSxcclxuICAgIGZyb206IDE5MDAsXHJcbiAgICB0bzogOTk5OSxcclxuICB9XHJcbn0pO1xyXG4iLCIvLyBAZmxvd1xyXG5cclxuZXhwb3J0XHJcbnR5cGUgRWxlbWVudEV2ZW50ID1cclxuICAnc2VsZWN0aW9uQ2hhbmdlJyB8XHJcbiAgJ2lucHV0JyB8XHJcbiAgJ2Ryb3AnIHxcclxuICAnY2xpY2snIHxcclxuICAnZm9jdXMnIHxcclxuICAnY29tbWl0JztcclxuXHJcbi8qKlxyXG4gIEdlbmVyaWMgZWxlbWVudCBBUEkgdG8gdXNlIHdpdGggbWFza1xyXG4gIEBpbnRlcmZhY2VcclxuKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgTWFza0VsZW1lbnQge1xyXG4gIC8qKiAqL1xyXG4gICtfdW5zYWZlU2VsZWN0aW9uU3RhcnQ6IG51bWJlcjtcclxuICAvKiogKi9cclxuICArX3Vuc2FmZVNlbGVjdGlvbkVuZDogbnVtYmVyO1xyXG4gIC8qKiAqL1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cclxuICBnZXQgc2VsZWN0aW9uU3RhcnQgKCk6IG51bWJlciB7XHJcbiAgICBsZXQgc3RhcnQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdGFydCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvblN0YXJ0O1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICByZXR1cm4gc3RhcnQgIT0gbnVsbCA/XHJcbiAgICAgIHN0YXJ0IDpcclxuICAgICAgdGhpcy52YWx1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKiogU2FmZWx5IHJldHVybnMgc2VsZWN0aW9uIGVuZCAqL1xyXG4gIGdldCBzZWxlY3Rpb25FbmQgKCk6IG51bWJlciB7XHJcbiAgICBsZXQgZW5kO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZW5kID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uRW5kO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICByZXR1cm4gZW5kICE9IG51bGwgP1xyXG4gICAgICBlbmQgOlxyXG4gICAgICB0aGlzLnZhbHVlLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKiBTYWZlbHkgc2V0cyBlbGVtZW50IHNlbGVjdGlvbiAqL1xyXG4gIHNlbGVjdCAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgIGlmIChzdGFydCA9PSBudWxsIHx8IGVuZCA9PSBudWxsIHx8XHJcbiAgICAgIHN0YXJ0ID09PSB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIGVuZCA9PT0gdGhpcy5zZWxlY3Rpb25FbmQpIHJldHVybjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH1cclxuXHJcbiAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xyXG4gIF91bnNhZmVTZWxlY3QgKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogdm9pZCB7fVxyXG4gIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cclxuICBnZXQgaXNBY3RpdmUgKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXHJcbiAgYmluZEV2ZW50cyAoaGFuZGxlcnM6IHtbRWxlbWVudEV2ZW50XTogRnVuY3Rpb259KSB7fVxyXG4gIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cclxuICB1bmJpbmRFdmVudHMgKCk6IHZvaWQge31cclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgTWFza0VsZW1lbnQsIHt0eXBlIEVsZW1lbnRFdmVudH0gZnJvbSAnLi9tYXNrLWVsZW1lbnQuanMnO1xyXG5cclxuXHJcbi8qKiBCcmlkZ2UgYmV0d2VlbiBIVE1MRWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgSFRNTE1hc2tFbGVtZW50IGV4dGVuZHMgTWFza0VsZW1lbnQge1xyXG4gIC8qKiBNYXBwaW5nIGJldHdlZW4gSFRNTEVsZW1lbnQgZXZlbnRzIGFuZCBtYXNrIGludGVybmFsIGV2ZW50cyAqL1xyXG4gIHN0YXRpYyBFVkVOVFNfTUFQOiB7W0VsZW1lbnRFdmVudF06IHN0cmluZ307XHJcbiAgLyoqIEhUTUxFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXHJcbiAgaW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIF9oYW5kbGVyczoge1tzdHJpbmddOiBGdW5jdGlvbn07XHJcblxyXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0XHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvciAoaW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gICAgdGhpcy5faGFuZGxlcnMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgSXMgZWxlbWVudCBpbiBmb2N1c1xyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgaXNBY3RpdmUgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0XHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCBfdW5zYWZlU2VsZWN0aW9uU3RhcnQgKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCBfdW5zYWZlU2VsZWN0aW9uRW5kICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBfdW5zYWZlU2VsZWN0IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgSFRNTEVsZW1lbnQgdmFsdWVcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSAodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBCaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgYmluZEV2ZW50cyAoaGFuZGxlcnM6IHtbRWxlbWVudEV2ZW50XTogRnVuY3Rpb259KSB7XHJcbiAgICBPYmplY3Qua2V5cyhoYW5kbGVycylcclxuICAgICAgLmZvckVhY2goZXZlbnQgPT4gdGhpcy5fdG9nZ2xlRXZlbnRIYW5kbGVyKEhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQW2V2ZW50XSwgaGFuZGxlcnNbZXZlbnRdKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIHVuYmluZEV2ZW50cyAoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVycylcclxuICAgICAgLmZvckVhY2goZXZlbnQgPT4gdGhpcy5fdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfdG9nZ2xlRXZlbnRIYW5kbGVyIChldmVudDogc3RyaW5nLCBoYW5kbGVyPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9oYW5kbGVyc1tldmVudF0pIHtcclxuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9oYW5kbGVyc1tldmVudF0pO1xyXG4gICAgICBkZWxldGUgdGhpcy5faGFuZGxlcnNbZXZlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XHJcbiAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xyXG4gIHNlbGVjdGlvbkNoYW5nZTogJ2tleWRvd24nLFxyXG4gIGlucHV0OiAnaW5wdXQnLFxyXG4gIGRyb3A6ICdkcm9wJyxcclxuICBjbGljazogJ2NsaWNrJyxcclxuICBmb2N1czogJ2ZvY3VzJyxcclxuICBjb21taXQ6ICdibHVyJyxcclxufTtcclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IHtvYmplY3RJbmNsdWRlcywgRElSRUNUSU9OLCB0eXBlIFNlbGVjdGlvbn0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XHJcbmltcG9ydCBBY3Rpb25EZXRhaWxzIGZyb20gJy4uL2NvcmUvYWN0aW9uLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgTWFza2VkRGF0ZSBmcm9tICcuLi9tYXNrZWQvZGF0ZS5qcyc7XHJcbmltcG9ydCBjcmVhdGVNYXNrLCB7bWFza2VkQ2xhc3N9IGZyb20gJy4uL21hc2tlZC9mYWN0b3J5LmpzJztcclxuaW1wb3J0IHR5cGUgTWFza2VkIGZyb20gJy4uL21hc2tlZC9iYXNlLmpzJztcclxuaW1wb3J0IHt0eXBlIE1hc2t9IGZyb20gJy4uL21hc2tlZC9iYXNlLmpzJztcclxuaW1wb3J0IE1hc2tFbGVtZW50IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcclxuaW1wb3J0IEhUTUxNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtbWFzay1lbGVtZW50LmpzJztcclxuXHJcblxyXG4vKiogTGlzdGVucyB0byBlbGVtZW50IGV2ZW50cyBhbmQgY29udHJvbHMgY2hhbmdlcyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIElucHV0TWFzayB7XHJcbiAgLyoqXHJcbiAgICBWaWV3IGVsZW1lbnRcclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZWw6IE1hc2tFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgIEludGVybmFsIHtAbGluayBNYXNrZWR9IG1vZGVsXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIG1hc2tlZDogTWFza2VkPCo+O1xyXG4gIGFsaWduQ3Vyc29yOiAoKSA9PiB2b2lkO1xyXG4gIGFsaWduQ3Vyc29yRnJpZW5kbHk6ICgpID0+IHZvaWQ7XHJcblxyXG4gIF9saXN0ZW5lcnM6IHtbc3RyaW5nXTogQXJyYXk8RnVuY3Rpb24+fTtcclxuICBfdmFsdWU6IHN0cmluZztcclxuICBfY2hhbmdpbmdDdXJzb3JQb3M6IG51bWJlcjtcclxuICBfdW5tYXNrZWRWYWx1ZTogc3RyaW5nO1xyXG4gIF9zYXZlU2VsZWN0aW9uOiAoP0V2ZW50KSA9PiB2b2lkO1xyXG4gIF9zZWxlY3Rpb246IFNlbGVjdGlvbjtcclxuICBfb25JbnB1dDogKCkgPT4gdm9pZDtcclxuICBfb25DaGFuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgX29uRHJvcDogKEV2ZW50KSA9PiB2b2lkO1xyXG4gIF9vbkZvY3VzOiAoRXZlbnQpID0+IHZvaWQ7XHJcbiAgX2N1cnNvckNoYW5naW5nOiBUaW1lb3V0SUQ7XHJcblxyXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtNYXNrRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGVsXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXHJcbiAgY29uc3RydWN0b3IgKGVsOiBNYXNrRWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50LCBvcHRzOiB7W3N0cmluZ106IGFueX0pIHtcclxuICAgIHRoaXMuZWwgPSAoZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCkgP1xyXG4gICAgICBlbCA6XHJcbiAgICAgIG5ldyBIVE1MTWFza0VsZW1lbnQoZWwpO1xyXG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG9wdHMpO1xyXG5cclxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG4gICAgdGhpcy5fdmFsdWUgPSAnJztcclxuICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSAnJztcclxuXHJcbiAgICB0aGlzLl9zYXZlU2VsZWN0aW9uID0gdGhpcy5fc2F2ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX29uRHJvcCA9IHRoaXMuX29uRHJvcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkgPSB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgLy8gcmVmcmVzaFxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIC8qKiBSZWFkIG9yIHVwZGF0ZSBtYXNrICovXHJcbiAgZ2V0IG1hc2sgKCk6IE1hc2sge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XHJcbiAgfVxyXG5cclxuICBzZXQgbWFzayAobWFzazogTWFzaykge1xyXG4gICAgaWYgKG1hc2sgPT0gbnVsbCB8fFxyXG4gICAgICBtYXNrID09PSB0aGlzLm1hc2tlZC5tYXNrIHx8XHJcbiAgICAgIG1hc2sgPT09IERhdGUgJiYgdGhpcy5tYXNrZWQgaW5zdGFuY2VvZiBNYXNrZWREYXRlKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMubWFza2VkLmNvbnN0cnVjdG9yID09PSBtYXNrZWRDbGFzcyhtYXNrKSkge1xyXG4gICAgICB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHttYXNrfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXNrZWQgPSBjcmVhdGVNYXNrKHttYXNrfSk7XHJcbiAgICBtYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XHJcbiAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcclxuICB9XHJcblxyXG4gIC8qKiBSYXcgdmFsdWUgKi9cclxuICBnZXQgdmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUgKHN0cjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHN0cjtcclxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG4gICAgdGhpcy5hbGlnbkN1cnNvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVubWFza2VkIHZhbHVlICovXHJcbiAgZ2V0IHVubWFza2VkVmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdW5tYXNrZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB1bm1hc2tlZFZhbHVlIChzdHI6IHN0cmluZykge1xyXG4gICAgdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHN0cjtcclxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG4gICAgdGhpcy5hbGlnbkN1cnNvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFR5cGVkIHVubWFza2VkIHZhbHVlICovXHJcbiAgZ2V0IHR5cGVkVmFsdWUgKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQudHlwZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB0eXBlZFZhbHVlICh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5tYXNrZWQudHlwZWRWYWx1ZSA9IHZhbDtcclxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG4gICAgdGhpcy5hbGlnbkN1cnNvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBTdGFydHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXHJcbiAgICBAcHJvdGVjdGVkXHJcbiAgKi9cclxuICBfYmluZEV2ZW50cyAoKSB7XHJcbiAgICB0aGlzLmVsLmJpbmRFdmVudHMoe1xyXG4gICAgICBzZWxlY3Rpb25DaGFuZ2U6IHRoaXMuX3NhdmVTZWxlY3Rpb24sXHJcbiAgICAgIGlucHV0OiB0aGlzLl9vbklucHV0LFxyXG4gICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXHJcbiAgICAgIGNsaWNrOiB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHksXHJcbiAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxyXG4gICAgICBjb21taXQ6IHRoaXMuX29uQ2hhbmdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFN0b3BzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xyXG4gICAgQHByb3RlY3RlZFxyXG4gICAqL1xyXG4gIF91bmJpbmRFdmVudHMgKCkge1xyXG4gICAgdGhpcy5lbC51bmJpbmRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgRmlyZXMgY3VzdG9tIGV2ZW50XHJcbiAgICBAcHJvdGVjdGVkXHJcbiAgICovXHJcbiAgX2ZpcmVFdmVudCAoZXY6IHN0cmluZykge1xyXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcclxuICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47XHJcblxyXG4gICAgbGlzdGVuZXJzLmZvckVhY2gobCA9PiBsKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBDdXJyZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgc2VsZWN0aW9uU3RhcnQgKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgP1xyXG4gICAgICB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6XHJcblxyXG4gICAgICB0aGlzLmVsLnNlbGVjdGlvblN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXHJcbiAgZ2V0IGN1cnNvclBvcyAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/XHJcbiAgICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDpcclxuXHJcbiAgICAgIHRoaXMuZWwuc2VsZWN0aW9uRW5kO1xyXG4gIH1cclxuICBzZXQgY3Vyc29yUG9zIChwb3M6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmVsLmlzQWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbC5zZWxlY3QocG9zLCBwb3MpO1xyXG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBTdG9yZXMgY3VycmVudCBzZWxlY3Rpb25cclxuICAgIEBwcm90ZWN0ZWRcclxuICAqL1xyXG4gIF9zYXZlU2VsZWN0aW9uICgvKiBldiAqLykge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdFbGVtZW50IHZhbHVlIHdhcyBjaGFuZ2VkIG91dHNpZGUgb2YgbWFzay4gU3luY3Jvbml6ZSBtYXNrIHVzaW5nIGBtYXNrLnVwZGF0ZVZhbHVlKClgIHRvIHdvcmsgcHJvcGVybHkuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VsZWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogdGhpcy5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgZW5kOiB0aGlzLmN1cnNvclBvc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKiBTeW5jcm9uaXplcyBtb2RlbCB2YWx1ZSBmcm9tIHZpZXcgKi9cclxuICB1cGRhdGVWYWx1ZSAoKSB7XHJcbiAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHRoaXMuZWwudmFsdWU7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFN5bmNyb25pemVzIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZSwgZmlyZXMgY2hhbmdlIGV2ZW50cyAqL1xyXG4gIHVwZGF0ZUNvbnRyb2wgKCkge1xyXG4gICAgY29uc3QgbmV3VW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xyXG4gICAgY29uc3QgaXNDaGFuZ2VkID0gKHRoaXMudW5tYXNrZWRWYWx1ZSAhPT0gbmV3VW5tYXNrZWRWYWx1ZSB8fFxyXG4gICAgICB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZSk7XHJcblxyXG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IG5ld1VubWFza2VkVmFsdWU7XHJcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmVsLnZhbHVlICE9PSBuZXdWYWx1ZSkgdGhpcy5lbC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgaWYgKGlzQ2hhbmdlZCkgdGhpcy5fZmlyZUNoYW5nZUV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVwZGF0ZXMgb3B0aW9ucyB3aXRoIGRlZXAgZXF1YWwgY2hlY2ssIHJlY3JlYXRlcyBAe2xpbmsgTWFza2VkfSBtb2RlbCBpZiBtYXNrIHR5cGUgY2hhbmdlcyAqL1xyXG4gIHVwZGF0ZU9wdGlvbnMgKG9wdHM6IHtbc3RyaW5nXTogYW55fSkge1xyXG4gICAgaWYgKG9iamVjdEluY2x1ZGVzKHRoaXMubWFza2VkLCBvcHRzKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgbWFzaywgLi4ucmVzdE9wdHMgfSA9IG9wdHM7XHJcblxyXG4gICAgdGhpcy5tYXNrID0gbWFzaztcclxuICAgIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMocmVzdE9wdHMpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVwZGF0ZXMgY3Vyc29yICovXHJcbiAgdXBkYXRlQ3Vyc29yIChjdXJzb3JQb3M6IG51bWJlcikge1xyXG4gICAgaWYgKGN1cnNvclBvcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvcztcclxuXHJcbiAgICAvLyBhbHNvIHF1ZXVlIGNoYW5nZSBjdXJzb3IgZm9yIG1vYmlsZSBicm93c2Vyc1xyXG4gICAgdGhpcy5fZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnNcclxuICAgIEBwcml2YXRlXHJcbiAgKi9cclxuICBfZGVsYXlVcGRhdGVDdXJzb3IgKGN1cnNvclBvczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xyXG4gICAgdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgPSBjdXJzb3JQb3M7XHJcbiAgICB0aGlzLl9jdXJzb3JDaGFuZ2luZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuZWwpIHJldHVybjsgLy8gaWYgd2FzIGRlc3Ryb3llZFxyXG4gICAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zO1xyXG4gICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBGaXJlcyBjdXN0b20gZXZlbnRzXHJcbiAgICBAcHJvdGVjdGVkXHJcbiAgKi9cclxuICBfZmlyZUNoYW5nZUV2ZW50cyAoKSB7XHJcbiAgICB0aGlzLl9maXJlRXZlbnQoJ2FjY2VwdCcpO1xyXG4gICAgaWYgKHRoaXMubWFza2VkLmlzQ29tcGxldGUpIHRoaXMuX2ZpcmVFdmVudCgnY29tcGxldGUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQWJvcnRzIGRlbGF5ZWQgY3Vyc29yIHVwZGF0ZVxyXG4gICAgQHByaXZhdGVcclxuICAqL1xyXG4gIF9hYm9ydFVwZGF0ZUN1cnNvciAoKSB7XHJcbiAgICBpZiAodGhpcy5fY3Vyc29yQ2hhbmdpbmcpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2N1cnNvckNoYW5naW5nKTtcclxuICAgICAgZGVsZXRlIHRoaXMuX2N1cnNvckNoYW5naW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEFsaWducyBjdXJzb3IgdG8gbmVhcmVzdCBhdmFpbGFibGUgcG9zaXRpb24gKi9cclxuICBhbGlnbkN1cnNvciAoKSB7XHJcbiAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLmN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFsaWducyBjdXJzb3Igb25seSBpZiBzZWxlY3Rpb24gaXMgZW1wdHkgKi9cclxuICBhbGlnbkN1cnNvckZyaWVuZGx5ICgpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAgLy8gc2tpcCBpZiByYW5nZSBpcyBzZWxlY3RlZFxyXG4gICAgdGhpcy5hbGlnbkN1cnNvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXHJcbiAgb24gKGV2OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHRoaXMuX2xpc3RlbmVyc1tldl0gPSBbXTtcclxuICAgIHRoaXMuX2xpc3RlbmVyc1tldl0ucHVzaChoYW5kbGVyKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlbW92ZXMgY3VzdG9tIGV2ZW50IGxpc3RlbmVyICovXHJcbiAgb2ZmIChldjogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSByZXR1cm4gdGhpcztcclxuICAgIGlmICghaGFuZGxlcikge1xyXG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XHJcbiAgICBpZiAoaEluZGV4ID49IDApIHRoaXMuX2xpc3RlbmVyc1tldl0uc3BsaWNlKGhJbmRleCwgMSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHZpZXcgaW5wdXQgZXZlbnQgKi9cclxuICBfb25JbnB1dCAoKSB7XHJcbiAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xyXG5cclxuICAgIC8vIGZpeCBzdHJhbmdlIElFIGJlaGF2aW9yXHJcbiAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbikgcmV0dXJuIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IEFjdGlvbkRldGFpbHMoXHJcbiAgICAgIC8vIG5ldyBzdGF0ZVxyXG4gICAgICB0aGlzLmVsLnZhbHVlLCB0aGlzLmN1cnNvclBvcyxcclxuICAgICAgLy8gb2xkIHN0YXRlXHJcbiAgICAgIHRoaXMudmFsdWUsIHRoaXMuX3NlbGVjdGlvbik7XHJcblxyXG4gICAgY29uc3Qgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xyXG5cclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShcclxuICAgICAgZGV0YWlscy5zdGFydENoYW5nZVBvcyxcclxuICAgICAgZGV0YWlscy5yZW1vdmVkLmxlbmd0aCxcclxuICAgICAgZGV0YWlscy5pbnNlcnRlZCxcclxuICAgICAgZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24pLm9mZnNldDtcclxuXHJcbiAgICAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXHJcbiAgICAvLyBvdGhlcndpc2Ugd2Ugc3RpbGwgbmVlZCB0byBhbGlnbiB3aXRoIE5PTkUgKHRvIGdldCBvdXQgZnJvbSBmaXhlZCBzeW1ib2xzIGZvciBpbnN0YW5jZSlcclxuICAgIGNvbnN0IHJlbW92ZURpcmVjdGlvbiA9IG9sZFJhd1ZhbHVlID09PSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlID9cclxuICAgICAgZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24gOlxyXG4gICAgICBESVJFQ1RJT04uTk9ORTtcclxuXHJcbiAgICBjb25zdCBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoXHJcbiAgICAgIGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MgKyBvZmZzZXQsXHJcbiAgICAgIHJlbW92ZURpcmVjdGlvbixcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDb250cm9sKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cclxuICBfb25DaGFuZ2UgKCkge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcclxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdmlldyBkcm9wIGV2ZW50LCBwcmV2ZW50cyBieSBkZWZhdWx0ICovXHJcbiAgX29uRHJvcCAoZXY6IEV2ZW50KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xyXG4gIF9vbkZvY3VzIChldjogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAgLy8gc2tpcCBpZiByYW5nZSBpcyBzZWxlY3RlZFxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvbikgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLl9zZWxlY3Rpb24uZW5kO1xyXG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XHJcbiAgfVxyXG5cclxuICAvKiogVW5iaW5kIHZpZXcgZXZlbnRzIGFuZCByZW1vdmVzIGVsZW1lbnQgcmVmZXJlbmNlICovXHJcbiAgZGVzdHJveSAoKSB7XHJcbiAgICB0aGlzLl91bmJpbmRFdmVudHMoKTtcclxuICAgIC8vICRGbG93Rml4TWUgd2h5IG5vdCBkbyBzbz9cclxuICAgIHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPSAwO1xyXG4gICAgZGVsZXRlIHRoaXMuZWw7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XHJcblxyXG5cclxuLyoqIFBhdHRlcm4gd2hpY2ggdmFsaWRhdGVzIGVudW0gdmFsdWVzICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIE1hc2tlZEVudW0gZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuIHtcclxuICBlbnVtOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xyXG4gIF91cGRhdGUgKG9wdHM6IGFueSkgeyAgLy8gVE9ETyB0eXBlXHJcbiAgICBpZiAob3B0cy5lbnVtKSBvcHRzLm1hc2sgPSAnKicucmVwZWF0KG9wdHMuZW51bVswXS5sZW5ndGgpO1xyXG5cclxuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9WYWxpZGF0ZSAoLi4uYXJnczogKik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZW51bS5zb21lKGUgPT4gZS5pbmRleE9mKHRoaXMudW5tYXNrZWRWYWx1ZSkgPj0gMCkgJiZcclxuICAgICAgc3VwZXIuZG9WYWxpZGF0ZSguLi5hcmdzKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IHtlc2NhcGVSZWdFeHAsIGluZGV4SW5EaXJlY3Rpb24sIHBvc0luRGlyZWN0aW9uLCB0eXBlIERpcmVjdGlvbiwgRElSRUNUSU9OfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcclxuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XHJcblxyXG5pbXBvcnQgTWFza2VkLCB7dHlwZSBNYXNrZWRPcHRpb25zLCB0eXBlIEV4dHJhY3RGbGFncywgdHlwZSBBcHBlbmRGbGFnc30gZnJvbSAnLi9iYXNlLmpzJztcclxuXHJcblxyXG50eXBlIE1hc2tlZE51bWJlck9wdGlvbnMgPSB7XHJcbiAgLi4uTWFza2VkT3B0aW9uczxOdW1iZXI+LFxyXG4gIHJhZGl4OiAkUHJvcGVydHlUeXBlPE1hc2tlZE51bWJlciwgJ3JhZGl4Jz4sXHJcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiAkUHJvcGVydHlUeXBlPE1hc2tlZE51bWJlciwgJ3Rob3VzYW5kc1NlcGFyYXRvcic+LFxyXG4gIG1hcFRvUmFkaXg6ICRQcm9wZXJ0eVR5cGU8TWFza2VkTnVtYmVyLCAnbWFwVG9SYWRpeCc+LFxyXG4gIHNjYWxlOiAkUHJvcGVydHlUeXBlPE1hc2tlZE51bWJlciwgJ3NjYWxlJz4sXHJcbiAgc2lnbmVkOiAkUHJvcGVydHlUeXBlPE1hc2tlZE51bWJlciwgJ3NpZ25lZCc+LFxyXG4gIG5vcm1hbGl6ZVplcm9zOiAkUHJvcGVydHlUeXBlPE1hc2tlZE51bWJlciwgJ25vcm1hbGl6ZVplcm9zJz4sXHJcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiAkUHJvcGVydHlUeXBlPE1hc2tlZE51bWJlciwgJ3BhZEZyYWN0aW9uYWxaZXJvcyc+LFxyXG59O1xyXG5cclxuLyoqXHJcbiAgTnVtYmVyIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnJhZGl4IC0gU2luZ2xlIGNoYXJcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy50aG91c2FuZHNTZXBhcmF0b3IgLSBTaW5nbGUgY2hhclxyXG4gIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb3B0cy5tYXBUb1JhZGl4IC0gQXJyYXkgb2Ygc2luZ2xlIGNoYXJzXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWluXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWF4XHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMuc2NhbGUgLSBEaWdpdHMgYWZ0ZXIgcG9pbnRcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMuc2lnbmVkIC0gQWxsb3cgbmVnYXRpdmVcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubm9ybWFsaXplWmVyb3MgLSBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucGFkRnJhY3Rpb25hbFplcm9zIC0gRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIE1hc2tlZE51bWJlciBleHRlbmRzIE1hc2tlZDxDbGFzczxOdW1iZXI+PiB7XHJcbiAgc3RhdGljIERFRkFVTFRTOiAkU2hhcGU8TWFza2VkTnVtYmVyT3B0aW9ucz47XHJcblxyXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xyXG4gIHJhZGl4OiBzdHJpbmc7XHJcbiAgLyoqIFNpbmdsZSBjaGFyICovXHJcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiBzdHJpbmc7XHJcbiAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xyXG4gIG1hcFRvUmFkaXg6IEFycmF5PHN0cmluZz47XHJcbiAgLyoqICovXHJcbiAgbWluOiBudW1iZXI7XHJcbiAgLyoqICovXHJcbiAgbWF4OiBudW1iZXI7XHJcbiAgLyoqIERpZ2l0cyBhZnRlciBwb2ludCAqL1xyXG4gIHNjYWxlOiBudW1iZXI7XHJcbiAgLyoqICovXHJcbiAgc2lnbmVkOiBib29sZWFuO1xyXG4gIC8qKiBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cclxuICBub3JtYWxpemVaZXJvczogYm9vbGVhbjtcclxuICAvKiogRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXHJcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiBib29sZWFuO1xyXG4gIF9udW1iZXJSZWdFeHA6IFJlZ0V4cDtcclxuICBfbnVtYmVyUmVnRXhwSW5wdXQ6IFJlZ0V4cDtcclxuICBfdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwOiBSZWdFeHA7XHJcbiAgX21hcFRvUmFkaXhSZWdFeHA6IFJlZ0V4cDtcclxuICBfc2VwYXJhdG9yc1Byb2Nlc3NlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IgKG9wdHM6ICRTaGFwZTxNYXNrZWROdW1iZXJPcHRpb25zPikge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICAuLi5NYXNrZWROdW1iZXIuREVGQVVMVFMsXHJcbiAgICAgIC4uLm9wdHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF91cGRhdGUgKG9wdHM6IE1hc2tlZE51bWJlck9wdGlvbnMpIHtcclxuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XHJcbiAgICB0aGlzLl91cGRhdGVSZWdFeHBzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfdXBkYXRlUmVnRXhwcyAoKSB7XHJcbiAgICAvLyB1c2UgZGlmZmVyZW50IHJlZ2V4cCB0byBwcm9jZXNzIHVzZXIgaW5wdXQgKG1vcmUgc3RyaWN0LCBpbnB1dCBzdWZmaXgpIGFuZCB0YWlsIHNoaWZ0aW5nXHJcbiAgICBsZXQgc3RhcnQgPSAnXicgKyAodGhpcy5hbGxvd05lZ2F0aXZlID8gJ1srfFxcXFwtXT8nIDogJycpO1xyXG4gICAgbGV0IG1pZElucHV0ID0gJygwfChbMS05XStcXFxcZCopKT8nO1xyXG4gICAgbGV0IG1pZCA9ICdcXFxcZConO1xyXG5cclxuICAgIGxldCBlbmQgPSAodGhpcy5zY2FsZSA/XHJcbiAgICAgICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOlxyXG4gICAgICAnJykgKyAnJCc7XHJcblxyXG4gICAgdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkSW5wdXQgKyBlbmQpO1xyXG4gICAgdGhpcy5fbnVtYmVyUmVnRXhwID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZCArIGVuZCk7XHJcbiAgICB0aGlzLl9tYXBUb1JhZGl4UmVnRXhwID0gbmV3IFJlZ0V4cCgnWycgK1xyXG4gICAgICB0aGlzLm1hcFRvUmFkaXgubWFwKGVzY2FwZVJlZ0V4cCkuam9pbignJykgK1xyXG4gICAgJ10nLCAnZycpO1xyXG4gICAgdGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpLCAnZycpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMgKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwLCAnJyk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTAxMTAyL2hvdy10by1wcmludC1hLW51bWJlci13aXRoLWNvbW1hcy1hcy10aG91c2FuZHMtc2VwYXJhdG9ycy1pbi1qYXZhc2NyaXB0XHJcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xyXG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XHJcbiAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBkb1ByZXBhcmUgKHN0cjogc3RyaW5nLCAuLi5hcmdzOiAqKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuZG9QcmVwYXJlKHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc3RyLnJlcGxhY2UodGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCwgdGhpcy5yYWRpeCkpLCAuLi5hcmdzKTtcclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIF9zZXBhcmF0b3JzQ291bnQgKHRvOiBudW1iZXIsIGV4dGVuZE9uU2VwYXJhdG9yczogYm9vbGVhbj1mYWxzZSk6IG51bWJlciB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IHBvcyA9IDA7IHBvcyA8IHRvOyArK3Bvcykge1xyXG4gICAgICBpZiAodGhpcy5fdmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgcG9zKSA9PT0gcG9zKSB7XHJcbiAgICAgICAgKytjb3VudDtcclxuICAgICAgICBpZiAoZXh0ZW5kT25TZXBhcmF0b3JzKSB0byArPSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY291bnQ7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlIChzbGljZTogc3RyaW5nPXRoaXMuX3ZhbHVlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3JzQ291bnQodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzbGljZSkubGVuZ3RoLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBleHRyYWN0SW5wdXQgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgsIGZsYWdzPzogRXh0cmFjdEZsYWdzKTogc3RyaW5nIHtcclxuICAgIFtmcm9tUG9zLCB0b1Bvc10gPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzdXBlci5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX2FwcGVuZENoYXJSYXcgKGNoOiBzdHJpbmcsIGZsYWdzOiBBcHBlbmRGbGFncz17fSk6IENoYW5nZURldGFpbHMge1xyXG4gICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIHN1cGVyLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XHJcblxyXG4gICAgY29uc3QgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoZmxhZ3MudGFpbCAmJiB0aGlzLl9iZWZvcmVUYWlsU3RhdGUgP1xyXG4gICAgICB0aGlzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDpcclxuICAgICAgdGhpcy5fdmFsdWUpO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IGFwcGVuZERldGFpbHMgPSBzdXBlci5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpO1xyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl92YWx1ZSk7XHJcbiAgICBjb25zdCBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKGZsYWdzLnRhaWwgJiYgdGhpcy5fYmVmb3JlVGFpbFN0YXRlID9cclxuICAgICAgdGhpcy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6XHJcbiAgICAgIHRoaXMuX3ZhbHVlKTtcclxuXHJcbiAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcclxuICAgIHJldHVybiBhcHBlbmREZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX2ZpbmRTZXBhcmF0b3JBcm91bmQgKHBvczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikge1xyXG4gICAgICBjb25zdCBzZWFyY2hGcm9tID0gcG9zIC0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoICsgMTtcclxuICAgICAgY29uc3Qgc2VwYXJhdG9yUG9zID0gdGhpcy52YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBzZWFyY2hGcm9tKTtcclxuICAgICAgaWYgKHNlcGFyYXRvclBvcyA8PSBwb3MpIHJldHVybiBzZXBhcmF0b3JQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMgKGZyb206IG51bWJlciwgdG86IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3Qgc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoZnJvbSk7XHJcbiAgICBpZiAoc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA+PSAwKSBmcm9tID0gc2VwYXJhdG9yQXJvdW5kRnJvbVBvcztcclxuXHJcbiAgICBjb25zdCBzZXBhcmF0b3JBcm91bmRUb1BvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQodG8pO1xyXG4gICAgaWYgKHNlcGFyYXRvckFyb3VuZFRvUG9zID49IDApIHRvID0gc2VwYXJhdG9yQXJvdW5kVG9Qb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XHJcbiAgICByZXR1cm4gW2Zyb20sIHRvXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICByZW1vdmUgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIFtmcm9tUG9zLCB0b1Bvc10gPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZUJlZm9yZVBvcyA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcyk7XHJcbiAgICBjb25zdCB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XHJcblxyXG4gICAgY29uc3QgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnQodmFsdWVCZWZvcmVQb3MubGVuZ3RoKTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlQmVmb3JlUG9zICsgdmFsdWVBZnRlclBvcykpO1xyXG4gICAgY29uc3QgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSh2YWx1ZUJlZm9yZVBvcyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcclxuICAgICAgdGFpbFNoaWZ0OiAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIG5lYXJlc3RJbnB1dFBvcyAoY3Vyc29yUG9zOiBudW1iZXIsIGRpcmVjdGlvbj86IERpcmVjdGlvbik6IG51bWJlciB7XHJcbiAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gY3Vyc29yUG9zO1xyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6IHtcclxuICAgICAgICBjb25zdCBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xyXG4gICAgICAgIGlmIChzZXBhcmF0b3JBdExlZnRQb3MgPj0gMCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zID0gc2VwYXJhdG9yQXRMZWZ0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xyXG4gICAgICAgICAgaWYgKGN1cnNvclBvcyA8IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fFxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLmxlbmd0aCA8PSBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHxcclxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdExlZnRQb3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxyXG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDoge1xyXG4gICAgICAgIGNvbnN0IHNlcGFyYXRvckF0UmlnaHRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyk7XHJcbiAgICAgICAgaWYgKHNlcGFyYXRvckF0UmlnaHRQb3MgPj0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0UmlnaHRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnNvclBvcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBkb1ZhbGlkYXRlIChmbGFnczogQXBwZW5kRmxhZ3MpIHtcclxuICAgIGNvbnN0IHJlZ2V4cCA9IGZsYWdzLmlucHV0ID8gdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgOiB0aGlzLl9udW1iZXJSZWdFeHA7XHJcblxyXG4gICAgLy8gdmFsaWRhdGUgYXMgc3RyaW5nXHJcbiAgICBsZXQgdmFsaWQgPSByZWdleHAudGVzdCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpKTtcclxuXHJcbiAgICBpZiAodmFsaWQpIHtcclxuICAgICAgLy8gdmFsaWRhdGUgYXMgbnVtYmVyXHJcbiAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMubnVtYmVyO1xyXG4gICAgICB2YWxpZCA9IHZhbGlkICYmICFpc05hTihudW1iZXIpICYmXHJcbiAgICAgICAgLy8gY2hlY2sgbWluIGJvdW5kIGZvciBuZWdhdGl2ZSB2YWx1ZXNcclxuICAgICAgICAodGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA+PSAwIHx8IHRoaXMubWluIDw9IHRoaXMubnVtYmVyKSAmJlxyXG4gICAgICAgIC8vIGNoZWNrIG1heCBib3VuZCBmb3IgcG9zaXRpdmUgdmFsdWVzXHJcbiAgICAgICAgKHRoaXMubWF4ID09IG51bGwgfHwgdGhpcy5tYXggPD0gMCB8fCB0aGlzLm51bWJlciA8PSB0aGlzLm1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkICYmIHN1cGVyLmRvVmFsaWRhdGUoZmxhZ3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvQ29tbWl0ICgpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMubnVtYmVyO1xyXG4gICAgICBsZXQgdmFsaWRudW0gPSBudW1iZXI7XHJcblxyXG4gICAgICAvLyBjaGVjayBib3VuZHNcclxuICAgICAgaWYgKHRoaXMubWluICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5tYXgodmFsaWRudW0sIHRoaXMubWluKTtcclxuICAgICAgaWYgKHRoaXMubWF4ICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5taW4odmFsaWRudW0sIHRoaXMubWF4KTtcclxuXHJcbiAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsaWRudW0pO1xyXG5cclxuICAgICAgbGV0IGZvcm1hdHRlZCA9IHRoaXMudmFsdWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5ub3JtYWxpemVaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fbm9ybWFsaXplWmVyb3MoZm9ybWF0dGVkKTtcclxuICAgICAgaWYgKHRoaXMucGFkRnJhY3Rpb25hbFplcm9zKSBmb3JtYXR0ZWQgPSB0aGlzLl9wYWRGcmFjdGlvbmFsWmVyb3MoZm9ybWF0dGVkKTtcclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmRvQ29tbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfbm9ybWFsaXplWmVyb3MgKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcGFydHMgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKS5zcGxpdCh0aGlzLnJhZGl4KTtcclxuXHJcbiAgICAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xyXG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9eKFxcRCopKDAqKShcXGQqKS8sIChtYXRjaCwgc2lnbiwgemVyb3MsIG51bSkgPT4gc2lnbiArIG51bSk7XHJcbiAgICAvLyBhZGQgbGVhZGluZyB6ZXJvXHJcbiAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XHJcblxyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKiQvLCAnJyk7ICAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcclxuICAgICAgaWYgKCFwYXJ0c1sxXS5sZW5ndGgpIHBhcnRzLmxlbmd0aCA9IDE7ICAvLyByZW1vdmUgZnJhY3Rpb25hbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHBhcnRzLmpvaW4odGhpcy5yYWRpeCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX3BhZEZyYWN0aW9uYWxaZXJvcyAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XHJcblxyXG4gICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBwYXJ0cy5wdXNoKCcnKTtcclxuICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucGFkRW5kKHRoaXMuc2NhbGUsICcwJyk7XHJcbiAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgdW5tYXNrZWRWYWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKFxyXG4gICAgICB0aGlzLl9ub3JtYWxpemVaZXJvcyhcclxuICAgICAgICB0aGlzLnZhbHVlKSlcclxuICAgICAgLnJlcGxhY2UodGhpcy5yYWRpeCwgJy4nKTtcclxuICB9XHJcblxyXG4gIHNldCB1bm1hc2tlZFZhbHVlICh1bm1hc2tlZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlLnJlcGxhY2UoJy4nLCB0aGlzLnJhZGl4KTtcclxuICB9XHJcblxyXG4gIC8qKiBQYXJzZWQgTnVtYmVyICovXHJcbiAgZ2V0IG51bWJlciAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBOdW1iZXIodGhpcy51bm1hc2tlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldCBudW1iZXIgKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcobnVtYmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgdHlwZWRWYWx1ZSAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm51bWJlcjtcclxuICB9XHJcblxyXG4gIHNldCB0eXBlZFZhbHVlICh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm51bWJlciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBJcyBuZWdhdGl2ZSBhbGxvd2VkXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGdldCBhbGxvd05lZ2F0aXZlICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25lZCB8fFxyXG4gICAgICAodGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA8IDApIHx8XHJcbiAgICAgICh0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4IDwgMCk7XHJcbiAgfVxyXG59XHJcbk1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcclxuICByYWRpeDogJywnLFxyXG4gIHRob3VzYW5kc1NlcGFyYXRvcjogJycsXHJcbiAgbWFwVG9SYWRpeDogWycuJ10sXHJcbiAgc2NhbGU6IDIsXHJcbiAgc2lnbmVkOiBmYWxzZSxcclxuICBub3JtYWxpemVaZXJvczogdHJ1ZSxcclxuICBwYWRGcmFjdGlvbmFsWmVyb3M6IGZhbHNlLFxyXG59O1xyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgTWFza2VkLCB7dHlwZSBNYXNrZWRPcHRpb25zfSBmcm9tICcuL2Jhc2UuanMnO1xyXG5cclxuXHJcbi8qKiBNYXNraW5nIGJ5IFJlZ0V4cCAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBNYXNrZWRSZWdFeHAgZXh0ZW5kcyBNYXNrZWQ8UmVnRXhwPiB7XHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cclxuICBfdXBkYXRlIChvcHRzOiAkU2hhcGU8TWFza2VkT3B0aW9uczxSZWdFeHA+Pikge1xyXG4gICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9ICh2YWx1ZSkgPT4gdmFsdWUuc2VhcmNoKG9wdHMubWFzaykgPj0gMDtcclxuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBNYXNrZWQsIHt0eXBlIE1hc2tlZE9wdGlvbnN9IGZyb20gJy4vYmFzZS5qcyc7XHJcblxyXG5cclxuLyoqIE1hc2tpbmcgYnkgY3VzdG9tIEZ1bmN0aW9uICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIE1hc2tlZEZ1bmN0aW9uIGV4dGVuZHMgTWFza2VkPEZ1bmN0aW9uPiB7XHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cclxuICBfdXBkYXRlIChvcHRzOiBNYXNrZWRPcHRpb25zPEZ1bmN0aW9uPikge1xyXG4gICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IG9wdHMubWFzaztcclxuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xyXG5pbXBvcnQgTWFza2VkLCB7dHlwZSBBcHBlbmRGbGFncywgdHlwZSBNYXNrZWRTdGF0ZX0gZnJvbSAnLi9iYXNlLmpzJztcclxuaW1wb3J0IHsgdHlwZSBUYWlsRGV0YWlscyB9IGZyb20gJy4uL2NvcmUvdGFpbC1kZXRhaWxzLmpzJztcclxuXHJcblxyXG50eXBlIE1hc2tlZER5bmFtaWNTdGF0ZSA9IHt8XHJcbiAgLi4uTWFza2VkU3RhdGUsXHJcbiAgX3Jhd0lucHV0VmFsdWU6IHN0cmluZyxcclxuICBjb21waWxlZE1hc2tzOiBBcnJheTwqPixcclxuICBjdXJyZW50TWFza1JlZjogP01hc2tlZDwqPixcclxuICBjdXJyZW50TWFzazogKixcclxufH07XHJcblxyXG50eXBlIER5bmFtaWNNYXNrVHlwZSA9IEFycmF5PHtbc3RyaW5nXTogYW55fT47XHJcbi8qKiBEeW5hbWljIG1hc2sgZm9yIGNob29zaW5nIGFwcm9wcmlhdGUgbWFzayBpbiBydW4tdGltZSAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBNYXNrZWREeW5hbWljIGV4dGVuZHMgTWFza2VkPER5bmFtaWNNYXNrVHlwZT4ge1xyXG4gIC8qKiBDdXJyZW50bHkgY2hvc2VuIG1hc2sgKi9cclxuICBjdXJyZW50TWFzazogP01hc2tlZDwqPjtcclxuICAvKiogQ29tcGxpbGVkIHtAbGluayBNYXNrZWR9IG9wdGlvbnMgKi9cclxuICBjb21waWxlZE1hc2tzOiBBcnJheTxNYXNrZWQ8Kj4+O1xyXG4gIC8qKiBDaG9vc2VzIHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBpbnB1dCB2YWx1ZSAqL1xyXG4gIGRpc3BhdGNoOiAoc3RyaW5nLCBNYXNrZWQ8Kj4sIEFwcGVuZEZsYWdzKSA9PiBNYXNrZWQ8Kj47XHJcblxyXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yIChvcHRzOiBhbnkpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgLi4uTWFza2VkRHluYW1pYy5ERUZBVUxUUyxcclxuICAgICAgLi4ub3B0c1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50TWFzayA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX3VwZGF0ZSAob3B0czogYW55KSB7XHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gICAgaWYgKCdtYXNrJyBpbiBvcHRzKSB7XHJcbiAgICAgIC8vIG1hc2sgY291bGQgYmUgdG90YWxseSBkeW5hbWljIHdpdGggb25seSBgZGlzcGF0Y2hgIG9wdGlvblxyXG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MgPSBBcnJheS5pc0FycmF5KG9wdHMubWFzaykgP1xyXG4gICAgICAgIG9wdHMubWFzay5tYXAobSA9PiBjcmVhdGVNYXNrKG0pKSA6XHJcbiAgICAgICAgW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX2FwcGVuZENoYXJSYXcgKC4uLmFyZ3M6ICopOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoKC4uLmFyZ3MpO1xyXG5cclxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XHJcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZENoYXIoLi4uYXJncykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgX2FwcGx5RGlzcGF0Y2ggKGFwcGVuZGVkOiBzdHJpbmc9JycsIGZsYWdzOiBBcHBlbmRGbGFncz17fSkge1xyXG4gICAgY29uc3QgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgdGhpcy5fYmVmb3JlVGFpbFN0YXRlID9cclxuICAgICAgdGhpcy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6XHJcbiAgICAgIHRoaXMudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xyXG4gICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZSA/XHJcbiAgICAgIC8vICRGbG93Rml4TWUgLSB0aXJlZCB0byBmaWdodCB3aXRoIHR5cGUgc3lzdGVtXHJcbiAgICAgIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZS5fcmF3SW5wdXRWYWx1ZSA6XHJcbiAgICAgIGlucHV0VmFsdWU7XHJcbiAgICBjb25zdCB0YWlsVmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKGluc2VydFZhbHVlLmxlbmd0aCk7XHJcbiAgICBjb25zdCBwcmV2TWFzayA9IHRoaXMuY3VycmVudE1hc2s7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHJcbiAgICBjb25zdCBwcmV2TWFza1N0YXRlID0gcHJldk1hc2sgJiYgcHJldk1hc2suc3RhdGU7XHJcbiAgICBjb25zdCBwcmV2TWFza0JlZm9yZVRhaWxTdGF0ZSA9IHByZXZNYXNrICYmIHByZXZNYXNrLl9iZWZvcmVUYWlsU3RhdGU7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaChhcHBlbmRlZCwgZmxhZ3MpO1xyXG5cclxuICAgIC8vIHJlc3RvcmUgc3RhdGUgYWZ0ZXIgZGlzcGF0Y2hcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrICE9PSBwcmV2TWFzaykge1xyXG4gICAgICAgIC8vIGlmIG1hc2sgY2hhbmdlZCByZWFwcGx5IGlucHV0XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xyXG5cclxuICAgICAgICAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZChpbnNlcnRWYWx1ZSwge3JhdzogdHJ1ZX0pO1xyXG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gZC5pbnNlcnRlZC5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKHRhaWxWYWx1ZSkge1xyXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcclxuICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKHRhaWxWYWx1ZSwge3JhdzogdHJ1ZSwgdGFpbDogdHJ1ZX0pLnRhaWxTaGlmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRGlzcGF0Y2ggY2FuIGRvIHNvbWV0aGluZyBiYWQgd2l0aCBzdGF0ZSwgc29cclxuICAgICAgICAvLyByZXN0b3JlIHByZXYgbWFzayBzdGF0ZVxyXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBwcmV2TWFza1N0YXRlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2suX2JlZm9yZVRhaWxTdGF0ZSA9IHByZXZNYXNrQmVmb3JlVGFpbFN0YXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9EaXNwYXRjaChhcHBlbmRlZDogc3RyaW5nLCBmbGFnczogQXBwZW5kRmxhZ3M9e30pIHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKGFwcGVuZGVkLCB0aGlzLCBmbGFncyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9WYWxpZGF0ZSAoLi4uYXJnczogKik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN1cGVyLmRvVmFsaWRhdGUoLi4uYXJncykgJiYgKFxyXG4gICAgICAhdGhpcy5jdXJyZW50TWFzayB8fCB0aGlzLmN1cnJlbnRNYXNrLmRvVmFsaWRhdGUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIHJlc2V0ICgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLnJlc2V0KCk7XHJcbiAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChtID0+IG0ucmVzZXQoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnZhbHVlIDogJyc7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUgKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHVubWFza2VkVmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgc2V0IHVubWFza2VkVmFsdWUgKHVubWFza2VkVmFsdWU6IHN0cmluZykge1xyXG4gICAgc3VwZXIudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHR5cGVkVmFsdWUgKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJvYmFibHkgdHlwZWRWYWx1ZSBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkeW5hbWljXHJcbiAgc2V0IHR5cGVkVmFsdWUgKHZhbHVlOiBhbnkpIHtcclxuICAgIGxldCB1bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbHVlKTtcclxuXHJcbiAgICAvLyBkb3VibGUgY2hlY2sgaXRcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB1bm1hc2tlZFZhbHVlID0gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgaXNDb21wbGV0ZSAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suaXNDb21wbGV0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICByZW1vdmUgKC4uLmFyZ3M6ICopOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IGRldGFpbHM6IENoYW5nZURldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcclxuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5yZW1vdmUoLi4uYXJncykpXHJcbiAgICAgICAgLy8gdXBkYXRlIHdpdGggZGlzcGF0Y2hcclxuICAgICAgICAuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHN0YXRlICgpOiBNYXNrZWREeW5hbWljU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3VwZXIuc3RhdGUsXHJcbiAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWUsXHJcbiAgICAgIGNvbXBpbGVkTWFza3M6IHRoaXMuY29tcGlsZWRNYXNrcy5tYXAobSA9PiBtLnN0YXRlKSxcclxuICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXHJcbiAgICAgIGN1cnJlbnRNYXNrOiB0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suc3RhdGUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXRlIChzdGF0ZTogTWFza2VkRHluYW1pY1N0YXRlKSB7XHJcbiAgICBjb25zdCB7Y29tcGlsZWRNYXNrcywgY3VycmVudE1hc2tSZWYsIGN1cnJlbnRNYXNrLCAuLi5tYXNrZWRTdGF0ZX0gPSBzdGF0ZTtcclxuICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKChtLCBtaSkgPT4gbS5zdGF0ZSA9IGNvbXBpbGVkTWFza3NbbWldKTtcclxuICAgIGlmIChjdXJyZW50TWFza1JlZiAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjdXJyZW50TWFza1JlZjtcclxuICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IGN1cnJlbnRNYXNrO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGUgPSBtYXNrZWRTdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBleHRyYWN0SW5wdXQgKC4uLmFyZ3M6ICopOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgP1xyXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrLmV4dHJhY3RJbnB1dCguLi5hcmdzKSA6XHJcbiAgICAgICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGV4dHJhY3RUYWlsICguLi5hcmdzOiAqKTogVGFpbERldGFpbHMge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgP1xyXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrLmV4dHJhY3RUYWlsKC4uLmFyZ3MpIDpcclxuICAgICAgc3VwZXIuZXh0cmFjdFRhaWwoLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9Db21taXQgKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2suZG9Db21taXQoKTtcclxuICAgIHN1cGVyLmRvQ29tbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgbmVhcmVzdElucHV0UG9zKC4uLmFyZ3M6ICopOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgP1xyXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrLm5lYXJlc3RJbnB1dFBvcyguLi5hcmdzKSA6XHJcbiAgICAgIHN1cGVyLm5lYXJlc3RJbnB1dFBvcyguLi5hcmdzKTtcclxuICB9XHJcbn1cclxuXHJcbk1hc2tlZER5bmFtaWMuREVGQVVMVFMgPSB7XHJcbiAgZGlzcGF0Y2g6IChhcHBlbmRlZCwgbWFza2VkLCBmbGFncykgPT4ge1xyXG4gICAgaWYgKCFtYXNrZWQuY29tcGlsZWRNYXNrcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gbWFza2VkLnJhd0lucHV0VmFsdWU7XHJcblxyXG4gICAgLy8gc2ltdWxhdGUgaW5wdXRcclxuICAgIGNvbnN0IGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcCgobSwgaW5kZXgpID0+IHtcclxuICAgICAgbS5yYXdJbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcclxuICAgICAgbS5hcHBlbmQoYXBwZW5kZWQsIGZsYWdzKTtcclxuICAgICAgY29uc3Qgd2VpZ2h0ID0gbS5yYXdJbnB1dFZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgIHJldHVybiB7d2VpZ2h0LCBpbmRleH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwb3AgbWFza3Mgd2l0aCBsb25nZXIgdmFsdWVzIGZpcnN0XHJcbiAgICBpbnB1dHMuc29ydCgoaTEsIGkyKSA9PiBpMi53ZWlnaHQgLSBpMS53ZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBtYXNrZWQuY29tcGlsZWRNYXNrc1tpbnB1dHNbMF0uaW5kZXhdO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHtnfSBmcm9tICcuL2NvcmUvdXRpbHMuanMnO1xyXG5cclxuaW1wb3J0IElucHV0TWFzayBmcm9tICcuL2NvbnRyb2xzL2lucHV0LmpzJztcclxuXHJcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9tYXNrZWQvYmFzZS5qcyc7XHJcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vbWFza2VkL3BhdHRlcm4uanMnO1xyXG5pbXBvcnQgTWFza2VkRW51bSBmcm9tICcuL21hc2tlZC9lbnVtLmpzJztcclxuaW1wb3J0IE1hc2tlZFJhbmdlIGZyb20gJy4vbWFza2VkL3JhbmdlLmpzJztcclxuaW1wb3J0IE1hc2tlZE51bWJlciBmcm9tICcuL21hc2tlZC9udW1iZXIuanMnO1xyXG5pbXBvcnQgTWFza2VkRGF0ZSBmcm9tICcuL21hc2tlZC9kYXRlLmpzJztcclxuaW1wb3J0IE1hc2tlZFJlZ0V4cCBmcm9tICcuL21hc2tlZC9yZWdleHAuanMnO1xyXG5pbXBvcnQgTWFza2VkRnVuY3Rpb24gZnJvbSAnLi9tYXNrZWQvZnVuY3Rpb24uanMnO1xyXG5pbXBvcnQgTWFza2VkRHluYW1pYyBmcm9tICcuL21hc2tlZC9keW5hbWljLmpzJztcclxuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9tYXNrZWQvZmFjdG9yeS5qcyc7XHJcbmltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyc7XHJcbmltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9jb250cm9scy9odG1sLW1hc2stZWxlbWVudC5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgbWFzayBvbiBlbGVtZW50LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR8TWFza0VsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBhcHBseSBtYXNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gQ3VzdG9tIG1hc2sgb3B0aW9uc1xyXG4gKiBAcmV0dXJuIHtJbnB1dE1hc2t9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5mdW5jdGlvbiBJTWFzayAoZWwsIG9wdHM9e30pIHtcclxuXHQvLyBjdXJyZW50bHkgYXZhaWxhYmxlIG9ubHkgZm9yIGlucHV0LWxpa2UgZWxlbWVudHNcclxuICByZXR1cm4gbmV3IElucHV0TWFzayhlbCwgb3B0cyk7XHJcbn1cclxuXHJcbi8qKiB7QGxpbmsgSW5wdXRNYXNrfSAqL1xyXG5JTWFzay5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XHJcblxyXG4vKioge0BsaW5rIE1hc2tlZH0gKi9cclxuSU1hc2suTWFza2VkID0gTWFza2VkO1xyXG4vKioge0BsaW5rIE1hc2tlZFBhdHRlcm59ICovXHJcbklNYXNrLk1hc2tlZFBhdHRlcm4gPSBNYXNrZWRQYXR0ZXJuO1xyXG4vKioge0BsaW5rIE1hc2tlZEVudW19ICovXHJcbklNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xyXG4vKioge0BsaW5rIE1hc2tlZFJhbmdlfSAqL1xyXG5JTWFzay5NYXNrZWRSYW5nZSA9IE1hc2tlZFJhbmdlO1xyXG4vKioge0BsaW5rIE1hc2tlZE51bWJlcn0gKi9cclxuSU1hc2suTWFza2VkTnVtYmVyID0gTWFza2VkTnVtYmVyO1xyXG4vKioge0BsaW5rIE1hc2tlZERhdGV9ICovXHJcbklNYXNrLk1hc2tlZERhdGUgPSBNYXNrZWREYXRlO1xyXG4vKioge0BsaW5rIE1hc2tlZFJlZ0V4cH0gKi9cclxuSU1hc2suTWFza2VkUmVnRXhwID0gTWFza2VkUmVnRXhwO1xyXG4vKioge0BsaW5rIE1hc2tlZEZ1bmN0aW9ufSAqL1xyXG5JTWFzay5NYXNrZWRGdW5jdGlvbiA9IE1hc2tlZEZ1bmN0aW9uO1xyXG4vKioge0BsaW5rIE1hc2tlZER5bmFtaWN9ICovXHJcbklNYXNrLk1hc2tlZER5bmFtaWMgPSBNYXNrZWREeW5hbWljO1xyXG4vKioge0BsaW5rIGNyZWF0ZU1hc2t9ICovXHJcbklNYXNrLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xyXG4vKioge0BsaW5rIE1hc2tFbGVtZW50fSAqL1xyXG5JTWFzay5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xyXG4vKioge0BsaW5rIEhUTUxNYXNrRWxlbWVudH0gKi9cclxuSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xyXG5cclxuZy5JTWFzayA9IElNYXNrO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9