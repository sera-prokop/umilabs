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
    nameField = form.querySelector('#name'),
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
  checkFields(nameReg, nameField, defaultErrorText);
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
        var validateFields = document.querySelectorAll('.form__input');

        for (var j = 0; j < validateFields.length; j++) {
          validateFields[j].value = '';
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcGFkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlYmtpdC1zdHJpbmctcGFkLWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5wYWQtZW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5wYWQtc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvY29yZS9jaGFuZ2UtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9zcmMvbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9kYXRlLmpzIiwid2VicGFjazovLy8uLi9zcmMvY29udHJvbHMvbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb250cm9scy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9lbnVtLmpzIiwid2VicGFjazovLy8uLi9zcmMvbWFza2VkL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hc2tlZC9yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXNrZWQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ltYXNrLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGF0ZUZpZWxkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYWlsRmllbGQiLCJuYW1lRmllbGQiLCJwaG9uZUZpZWxkIiwibWFpbFJlZyIsInBob25lUmVnIiwibmFtZVJlZyIsImRlZmF1bHRFcnJvclRleHQiLCJtYWlsRXJyb3JUZXh0IiwicGhvbmVFcnJvclRleHQiLCJtYXNrT3B0aW9ucyIsIm1hc2siLCJJTWFzayIsInJlbW92ZVZhbGlkYXRpb24iLCJlcnJvcnMiLCJpIiwibGVuZ3RoIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdlbmVyYXRlRXJyb3IiLCJ0ZXh0IiwiZXJyb3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb2xvciIsImlubmVySFRNTCIsImNoZWNrRmllbGRzQWxsIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsImNvbnRhaW5zIiwiYWRkIiwiY2hlY2tGaWVsZHNQcmVzZW5jZSIsInZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJjaGVja0ZpZWxkcyIsInJlZyIsImZpZWxkIiwiZ2VuZXJhdGVUZXh0IiwiY2hpbGQiLCJ0ZXN0IiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibW9kYWxXaW5kb3ciLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRFbGVtZW50IiwiaWQiLCJvcGVuTW9kYWwiLCJtb2RhbFRyaWdnZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25jbGljayIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInN1YnN0ciIsImNsb3NlTW9kYWwiLCJjbG9zZUJ1dHRvbiIsImNsb3NlT3ZlcmxheSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwiaiIsInJlYWR5IiwiZm4iLCJyZWFkeVN0YXRlIiwiY2VpbCIsIk1hdGgiLCJmbG9vciIsIm1vZHVsZSIsImFyZ3VtZW50IiwiaXNOYU4iLCJtaW4iLCJ0b0ludGVnZXIiLCJpdCIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsInJlcGVhdCIsImNvdW50Iiwic3RyIiwiU3RyaW5nIiwicmVxdWlyZU9iamVjdENvZXJjaWJsZSIsInJlc3VsdCIsIm4iLCJJbmZpbml0eSIsIlJhbmdlRXJyb3IiLCJ0aGF0IiwibWF4TGVuZ3RoIiwiZmlsbFN0cmluZyIsImxlZnQiLCJTIiwic3RyaW5nTGVuZ3RoIiwiZmlsbFN0ciIsImludE1heExlbmd0aCIsInRvTGVuZ3RoIiwiZmlsbExlbiIsInN0cmluZ0ZpbGxlciIsImNhbGwiLCJzbGljZSIsIndpbmRvdyIsInNlbGYiLCJGdW5jdGlvbiIsIm5hdmlnYXRvciIsImdsb2JhbCIsInVzZXJBZ2VudCIsImV4ZWMiLCJyZXF1aXJlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwibmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIk5BU0hPUk5fQlVHIiwiZXhwb3J0cyIsIlYiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImJpdG1hcCIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidG9TdHJpbmciLCJmYWlscyIsImNsYXNzb2YiLCJJbmRleGVkT2JqZWN0IiwiaXNPYmplY3QiLCJ2YWwiLCJ2YWx1ZU9mIiwiaGFzT3duUHJvcGVydHkiLCJrZXkiLCJleGlzdCIsIkRFU0NSSVBUT1JTIiwiTyIsIlAiLCJ0b0luZGV4ZWRPYmplY3QiLCJ0b1ByaW1pdGl2ZSIsIklFOF9ET01fREVGSU5FIiwiaGFzIiwiY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUiLCJmIiwibmF0aXZlRGVmaW5lUHJvcGVydHkiLCJBdHRyaWJ1dGVzIiwiYW5PYmplY3QiLCJvYmplY3QiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsImhpZGUiLCJTSEFSRUQiLCJzdG9yZSIsInNldEdsb2JhbCIsInB1c2giLCJ2ZXJzaW9uIiwibW9kZSIsImNvcHlyaWdodCIsIldlYWtNYXAiLCJuYXRpdmVGdW5jdGlvblRvU3RyaW5nIiwicG9zdGZpeCIsInJhbmRvbSIsImNvbmNhdCIsInNoYXJlZCIsInVpZCIsInNldCIsImVuZm9yY2UiLCJnZXR0ZXJGb3IiLCJUWVBFIiwic3RhdGUiLCJ0eXBlIiwiTkFUSVZFX1dFQUtfTUFQIiwid21nZXQiLCJ3bWhhcyIsIndtc2V0IiwibWV0YWRhdGEiLCJTVEFURSIsInNoYXJlZEtleSIsImhpZGRlbktleXMiLCJvYmplY3RIYXMiLCJnZXRJbnRlcm5hbFN0YXRlIiwiSW50ZXJuYWxTdGF0ZU1vZHVsZSIsImVuZm9yY2VJbnRlcm5hbFN0YXRlIiwiVEVNUExBVEUiLCJvcHRpb25zIiwidW5zYWZlIiwic2ltcGxlIiwibm9UYXJnZXRHZXQiLCJzb3VyY2UiLCJwcm90b3R5cGUiLCJtYXgiLCJpbmRleCIsImludGVnZXIiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJ0b0Fic29sdXRlSW5kZXgiLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJpbnRlcm5hbE9iamVjdEtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJSZWZsZWN0Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlIiwicmVwbGFjZW1lbnQiLCJpc0ZvcmNlZCIsImZlYXR1cmUiLCJkZXRlY3Rpb24iLCJkYXRhIiwibm9ybWFsaXplIiwiUE9MWUZJTEwiLCJOQVRJVkUiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIlRBUkdFVCIsIkdMT0JBTCIsIlNUQVRJQyIsInN0YXQiLCJGT1JDRUQiLCJ0YXJnZXRQcm9wZXJ0eSIsInNvdXJjZVByb3BlcnR5IiwiZm9yY2VkIiwiY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyIsInNoYW0iLCJyZWRlZmluZSIsInByb3RvIiwiV0VCS0lUX0JVRyIsInBhZEVuZCIsImludGVybmFsU3RyaW5nUGFkIiwiYXJndW1lbnRzIiwicGFkU3RhcnQiLCJpc1N0cmluZyIsIkRJUkVDVElPTiIsIk5PTkUiLCJMRUZUIiwiRk9SQ0VfTEVGVCIsIlJJR0hUIiwiRk9SQ0VfUklHSFQiLCJmb3JjZURpcmVjdGlvbiIsImRpcmVjdGlvbiIsImVzY2FwZVJlZ0V4cCIsIm9iamVjdEluY2x1ZGVzIiwiYiIsImFyckEiLCJBcnJheSIsImlzQXJyYXkiLCJhcnJCIiwiZGF0ZUEiLCJEYXRlIiwiZGF0ZUIiLCJnZXRUaW1lIiwicmVnZXhwQSIsInJlZ2V4cEIiLCJnIiwiQWN0aW9uRGV0YWlscyIsImN1cnNvclBvcyIsIm9sZFZhbHVlIiwib2xkU2VsZWN0aW9uIiwic3RhcnRDaGFuZ2VQb3MiLCJzdGFydCIsImluc2VydGVkQ291bnQiLCJlbmQiLCJyZW1vdmVkQ291bnQiLCJzdWJzdHJpbmciLCJDaGFuZ2VEZXRhaWxzIiwiZGV0YWlscyIsImluc2VydGVkIiwicmF3SW5zZXJ0ZWQiLCJza2lwIiwidGFpbFNoaWZ0IiwiQ29udGludW91c1RhaWxEZXRhaWxzIiwiZnJvbSIsInN0b3AiLCJ0YWlsIiwibWFza2VkIiwiYXBwZW5kIiwicG9zIiwic2hpZnRDaGFyIiwiTWFza2VkIiwib3B0cyIsIl92YWx1ZSIsIl91cGRhdGUiLCJpc0luaXRpYWxpemVkIiwid2l0aFZhbHVlUmVmcmVzaCIsImJpbmQiLCJyZXNldCIsImlucHV0IiwiZG9Db21taXQiLCJmcm9tUG9zIiwidG9Qb3MiLCJleHRyYWN0SW5wdXQiLCJfYmVmb3JlVGFpbFN0YXRlIiwiYXBwZW5kVG8iLCJjaCIsImZsYWdzIiwiY2hlY2tUYWlsIiwiZG9QcmVwYXJlIiwiY29uc2lzdGVudFN0YXRlIiwiY29uc2lzdGVudFRhaWwiLCJfYXBwZW5kQ2hhclJhdyIsImFwcGVuZGVkIiwiZG9WYWxpZGF0ZSIsIl9zdG9yZUJlZm9yZVRhaWxTdGF0ZSIsIm92ZXJ3cml0ZSIsInNoaWZ0QmVmb3JlIiwidGFpbERldGFpbHMiLCJhcHBlbmRUYWlsIiwiX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGUiLCJjaSIsImFnZ3JlZ2F0ZSIsIl9hcHBlbmRDaGFyIiwiX3JlZnJlc2hpbmciLCJ1bm1hc2tlZCIsInVubWFza2VkVmFsdWUiLCJyZXQiLCJyZXNvbHZlIiwicHJlcGFyZSIsInZhbGlkYXRlIiwiY29tbWl0IiwiZGVsZXRlQ291bnQiLCJyZW1vdmVEaXJlY3Rpb24iLCJ0YWlsUG9zIiwiZXh0cmFjdFRhaWwiLCJuZWFyZXN0SW5wdXRQb3MiLCJjaGFuZ2VEZXRhaWxzIiwicmF3IiwibWFza2VkQ2xhc3MiLCJFcnJvciIsIk1hc2tlZFJlZ0V4cCIsIk1hc2tlZFBhdHRlcm4iLCJNYXNrZWREYXRlIiwiTnVtYmVyIiwiTWFza2VkTnVtYmVyIiwiTWFza2VkRHluYW1pYyIsIk1hc2tlZEZ1bmN0aW9uIiwiY29uc29sZSIsIndhcm4iLCJjcmVhdGVNYXNrIiwiTWFza2VkQ2xhc3MiLCJERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TIiwiUGF0dGVybklucHV0RGVmaW5pdGlvbiIsImJsb2NrT3B0cyIsIl9pc0ZpbGxlZCIsImlzT3B0aW9uYWwiLCJsYXp5IiwicGxhY2Vob2xkZXJDaGFyIiwiQm9vbGVhbiIsIm1pblBvcyIsIm1heFBvcyIsImJvdW5kUG9zIiwiaXNDb21wbGV0ZSIsIlBhdHRlcm5GaXhlZERlZmluaXRpb24iLCJfaXNSYXdJbnB1dCIsImNoYXIiLCJpc1Jlc29sdmVkIiwiaXNVbm1hc2tpbmciLCJDaHVua3NUYWlsRGV0YWlscyIsImNodW5rcyIsIm1hcCIsInRhaWxDaHVuayIsImxhc3RDaHVuayIsImV4dGVuZExhc3QiLCJleHRlbmQiLCJmaXJzdFRhaWxDaHVuayIsInNoaWZ0IiwiYmxvY2tJbmRleCIsImNodW5rIiwibGFzdEJsb2NrSXRlciIsIl9tYXBQb3NUb0Jsb2NrIiwiY2h1bmtCbG9jayIsIl9zdG9wcyIsImluZGV4T2YiLCJfYXBwZW5kUGxhY2Vob2xkZXIiLCJfYmxvY2tzIiwicmVtYWluQ2hhcnMiLCJjaHVua1NoaWZ0UG9zIiwic3BsaWNlIiwiYyIsInByb3BzIiwiY3N0YXRlIiwiZGVmaW5pdGlvbnMiLCJERUZBVUxUUyIsIl9yZWJ1aWxkTWFzayIsImRlZnMiLCJfbWFza2VkQmxvY2tzIiwicGF0dGVybiIsInVubWFza2luZ0Jsb2NrIiwib3B0aW9uYWxCbG9jayIsImJsb2NrcyIsInAiLCJiTmFtZXMiLCJmaWx0ZXIiLCJiTmFtZSIsInNvcnQiLCJtYXNrZWRCbG9jayIsImlzSW5wdXQiLCJTVE9QX0NIQVIiLCJFU0NBUEVfQ0hBUiIsImRlZiIsImZvckVhY2giLCJfcmVzZXRCZWZvcmVUYWlsU3RhdGUiLCJibG9ja0l0ZXIiLCJiaSIsImJsb2NrIiwiYmxvY2tEZXRhaWxzIiwiY2h1bmtUYWlsIiwiX2ZvckVhY2hCbG9ja3NJblJhbmdlIiwiYkZyb21Qb3MiLCJiVG9Qb3MiLCJibG9ja0NodW5rIiwiX2ZpbmRTdG9wQmVmb3JlIiwiX2Jsb2NrU3RhcnRQb3MiLCJfIiwic3RvcEJlZm9yZSIsInNpIiwidG9CbG9ja0luZGV4Iiwic3RhcnRCbG9ja0l0ZXIiLCJzdGFydEJsb2NrSW5kZXgiLCJlbmRCbG9ja0luZGV4IiwiYXJncyIsImJEZXRhaWxzIiwiYXBwbHkiLCJhY2NWYWwiLCJibG9ja1N0YXJ0UG9zIiwib2Zmc2V0IiwicmVkdWNlIiwiZnJvbUJsb2NrSXRlciIsInRvQmxvY2tJdGVyIiwiaXNTYW1lQmxvY2siLCJmcm9tQmxvY2tTdGFydFBvcyIsImZyb21CbG9ja0VuZFBvcyIsInJlbW92ZURldGFpbHMiLCJiZWdpbkJsb2NrRGF0YSIsImJlZ2luQmxvY2tPZmZzZXQiLCJiZWdpbkJsb2NrSW5kZXgiLCJiZWdpbkJsb2NrIiwiYmVnaW5CbG9ja0N1cnNvclBvcyIsImN1cnNvckF0UmlnaHQiLCJjdXJzb3JBdExlZnQiLCJzZWFyY2hCbG9ja0luZGV4IiwiYmxvY2tJbmRleEF0TGVmdCIsImJsb2NrQXRMZWZ0IiwiYmxvY2tJbnB1dFBvcyIsImZpcnN0SW5wdXRBdFJpZ2h0IiwiZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCIsImZpbGxlZEJsb2NrIiwiZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXgiLCJmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4IiwiYmxvY2tBbGlnbmVkUG9zIiwiZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4IiwiZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyIsImFsaWduZWRQb3MiLCJuYW1lIiwibWFza2VkQmxvY2tzIiwiaW5kaWNlcyIsImdpIiwibWFza2VkU3RhdGUiLCJldmVyeSIsIklucHV0RGVmaW5pdGlvbiIsIkZpeGVkRGVmaW5pdGlvbiIsIk1hc2tlZFJhbmdlIiwidG8iLCJmcm9tU3RyIiwidG9TdHIiLCJzYW1lQ2hhcnNDb3VudCIsIm1pbnN0ciIsIm1heHN0ciIsIm1hdGNoIiwicGxhY2Vob2xkZXIiLCJudW0iLCJhdXRvZml4IiwicHJlcFN0ciIsIm5leHRWYWwiLCJib3VuZGFyaWVzIiwiZmlyc3ROb25aZXJvIiwic2VhcmNoIiwiX21hdGNoRnJvbSIsIkdFVF9ERUZBVUxUX0JMT0NLUyIsIlkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiYmsiLCJkYXRlIiwiaXNEYXRlRXhpc3QiLCJmb3JtYXQiLCJwYXJzZSIsImRheSIsIm1vbnRoIiwieWVhciIsIk1hc2tFbGVtZW50Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJfdW5zYWZlU2VsZWN0IiwiaGFuZGxlcnMiLCJfdW5zYWZlU2VsZWN0aW9uU3RhcnQiLCJfdW5zYWZlU2VsZWN0aW9uRW5kIiwiSFRNTE1hc2tFbGVtZW50IiwiX2hhbmRsZXJzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJldmVudCIsIl90b2dnbGVFdmVudEhhbmRsZXIiLCJFVkVOVFNfTUFQIiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhY3RpdmVFbGVtZW50Iiwic2VsZWN0aW9uQ2hhbmdlIiwiZHJvcCIsImNsaWNrIiwiZm9jdXMiLCJJbnB1dE1hc2siLCJfbGlzdGVuZXJzIiwiX3VubWFza2VkVmFsdWUiLCJfc2F2ZVNlbGVjdGlvbiIsIl9vbklucHV0IiwiX29uQ2hhbmdlIiwiX29uRHJvcCIsIl9vbkZvY3VzIiwiYWxpZ25DdXJzb3IiLCJhbGlnbkN1cnNvckZyaWVuZGx5IiwiX2JpbmRFdmVudHMiLCJ1cGRhdGVWYWx1ZSIsImJpbmRFdmVudHMiLCJ1bmJpbmRFdmVudHMiLCJldiIsImxpc3RlbmVycyIsImwiLCJfc2VsZWN0aW9uIiwibmV3VW5tYXNrZWRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDaGFuZ2VkIiwiX2ZpcmVDaGFuZ2VFdmVudHMiLCJyZXN0T3B0cyIsInVwZGF0ZU9wdGlvbnMiLCJ1cGRhdGVDb250cm9sIiwiX2RlbGF5VXBkYXRlQ3Vyc29yIiwiX2Fib3J0VXBkYXRlQ3Vyc29yIiwiX2NoYW5naW5nQ3Vyc29yUG9zIiwiX2N1cnNvckNoYW5naW5nIiwic2V0VGltZW91dCIsIl9maXJlRXZlbnQiLCJjbGVhclRpbWVvdXQiLCJoSW5kZXgiLCJvbGRSYXdWYWx1ZSIsInJhd0lucHV0VmFsdWUiLCJyZW1vdmVkIiwidXBkYXRlQ3Vyc29yIiwic3RvcFByb3BhZ2F0aW9uIiwiX3VuYmluZEV2ZW50cyIsImNvbnN0cnVjdG9yIiwidHlwZWRWYWx1ZSIsImlzQWN0aXZlIiwic2VsZWN0IiwiTWFza2VkRW51bSIsImVudW0iLCJzb21lIiwiX3VwZGF0ZVJlZ0V4cHMiLCJhbGxvd05lZ2F0aXZlIiwibWlkSW5wdXQiLCJtaWQiLCJzY2FsZSIsInJhZGl4IiwiX251bWJlclJlZ0V4cElucHV0IiwiX251bWJlclJlZ0V4cCIsIl9tYXBUb1JhZGl4UmVnRXhwIiwibWFwVG9SYWRpeCIsIl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAiLCJ0aG91c2FuZHNTZXBhcmF0b3IiLCJwYXJ0cyIsIl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzIiwiZXh0ZW5kT25TZXBhcmF0b3JzIiwiX3NlcGFyYXRvcnNDb3VudCIsIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzIiwicHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQiLCJfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlIiwiYXBwZW5kRGV0YWlscyIsIl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzIiwiYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCIsInNlYXJjaEZyb20iLCJzZXBhcmF0b3JQb3MiLCJzZXBhcmF0b3JBcm91bmRGcm9tUG9zIiwiX2ZpbmRTZXBhcmF0b3JBcm91bmQiLCJzZXBhcmF0b3JBcm91bmRUb1BvcyIsInZhbHVlQmVmb3JlUG9zIiwidmFsdWVBZnRlclBvcyIsInNlcGFyYXRvckF0TGVmdFBvcyIsInNlcGFyYXRvckF0TGVmdEVuZFBvcyIsInNlcGFyYXRvckF0UmlnaHRQb3MiLCJyZWdleHAiLCJ2YWxpZCIsIm51bWJlciIsInZhbGlkbnVtIiwiZm9ybWF0dGVkIiwibm9ybWFsaXplWmVyb3MiLCJfbm9ybWFsaXplWmVyb3MiLCJwYWRGcmFjdGlvbmFsWmVyb3MiLCJfcGFkRnJhY3Rpb25hbFplcm9zIiwic2lnbiIsInplcm9zIiwic2lnbmVkIiwiY3VycmVudE1hc2siLCJjb21waWxlZE1hc2tzIiwiX2FwcGx5RGlzcGF0Y2giLCJwcmV2VmFsdWVCZWZvcmVUYWlsIiwiaW5wdXRWYWx1ZSIsImluc2VydFZhbHVlIiwiX3Jhd0lucHV0VmFsdWUiLCJ0YWlsVmFsdWUiLCJwcmV2TWFzayIsInByZXZNYXNrU3RhdGUiLCJwcmV2TWFza0JlZm9yZVRhaWxTdGF0ZSIsImRvRGlzcGF0Y2giLCJkaXNwYXRjaCIsImN1cnJlbnRNYXNrUmVmIiwibWkiLCJpbnB1dHMiLCJ3ZWlnaHQiLCJpMSIsImkyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5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LEdBQW1CQSxVQUFuQjtFQUNBOztFQUNBNVUsS0FBSyxDQUFDdWUsV0FBTixHQUFvQkEsV0FBcEI7RUFDQTs7RUFDQXZlLEtBQUssQ0FBQzhlLGVBQU4sR0FBd0JBLGVBQXhCO0VBRUF0UCxDQUFDLENBQUN4UCxLQUFGLEdBQVVBLEtBQVYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcblxuXG5cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19mb3JtJyksXG4gICAgICB2YWxpZGF0ZUZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0Om5vdCh0ZXh0YXJlYSknKSxcbiAgICAgIG1haWxGaWVsZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI21haWwnKSxcbiAgICAgIG5hbWVGaWVsZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI25hbWUnKSxcbiAgICAgIHBob25lRmllbGQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZScpLFxuICAgICAgbWFpbFJlZyA9IC9eKFtBLVphLXowLTlfXFwtXFwuXSkrXFxAKFtBLVphLXowLTlfXFwtXFwuXSkrXFwuKFtBLVphLXpdezIsNH0pJC8sXG4gICAgICBwaG9uZVJlZyA9IC9cXCs3XFwoXFxkezN9XFwpXFxkezN9LVxcZHsyfS1cXGR7Mn0vLFxuICAgICAgbmFtZVJlZyA9IC9eKFxcdytcXFMrKSQvLFxuICAgICAgZGVmYXVsdEVycm9yVGV4dCA9ICfQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnLFxuICAgICAgbWFpbEVycm9yVGV4dCA9ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBlLW1haWwg0LDQtNGA0LXRgScsXG4gICAgICBwaG9uZUVycm9yVGV4dCA9ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnO1xuXG5cblxuLy8gUGhvbmUgbWFza1xuXG52YXIgbWFza09wdGlvbnMgPSB7XG4gIG1hc2s6ICcrezd9KDAwMCkwMDAtMDAtMDAnXG59O1xuXG52YXIgbWFzayA9IElNYXNrKHBob25lRmllbGQsIG1hc2tPcHRpb25zKTtcblxuXG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbmxldCByZW1vdmVWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBlcnJvcnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1ibG9jaycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBsZXQgcGFyZW50ID0gZXJyb3JzW2ldLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBlcnJvcnNbaV0ucmVtb3ZlKCk7XG5cbiAgfVxufTtcblxuXG5cbmxldCBnZW5lcmF0ZUVycm9yID0gZnVuY3Rpb24gKHRleHQpIHtcblxuICBsZXQgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBlcnJvci5jbGFzc05hbWUgPSAnZXJyb3ItYmxvY2snO1xuICBlcnJvci5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICBlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xuXG4gIHJldHVybiBlcnJvclxuXG59O1xuXG5cblxubGV0IGNoZWNrRmllbGRzQWxsID0gZnVuY3Rpb24gKCkge1xuXG4gIGxldCBlcnJvckNsYXNzLCBlcnJvckVsZW1lbnRcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRlRmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBlcnJvckNsYXNzID0gdmFsaWRhdGVGaWVsZHNbaV0ucGFyZW50RWxlbWVudDtcbiAgICBlcnJvckVsZW1lbnQgPSBlcnJvckNsYXNzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1ibG9jaycpO1xuXG4gIH1cblxuICBpZighZXJyb3JDbGFzcy5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykgJiYgIWVycm9yRWxlbWVudC5sZW5ndGggKSB7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd2YWxpZGF0ZScpXG4gIH1lbHNle1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmFsaWRhdGUnKVxuICB9XG59O1xuXG5cblxuXG5sZXQgY2hlY2tGaWVsZHNQcmVzZW5jZSA9IGZ1bmN0aW9uICgpIHtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRlRmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBpZiAoIXZhbGlkYXRlRmllbGRzW2ldLnZhbHVlKSB7XG5cbiAgICAgIHZhbGlkYXRlRmllbGRzW2ldLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgIGxldCBlcnJvciA9IGdlbmVyYXRlRXJyb3IoZGVmYXVsdEVycm9yVGV4dCk7XG4gICAgICB2YWxpZGF0ZUZpZWxkc1tpXS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yKTtcblxuICAgIH1cbiAgfVxufTtcblxuXG5cbmxldCBjaGVja0ZpZWxkcyA9IGZ1bmN0aW9uIChyZWcsIGZpZWxkLCBnZW5lcmF0ZVRleHQpIHtcblxuICBsZXQgdmFsdWUgPSBmaWVsZC52YWx1ZSxcbiAgICAgIGNoaWxkID0gZmllbGQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItYmxvY2snKTtcblxuICBpZighcmVnLnRlc3QodmFsdWUpKXtcbiAgICBmaWVsZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG5cbiAgICBsZXQgZXJyb3IgPSBnZW5lcmF0ZUVycm9yKGdlbmVyYXRlVGV4dCk7XG5cbiAgICAoY2hpbGQpID8gY2hpbGQudGV4dENvbnRlbnQgPSBnZW5lcmF0ZVRleHQgOiBmaWVsZC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yKTtcblxuICB9ZWxzZXtcbiAgICBsZXQgZXJyb3IgPSBmaWVsZC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1ibG9jaycpO1xuICAgIGlmKGVycm9yKXtcbiAgICAgIGxldCBwYXJlbnQgPSBlcnJvci5wYXJlbnRFbGVtZW50O1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgICBlcnJvci5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHJlbW92ZVZhbGlkYXRpb24oKTtcblxuICBjaGVja0ZpZWxkc1ByZXNlbmNlKCk7XG5cbiAgY2hlY2tGaWVsZHMoXG4gICAgbmFtZVJlZyxcbiAgICBuYW1lRmllbGQsXG4gICAgZGVmYXVsdEVycm9yVGV4dFxuICApO1xuXG4gIGNoZWNrRmllbGRzKFxuICAgIG1haWxSZWcsXG4gICAgbWFpbEZpZWxkLFxuICAgIG1haWxFcnJvclRleHRcbiAgKTtcblxuICBjaGVja0ZpZWxkcyhcbiAgICBwaG9uZVJlZyxcbiAgICBwaG9uZUZpZWxkLFxuICAgIHBob25lRXJyb3JUZXh0XG4gICk7XG5cbiAgY2hlY2tGaWVsZHNBbGwoKTtcblxuICBpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygndmFsaWRhdGUnKSl7XG5cbiAgICB2YXIgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNNb2RhbCcpO1xuXG4gICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0ID8gbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnb3BlbicpIDogbW9kYWxXaW5kb3cuY2xhc3NOYW1lICs9ICcgJyArICdvcGVuJztcbiAgfVxuXG59KTtcblxuXG5mb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRlRmllbGRzLmxlbmd0aDsgaSsrKXtcbiAgdmFsaWRhdGVGaWVsZHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gdGhpcy5pZCxcbiAgICAgICAgZ2VuZXJhdGVUZXh0ID0gJycsIHJlZztcblxuICAgIHN3aXRjaCAoY3VycmVudEVsZW1lbnQpe1xuICAgICAgY2FzZSAnbWFpbCc6XG5cbiAgICAgICAgZ2VuZXJhdGVUZXh0ID0gbWFpbEVycm9yVGV4dDtcbiAgICAgICAgcmVnID0gbWFpbFJlZztcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncGhvbmUnOlxuXG4gICAgICAgIGdlbmVyYXRlVGV4dCA9IHBob25lRXJyb3JUZXh0O1xuICAgICAgICByZWcgPSBwaG9uZVJlZztcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbmFtZSc6XG5cbiAgICAgICAgZ2VuZXJhdGVUZXh0ID0gZGVmYXVsdEVycm9yVGV4dDtcbiAgICAgICAgcmVnID0gbmFtZVJlZztcblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcblxuICAgICAgICBnZW5lcmF0ZVRleHQgPSBkZWZhdWx0RXJyb3JUZXh0O1xuXG4gICAgfVxuXG5cbiAgICBjaGVja0ZpZWxkcyhcbiAgICAgIHJlZyxcbiAgICAgIHRoaXMsXG4gICAgICBnZW5lcmF0ZVRleHRcbiAgICApO1xuXG4gIH0pO1xufVxuXG5cbiIsIihmdW5jdGlvbigpIHtcbiAgLyogT3BlbmluZyBtb2RhbCB3aW5kb3cgZnVuY3Rpb24gKi9cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIC8qIEdldCB0cmlnZ2VyIGVsZW1lbnQgKi9cbiAgICB2YXIgbW9kYWxUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanNNb2RhbFRyaWdnZXInKTtcblxuICAgIC8qIFNldCBvbmNsaWNrIGV2ZW50IGhhbmRsZXIgZm9yIGFsbCB0cmlnZ2VyIGVsZW1lbnRzICovXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG1vZGFsVHJpZ2dlci5sZW5ndGg7IGkrKykge1xuICAgICAgbW9kYWxUcmlnZ2VyW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpO1xuICAgICAgICB2YXIgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xuXG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdCA/IG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ29wZW4nKSA6IG1vZGFsV2luZG93LmNsYXNzTmFtZSArPSAnICcgKyAnb3Blbic7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpe1xuICAgIC8qIEdldCBjbG9zZSBidXR0b24gKi9cbiAgICB2YXIgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqc01vZGFsQ2xvc2UnKTtcbiAgICB2YXIgY2xvc2VPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanNPdmVybGF5Jyk7XG5cblxuXG5cbiAgICAvKiBTZXQgb25jbGljayBldmVudCBoYW5kbGVyIGZvciBjbG9zZSBidXR0b25zICovXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNsb3NlQnV0dG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjbG9zZUJ1dHRvbltpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdCA/IG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKSA6IG1vZGFsV2luZG93LmNsYXNzTmFtZSA9IG1vZGFsV2luZG93LmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyAnb3Blbicuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9faW5wdXQnKTtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHZhbGlkYXRlRmllbGRzLmxlbmd0aDsgaisrKXtcblxuICAgICAgICAgIHZhbGlkYXRlRmllbGRzW2pdLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBTZXQgb25jbGljayBldmVudCBoYW5kbGVyIGZvciBtb2RhbCBvdmVybGF5ICovXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNsb3NlT3ZlcmxheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2xvc2VPdmVybGF5W2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdCA/IG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKSA6IG1vZGFsV2luZG93LmNsYXNzTmFtZSA9IG1vZGFsV2luZG93LmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyAnb3Blbicuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XG4gICAgICB9XG4gICAgfVxuXG5cblxuICB9XG5cbiAgLyogSGFuZGxpbmcgZG9tcmVhZHkgZXZlbnQgSUU5KyAqL1xuICBmdW5jdGlvbiByZWFkeShmbikge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9ICdsb2FkaW5nJyl7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cbiAgfVxuXG4gIC8qIFRyaWdnZXJpbmcgbW9kYWwgd2luZG93IGZ1bmN0aW9uIGFmdGVyIGRvbSByZWFkeSAqL1xuICByZWFkeShvcGVuTW9kYWwpO1xuICByZWFkeShjbG9zZU1vZGFsKTtcbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnY29tcG9uZW50cy9mb3JtL2Zvcm0nO1xuaW1wb3J0ICdjb21wb25lbnRzL3BvcHVwL3BvcHVwJztcblxuXG5cbi8qXG4gICAgVGhpcyBmaWxlIGNhbiBiZSB1c2VkIGFzIGVudHJ5IHBvaW50IGZvciB3ZWJwYWNrIVxuICovXG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9ICcnLnJlcGVhdCB8fCBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCkge1xuICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoYXQpKTtcbiAgdmFyIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoO1xuICB2YXIgZmlsbFN0ciA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKTtcbiAgdmFyIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gIHZhciBmaWxsTGVuLCBzdHJpbmdGaWxsZXI7XG4gIGlmIChpbnRNYXhMZW5ndGggPD0gc3RyaW5nTGVuZ3RoIHx8IGZpbGxTdHIgPT0gJycpIHJldHVybiBTO1xuICBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoO1xuICBzdHJpbmdGaWxsZXIgPSByZXBlYXQuY2FsbChmaWxsU3RyLCBNYXRoLmNlaWwoZmlsbExlbiAvIGZpbGxTdHIubGVuZ3RoKSk7XG4gIGlmIChzdHJpbmdGaWxsZXIubGVuZ3RoID4gZmlsbExlbikgc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIHdpbmRvdy5NYXRoID09IE1hdGggPyB3aW5kb3dcbiAgOiB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzI4MFxudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2VyLWFnZW50Jyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXVuc2FmZS1yZWdleFxubW9kdWxlLmV4cG9ydHMgPSAvVmVyc2lvblxcLzEwXFwuXFxkKyhcXC5cXGQrKT8oIE1vYmlsZVxcL1xcdyspPyBTYWZhcmlcXC8vLnRlc3QodXNlckFnZW50KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBleGlzdCA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGV4aXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpKCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgaGlkZShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjAuMScsXG4gIG1vZGU6IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCJ2YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBXZWFrTWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChXZWFrTWFwKSk7XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBXZWFrTWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaGlkZShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcpLnNwbGl0KCd0b1N0cmluZycpO1xuXG5yZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJykoJ2luc3BlY3RTb3VyY2UnLCBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG59KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSBoaWRlKHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGhpZGUoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4obGVuZ3RoLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgUmVmbGVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKS5SZWZsZWN0O1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGhpZGUoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsU3RyaW5nUGFkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1wYWQnKTtcbnZhciBXRUJLSVRfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYmtpdC1zdHJpbmctcGFkLWJ1ZycpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5wYWRFbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5wYWRlbmRcbnJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKSh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFdFQktJVF9CVUcgfSwge1xuICBwYWRFbmQ6IGZ1bmN0aW9uIHBhZEVuZChtYXhMZW5ndGggLyogLCBmaWxsU3RyaW5nID0gJyAnICovKSB7XG4gICAgcmV0dXJuIGludGVybmFsU3RyaW5nUGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxTdHJpbmdQYWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXBhZCcpO1xudmFyIFdFQktJVF9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Via2l0LXN0cmluZy1wYWQtYnVnJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucGFkc3RhcnRcbnJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKSh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFdFQktJVF9CVUcgfSwge1xuICBwYWRTdGFydDogZnVuY3Rpb24gcGFkU3RhcnQobWF4TGVuZ3RoIC8qICwgZmlsbFN0cmluZyA9ICcgJyAqLykge1xuICAgIHJldHVybiBpbnRlcm5hbFN0cmluZ1BhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgfVxufSk7XG4iLCIvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbnJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKSh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlIH0sIHtcbiAgcmVwZWF0OiByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpXG59KTtcbiIsIi8vIEBmbG93XHJcblxyXG5cclxuLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cclxuZXhwb3J0XHJcbmZ1bmN0aW9uIGlzU3RyaW5nIChzdHI6IG1peGVkKTogYm9vbGVhbiAlY2hlY2tzIHtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICBEaXJlY3Rpb25cclxuICBAcHJvcCB7c3RyaW5nfSBOT05FXHJcbiAgQHByb3Age3N0cmluZ30gTEVGVFxyXG4gIEBwcm9wIHtzdHJpbmd9IEZPUkNFX0xFRlRcclxuICBAcHJvcCB7c3RyaW5nfSBSSUdIVFxyXG4gIEBwcm9wIHtzdHJpbmd9IEZPUkNFX1JJR0hUXHJcbiovXHJcbmV4cG9ydFxyXG5jb25zdCBESVJFQ1RJT04gPSB7XHJcbiAgTk9ORTogJ05PTkUnLFxyXG4gIExFRlQ6ICdMRUZUJyxcclxuICBGT1JDRV9MRUZUOiAnRk9SQ0VfTEVGVCcsXHJcbiAgUklHSFQ6ICdSSUdIVCcsXHJcbiAgRk9SQ0VfUklHSFQ6ICdGT1JDRV9SSUdIVCcsXHJcbn1cclxuLyoqXHJcbiAgRGlyZWN0aW9uXHJcbiAgQGVudW0ge3N0cmluZ31cclxuKi9cclxuZXhwb3J0XHJcbnR5cGUgRGlyZWN0aW9uID0gJFZhbHVlczx0eXBlb2YgRElSRUNUSU9OPjtcclxuXHJcbi8qKiBSZXR1cm5zIG5leHQgY2hhciBpbmRleCBpbiBkaXJlY3Rpb24gKi9cclxuZXhwb3J0XHJcbmZ1bmN0aW9uIGluZGV4SW5EaXJlY3Rpb24gKHBvczogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbik6IG51bWJlciB7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIC0tcG9zO1xyXG4gIHJldHVybiBwb3M7XHJcbn1cclxuXHJcbi8qKiBSZXR1cm5zIG5leHQgY2hhciBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cclxuZXhwb3J0XHJcbmZ1bmN0aW9uIHBvc0luRGlyZWN0aW9uIChwb3M6IG51bWJlciwgZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiBudW1iZXIge1xyXG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG4gICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcclxuICAgICAgcmV0dXJuIC0tcG9zO1xyXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XHJcbiAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcclxuICAgICAgcmV0dXJuICsrcG9zO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHBvcztcclxuICB9XHJcbn1cclxuXHJcbi8qKiAqL1xyXG5leHBvcnRcclxuZnVuY3Rpb24gZm9yY2VEaXJlY3Rpb24gKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogRGlyZWN0aW9uIHtcclxuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcclxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9MRUZUO1xyXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XHJcbiAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfUklHSFQ7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEVzY2FwZXMgcmVndWxhciBleHByZXNzaW9uIGNvbnRyb2wgY2hhcnMgKi9cclxuZXhwb3J0XHJcbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF0vXFxcXF0pL2csICdcXFxcJDEnKTtcclxufVxyXG5cclxuXHJcbi8vIGNsb25lZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwgd2l0aCBzbWFsbCBjaGFuZ2VzXHJcbmV4cG9ydFxyXG5mdW5jdGlvbiBvYmplY3RJbmNsdWRlcyAoYjogYW55LCBhOiBhbnkpOiBib29sZWFuIHtcclxuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XHJcblxyXG4gIHZhciBhcnJBID0gQXJyYXkuaXNBcnJheShhKVxyXG4gICAgLCBhcnJCID0gQXJyYXkuaXNBcnJheShiKVxyXG4gICAgLCBpO1xyXG5cclxuICBpZiAoYXJyQSAmJiBhcnJCKSB7XHJcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKVxyXG4gICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XHJcbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZVxyXG4gICAgICAsIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XHJcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcclxuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cFxyXG4gICAgICAsIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xyXG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgIC8vIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspXHJcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspXHJcbiAgICAgIGlmKCFvYmplY3RJbmNsdWRlcyhiW2tleXNbaV1dLCBhW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5leHBvcnRcclxuY29uc3QgZzogYW55ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8XHJcbiAgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCB8fFxyXG4gIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZiB8fFxyXG4gIHt9O1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXHJcblxyXG4vKiogU2VsZWN0aW9uIHJhbmdlICovXHJcbmV4cG9ydFxyXG50eXBlIFNlbGVjdGlvbiA9IHtcclxuICBzdGFydDogbnVtYmVyO1xyXG4gIGVuZDogbnVtYmVyO1xyXG59O1xyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQge3R5cGUgRGlyZWN0aW9uLCB0eXBlIFNlbGVjdGlvbiwgRElSRUNUSU9OfSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcblxyXG4vKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBpbnB1dCAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBBY3Rpb25EZXRhaWxzIHtcclxuICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXHJcbiAgY3Vyc29yUG9zOiBudW1iZXI7XHJcbiAgLyoqIE9sZCBpbnB1dCB2YWx1ZSAqL1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcbiAgLyoqIE9sZCBzZWxlY3Rpb24gKi9cclxuICBvbGRTZWxlY3Rpb246IFNlbGVjdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgdmFsdWU6IHN0cmluZyxcclxuICAgIGN1cnNvclBvczogbnVtYmVyLFxyXG4gICAgb2xkVmFsdWU6IHN0cmluZyxcclxuICAgIG9sZFNlbGVjdGlvbjogU2VsZWN0aW9uXHJcbiAgKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvcztcclxuICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcclxuICAgIHRoaXMub2xkU2VsZWN0aW9uID0gb2xkU2VsZWN0aW9uO1xyXG5cclxuICAgIC8vIGRvdWJsZSBjaGVjayBpZiBsZWZ0IHBhcnQgd2FzIGNoYW5nZWQgKGF1dG9maWxsaW5nLCBvdGhlciBub24tc3RhbmRhcmQgaW5wdXQgdHJpZ2dlcnMpXHJcbiAgICB3aGlsZSAodGhpcy52YWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSAhPT0gdGhpcy5vbGRWYWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSkge1xyXG4gICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBTdGFydCBjaGFuZ2luZyBwb3NpdGlvblxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgc3RhcnRDaGFuZ2VQb3MgKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJzb3JQb3MsIHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgSW5zZXJ0ZWQgc3ltYm9scyBjb3VudFxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgaW5zZXJ0ZWRDb3VudCAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvclBvcyAtIHRoaXMuc3RhcnRDaGFuZ2VQb3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEluc2VydGVkIHN5bWJvbHNcclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZ2V0IGluc2VydGVkICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFJlbW92ZWQgc3ltYm9scyBjb3VudFxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgcmVtb3ZlZENvdW50ICgpOiBudW1iZXIge1xyXG4gICAgLy8gTWF0aC5tYXggZm9yIG9wcG9zaXRlIG9wZXJhdGlvblxyXG4gICAgcmV0dXJuIE1hdGgubWF4KCh0aGlzLm9sZFNlbGVjdGlvbi5lbmQgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSB8fFxyXG4gICAgICAvLyBmb3IgRGVsZXRlXHJcbiAgICAgIHRoaXMub2xkVmFsdWUubGVuZ3RoIC0gdGhpcy52YWx1ZS5sZW5ndGgsIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBSZW1vdmVkIHN5bWJvbHNcclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZ2V0IHJlbW92ZWQgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5yZW1vdmVkQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBVbmNoYW5nZWQgaGVhZCBzeW1ib2xzXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGdldCBoZWFkICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBVbmNoYW5nZWQgdGFpbCBzeW1ib2xzXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGdldCB0YWlsICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKHRoaXMuc3RhcnRDaGFuZ2VQb3MgKyB0aGlzLmluc2VydGVkQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBSZW1vdmUgZGlyZWN0aW9uXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGdldCByZW1vdmVEaXJlY3Rpb24gKCk6IERpcmVjdGlvbiB7XHJcbiAgICBpZiAoIXRoaXMucmVtb3ZlZENvdW50IHx8IHRoaXMuaW5zZXJ0ZWRDb3VudCkgcmV0dXJuIERJUkVDVElPTi5OT05FO1xyXG5cclxuICAgIC8vIGFsaWduIHJpZ2h0IGlmIGRlbGV0ZSBhdCByaWdodCBvciBpZiByYW5nZSByZW1vdmVkIChldmVudCB3aXRoIGJhY2tzcGFjZSlcclxuICAgIHJldHVybiAodGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLmN1cnNvclBvcyB8fCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA9PT0gdGhpcy5jdXJzb3JQb3MpID9cclxuICAgICAgRElSRUNUSU9OLlJJR0hUIDpcclxuICAgICAgRElSRUNUSU9OLkxFRlQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcblxyXG5cclxuLyoqXHJcbiAgUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBtb2RlbCB2YWx1ZVxyXG4gIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlsc11cclxuICBAcGFyYW0ge3N0cmluZ30gW2RldGFpbHMuaW5zZXJ0ZWRdIC0gSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gW2RldGFpbHMuc2tpcF0gLSBDYW4gc2tpcCBjaGFyc1xyXG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy5yZW1vdmVDb3VudF0gLSBSZW1vdmVkIHN5bWJvbHMgY291bnRcclxuICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMudGFpbFNoaWZ0XSAtIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIENoYW5nZURldGFpbHMge1xyXG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXHJcbiAgaW5zZXJ0ZWQ6IHN0cmluZztcclxuICAvKiogQ2FuIHNraXAgY2hhcnMgKi9cclxuICBza2lwOiBib29sZWFuO1xyXG4gIC8qKiBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbCAqL1xyXG4gIHRhaWxTaGlmdDogbnVtYmVyO1xyXG4gIC8qKiBSYXcgaW5zZXJ0ZWQgaXMgdXNlZCBieSBkeW5hbWljIG1hc2sgKi9cclxuICByYXdJbnNlcnRlZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoZGV0YWlscz86IHtcclxuICAgIGluc2VydGVkPzogJFByb3BlcnR5VHlwZTxDaGFuZ2VEZXRhaWxzLCAnaW5zZXJ0ZWQnPixcclxuICAgIHJhd0luc2VydGVkPzogJFByb3BlcnR5VHlwZTxDaGFuZ2VEZXRhaWxzLCAncmF3SW5zZXJ0ZWQnPixcclxuICAgIHNraXA/OiAkUHJvcGVydHlUeXBlPENoYW5nZURldGFpbHMsICdza2lwJz4sXHJcbiAgICB0YWlsU2hpZnQ/OiAkUHJvcGVydHlUeXBlPENoYW5nZURldGFpbHMsICd0YWlsU2hpZnQnPixcclxuICB9KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcclxuICAgICAgaW5zZXJ0ZWQ6ICcnLFxyXG4gICAgICByYXdJbnNlcnRlZDogJycsXHJcbiAgICAgIHNraXA6IGZhbHNlLFxyXG4gICAgICB0YWlsU2hpZnQ6IDAsXHJcbiAgICB9LCBkZXRhaWxzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQWdncmVnYXRlIGNoYW5nZXNcclxuICAgIEByZXR1cm5zIHtDaGFuZ2VEZXRhaWxzfSBgdGhpc2BcclxuICAqL1xyXG4gIGFnZ3JlZ2F0ZSAoZGV0YWlsczogQ2hhbmdlRGV0YWlscyk6IENoYW5nZURldGFpbHMge1xyXG4gICAgdGhpcy5yYXdJbnNlcnRlZCArPSBkZXRhaWxzLnJhd0luc2VydGVkO1xyXG4gICAgdGhpcy5za2lwID0gdGhpcy5za2lwIHx8IGRldGFpbHMuc2tpcDtcclxuICAgIHRoaXMuaW5zZXJ0ZWQgKz0gZGV0YWlscy5pbnNlcnRlZDtcclxuICAgIHRoaXMudGFpbFNoaWZ0ICs9IGRldGFpbHMudGFpbFNoaWZ0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogVG90YWwgb2Zmc2V0IGNvbnNpZGVyaW5nIGFsbCBjaGFuZ2VzICovXHJcbiAgZ2V0IG9mZnNldCAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRhaWxTaGlmdCArIHRoaXMuaW5zZXJ0ZWQubGVuZ3RoO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgdHlwZSB7IFRhaWxEZXRhaWxzLCBBcHBlbmRUYWlsIH0gZnJvbSAnLi90YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgdHlwZSBDaGFuZ2VEZXRhaWxzIGZyb20gJy4vY2hhbmdlLWRldGFpbHMuanMnO1xyXG5cclxuXHJcbnR5cGUgQ29udGludW91c1RhaWxTdGF0ZSA9IHtcclxuICB2YWx1ZTogJFByb3BlcnR5VHlwZTxDb250aW51b3VzVGFpbERldGFpbHMsICd2YWx1ZSc+LFxyXG4gIGZyb206ICRQcm9wZXJ0eVR5cGU8Q29udGludW91c1RhaWxEZXRhaWxzLCAnZnJvbSc+LFxyXG4gIHN0b3A/OiAkUHJvcGVydHlUeXBlPENvbnRpbnVvdXNUYWlsRGV0YWlscywgJ3N0b3AnPixcclxufTtcclxuXHJcbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNvbnRpbnVvdXMgZXh0cmFjdGVkIHRhaWwgKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgQ29udGludW91c1RhaWxEZXRhaWxzIGltcGxlbWVudHMgVGFpbERldGFpbHMge1xyXG4gIC8qKiBUYWlsIHZhbHVlIGFzIHN0cmluZyAqL1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgLyoqIFRhaWwgc3RhcnQgcG9zaXRpb24gKi9cclxuICBmcm9tOiBudW1iZXI7XHJcbiAgLyoqIFN0YXJ0IHBvc2l0aW9uICovXHJcbiAgc3RvcDogP251bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IgKHZhbHVlPzogc3RyaW5nPScnLCBmcm9tPzogbnVtYmVyPTAsIHN0b3A/OiBudW1iZXIpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZnJvbSA9IGZyb207XHJcbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcgKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnZhbHVlOyB9XHJcblxyXG4gIGV4dGVuZCAodGFpbDogc3RyaW5nIHwgVGFpbERldGFpbHMpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kVG8gKG1hc2tlZDogQXBwZW5kVGFpbCk6IENoYW5nZURldGFpbHMge1xyXG4gICAgcmV0dXJuIG1hc2tlZC5hcHBlbmQodGhpcy50b1N0cmluZygpLCB7IHRhaWw6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdGUgKCk6IENvbnRpbnVvdXNUYWlsU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgIGZyb206IHRoaXMuZnJvbSxcclxuICAgICAgc3RvcDogdGhpcy5zdG9wLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldCBzdGF0ZSAoc3RhdGU6IENvbnRpbnVvdXNUYWlsU3RhdGUpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgc2hpZnRCZWZvcmUgKHBvczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmZyb20gPj0gcG9zIHx8ICF0aGlzLnZhbHVlLmxlbmd0aCkgcmV0dXJuICcnO1xyXG5cclxuICAgIGNvbnN0IHNoaWZ0Q2hhciA9IHRoaXMudmFsdWVbMF07XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgxKTtcclxuICAgIHJldHVybiBzaGlmdENoYXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgeyB0eXBlIERpcmVjdGlvbiwgRElSRUNUSU9OLCBpc1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xyXG5pbXBvcnQgeyB0eXBlIFRhaWxEZXRhaWxzIH0gZnJvbSAnLi4vY29yZS90YWlsLWRldGFpbHMuanMnO1xyXG5cclxuXHJcbi8qKiBTdXBwb3J0ZWQgbWFzayB0eXBlICovXHJcbmV4cG9ydFxyXG50eXBlIE1hc2sgPVxyXG4gIHN0cmluZyB8XHJcbiAgU3RyaW5nIHxcclxuICBSZWdFeHAgfFxyXG4gIENsYXNzPE51bWJlcj4gfFxyXG4gIENsYXNzPERhdGU+IHxcclxuICBBcnJheTxhbnk+IHxcclxuICAkUHJvcGVydHlUeXBlPE1hc2tlZDwqPiwgJ3ZhbGlkYXRlJz4gfFxyXG4gIE1hc2tlZDwqPiB8XHJcbiAgQ2xhc3M8TWFza2VkPCo+PjtcclxuXHJcbmV4cG9ydFxyXG50eXBlIE1hc2tlZFN0YXRlID0ge3xcclxuICBfdmFsdWU6IHN0cmluZyxcclxufH07XHJcblxyXG4vKiogQXBwZW5kIGZsYWdzICovXHJcbmV4cG9ydFxyXG50eXBlIEFwcGVuZEZsYWdzID0ge1xyXG4gIGlucHV0PzogYm9vbGVhbixcclxuICB0YWlsPzogYm9vbGVhbixcclxuICByYXc/OiBib29sZWFuXHJcbn07XHJcblxyXG4vKiogRXh0cmFjdCBmbGFncyAqL1xyXG5leHBvcnRcclxudHlwZSBFeHRyYWN0RmxhZ3MgPSB7XHJcbiAgcmF3PzogYm9vbGVhblxyXG59O1xyXG5cclxuZXhwb3J0XHJcbnR5cGUgTWFza2VkT3B0aW9uczxNYXNrVHlwZT4gPSB7XHJcbiAgbWFzazogJFByb3BlcnR5VHlwZTxNYXNrZWQ8TWFza1R5cGU+LCAnbWFzayc+LFxyXG4gIHBhcmVudD86ICRQcm9wZXJ0eVR5cGU8TWFza2VkPCo+LCAncGFyZW50Jz4sXHJcbiAgcHJlcGFyZT86ICRQcm9wZXJ0eVR5cGU8TWFza2VkPE1hc2tUeXBlPiwgJ3ByZXBhcmUnPixcclxuICB2YWxpZGF0ZT86ICRQcm9wZXJ0eVR5cGU8TWFza2VkPE1hc2tUeXBlPiwgJ3ZhbGlkYXRlJz4sXHJcbiAgY29tbWl0PzogJFByb3BlcnR5VHlwZTxNYXNrZWQ8TWFza1R5cGU+LCAnY29tbWl0Jz4sXHJcbiAgb3ZlcndyaXRlPzogJFByb3BlcnR5VHlwZTxNYXNrZWQ8TWFza1R5cGU+LCAnb3ZlcndyaXRlJz4sXHJcbn07XHJcblxyXG5cclxuLyoqIFByb3ZpZGVzIGNvbW1vbiBtYXNraW5nIHN0dWZmICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIE1hc2tlZDxNYXNrVHlwZT4ge1xyXG4gIHN0YXRpYyBERUZBVUxUUzogYW55OyAvLyAkU2hhcGU8TWFza2VkT3B0aW9ucz47IFRPRE8gYWZ0ZXIgZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy80NzczXHJcblxyXG4gIC8qKiBAdHlwZSB7TWFza30gKi9cclxuICBtYXNrOiBNYXNrVHlwZTtcclxuICAvKiogKi8gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xyXG4gIHBhcmVudDogP01hc2tlZDwqPjtcclxuICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXHJcbiAgcHJlcGFyZTogKHN0cmluZywgTWFza2VkPE1hc2tUeXBlPiwgQXBwZW5kRmxhZ3MpID0+IHN0cmluZztcclxuICAvKiogVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGUgKi9cclxuICB2YWxpZGF0ZTogKHN0cmluZywgTWFza2VkPE1hc2tUeXBlPiwgQXBwZW5kRmxhZ3MpID0+IGJvb2xlYW47XHJcbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xyXG4gIGNvbW1pdDogKHN0cmluZywgTWFza2VkPE1hc2tUeXBlPikgPT4gdm9pZDtcclxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cclxuICBvdmVyd3JpdGU6ID9ib29sZWFuO1xyXG4gIC8qKiAqL1xyXG4gIGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcbiAgX3ZhbHVlOiBzdHJpbmc7XHJcbiAgX3JlZnJlc2hpbmc6IGJvb2xlYW47XHJcbiAgX2JlZm9yZVRhaWxTdGF0ZTogP01hc2tlZFN0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvciAob3B0czoge1tzdHJpbmddOiBhbnl9KSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5fdXBkYXRlKG9wdHMpO1xyXG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBTZXRzIGFuZCBhcHBsaWVzIG5ldyBvcHRpb25zICovXHJcbiAgdXBkYXRlT3B0aW9ucyAob3B0czoge1tzdHJpbmddOiBhbnl9KSB7XHJcbiAgICBpZiAoIU9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgU2V0cyBuZXcgb3B0aW9uc1xyXG4gICAgQHByb3RlY3RlZFxyXG4gICovXHJcbiAgX3VwZGF0ZSAob3B0czoge1tzdHJpbmddOiBhbnl9KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE1hc2sgc3RhdGUgKi9cclxuICBnZXQgc3RhdGUgKCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBfdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXRlIChzdGF0ZTogYW55KSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHN0YXRlLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBSZXNldHMgdmFsdWUgKi9cclxuICByZXNldCAoKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgZ2V0IHZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlICh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc29sdmUgbmV3IHZhbHVlICovXHJcbiAgcmVzb2x2ZSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge2lucHV0OiB0cnVlfSwgJycpO1xyXG4gICAgdGhpcy5kb0NvbW1pdCgpO1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBnZXQgdW5tYXNrZWRWYWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHVubWFza2VkVmFsdWUgKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7fSwgJycpO1xyXG4gICAgdGhpcy5kb0NvbW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgZ2V0IHR5cGVkVmFsdWUgKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy51bm1hc2tlZFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHR5cGVkVmFsdWUgKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFZhbHVlIHRoYXQgaW5jbHVkZXMgcmF3IHVzZXIgaW5wdXQgKi9cclxuICBnZXQgcmF3SW5wdXRWYWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmV4dHJhY3RJbnB1dCgwLCB0aGlzLnZhbHVlLmxlbmd0aCwge3JhdzogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgc2V0IHJhd0lucHV0VmFsdWUgKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7cmF3OiB0cnVlfSwgJycpO1xyXG4gICAgdGhpcy5kb0NvbW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgZ2V0IGlzQ29tcGxldGUgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKiogRmluZHMgbmVhcmVzdCBpbnB1dCBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cclxuICBuZWFyZXN0SW5wdXRQb3MgKGN1cnNvclBvczogbnVtYmVyLCBkaXJlY3Rpb24/OiBEaXJlY3Rpb24pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGN1cnNvclBvcztcclxuICB9XHJcblxyXG4gIC8qKiBFeHRyYWN0cyB2YWx1ZSBpbiByYW5nZSBjb25zaWRlcmluZyBmbGFncyAqL1xyXG4gIGV4dHJhY3RJbnB1dCAoZnJvbVBvcz86IG51bWJlcj0wLCB0b1Bvcz86IG51bWJlcj10aGlzLnZhbHVlLmxlbmd0aCwgZmxhZ3M/OiBFeHRyYWN0RmxhZ3MpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEV4dHJhY3RzIHRhaWwgaW4gcmFuZ2UgKi9cclxuICBleHRyYWN0VGFpbCAoZnJvbVBvcz86IG51bWJlcj0wLCB0b1Bvcz86IG51bWJlcj10aGlzLnZhbHVlLmxlbmd0aCk6IFRhaWxEZXRhaWxzIHtcclxuICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XHJcbiAgfVxyXG5cclxuICAvKiogU3RvcmVzIHN0YXRlIGJlZm9yZSB0YWlsICovXHJcbiAgX3N0b3JlQmVmb3JlVGFpbFN0YXRlICgpIHtcclxuICAgIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKiogUmVzdG9yZXMgc3RhdGUgYmVmb3JlIHRhaWwgKi9cclxuICBfcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSAoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5fYmVmb3JlVGFpbFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc2V0cyBzdGF0ZSBiZWZvcmUgdGFpbCAqL1xyXG4gIF9yZXNldEJlZm9yZVRhaWxTdGF0ZSAoKSB7XHJcbiAgICB0aGlzLl9iZWZvcmVUYWlsU3RhdGUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFwcGVuZHMgdGFpbCAqL1xyXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcclxuICBhcHBlbmRUYWlsICh0YWlsOiBzdHJpbmcgfCBUYWlsRGV0YWlscyk6IENoYW5nZURldGFpbHMge1xyXG4gICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xyXG5cclxuICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFwcGVuZHMgY2hhciAqL1xyXG4gIF9hcHBlbmRDaGFyUmF3IChjaDogc3RyaW5nLCBmbGFnczogQXBwZW5kRmxhZ3M9e30pOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xyXG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcclxuICAgICAgaW5zZXJ0ZWQ6IGNoLFxyXG4gICAgICByYXdJbnNlcnRlZDogY2gsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBcHBlbmRzIGNoYXIgKi9cclxuICBfYXBwZW5kQ2hhciAoY2g6IHN0cmluZywgZmxhZ3M6IEFwcGVuZEZsYWdzPXt9LCBjaGVja1RhaWw/OiBUYWlsRGV0YWlscyk6IENoYW5nZURldGFpbHMge1xyXG4gICAgY2ggPSB0aGlzLmRvUHJlcGFyZShjaCwgZmxhZ3MpO1xyXG4gICAgaWYgKCFjaCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblxyXG4gICAgY29uc3QgY29uc2lzdGVudFN0YXRlOiBNYXNrZWRTdGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgY29uc2lzdGVudFRhaWw7XHJcbiAgICBjb25zdCBkZXRhaWxzOiBDaGFuZ2VEZXRhaWxzID0gdGhpcy5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpO1xyXG5cclxuICAgIGlmIChkZXRhaWxzLmluc2VydGVkKSB7XHJcbiAgICAgIGxldCBhcHBlbmRlZCA9IHRoaXMuZG9WYWxpZGF0ZShmbGFncykgIT09IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGFwcGVuZGVkICYmIGNoZWNrVGFpbCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxyXG4gICAgICAgIHRoaXMuX3N0b3JlQmVmb3JlVGFpbFN0YXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3ZlcndyaXRlKSB7XHJcbiAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcclxuICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdEJlZm9yZSh0aGlzLnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YWlsRGV0YWlscyA9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpO1xyXG5cclxuICAgICAgICBhcHBlbmRlZCA9IHRhaWxEZXRhaWxzLnJhd0luc2VydGVkID09PSBjaGVja1RhaWwudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgb2ssIHJvbGxiYWNrIHN0YXRlIGFmdGVyIHRhaWxcclxuICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmV2ZXJ0IGFsbCBpZiBzb21ldGhpbmcgd2VudCB3cm9uZ1xyXG4gICAgICBpZiAoIWFwcGVuZGVkKSB7XHJcbiAgICAgICAgZGV0YWlscy5yYXdJbnNlcnRlZCA9IGRldGFpbHMuaW5zZXJ0ZWQgPSAnJztcclxuICAgICAgICB0aGlzLnN0YXRlID0gY29uc2lzdGVudFN0YXRlO1xyXG4gICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIC8qKiBBcHBlbmRzIHN5bWJvbHMgY29uc2lkZXJpbmcgZmxhZ3MgKi9cclxuICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXHJcbiAgYXBwZW5kIChzdHI6IHN0cmluZywgZmxhZ3M/OiBBcHBlbmRGbGFncywgdGFpbD86IHN0cmluZyB8IFRhaWxEZXRhaWxzKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuICAgIGNvbnN0IGNoZWNrVGFpbCA9IHRhaWwgJiYgKGlzU3RyaW5nKHRhaWwpID8gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpIDogdGFpbCk7XHJcblxyXG4gICAgZm9yIChsZXQgY2k9MDsgY2k8c3RyLmxlbmd0aDsgKytjaSkge1xyXG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyKHN0cltjaV0sIGZsYWdzLCBjaGVja1RhaWwpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XHJcbiAgICBpZiAoY2hlY2tUYWlsICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5fc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcclxuICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCkudGFpbFNoaWZ0O1xyXG4gICAgICAvLyBUT0RPIGl0J3MgYSBnb29kIGlkZWEgdG8gY2xlYXIgc3RhdGUgYWZ0ZXIgYXBwZW5kaW5nIGVuZHNcclxuICAgICAgLy8gYnV0IGl0IGNhdXNlcyBidWdzIHdoZW4gb25lIGFwcGVuZCBjYWxscyBhbm90aGVyICh3aGVuIGR5bmFtaWMgZGlzcGF0Y2ggc2V0IHJhd0lucHV0VmFsdWUpXHJcbiAgICAgIC8vIHRoaXMuX3Jlc2V0QmVmb3JlVGFpbFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICByZW1vdmUgKGZyb21Qb3M/OiBudW1iZXI9MCwgdG9Qb3M/OiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xyXG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2FsbHMgZnVuY3Rpb24gYW5kIHJlYXBwbGllcyBjdXJyZW50IHZhbHVlICovXHJcbiAgd2l0aFZhbHVlUmVmcmVzaDxUPihmbjogKCkgPT4gVCk6IFQge1xyXG4gICAgaWYgKHRoaXMuX3JlZnJlc2hpbmcgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKCk7XHJcbiAgICB0aGlzLl9yZWZyZXNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB1bm1hc2tlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZTtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXQgPSBmbigpO1xyXG5cclxuICAgIC8vIHRyeSB0byB1cGRhdGUgd2l0aCByYXcgdmFsdWUgZmlyc3QgdG8ga2VlcCBmaXhlZCBjaGFyc1xyXG4gICAgaWYgKHRoaXMucmVzb2x2ZSh2YWx1ZSkgIT09IHZhbHVlKSB7XHJcbiAgICAgIC8vIG9yIGZhbGxiYWNrIHRvIHVubWFza2VkXHJcbiAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSB0aGlzLl9yZWZyZXNoaW5nO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgUHJlcGFyZXMgc3RyaW5nIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmdcclxuICAgIEBwcm90ZWN0ZWRcclxuICAqL1xyXG4gIGRvUHJlcGFyZSAoc3RyOiBzdHJpbmcsIGZsYWdzOiBBcHBlbmRGbGFncz17fSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlID9cclxuICAgICAgdGhpcy5wcmVwYXJlKHN0ciwgdGhpcywgZmxhZ3MpIDpcclxuICAgICAgc3RyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZVxyXG4gICAgQHByb3RlY3RlZFxyXG4gICovXHJcbiAgZG9WYWxpZGF0ZSAoZmxhZ3M6IEFwcGVuZEZsYWdzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKCF0aGlzLnZhbGlkYXRlIHx8IHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSwgdGhpcywgZmxhZ3MpKSAmJlxyXG4gICAgICAoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmRvVmFsaWRhdGUoZmxhZ3MpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiAgICBAcHJvdGVjdGVkXHJcbiAgKi9cclxuICBkb0NvbW1pdCAoKSB7XHJcbiAgICBpZiAodGhpcy5jb21taXQpIHRoaXMuY29tbWl0KHRoaXMudmFsdWUsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgc3BsaWNlIChzdGFydDogbnVtYmVyLCBkZWxldGVDb3VudDogbnVtYmVyLCBpbnNlcnRlZDogc3RyaW5nLCByZW1vdmVEaXJlY3Rpb246IERpcmVjdGlvbik6IENoYW5nZURldGFpbHMge1xyXG4gICAgY29uc3QgdGFpbFBvczogbnVtYmVyID0gc3RhcnQgKyBkZWxldGVDb3VudDtcclxuICAgIGNvbnN0IHRhaWw6IFRhaWxEZXRhaWxzID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcclxuXHJcbiAgICBsZXQgc3RhcnRDaGFuZ2VQb3M6IG51bWJlciA9IHRoaXMubmVhcmVzdElucHV0UG9zKHN0YXJ0LCByZW1vdmVEaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgY2hhbmdlRGV0YWlsczogQ2hhbmdlRGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKHtcclxuICAgICAgdGFpbFNoaWZ0OiBzdGFydENoYW5nZVBvcyAtIHN0YXJ0ICAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXHJcbiAgICB9KS5hZ2dyZWdhdGUodGhpcy5yZW1vdmUoc3RhcnRDaGFuZ2VQb3MpKVxyXG4gICAgICAuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGluc2VydGVkLCB7aW5wdXQ6IHRydWV9LCB0YWlsKSk7XHJcblxyXG4gICAgcmV0dXJuIGNoYW5nZURldGFpbHM7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB7ZywgaXNTdHJpbmd9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xyXG5pbXBvcnQgdHlwZSBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcclxuaW1wb3J0IHt0eXBlIE1hc2t9IGZyb20gJy4vYmFzZS5qcyc7XHJcblxyXG5cclxuLyoqIEdldCBNYXNrZWQgY2xhc3MgYnkgbWFzayB0eXBlICovXHJcbmV4cG9ydFxyXG5mdW5jdGlvbiBtYXNrZWRDbGFzcyAobWFzazogTWFzayk6IENsYXNzPE1hc2tlZDwqPj4ge1xyXG4gIGlmIChtYXNrID09IG51bGwpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignbWFzayBwcm9wZXJ0eSBzaG91bGQgYmUgZGVmaW5lZCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBnLklNYXNrLk1hc2tlZFJlZ0V4cDtcclxuICBpZiAoaXNTdHJpbmcobWFzaykpIHJldHVybiBnLklNYXNrLk1hc2tlZFBhdHRlcm47XHJcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBEYXRlIHx8IG1hc2sgPT09IERhdGUpIHJldHVybiBnLklNYXNrLk1hc2tlZERhdGU7XHJcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBOdW1iZXIgfHwgdHlwZW9mIG1hc2sgPT09ICdudW1iZXInIHx8IG1hc2sgPT09IE51bWJlcikgcmV0dXJuIGcuSU1hc2suTWFza2VkTnVtYmVyO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KG1hc2spIHx8IG1hc2sgPT09IEFycmF5KSByZXR1cm4gZy5JTWFzay5NYXNrZWREeW5hbWljO1xyXG4gIC8vICRGbG93Rml4TWVcclxuICBpZiAobWFzay5wcm90b3R5cGUgaW5zdGFuY2VvZiBnLklNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7XHJcbiAgLy8gJEZsb3dGaXhNZVxyXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHJldHVybiBnLklNYXNrLk1hc2tlZEZ1bmN0aW9uO1xyXG5cclxuICBjb25zb2xlLndhcm4oJ01hc2sgbm90IGZvdW5kIGZvciBtYXNrJywgbWFzayk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICByZXR1cm4gZy5JTWFzay5NYXNrZWQ7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGVzIG5ldyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gbWFzayB0eXBlICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmZ1bmN0aW9uIGNyZWF0ZU1hc2sgKG9wdHM6IHttYXNrOiBNYXNrfSk6IE1hc2tlZDwqPiB7XHJcbiAgb3B0cyA9IHsuLi5vcHRzfTtcclxuICBjb25zdCBtYXNrID0gb3B0cy5tYXNrO1xyXG5cclxuICBpZiAobWFzayBpbnN0YW5jZW9mIGcuSU1hc2suTWFza2VkKSByZXR1cm4gbWFzaztcclxuXHJcbiAgY29uc3QgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhtYXNrKTtcclxuICByZXR1cm4gbmV3IE1hc2tlZENsYXNzKG9wdHMpO1xyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4uL2ZhY3RvcnkuanMnO1xyXG5pbXBvcnQgdHlwZSBNYXNrZWQgZnJvbSAnLi4vYmFzZS5qcyc7XHJcbmltcG9ydCB0eXBlIE1hc2tlZFBhdHRlcm4gZnJvbSAnLi4vcGF0dGVybi5qcyc7XHJcbmltcG9ydCB7dHlwZSBUYWlsRGV0YWlsc30gZnJvbSAnLi4vLi4vY29yZS90YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQge3R5cGUgTWFzaywgdHlwZSBFeHRyYWN0RmxhZ3MsIHR5cGUgQXBwZW5kRmxhZ3N9IGZyb20gJy4uL2Jhc2UuanMnO1xyXG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcclxuaW1wb3J0IHtESVJFQ1RJT04sIHR5cGUgRGlyZWN0aW9ufSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcclxuaW1wb3J0IHt0eXBlIFBhdHRlcm5CbG9ja30gZnJvbSAnLi9ibG9jay5qcyc7XHJcblxyXG5cclxuZXhwb3J0XHJcbnR5cGUgRGVmaW5pdGlvbnMgPSB7W3N0cmluZ106IE1hc2t9O1xyXG5cclxuLyoqICovXHJcbnR5cGUgUGF0dGVybklucHV0RGVmaW5pdGlvbk9wdGlvbnMgPSB7XHJcbiAgcGFyZW50OiAkUHJvcGVydHlUeXBlPFBhdHRlcm5JbnB1dERlZmluaXRpb24sICdwYXJlbnQnPixcclxuICBtYXNrOiBNYXNrLFxyXG4gIGlzT3B0aW9uYWw6ICRQcm9wZXJ0eVR5cGU8UGF0dGVybklucHV0RGVmaW5pdGlvbiwgJ2lzT3B0aW9uYWwnPixcclxuICBsYXp5OiAkUHJvcGVydHlUeXBlPFBhdHRlcm5JbnB1dERlZmluaXRpb24sICdsYXp5Jz4sXHJcbiAgcGxhY2Vob2xkZXJDaGFyOiAkUHJvcGVydHlUeXBlPFBhdHRlcm5JbnB1dERlZmluaXRpb24sICdwbGFjZWhvbGRlckNoYXInPixcclxufTtcclxuXHJcbnR5cGUgUGF0dGVybklucHV0RGVmaW5pdGlvblN0YXRlID0ge1xyXG4gIG1hc2tlZDogKixcclxuICBfaXNGaWxsZWQ6IGJvb2xlYW4sXHJcbn07XHJcblxyXG5leHBvcnRcclxuY29uc3QgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUyA9IHtcclxuICAnMCc6IC9cXGQvLFxyXG4gICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLywgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyMDc1MDcwXHJcbiAgJyonOiAvLi9cclxufTtcclxuXHJcblxyXG4vKiogKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgUGF0dGVybklucHV0RGVmaW5pdGlvbiBpbXBsZW1lbnRzIFBhdHRlcm5CbG9jayB7XHJcbiAgLyoqICovXHJcbiAgK21hc2tlZDogTWFza2VkPCo+O1xyXG4gIC8qKiAqL1xyXG4gIHBhcmVudDogTWFza2VkPCo+O1xyXG4gIC8qKiAqL1xyXG4gIGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgLyoqICovXHJcbiAgX2lzRmlsbGVkOiBib29sZWFuO1xyXG4gIC8qKiAqL1xyXG4gIGxhenk6ICRQcm9wZXJ0eVR5cGU8TWFza2VkUGF0dGVybiwgJ2xhenknPjtcclxuICAvKiogKi9cclxuICBwbGFjZWhvbGRlckNoYXI6ICRQcm9wZXJ0eVR5cGU8TWFza2VkUGF0dGVybiwgJ3BsYWNlaG9sZGVyQ2hhcic+O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3Iob3B0czogUGF0dGVybklucHV0RGVmaW5pdGlvbk9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHttYXNrLCAuLi5ibG9ja09wdHN9ID0gb3B0cztcclxuXHJcbiAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2soe21hc2t9KTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgYmxvY2tPcHRzKTtcclxuICB9XHJcblxyXG4gIHJlc2V0ICgpIHtcclxuICAgIHRoaXMuX2lzRmlsbGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hc2tlZC5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlIChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBpZiAoZnJvbVBvcyA9PT0gMCAmJiB0b1BvcyA+PSAxKSB7XHJcbiAgICAgIHRoaXMuX2lzRmlsbGVkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlIHx8XHJcbiAgICAgICh0aGlzLl9pc0ZpbGxlZCAmJiAhdGhpcy5pc09wdGlvbmFsID9cclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6XHJcbiAgICAgICAgJycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVubWFza2VkVmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0NvbXBsZXRlICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XHJcbiAgfVxyXG5cclxuICBfYXBwZW5kQ2hhciAoc3RyOiBzdHJpbmcsIGZsYWdzOiBBcHBlbmRGbGFncz17fSk6IENoYW5nZURldGFpbHMge1xyXG4gICAgaWYgKHRoaXMuX2lzRmlsbGVkKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMubWFza2VkLnN0YXRlO1xyXG4gICAgLy8gc2ltdWxhdGUgaW5wdXRcclxuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLm1hc2tlZC5fYXBwZW5kQ2hhcihzdHIsIGZsYWdzKTtcclxuXHJcbiAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCAmJiB0aGlzLmRvVmFsaWRhdGUoZmxhZ3MpID09PSBmYWxzZSkge1xyXG4gICAgICBkZXRhaWxzLmluc2VydGVkID0gZGV0YWlscy5yYXdJbnNlcnRlZCA9ICcnO1xyXG4gICAgICB0aGlzLm1hc2tlZC5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsICYmICF0aGlzLmxhenkgJiYgIWZsYWdzLmlucHV0KSB7XHJcbiAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcclxuICAgIH1cclxuICAgIGRldGFpbHMuc2tpcCA9ICFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWw7XHJcbiAgICB0aGlzLl9pc0ZpbGxlZCA9IEJvb2xlYW4oZGV0YWlscy5pbnNlcnRlZCk7XHJcblxyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICBhcHBlbmQgKC4uLmFyZ3M6ICopOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIHJldHVybiB0aGlzLm1hc2tlZC5hcHBlbmQoLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICBfYXBwZW5kUGxhY2Vob2xkZXIgKCk6IENoYW5nZURldGFpbHMge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2lzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XHJcblxyXG4gICAgdGhpcy5faXNGaWxsZWQgPSB0cnVlO1xyXG4gICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICBleHRyYWN0VGFpbCAoLi4uYXJnczogKik6IFRhaWxEZXRhaWxzIHtcclxuICAgIHJldHVybiB0aGlzLm1hc2tlZC5leHRyYWN0VGFpbCguLi5hcmdzKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZFRhaWwgKC4uLmFyZ3M6ICopOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIHJldHVybiB0aGlzLm1hc2tlZC5hcHBlbmRUYWlsKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFjdElucHV0IChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoLCBmbGFncz86IEV4dHJhY3RGbGFncyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XHJcbiAgfVxyXG5cclxuICBuZWFyZXN0SW5wdXRQb3MgKGN1cnNvclBvczogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbj1ESVJFQ1RJT04uTk9ORSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBtaW5Qb3MgPSAwO1xyXG4gICAgY29uc3QgbWF4UG9zID0gdGhpcy52YWx1ZS5sZW5ndGg7XHJcbiAgICBjb25zdCBib3VuZFBvcyA9IE1hdGgubWluKE1hdGgubWF4KGN1cnNvclBvcywgbWluUG9zKSwgbWF4UG9zKTtcclxuXHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1pblBvcztcclxuICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcclxuICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIGJvdW5kUG9zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9WYWxpZGF0ZSAoLi4uYXJnczogKikge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmRvVmFsaWRhdGUoLi4uYXJncykgJiYgKFxyXG4gICAgICAhdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuZG9WYWxpZGF0ZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkb0NvbW1pdCAoKSB7XHJcbiAgICB0aGlzLm1hc2tlZC5kb0NvbW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXRlICgpOiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWFza2VkOiB0aGlzLm1hc2tlZC5zdGF0ZSxcclxuICAgICAgX2lzRmlsbGVkOiB0aGlzLl9pc0ZpbGxlZCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXQgc3RhdGUgKHN0YXRlOiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uU3RhdGUpIHtcclxuICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGUubWFza2VkO1xyXG4gICAgdGhpcy5faXNGaWxsZWQgPSBzdGF0ZS5faXNGaWxsZWQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgeyBESVJFQ1RJT04sIHR5cGUgRGlyZWN0aW9uLCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xyXG5pbXBvcnQgeyB0eXBlIFRhaWxEZXRhaWxzIH0gZnJvbSAnLi4vLi4vY29yZS90YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgeyB0eXBlIEV4dHJhY3RGbGFncywgdHlwZSBBcHBlbmRGbGFncywgdHlwZSBNYXNrZWRTdGF0ZSB9IGZyb20gJy4uL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyB0eXBlIFBhdHRlcm5CbG9jayB9IGZyb20gJy4vYmxvY2suanMnO1xyXG5cclxuXHJcbi8qKiAqL1xyXG50eXBlIFBhdHRlcm5GaXhlZERlZmluaXRpb25PcHRpb25zID0ge1xyXG4gIGNoYXI6ICRQcm9wZXJ0eVR5cGU8UGF0dGVybkZpeGVkRGVmaW5pdGlvbiwgJ2NoYXInPixcclxuICBpc1VubWFza2luZz86ICRQcm9wZXJ0eVR5cGU8UGF0dGVybkZpeGVkRGVmaW5pdGlvbiwgJ2lzVW5tYXNraW5nJz4sXHJcbn07XHJcblxyXG50eXBlIFBhdHRlcm5GaXhlZERlZmluaXRpb25TdGF0ZSA9IHt8XHJcbiAgLi4uTWFza2VkU3RhdGUsXHJcbiAgX2lzUmF3SW5wdXQ6ID9ib29sZWFuLFxyXG58fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIFBhdHRlcm5GaXhlZERlZmluaXRpb24gaW1wbGVtZW50cyBQYXR0ZXJuQmxvY2sge1xyXG4gIC8qKiAqL1xyXG4gIF92YWx1ZTogc3RyaW5nO1xyXG4gIC8qKiAqL1xyXG4gIGNoYXI6IHN0cmluZztcclxuICAvKiogKi9cclxuICBpc1VubWFza2luZzogP2Jvb2xlYW47XHJcbiAgLyoqICovXHJcbiAgX2lzUmF3SW5wdXQ6ID9ib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRzOiBQYXR0ZXJuRml4ZWREZWZpbml0aW9uT3B0aW9ucykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcclxuICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdW5tYXNrZWRWYWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzVW5tYXNraW5nID8gdGhpcy52YWx1ZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQgKCkge1xyXG4gICAgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fdmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIHJlbW92ZSAoZnJvbVBvcz86IG51bWJlcj0wLCB0b1Bvcz86IG51bWJlcj10aGlzLl92YWx1ZS5sZW5ndGgpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLl92YWx1ZS5zbGljZSh0b1Bvcyk7XHJcbiAgICBpZiAoIXRoaXMuX3ZhbHVlKSB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcbiAgfVxyXG5cclxuICBuZWFyZXN0SW5wdXRQb3MgKGN1cnNvclBvczogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbj1ESVJFQ1RJT04uTk9ORSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBtaW5Qb3MgPSAwO1xyXG4gICAgY29uc3QgbWF4UG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XHJcbiAgICAgICAgcmV0dXJuIG1pblBvcztcclxuICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcclxuICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gbWF4UG9zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXh0cmFjdElucHV0IChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMuX3ZhbHVlLmxlbmd0aCwgZmxhZ3M/OiBFeHRyYWN0RmxhZ3M9e30pIHtcclxuICAgIHJldHVybiBmbGFncy5yYXcgJiYgdGhpcy5faXNSYXdJbnB1dCAmJiB0aGlzLl92YWx1ZS5zbGljZShmcm9tUG9zLCB0b1BvcykgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDb21wbGV0ZSAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIF9hcHBlbmRDaGFyIChzdHI6IHN0cmluZywgZmxhZ3M/OiBBcHBlbmRGbGFncz17fSkge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcclxuXHJcbiAgICBjb25zdCBhcHBlbmRlZCA9IHRoaXMuY2hhciA9PT0gc3RyWzBdO1xyXG4gICAgY29uc3QgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgIWZsYWdzLnRhaWw7XHJcbiAgICBpZiAoaXNSZXNvbHZlZCkgZGV0YWlscy5yYXdJbnNlcnRlZCA9IHRoaXMuY2hhcjtcclxuICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcclxuICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgX2FwcGVuZFBsYWNlaG9sZGVyICgpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIGV4dHJhY3RUYWlsIChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoKTogVGFpbERldGFpbHMge1xyXG4gICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoJycpO1xyXG4gIH1cclxuXHJcbiAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xyXG4gIGFwcGVuZFRhaWwgKHRhaWw6IHN0cmluZyB8IFRhaWxEZXRhaWxzKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XHJcblxyXG4gICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmQgKHN0cjogc3RyaW5nLCBmbGFncz86IEFwcGVuZEZsYWdzLCB0YWlsPzogVGFpbERldGFpbHMpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyKHN0ciwgZmxhZ3MpO1xyXG5cclxuICAgIGlmICh0YWlsICE9IG51bGwpIHtcclxuICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKHRhaWwpLnRhaWxTaGlmdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIGRvQ29tbWl0ICgpIHt9XHJcblxyXG4gIGdldCBzdGF0ZSAoKTogUGF0dGVybkZpeGVkRGVmaW5pdGlvblN0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF92YWx1ZTogdGhpcy5fdmFsdWUsXHJcbiAgICAgIF9pc1Jhd0lucHV0OiB0aGlzLl9pc1Jhd0lucHV0LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldCBzdGF0ZSAoc3RhdGU6IFBhdHRlcm5GaXhlZERlZmluaXRpb25TdGF0ZSkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB7IGcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcclxuaW1wb3J0IHR5cGUgeyBUYWlsRGV0YWlscywgQXBwZW5kVGFpbCB9IGZyb20gJy4uLy4uL2NvcmUvdGFpbC1kZXRhaWxzLmpzJztcclxuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XHJcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XHJcblxyXG5cclxudHlwZSBDaHVua3NUYWlsU3RhdGUgPSB7XHJcbiAgY2h1bmtzOiAkUHJvcGVydHlUeXBlPENodW5rc1RhaWxEZXRhaWxzLCAnY2h1bmtzJz4sXHJcbiAgZnJvbTogJFByb3BlcnR5VHlwZTxDaHVua3NUYWlsRGV0YWlscywgJ2Zyb20nPixcclxuICBzdG9wPzogJFByb3BlcnR5VHlwZTxDaHVua3NUYWlsRGV0YWlscywgJ3N0b3AnPixcclxuICBibG9ja0luZGV4PzogJFByb3BlcnR5VHlwZTxDaHVua3NUYWlsRGV0YWlscywgJ2Jsb2NrSW5kZXgnPixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIENodW5rc1RhaWxEZXRhaWxzIGltcGxlbWVudHMgVGFpbERldGFpbHMge1xyXG4gIGNodW5rczogQXJyYXk8VGFpbERldGFpbHM+O1xyXG4gIGZyb206IG51bWJlcjtcclxuICBzdG9wOiA/bnVtYmVyO1xyXG4gIC8qKiAqL1xyXG4gIGJsb2NrSW5kZXg6ID9udW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChjaHVua3M/OiBBcnJheTxUYWlsRGV0YWlscz49W10sIGZyb20/OiBudW1iZXI9MCkge1xyXG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XHJcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jaHVua3MubWFwKFN0cmluZykuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXHJcbiAgZXh0ZW5kICh0YWlsQ2h1bms6IHN0cmluZyB8IFRhaWxEZXRhaWxzKTogdm9pZCB7XHJcbiAgICBpZiAoIVN0cmluZyh0YWlsQ2h1bmspKSByZXR1cm47XHJcbiAgICBpZiAoaXNTdHJpbmcodGFpbENodW5rKSkgdGFpbENodW5rID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbENodW5rKSk7XHJcblxyXG4gICAgY29uc3QgbGFzdENodW5rID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoLTFdO1xyXG4gICAgY29uc3QgZXh0ZW5kTGFzdCA9IGxhc3RDaHVuayAmJlxyXG4gICAgICAvLyBpZiBzdG9wcyBhcmUgc2FtZSBvciB0YWlsIGhhcyBubyBzdG9wXHJcbiAgICAgIChsYXN0Q2h1bmsuc3RvcCA9PT0gdGFpbENodW5rLnN0b3AgfHwgdGFpbENodW5rLnN0b3AgPT0gbnVsbCkgJiZcclxuICAgICAgLy8gaWYgdGFpbCBjaHVuayBnb2VzIGp1c3QgYWZ0ZXIgbGFzdCBjaHVua1xyXG4gICAgICB0YWlsQ2h1bmsuZnJvbSA9PT0gKGxhc3RDaHVuay5mcm9tICsgbGFzdENodW5rLnRvU3RyaW5nKCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ29udGludW91c1RhaWxEZXRhaWxzKSB7XHJcbiAgICAgIC8vIGNoZWNrIHRoZSBhYmlsaXR5IHRvIGV4dGVuZCBwcmV2aW91cyBjaHVua1xyXG4gICAgICBpZiAoZXh0ZW5kTGFzdCkge1xyXG4gICAgICAgIC8vIGV4dGVuZCBwcmV2aW91cyBjaHVua1xyXG4gICAgICAgIGxhc3RDaHVuay5leHRlbmQodGFpbENodW5rLnRvU3RyaW5nKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGFwcGVuZCBuZXcgY2h1bmtcclxuICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIHtcclxuICAgICAgaWYgKHRhaWxDaHVuay5zdG9wID09IG51bGwpIHtcclxuICAgICAgICAvLyB1bndyYXAgZmxvYXRpbmcgY2h1bmtzIHRvIHBhcmVudCwga2VlcGluZyBgZnJvbWAgcG9zXHJcbiAgICAgICAgbGV0IGZpcnN0VGFpbENodW5rO1xyXG4gICAgICAgIHdoaWxlICh0YWlsQ2h1bmsuY2h1bmtzLmxlbmd0aCAmJiB0YWlsQ2h1bmsuY2h1bmtzWzBdLnN0b3AgPT0gbnVsbCkge1xyXG4gICAgICAgICAgZmlyc3RUYWlsQ2h1bmsgPSB0YWlsQ2h1bmsuY2h1bmtzLnNoaWZ0KCk7XHJcbiAgICAgICAgICBmaXJzdFRhaWxDaHVuay5mcm9tICs9IHRhaWxDaHVuay5mcm9tO1xyXG4gICAgICAgICAgdGhpcy5leHRlbmQoZmlyc3RUYWlsQ2h1bmspO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgdGFpbCBjaHVuayBzdGlsbCBoYXMgdmFsdWVcclxuICAgICAgaWYgKHRhaWxDaHVuay50b1N0cmluZygpKSB7XHJcbiAgICAgICAgLy8gaWYgY2h1bmtzIGNvbnRhaW5zIHN0b3BzLCB0aGVuIHBvcHVwIHN0b3AgdG8gY29udGFpbmVyXHJcbiAgICAgICAgdGFpbENodW5rLnN0b3AgPSB0YWlsQ2h1bmsuYmxvY2tJbmRleDtcclxuICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGVuZFRvIChtYXNrZWQ6IEFwcGVuZFRhaWwpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGlmICghKG1hc2tlZCBpbnN0YW5jZW9mIGcuSU1hc2suTWFza2VkUGF0dGVybikpIHtcclxuICAgICAgY29uc3QgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy50b1N0cmluZygpKTtcclxuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8obWFza2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBjaT0wOyBjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCAmJiAhZGV0YWlscy5za2lwOyArK2NpKSB7XHJcbiAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xyXG5cclxuICAgICAgY29uc3QgbGFzdEJsb2NrSXRlciA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhtYXNrZWQudmFsdWUubGVuZ3RoKTtcclxuICAgICAgY29uc3Qgc3RvcCA9IGNodW5rLnN0b3A7XHJcbiAgICAgIGxldCBjaHVua0Jsb2NrO1xyXG4gICAgICBpZiAoc3RvcCAmJlxyXG4gICAgICAgIC8vIGlmIGJsb2NrIG5vdCBmb3VuZCBvciBzdG9wIGlzIGJlaGluZCBsYXN0QmxvY2tcclxuICAgICAgICAoIWxhc3RCbG9ja0l0ZXIgfHwgbGFzdEJsb2NrSXRlci5pbmRleCA8PSBzdG9wKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzIHx8XHJcbiAgICAgICAgICAvLyBmb3IgY29udGludW91cyBibG9jayBhbHNvIGNoZWNrIGlmIHN0b3AgaXMgZXhpc3RcclxuICAgICAgICAgIG1hc2tlZC5fc3RvcHMuaW5kZXhPZihzdG9wKSA+PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKHN0b3ApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2h1bmtCbG9jayA9IGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgJiYgbWFza2VkLl9ibG9ja3Nbc3RvcF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaHVua0Jsb2NrKSB7XHJcbiAgICAgICAgY29uc3QgdGFpbERldGFpbHMgPSBjaHVua0Jsb2NrLmFwcGVuZFRhaWwoY2h1bmspO1xyXG4gICAgICAgIHRhaWxEZXRhaWxzLnNraXAgPSBmYWxzZTsgLy8gYWx3YXlzIGlnbm9yZSBza2lwLCBpdCB3aWxsIGJlIHNldCBvbiBsYXN0XHJcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGFpbERldGFpbHMpO1xyXG4gICAgICAgIG1hc2tlZC5fdmFsdWUgKz0gdGFpbERldGFpbHMuaW5zZXJ0ZWQ7XHJcblxyXG4gICAgICAgIC8vIGdldCBub3QgaW5zZXJ0ZWQgY2hhcnNcclxuICAgICAgICBjb25zdCByZW1haW5DaGFycyA9IGNodW5rLnRvU3RyaW5nKCkuc2xpY2UodGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoKTtcclxuICAgICAgICBpZiAocmVtYWluQ2hhcnMpIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQocmVtYWluQ2hhcnMsIHsgdGFpbDogdHJ1ZSB9KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChjaHVuay50b1N0cmluZygpLCB7IHRhaWw6IHRydWUgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXRlICgpOiBDaHVua3NUYWlsU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2h1bmtzOiB0aGlzLmNodW5rcy5tYXAoYyA9PiBjLnN0YXRlKSxcclxuICAgICAgZnJvbTogdGhpcy5mcm9tLFxyXG4gICAgICBzdG9wOiB0aGlzLnN0b3AsXHJcbiAgICAgIGJsb2NrSW5kZXg6IHRoaXMuYmxvY2tJbmRleCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXQgc3RhdGUgKHN0YXRlOiBDaHVua3NUYWlsU3RhdGUpIHtcclxuICAgIGNvbnN0IHsgY2h1bmtzLCAuLi5wcm9wcyB9ID0gc3RhdGU7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3BzKTtcclxuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzLm1hcChjc3RhdGUgPT4ge1xyXG4gICAgICBjb25zdCBjaHVuayA9IFwiY2h1bmtzXCIgaW4gY3N0YXRlID9cclxuICAgICAgICBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6XHJcbiAgICAgICAgbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygpO1xyXG4gICAgICAvLyAkRmxvd0ZpeE1lIGFscmVhZHkgY2hlY2tlZCBhYm92ZVxyXG4gICAgICBjaHVuay5zdGF0ZSA9IGNzdGF0ZTtcclxuICAgICAgcmV0dXJuIGNodW5rO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaGlmdEJlZm9yZSAocG9zOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMuY2h1bmtzLmxlbmd0aCkgcmV0dXJuICcnO1xyXG5cclxuICAgIGNvbnN0IGNodW5rU2hpZnRQb3MgPSBwb3MgLSB0aGlzLmZyb207XHJcbiAgICBsZXQgY2k9MDtcclxuICAgIHdoaWxlIChjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcclxuICAgICAgY29uc3Qgc2hpZnRDaGFyID0gY2h1bmsuc2hpZnRCZWZvcmUoY2h1bmtTaGlmdFBvcyk7XHJcblxyXG4gICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xyXG4gICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXHJcbiAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcclxuICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XHJcbiAgICAgICAgKytjaTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcclxuICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2hpZnRDaGFyKSByZXR1cm4gc2hpZnRDaGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IHtESVJFQ1RJT04sIHR5cGUgRGlyZWN0aW9uLCBmb3JjZURpcmVjdGlvbn0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XHJcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgTWFza2VkLCB7dHlwZSBBcHBlbmRGbGFncywgdHlwZSBFeHRyYWN0RmxhZ3MsIHR5cGUgTWFza2VkT3B0aW9ucywgdHlwZSBNYXNrZWRTdGF0ZX0gZnJvbSAnLi9iYXNlLmpzJztcclxuaW1wb3J0IFBhdHRlcm5JbnB1dERlZmluaXRpb24sIHtERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TLCB0eXBlIERlZmluaXRpb25zfSBmcm9tICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XHJcbmltcG9ydCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIGZyb20gJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcclxuaW1wb3J0IHsgdHlwZSBUYWlsRGV0YWlscyB9IGZyb20gJy4uL2NvcmUvdGFpbC1kZXRhaWxzLmpzJztcclxuaW1wb3J0IENodW5rc1RhaWxEZXRhaWxzIGZyb20gJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xyXG5pbXBvcnQge3R5cGUgUGF0dGVybkJsb2NrfSBmcm9tICcuL3BhdHRlcm4vYmxvY2suanMnO1xyXG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xyXG5cclxuXHJcbnR5cGUgTWFza2VkUGF0dGVybk9wdGlvbnMgPSB7XHJcbiAgLi4uTWFza2VkT3B0aW9uczxzdHJpbmc+LFxyXG4gIGRlZmluaXRpb25zPzogJFByb3BlcnR5VHlwZTxNYXNrZWRQYXR0ZXJuLCAnZGVmaW5pdGlvbnMnPixcclxuICBibG9ja3M/OiAkUHJvcGVydHlUeXBlPE1hc2tlZFBhdHRlcm4sICdibG9ja3MnPixcclxuICBwbGFjZWhvbGRlckNoYXI/OiAkUHJvcGVydHlUeXBlPE1hc2tlZFBhdHRlcm4sICdwbGFjZWhvbGRlckNoYXInPixcclxuICBsYXp5PzogJFByb3BlcnR5VHlwZTxNYXNrZWRQYXR0ZXJuLCAnbGF6eSc+LFxyXG59O1xyXG5cclxudHlwZSBNYXNrZWRQYXR0ZXJuU3RhdGUgPSB7fFxyXG4gIC4uLk1hc2tlZFN0YXRlLFxyXG4gIF9ibG9ja3M6IEFycmF5PCo+LFxyXG58fTtcclxuXHJcbnR5cGUgQmxvY2tQb3NEYXRhID0ge1xyXG4gIGluZGV4OiBudW1iZXIsXHJcbiAgb2Zmc2V0OiBudW1iZXIsXHJcbn07XHJcblxyXG4vKipcclxuICBQYXR0ZXJuIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmJsb2Nrc1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRlZmluaXRpb25zXHJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucGxhY2Vob2xkZXJDaGFyXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLmxhenlcclxuKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgTWFza2VkUGF0dGVybiBleHRlbmRzIE1hc2tlZDxzdHJpbmc+IHtcclxuICBzdGF0aWMgREVGQVVMVFM6IGFueTtcclxuICBzdGF0aWMgU1RPUF9DSEFSOiBzdHJpbmc7XHJcbiAgc3RhdGljIEVTQ0FQRV9DSEFSOiBzdHJpbmc7XHJcbiAgc3RhdGljIElucHV0RGVmaW5pdGlvbjogQ2xhc3M8UGF0dGVybklucHV0RGVmaW5pdGlvbj47XHJcbiAgc3RhdGljIEZpeGVkRGVmaW5pdGlvbjogQ2xhc3M8UGF0dGVybkZpeGVkRGVmaW5pdGlvbj47XHJcblxyXG4gIC8qKiAqL1xyXG4gIGJsb2Nrczoge1tzdHJpbmddOiBNYXNrZWQ8Kj59O1xyXG4gIC8qKiAqL1xyXG4gIGRlZmluaXRpb25zOiBEZWZpbml0aW9ucztcclxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGVtcHR5IGlucHV0ICovXHJcbiAgcGxhY2Vob2xkZXJDaGFyOiBzdHJpbmc7XHJcbiAgLyoqIFNob3cgcGxhY2Vob2xkZXIgb25seSB3aGVuIG5lZWRlZCAqL1xyXG4gIGxhenk6IGJvb2xlYW47XHJcbiAgX2Jsb2NrczogQXJyYXk8UGF0dGVybkJsb2NrPjtcclxuICBfbWFza2VkQmxvY2tzOiB7W3N0cmluZ106IEFycmF5PG51bWJlcj59O1xyXG4gIF9zdG9wczogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IgKG9wdHM6IGFueT17fSkgeyAgLy8gVE9ETyB0eXBlICRTaGFwZTxNYXNrZWRQYXR0ZXJuT3B0aW9ucz49e30gZG9lcyBub3Qgd29ya1xyXG4gICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMsIG9wdHMuZGVmaW5pdGlvbnMpO1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICAuLi5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTLFxyXG4gICAgICAuLi5vcHRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXHJcbiAgX3VwZGF0ZSAob3B0czogJFNoYXBlPE1hc2tlZFBhdHRlcm5PcHRpb25zPj17fSkge1xyXG4gICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xyXG4gICAgc3VwZXIuX3VwZGF0ZShvcHRzKTtcclxuICAgIHRoaXMuX3JlYnVpbGRNYXNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfcmVidWlsZE1hc2sgKCkge1xyXG4gICAgY29uc3QgZGVmcyA9IHRoaXMuZGVmaW5pdGlvbnM7XHJcbiAgICB0aGlzLl9ibG9ja3MgPSBbXTtcclxuICAgIHRoaXMuX3N0b3BzID0gW107XHJcbiAgICB0aGlzLl9tYXNrZWRCbG9ja3MgPSB7fTtcclxuXHJcbiAgICBsZXQgcGF0dGVybiA9IHRoaXMubWFzaztcclxuICAgIGlmICghcGF0dGVybiB8fCAhZGVmcykgcmV0dXJuO1xyXG5cclxuICAgIGxldCB1bm1hc2tpbmdCbG9jayA9IGZhbHNlO1xyXG4gICAgbGV0IG9wdGlvbmFsQmxvY2sgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8cGF0dGVybi5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAodGhpcy5ibG9ja3MpIHtcclxuICAgICAgICBjb25zdCBwID0gcGF0dGVybi5zbGljZShpKTtcclxuICAgICAgICBjb25zdCBiTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykuZmlsdGVyKGJOYW1lID0+IHAuaW5kZXhPZihiTmFtZSkgPT09IDApO1xyXG4gICAgICAgIC8vIG9yZGVyIGJ5IGtleSBsZW5ndGhcclxuICAgICAgICBiTmFtZXMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gdXNlIGJsb2NrIG5hbWUgd2l0aCBtYXggbGVuZ3RoXHJcbiAgICAgICAgY29uc3QgYk5hbWUgPSBiTmFtZXNbMF07XHJcbiAgICAgICAgaWYgKGJOYW1lKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXNrZWRCbG9jayA9IGNyZWF0ZU1hc2soe1xyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXHJcbiAgICAgICAgICAgIGxhenk6IHRoaXMubGF6eSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcclxuICAgICAgICAgICAgLi4udGhpcy5ibG9ja3NbYk5hbWVdXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAobWFza2VkQmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2gobWFza2VkQmxvY2spO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmUgYmxvY2sgaW5kZXhcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdKSB0aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0ucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaSArPSBiTmFtZS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY2hhciA9IHBhdHRlcm5baV07XHJcbiAgICAgIGxldCBpc0lucHV0ID0gY2hhciBpbiBkZWZzO1xyXG5cclxuICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcHMucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcclxuICAgICAgICB1bm1hc2tpbmdCbG9jayA9ICF1bm1hc2tpbmdCbG9jaztcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoYXIgPT09ICdbJyB8fCBjaGFyID09PSAnXScpIHtcclxuICAgICAgICBvcHRpb25hbEJsb2NrID0gIW9wdGlvbmFsQmxvY2s7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSKSB7XHJcbiAgICAgICAgKytpO1xyXG4gICAgICAgIGNoYXIgPSBwYXR0ZXJuW2ldO1xyXG4gICAgICAgIGlmICghY2hhcikgYnJlYWs7XHJcbiAgICAgICAgaXNJbnB1dCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkZWYgPSBpc0lucHV0ID9cclxuICAgICAgICBuZXcgUGF0dGVybklucHV0RGVmaW5pdGlvbih7XHJcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXHJcbiAgICAgICAgICBsYXp5OiB0aGlzLmxhenksXHJcbiAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IHRoaXMucGxhY2Vob2xkZXJDaGFyLFxyXG4gICAgICAgICAgbWFzazogZGVmc1tjaGFyXSxcclxuICAgICAgICAgIGlzT3B0aW9uYWw6IG9wdGlvbmFsQmxvY2ssXHJcbiAgICAgICAgfSkgOlxyXG4gICAgICAgIG5ldyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKHtcclxuICAgICAgICAgIGNoYXIsXHJcbiAgICAgICAgICBpc1VubWFza2luZzogdW5tYXNraW5nQmxvY2ssXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9ibG9ja3MucHVzaChkZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCBzdGF0ZSAoKTogTWFza2VkUGF0dGVyblN0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLnN0YXRlLFxyXG4gICAgICBfYmxvY2tzOiB0aGlzLl9ibG9ja3MubWFwKGIgPT4gYi5zdGF0ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXRlIChzdGF0ZTogTWFza2VkUGF0dGVyblN0YXRlKSB7XHJcbiAgICBjb25zdCB7X2Jsb2NrcywgLi4ubWFza2VkU3RhdGV9ID0gc3RhdGU7XHJcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaCgoYiwgYmkpID0+IGIuc3RhdGUgPSBfYmxvY2tzW2JpXSk7XHJcbiAgICBzdXBlci5zdGF0ZSA9IG1hc2tlZFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF9zdG9yZUJlZm9yZVRhaWxTdGF0ZSAoKSB7XHJcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChiID0+IHtcclxuICAgICAgLy8gJEZsb3dGaXhNZSBfc3RvcmVCZWZvcmVUYWlsU3RhdGUgaXMgbm90IGV4aXN0IGluIFBhdHRlcm5CbG9ja1xyXG4gICAgICBpZiAodHlwZW9mIGIuX3N0b3JlQmVmb3JlVGFpbFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgYi5fc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzdXBlci5fc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBfcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSAoKSB7XHJcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChiID0+IHtcclxuICAgICAgLy8gJEZsb3dGaXhNZSBfcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSBpcyBub3QgZXhpc3QgaW4gUGF0dGVybkJsb2NrXHJcbiAgICAgIGlmICh0eXBlb2YgYi5fcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGIuX3Jlc3RvcmVCZWZvcmVUYWlsU3RhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzdXBlci5fcmVzdG9yZUJlZm9yZVRhaWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF9yZXNldEJlZm9yZVRhaWxTdGF0ZSAoKSB7XHJcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChiID0+IHtcclxuICAgICAgLy8gJEZsb3dGaXhNZSBfcmVzZXRCZWZvcmVUYWlsU3RhdGUgaXMgbm90IGV4aXN0IGluIFBhdHRlcm5CbG9ja1xyXG4gICAgICBpZiAodHlwZW9mIGIuX3Jlc2V0QmVmb3JlVGFpbFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgYi5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzdXBlci5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICByZXNldCAoKSB7XHJcbiAgICBzdXBlci5yZXNldCgpO1xyXG4gICAgdGhpcy5fYmxvY2tzLmZvckVhY2goYiA9PiBiLnJlc2V0KCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCBpc0NvbXBsZXRlICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoYiA9PiBiLmlzQ29tcGxldGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvQ29tbWl0ICgpIHtcclxuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGIgPT4gYi5kb0NvbW1pdCgpKTtcclxuICAgIHN1cGVyLmRvQ29tbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHVubWFza2VkVmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZSgoc3RyLCBiKSA9PiBzdHIgKz0gYi51bm1hc2tlZFZhbHVlLCAnJyk7XHJcbiAgfVxyXG5cclxuICBzZXQgdW5tYXNrZWRWYWx1ZSAodW5tYXNrZWRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlci51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgdmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICAvLyBUT0RPIHJldHVybiBfdmFsdWUgd2hlbiBub3QgaW4gY2hhbmdlP1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoKHN0ciwgYikgPT4gc3RyICs9IGIudmFsdWUsICcnKTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSAodmFsdWU6IHN0cmluZykge1xyXG4gICAgc3VwZXIudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBhcHBlbmRUYWlsICh0YWlsOiBzdHJpbmcgfCBUYWlsRGV0YWlscyk6IENoYW5nZURldGFpbHMge1xyXG4gICAgcmV0dXJuIHN1cGVyLmFwcGVuZFRhaWwodGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF9hcHBlbmRDaGFyUmF3IChjaDogc3RyaW5nLCBmbGFnczogQXBwZW5kRmxhZ3M9e30pOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IGJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcbiAgICBpZiAoIWJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XHJcblxyXG4gICAgZm9yIChsZXQgYmk9YmxvY2tJdGVyLmluZGV4OyA7ICsrYmkpIHtcclxuICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG4gICAgICBpZiAoIWJsb2NrKSBicmVhaztcclxuXHJcbiAgICAgIGNvbnN0IGJsb2NrRGV0YWlscyA9IGJsb2NrLl9hcHBlbmRDaGFyKGNoLCBmbGFncyk7XHJcblxyXG4gICAgICBjb25zdCBza2lwID0gYmxvY2tEZXRhaWxzLnNraXA7XHJcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJsb2NrRGV0YWlscyk7XHJcblxyXG4gICAgICBpZiAoc2tpcCB8fCBibG9ja0RldGFpbHMucmF3SW5zZXJ0ZWQpIGJyZWFrOyAvLyBnbyBuZXh0IGNoYXJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBleHRyYWN0VGFpbCAoZnJvbVBvcz86IG51bWJlcj0wLCB0b1Bvcz86IG51bWJlcj10aGlzLnZhbHVlLmxlbmd0aCk6IENodW5rc1RhaWxEZXRhaWxzIHtcclxuICAgIGNvbnN0IGNodW5rVGFpbCA9IG5ldyBDaHVua3NUYWlsRGV0YWlscygpO1xyXG4gICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gY2h1bmtUYWlsO1xyXG5cclxuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCAoYiwgYmksIGJGcm9tUG9zLCBiVG9Qb3MpID0+IHtcclxuICAgICAgY29uc3QgYmxvY2tDaHVuayA9IGIuZXh0cmFjdFRhaWwoYkZyb21Qb3MsIGJUb1Bvcyk7XHJcbiAgICAgIGJsb2NrQ2h1bmsuc3RvcCA9IHRoaXMuX2ZpbmRTdG9wQmVmb3JlKGJpKTtcclxuICAgICAgYmxvY2tDaHVuay5mcm9tID0gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSk7XHJcbiAgICAgIGlmIChibG9ja0NodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIGJsb2NrQ2h1bmsuYmxvY2tJbmRleCA9IGJpO1xyXG5cclxuICAgICAgY2h1bmtUYWlsLmV4dGVuZChibG9ja0NodW5rKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaHVua1RhaWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZXh0cmFjdElucHV0IChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoLCBmbGFnczogRXh0cmFjdEZsYWdzPXt9KTogc3RyaW5nIHtcclxuICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuICcnO1xyXG5cclxuICAgIGxldCBpbnB1dCA9ICcnO1xyXG5cclxuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCAoYiwgXywgZnJvbVBvcywgdG9Qb3MpID0+IHtcclxuICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIF9maW5kU3RvcEJlZm9yZSAoYmxvY2tJbmRleDogbnVtYmVyKTogP251bWJlciB7XHJcbiAgICBsZXQgc3RvcEJlZm9yZTtcclxuICAgIGZvciAobGV0IHNpPTA7IHNpPHRoaXMuX3N0b3BzLmxlbmd0aDsgKytzaSkge1xyXG4gICAgICBjb25zdCBzdG9wID0gdGhpcy5fc3RvcHNbc2ldO1xyXG4gICAgICBpZiAoc3RvcCA8PSBibG9ja0luZGV4KSBzdG9wQmVmb3JlID0gc3RvcDtcclxuICAgICAgZWxzZSBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBzdG9wQmVmb3JlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFwcGVuZHMgcGxhY2Vob2xkZXIgZGVwZW5kaW5nIG9uIGxhemluZXNzICovXHJcbiAgX2FwcGVuZFBsYWNlaG9sZGVyICh0b0Jsb2NrSW5kZXg6ID9udW1iZXIpOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG4gICAgaWYgKHRoaXMubGF6eSAmJiB0b0Jsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRCbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcclxuICAgIGlmICghc3RhcnRCbG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0QmxvY2tJbmRleCA9IHN0YXJ0QmxvY2tJdGVyLmluZGV4O1xyXG4gICAgY29uc3QgZW5kQmxvY2tJbmRleCA9IHRvQmxvY2tJbmRleCAhPSBudWxsID8gdG9CbG9ja0luZGV4IDogdGhpcy5fYmxvY2tzLmxlbmd0aDtcclxuXHJcbiAgICB0aGlzLl9ibG9ja3Muc2xpY2Uoc3RhcnRCbG9ja0luZGV4LCBlbmRCbG9ja0luZGV4KVxyXG4gICAgICAuZm9yRWFjaChiID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGIuX2FwcGVuZFBsYWNlaG9sZGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIGBfYmxvY2tzYCBtYXkgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgIGNvbnN0IGFyZ3MgPSBiLl9ibG9ja3MgIT0gbnVsbCA/IFtiLl9ibG9ja3MubGVuZ3RoXSA6IFtdO1xyXG4gICAgICAgICAgY29uc3QgYkRldGFpbHMgPSBiLl9hcHBlbmRQbGFjZWhvbGRlci5hcHBseShiLCBhcmdzKTtcclxuICAgICAgICAgIHRoaXMuX3ZhbHVlICs9IGJEZXRhaWxzLmluc2VydGVkO1xyXG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYkRldGFpbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRldGFpbHM7XHJcbiAgfVxyXG5cclxuICAvKiogRmluZHMgYmxvY2sgaW4gcG9zICovXHJcbiAgX21hcFBvc1RvQmxvY2sgKHBvczogbnVtYmVyKTogP0Jsb2NrUG9zRGF0YSB7XHJcbiAgICBsZXQgYWNjVmFsID0gJyc7XHJcbiAgICBmb3IgKGxldCBiaT0wOyBiaTx0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcclxuICAgICAgY29uc3QgYmxvY2tTdGFydFBvcyA9IGFjY1ZhbC5sZW5ndGg7XHJcblxyXG4gICAgICBhY2NWYWwgKz0gYmxvY2sudmFsdWU7XHJcblxyXG4gICAgICBpZiAocG9zIDw9IGFjY1ZhbC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5kZXg6IGJpLFxyXG4gICAgICAgICAgb2Zmc2V0OiBwb3MgLSBibG9ja1N0YXJ0UG9zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIF9ibG9ja1N0YXJ0UG9zIChibG9ja0luZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrc1xyXG4gICAgICAuc2xpY2UoMCwgYmxvY2tJbmRleClcclxuICAgICAgLnJlZHVjZSgocG9zLCBiKSA9PiBwb3MgKz0gYi52YWx1ZS5sZW5ndGgsIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX2ZvckVhY2hCbG9ja3NJblJhbmdlIChmcm9tUG9zOiBudW1iZXIsIHRvUG9zOiBudW1iZXI9dGhpcy52YWx1ZS5sZW5ndGgsIGZuOiAoYmxvY2s6IFBhdHRlcm5CbG9jaywgYmxvY2tJbmRleDogbnVtYmVyLCBmcm9tUG9zOiBudW1iZXIsIHRvUG9zOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIGNvbnN0IGZyb21CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGZyb21Qb3MpO1xyXG5cclxuICAgIGlmIChmcm9tQmxvY2tJdGVyKSB7XHJcbiAgICAgIGNvbnN0IHRvQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0b1Bvcyk7XHJcbiAgICAgIC8vIHByb2Nlc3MgZmlyc3QgYmxvY2tcclxuICAgICAgY29uc3QgaXNTYW1lQmxvY2sgPSB0b0Jsb2NrSXRlciAmJiBmcm9tQmxvY2tJdGVyLmluZGV4ID09PSB0b0Jsb2NrSXRlci5pbmRleDtcclxuICAgICAgY29uc3QgZnJvbUJsb2NrU3RhcnRQb3MgPSBmcm9tQmxvY2tJdGVyLm9mZnNldDtcclxuICAgICAgY29uc3QgZnJvbUJsb2NrRW5kUG9zID0gdG9CbG9ja0l0ZXIgJiYgaXNTYW1lQmxvY2sgP1xyXG4gICAgICAgIHRvQmxvY2tJdGVyLm9mZnNldCA6XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLnZhbHVlLmxlbmd0aDtcclxuICAgICAgZm4odGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLCBmcm9tQmxvY2tJdGVyLmluZGV4LCBmcm9tQmxvY2tTdGFydFBvcywgZnJvbUJsb2NrRW5kUG9zKTtcclxuXHJcbiAgICAgIGlmICh0b0Jsb2NrSXRlciAmJiAhaXNTYW1lQmxvY2spIHtcclxuICAgICAgICAvLyBwcm9jZXNzIGludGVybWVkaWF0ZSBibG9ja3NcclxuICAgICAgICBmb3IgKGxldCBiaT1mcm9tQmxvY2tJdGVyLmluZGV4KzE7IGJpPHRvQmxvY2tJdGVyLmluZGV4OyArK2JpKSB7XHJcbiAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbYmldLCBiaSwgMCwgdGhpcy5fYmxvY2tzW2JpXS52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHJvY2VzcyBsYXN0IGJsb2NrXHJcbiAgICAgICAgZm4odGhpcy5fYmxvY2tzW3RvQmxvY2tJdGVyLmluZGV4XSwgdG9CbG9ja0l0ZXIuaW5kZXgsIDAsIHRvQmxvY2tJdGVyLm9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICByZW1vdmUgKGZyb21Qb3M6IG51bWJlcj0wLCB0b1BvczogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBjb25zdCByZW1vdmVEZXRhaWxzID0gc3VwZXIucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcclxuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCAoYiwgXywgYkZyb21Qb3MsIGJUb1BvcykgPT4ge1xyXG4gICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW1vdmVEZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIG5lYXJlc3RJbnB1dFBvcyAoY3Vyc29yUG9zOiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uPURJUkVDVElPTi5OT05FKTogbnVtYmVyIHtcclxuICAgIC8vIFRPRE8gcmVmYWN0b3IgLSBleHRyYWN0IGFsaWduYmxvY2tcclxuXHJcbiAgICBjb25zdCBiZWdpbkJsb2NrRGF0YSA9IHRoaXMuX21hcFBvc1RvQmxvY2soY3Vyc29yUG9zKSB8fCB7aW5kZXg6IDAsIG9mZnNldDogMH07XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG9mZnNldDogYmVnaW5CbG9ja09mZnNldCxcclxuICAgICAgaW5kZXg6IGJlZ2luQmxvY2tJbmRleCxcclxuICAgIH0gPSBiZWdpbkJsb2NrRGF0YTtcclxuICAgIGNvbnN0IGJlZ2luQmxvY2sgPSB0aGlzLl9ibG9ja3NbYmVnaW5CbG9ja0luZGV4XTtcclxuXHJcbiAgICBpZiAoIWJlZ2luQmxvY2spIHJldHVybiBjdXJzb3JQb3M7XHJcblxyXG4gICAgbGV0IGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrT2Zmc2V0O1xyXG4gICAgLy8gaWYgcG9zaXRpb24gaW5zaWRlIGJsb2NrIC0gdHJ5IHRvIGFkanVzdCBpdFxyXG4gICAgaWYgKGJlZ2luQmxvY2tDdXJzb3JQb3MgIT09IDAgJiYgYmVnaW5CbG9ja0N1cnNvclBvcyA8IGJlZ2luQmxvY2sudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrLm5lYXJlc3RJbnB1dFBvcyhiZWdpbkJsb2NrT2Zmc2V0LCBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJzb3JBdFJpZ2h0ID0gYmVnaW5CbG9ja0N1cnNvclBvcyA9PT0gYmVnaW5CbG9jay52YWx1ZS5sZW5ndGg7XHJcbiAgICBjb25zdCBjdXJzb3JBdExlZnQgPSBiZWdpbkJsb2NrQ3Vyc29yUG9zID09PSAwO1xyXG5cclxuICAgIC8vICBjdXJzb3IgaXMgSU5TSURFIGZpcnN0IGJsb2NrIChub3QgYXQgYm91bmRzKVxyXG4gICAgaWYgKCFjdXJzb3JBdExlZnQgJiYgIWN1cnNvckF0UmlnaHQpIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJlZ2luQmxvY2tJbmRleCkgKyBiZWdpbkJsb2NrQ3Vyc29yUG9zO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEJsb2NrSW5kZXggPSBjdXJzb3JBdFJpZ2h0ID8gYmVnaW5CbG9ja0luZGV4ICsgMSA6IGJlZ2luQmxvY2tJbmRleDtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTk9ORSkge1xyXG4gICAgICAvLyBOT05FIGRpcmVjdGlvbiB1c2VkIHRvIGNhbGN1bGF0ZSBzdGFydCBpbnB1dCBwb3NpdGlvbiBpZiBubyBjaGFycyB3ZXJlIHJlbW92ZWRcclxuICAgICAgLy8gRk9SIE5PTkU6XHJcbiAgICAgIC8vIC1cclxuICAgICAgLy8gaW5wdXR8YW55XHJcbiAgICAgIC8vIC0+XHJcbiAgICAgIC8vICBhbnl8aW5wdXRcclxuICAgICAgLy8gPC1cclxuICAgICAgLy8gIGZpbGxlZC1pbnB1dHxhbnlcclxuXHJcbiAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IGxlZnQgaXMgaW5wdXRcclxuICAgICAgaWYgKHNlYXJjaEJsb2NrSW5kZXggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tJbmRleEF0TGVmdCA9IHNlYXJjaEJsb2NrSW5kZXgtMTtcclxuICAgICAgICBjb25zdCBibG9ja0F0TGVmdCA9IHRoaXMuX2Jsb2Nrc1tibG9ja0luZGV4QXRMZWZ0XTtcclxuICAgICAgICBjb25zdCBibG9ja0lucHV0UG9zID0gYmxvY2tBdExlZnQubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcclxuICAgICAgICAvLyBpcyBpbnB1dFxyXG4gICAgICAgIGlmICghYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoIHx8IGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRMZWZ0LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3Moc2VhcmNoQmxvY2tJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAtPlxyXG4gICAgICBsZXQgZmlyc3RJbnB1dEF0UmlnaHQgPSBzZWFyY2hCbG9ja0luZGV4O1xyXG4gICAgICBmb3IgKGxldCBiaT1maXJzdElucHV0QXRSaWdodDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XHJcbiAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSW5wdXRQb3MgPSBibG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xyXG4gICAgICAgIGlmIChibG9ja0lucHV0UG9zICE9PSBibG9jay52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKSArIGJsb2NrSW5wdXRQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xyXG4gICAgICAvLyAtXHJcbiAgICAgIC8vICBhbnl8ZmlsbGVkLWlucHV0XHJcbiAgICAgIC8vIDwtXHJcbiAgICAgIC8vICBhbnl8Zmlyc3Qgbm90IGVtcHR5IGlzIG5vdC1sZW4tYWxpZ25lZFxyXG4gICAgICAvLyAgbm90LTAtYWxpZ25lZHxhbnlcclxuICAgICAgLy8gLT5cclxuICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgb3IgZW5kXHJcblxyXG4gICAgICAvLyBjaGVjayBpZiBmaXJzdCBibG9jayBhdCByaWdodCBpcyBmaWxsZWQgaW5wdXRcclxuICAgICAgbGV0IGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQ7XHJcbiAgICAgIGZvciAobGV0IGJpPXNlYXJjaEJsb2NrSW5kZXg7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ibG9ja3NbYmldLnZhbHVlKSB7XHJcbiAgICAgICAgICBmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0ID0gYmk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGZpbGxlZEJsb2NrID0gdGhpcy5fYmxvY2tzW2ZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHRdO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSW5wdXRQb3MgPSBmaWxsZWRCbG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLlJJR0hUKTtcclxuICAgICAgICBpZiAoYmxvY2tJbnB1dFBvcyA9PT0gMCAmJiBmaWxsZWRCbG9jay51bm1hc2tlZFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgLy8gZmlsbGVkIGJsb2NrIGlzIGlucHV0XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0KSArIGJsb2NrSW5wdXRQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA8LVxyXG4gICAgICAvLyBmaW5kIHRoaXMgdmFyc1xyXG4gICAgICBsZXQgZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPSAtMTtcclxuICAgICAgbGV0IGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXg7ICAvLyBUT0RPIGNvbnNpZGVyIG5lc3RlZCBlbXB0eSBpbnB1dHNcclxuICAgICAgZm9yIChsZXQgYmk9c2VhcmNoQmxvY2tJbmRleC0xOyBiaSA+PSAwOyAtLWJpKSB7XHJcbiAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSW5wdXRQb3MgPSBibG9jay5uZWFyZXN0SW5wdXRQb3MoYmxvY2sudmFsdWUubGVuZ3RoLCBESVJFQ1RJT04uRk9SQ0VfTEVGVCk7XHJcbiAgICAgICAgaWYgKGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggPT0gbnVsbCAmJiAoIWJsb2NrLnZhbHVlIHx8IGJsb2NrSW5wdXRQb3MgIT09IDApKSB7XHJcbiAgICAgICAgICBmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4ID0gYmk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibG9ja0lucHV0UG9zICE9PSAwKSB7XHJcbiAgICAgICAgICBpZiAoYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2sudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGFsaWduZWQgaW5zaWRlIGJsb2NrIC0gcmV0dXJuIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKSArIGJsb2NrSW5wdXRQb3M7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmb3VuZCBmaWxsZWRcclxuICAgICAgICAgICAgZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPSBiaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xyXG4gICAgICAgIC8vIHRyeSBmaW5kIGZpcnN0IGVtcHR5IGlucHV0IGJlZm9yZSBzdGFydCBzZWFyY2hpbmcgcG9zaXRpb24gb25seSB3aGVuIG5vdCBmb3JjZWRcclxuICAgICAgICBmb3IgKGxldCBiaT1maXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCsxOyBiaSA8PSBNYXRoLm1pbihzZWFyY2hCbG9ja0luZGV4LCB0aGlzLl9ibG9ja3MubGVuZ3RoLTEpOyArK2JpKSB7XHJcbiAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XHJcbiAgICAgICAgICBjb25zdCBibG9ja0lucHV0UG9zID0gYmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcclxuICAgICAgICAgIGNvbnN0IGJsb2NrQWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgYmxvY2tJbnB1dFBvcztcclxuICAgICAgICAgIC8vIGlmIGJsb2NrIGlzIGVtcHR5IGFuZCBsYXN0IG9yIG5vdCBsYXp5IGlucHV0XHJcbiAgICAgICAgICBpZiAoKCFibG9jay52YWx1ZS5sZW5ndGggJiYgYmxvY2tBbGlnbmVkUG9zID09PSB0aGlzLnZhbHVlLmxlbmd0aCB8fCBibG9ja0lucHV0UG9zICE9PSBibG9jay52YWx1ZS5sZW5ndGgpICYmIGJsb2NrQWxpZ25lZFBvcyA8PSBjdXJzb3JQb3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJsb2NrQWxpZ25lZFBvcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHByb2Nlc3Mgb3ZlcmZsb3dcclxuICAgICAgaWYgKGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID49IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCkgKyB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXhdLnZhbHVlLmxlbmd0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZm9yIGxhenkgaWYgaGFzIGFsaWduZWQgbGVmdCBpbnNpZGUgZml4ZWQgYW5kIGhhcyBjYW1lIHRvIHRoZSBzdGFydCAtIHVzZSBzdGFydCBwb3NpdGlvblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCB8fFxyXG4gICAgICAgIHRoaXMubGF6eSAmJiAhdGhpcy5leHRyYWN0SW5wdXQoKSAmJiAhaXNJbnB1dCh0aGlzLl9ibG9ja3Nbc2VhcmNoQmxvY2tJbmRleF0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZpbmQgZmlyc3QgaW5wdXRcclxuICAgICAgZm9yIChsZXQgYmk9c2VhcmNoQmxvY2tJbmRleDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XHJcbiAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSW5wdXRQb3MgPSBibG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xyXG4gICAgICAgIC8vIGlzIGlucHV0XHJcbiAgICAgICAgaWYgKCFibG9jay52YWx1ZS5sZW5ndGggfHwgYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2sudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBibG9ja0lucHV0UG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlJJR0hUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XHJcbiAgICAgIC8vIC0+XHJcbiAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkIGFuZCBmaWxsZWRcclxuICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWRcclxuICAgICAgLy8gPC1cclxuICAgICAgLy8gIG5vdC0wLWFsaWduZWQgb3Igc3RhcnR8YW55XHJcbiAgICAgIGxldCBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg6ID9udW1iZXI7XHJcbiAgICAgIGxldCBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zOiA/bnVtYmVyO1xyXG4gICAgICBmb3IgKGxldCBiaT1zZWFyY2hCbG9ja0luZGV4OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcclxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XHJcbiAgICAgICAgY29uc3QgYmxvY2tJbnB1dFBvcyA9IGJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XHJcbiAgICAgICAgaWYgKGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgYmxvY2tJbnB1dFBvcztcclxuICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCA9IGJpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ICE9IG51bGwgJiYgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYmk9Zmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcclxuICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcclxuICAgICAgICAgIGNvbnN0IGJsb2NrSW5wdXRQb3MgPSBibG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKTtcclxuICAgICAgICAgIGlmIChibG9ja0lucHV0UG9zICE9PSBibG9jay52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgYmxvY2tJbnB1dFBvcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUID9cclxuICAgICAgICAgIHRoaXMudmFsdWUubGVuZ3RoIDpcclxuICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGJpPU1hdGgubWluKHNlYXJjaEJsb2NrSW5kZXgsIHRoaXMuX2Jsb2Nrcy5sZW5ndGgtMSk7IGJpID49IDA7IC0tYmkpIHtcclxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XHJcbiAgICAgICAgY29uc3QgYmxvY2tJbnB1dFBvcyA9IGJsb2NrLm5lYXJlc3RJbnB1dFBvcyhibG9jay52YWx1ZS5sZW5ndGgsIERJUkVDVElPTi5MRUZUKTtcclxuICAgICAgICBpZiAoYmxvY2tJbnB1dFBvcyAhPT0gMCkge1xyXG4gICAgICAgICAgY29uc3QgYWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgYmxvY2tJbnB1dFBvcztcclxuICAgICAgICAgIGlmIChhbGlnbmVkUG9zID49IGN1cnNvclBvcykgcmV0dXJuIGFsaWduZWRQb3M7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3Vyc29yUG9zO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBibG9jayBieSBuYW1lICovXHJcbiAgbWFza2VkQmxvY2sgKG5hbWU6IHN0cmluZyk6ID9QYXR0ZXJuQmxvY2sge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkQmxvY2tzKG5hbWUpWzBdO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBhbGwgYmxvY2tzIGJ5IG5hbWUgKi9cclxuICBtYXNrZWRCbG9ja3MgKG5hbWU6IHN0cmluZyk6IEFycmF5PFBhdHRlcm5CbG9jaz4ge1xyXG4gICAgY29uc3QgaW5kaWNlcyA9IHRoaXMuX21hc2tlZEJsb2Nrc1tuYW1lXTtcclxuICAgIGlmICghaW5kaWNlcykgcmV0dXJuIFtdO1xyXG4gICAgcmV0dXJuIGluZGljZXMubWFwKGdpID0+IHRoaXMuX2Jsb2Nrc1tnaV0pO1xyXG4gIH1cclxufVxyXG5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTID0ge1xyXG4gIGxhenk6IHRydWUsXHJcbiAgcGxhY2Vob2xkZXJDaGFyOiAnXydcclxufTtcclxuTWFza2VkUGF0dGVybi5TVE9QX0NIQVIgPSAnYCc7XHJcbk1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIgPSAnXFxcXCc7XHJcbk1hc2tlZFBhdHRlcm4uSW5wdXREZWZpbml0aW9uID0gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcclxuTWFza2VkUGF0dGVybi5GaXhlZERlZmluaXRpb24gPSBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xyXG5cclxuZnVuY3Rpb24gaXNJbnB1dCAoYmxvY2s6IFBhdHRlcm5CbG9jayk6IGJvb2xlYW4ge1xyXG4gIGlmICghYmxvY2spIHJldHVybiBmYWxzZTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSBibG9jay52YWx1ZTtcclxuICByZXR1cm4gIXZhbHVlIHx8IGJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSkgIT09IHZhbHVlLmxlbmd0aDtcclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xyXG5pbXBvcnQgeyB0eXBlIEFwcGVuZEZsYWdzIH0gZnJvbSAnLi9iYXNlLmpzJztcclxuXHJcblxyXG4vKiogUGF0dGVybiB3aGljaCBhY2NlcHRzIHJhbmdlcyAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBNYXNrZWRSYW5nZSBleHRlbmRzIE1hc2tlZFBhdHRlcm4ge1xyXG4gIC8qKlxyXG4gICAgT3B0aW9uYWxseSBzZXRzIG1heCBsZW5ndGggb2YgcGF0dGVybi5cclxuICAgIFVzZWQgd2hlbiBwYXR0ZXJuIGxlbmd0aCBpcyBsb25nZXIgdGhlbiBgdG9gIHBhcmFtIGxlbmd0aC4gUGFkcyB6ZXJvcyBhdCBzdGFydCBpbiB0aGlzIGNhc2UuXHJcbiAgKi9cclxuICBtYXhMZW5ndGg6IG51bWJlcjtcclxuICAvKiogTWluIGJvdW5kICovXHJcbiAgZnJvbTogbnVtYmVyO1xyXG4gIC8qKiBNYXggYm91bmQgKi9cclxuICB0bzogbnVtYmVyO1xyXG4gIC8qKiAqL1xyXG4gIGF1dG9maXg6IGJvb2xlYW47XHJcblxyXG4gIGdldCBfbWF0Y2hGcm9tICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoIC0gU3RyaW5nKHRoaXMuZnJvbSkubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF91cGRhdGUgKG9wdHM6IGFueSkgeyAgLy8gVE9ETyB0eXBlXHJcbiAgICBvcHRzID0ge1xyXG4gICAgICB0bzogdGhpcy50byB8fCAwLFxyXG4gICAgICBmcm9tOiB0aGlzLmZyb20gfHwgMCxcclxuICAgICAgLi4ub3B0cyxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XHJcbiAgICBpZiAob3B0cy5tYXhMZW5ndGggIT0gbnVsbCkgbWF4TGVuZ3RoID0gTWF0aC5tYXgobWF4TGVuZ3RoLCBvcHRzLm1heExlbmd0aCk7XHJcbiAgICBvcHRzLm1heExlbmd0aCA9IG1heExlbmd0aDtcclxuXHJcbiAgICBjb25zdCBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xyXG4gICAgY29uc3QgdG9TdHIgPSBTdHJpbmcob3B0cy50bykucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xyXG4gICAgbGV0IHNhbWVDaGFyc0NvdW50ID0gMDtcclxuICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSArK3NhbWVDaGFyc0NvdW50O1xyXG4gICAgb3B0cy5tYXNrID0gdG9TdHIuc2xpY2UoMCwgc2FtZUNoYXJzQ291bnQpLnJlcGxhY2UoLzAvZywgJ1xcXFwwJykgKyAnMCcucmVwZWF0KG1heExlbmd0aCAtIHNhbWVDaGFyc0NvdW50KTtcclxuXHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCBpc0NvbXBsZXRlICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzdXBlci5pc0NvbXBsZXRlICYmIEJvb2xlYW4odGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBib3VuZGFyaWVzIChzdHI6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgbGV0IG1pbnN0ciA9ICcnO1xyXG4gICAgbGV0IG1heHN0ciA9ICcnO1xyXG5cclxuICAgIGNvbnN0IFssIHBsYWNlaG9sZGVyLCBudW1dID0gc3RyLm1hdGNoKC9eKFxcRCopKFxcZCopKFxcRCopLykgfHwgW107XHJcbiAgICBpZiAobnVtKSB7XHJcbiAgICAgIG1pbnN0ciA9ICcwJy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcclxuICAgICAgbWF4c3RyID0gJzknLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xyXG4gICAgfVxyXG4gICAgbWluc3RyID0gbWluc3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzAnKTtcclxuICAgIG1heHN0ciA9IG1heHN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICc5Jyk7XHJcblxyXG4gICAgcmV0dXJuIFttaW5zdHIsIG1heHN0cl07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9QcmVwYXJlIChzdHI6IHN0cmluZywgZmxhZ3M6IEFwcGVuZEZsYWdzPXt9KTogc3RyaW5nIHtcclxuICAgIHN0ciA9IHN1cGVyLmRvUHJlcGFyZShzdHIsIGZsYWdzKS5yZXBsYWNlKC9cXEQvZywgJycpO1xyXG4gICAgaWYgKCF0aGlzLmF1dG9maXgpIHJldHVybiBzdHI7XHJcblxyXG4gICAgY29uc3QgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xyXG4gICAgY29uc3QgdG9TdHIgPSBTdHJpbmcodGhpcy50bykucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XHJcblxyXG4gICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZTtcclxuICAgIGxldCBwcmVwU3RyID0gJyc7XHJcbiAgICBmb3IgKGxldCBjaT0wOyBjaTxzdHIubGVuZ3RoOyArK2NpKSB7XHJcbiAgICAgIGNvbnN0IG5leHRWYWwgPSB2YWwgKyBwcmVwU3RyICsgc3RyW2NpXTtcclxuICAgICAgY29uc3QgW21pbnN0ciwgbWF4c3RyXSA9IHRoaXMuYm91bmRhcmllcyhuZXh0VmFsKTtcclxuXHJcbiAgICAgIGlmIChOdW1iZXIobWF4c3RyKSA8IHRoaXMuZnJvbSkgcHJlcFN0ciArPSBmcm9tU3RyW25leHRWYWwubGVuZ3RoIC0gMV07XHJcbiAgICAgIGVsc2UgaWYgKE51bWJlcihtaW5zdHIpID4gdGhpcy50bykgcHJlcFN0ciArPSB0b1N0cltuZXh0VmFsLmxlbmd0aCAtIDFdO1xyXG4gICAgICBlbHNlIHByZXBTdHIgKz0gc3RyW2NpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJlcFN0cjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBkb1ZhbGlkYXRlICguLi5hcmdzOiAqKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzdHIgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcclxuICAgIGlmIChmaXJzdE5vblplcm8gPT09IC0xICYmIHN0ci5sZW5ndGggPD0gdGhpcy5fbWF0Y2hGcm9tKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBbbWluc3RyLCBtYXhzdHJdID0gdGhpcy5ib3VuZGFyaWVzKHN0cik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZnJvbSA8PSBOdW1iZXIobWF4c3RyKSAmJiBOdW1iZXIobWluc3RyKSA8PSB0aGlzLnRvICYmXHJcbiAgICAgIHN1cGVyLmRvVmFsaWRhdGUoLi4uYXJncyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XHJcbmltcG9ydCBNYXNrZWRSYW5nZSBmcm9tICcuL3JhbmdlLmpzJztcclxuXHJcblxyXG4vKiogRGF0ZSBtYXNrICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIE1hc2tlZERhdGUgZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuIHtcclxuICBzdGF0aWMgR0VUX0RFRkFVTFRfQkxPQ0tTOiAoKSA9PiB7W3N0cmluZ106IGFueX07XHJcbiAgc3RhdGljIERFRkFVTFRTOiBhbnk7XHJcblxyXG4gIC8qKiBQYXJzZSBzdHJpbmcgdG8gRGF0ZSAqL1xyXG4gIHBhcnNlOiAoc3RyaW5nKSA9PiBEYXRlO1xyXG4gIC8qKiBGb3JtYXQgRGF0ZSB0byBzdHJpbmcgKi9cclxuICBmb3JtYXQ6IChEYXRlKSA9PiBzdHJpbmc7XHJcbiAgLyoqIFBhdHRlcm4gbWFzayBmb3IgZGF0ZSBhY2NvcmRpbmcgdG8ge0BsaW5rIE1hc2tlZERhdGUjZm9ybWF0fSAqL1xyXG4gIHBhdHRlcm46IHN0cmluZztcclxuICAvKiogU3RhcnQgZGF0ZSAqL1xyXG4gIG1pbjogP0RhdGU7XHJcbiAgLyoqIEVuZCBkYXRlICovXHJcbiAgbWF4OiA/RGF0ZTtcclxuICAvKiogKi9cclxuICBhdXRvZml4OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvciAob3B0czogYW55KSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIC4uLk1hc2tlZERhdGUuREVGQVVMVFMsXHJcbiAgICAgIC4uLm9wdHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF91cGRhdGUgKG9wdHM6IGFueSkge1xyXG4gICAgaWYgKG9wdHMubWFzayA9PT0gRGF0ZSkgZGVsZXRlIG9wdHMubWFzaztcclxuICAgIGlmIChvcHRzLnBhdHRlcm4pIHtcclxuICAgICAgb3B0cy5tYXNrID0gb3B0cy5wYXR0ZXJuO1xyXG4gICAgICBkZWxldGUgb3B0cy5wYXR0ZXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2NrcyA9IG9wdHMuYmxvY2tzO1xyXG4gICAgb3B0cy5ibG9ja3MgPSBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUygpKTtcclxuICAgIC8vIGFkanVzdCB5ZWFyIGJsb2NrXHJcbiAgICBpZiAob3B0cy5taW4pIG9wdHMuYmxvY2tzLlkuZnJvbSA9IG9wdHMubWluLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBpZiAob3B0cy5tYXgpIG9wdHMuYmxvY2tzLlkudG8gPSBvcHRzLm1heC5nZXRGdWxsWWVhcigpO1xyXG4gICAgaWYgKG9wdHMubWluICYmIG9wdHMubWF4ICYmIG9wdHMuYmxvY2tzLlkuZnJvbSA9PT0gb3B0cy5ibG9ja3MuWS50b1xyXG4gICAgKSB7XHJcbiAgICAgIG9wdHMuYmxvY2tzLm0uZnJvbSA9IG9wdHMubWluLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICBvcHRzLmJsb2Nrcy5tLnRvID0gb3B0cy5tYXguZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgICBpZiAob3B0cy5ibG9ja3MubS5mcm9tID09PSBvcHRzLmJsb2Nrcy5tLnRvKSB7XHJcbiAgICAgICAgb3B0cy5ibG9ja3MuZC5mcm9tID0gb3B0cy5taW4uZ2V0RGF0ZSgpO1xyXG4gICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5hc3NpZ24ob3B0cy5ibG9ja3MsIGJsb2Nrcyk7XHJcblxyXG4gICAgLy8gYWRkIGF1dG9maXhcclxuICAgIE9iamVjdC5rZXlzKG9wdHMuYmxvY2tzKS5mb3JFYWNoKGJrID0+IHtcclxuICAgICAgY29uc3QgYiA9IG9wdHMuYmxvY2tzW2JrXTtcclxuICAgICAgaWYgKCEoJ2F1dG9maXgnIGluIGIpKSBiLmF1dG9maXggPSBvcHRzLmF1dG9maXg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvVmFsaWRhdGUgKC4uLmFyZ3M6ICopOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGU7XHJcblxyXG4gICAgcmV0dXJuIHN1cGVyLmRvVmFsaWRhdGUoLi4uYXJncykgJiZcclxuICAgICAgKCF0aGlzLmlzQ29tcGxldGUgfHxcclxuICAgICAgICB0aGlzLmlzRGF0ZUV4aXN0KHRoaXMudmFsdWUpICYmIGRhdGUgIT0gbnVsbCAmJlxyXG4gICAgICAgICh0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluIDw9IGRhdGUpICYmXHJcbiAgICAgICAgKHRoaXMubWF4ID09IG51bGwgfHwgZGF0ZSA8PSB0aGlzLm1heCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENoZWNrcyBpZiBkYXRlIGlzIGV4aXN0cyAqL1xyXG4gIGlzRGF0ZUV4aXN0IChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMucGFyc2Uoc3RyKSkgPT09IHN0cjtcclxuICB9XHJcblxyXG4gIC8qKiBQYXJzZWQgRGF0ZSAqL1xyXG4gIGdldCBkYXRlICgpOiA/RGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID9cclxuICAgICAgdGhpcy5wYXJzZSh0aGlzLnZhbHVlKSA6XHJcbiAgICAgIG51bGw7XHJcbiAgfVxyXG4gIHNldCBkYXRlIChkYXRlOiBEYXRlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHR5cGVkVmFsdWUgKCk6ID9EYXRlIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgfVxyXG4gIHNldCB0eXBlZFZhbHVlICh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy5kYXRlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbk1hc2tlZERhdGUuREVGQVVMVFMgPSB7XHJcbiAgcGF0dGVybjogJ2R7Ln1gbXsufWBZJyxcclxuICBmb3JtYXQ6IGRhdGUgPT4ge1xyXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXS5qb2luKCcuJyk7XHJcbiAgfSxcclxuICBwYXJzZTogc3RyID0+IHtcclxuICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHN0ci5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuICB9LFxyXG59O1xyXG5NYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUyA9ICgpID0+ICh7XHJcbiAgZDoge1xyXG4gICAgbWFzazogTWFza2VkUmFuZ2UsXHJcbiAgICBmcm9tOiAxLFxyXG4gICAgdG86IDMxLFxyXG4gICAgbWF4TGVuZ3RoOiAyLFxyXG4gIH0sXHJcbiAgbToge1xyXG4gICAgbWFzazogTWFza2VkUmFuZ2UsXHJcbiAgICBmcm9tOiAxLFxyXG4gICAgdG86IDEyLFxyXG4gICAgbWF4TGVuZ3RoOiAyLFxyXG4gIH0sXHJcbiAgWToge1xyXG4gICAgbWFzazogTWFza2VkUmFuZ2UsXHJcbiAgICBmcm9tOiAxOTAwLFxyXG4gICAgdG86IDk5OTksXHJcbiAgfVxyXG59KTtcclxuIiwiLy8gQGZsb3dcclxuXHJcbmV4cG9ydFxyXG50eXBlIEVsZW1lbnRFdmVudCA9XHJcbiAgJ3NlbGVjdGlvbkNoYW5nZScgfFxyXG4gICdpbnB1dCcgfFxyXG4gICdkcm9wJyB8XHJcbiAgJ2NsaWNrJyB8XHJcbiAgJ2ZvY3VzJyB8XHJcbiAgJ2NvbW1pdCc7XHJcblxyXG4vKipcclxuICBHZW5lcmljIGVsZW1lbnQgQVBJIHRvIHVzZSB3aXRoIG1hc2tcclxuICBAaW50ZXJmYWNlXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIE1hc2tFbGVtZW50IHtcclxuICAvKiogKi9cclxuICArX3Vuc2FmZVNlbGVjdGlvblN0YXJ0OiBudW1iZXI7XHJcbiAgLyoqICovXHJcbiAgK191bnNhZmVTZWxlY3Rpb25FbmQ6IG51bWJlcjtcclxuICAvKiogKi9cclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAvKiogU2FmZWx5IHJldHVybnMgc2VsZWN0aW9uIHN0YXJ0ICovXHJcbiAgZ2V0IHNlbGVjdGlvblN0YXJ0ICgpOiBudW1iZXIge1xyXG4gICAgbGV0IHN0YXJ0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgP1xyXG4gICAgICBzdGFydCA6XHJcbiAgICAgIHRoaXMudmFsdWUubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cclxuICBnZXQgc2VsZWN0aW9uRW5kICgpOiBudW1iZXIge1xyXG4gICAgbGV0IGVuZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGVuZCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvbkVuZDtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgcmV0dXJuIGVuZCAhPSBudWxsID9cclxuICAgICAgZW5kIDpcclxuICAgICAgdGhpcy52YWx1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKiogU2FmZWx5IHNldHMgZWxlbWVudCBzZWxlY3Rpb24gKi9cclxuICBzZWxlY3QgKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCB8fFxyXG4gICAgICBzdGFydCA9PT0gdGhpcy5zZWxlY3Rpb25TdGFydCAmJiBlbmQgPT09IHRoaXMuc2VsZWN0aW9uRW5kKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5fdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cclxuICBfdW5zYWZlU2VsZWN0IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IHZvaWQge31cclxuICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXHJcbiAgZ2V0IGlzQWN0aXZlICgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xyXG4gIGJpbmRFdmVudHMgKGhhbmRsZXJzOiB7W0VsZW1lbnRFdmVudF06IEZ1bmN0aW9ufSkge31cclxuICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXHJcbiAgdW5iaW5kRXZlbnRzICgpOiB2b2lkIHt9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IE1hc2tFbGVtZW50LCB7dHlwZSBFbGVtZW50RXZlbnR9IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcclxuXHJcblxyXG4vKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXHJcbmV4cG9ydCBkZWZhdWx0XHJcbmNsYXNzIEhUTUxNYXNrRWxlbWVudCBleHRlbmRzIE1hc2tFbGVtZW50IHtcclxuICAvKiogTWFwcGluZyBiZXR3ZWVuIEhUTUxFbGVtZW50IGV2ZW50cyBhbmQgbWFzayBpbnRlcm5hbCBldmVudHMgKi9cclxuICBzdGF0aWMgRVZFTlRTX01BUDoge1tFbGVtZW50RXZlbnRdOiBzdHJpbmd9O1xyXG4gIC8qKiBIVE1MRWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xyXG4gIGlucHV0OiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudDtcclxuICBfaGFuZGxlcnM6IHtbc3RyaW5nXTogRnVuY3Rpb259O1xyXG5cclxuICAvKipcclxuICAgIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxyXG4gICovXHJcbiAgY29uc3RydWN0b3IgKGlucHV0OiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgIHRoaXMuX2hhbmRsZXJzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIElzIGVsZW1lbnQgaW4gZm9jdXNcclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZ2V0IGlzQWN0aXZlICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgX3Vuc2FmZVNlbGVjdGlvblN0YXJ0ICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIGVuZFxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBnZXQgX3Vuc2FmZVNlbGVjdGlvbkVuZCAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb25cclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgX3Vuc2FmZVNlbGVjdCAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEhUTUxFbGVtZW50IHZhbHVlXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCB2YWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xyXG4gIH1cclxuICBzZXQgdmFsdWUgKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGJpbmRFdmVudHMgKGhhbmRsZXJzOiB7W0VsZW1lbnRFdmVudF06IEZ1bmN0aW9ufSkge1xyXG4gICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpXHJcbiAgICAgIC5mb3JFYWNoKGV2ZW50ID0+IHRoaXMuX3RvZ2dsZUV2ZW50SGFuZGxlcihIVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUFtldmVudF0sIGhhbmRsZXJzW2V2ZW50XSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBVbmJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICB1bmJpbmRFdmVudHMgKCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5faGFuZGxlcnMpXHJcbiAgICAgIC5mb3JFYWNoKGV2ZW50ID0+IHRoaXMuX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX3RvZ2dsZUV2ZW50SGFuZGxlciAoZXZlbnQ6IHN0cmluZywgaGFuZGxlcj86IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faGFuZGxlcnNbZXZlbnRdKSB7XHJcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy5faGFuZGxlcnNbZXZlbnRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMuX2hhbmRsZXJzW2V2ZW50XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5IVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUCA9IHtcclxuICBzZWxlY3Rpb25DaGFuZ2U6ICdrZXlkb3duJyxcclxuICBpbnB1dDogJ2lucHV0JyxcclxuICBkcm9wOiAnZHJvcCcsXHJcbiAgY2xpY2s6ICdjbGljaycsXHJcbiAgZm9jdXM6ICdmb2N1cycsXHJcbiAgY29tbWl0OiAnYmx1cicsXHJcbn07XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB7b2JqZWN0SW5jbHVkZXMsIERJUkVDVElPTiwgdHlwZSBTZWxlY3Rpb259IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xyXG5pbXBvcnQgQWN0aW9uRGV0YWlscyBmcm9tICcuLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcclxuaW1wb3J0IE1hc2tlZERhdGUgZnJvbSAnLi4vbWFza2VkL2RhdGUuanMnO1xyXG5pbXBvcnQgY3JlYXRlTWFzaywge21hc2tlZENsYXNzfSBmcm9tICcuLi9tYXNrZWQvZmFjdG9yeS5qcyc7XHJcbmltcG9ydCB0eXBlIE1hc2tlZCBmcm9tICcuLi9tYXNrZWQvYmFzZS5qcyc7XHJcbmltcG9ydCB7dHlwZSBNYXNrfSBmcm9tICcuLi9tYXNrZWQvYmFzZS5qcyc7XHJcbmltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL21hc2stZWxlbWVudC5qcyc7XHJcbmltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XHJcblxyXG5cclxuLyoqIExpc3RlbnMgdG8gZWxlbWVudCBldmVudHMgYW5kIGNvbnRyb2xzIGNoYW5nZXMgYmV0d2VlbiBlbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBJbnB1dE1hc2sge1xyXG4gIC8qKlxyXG4gICAgVmlldyBlbGVtZW50XHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xyXG4gIGVsOiBNYXNrRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICBJbnRlcm5hbCB7QGxpbmsgTWFza2VkfSBtb2RlbFxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBtYXNrZWQ6IE1hc2tlZDwqPjtcclxuICBhbGlnbkN1cnNvcjogKCkgPT4gdm9pZDtcclxuICBhbGlnbkN1cnNvckZyaWVuZGx5OiAoKSA9PiB2b2lkO1xyXG5cclxuICBfbGlzdGVuZXJzOiB7W3N0cmluZ106IEFycmF5PEZ1bmN0aW9uPn07XHJcbiAgX3ZhbHVlOiBzdHJpbmc7XHJcbiAgX2NoYW5naW5nQ3Vyc29yUG9zOiBudW1iZXI7XHJcbiAgX3VubWFza2VkVmFsdWU6IHN0cmluZztcclxuICBfc2F2ZVNlbGVjdGlvbjogKD9FdmVudCkgPT4gdm9pZDtcclxuICBfc2VsZWN0aW9uOiBTZWxlY3Rpb247XHJcbiAgX29uSW5wdXQ6ICgpID0+IHZvaWQ7XHJcbiAgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xyXG4gIF9vbkRyb3A6IChFdmVudCkgPT4gdm9pZDtcclxuICBfb25Gb2N1czogKEV2ZW50KSA9PiB2b2lkO1xyXG4gIF9jdXJzb3JDaGFuZ2luZzogVGltZW91dElEO1xyXG5cclxuICAvKipcclxuICAgIEBwYXJhbSB7TWFza0VsZW1lbnR8SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBlbFxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yIChlbDogTWFza0VsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgb3B0czoge1tzdHJpbmddOiBhbnl9KSB7XHJcbiAgICB0aGlzLmVsID0gKGVsIGluc3RhbmNlb2YgTWFza0VsZW1lbnQpID9cclxuICAgICAgZWwgOlxyXG4gICAgICBuZXcgSFRNTE1hc2tFbGVtZW50KGVsKTtcclxuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayhvcHRzKTtcclxuXHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcbiAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gJyc7XHJcblxyXG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbiA9IHRoaXMuX3NhdmVTZWxlY3Rpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX29uSW5wdXQgPSB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9vbkRyb3AgPSB0aGlzLl9vbkRyb3AuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFsaWduQ3Vyc29yID0gdGhpcy5hbGlnbkN1cnNvci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5ID0gdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5fYmluZEV2ZW50cygpO1xyXG5cclxuICAgIC8vIHJlZnJlc2hcclxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVhZCBvciB1cGRhdGUgbWFzayAqL1xyXG4gIGdldCBtYXNrICgpOiBNYXNrIHtcclxuICAgIHJldHVybiB0aGlzLm1hc2tlZC5tYXNrO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1hc2sgKG1hc2s6IE1hc2spIHtcclxuICAgIGlmIChtYXNrID09IG51bGwgfHxcclxuICAgICAgbWFzayA9PT0gdGhpcy5tYXNrZWQubWFzayB8fFxyXG4gICAgICBtYXNrID09PSBEYXRlICYmIHRoaXMubWFza2VkIGluc3RhbmNlb2YgTWFza2VkRGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLm1hc2tlZC5jb25zdHJ1Y3RvciA9PT0gbWFza2VkQ2xhc3MobWFzaykpIHtcclxuICAgICAgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyh7bWFza30pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFza2VkID0gY3JlYXRlTWFzayh7bWFza30pO1xyXG4gICAgbWFza2VkLnVubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xyXG4gICAgdGhpcy5tYXNrZWQgPSBtYXNrZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogUmF3IHZhbHVlICovXHJcbiAgZ2V0IHZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlIChzdHI6IHN0cmluZykge1xyXG4gICAgdGhpcy5tYXNrZWQudmFsdWUgPSBzdHI7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcclxuICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKiBVbm1hc2tlZCB2YWx1ZSAqL1xyXG4gIGdldCB1bm1hc2tlZFZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VubWFza2VkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdW5tYXNrZWRWYWx1ZSAoc3RyOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWUgPSBzdHI7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcclxuICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKiBUeXBlZCB1bm1hc2tlZCB2YWx1ZSAqL1xyXG4gIGdldCB0eXBlZFZhbHVlICgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnR5cGVkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdHlwZWRWYWx1ZSAodmFsOiBhbnkpIHtcclxuICAgIHRoaXMubWFza2VkLnR5cGVkVmFsdWUgPSB2YWw7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcclxuICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgU3RhcnRzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xyXG4gICAgQHByb3RlY3RlZFxyXG4gICovXHJcbiAgX2JpbmRFdmVudHMgKCkge1xyXG4gICAgdGhpcy5lbC5iaW5kRXZlbnRzKHtcclxuICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxyXG4gICAgICBpbnB1dDogdGhpcy5fb25JbnB1dCxcclxuICAgICAgZHJvcDogdGhpcy5fb25Ecm9wLFxyXG4gICAgICBjbGljazogdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LFxyXG4gICAgICBmb2N1czogdGhpcy5fb25Gb2N1cyxcclxuICAgICAgY29tbWl0OiB0aGlzLl9vbkNoYW5nZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBTdG9wcyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcclxuICAgIEBwcm90ZWN0ZWRcclxuICAgKi9cclxuICBfdW5iaW5kRXZlbnRzICgpIHtcclxuICAgIHRoaXMuZWwudW5iaW5kRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEZpcmVzIGN1c3RvbSBldmVudFxyXG4gICAgQHByb3RlY3RlZFxyXG4gICAqL1xyXG4gIF9maXJlRXZlbnQgKGV2OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldl07XHJcbiAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xyXG5cclxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbCgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQ3VycmVudCBzZWxlY3Rpb24gc3RhcnRcclxuICAgIEByZWFkb25seVxyXG4gICovXHJcbiAgZ2V0IHNlbGVjdGlvblN0YXJ0ICgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID9cclxuICAgICAgdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOlxyXG5cclxuICAgICAgdGhpcy5lbC5zZWxlY3Rpb25TdGFydDtcclxuICB9XHJcblxyXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xyXG4gIGdldCBjdXJzb3JQb3MgKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgP1xyXG4gICAgICB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6XHJcblxyXG4gICAgICB0aGlzLmVsLnNlbGVjdGlvbkVuZDtcclxuICB9XHJcbiAgc2V0IGN1cnNvclBvcyAocG9zOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZWwuc2VsZWN0KHBvcywgcG9zKTtcclxuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgU3RvcmVzIGN1cnJlbnQgc2VsZWN0aW9uXHJcbiAgICBAcHJvdGVjdGVkXHJcbiAgKi9cclxuICBfc2F2ZVNlbGVjdGlvbiAoLyogZXYgKi8pIHtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRWxlbWVudCB2YWx1ZSB3YXMgY2hhbmdlZCBvdXRzaWRlIG9mIG1hc2suIFN5bmNyb25pemUgbWFzayB1c2luZyBgbWFzay51cGRhdGVWYWx1ZSgpYCB0byB3b3JrIHByb3Blcmx5LicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgIH1cclxuICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXHJcbiAgdXBkYXRlVmFsdWUgKCkge1xyXG4gICAgdGhpcy5tYXNrZWQudmFsdWUgPSB0aGlzLmVsLnZhbHVlO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBTeW5jcm9uaXplcyB2aWV3IGZyb20gbW9kZWwgdmFsdWUsIGZpcmVzIGNoYW5nZSBldmVudHMgKi9cclxuICB1cGRhdGVDb250cm9sICgpIHtcclxuICAgIGNvbnN0IG5ld1VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcclxuICAgIGNvbnN0IGlzQ2hhbmdlZCA9ICh0aGlzLnVubWFza2VkVmFsdWUgIT09IG5ld1VubWFza2VkVmFsdWUgfHxcclxuICAgICAgdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWUpO1xyXG5cclxuICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSBuZXdVbm1hc2tlZFZhbHVlO1xyXG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5lbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHRoaXMuZWwudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIGlmIChpc0NoYW5nZWQpIHRoaXMuX2ZpcmVDaGFuZ2VFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBVcGRhdGVzIG9wdGlvbnMgd2l0aCBkZWVwIGVxdWFsIGNoZWNrLCByZWNyZWF0ZXMgQHtsaW5rIE1hc2tlZH0gbW9kZWwgaWYgbWFzayB0eXBlIGNoYW5nZXMgKi9cclxuICB1cGRhdGVPcHRpb25zIChvcHRzOiB7W3N0cmluZ106IGFueX0pIHtcclxuICAgIGlmIChvYmplY3RJbmNsdWRlcyh0aGlzLm1hc2tlZCwgb3B0cykpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB7IG1hc2ssIC4uLnJlc3RPcHRzIH0gPSBvcHRzO1xyXG5cclxuICAgIHRoaXMubWFzayA9IG1hc2s7XHJcbiAgICB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcclxuICB9XHJcblxyXG4gIC8qKiBVcGRhdGVzIGN1cnNvciAqL1xyXG4gIHVwZGF0ZUN1cnNvciAoY3Vyc29yUG9zOiBudW1iZXIpIHtcclxuICAgIGlmIChjdXJzb3JQb3MgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7XHJcblxyXG4gICAgLy8gYWxzbyBxdWV1ZSBjaGFuZ2UgY3Vyc29yIGZvciBtb2JpbGUgYnJvd3NlcnNcclxuICAgIHRoaXMuX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIERlbGF5cyBjdXJzb3IgdXBkYXRlIHRvIHN1cHBvcnQgbW9iaWxlIGJyb3dzZXJzXHJcbiAgICBAcHJpdmF0ZVxyXG4gICovXHJcbiAgX2RlbGF5VXBkYXRlQ3Vyc29yIChjdXJzb3JQb3M6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcclxuICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zID0gY3Vyc29yUG9zO1xyXG4gICAgdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmVsKSByZXR1cm47IC8vIGlmIHdhcyBkZXN0cm95ZWRcclxuICAgICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcclxuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgRmlyZXMgY3VzdG9tIGV2ZW50c1xyXG4gICAgQHByb3RlY3RlZFxyXG4gICovXHJcbiAgX2ZpcmVDaGFuZ2VFdmVudHMgKCkge1xyXG4gICAgdGhpcy5fZmlyZUV2ZW50KCdhY2NlcHQnKTtcclxuICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGVcclxuICAgIEBwcml2YXRlXHJcbiAgKi9cclxuICBfYWJvcnRVcGRhdGVDdXJzb3IgKCkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jdXJzb3JDaGFuZ2luZyk7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJzb3JDaGFuZ2luZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBBbGlnbnMgY3Vyc29yIHRvIG5lYXJlc3QgYXZhaWxhYmxlIHBvc2l0aW9uICovXHJcbiAgYWxpZ25DdXJzb3IgKCkge1xyXG4gICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5jdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKTtcclxuICB9XHJcblxyXG4gIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXHJcbiAgYWxpZ25DdXJzb3JGcmllbmRseSAoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy5jdXJzb3JQb3MpIHJldHVybjsgIC8vIHNraXAgaWYgcmFuZ2UgaXMgc2VsZWN0ZWRcclxuICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKiBBZGRzIGxpc3RlbmVyIG9uIGN1c3RvbSBldmVudCAqL1xyXG4gIG9uIChldjogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSB0aGlzLl9saXN0ZW5lcnNbZXZdID0gW107XHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZdLnB1c2goaGFuZGxlcik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBSZW1vdmVzIGN1c3RvbSBldmVudCBsaXN0ZW5lciAqL1xyXG4gIG9mZiAoZXY6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pIHtcclxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgcmV0dXJuIHRoaXM7XHJcbiAgICBpZiAoIWhhbmRsZXIpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldl07XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaEluZGV4ID0gdGhpcy5fbGlzdGVuZXJzW2V2XS5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgaWYgKGhJbmRleCA+PSAwKSB0aGlzLl9saXN0ZW5lcnNbZXZdLnNwbGljZShoSW5kZXgsIDEpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyB2aWV3IGlucHV0IGV2ZW50ICovXHJcbiAgX29uSW5wdXQgKCkge1xyXG4gICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcclxuXHJcbiAgICAvLyBmaXggc3RyYW5nZSBJRSBiZWhhdmlvclxyXG4gICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24pIHJldHVybiB0aGlzLnVwZGF0ZVZhbHVlKCk7XHJcblxyXG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBBY3Rpb25EZXRhaWxzKFxyXG4gICAgICAvLyBuZXcgc3RhdGVcclxuICAgICAgdGhpcy5lbC52YWx1ZSwgdGhpcy5jdXJzb3JQb3MsXHJcbiAgICAgIC8vIG9sZCBzdGF0ZVxyXG4gICAgICB0aGlzLnZhbHVlLCB0aGlzLl9zZWxlY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IG9sZFJhd1ZhbHVlID0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZTtcclxuXHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm1hc2tlZC5zcGxpY2UoXHJcbiAgICAgIGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MsXHJcbiAgICAgIGRldGFpbHMucmVtb3ZlZC5sZW5ndGgsXHJcbiAgICAgIGRldGFpbHMuaW5zZXJ0ZWQsXHJcbiAgICAgIGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uKS5vZmZzZXQ7XHJcblxyXG4gICAgLy8gZm9yY2UgYWxpZ24gaW4gcmVtb3ZlIGRpcmVjdGlvbiBvbmx5IGlmIG5vIGlucHV0IGNoYXJzIHdlcmUgcmVtb3ZlZFxyXG4gICAgLy8gb3RoZXJ3aXNlIHdlIHN0aWxsIG5lZWQgdG8gYWxpZ24gd2l0aCBOT05FICh0byBnZXQgb3V0IGZyb20gZml4ZWQgc3ltYm9scyBmb3IgaW5zdGFuY2UpXHJcbiAgICBjb25zdCByZW1vdmVEaXJlY3Rpb24gPSBvbGRSYXdWYWx1ZSA9PT0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZSA/XHJcbiAgICAgIGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uIDpcclxuICAgICAgRElSRUNUSU9OLk5PTkU7XHJcblxyXG4gICAgY29uc3QgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKFxyXG4gICAgICBkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zICsgb2Zmc2V0LFxyXG4gICAgICByZW1vdmVEaXJlY3Rpb24sXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG4gICAgdGhpcy51cGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHZpZXcgY2hhbmdlIGV2ZW50IGFuZCBjb21taXRzIG1vZGVsIHZhbHVlICovXHJcbiAgX29uQ2hhbmdlICgpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcclxuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHZpZXcgZHJvcCBldmVudCwgcHJldmVudHMgYnkgZGVmYXVsdCAqL1xyXG4gIF9vbkRyb3AgKGV2OiBFdmVudCkge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cclxuICBfb25Gb2N1cyAoZXY6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy5jdXJzb3JQb3MpIHJldHVybjsgIC8vIHNraXAgaWYgcmFuZ2UgaXMgc2VsZWN0ZWRcclxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb24pIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5fc2VsZWN0aW9uLmVuZDtcclxuICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFVuYmluZCB2aWV3IGV2ZW50cyBhbmQgcmVtb3ZlcyBlbGVtZW50IHJlZmVyZW5jZSAqL1xyXG4gIGRlc3Ryb3kgKCkge1xyXG4gICAgdGhpcy5fdW5iaW5kRXZlbnRzKCk7XHJcbiAgICAvLyAkRmxvd0ZpeE1lIHdoeSBub3QgZG8gc28/XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID0gMDtcclxuICAgIGRlbGV0ZSB0aGlzLmVsO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xyXG5cclxuXHJcbi8qKiBQYXR0ZXJuIHdoaWNoIHZhbGlkYXRlcyBlbnVtIHZhbHVlcyAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBNYXNrZWRFbnVtIGV4dGVuZHMgTWFza2VkUGF0dGVybiB7XHJcbiAgZW51bTogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cclxuICBfdXBkYXRlIChvcHRzOiBhbnkpIHsgIC8vIFRPRE8gdHlwZVxyXG4gICAgaWYgKG9wdHMuZW51bSkgb3B0cy5tYXNrID0gJyonLnJlcGVhdChvcHRzLmVudW1bMF0ubGVuZ3RoKTtcclxuXHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvVmFsaWRhdGUgKC4uLmFyZ3M6ICopOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVudW0uc29tZShlID0+IGUuaW5kZXhPZih0aGlzLnVubWFza2VkVmFsdWUpID49IDApICYmXHJcbiAgICAgIHN1cGVyLmRvVmFsaWRhdGUoLi4uYXJncyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB7ZXNjYXBlUmVnRXhwLCBpbmRleEluRGlyZWN0aW9uLCBwb3NJbkRpcmVjdGlvbiwgdHlwZSBEaXJlY3Rpb24sIERJUkVDVElPTn0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XHJcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xyXG5cclxuaW1wb3J0IE1hc2tlZCwge3R5cGUgTWFza2VkT3B0aW9ucywgdHlwZSBFeHRyYWN0RmxhZ3MsIHR5cGUgQXBwZW5kRmxhZ3N9IGZyb20gJy4vYmFzZS5qcyc7XHJcblxyXG5cclxudHlwZSBNYXNrZWROdW1iZXJPcHRpb25zID0ge1xyXG4gIC4uLk1hc2tlZE9wdGlvbnM8TnVtYmVyPixcclxuICByYWRpeDogJFByb3BlcnR5VHlwZTxNYXNrZWROdW1iZXIsICdyYWRpeCc+LFxyXG4gIHRob3VzYW5kc1NlcGFyYXRvcjogJFByb3BlcnR5VHlwZTxNYXNrZWROdW1iZXIsICd0aG91c2FuZHNTZXBhcmF0b3InPixcclxuICBtYXBUb1JhZGl4OiAkUHJvcGVydHlUeXBlPE1hc2tlZE51bWJlciwgJ21hcFRvUmFkaXgnPixcclxuICBzY2FsZTogJFByb3BlcnR5VHlwZTxNYXNrZWROdW1iZXIsICdzY2FsZSc+LFxyXG4gIHNpZ25lZDogJFByb3BlcnR5VHlwZTxNYXNrZWROdW1iZXIsICdzaWduZWQnPixcclxuICBub3JtYWxpemVaZXJvczogJFByb3BlcnR5VHlwZTxNYXNrZWROdW1iZXIsICdub3JtYWxpemVaZXJvcyc+LFxyXG4gIHBhZEZyYWN0aW9uYWxaZXJvczogJFByb3BlcnR5VHlwZTxNYXNrZWROdW1iZXIsICdwYWRGcmFjdGlvbmFsWmVyb3MnPixcclxufTtcclxuXHJcbi8qKlxyXG4gIE51bWJlciBtYXNrXHJcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5yYWRpeCAtIFNpbmdsZSBjaGFyXHJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMudGhvdXNhbmRzU2VwYXJhdG9yIC0gU2luZ2xlIGNoYXJcclxuICBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdHMubWFwVG9SYWRpeCAtIEFycmF5IG9mIHNpbmdsZSBjaGFyc1xyXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1pblxyXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1heFxyXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLnNjYWxlIC0gRGlnaXRzIGFmdGVyIHBvaW50XHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLnNpZ25lZCAtIEFsbG93IG5lZ2F0aXZlXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLm5vcm1hbGl6ZVplcm9zIC0gRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLnBhZEZyYWN0aW9uYWxaZXJvcyAtIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZ1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBNYXNrZWROdW1iZXIgZXh0ZW5kcyBNYXNrZWQ8Q2xhc3M8TnVtYmVyPj4ge1xyXG4gIHN0YXRpYyBERUZBVUxUUzogJFNoYXBlPE1hc2tlZE51bWJlck9wdGlvbnM+O1xyXG5cclxuICAvKiogU2luZ2xlIGNoYXIgKi9cclxuICByYWRpeDogc3RyaW5nO1xyXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xyXG4gIHRob3VzYW5kc1NlcGFyYXRvcjogc3RyaW5nO1xyXG4gIC8qKiBBcnJheSBvZiBzaW5nbGUgY2hhcnMgKi9cclxuICBtYXBUb1JhZGl4OiBBcnJheTxzdHJpbmc+O1xyXG4gIC8qKiAqL1xyXG4gIG1pbjogbnVtYmVyO1xyXG4gIC8qKiAqL1xyXG4gIG1heDogbnVtYmVyO1xyXG4gIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cclxuICBzY2FsZTogbnVtYmVyO1xyXG4gIC8qKiAqL1xyXG4gIHNpZ25lZDogYm9vbGVhbjtcclxuICAvKiogRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXHJcbiAgbm9ybWFsaXplWmVyb3M6IGJvb2xlYW47XHJcbiAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xyXG4gIHBhZEZyYWN0aW9uYWxaZXJvczogYm9vbGVhbjtcclxuICBfbnVtYmVyUmVnRXhwOiBSZWdFeHA7XHJcbiAgX251bWJlclJlZ0V4cElucHV0OiBSZWdFeHA7XHJcbiAgX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cDogUmVnRXhwO1xyXG4gIF9tYXBUb1JhZGl4UmVnRXhwOiBSZWdFeHA7XHJcbiAgX3NlcGFyYXRvcnNQcm9jZXNzZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yIChvcHRzOiAkU2hhcGU8TWFza2VkTnVtYmVyT3B0aW9ucz4pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgLi4uTWFza2VkTnVtYmVyLkRFRkFVTFRTLFxyXG4gICAgICAuLi5vcHRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBfdXBkYXRlIChvcHRzOiBNYXNrZWROdW1iZXJPcHRpb25zKSB7XHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gICAgdGhpcy5fdXBkYXRlUmVnRXhwcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX3VwZGF0ZVJlZ0V4cHMgKCkge1xyXG4gICAgLy8gdXNlIGRpZmZlcmVudCByZWdleHAgdG8gcHJvY2VzcyB1c2VyIGlucHV0IChtb3JlIHN0cmljdCwgaW5wdXQgc3VmZml4KSBhbmQgdGFpbCBzaGlmdGluZ1xyXG4gICAgbGV0IHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcclxuICAgIGxldCBtaWRJbnB1dCA9ICcoMHwoWzEtOV0rXFxcXGQqKSk/JztcclxuICAgIGxldCBtaWQgPSAnXFxcXGQqJztcclxuXHJcbiAgICBsZXQgZW5kID0gKHRoaXMuc2NhbGUgP1xyXG4gICAgICAnKCcgKyBlc2NhcGVSZWdFeHAodGhpcy5yYWRpeCkgKyAnXFxcXGR7MCwnICsgdGhpcy5zY2FsZSArICd9KT8nIDpcclxuICAgICAgJycpICsgJyQnO1xyXG5cclxuICAgIHRoaXMuX251bWJlclJlZ0V4cElucHV0ID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZElucHV0ICsgZW5kKTtcclxuICAgIHRoaXMuX251bWJlclJlZ0V4cCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWQgKyBlbmQpO1xyXG4gICAgdGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ1snICtcclxuICAgICAgdGhpcy5tYXBUb1JhZGl4Lm1hcChlc2NhcGVSZWdFeHApLmpvaW4oJycpICtcclxuICAgICddJywgJ2cnKTtcclxuICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIF9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCwgJycpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMgKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjkwMTEwMi9ob3ctdG8tcHJpbnQtYS1udW1iZXItd2l0aC1jb21tYXMtYXMtdGhvdXNhbmRzLXNlcGFyYXRvcnMtaW4tamF2YXNjcmlwdFxyXG4gICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcclxuICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpO1xyXG4gICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9QcmVwYXJlIChzdHI6IHN0cmluZywgLi4uYXJnczogKikge1xyXG4gICAgcmV0dXJuIHN1cGVyLmRvUHJlcGFyZSh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHN0ci5yZXBsYWNlKHRoaXMuX21hcFRvUmFkaXhSZWdFeHAsIHRoaXMucmFkaXgpKSwgLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICAvKiogKi9cclxuICBfc2VwYXJhdG9yc0NvdW50ICh0bzogbnVtYmVyLCBleHRlbmRPblNlcGFyYXRvcnM6IGJvb2xlYW49ZmFsc2UpOiBudW1iZXIge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBwb3MgPSAwOyBwb3MgPCB0bzsgKytwb3MpIHtcclxuICAgICAgaWYgKHRoaXMuX3ZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHBvcykgPT09IHBvcykge1xyXG4gICAgICAgICsrY291bnQ7XHJcbiAgICAgICAgaWYgKGV4dGVuZE9uU2VwYXJhdG9ycykgdG8gKz0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSAoc2xpY2U6IHN0cmluZz10aGlzLl92YWx1ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc2xpY2UpLmxlbmd0aCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZXh0cmFjdElucHV0IChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoLCBmbGFncz86IEV4dHJhY3RGbGFncyk6IHN0cmluZyB7XHJcbiAgICBbZnJvbVBvcywgdG9Qb3NdID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc3VwZXIuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF9hcHBlbmRDaGFyUmF3IChjaDogc3RyaW5nLCBmbGFnczogQXBwZW5kRmxhZ3M9e30pOiBDaGFuZ2VEZXRhaWxzIHtcclxuICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBzdXBlci5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpO1xyXG5cclxuICAgIGNvbnN0IHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKGZsYWdzLnRhaWwgJiYgdGhpcy5fYmVmb3JlVGFpbFN0YXRlID9cclxuICAgICAgdGhpcy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6XHJcbiAgICAgIHRoaXMuX3ZhbHVlKTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBhcHBlbmREZXRhaWxzID0gc3VwZXIuX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKTtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fdmFsdWUpO1xyXG4gICAgY29uc3QgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShmbGFncy50YWlsICYmIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZSA/XHJcbiAgICAgIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOlxyXG4gICAgICB0aGlzLl92YWx1ZSk7XHJcblxyXG4gICAgYXBwZW5kRGV0YWlscy50YWlsU2hpZnQgKz0gKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XHJcbiAgICByZXR1cm4gYXBwZW5kRGV0YWlscztcclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIF9maW5kU2VwYXJhdG9yQXJvdW5kIChwb3M6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHtcclxuICAgICAgY29uc3Qgc2VhcmNoRnJvbSA9IHBvcyAtIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aCArIDE7XHJcbiAgICAgIGNvbnN0IHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XHJcbiAgICAgIGlmIChzZXBhcmF0b3JQb3MgPD0gcG9zKSByZXR1cm4gc2VwYXJhdG9yUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzIChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGZyb20pO1xyXG4gICAgaWYgKHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPj0gMCkgZnJvbSA9IHNlcGFyYXRvckFyb3VuZEZyb21Qb3M7XHJcblxyXG4gICAgY29uc3Qgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcclxuICAgIGlmIChzZXBhcmF0b3JBcm91bmRUb1BvcyA+PSAwKSB0byA9IHNlcGFyYXRvckFyb3VuZFRvUG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xyXG4gICAgcmV0dXJuIFtmcm9tLCB0b107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgcmVtb3ZlIChmcm9tUG9zPzogbnVtYmVyPTAsIHRvUG9zPzogbnVtYmVyPXRoaXMudmFsdWUubGVuZ3RoKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBbZnJvbVBvcywgdG9Qb3NdID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XHJcblxyXG4gICAgY29uc3QgdmFsdWVCZWZvcmVQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpO1xyXG4gICAgY29uc3QgdmFsdWVBZnRlclBvcyA9IHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xyXG5cclxuICAgIGNvbnN0IHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHZhbHVlQmVmb3JlUG9zLmxlbmd0aCk7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZUJlZm9yZVBvcyArIHZhbHVlQWZ0ZXJQb3MpKTtcclxuICAgIGNvbnN0IGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XHJcbiAgICAgIHRhaWxTaGlmdDogKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBuZWFyZXN0SW5wdXRQb3MgKGN1cnNvclBvczogbnVtYmVyLCBkaXJlY3Rpb24/OiBEaXJlY3Rpb24pOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIGN1cnNvclBvcztcclxuXHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxyXG4gICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOiB7XHJcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yQXRMZWZ0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MgLSAxKTtcclxuICAgICAgICBpZiAoc2VwYXJhdG9yQXRMZWZ0UG9zID49IDApIHtcclxuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvckF0TGVmdEVuZFBvcyA9IHNlcGFyYXRvckF0TGVmdFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcclxuICAgICAgICAgIGlmIChjdXJzb3JQb3MgPCBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHxcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5sZW5ndGggPD0gc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlRcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6IHtcclxuICAgICAgICBjb25zdCBzZXBhcmF0b3JBdFJpZ2h0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MpO1xyXG4gICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcclxuICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdFJpZ2h0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJzb3JQb3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZG9WYWxpZGF0ZSAoZmxhZ3M6IEFwcGVuZEZsYWdzKSB7XHJcbiAgICBjb25zdCByZWdleHAgPSBmbGFncy5pbnB1dCA/IHRoaXMuX251bWJlclJlZ0V4cElucHV0IDogdGhpcy5fbnVtYmVyUmVnRXhwO1xyXG5cclxuICAgIC8vIHZhbGlkYXRlIGFzIHN0cmluZ1xyXG4gICAgbGV0IHZhbGlkID0gcmVnZXhwLnRlc3QodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKSk7XHJcblxyXG4gICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgIC8vIHZhbGlkYXRlIGFzIG51bWJlclxyXG4gICAgICBjb25zdCBudW1iZXIgPSB0aGlzLm51bWJlcjtcclxuICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOYU4obnVtYmVyKSAmJlxyXG4gICAgICAgIC8vIGNoZWNrIG1pbiBib3VuZCBmb3IgbmVnYXRpdmUgdmFsdWVzXHJcbiAgICAgICAgKHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPj0gMCB8fCB0aGlzLm1pbiA8PSB0aGlzLm51bWJlcikgJiZcclxuICAgICAgICAvLyBjaGVjayBtYXggYm91bmQgZm9yIHBvc2l0aXZlIHZhbHVlc1xyXG4gICAgICAgICh0aGlzLm1heCA9PSBudWxsIHx8IHRoaXMubWF4IDw9IDAgfHwgdGhpcy5udW1iZXIgPD0gdGhpcy5tYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZCAmJiBzdXBlci5kb1ZhbGlkYXRlKGZsYWdzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBkb0NvbW1pdCAoKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICBjb25zdCBudW1iZXIgPSB0aGlzLm51bWJlcjtcclxuICAgICAgbGV0IHZhbGlkbnVtID0gbnVtYmVyO1xyXG5cclxuICAgICAgLy8gY2hlY2sgYm91bmRzXHJcbiAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XHJcbiAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XHJcblxyXG4gICAgICBpZiAodmFsaWRudW0gIT09IG51bWJlcikgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbGlkbnVtKTtcclxuXHJcbiAgICAgIGxldCBmb3JtYXR0ZWQgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XHJcblxyXG4gICAgICB0aGlzLl92YWx1ZSA9IGZvcm1hdHRlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5kb0NvbW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqICovXHJcbiAgX25vcm1hbGl6ZVplcm9zICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkuc3BsaXQodGhpcy5yYWRpeCk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGxlYWRpbmcgemVyb3NcclxuICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pID0+IHNpZ24gKyBudW0pO1xyXG4gICAgLy8gYWRkIGxlYWRpbmcgemVyb1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCAmJiAhL1xcZCQvLnRlc3QocGFydHNbMF0pKSBwYXJ0c1swXSA9IHBhcnRzWzBdICsgJzAnO1xyXG5cclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAgLy8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXHJcbiAgICAgIGlmICghcGFydHNbMV0ubGVuZ3RoKSBwYXJ0cy5sZW5ndGggPSAxOyAgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyhwYXJ0cy5qb2luKHRoaXMucmFkaXgpKTtcclxuICB9XHJcblxyXG4gIC8qKiAqL1xyXG4gIF9wYWRGcmFjdGlvbmFsWmVyb3MgKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XHJcbiAgICBpZiAocGFydHMubGVuZ3RoIDwgMikgcGFydHMucHVzaCgnJyk7XHJcbiAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnBhZEVuZCh0aGlzLnNjYWxlLCAnMCcpO1xyXG4gICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHVubWFza2VkVmFsdWUgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhcclxuICAgICAgdGhpcy5fbm9ybWFsaXplWmVyb3MoXHJcbiAgICAgICAgdGhpcy52YWx1ZSkpXHJcbiAgICAgIC5yZXBsYWNlKHRoaXMucmFkaXgsICcuJyk7XHJcbiAgfVxyXG5cclxuICBzZXQgdW5tYXNrZWRWYWx1ZSAodW5tYXNrZWRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlci51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZS5yZXBsYWNlKCcuJywgdGhpcy5yYWRpeCk7XHJcbiAgfVxyXG5cclxuICAvKiogUGFyc2VkIE51bWJlciAqL1xyXG4gIGdldCBudW1iZXIgKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHRoaXMudW5tYXNrZWRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXQgbnVtYmVyIChudW1iZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKG51bWJlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IHR5cGVkVmFsdWUgKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgdHlwZWRWYWx1ZSAodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5udW1iZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgSXMgbmVnYXRpdmUgYWxsb3dlZFxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cclxuICBnZXQgYWxsb3dOZWdhdGl2ZSAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduZWQgfHxcclxuICAgICAgKHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPCAwKSB8fFxyXG4gICAgICAodGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA8IDApO1xyXG4gIH1cclxufVxyXG5NYXNrZWROdW1iZXIuREVGQVVMVFMgPSB7XHJcbiAgcmFkaXg6ICcsJyxcclxuICB0aG91c2FuZHNTZXBhcmF0b3I6ICcnLFxyXG4gIG1hcFRvUmFkaXg6IFsnLiddLFxyXG4gIHNjYWxlOiAyLFxyXG4gIHNpZ25lZDogZmFsc2UsXHJcbiAgbm9ybWFsaXplWmVyb3M6IHRydWUsXHJcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZSxcclxufTtcclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IE1hc2tlZCwge3R5cGUgTWFza2VkT3B0aW9uc30gZnJvbSAnLi9iYXNlLmpzJztcclxuXHJcblxyXG4vKiogTWFza2luZyBieSBSZWdFeHAgKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgTWFza2VkUmVnRXhwIGV4dGVuZHMgTWFza2VkPFJlZ0V4cD4ge1xyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXHJcbiAgX3VwZGF0ZSAob3B0czogJFNoYXBlPE1hc2tlZE9wdGlvbnM8UmVnRXhwPj4pIHtcclxuICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSAodmFsdWUpID0+IHZhbHVlLnNlYXJjaChvcHRzLm1hc2spID49IDA7XHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgTWFza2VkLCB7dHlwZSBNYXNrZWRPcHRpb25zfSBmcm9tICcuL2Jhc2UuanMnO1xyXG5cclxuXHJcbi8qKiBNYXNraW5nIGJ5IGN1c3RvbSBGdW5jdGlvbiAqL1xyXG5leHBvcnQgZGVmYXVsdFxyXG5jbGFzcyBNYXNrZWRGdW5jdGlvbiBleHRlbmRzIE1hc2tlZDxGdW5jdGlvbj4ge1xyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXHJcbiAgX3VwZGF0ZSAob3B0czogTWFza2VkT3B0aW9uczxGdW5jdGlvbj4pIHtcclxuICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBvcHRzLm1hc2s7XHJcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcclxuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9mYWN0b3J5LmpzJztcclxuaW1wb3J0IE1hc2tlZCwge3R5cGUgQXBwZW5kRmxhZ3MsIHR5cGUgTWFza2VkU3RhdGV9IGZyb20gJy4vYmFzZS5qcyc7XHJcbmltcG9ydCB7IHR5cGUgVGFpbERldGFpbHMgfSBmcm9tICcuLi9jb3JlL3RhaWwtZGV0YWlscy5qcyc7XHJcblxyXG5cclxudHlwZSBNYXNrZWREeW5hbWljU3RhdGUgPSB7fFxyXG4gIC4uLk1hc2tlZFN0YXRlLFxyXG4gIF9yYXdJbnB1dFZhbHVlOiBzdHJpbmcsXHJcbiAgY29tcGlsZWRNYXNrczogQXJyYXk8Kj4sXHJcbiAgY3VycmVudE1hc2tSZWY6ID9NYXNrZWQ8Kj4sXHJcbiAgY3VycmVudE1hc2s6ICosXHJcbnx9O1xyXG5cclxudHlwZSBEeW5hbWljTWFza1R5cGUgPSBBcnJheTx7W3N0cmluZ106IGFueX0+O1xyXG4vKiogRHluYW1pYyBtYXNrIGZvciBjaG9vc2luZyBhcHJvcHJpYXRlIG1hc2sgaW4gcnVuLXRpbWUgKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgTWFza2VkRHluYW1pYyBleHRlbmRzIE1hc2tlZDxEeW5hbWljTWFza1R5cGU+IHtcclxuICAvKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXHJcbiAgY3VycmVudE1hc2s6ID9NYXNrZWQ8Kj47XHJcbiAgLyoqIENvbXBsaWxlZCB7QGxpbmsgTWFza2VkfSBvcHRpb25zICovXHJcbiAgY29tcGlsZWRNYXNrczogQXJyYXk8TWFza2VkPCo+PjtcclxuICAvKiogQ2hvb3NlcyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gaW5wdXQgdmFsdWUgKi9cclxuICBkaXNwYXRjaDogKHN0cmluZywgTWFza2VkPCo+LCBBcHBlbmRGbGFncykgPT4gTWFza2VkPCo+O1xyXG5cclxuICAvKipcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvciAob3B0czogYW55KSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIC4uLk1hc2tlZER5bmFtaWMuREVGQVVMVFMsXHJcbiAgICAgIC4uLm9wdHNcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3VycmVudE1hc2sgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF91cGRhdGUgKG9wdHM6IGFueSkge1xyXG4gICAgc3VwZXIuX3VwZGF0ZShvcHRzKTtcclxuICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xyXG4gICAgICAvLyBtYXNrIGNvdWxkIGJlIHRvdGFsbHkgZHluYW1pYyB3aXRoIG9ubHkgYGRpc3BhdGNoYCBvcHRpb25cclxuICAgICAgdGhpcy5jb21waWxlZE1hc2tzID0gQXJyYXkuaXNBcnJheShvcHRzLm1hc2spID9cclxuICAgICAgICBvcHRzLm1hc2subWFwKG0gPT4gY3JlYXRlTWFzayhtKSkgOlxyXG4gICAgICAgIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIF9hcHBlbmRDaGFyUmF3ICguLi5hcmdzOiAqKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaCguLi5hcmdzKTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xyXG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRDaGFyKC4uLmFyZ3MpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGV0YWlscztcclxuICB9XHJcblxyXG4gIF9hcHBseURpc3BhdGNoIChhcHBlbmRlZDogc3RyaW5nPScnLCBmbGFnczogQXBwZW5kRmxhZ3M9e30pIHtcclxuICAgIGNvbnN0IHByZXZWYWx1ZUJlZm9yZVRhaWwgPSBmbGFncy50YWlsICYmIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZSA/XHJcbiAgICAgIHRoaXMuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOlxyXG4gICAgICB0aGlzLnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcclxuICAgIGNvbnN0IGluc2VydFZhbHVlID0gZmxhZ3MudGFpbCAmJiB0aGlzLl9iZWZvcmVUYWlsU3RhdGUgP1xyXG4gICAgICAvLyAkRmxvd0ZpeE1lIC0gdGlyZWQgdG8gZmlnaHQgd2l0aCB0eXBlIHN5c3RlbVxyXG4gICAgICB0aGlzLl9iZWZvcmVUYWlsU3RhdGUuX3Jhd0lucHV0VmFsdWUgOlxyXG4gICAgICBpbnB1dFZhbHVlO1xyXG4gICAgY29uc3QgdGFpbFZhbHVlID0gaW5wdXRWYWx1ZS5zbGljZShpbnNlcnRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgY29uc3QgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblxyXG4gICAgY29uc3QgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrICYmIHByZXZNYXNrLnN0YXRlO1xyXG4gICAgY29uc3QgcHJldk1hc2tCZWZvcmVUYWlsU3RhdGUgPSBwcmV2TWFzayAmJiBwcmV2TWFzay5fYmVmb3JlVGFpbFN0YXRlO1xyXG5cclxuICAgIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmRvRGlzcGF0Y2goYXBwZW5kZWQsIGZsYWdzKTtcclxuXHJcbiAgICAvLyByZXN0b3JlIHN0YXRlIGFmdGVyIGRpc3BhdGNoXHJcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcclxuICAgICAgICAvLyBpZiBtYXNrIGNoYW5nZWQgcmVhcHBseSBpbnB1dFxyXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcclxuXHJcbiAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQoaW5zZXJ0VmFsdWUsIHtyYXc6IHRydWV9KTtcclxuICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCA9IGQuaW5zZXJ0ZWQubGVuZ3RoIC0gcHJldlZhbHVlQmVmb3JlVGFpbC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICh0YWlsVmFsdWUpIHtcclxuICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXHJcbiAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZCh0YWlsVmFsdWUsIHtyYXc6IHRydWUsIHRhaWw6IHRydWV9KS50YWlsU2hpZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIERpc3BhdGNoIGNhbiBkbyBzb21ldGhpbmcgYmFkIHdpdGggc3RhdGUsIHNvXHJcbiAgICAgICAgLy8gcmVzdG9yZSBwcmV2IG1hc2sgc3RhdGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gcHJldk1hc2tTdGF0ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLl9iZWZvcmVUYWlsU3RhdGUgPSBwcmV2TWFza0JlZm9yZVRhaWxTdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvRGlzcGF0Y2goYXBwZW5kZWQ6IHN0cmluZywgZmxhZ3M6IEFwcGVuZEZsYWdzPXt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChhcHBlbmRlZCwgdGhpcywgZmxhZ3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvVmFsaWRhdGUgKC4uLmFyZ3M6ICopOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzdXBlci5kb1ZhbGlkYXRlKC4uLmFyZ3MpICYmIChcclxuICAgICAgIXRoaXMuY3VycmVudE1hc2sgfHwgdGhpcy5jdXJyZW50TWFzay5kb1ZhbGlkYXRlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICByZXNldCAoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xyXG4gICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2gobSA9PiBtLnJlc2V0KCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCB2YWx1ZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay52YWx1ZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlICh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlci52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCB1bm1hc2tlZFZhbHVlICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWUgOiAnJztcclxuICB9XHJcblxyXG4gIHNldCB1bm1hc2tlZFZhbHVlICh1bm1hc2tlZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCB0eXBlZFZhbHVlICgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcclxuICB9XHJcblxyXG4gIC8vIHByb2JhYmx5IHR5cGVkVmFsdWUgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggZHluYW1pY1xyXG4gIHNldCB0eXBlZFZhbHVlICh2YWx1ZTogYW55KSB7XHJcbiAgICBsZXQgdW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7XHJcblxyXG4gICAgLy8gZG91YmxlIGNoZWNrIGl0XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdW5tYXNrZWRWYWx1ZSA9IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZ2V0IGlzQ29tcGxldGUgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5jdXJyZW50TWFzayAmJiB0aGlzLmN1cnJlbnRNYXNrLmlzQ29tcGxldGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgcmVtb3ZlICguLi5hcmdzOiAqKTogQ2hhbmdlRGV0YWlscyB7XHJcbiAgICBjb25zdCBkZXRhaWxzOiBDaGFuZ2VEZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XHJcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2sucmVtb3ZlKC4uLmFyZ3MpKVxyXG4gICAgICAgIC8vIHVwZGF0ZSB3aXRoIGRpc3BhdGNoXHJcbiAgICAgICAgLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBseURpc3BhdGNoKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGdldCBzdGF0ZSAoKTogTWFza2VkRHluYW1pY1N0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLnN0YXRlLFxyXG4gICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlLFxyXG4gICAgICBjb21waWxlZE1hc2tzOiB0aGlzLmNvbXBpbGVkTWFza3MubWFwKG0gPT4gbS5zdGF0ZSksXHJcbiAgICAgIGN1cnJlbnRNYXNrUmVmOiB0aGlzLmN1cnJlbnRNYXNrLFxyXG4gICAgICBjdXJyZW50TWFzazogdGhpcy5jdXJyZW50TWFzayAmJiB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldCBzdGF0ZSAoc3RhdGU6IE1hc2tlZER5bmFtaWNTdGF0ZSkge1xyXG4gICAgY29uc3Qge2NvbXBpbGVkTWFza3MsIGN1cnJlbnRNYXNrUmVmLCBjdXJyZW50TWFzaywgLi4ubWFza2VkU3RhdGV9ID0gc3RhdGU7XHJcbiAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaCgobSwgbWkpID0+IG0uc3RhdGUgPSBjb21waWxlZE1hc2tzW21pXSk7XHJcbiAgICBpZiAoY3VycmVudE1hc2tSZWYgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY3VycmVudE1hc2tSZWY7XHJcbiAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBjdXJyZW50TWFzaztcclxuICAgIH1cclxuICAgIHN1cGVyLnN0YXRlID0gbWFza2VkU3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXHJcbiAgZXh0cmFjdElucHV0ICguLi5hcmdzOiAqKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID9cclxuICAgICAgdGhpcy5jdXJyZW50TWFzay5leHRyYWN0SW5wdXQoLi4uYXJncykgOlxyXG4gICAgICAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cclxuICBleHRyYWN0VGFpbCAoLi4uYXJnczogKik6IFRhaWxEZXRhaWxzIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID9cclxuICAgICAgdGhpcy5jdXJyZW50TWFzay5leHRyYWN0VGFpbCguLi5hcmdzKSA6XHJcbiAgICAgIHN1cGVyLmV4dHJhY3RUYWlsKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIGRvQ29tbWl0ICgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLmRvQ29tbWl0KCk7XHJcbiAgICBzdXBlci5kb0NvbW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xyXG4gIG5lYXJlc3RJbnB1dFBvcyguLi5hcmdzOiAqKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID9cclxuICAgICAgdGhpcy5jdXJyZW50TWFzay5uZWFyZXN0SW5wdXRQb3MoLi4uYXJncykgOlxyXG4gICAgICBzdXBlci5uZWFyZXN0SW5wdXRQb3MoLi4uYXJncyk7XHJcbiAgfVxyXG59XHJcblxyXG5NYXNrZWREeW5hbWljLkRFRkFVTFRTID0ge1xyXG4gIGRpc3BhdGNoOiAoYXBwZW5kZWQsIG1hc2tlZCwgZmxhZ3MpID0+IHtcclxuICAgIGlmICghbWFza2VkLmNvbXBpbGVkTWFza3MubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IG1hc2tlZC5yYXdJbnB1dFZhbHVlO1xyXG5cclxuICAgIC8vIHNpbXVsYXRlIGlucHV0XHJcbiAgICBjb25zdCBpbnB1dHMgPSBtYXNrZWQuY29tcGlsZWRNYXNrcy5tYXAoKG0sIGluZGV4KSA9PiB7XHJcbiAgICAgIG0ucmF3SW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XHJcbiAgICAgIG0uYXBwZW5kKGFwcGVuZGVkLCBmbGFncyk7XHJcbiAgICAgIGNvbnN0IHdlaWdodCA9IG0ucmF3SW5wdXRWYWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgICByZXR1cm4ge3dlaWdodCwgaW5kZXh9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcG9wIG1hc2tzIHdpdGggbG9uZ2VyIHZhbHVlcyBmaXJzdFxyXG4gICAgaW5wdXRzLnNvcnQoKGkxLCBpMikgPT4gaTIud2VpZ2h0IC0gaTEud2VpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gbWFza2VkLmNvbXBpbGVkTWFza3NbaW5wdXRzWzBdLmluZGV4XTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7Z30gZnJvbSAnLi9jb3JlL3V0aWxzLmpzJztcclxuXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAnLi9jb250cm9scy9pbnB1dC5qcyc7XHJcblxyXG5pbXBvcnQgTWFza2VkIGZyb20gJy4vbWFza2VkL2Jhc2UuanMnO1xyXG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL21hc2tlZC9wYXR0ZXJuLmpzJztcclxuaW1wb3J0IE1hc2tlZEVudW0gZnJvbSAnLi9tYXNrZWQvZW51bS5qcyc7XHJcbmltcG9ydCBNYXNrZWRSYW5nZSBmcm9tICcuL21hc2tlZC9yYW5nZS5qcyc7XHJcbmltcG9ydCBNYXNrZWROdW1iZXIgZnJvbSAnLi9tYXNrZWQvbnVtYmVyLmpzJztcclxuaW1wb3J0IE1hc2tlZERhdGUgZnJvbSAnLi9tYXNrZWQvZGF0ZS5qcyc7XHJcbmltcG9ydCBNYXNrZWRSZWdFeHAgZnJvbSAnLi9tYXNrZWQvcmVnZXhwLmpzJztcclxuaW1wb3J0IE1hc2tlZEZ1bmN0aW9uIGZyb20gJy4vbWFza2VkL2Z1bmN0aW9uLmpzJztcclxuaW1wb3J0IE1hc2tlZER5bmFtaWMgZnJvbSAnLi9tYXNrZWQvZHluYW1pYy5qcyc7XHJcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vbWFza2VkL2ZhY3RvcnkuanMnO1xyXG5pbXBvcnQgTWFza0VsZW1lbnQgZnJvbSAnLi9jb250cm9scy9tYXNrLWVsZW1lbnQuanMnO1xyXG5pbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fE1hc2tFbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYXBwbHkgbWFza1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIEN1c3RvbSBtYXNrIG9wdGlvbnNcclxuICogQHJldHVybiB7SW5wdXRNYXNrfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHRcclxuZnVuY3Rpb24gSU1hc2sgKGVsLCBvcHRzPXt9KSB7XHJcblx0Ly8gY3VycmVudGx5IGF2YWlsYWJsZSBvbmx5IGZvciBpbnB1dC1saWtlIGVsZW1lbnRzXHJcbiAgcmV0dXJuIG5ldyBJbnB1dE1hc2soZWwsIG9wdHMpO1xyXG59XHJcblxyXG4vKioge0BsaW5rIElucHV0TWFza30gKi9cclxuSU1hc2suSW5wdXRNYXNrID0gSW5wdXRNYXNrO1xyXG5cclxuLyoqIHtAbGluayBNYXNrZWR9ICovXHJcbklNYXNrLk1hc2tlZCA9IE1hc2tlZDtcclxuLyoqIHtAbGluayBNYXNrZWRQYXR0ZXJufSAqL1xyXG5JTWFzay5NYXNrZWRQYXR0ZXJuID0gTWFza2VkUGF0dGVybjtcclxuLyoqIHtAbGluayBNYXNrZWRFbnVtfSAqL1xyXG5JTWFzay5NYXNrZWRFbnVtID0gTWFza2VkRW51bTtcclxuLyoqIHtAbGluayBNYXNrZWRSYW5nZX0gKi9cclxuSU1hc2suTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcclxuLyoqIHtAbGluayBNYXNrZWROdW1iZXJ9ICovXHJcbklNYXNrLk1hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcclxuLyoqIHtAbGluayBNYXNrZWREYXRlfSAqL1xyXG5JTWFzay5NYXNrZWREYXRlID0gTWFza2VkRGF0ZTtcclxuLyoqIHtAbGluayBNYXNrZWRSZWdFeHB9ICovXHJcbklNYXNrLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcclxuLyoqIHtAbGluayBNYXNrZWRGdW5jdGlvbn0gKi9cclxuSU1hc2suTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcclxuLyoqIHtAbGluayBNYXNrZWREeW5hbWljfSAqL1xyXG5JTWFzay5NYXNrZWREeW5hbWljID0gTWFza2VkRHluYW1pYztcclxuLyoqIHtAbGluayBjcmVhdGVNYXNrfSAqL1xyXG5JTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcclxuLyoqIHtAbGluayBNYXNrRWxlbWVudH0gKi9cclxuSU1hc2suTWFza0VsZW1lbnQgPSBNYXNrRWxlbWVudDtcclxuLyoqIHtAbGluayBIVE1MTWFza0VsZW1lbnR9ICovXHJcbklNYXNrLkhUTUxNYXNrRWxlbWVudCA9IEhUTUxNYXNrRWxlbWVudDtcclxuXHJcbmcuSU1hc2sgPSBJTWFzaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==