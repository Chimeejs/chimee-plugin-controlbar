
/**
 * chimee-plugin-controlbar v0.4.1
 * (c) 2017 yandeqiang
 * Released under ISC
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.chimeePluginControlbar = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

__$styleInject("container{position:relative}container,video{display:block;width:100%;height:100%;background:#000;outline:none}video:focus{outline:none}.chimee-flex-component svg:hover g,.chimee-flex-component svg g{fill:#fff;stroke:#fff}chimee-clarity-list,chimee-control-state-pause,chimee-control-state-play,chimee-progressbar-tip,chimee-screen-full,chimee-screen-small,chimee-volume-state-high,chimee-volume-state-low,chimee-volume-state-mute{display:none}chimee-control.full chimee-screen-full,chimee-control.pause chimee-control-state-pause,chimee-control.play chimee-control-state-play,chimee-control.small chimee-screen-small,chimee-volume.high chimee-volume-state-high,chimee-volume.low chimee-volume-state-low,chimee-volume.mute chimee-volume-state-mute{display:inline-block;width:1.4em;height:100%}chimee-control{display:block;height:100%;line-height:2em;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;font-family:Roboto,Arial,Helvetica,sans-serif;-webkit-transition:visibility .5s ease;transition:visibility .5s ease}chimee-control,chimee-control-wrap{position:absolute;bottom:0;left:0;width:100%}chimee-control-wrap{height:2.2em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;background:rgba(0,0,0,.5);-webkit-transition:bottom .5s ease;transition:bottom .5s ease;pointer-events:auto}.chimee-flex-component{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;height:2em;cursor:pointer}.chimee-flex-component svg{vertical-align:middle;width:2em;height:1.5em}chimee-control-state.chimee-flex-component{-ms-flex-preferred-size:3em;flex-basis:3em;text-align:right;margin-right:1em}chimee-control-state .left,chimee-control-state .right{-webkit-transition:d .2s ease-in-out;transition:d .2s ease-in-out}chimee-progresstime.chimee-flex-component{color:#fff;font-weight:400;text-align:center;white-space:nowrap}chimee-progresstime-pass,chimee-progresstime-total{display:inline}chimee-progressbar.chimee-flex-component{position:relative;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}chimee-progressbar-wrap{display:inline-block;height:100%;position:absolute;left:1em;right:1em;top:0}chimee-progressbar.progressbar-layout-top{position:static}chimee-progressbar.progressbar-layout-top chimee-progressbar-wrap{top:-1.6em;height:1.6em;left:0;right:0}chimee-progressbar.progressbar-layout-top .chimee-progressbar-line{left:0;top:.8em}.chimee-progressbar-line{position:absolute;top:.9em;left:0;display:inline-block;height:3px}chimee-progressbar-bg{width:100%;background:#4c4c4c}chimee-progressbar-buffer{width:0;background:#6f6f6f}chimee-progressbar-all{background:#de698c}chimee-progressbar-ball{content:\"\";position:absolute;right:-.8em;top:-.3em;display:inline-block;width:.8em;height:.8em;border-radius:.8em;background:#fff;pointer-events:none}chimee-progressbar-tip{position:absolute;bottom:.5em;top:-1.5em;left:0;z-index:1;padding:0 .5em;height:1.5em;background:#fff;line-height:1.5em;border-radius:4px;color:#000;text-align:center}chimee-volume.chimee-flex-component{cursor:pointer;padding:0;-ms-flex-preferred-size:7em;flex-basis:7em;white-space:nowrap;margin-right:1em;position:relative}chimee-volume.chimee-flex-component.vertical{padding-right:1em;-ms-flex-preferred-size:2em;flex-basis:2em}chimee-volume-state{display:inline-block;width:2em;vertical-align:top}chimee-volume .line,chimee-volume .ring1,chimee-volume .ring2{stroke-dasharray:150;stroke-dashoffset:150;-webkit-transition:stroke-dashoffset .7s ease-in-out;transition:stroke-dashoffset .7s ease-in-out}chimee-volume.high .ring1,chimee-volume.high .ring2,chimee-volume.low .ring2,chimee-volume.mute .line,chimee-volume.mute .ring1,chimee-volume.mute .ring2{stroke-dashoffset:0}chimee-volume.vertical:hover chimee-volume-bar{display:inline-block}chimee-volume.vertical chimee-volume-bar{position:absolute;top:-7em;left:-.2em;width:2em;height:4em;padding-bottom:3em;display:none;vertical-align:middle}chimee-volume.vertical chimee-volume-bar:before{content:\"\";position:absolute;left:0;right:0;top:0;bottom:1em;background:#212121;border-radius:4px}chimee-volume.vertical chimee-volume-bar-wrap{display:inline-block;position:absolute;bottom:1em;left:0;top:1em;right:0;height:4em}chimee-volume.vertical chimee-volume-bar-all,chimee-volume.vertical chimee-volume-bar-bg{position:absolute;bottom:0;left:1em;display:inline-block;width:2px;border-radius:4px}chimee-volume.vertical chimee-volume-bar-bg{height:4em;background:#4c4c4c;opacity:.5}chimee-volume.vertical chimee-volume-bar-all{background:#de698c}chimee-volume.vertical chimee-volume-bar-all:after{content:\"\";position:absolute;right:-.34em;top:-.4em;display:inline-block;width:.8em;height:.8em;border-radius:.8em;background:#fff;pointer-events:none}chimee-volume.horizonal chimee-volume-bar{position:relative;height:1.2em;width:4em;display:inline-block;vertical-align:middle}chimee-volume.horizonal chimee-volume-bar-all,chimee-volume.horizonal chimee-volume-bar-bg{position:absolute;top:.4em;left:0;display:inline-block;height:2px}chimee-volume.horizonal chimee-volume-bar-bg{width:4em;background:#4c4c4c;opacity:.5}chimee-volume.horizonal chimee-volume-bar-all{background:#de698c}chimee-volume.horizonal chimee-volume-bar-all:after{content:\"\";position:absolute;right:-.4em;top:-.3em;display:inline-block;width:.8em;height:.8em;border-radius:.8em;background:#fff;pointer-events:none}chimee-screen.chimee-flex-component{-ms-flex-preferred-size:3em;flex-basis:3em;text-align:left}chimee-clarity.chimee-flex-component{position:relative;color:#fff;width:6em;height:1.75em;padding:0;padding-right:1em;padding-left:1em;text-align:center;vertical-align:middle;font-size:16px}chimee-clarity.chimee-flex-component:hover chimee-clarity-list{display:inline-block}chimee-clarity.chimee-flex-component svg{width:auto;height:auto}chimee-clarity-list{position:absolute;left:0;bottom:1em;width:100%;padding-bottom:1.5em;opacity:.8;-webkit-box-sizing:content-box;box-sizing:content-box;line-height:0}chimee-clarity-list ul{margin:0;padding:.5em 0;background:#292929;line-height:2em}chimee-clarity-list li{list-style-type:none}chimee-clarity-list li.active,chimee-clarity-list li:hover{color:#de698c}chimee-clarity-list-arrow{position:absolute;bottom:1.5em;width:100%}", undefined);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _redefine = _hide;

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _iterators = {};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

'use strict';



var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

'use strict';









var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

'use strict';
var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

'use strict';





// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

unwrapExports(iterator);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var defineProperty$1$1 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1$1($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

'use strict';
// ECMAScript 6 symbols shim





var META = _meta.KEY;


















var gOPD = _objectGopd.f;
var dP$2 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$2({}, 'a', {
    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$2(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$2(ObjectProto$1, key, protoDesc);
} : dP$2;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$2(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$2(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol$2 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$2, __esModule: true };
});

unwrapExports(symbol);

var _typeof_1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof = unwrapExports(_typeof_1);

// all object keys, includes non-enumerable and symbols



var Reflect = _global.Reflect;
var _ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = _objectGopn.f(_anObject(it));
  var getSymbols = _objectGops.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

'use strict';



var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// https://github.com/tc39/proposal-object-getownpropertydescriptors






_export(_export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = _toIobject(object);
    var getDesc = _objectGopd.f;
    var keys = _ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) _createProperty(result, key, desc);
    }
    return result;
  }
});

var getOwnPropertyDescriptors$2 = _core.Object.getOwnPropertyDescriptors;

var getOwnPropertyDescriptors$1 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyDescriptors$2, __esModule: true };
});

var _Object$getOwnPropertyDescriptors = unwrapExports(getOwnPropertyDescriptors$1);

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

'use strict';









_export(_export.S + _export.F * !_iterDetect(function (iter) {  }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from$1 = _core.Array.from;

var from = createCommonjsModule(function (module) {
module.exports = { "default": from$1, __esModule: true };
});

var _Array$from = unwrapExports(from);

var getOwnPropertySymbols$1 = _core.Object.getOwnPropertySymbols;

var getOwnPropertySymbols = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertySymbols$1, __esModule: true };
});

var _Object$getOwnPropertySymbols = unwrapExports(getOwnPropertySymbols);

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

var $Object = _core.Object;
var getOwnPropertyNames$1 = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};

var getOwnPropertyNames = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyNames$1, __esModule: true };
});

var _Object$getOwnPropertyNames = unwrapExports(getOwnPropertyNames);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object$1 = _core.Object;
var defineProperty$3$1 = function defineProperty(it, key, desc) {
  return $Object$1.defineProperty(it, key, desc);
};

var defineProperty$2$1 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$3$1, __esModule: true };
});

var _Object$defineProperty = unwrapExports(defineProperty$2$1);

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$1 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$1, __esModule: true };
});

var _Object$keys = unwrapExports(keys);

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
  };
});

var $Object$2 = _core.Object;
var getOwnPropertyDescriptor$2$1 = function getOwnPropertyDescriptor(it, key) {
  return $Object$2.getOwnPropertyDescriptor(it, key);
};

var getOwnPropertyDescriptor$1$1 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyDescriptor$2$1, __esModule: true };
});

var _Object$getOwnPropertyDescriptor = unwrapExports(getOwnPropertyDescriptor$1$1);

// 20.1.2.3 Number.isInteger(number)

var floor$1 = Math.floor;
var _isInteger = function isInteger(it) {
  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', { isInteger: _isInteger });

var isInteger$2 = _core.Number.isInteger;

var isInteger$1 = createCommonjsModule(function (module) {
module.exports = { "default": isInteger$2, __esModule: true };
});

unwrapExports(isInteger$1);

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseFloat = _global.parseFloat;
var $trim = _stringTrim.trim;

var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });

var _parseFloat$1 = parseFloat;

var _parseFloat = createCommonjsModule(function (module) {
module.exports = { "default": _parseFloat$1, __esModule: true };
});

unwrapExports(_parseFloat);

/**
 * toxic-predicate-functions v0.1.5
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 */
function isArray$1(arr) {
  return Array.isArray(arr);
}

/**
 * is it a function or not
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * is it an object or not
 */
function isObject$1(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray$1(obj);
}
/**
 * to tell you if it's a real number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * is it a string
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 */
function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}

var toConsumableArray = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _from2 = _interopRequireDefault(from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

/**
 * toxic-utils v0.1.6
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
 */
function genTraversalHandler(fn) {
  function recursiveFn(source, target, key) {
    if (isArray$1(source) || isObject$1(source)) {
      target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
      for (var _key in source) {
        // $FlowFixMe: support computed key here
        target[_key] = recursiveFn(source[_key], target[_key], _key);
      }
      return target;
    }
    return fn(source, target, key);
  }
  return recursiveFn;
}
var _deepAssign = genTraversalHandler(function (val) {
  return val;
});
/**
 * merge multiple objects
 * @param  {...Object} args [description]
 * @return {merge-object}         [description]
 */
function deepAssign() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length < 2) {
    throw new Error('deepAssign accept two and more argument');
  }
  for (var i = args.length - 1; i > -1; i--) {
    if (isPrimitive(args[i])) {
      throw new TypeError('deepAssign only accept non primitive type');
    }
  }
  var target = args.shift();
  args.forEach(function (source) {
    return _deepAssign(source, target);
  });
  return target;
}

/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else if (fn.apply) {
    return function __autobind__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, args);
    };
  } else {
    return function __autobind__() {
      for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
    };
  }
}

/**
 * get an deep property
 */
function getDeepProperty(obj, keys) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$throwError = _ref.throwError,
      throwError = _ref$throwError === undefined ? false : _ref$throwError,
      backup = _ref.backup;

  if (isString(keys)) {
    keys = keys.split('.');
  }
  if (!isArray$1(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  var read = [];
  var target = obj;
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (isVoid(target)) {
      if (throwError) {
        throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}

var ITERATOR$4 = _wks('iterator');

var core_isIterable = _core.isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR$4] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || _iterators.hasOwnProperty(_classof(O));
};

var isIterable$2 = core_isIterable;

var isIterable = createCommonjsModule(function (module) {
module.exports = { "default": isIterable$2, __esModule: true };
});

unwrapExports(isIterable);

var core_getIterator = _core.getIterator = function (it) {
  var iterFn = core_getIteratorMethod(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return _anObject(iterFn.call(it));
};

var getIterator$2 = core_getIterator;

var getIterator = createCommonjsModule(function (module) {
module.exports = { "default": getIterator$2, __esModule: true };
});

unwrapExports(getIterator);

var slicedToArray = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _isIterable3 = _interopRequireDefault(isIterable);



var _getIterator3 = _interopRequireDefault(getIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
});

unwrapExports(slicedToArray);

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf$1 = _core.Object.getPrototypeOf;

var getPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf$1, __esModule: true };
});

var _Object$getPrototypeOf = unwrapExports(getPrototypeOf);

var SPECIES = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

'use strict';
// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var _validateCollection = function (it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

'use strict';

var getWeak = _meta.getWeak;







var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
        return data && _has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(_anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

'use strict';










var dP$3 = _objectDp.f;
var each = _arrayMethods(0);


var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      _anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
        _anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP$3(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var es6_weakMap = createCommonjsModule(function (module) {
'use strict';
var each = _arrayMethods(0);







var WEAK_MAP = 'WeakMap';
var getWeak = _meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = _collectionWeak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (_isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

// IE11 WeakMap frozen keys fix
if (_fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
  _objectAssign(InternalMap.prototype, methods);
  _meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    _redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (_isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

'use strict';
// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function (COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
_setCollectionOf('WeakMap');

'use strict';
// https://tc39.github.io/proposal-setmap-offrom/





var _setCollectionFrom = function (COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    _aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) _aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = _ctx(mapFn, arguments[2], 2);
      _forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      _forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
_setCollectionFrom('WeakMap');

var weakMap$1 = _core.WeakMap;

var weakMap = createCommonjsModule(function (module) {
module.exports = { "default": weakMap$1, __esModule: true };
});

var _WeakMap = unwrapExports(weakMap);

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES$1 = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES$1]) == undefined ? D : _aFunction(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process$1 = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(_ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$2 = _global.process;
var Promise = _global.Promise;
var isNode$2 = _cof(process$2) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$2 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$2) {
    notify = function () {
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

'use strict';
// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$7 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$7
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var _promiseResolve = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

'use strict';




var SPECIES$2 = _wks('species');

var _setSpecies = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
    configurable: true,
    get: function () { return this; }
  });
};

'use strict';










var task = _task.set;
var microtask = _microtask();



var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process = _global.process;
var $Promise = _global[PROMISE];
var isNode$1 = _classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode$1) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(_global, function () {
    var handler;
    if (isNode$1) {
      process.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1 ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

// https://github.com/tc39/proposal-promise-finally
'use strict';






_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor(this, _core.Promise || _global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

'use strict';
// https://github.com/tc39/proposal-promise-try




_export(_export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability.f(this);
  var result = _perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var promise$1 = _core.Promise;

var promise = createCommonjsModule(function (module) {
module.exports = { "default": promise$1, __esModule: true };
});

var _Promise = unwrapExports(promise);

var defineProperty$5$1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$2$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
});

unwrapExports(defineProperty$5$1);

// 19.1.2.15 Object.preventExtensions(O)

var meta = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

var preventExtensions$2 = _core.Object.preventExtensions;

var preventExtensions$1 = createCommonjsModule(function (module) {
module.exports = { "default": preventExtensions$2, __esModule: true };
});

unwrapExports(preventExtensions$1);

/**
 * toxic-decorators v0.3.8
 * (c) 2017 toxic-johann
 * Released under GPL-3.0
 */

var getOwnPropertyDescriptor = _Object$getOwnPropertyDescriptor;
// **********************  对象操作  ************************
/**
 * sort Object attributes by function
 * and transfer them into array
 * @param  {Object} obj Object form from numric
 * @param  {Function} fn sort function
 * @return {Array} the sorted attirbutes array
 */


/**
 * to check if an descriptor
 * @param {anything} desc
 */
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  var keys$$1 = ['value', 'initializer', 'get', 'set'];

  for (var i = 0, l = keys$$1.length; i < l; i++) {
    if (desc.hasOwnProperty(keys$$1[i])) {
      return true;
    }
  }
  return false;
}
/**
 * to check if the descirptor is an accessor descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isAccessorDescriptor(desc) {
  return !!desc && (isFunction(desc.get) || isFunction(desc.set)) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && desc.writable === undefined;
}
/**
 * to check if the descirptor is an data descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isDataDescriptor(desc) {
  return !!desc && desc.hasOwnProperty('value') && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * to check if the descirptor is an initiallizer descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isInitializerDescriptor(desc) {
  return !!desc && isFunction(desc.initializer) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * set one value on the object
 * @param {string} key
 */
function createDefaultSetter(key) {
  return function set(newValue) {
    _Object$defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    });
    return newValue;
  };
}

/**
 * Compress many function into one function, but this function only accept one arguments;
 * @param {Array<Function>} fns the array of function we need to compress into one function
 * @param {string} errmsg When we check that there is something is not function, we will throw an error, you can set your own error message
 */
function compressOneArgFnArray(fns) {
  var errmsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'You must pass me an array of function';

  if (!isArray$1(fns) || fns.length < 1) {
    throw new TypeError(errmsg);
  }
  if (fns.length === 1) {
    if (!isFunction(fns[0])) {
      throw new TypeError(errmsg);
    }
    return fns[0];
  }
  return fns.reduce(function (prev, curr) {
    if (!isFunction(curr) || !isFunction(prev)) throw new TypeError(errmsg);
    return function (value) {
      return bind(curr, this)(bind(prev, this)(value));
    };
  });
}
/**
 * just a method to call console.warn, maybe i will add some handler on it someday
 * @param {anything} args
 */
function warn(message) {
  if (isFunction(console.warn)) return console.warn(message);
  console.log(message);
}

function getOwnKeysFn() {
  var getOwnPropertyNames$$1 = _Object$getOwnPropertyNames,
      getOwnPropertySymbols$$1 = _Object$getOwnPropertySymbols;

  return isFunction(getOwnPropertySymbols$$1) ? function (obj) {
    // $FlowFixMe: do not support symwbol yet
    return _Array$from(getOwnPropertyNames$$1(obj).concat(getOwnPropertySymbols$$1(obj)));
  } : getOwnPropertyNames$$1;
}

var getOwnKeys = getOwnKeysFn();

function getOwnPropertyDescriptorsFn() {
  // $FlowFixMe: In some environment, Object.getOwnPropertyDescriptors has been implemented;
  return isFunction(_Object$getOwnPropertyDescriptors) ? _Object$getOwnPropertyDescriptors : function (obj) {
    return getOwnKeys(obj).reduce(function (descs, key) {
      descs[key] = getOwnPropertyDescriptor(obj, key);
      return descs;
    }, {});
  };
}

var getOwnPropertyDescriptors = getOwnPropertyDescriptorsFn();

function compressMultipleDecorators() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (!fns.length) throw new TypeError('You must pass in decorators in compressMultipleDecorators');
  fns.forEach(function (fn) {
    if (!isFunction(fn)) throw new TypeError('Decorators must be a function, but not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  });
  if (fns.length === 1) return fns[0];
  return function (obj, prop, descirptor) {
    // $FlowFixMe: the reduce will return a descriptor
    return fns.reduce(function (descirptor, fn) {
      return fn(obj, prop, descirptor);
    }, descirptor);
  };
}

function accessor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      get = _ref.get,
      set = _ref.set;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$preGet = _ref2.preGet,
      preGet = _ref2$preGet === undefined ? false : _ref2$preGet,
      _ref2$preSet = _ref2.preSet,
      preSet = _ref2$preSet === undefined ? true : _ref2$preSet;

  if (!isFunction(get) && !isFunction(set) && !(isArray$1(get) && get.length > 0) && !(isArray$1(set) && set.length > 0)) throw new TypeError("@accessor need a getter or setter. If you don't need to add setter/getter. You should remove @accessor");
  var errmsg = '@accessor only accept function or array of function as getter/setter';
  get = isArray$1(get) ? compressOneArgFnArray(get, errmsg) : get;
  set = isArray$1(set) ? compressOneArgFnArray(set, errmsg) : set;
  return function (obj, prop, descriptor) {
    var _ref3 = descriptor || {},
        _ref3$configurable = _ref3.configurable,
        configurable = _ref3$configurable === undefined ? true : _ref3$configurable,
        _ref3$enumerable = _ref3.enumerable,
        enumerable = _ref3$enumerable === undefined ? true : _ref3$enumerable;

    var hasGet = isFunction(get);
    var hasSet = isFunction(set);
    var handleGet = function handleGet(value) {
      // $FlowFixMe: it's really function here
      return hasGet ? bind(get, this)(value) : value;
    };
    var handleSet = function handleSet(value) {
      // $FlowFixMe: it's really function here
      return hasSet ? bind(set, this)(value) : value;
    };
    if (isAccessorDescriptor(descriptor)) {
      var originGet = descriptor.get,
          originSet = descriptor.set;

      var hasOriginGet = isFunction(originGet);
      var hasOriginSet = isFunction(originSet);
      if ("development" !== 'production' && !hasOriginGet && hasGet) {
        warn('You are trying to set getter via @accessor on ' + prop + ' without getter. That\'s not a good idea.');
      }
      if ("development" !== 'production' && !hasOriginSet && hasSet) {
        warn('You are trying to set setter via @accessor on  ' + prop + ' without setter. That\'s not a good idea.');
      }
      var getter = hasOriginGet || hasGet ? function () {
        var _this = this;

        var boundGetter = bind(handleGet, this);
        var originBoundGetter = function originBoundGetter() {
          return hasOriginGet
          // $FlowFixMe: we have do a check here
          ? bind(originGet, _this)() : undefined;
        };
        var order = preGet ? [boundGetter, originBoundGetter] : [originBoundGetter, boundGetter];
        // $FlowFixMe: it's all function here
        return order.reduce(function (value, fn) {
          return fn(value);
        }, undefined);
      } : undefined;
      var setter = hasOriginSet || hasSet ? function (val) {
        var _this2 = this;

        var boundSetter = bind(handleSet, this);
        var originBoundSetter = function originBoundSetter(value) {
          return hasOriginSet
          // $FlowFixMe: flow act like a retarded child on optional property
          ? bind(originSet, _this2)(value) : value;
        };
        var order = preSet ? [boundSetter, originBoundSetter] : [originBoundSetter, boundSetter];
        return order.reduce(function (value, fn) {
          return fn(value);
        }, val);
      } : undefined;
      return {
        get: getter,
        set: setter,
        configurable: configurable,
        enumerable: enumerable
      };
    } else if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: disjoint union is horrible, descriptor is initializerDescriptor now
      var initializer = descriptor.initializer;

      var value = void 0;
      var inited = false;
      return {
        get: function get() {
          var boundFn = bind(handleGet, this);
          if (inited) return boundFn(value);
          value = bind(initializer, this)();
          inited = true;
          return boundFn(value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          value = preSet ? boundFn(val) : val;
          inited = true;
          if (!preSet) {
            boundFn(value);
          }
          return value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    } else {
      // $FlowFixMe: disjoint union is horrible, descriptor is DataDescriptor now
      var _ref4 = descriptor || {},
          _value = _ref4.value;

      return {
        get: function get() {
          return bind(handleGet, this)(_value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          _value = preSet ? boundFn(val) : val;
          if (!preSet) {
            boundFn(_value);
          }
          return _value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    }
  };
}

function before() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@before accept at least one parameter. If you don't need to preprocess before your function, do not add @before decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @before straightly, @before return decorators, you should call it before you set it as decorator.');
  }
  for (var i = fns.length - 1; i > -1; i--) {
    if (!isFunction(fns[i])) throw new TypeError('@before only accept function parameter');
  }
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        fn = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(fn)) throw new TypeError('@before can only be used on function, please check the property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var paras = fns.reduce(function (paras, fn) {
        var result = bind(fn, _this).apply(undefined, _toConsumableArray(paras));
        return result === undefined ? paras : isArray$1(result) ? result
        // $FlowFixMe: what the hell, it can be anything
        : [result];
      }, args);
      return bind(fn, this).apply(undefined, _toConsumableArray(paras));
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function after() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@after accept at least one parameter. If you don't need to preprocess after your function, do not add @after decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may have used @after straightly. @after return decorators. You should call it before you use it as decorators');
  }
  var fn = compressOneArgFnArray(fns, '@after only accept function parameter');
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        value = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(value)) throw new TypeError('@after can only be used on function, please checkout your property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var ret = bind(value, this).apply(undefined, arguments);
      return bind(fn, this)(ret);
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

var defineProperty$1 = _Object$defineProperty;

function classify(decorator) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      requirement = _ref.requirement,
      _ref$customArgs = _ref.customArgs,
      customArgs = _ref$customArgs === undefined ? false : _ref$customArgs;

  return function () {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$exclude = _ref2.exclude,
        exclude = _ref2$exclude === undefined ? [] : _ref2$exclude,
        _ref2$include = _ref2.include,
        include = _ref2$include === undefined ? [] : _ref2$include,
        _ref2$construct = _ref2.construct,
        construct = _ref2$construct === undefined ? false : _ref2$construct,
        _ref2$self = _ref2.self,
        self = _ref2$self === undefined ? false : _ref2$self;

    if (!isArray$1(exclude)) throw new TypeError('options.exclude must be an array');
    if (!isArray$1(include)) throw new TypeError('options.include must be an array');
    return function (Klass) {
      var isClass = isFunction(Klass);
      if (!self && !isClass) throw new TypeError('@' + decorator.name + 'Class can only be used on class');
      if (self && isPrimitive(Klass)) throw new TypeError('@' + decorator.name + 'Class must be used on non-primitive type value in \'self\' mode');
      var prototype = self ? Klass : Klass.prototype;
      if (isVoid(prototype)) throw new Error('The prototype of the ' + Klass.name + ' is empty, please check it');
      var descs = getOwnPropertyDescriptors(prototype);
      getOwnKeys(prototype).concat(include).forEach(function (key) {
        var desc = descs[key];
        if (key === 'constructor' && !construct || self && isClass && ['name', 'length', 'prototype'].indexOf(key) > -1 || exclude.indexOf(key) > -1 || isFunction(requirement) && requirement(prototype, key, desc, { self: self }) === false) return;
        defineProperty$1(prototype, key, (customArgs ? decorator.apply(undefined, _toConsumableArray(args)) : decorator)(prototype, key, desc));
      });
    };
  };
}

var autobindClass = classify(autobind, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  }
});

var mapStore = void 0;
// save bound function for super
function getBoundSuper(obj, fn) {
  if (typeof _WeakMap === 'undefined') {
    throw new Error('Using @autobind on ' + fn.name + '() requires WeakMap support due to its use of super.' + fn.name + '()');
  }

  if (!mapStore) {
    mapStore = new _WeakMap();
  }

  if (mapStore.has(obj) === false) {
    mapStore.set(obj, new _WeakMap());
  }

  var superStore = mapStore.get(obj);
  // $FlowFixMe: already insure superStore is not undefined
  if (superStore.has(fn) === false) {
    // $FlowFixMe: already insure superStore is not undefined
    superStore.set(fn, bind(fn, obj));
  }
  // $FlowFixMe: already insure superStore is not undefined
  return superStore.get(fn);
}
/**
 * auto bind the function on the class, just support function
 * @param {Object} obj Target Object
 * @param {string} prop prop strong
 * @param {Object} descriptor
 */
function autobind(obj, prop, descriptor) {
  if (arguments.length === 1) return autobindClass()(obj);

  var _ref = descriptor || {},
      fn = _ref.value,
      configurable = _ref.configurable;

  if (!isFunction(fn)) {
    throw new TypeError('@autobind can only be used on functions, not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) + ' on property "' + prop + '"');
  }
  var constructor = obj.constructor;

  return {
    configurable: configurable,
    enumerable: false,
    get: function get() {
      var _this = this;

      var boundFn = function boundFn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fn.call.apply(fn, [_this].concat(_toConsumableArray(args)));
      };
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on, i.e. Class.prototype.hasOwnProperty(key)
      if (this === obj) {
        return fn;
      }
      // Someone accesses the property directly on a prototype,
      // but it was found up the chain, not defined directly on it
      // i.e. Class.prototype.hasOwnProperty(key) == false && key in Class.prototype
      if (this.constructor !== constructor && _Object$getPrototypeOf(this).constructor === constructor) {
        return fn;
      }

      // Autobound method calling super.sameMethod() which is also autobound and so on.
      if (this.constructor !== constructor && prop in this.constructor.prototype) {
        return getBoundSuper(this, fn);
      }
      _Object$defineProperty(this, prop, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn
      });

      return boundFn;
    },

    set: createDefaultSetter(prop)
  };
}

var getOwnPropertyDescriptor$2 = _Object$getOwnPropertyDescriptor;
var defineProperty$3 = _Object$defineProperty;

function waituntil(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other;

  if (!isFunction(key) && !isPromise(key) && !isString(key)) throw new TypeError('@waitUntil only accept Function, Promise or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@waituntil can only be used on function, but not ' + _value + ' on property "' + prop + '"');
    var binded = false;
    var waitingQueue = [];
    var canIRun = isPromise(key) ? function () {
      return key;
    } : isFunction(key) ? key : function () {
      // $FlowFixMe: We have use isPromise to exclude
      var keys$$1 = key.split('.');
      var prop = keys$$1.slice(-1);
      var originTarget = isPrimitive(other) ? this : other;
      if (!binded) {
        var target = getDeepProperty(originTarget, keys$$1.slice(0, -1));
        if (isVoid(target)) return target;
        var _descriptor = getOwnPropertyDescriptor$2(target, prop);
        /**
         * create a setter hook here
         * when it get ture, it will run all function in waiting queue immediately
         */
        var set = function set(value) {
          if (value === true) {
            while (waitingQueue.length > 0) {
              waitingQueue[0]();
              waitingQueue.shift();
            }
          }
          return value;
        };
        var desc = isDescriptor(_descriptor) ? accessor({ set: set })(target, prop, _descriptor) : accessor({ set: set })(target, prop, {
          value: undefined,
          configurable: true,
          enumerable: true,
          writable: true
        });
        defineProperty$3(target, prop, desc);
        binded = true;
      }
      return getDeepProperty(originTarget, keys$$1);
    };
    return {
      value: function value() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var boundFn = bind(_value, this);
        var runnable = bind(canIRun, this).apply(undefined, args);
        if (isPromise(runnable)) {
          return _Promise.resolve(runnable).then(function () {
            return bind(_value, _this).apply(undefined, args);
          });
        } else if (runnable === true) {
          return bind(_value, this).apply(undefined, args);
        } else {
          return new _Promise(function (resolve) {
            var cb = function cb() {
              boundFn.apply(undefined, args);
              resolve();
            };
            waitingQueue.push(cb);
          });
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

var defineProperty$6 = _Object$defineProperty;
var getOwnPropertyDescriptor$3 = _Object$getOwnPropertyDescriptor;


function applyDecorators(Class, props) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$self = _ref.self,
      self = _ref$self === undefined ? false : _ref$self,
      _ref$omit = _ref.omit,
      omit = _ref$omit === undefined ? false : _ref$omit;

  var isPropsFunction = isFunction(props);
  if (isPropsFunction || isArray$1(props)) {
    // apply decorators on class
    if (!isFunction(Class)) throw new TypeError('If you want to decorator class, you must pass it a legal class');
    // $FlowFixMe: Terrible union, it's function now
    if (isPropsFunction) props(Class);else {
      // $FlowFixMe: Terrible union, it's array now
      for (var i = 0, len = props.length; i < len; i++) {
        // $FlowFixMe: Terrible union, it's array now
        var fn = props[i];
        if (!isFunction(fn)) throw new TypeError('If you want to decorate an class, you must pass it function or array of function');
        fn(Class);
      }
    }
    return Class;
  }
  if (!self && !isFunction(Class)) throw new TypeError('applyDecorators only accept class as first arguments. If you want to modify instance, you should set options.self true.');
  if (self && isPrimitive(Class)) throw new TypeError("We can't apply docorators on a primitive value, even in self mode");
  if (!isObject$1(props)) throw new TypeError('applyDecorators only accept object as second arguments');
  var prototype = self ? Class : Class.prototype;
  if (isVoid(prototype)) throw new Error('The class muse have a prototype, please take a check');
  for (var key in props) {
    var value = props[key];
    var decorators = isArray$1(value) ? value : [value];
    var handler = void 0;
    try {
      handler = compressMultipleDecorators.apply(undefined, _toConsumableArray(decorators));
    } catch (err) {
      /* istanbul ignore else  */
      warn(err && err.message);
      throw new Error('The decorators set on props must be Function or Array of Function');
    }
    var descriptor = getOwnPropertyDescriptor$3(prototype, key);
    if (descriptor && !descriptor.configurable) {
      if (!omit) throw new Error(key + ' of ' + prototype + ' is unconfigurable');
      continue;
    }
    defineProperty$6(prototype, key, handler(prototype, key, descriptor));
  }
  return Class;
}

function runnable(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other,
      backup = _ref.backup;

  if (!isFunction(key) && !isString(key)) throw new TypeError('@runnable only accept Function or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@runnable can only be used on method, but not ' + _value + ' on property "' + prop + '".');
    var canIRun = isFunction(key) ? key : function () {
      var keys$$1 = key.split('.');
      var originTarget = isPrimitive(other) ? this : other;
      return getDeepProperty(originTarget, keys$$1);
    };
    backup = isFunction(backup) ? backup : function () {};
    return {
      value: function value() {
        if (bind(canIRun, this).apply(undefined, arguments) === true) {
          return bind(_value, this).apply(undefined, arguments);
        } else {
          // $FlowFixMe: I have reassign it when it's not a function
          return bind(backup, this).apply(undefined, arguments);
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

var before$1 = classify(before, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var after$1 = classify(after, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var runnable$1 = classify(runnable, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var waituntil$1 = classify(waituntil, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var classCallCheck = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck);

var createClass = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$2$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass);

/**
 * chimee-helper-log v0.1.2
 * (c) 2017 toxic-johann
 * Released under MIT
 */

function formatter(tag, msg) {
  if (!isString(tag)) throw new TypeError('Log\'s method only acccept string as argument, but not ' + tag + ' in ' + (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)));
  if (!isString(msg)) return '[' + Log.GLOBAL_TAG + '] > ' + tag;
  tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
  return '[' + tag + '] > ' + msg;
}
/**
 * Log Object
 */

var Log = function () {
  function Log() {
    _classCallCheck(this, Log);
  }

  _createClass(Log, null, [{
    key: 'error',

    /**
     * equal to console.error, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */
    value: function error(tag, msg) {
      if (!Log.ENABLE_ERROR) {
        return;
      }

      (console.error || console.warn || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.info, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {string}
     */

  }, {
    key: 'info',
    value: function info(tag, msg) {
      if (!Log.ENABLE_INFO) {
        return;
      }
      (console.info || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.warn, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'warn',
    value: function warn(tag, msg) {
      if (!Log.ENABLE_WARN) {
        return;
      }
      (console.warn || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.debug, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'debug',
    value: function debug(tag, msg) {
      if (!Log.ENABLE_DEBUG) {
        return;
      }
      (console.debug || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.verbose, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'verbose',
    value: function verbose(tag, msg) {
      if (!Log.ENABLE_VERBOSE) {
        return;
      }
      console.log(formatter(tag, msg));
    }
  }]);

  return Log;
}();

Log.GLOBAL_TAG = 'chimee';
Log.FORCE_GLOBAL_TAG = false;
Log.ENABLE_ERROR = true;
Log.ENABLE_INFO = true;
Log.ENABLE_WARN = true;
Log.ENABLE_DEBUG = true;
Log.ENABLE_VERBOSE = true;

var uaParser = createCommonjsModule(function (module, exports) {
/**
 * UAParser.js v0.7.17
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.17',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            //var result = {},
            var i = 0, j, k, p, q, matches, match;//, args = arguments;

            /*// construct object barebones
            for (p = 0; p < args[1].length; p++) {
                q = args[1][p];
                result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
            }*/

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            // console.log(this);
            //return this;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p)/i                                                      // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)\s/i                                          // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel xl|pixel)\s/i                                   // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,    // Xiaomi Mi
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i      // Redmi Phones
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i          // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu Tablet
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Venue[\d\s]*)\s+build/i                          // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i                        // ZTE K Series Tablet
            ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i          // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?.+)\s+build/i                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?.+)\s+build/i                         // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i             // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q.+)\s+build/i                           // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /(android.+)[;\/].+build/i                                          // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]


        /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                  // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i                 // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    /*
    var Browser = function (name, version) {
        this[NAME] = name;
        this[VERSION] = version;
    };
    var CPU = function (arch) {
        this[ARCHITECTURE] = arch;
    };
    var Device = function (vendor, model, type) {
        this[VENDOR] = vendor;
        this[MODEL] = model;
        this[TYPE] = type;
    };
    var Engine = Browser;
    var OS = Browser;
    */
    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
        //var browser = new Browser();
        //var cpu = new CPU();
        //var device = new Device();
        //var engine = new Engine();
        //var os = new OS();

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            //browser = new Browser();
            //cpu = new CPU();
            //device = new Device();
            //engine = new Engine();
            //os = new OS();
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };
    //UAParser.Utils = util;

    ///////////
    // Export
    //////////


    // check js environment
    if ('object' !== UNDEF_TYPE) {
        // nodejs env
        if ('object' !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        // TODO: test!!!!!!!!
        /*
        if (require && require.main === module && process) {
            // cli
            var jsonize = function (arr) {
                var res = [];
                for (var i in arr) {
                    res.push(new UAParser(arr[i]).getResult());
                }
                process.stdout.write(JSON.stringify(res, null, 2) + '\n');
            };
            if (process.stdin.isTTY) {
                // via args
                jsonize(process.argv.slice(2));
            } else {
                // via pipe
                var str = '';
                process.stdin.on('readable', function() {
                    var read = process.stdin.read();
                    if (read !== null) {
                        str += read;
                    }
                });
                process.stdin.on('end', function () {
                    jsonize(str.replace(/\n$/, '').split('\n'));
                });
            }
        }
        */
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(undefined) === FUNC_TYPE && undefined.amd) {
            undefined(function () {
                return UAParser;
            });
        } else if (window) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : commonjsGlobal);
});

/**
 * chimee-helper-utils v0.2.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

// **********************  judgement   ************************
/**
 * check if the code running in browser environment (not include worker env)
 * @returns {Boolean}
 */
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// 根据要求的位数，将9格式化为 09\009\0009...
function strRepeat(num, bit) {
  var pBit = bit;
  num = '' + (num || '');
  var numLen = num.length;
  bit = (bit || numLen) - numLen;
  var paddingStr = bit > 0 ? num.repeat ? '0'.repeat(bit) : new Array(bit + 1).join('0') : '';
  return (paddingStr + num).slice(0, pBit);
}

// video 时间格式化
function formatTime(time) {
  var hh = Math.floor(time / 3600);
  time = Math.floor(time % 3600);
  var mm = strRepeat(Math.floor(time / 60), 2);
  time = Math.floor(time % 60);
  var ss = strRepeat(time, 2);
  return hh >= 1 ? hh + ':' + mm + ':' + ss : mm + ':' + ss;
}

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$1 = _core.Object.assign;

var assign = createCommonjsModule(function (module) {
module.exports = { "default": assign$1, __esModule: true };
});

var _Object$assign = unwrapExports(assign);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object$3 = _core.Object;
var create$1 = function create(P, D) {
  return $Object$3.create(P, D);
};

var create = createCommonjsModule(function (module) {
module.exports = { "default": create$1, __esModule: true };
});

var _Object$create = unwrapExports(create);

/**
 * chimee-helper-events v0.1.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
* @module event
* @author huzunjie
* @description 自定义事件基础类
*/

/* 缓存事件监听方法及包装，内部数据格式：
 * targetIndex_<type:'click|mouseup|done'>: [ [
 *   function(){ ... handler ... },
 *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
 *   isOnce
 * ]]
 */
var _evtListenerCache = _Object$create(null);
_evtListenerCache.count = 0;

/**
 * 得到某对象的某事件类型对应的监听队列数组
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
 * @return {Array}
 */
function getEvtTypeCache(target, type) {

  var evtId = target.__evt_id;
  if (!evtId) {

    /* 设置__evt_id不可枚举 */
    Object.defineProperty(target, '__evt_id', {
      writable: true,
      enumerable: false,
      configurable: true
    });

    /* 空对象初始化绑定索引 */
    evtId = target.__evt_id = ++_evtListenerCache.count;
  }

  var typeCacheKey = evtId + '_' + type;
  var evtTypeCache = _evtListenerCache[typeCacheKey];
  if (!evtTypeCache) {
    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
  }

  return evtTypeCache;
}

/**
 * 触发事件监听方法
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Object} eventObj 触发事件时要传回的event对象
 * @return {undefined}
 */
function emitEventCache(target, type, eventObj) {
  var evt = _Object$create(null);
  evt.type = type;
  evt.target = target;
  if (eventObj) {
    _Object$assign(evt, isObject$1(eventObj) ? eventObj : { data: eventObj });
  }
  getEvtTypeCache(target, type).forEach(function (item) {
    (item[1] || item[0]).apply(target, [evt]);
  });
}

/**
 * 添加事件监听到缓存
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @param {Boolean} isOnce 是否单次执行
 * @param {Function} handlerWrap
 * @return {undefined}
 */
function addEventCache(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var handlerWrap = arguments[4];

  if (isFunction(isOnce) && !handlerWrap) {
    handlerWrap = isOnce;
    isOnce = undefined;
  }
  var handlers = [handler, undefined, isOnce];
  if (isOnce && !handlerWrap) {
    handlerWrap = function handlerWrap() {
      removeEventCache(target, type, handler, isOnce);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(target, args);
    };
  }
  if (handlerWrap) {
    handlers[1] = handlerWrap;
  }
  getEvtTypeCache(target, type).push(handlers);
}

/**
 * 移除事件监听
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @return {undefined}
 */
function removeEventCache(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var typeCache = getEvtTypeCache(target, type);

  if (handler || isOnce) {
    /* 有指定 handler 则清除对应监听 */
    var handlerId = -1;
    var handlerWrap = void 0;
    typeCache.find(function (item, i) {
      if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
        handlerId = i;
        handlerWrap = item[1];
        return true;
      }
    });
    if (handlerId !== -1) {
      typeCache.splice(handlerId, 1);
    }
    return handlerWrap;
  } else {
    /* 未指定 handler 则清除type对应的所有监听 */
    typeCache.length = 0;
  }
}

/**
 * @class CustEvent
 * @description
 * Event 自定义事件类
 * 1. 可以使用不传参得到的实例作为eventBus使用
 * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
 * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
 * @param  {Object}  target 发生事件的对象（空则默认为event实例）
 * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
 * @return {event}
 */
var CustEvent = function () {
  function CustEvent(target, assign$$1) {
    var _this = this;

    _classCallCheck(this, CustEvent);

    /* 设置__target不可枚举 */
    Object.defineProperty(this, '__target', {
      writable: true,
      enumerable: false,
      configurable: true
    });
    this.__target = this;

    if (target) {

      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
        throw new Error('CusEvent target are not object');
      }
      this.__target = target;

      /* 为target实现on\once\off\emit */
      if (assign$$1) {
        ['on', 'once', 'off', 'emit'].forEach(function (mth) {
          target[mth] = _this[mth];
        });
      }
    }
  }

  /**
   * 添加事件监听
   * @param {String} type 事件类型
   * @param {Function} handler 监听函数
   * @param {Boolean} isOnce 单次监听类型
   * @return {event}
   */


  _createClass(CustEvent, [{
    key: 'on',
    value: function on(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      addEventCache(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 添加事件监听,并且只执行一次
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数
     * @return {event}
     */

  }, {
    key: 'once',
    value: function once(type, handler) {
      return this.on(type, handler, true);
    }

    /**
     * 移除事件监听
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
     * @param {Boolean} isOnce 单次监听类型
     * @return {event}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      removeEventCache(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 触发事件监听函数
     * @param {String} type 事件类型
     * @return {event}
     */

  }, {
    key: 'emit',
    value: function emit(type, data) {
      emitEventCache(this.__target, type, { data: data });
      return this;
    }
  }]);

  return CustEvent;
}();

/**
 * chimee-helper-dom v0.1.4
 * (c) 2017 huzunjie
 * Released under MIT
 */

/**
 * chimee-helper-events v0.1.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
* @module event
* @author huzunjie
* @description 自定义事件基础类
*/

/* 缓存事件监听方法及包装，内部数据格式：
 * targetIndex_<type:'click|mouseup|done'>: [ [
 *   function(){ ... handler ... },
 *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
 *   isOnce
 * ]]
 */
var _evtListenerCache$1 = _Object$create(null);
_evtListenerCache$1.count = 0;

/**
 * 得到某对象的某事件类型对应的监听队列数组
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
 * @return {Array}
 */
function getEvtTypeCache$1(target, type) {

  var evtId = target.__evt_id;
  if (!evtId) {

    /* 设置__evt_id不可枚举 */
    Object.defineProperty(target, '__evt_id', {
      writable: true,
      enumerable: false,
      configurable: true
    });

    /* 空对象初始化绑定索引 */
    evtId = target.__evt_id = ++_evtListenerCache$1.count;
  }

  var typeCacheKey = evtId + '_' + type;
  var evtTypeCache = _evtListenerCache$1[typeCacheKey];
  if (!evtTypeCache) {
    evtTypeCache = _evtListenerCache$1[typeCacheKey] = [];
  }

  return evtTypeCache;
}

/**
 * 触发事件监听方法
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Object} eventObj 触发事件时要传回的event对象
 * @return {undefined}
 */
function emitEventCache$1(target, type, eventObj) {
  var evt = _Object$create(null);
  evt.type = type;
  evt.target = target;
  if (eventObj) {
    _Object$assign(evt, isObject$1(eventObj) ? eventObj : { data: eventObj });
  }
  getEvtTypeCache$1(target, type).forEach(function (item) {
    (item[1] || item[0]).apply(target, [evt]);
  });
}

/**
 * 添加事件监听到缓存
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @param {Boolean} isOnce 是否单次执行
 * @param {Function} handlerWrap
 * @return {undefined}
 */
function addEventCache$1(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var handlerWrap = arguments[4];

  if (isFunction(isOnce) && !handlerWrap) {
    handlerWrap = isOnce;
    isOnce = undefined;
  }
  var handlers = [handler, undefined, isOnce];
  if (isOnce && !handlerWrap) {
    handlerWrap = function handlerWrap() {
      removeEventCache$1(target, type, handler, isOnce);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(target, args);
    };
  }
  if (handlerWrap) {
    handlers[1] = handlerWrap;
  }
  getEvtTypeCache$1(target, type).push(handlers);
}

/**
 * 移除事件监听
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @return {undefined}
 */
function removeEventCache$1(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var typeCache = getEvtTypeCache$1(target, type);

  if (handler || isOnce) {
    /* 有指定 handler 则清除对应监听 */
    var handlerId = -1;
    var handlerWrap = void 0;
    typeCache.find(function (item, i) {
      if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
        handlerId = i;
        handlerWrap = item[1];
        return true;
      }
    });
    if (handlerId !== -1) {
      typeCache.splice(handlerId, 1);
    }
    return handlerWrap;
  } else {
    /* 未指定 handler 则清除type对应的所有监听 */
    typeCache.length = 0;
  }
}

/**
 * @class CustEvent
 * @description
 * Event 自定义事件类
 * 1. 可以使用不传参得到的实例作为eventBus使用
 * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
 * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
 * @param  {Object}  target 发生事件的对象（空则默认为event实例）
 * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
 * @return {event}
 */
var CustEvent$1 = function () {
  function CustEvent(target, assign$$1) {
    var _this = this;

    _classCallCheck(this, CustEvent);

    /* 设置__target不可枚举 */
    Object.defineProperty(this, '__target', {
      writable: true,
      enumerable: false,
      configurable: true
    });
    this.__target = this;

    if (target) {

      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
        throw new Error('CusEvent target are not object');
      }
      this.__target = target;

      /* 为target实现on\once\off\emit */
      if (assign$$1) {
        ['on', 'once', 'off', 'emit'].forEach(function (mth) {
          target[mth] = _this[mth];
        });
      }
    }
  }

  /**
   * 添加事件监听
   * @param {String} type 事件类型
   * @param {Function} handler 监听函数
   * @param {Boolean} isOnce 单次监听类型
   * @return {event}
   */


  _createClass(CustEvent, [{
    key: 'on',
    value: function on(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      addEventCache$1(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 添加事件监听,并且只执行一次
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数
     * @return {event}
     */

  }, {
    key: 'once',
    value: function once(type, handler) {
      return this.on(type, handler, true);
    }

    /**
     * 移除事件监听
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
     * @param {Boolean} isOnce 单次监听类型
     * @return {event}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      removeEventCache$1(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 触发事件监听函数
     * @param {String} type 事件类型
     * @return {event}
     */

  }, {
    key: 'emit',
    value: function emit(type, data) {
      emitEventCache$1(this.__target, type, { data: data });
      return this;
    }
  }]);

  return CustEvent;
}();

/**
 * chimee-helper-utils v0.2.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

// **********************  judgement   ************************
/**
 * check if the code running in browser environment (not include worker env)
 * @returns {Boolean}
 */
var inBrowser$1 = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// **********************  对象操作  ************************
/**
 * 转变一个类数组对象为数组
 */
function makeArray$1(obj) {
  return _Array$from(obj);
}

/**
* @module dom
* @author huzunjie
* @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
*/

var _divEl = document.createElement('div');
var _textAttrName = 'innerText';
'textContent' in _divEl && (_textAttrName = 'textContent');
var _arrPrototype = Array.prototype;

/**
 * 读取HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @return {String}
 */
function getAttr(el, attrName) {
  return el.getAttribute(attrName);
}

/**
 * 设置HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @param {String} attrVal 目标属性值
 */
function setAttr(el, attrName, attrVal) {
  if (attrVal === undefined) {
    el.removeAttribute(attrName);
  } else {
    el.setAttribute(attrName, attrVal);
  }
}

/**
 * 为HTML元素添加className
 * @param {HTMLElement} el 目标元素
 * @param {String} cls 要添加的className（多个以空格分割）
 */
function addClassName(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  var clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(function (c) {
      return el.classList.add(c);
    });
  } else {
    var curCls = ' ' + (el.className || '') + ' ';
    clsArr.forEach(function (c) {
      curCls.indexOf(' ' + c + ' ') === -1 && (curCls += ' ' + c);
    });
    el.className = curCls.trim();
  }
}

/**
 * 为HTML元素移除className
 * @param {HTMLElement} el 目标元素
 * @param {String} cls 要移除的className（多个以空格分割）
 */
function removeClassName(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  var clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(function (c) {
      return el.classList.remove(c);
    });
  } else {
    var curCls = ' ' + el.className + ' ';
    clsArr.forEach(function (c) {
      var tar = ' ' + c + ' ';
      while (curCls.indexOf(tar) !== -1) {
        curCls = curCls.replace(tar, ' ');
      }
    });
    el.className = curCls.trim();
  }
}

/**
 * 检查HTML元素是否已设置className
 * @param {HTMLElement} el 目标元素
 * @param {String} className 要检查的className
 * @return {Boolean}
 */
function hasClassName(el, className) {
  return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
}

/**
 * 为HTML元素移除事件监听
 * @param {HTMLElement} el 目标元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} once 是否只监听一次
 * @param {Boolean} capture 是否在捕获阶段的监听
 */
function removeEvent(el, type, handler) {
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (once) {
    /* 尝试从缓存中读取包装后的方法 */
    var handlerWrap = removeEventCache$1(el, type + '_once', handler);
    if (handlerWrap) {
      handler = handlerWrap;
    }
  }
  el.removeEventListener(type, handler, capture);
}

/**
 * 为HTML元素添加事件监听
 * @param {HTMLElement} el 目标元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} once 是否只监听一次
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function addEvent(el, type, handler) {
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (once) {
    var oldHandler = handler;
    handler = function () {
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        oldHandler.apply(this, args);
        removeEvent(el, type, handler, once, capture);
      };
    }();
    /* 将包装后的方法记录到缓存中 */
    addEventCache$1(el, type + '_once', oldHandler, handler);
  }

  el.addEventListener(type, handler, capture);
}

/**
 * 为HTML元素添加事件代理
 * @param {HTMLElement} el 目标元素
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function addDelegate(el, selector, type, handler) {
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;


  var handlerWrap = function handlerWrap(e) {
    var targetElsArr = findParents(e.target || e.srcElement, el, true);
    var targetElArr = query(selector, el, true);
    var retEl = void 0;
    if (targetElArr.find) {
      retEl = targetElArr.find(function (seEl) {
        return targetElsArr.find(function (tgEl) {
          return seEl === tgEl;
        });
      });
    } else {
      // Fixed IE11 Array.find not defined bug
      targetElArr.forEach(function (seEl) {
        return !retEl && targetElsArr.forEach(function (tgEl) {
          if (!retEl && seEl === tgEl) {
            retEl = tgEl;
          }
        });
      });
    }
    retEl && handler.apply(retEl, arguments);
  };
  /* 将包装后的方法记录到缓存中 */
  addEventCache$1(el, type + '_delegate_' + selector, handler, handlerWrap);
  el.addEventListener(type, handlerWrap, capture);
}

/**
 * 为HTML元素移除事件代理
 * @param {HTMLElement} el 目标元素
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function removeDelegate(el, selector, type, handler) {
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  /* 尝试从缓存中读取包装后的方法 */
  var handlerWrap = removeEventCache$1(el, type + '_delegate_' + selector, handler);
  handlerWrap && el.removeEventListener(type, handlerWrap, capture);
}

/**
 * 读取HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @return {String}
 */
function getStyle(el, key) {
  return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
}

/**
 * 设置HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @param {String} val 样式值
 */
function setStyle(el, key, val) {
  if (isObject$1(key)) {
    for (var k in key) {
      setStyle(el, k, key[k]);
    }
  } else {
    el.style[key] = val;
  }
}

/**
 * 根据选择器查询目标元素
 * @param {String} selector 选择器,用于 querySelectorAll
 * @param {HTMLElement} container 父容器
 * @param {Boolean} toArray 强制输出为数组
 * @return {NodeList|Array}
 */
function query(selector) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var toArray = arguments[2];

  var retNodeList = container.querySelectorAll(selector);
  return toArray ? _Array$from(retNodeList) : retNodeList;
}

/**
 * 从DOM树中移除el
 * @param {HTMLElement} el 目标元素
 */
function removeEl(el) {
  el.parentNode.removeChild(el);
}

/**
 * 查找元素的父节点们
 * @param {HTMLElement} el 目标元素
 * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
 * @param {Boolean} haveEl 包含当前元素
 * @param {Boolean} haveEndEl 包含设定的最大父容器
 */
function findParents(el) {
  var endEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var haveEl = arguments[2];
  var haveEndEl = arguments[3];

  var retEls = [];
  if (haveEl) {
    retEls.push(el);
  }
  while (el && el.parentNode !== endEl) {
    el = el.parentNode;
    el && retEls.push(el);
  }
  if (haveEndEl) {
    retEls.push(endEl);
  }
  return retEls;
}

/**
 * 根据选择器查询并得到目标元素的wrap包装器
 * @param {String} selector 选择器,另外支持 HTMLString||NodeList||NodeArray||HTMLElement
 * @param {HTMLElement} container 父容器
 * @return {Object}
 */
function $(selector, container) {
  return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
}

/**
 * @class NodeWrap
 * @description
 * NodeWrap DOM包装器，用以实现基本的链式操作
 * new dom.NodeWrap('*') 相当于 dom.$('*')
 * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
 * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
 * @param {HTMLElement} container 父容器（默认为document）
 */

var NodeWrap = function () {
  function NodeWrap(selector) {
    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, NodeWrap);

    var _this = this;
    _this.selector = selector;

    /* String||NodeList||HTMLElement 识别处理 */
    var elsArr = void 0;
    if (selector && selector.constructor === NodeList) {
      /* 支持直接传入NodeList来构建包装器 */
      elsArr = makeArray$1(selector);
    } else if (isArray$1(selector)) {
      /* 支持直接传入Node数组来构建包装器 */
      elsArr = selector;
    } else if (isString(selector)) {
      if (selector.indexOf('<') === 0) {
        /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
        _divEl.innerHTML = selector;
        elsArr = query('*', _divEl, true);
      } else {
        /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
        elsArr = query(selector, container, true);
      }
    } else {
      /* 其他任意对象直接构建包装器 */
      elsArr = [selector];
    }
    _Object$assign(_this, elsArr);

    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
    _this.length = elsArr.length;
  }

  /**
   * 循环遍历DOM集合
   * @param {Function} fn 遍历函数 fn(item, i)
   * @return {Object}
   */


  _createClass(NodeWrap, [{
    key: 'each',
    value: function each() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _arrPrototype.forEach.apply(this, args);
      return this;
    }
  }, {
    key: 'push',


    /**
     * 添加元素到DOM集合
     * @param {HTMLElement} el 要加入的元素
     * @return {this}
     */
    value: function push() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      _arrPrototype.push.apply(this, args);
      return this;
    }
  }, {
    key: 'splice',


    /**
     * 截取DOM集合片段，并得到新的包装器splice
     * @param {Nubmer} start
     * @param {Nubmer} count
     * @return {NodeWrap} 新的DOM集合包装器
     */
    value: function splice() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return $(_arrPrototype.splice.apply(this, args));
    }
  }, {
    key: 'find',


    /**
     * 查找子元素
     * @param {String} selector 选择器
     * @return {NodeWrap} 新的DOM集合包装器
     */
    value: function find(selector) {
      var childs = [];
      this.each(function (el) {
        childs = childs.concat(query(selector, el, true));
      });
      var childsWrap = $(childs);
      childsWrap.parent = this;
      childsWrap.selector = selector;
      return childsWrap;
    }

    /**
     * 添加子元素
     * @param {HTMLElement} childEls 要添加的HTML元素
     * @return {this}
     */

  }, {
    key: 'append',
    value: function append(childEls) {
      var childsWrap = $(childEls);
      var firstEl = this[0];
      childsWrap.each(function (newEl) {
        return firstEl.appendChild(newEl);
      });
      return this;
    }

    /**
     * 将元素集合添加到指定容器
     * @param {HTMLElement} parentEl 要添加到父容器
     * @return {this}
     */

  }, {
    key: 'appendTo',
    value: function appendTo(parentEl) {
      $(parentEl).append(this);
      return this;
    }

    /**
     * DOM集合text内容读写操作
     * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'text',
    value: function text(val) {
      if (arguments.length === 0) {
        return this[0][_textAttrName];
      }
      return this.each(function (el) {
        el[_textAttrName] = val;
      });
    }

    /**
     * DOM集合HTML内容读写操作
     * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'html',
    value: function html(_html) {
      if (arguments.length === 0) {
        return this[0].innerHTML;
      }
      return this.each(function (el) {
        el.innerHTML = _html;
      });
    }

    /**
     * DOM集合属性读写操作
     * @param {String} name 属性名称
     * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'attr',
    value: function attr(name, val) {
      if (arguments.length === 1) {
        return getAttr(this[0], name);
      }
      return this.each(function (el) {
        return setAttr(el, name, val);
      });
    }

    /**
     * DOM集合dataset读写操作
     * @param {String} key 键名
     * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'data',
    value: function data(key, val) {
      if (arguments.length === 0) {
        return this[0].dataset || {};
      }
      if (arguments.length === 1) {
        return (this[0].dataset || {})[key];
      }
      return this.each(function (el) {
        (el.dataset || (el.dataset = {}))[key] = val;
      });
    }

    /**
     * DOM集合样式读写操作
     * @param {String} key 样式key
     * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'css',
    value: function css(key, val) {
      if (arguments.length === 1 && !isObject$1(key)) {
        return getStyle(this[0], key);
      }
      return this.each(function (el) {
        return setStyle(el, key, val);
      });
    }

    /**
     * 为DOM集合增加className
     * @param {String} cls 要增加的className
     * @return {this}
     */

  }, {
    key: 'addClass',
    value: function addClass(cls) {
      return this.each(function (el) {
        return addClassName(el, cls);
      });
    }

    /**
     * 移除当前DOM集合的className
     * @param {String} cls 要移除的className
     * @return {this}
     */

  }, {
    key: 'removeClass',
    value: function removeClass(cls) {
      return this.each(function (el) {
        return removeClassName(el, cls);
      });
    }

    /**
     * 检查索引0的DOM是否有className
     * @param {String} cls 要检查的className
     * @return {this}
     */

  }, {
    key: 'hasClass',
    value: function hasClass(cls) {
      return hasClassName(this[0], cls);
    }

    /**
     * 为DOM集合添加事件监听
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} once 是否只监听一次
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'on',
    value: function on(type, handler) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return addEvent(el, type, handler, once, capture);
      });
    }

    /**
     * 为DOM集合解除事件监听
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} once 是否只监听一次
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return removeEvent(el, type, handler, once, capture);
      });
    }

    /**
     * 为DOM集合绑定事件代理
     * @param {String} selector 目标子元素选择器
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'delegate',
    value: function delegate(selector, type, handler) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return addDelegate(el, selector, type, handler, capture);
      });
    }

    /**
     * 为DOM集合解绑事件代理
     * @param {String} selector 目标子元素选择器
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'undelegate',
    value: function undelegate(selector, type, handler) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return removeDelegate(el, selector, type, handler, capture);
      });
    }

    /**
     * 从DOM树中移除
     * @return {this}
     */

  }, {
    key: 'remove',
    value: function remove() {
      return this.each(function (el) {
        return removeEl(el);
      });
    }
  }]);

  return NodeWrap;
}();

/**
 * chimee-helper v0.2.6
 * (c) 2017 toxic-johann
 * Released under MIT
 */

var possibleConstructorReturn = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

var get = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _getOwnPropertyDescriptor2 = _interopRequireDefault(getOwnPropertyDescriptor$1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
});

var _get = unwrapExports(get);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf$2 = _core.Object.setPrototypeOf;

var setPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf$2, __esModule: true };
});

unwrapExports(setPrototypeOf);

var inherits = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



var _create2 = _interopRequireDefault(create);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var _inherits = unwrapExports(inherits);

var Base = function () {
  function Base(parent) {
    _classCallCheck(this, Base);

    this.parent = parent;
  }

  _createClass(Base, [{
    key: 'create',
    value: function create() {
      this.createEl();
      this.addAllEvent();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeAllEvent();
    }
  }, {
    key: 'createEl',
    value: function createEl() {
      this.$dom = document.createElement(this.option.tag);
      this.$dom.innerHTML = this.option.html;
      this.parent.$wrap.appendChild(this.$dom);
    }
  }, {
    key: 'addAllEvent',
    value: function addAllEvent() {
      var _this = this;

      this.option.defaultEvent && _Object$keys(this.option.defaultEvent).forEach(function (item) {
        var key = _this.option.defaultEvent[item];
        _this[key] = bind(_this[key], _this);
        addEvent(_this.$dom, item, _this[key], false, false);
      });
      this.option.event && _Object$keys(this.option.event).forEach(function (item) {
        var key = '__' + item;
        _this[key] = bind(_this.option.event[item], _this);
        addEvent(_this.$dom, item, _this[key], false, false);
      });
    }
  }, {
    key: 'removeAllEvent',
    value: function removeAllEvent() {
      var _this2 = this;

      this.option.defaultEvent && _Object$keys(this.option.defaultEvent).forEach(function (item) {
        var key = _this2.option.defaultEvent[item];
        _this2[key] = bind(_this2[key], _this2);
        removeEvent(_this2.$dom, item, _this2[key], false, false);
      });
      this.option.event && _Object$keys(this.option.event).forEach(function (item) {
        var key = '__' + item;
        _this2[key] = bind(_this2.option.event[item], _this2);
        removeEvent(_this2.$dom, item, _this2[key], false, false);
      });
    }
  }]);

  return Base;
}();

/**
 * 自定义组件配置
 */

var Component = function (_Base) {
  _inherits(Component, _Base);

  function Component(parent, option) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || _Object$getPrototypeOf(Component)).call(this, parent));

    _this.option = option;
    _this.init();
    return _this;
  }

  _createClass(Component, [{
    key: 'init',
    value: function init() {
      _get(Component.prototype.__proto__ || _Object$getPrototypeOf(Component.prototype), 'create', this).call(this);
      addClassName(this.$dom, 'chimee-flex-component');
    }
  }]);

  return Component;
}(Base);

/**
 * play 配置
 */

var defaultOption = {
  tag: 'chimee-control-state',
  html: '\n    <chimee-control-state-play></chimee-control-state-play>\n    <chimee-control-state-pause></chimee-control-state-pause>\n  ',
  animate: {
    icon: '\n      <svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g fill="#ffffff" stroke="#ffffff">\n          <path class="left"></path>\n          <path class="right"></path>\n        </g>\n      </svg>\n    ',
    path: {
      play: {
        left: 'M0.921875,0.265625L0.921875,197.074852L95.7890625,149L96.2929688,49Z',
        right: 'M90.3142151,45.9315226L90.3142151,151.774115L201.600944,99.9938782L201.600944,98.0237571Z'
      },
      pause: {
        left: 'M0.921875,1.265625L0.921875,198.074852L79.3611677,198.074852L79.3611677,0.258923126Z',
        right: 'M126.921875,1.265625L126.921875,198.074852L205.361168,198.074852L205.361168,0.258923126Z'
      }
    }
  },
  defaultEvent: {
    click: 'click'
  }
};

var Play = function (_Base) {
  _inherits(Play, _Base);

  function Play(parent, option) {
    _classCallCheck(this, Play);

    var _this = _possibleConstructorReturn(this, (Play.__proto__ || _Object$getPrototypeOf(Play)).call(this, parent));

    _this.option = deepAssign(defaultOption, isObject$1(option) ? option : {});
    _this.animate = false;
    _this.init();
    return _this;
  }

  _createClass(Play, [{
    key: 'init',
    value: function init() {
      // 创建 html ／ 绑定事件
      _get(Play.prototype.__proto__ || _Object$getPrototypeOf(Play.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$dom.addClass('chimee-flex-component');

      // 判断是否是默认或者用户提供 icon
      if (this.option.icon && this.option.icon.play && this.option.icon.pause) {
        this.$play = this.$dom.find('chimee-control-state-play');
        this.$pause = this.$dom.find('chimee-control-state-pause');
        this.$play.html(this.option.icon.play);
        this.$pause.html(this.option.icon.pause);
      } else if (!this.option.bitmap) {
        this.animate = true;
        this.option.animate.path = this.option.path ? this.option.path : this.option.animate.path;
        this.$dom.html(this.option.animate.icon);
        this.$left = this.$dom.find('.left');
        this.$right = this.$dom.find('.right');
      }
      this.changeState('pause');
    }
  }, {
    key: 'changeState',
    value: function changeState(state) {
      var nextState = state === 'play' ? 'pause' : 'play';
      this.state = state;
      addClassName(this.parent.$dom, nextState);
      removeClassName(this.parent.$dom, state);
      this.animate && this.setPath(nextState);
    }
  }, {
    key: 'setPath',
    value: function setPath(state) {
      var path = this.option.animate.path;
      if (state === 'play') {
        this.$left.attr('d', path.play.left);
        this.$right.attr('d', path.play.right);
      } else {
        this.$left.attr('d', path.pause.left);
        this.$right.attr('d', path.pause.right);
      }
    }
  }, {
    key: 'click',
    value: function click(e) {
      var nextState = this.state === 'play' ? 'pause' : 'play';
      this.changeState(nextState);
      this.parent.$emit(nextState);
    }
  }]);

  return Play;
}(Base);

var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Volume 配置
 */

var defaultOption$1 = {
  tag: 'chimee-volume',
  html: '\n    <chimee-volume-state>\n      <chimee-volume-state-mute></chimee-volume-state-mute>\n      <chimee-volume-state-low></chimee-volume-state-low>\n      <chimee-volume-state-high></chimee-volume-state-high>\n    </chimee-volume-state>\n    <chimee-volume-bar>\n      <chimee-volume-bar-wrap>\n        <chimee-volume-bar-bg></chimee-volume-bar-bg>\n        <chimee-volume-bar-all>\n          <chimee-volume-bar-ball></chimee-volume-bar-ball>\n        </chimee-volume-bar-all>\n        <chimee-volume-bar-track></chimee-volume-bar-track>\n      </chimee-volume-bar-wrap>\n    </chimee-volume-bar>\n  ',
  animate: {
    icon: '\n      <svg viewBox="0 0 107 101" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g class="volume">\n          <polygon class="horn" points="0.403399942 30 27.3842118 30 56.8220589 2.84217094e-14 57.9139815 100 27.3842118 70 0.403399942 70"></polygon>\n          <path class="ring1" d="M63,5.00975239 C69.037659,4.78612057 75.9178585,8.40856146 83.6405984,15.877075 C95.2247083,27.0798454 100,34.7975125 100,50.9608558 C100,67.1241991 95.3628694,73.7907482 83.6405984,83.8306724 C75.8257511,90.5239552 68.9455516,94.0320644 63,94.355" fill-opacity="0" stroke-width="10"></path>\n          <path class="ring2" d="M65.2173913,29.4929195 C67.8779343,29.3931169 70.9097496,31.0097416 74.3128371,34.3427934 C79.4174684,39.3423712 81.5217391,42.7866154 81.5217391,50 C81.5217391,57.2133846 79.4783502,60.1885354 74.3128371,64.6691576 C70.8691617,67.656239 67.8373465,69.2218397 65.2173913,69.3659595" fill-opacity="0" stroke-width="10"></path>\n          <path class="line" d="M4.19119202,3.65220497 L102,96" stroke-width="10"></path>\n        </g>\n      </svg>\n    '
  },
  defaultEvent: {
    mousedown: 'mousedown'
  }
};

var getElementPath = function getElementPath(elem) {
  var path = [];
  if (elem === null) return path;
  path.push(elem);
  while (elem.parentNode !== null) {
    elem = elem.parentNode;
    path.push(elem);
  }
  return path;
};

var Volume = (_class = function (_Base) {
  _inherits(Volume, _Base);

  function Volume(parent, option) {
    _classCallCheck(this, Volume);

    var _this = _possibleConstructorReturn(this, (Volume.__proto__ || _Object$getPrototypeOf(Volume)).call(this, parent));

    _this.parent.preVolume = 0;
    _this.option = deepAssign(defaultOption$1, isObject$1(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Volume, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      _get(Volume.prototype.__proto__ || _Object$getPrototypeOf(Volume.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$state = this.$dom.find('chimee-volume-state');
      this.$bar = this.$dom.find('chimee-volume-bar');
      this.$all = this.$dom.find('chimee-volume-bar-all');
      this.$bg = this.$dom.find('chimee-volume-bar-bg');
      this.layout = this.option.layout === 'vertical' ? 'vertical' : 'horizonal';

      // 判断是否是默认或者用户提供 icon
      if (this.option.icon && this.option.icon.mute && this.option.icon.low) {
        this.option.icon.high = this.option.icon.high || this.option.icon.low;
        this.$mute = this.$dom.find('chimee-volume-state-mute');
        this.$low = this.$dom.find('chimee-volume-state-low');
        this.$high = this.$dom.find('chimee-volume-state-high');
        this.$mute.html(this.option.icon.mute);
        this.$low.html(this.option.icon.low);
        this.$high.html(this.option.icon.high);
      } else if (!this.option.bitmap) {
        this.animate = true;
        this.$state.html(this.option.animate.icon);
      }

      this.$dom.addClass('chimee-flex-component ' + this.layout);
      this.changeState();

      this.watch_muted = this.parent.$watch('muted', function (val) {
        _this2.update();
      });
    }
  }, {
    key: 'inited',
    value: function inited() {
      this.update();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.watch_muted();
      _get(Volume.prototype.__proto__ || _Object$getPrototypeOf(Volume.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'changeState',
    value: function changeState() {
      if (this.parent.muted || this.parent.volume === 0) {
        this.state = 'mute';
      } else if (this.parent.volume > 0 && this.parent.volume <= 0.5) {
        this.state = 'low';
      } else if (this.parent.volume > 0.5 && this.parent.volume <= 1) {
        this.state = 'high';
      }
      this.$dom.removeClass('mute low high');
      this.$dom.addClass(this.state);
    }
  }, {
    key: 'click',
    value: function click(e) {
      var path = e.path || getElementPath(e.target);
      if (path.indexOf(this.$state[0]) !== -1) {
        this.stateClick(e);
        return 'state';
      } else if (path.indexOf(this.$bar[0]) !== -1) {
        this.barClick(e);
        return 'bar';
      }
      return 'padding';
    }
  }, {
    key: 'stateClick',
    value: function stateClick() {
      if (this.parent.muted) {
        this.parent.muted = false;
        return;
      }
      var currentVolume = this.parent.volume;
      this.parent.volume = currentVolume === 0 ? this.parent.preVolume : 0;
      this.parent.preVolume = currentVolume;
      this.changeState();
    }
  }, {
    key: 'barClick',
    value: function barClick(e) {
      var volume = this.layout === 'vertical' ? 1 - e.offsetY / this.$bg[0].offsetHeight : e.offsetX / this.$bg[0].offsetWidth;
      this.parent.volume = volume < 0 ? 0 : volume > 1 ? 1 : volume;
      this.update();
    }
  }, {
    key: 'mousedown',
    value: function mousedown(e) {
      if (this.click(e) !== 'bar') return;
      this.startX = this.layout === 'vertical' ? e.clientY : e.clientX;
      this.startVolume = this.parent.volume;
      addEvent(window, 'mousemove', this.draging);
      addEvent(window, 'mouseup', this.dragEnd);
      addEvent(window, 'contextmenu', this.dragEnd);
    }

    /**
     * 更新声音条
     */

  }, {
    key: 'update',
    value: function update() {
      this.changeState();
      var volume = this.parent.muted ? 0 : this.parent.volume;
      this.layout === 'vertical' ? this.$all.css('height', volume * 100 + '%') : this.$all.css('width', volume * 100 + '%');
    }

    /**
     * 开始拖拽
     * @param {EventObject} e 鼠标事件
     */

  }, {
    key: 'draging',
    value: function draging(e) {
      this.endX = this.layout === 'vertical' ? e.clientY : e.clientX;
      var dragVolume = this.layout === 'vertical' ? (this.startX - this.endX) / this.$bg[0].offsetHeight : (this.endX - this.startX) / this.$bg[0].offsetWidth;
      var dragAfterVolume = +(this.startVolume + dragVolume).toFixed(2);
      this.parent.volume = dragAfterVolume < 0 ? 0 : dragAfterVolume > 1 ? 1 : dragAfterVolume;
      this.parent.muted = false;
    }

    /**
     * 结束拖拽
     */

  }, {
    key: 'dragEnd',
    value: function dragEnd() {
      this.startX = 0;
      this.startVolume = 0;
      removeEvent(window, 'mousemove', this.draging);
      removeEvent(window, 'mouseup', this.dragEnd);
      removeEvent(window, 'contextmenu', this.dragEnd);
    }
  }]);

  return Volume;
}(Base), (_applyDecoratedDescriptor(_class.prototype, 'draging', [autobind], _Object$getOwnPropertyDescriptor(_class.prototype, 'draging'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'dragEnd', [autobind], _Object$getOwnPropertyDescriptor(_class.prototype, 'dragEnd'), _class.prototype)), _class);

var _class$1;

function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var defaultOption$2 = {
  tag: 'chimee-progressbar',
  html: '\n    <chimee-progressbar-wrap>\n      <chimee-progressbar-bg class="chimee-progressbar-line"></chimee-progressbar-bg>\n      <chimee-progressbar-buffer class="chimee-progressbar-line"></chimee-progressbar-buffer>\n      <chimee-progressbar-all class="chimee-progressbar-line">\n        <chimee-progressbar-ball></chimee-progressbar-ball>\n      </chimee-progressbar-all>\n      <chimee-progressbar-tip></chimee-progressbar-tip>\n    </chimee-progressbar-wrap>\n  '
};

var ProgressBar = (_class$1 = function (_Base) {
  _inherits(ProgressBar, _Base);

  function ProgressBar(parent, option) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || _Object$getPrototypeOf(ProgressBar)).call(this, parent));

    _this.option = deepAssign(defaultOption$2, isObject$1(option) ? option : {});
    _this.visiable = option !== false;
    _this.init();
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'init',
    value: function init() {
      _get(ProgressBar.prototype.__proto__ || _Object$getPrototypeOf(ProgressBar.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$wrap = this.$dom.find('chimee-progressbar-wrap');
      this.$buffer = this.$dom.find('chimee-progressbar-buffer');
      this.$all = this.$dom.find('chimee-progressbar-all');
      this.$tip = this.$dom.find('chimee-progressbar-tip');
      this.$track = this.$dom.find('chimee-progressbar-track');
      this.$line = this.$dom.find('.chimee-progressbar-line');
      this.$ball = this.$dom.find('chimee-progressbar-ball');
      this.$dom.addClass('chimee-flex-component');

      // css 配置
      !this.visiable && this.$dom.css('visibility', 'hidden');
      // this.$line.css({
      //   top: this.$wrap.
      // });
      // 进度条居中布局，还是在上方
      if (this.option.layout === 'top') {
        this.$dom.addClass('progressbar-layout-top');
        this.$wrap.css({
          // left: -this.$dom[0].offsetLeft + 'px',
          top: -this.$ball[0].offsetHeight + 'px'
          // height: this.$ball[0].offsetHeight * 2 + 'px'
        });
        // this.$line.css({
        //   top: this.$ball[0].offsetHeight + 'px'
        // })
        setStyle(this.parent.$wrap, 'paddingTop', this.$ball[0].offsetHeight + 'px');
      }
      this.addWrapEvent();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeWrapEvent();
      // 解绑全屏监听事件
      this.watch_screen && this.watch_screen();
      _get(ProgressBar.prototype.__proto__ || _Object$getPrototypeOf(ProgressBar.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'addWrapEvent',
    value: function addWrapEvent() {
      this.$wrap.on('mousedown', this.mousedown);
      this.$wrap.on('mousemove', this.tipShow);
      this.$wrap.on('mouseleave', this.tipEnd);
    }
  }, {
    key: 'removeWrapEvent',
    value: function removeWrapEvent() {
      this.$wrap.off('mousedown', this.mousedown);
      this.$wrap.off('mousemove', this.tipShow);
      this.$wrap.off('mouseleave', this.tipEnd);
    }

    /**
     * 缓存进度条更新 progress 事件
     */

  }, {
    key: 'progress',
    value: function progress() {
      var buffer = 0;
      try {
        buffer = this.parent.buffered.end(0);
      } catch (e) {}
      var bufferWidth = buffer / this.parent.duration * 100 + '%';
      this.$buffer.css('width', bufferWidth);
    }

    /**
     * requestAnimationFrame 来更新进度条, timeupdate 事件
     */

  }, {
    key: 'update',
    value: function update() {
      // const allWidth = this.$wrap[0].offsetWidth - this.$ball[0].offsetWidth;
      var time = this._currentTime !== undefined ? this._currentTime : this.parent.currentTime;
      var timePer = time ? time / this.parent.duration : 0;
      // const timeWidth = timePer * allWidth;
      this.$all.css('width', 'calc(' + timePer * 100 + '% - ' + this.$ball[0].offsetWidth / 2 + 'px');
    }
  }, {
    key: 'mousedown',
    value: function mousedown(e) {
      // const ballRect = this.$ball[0].getClientRects()[0];
      // const ballLeft = ballRect.left;
      // const ballRight = ballRect.left + ballRect.width;
      // this.inBall = e.clientX <= ballRight && e.clientX >= ballLeft;
      if (e.target === this.$tip[0]) return;
      this._currentTime = e.offsetX / this.$wrap[0].offsetWidth * this.parent.duration;
      // if(!this.inBall) this.update();
      this.startX = e.clientX;
      this.startTime = this._currentTime;
      addEvent(window, 'mousemove', this.draging);
      addEvent(window, 'mouseup', this.dragEnd);
      addEvent(window, 'contextmenu', this.dragEnd);
    }

    /**
     * 开始拖拽
     * @param {EventObject} e 鼠标事件
     */

  }, {
    key: 'draging',
    value: function draging(e) {
      this.endX = e.clientX;
      var dragTime = (this.endX - this.startX) / this.$wrap[0].offsetWidth * this.parent.duration;
      var dragAfterTime = +(this.startTime + dragTime).toFixed(2);
      this._currentTime = dragAfterTime < 0 ? 0 : dragAfterTime > this.parent.duration ? this.parent.duration : dragAfterTime;
      this.update();
    }

    /**
     * 结束拖拽
     */

  }, {
    key: 'dragEnd',
    value: function dragEnd() {
      this.update();
      this.startX = 0;
      this.startTime = 0;
      // if(!this.inBall) {
      this.parent.currentTime = this._currentTime;
      // this.inBall = false;
      // }
      this._currentTime = undefined;
      removeEvent(window, 'mousemove', this.draging);
      removeEvent(window, 'mouseup', this.dragEnd);
      removeEvent(window, 'contextmenu', this.dragEnd);
    }
  }, {
    key: 'tipShow',
    value: function tipShow(e) {
      if (e.target === this.$tip[0] || e.target === this.$ball[0]) {
        this.$tip.css('display', 'none');
        return;
      }
      var time = e.offsetX / this.$wrap[0].offsetWidth * this.parent.duration;
      time = time < 0 ? 0 : time > this.parent.duration ? this.parent.duration : time;
      var tipContent = formatTime(time);
      var left = e.offsetX - this.$tip[0].offsetWidth / 2;
      var leftBound = this.$wrap[0].offsetWidth - this.$tip[0].offsetWidth;
      left = left < 0 ? 0 : left > leftBound ? leftBound : left;
      this.$tip.text(tipContent);
      this.$tip.css('display', 'inline-block');
      this.$tip.css('left', left + 'px');
    }
  }, {
    key: 'tipEnd',
    value: function tipEnd() {
      this.$tip.css('display', 'none');
    }
  }]);

  return ProgressBar;
}(Base), (_applyDecoratedDescriptor$1(_class$1.prototype, 'mousedown', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'mousedown'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'draging', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'draging'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'dragEnd', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'dragEnd'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'tipShow', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'tipShow'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'tipEnd', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'tipEnd'), _class$1.prototype)), _class$1);

/**
 * progressTime 配置
 */

var defaultOption$3 = {
  tag: 'chimee-progresstime',
  html: '\n    <chimee-progresstime-pass>00:00</chimee-progresstime-pass\n    ><chimee-progresstime-total\n      ><span>/</span\n      ><chimee-progresstime-total-value>00:00</chimee-progresstime-total-value>\n    </chimee-progresstime-total>\n  '
};

var ProgressTime = function (_Base) {
  _inherits(ProgressTime, _Base);

  function ProgressTime(parent, option) {
    _classCallCheck(this, ProgressTime);

    var _this = _possibleConstructorReturn(this, (ProgressTime.__proto__ || _Object$getPrototypeOf(ProgressTime)).call(this, parent));

    _this.option = deepAssign(defaultOption$3, isObject$1(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(ProgressTime, [{
    key: 'init',
    value: function init() {
      _get(ProgressTime.prototype.__proto__ || _Object$getPrototypeOf(ProgressTime.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$total = this.$dom.find('chimee-progresstime-total-value');
      this.$pass = this.$dom.find('chimee-progresstime-pass');
      this.$dom.addClass('chimee-flex-component');
    }
  }, {
    key: 'updatePass',
    value: function updatePass() {
      this.$pass.text(formatTime(this.parent.currentTime));
    }
  }, {
    key: 'updateTotal',
    value: function updateTotal() {
      this.$total.text(formatTime(this.parent.duration));
    }
  }]);

  return ProgressTime;
}(Base);

var _class$2;

function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Screen 配置
 */

var defaultOption$4 = {
  tag: 'chimee-screen',
  html: '\n    <chimee-screen-full>\n      <svg viewBox="0 0 67 66" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <!-- Generator: Sketch 43.1 (39012) - http://www.bohemiancoding.com/sketch -->\n          <desc>Created with Sketch.</desc>\n          <defs></defs>\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n              <g id="screen-small" transform="translate(33.756308, 32.621867) rotate(45.000000) translate(-33.756308, -32.621867) translate(18.756308, -10.378133)" fill="#FFFFFF">\n                  <polygon id="Path" transform="translate(14.967695, 66.389245) rotate(180.000000) translate(-14.967695, -66.389245) " points="11.5190786 46.9431778 11.7210093 70.7913773 0.565180527 70.7913773 15.4674455 85.8353125 29.3702096 70.7913773 18.5573247 70.7702156 18.5573247 46.9431778"></polygon>\n                  <polygon id="Path" points="11.5190786 0.274130278 11.7210093 24.1223298 0.565180527 24.1223298 15.4674455 39.1662649 29.3702096 24.1223298 18.5573247 24.1011681 18.5573247 0.274130278"></polygon>\n              </g>\n          </g>\n      </svg>\n    </chimee-screen-full>\n    <chimee-screen-small>\n      <svg viewBox="0 0 61 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <!-- Generator: Sketch 43.1 (39012) - http://www.bohemiancoding.com/sketch -->\n        <desc>Created with Sketch.</desc>\n        <defs></defs>\n        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Group" transform="translate(30.756308, 30.621867) rotate(45.000000) translate(-30.756308, -30.621867) translate(15.756308, -12.378133)" fill="#FFFFFF">\n                <polygon id="Path" points="11.5190786 46.9431778 11.7210093 70.7913773 0.565180527 70.7913773 15.4674455 85.8353125 29.3702096 70.7913773 18.5573247 70.7702156 18.5573247 46.9431778"></polygon>\n                <polygon id="Path" transform="translate(14.967695, 19.720198) rotate(180.000000) translate(-14.967695, -19.720198) " points="11.5190786 0.274130278 11.7210093 24.1223298 0.565180527 24.1223298 15.4674455 39.1662649 29.3702096 24.1223298 18.5573247 24.1011681 18.5573247 0.274130278"></polygon>\n            </g>\n        </g>\n      </svg>\n    </chimee-screen-small>\n  ',
  defaultEvent: {
    click: 'click'
  }
};

var Screen = (_class$2 = function (_Base) {
  _inherits(Screen, _Base);

  function Screen(parent, option) {
    _classCallCheck(this, Screen);

    var _this = _possibleConstructorReturn(this, (Screen.__proto__ || _Object$getPrototypeOf(Screen)).call(this, parent));

    _this.state = 'small';
    _this.option = deepAssign(defaultOption$4, isObject$1(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Screen, [{
    key: 'init',
    value: function init() {
      _get(Screen.prototype.__proto__ || _Object$getPrototypeOf(Screen.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.changeState(this.state);
      // addClassName(this.$dom, 'flex-item');
      this.$dom.addClass('chimee-flex-component');

      this.$full = this.$dom.find('chimee-screen-full');
      this.$small = this.$dom.find('chimee-screen-small');
      // 判断是否是默认或者用户提供 icon
      if (this.option.icon && this.option.icon.full && this.option.icon.small) {
        // if((!this.option.icon.play && this.option.icon.puase) || (this.option.icon.play && !this.option.icon.puase)) {
        //   console.warn(`Please provide a play and pause icon！If you can't, we will use default icon!`);
        // }
        this.$full.html(this.option.icon.full);
        this.$small.html(this.option.icon.small);
      } else if (this.option.bitmap) {
        this.$full.html('');
        this.$small.html('');
      }
    }
  }, {
    key: 'changeState',
    value: function changeState(state) {
      var removeState = state === 'small' ? 'full' : 'small';
      addClassName(this.parent.$dom, state);
      removeClassName(this.parent.$dom, removeState);
    }
  }, {
    key: 'click',
    value: function click() {
      var full = false;
      if (this.state === 'small') {
        this.state = 'full';
        full = true;
      } else {
        this.state = 'small';
        full = false;
      }
      this.changeState(this.state);
      this.parent.$fullscreen(full, 'container');
      if (full) {
        this.watch_screen = this.parent.$watch('isFullscreen', this.screenChange);
      } else {
        this.watch_screen();
      }
    }
  }, {
    key: 'screenChange',
    value: function screenChange() {
      if (!this.parent.fullscreenElement) return;
      this.state = 'small';
      this.changeState('small');
      this.parent.$fullscreen(false, 'container');
    }
  }]);

  return Screen;
}(Base), (_applyDecoratedDescriptor$2(_class$2.prototype, 'screenChange', [autobind], _Object$getOwnPropertyDescriptor(_class$2.prototype, 'screenChange'), _class$2.prototype)), _class$2);

/**
 * play 配置
 */

var defaultOption$5 = {
  tag: 'chimee-clarity',
  width: '2em',
  html: '\n    <chimee-clarity-text></chimee-clarity-text>\n    <chimee-clarity-list>\n      <ul></ul>\n      <div class="chimee-clarity-list-arrow">\n        <svg viewBox="0 0 115 6"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Group-3-Copy" fill="#57B0F6">\n            <polygon id="Path-2" points="0.0205224145 0.0374249581 0.0205224145 2.12677903 53.9230712 2.12677903 57.1127727 5.3468462 60.2283558 2.12677903 113.820935 2.12677903 113.820935 0.0374249581"></polygon>\n          </g>\n        </svg>\n      </div>\n    </chimee-clarity-list>\n  ',
  defaultEvent: {
    click: 'click'
  },
  duration: 10,
  increment: 1
};

var Clarity = function (_Base) {
  _inherits(Clarity, _Base);

  function Clarity(parent, option) {
    _classCallCheck(this, Clarity);

    var _this = _possibleConstructorReturn(this, (Clarity.__proto__ || _Object$getPrototypeOf(Clarity)).call(this, parent));

    _this.option = deepAssign(defaultOption$5, isObject$1(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Clarity, [{
    key: 'init',
    value: function init() {
      _get(Clarity.prototype.__proto__ || _Object$getPrototypeOf(Clarity.prototype), 'create', this).call(this);
      addClassName(this.$dom, 'chimee-flex-component');

      this.$text = $(this.$dom).find('chimee-clarity-text');
      this.$list = $(this.$dom).find('chimee-clarity-list');
      this.$listUl = this.$list.find('ul');

      // 用户自定义配置
      this.option.width && setStyle(this.$dom, 'width', this.option.width);

      this.initTextList();
    }
  }, {
    key: 'initTextList',
    value: function initTextList() {
      var _this2 = this;

      this.option.list.forEach(function (item) {
        var li = $(document.createElement('li'));
        li.attr('data-url', item.src);
        li.text(item.name);
        if (item.src === _this2.parent.$videoConfig.src) {
          _this2.$text.text(item.name);
          li.addClass('active');
        }
        _this2.$listUl.append(li);
      });
    }
  }, {
    key: 'click',
    value: function click(e) {
      var _this3 = this;

      var elem = e.target;
      if (elem.tagName === 'LI') {
        var url = elem.getAttribute('data-url') || '';
        this.switchClarity(url).then(function () {
          _this3.loadOption = undefined;
          _Array$from(elem.parentElement.children).map(function (item) {
            removeClassName(item, 'active');
          });
          addClassName(e.target, 'active');
          _this3.$text.text(e.target.textContent);
        }).catch(function (e) {
          console.warn(e);
        });
      }
    }
  }, {
    key: 'switchClarity',
    value: function switchClarity(url) {
      if (this.loadOption) {
        this.loadOption.abort = true;
      }
      this.loadOption = {
        duration: this.option.duration,
        repeatTimes: 3,
        immediate: true,
        increment: this.option.increment
      };
      return this.parent.$silentLoad(url, this.loadOption);
    }
  }]);

  return Clarity;
}(Base);

function hundleChildren(plugin) {
  var childConfig = {};
  if (!plugin.$config.children) {
    childConfig = plugin.isLive ? {
      play: true, // 底部播放暂停按钮
      progressTime: false, // 播放时间
      progressBar: false, // 播放进度控制条
      volume: true, // 声音控制
      screen: true // 全屏控制
    } : {
      play: true, // 底部播放暂停按钮
      progressTime: true, // 播放时间
      progressBar: true, // 播放进度控制条
      volume: true, // 声音控制
      screen: true // 全屏控制
    };
  } else {
    childConfig = plugin.$config.children;
  }

  return childConfig;
}

/**
 * 1. 将所有的 ui component 输出到 html 结构中
 * 2. 为这些 component 绑定响应的事件
 * @param {*} dom 所有 ui 节点的子容器
 * @param {*} config 关于 ui 的一些列设置
 * @return {Array} 所有子节点
 */

function createChild(plugin) {
  var childConfig = plugin.config.children = hundleChildren(plugin);
  var children = {};
  if (!childConfig) {
    children.play = new Play(plugin);
    children.progressTime = new ProgressTime(plugin);
    children.progressBar = new ProgressBar(plugin);
    children.volume = new Volume(plugin);
    children.screen = new Screen(plugin);
  } else {
    _Object$keys(childConfig).forEach(function (item) {
      switch (item) {
        case 'play':
          if (childConfig.play) {
            children.play = new Play(plugin, childConfig.play);
          }
          break;
        case 'progressTime':
          if (childConfig.progressTime) {
            children.progressTime = new ProgressTime(plugin, childConfig.progressTime);
          }
          break;
        case 'progressBar':
          children.progressBar = new ProgressBar(plugin, childConfig.progressBar);
          break;
        case 'volume':
          if (childConfig.volume) {
            children.volume = new Volume(plugin, childConfig.volume);
          }
          break;
        case 'screen':
          if (childConfig.screen) {
            children.screen = new Screen(plugin, childConfig.screen);
          }
          break;
        case 'clarity':
          if (childConfig.clarity && Array.isArray(childConfig.clarity.list)) {
            children.clarity = new Clarity(plugin, childConfig.clarity);
          }
          break;
        default:
          children[item] = new Component(plugin, childConfig[item]);
          break;
      }
    });
  }

  return children;
}

var majorColorStyle = '\n  .chimee-flex-component svg *{\n    fill: majorColor;\n    stroke: majorColor;\n  }\n  chimee-progressbar-all{\n    background: majorColor;\n  }\n  chimee-volume.chimee-flex-component chimee-volume-bar-all{\n    background: majorColor;    \n  }\n  chimee-clarity-list li:hover,\n  chimee-clarity-list li.active {\n    color: majorColor;\n  }\n';

var hoverColorStyle = '\n  .chimee-flex-component svg:hover *{\n    fill: hoverColor;\n    stroke: hoverColor;\n  }\n';

/**
 * 插件默认配置
 */

var defaultConfig = {
  hideBarTime: 2000, // hidebar 延迟时间， barShowByMouse 为 move 时有效，enter 时为0， 用户设置无效
  barShowByMouse: 'move' // 控制条显示由， move 还是 enter/leave 来控制显示／隐藏
};

var chimeeControl = {
  name: 'chimeeControl',
  el: 'chimee-control',
  data: {
    children: {},
    show: false,
    disabled: true
  },
  level: 99,
  operable: false,
  penetrate: false,
  create: function create() {},
  init: function init(videoConfig) {},
  destroy: function destroy() {
    window.clearTimeout(this.timeId);
  },
  inited: function inited() {
    var videoConfig = this.$videoConfig;
    if (videoConfig.controls) {
      this.show = true;
      videoConfig.controls = false;
    }
    var _this = this;
    applyDecorators(videoConfig, {
      controls: accessor({
        get: function get() {
          return _this.show;
        },
        set: function set(value) {
          _this.show = Boolean(value);
          _this._display();
          return false;
        }
      }, { preSet: true })
    }, { self: true });
    this.config = isObject$1(this.$config) ? deepAssign(defaultConfig, this.$config) : defaultConfig;

    this.config.hideBarTime = this.config.barShowByMouse === 'move' ? this.config.hideBarTime : 0;
    this.$dom.innerHTML = '<chimee-control-wrap></chimee-control-wrap>';
    this.$wrap = this.$dom.querySelector('chimee-control-wrap');
    this.children = createChild(this);
    this._setStyle();

    for (var i in this.children) {
      this.children[i].inited && this.children[i].inited();
    }
  },

  events: {
    loadstart: function loadstart() {
      this._disable(true);
    },
    canplay: function canplay() {
      this._disable(false);
    },
    play: function play() {
      this.children.play && this.children.play.changeState('play');
      this.config.barShowByMouse === 'move' && this._hideItself();
    },
    pause: function pause() {
      this.children.play && this.children.play.changeState('pause');
      this._showItself();
    },
    c_mouseenter: function c_mouseenter() {
      if (this.config.barShowByMouse === 'move') return;
      this._showItself();
    },
    c_mousemove: function c_mousemove() {
      this._mousemove();
    },
    c_mouseleave: function c_mouseleave() {
      if (this.config.barShowByMouse === 'move') return;
      this._hideItself();
    },
    durationchange: function durationchange() {
      this.children.progressTime && this.children.progressTime.updateTotal();
    },
    timeupdate: function timeupdate() {
      this._progressUpdate();
    },
    progress: function progress() {
      this.children.progressBar && this.children.progressBar.progress();
    },
    volumechange: function volumechange() {
      this.children.volume && this.children.volume.update();
    },
    keydown: function keydown(e) {
      if (this.disabled) return;
      e.stopPropagation();
      switch (e.keyCode) {
        case 32:
          {
            e.preventDefault();
            this.children.play && this.children.play.click(e);
            break;
          }
        case 37:
          {
            e.preventDefault();
            var reduceTime = this.currentTime - 10;
            this.currentTime = reduceTime < 0 ? 0 : reduceTime;
            this._mousemove();
            break;
          }
        case 39:
          {
            e.preventDefault();
            var raiseTime = this.currentTime + 10;
            this.currentTime = raiseTime > this.duration ? this.duration : raiseTime;
            this._mousemove();
            break;
          }
        case 38:
          {
            e.preventDefault();
            var raiseVolume = this.volume + 0.1;
            this.volume = raiseVolume > 1 ? 1 : raiseVolume;
            this._mousemove();
            break;
          }
        case 40:
          {
            e.preventDefault();
            var reduceVolume = this.volume - 0.1;
            this.volume = reduceVolume < 0 ? 0 : reduceVolume;
            this._mousemove();
            break;
          }
      }
    },
    click: function click(e) {
      var _this2 = this;

      var time = new Date();
      var preTime = this.clickTime;
      this.clickTime = time;
      if (time - preTime < 300) {
        clearTimeout(this.clickTimeId);
        return;
      }
      this.clickTimeId = setTimeout(function () {
        !_this2.disabled && _this2.children.play && _this2.children.play.click(e);
      }, 300);
    },
    dblclick: function dblclick(e) {
      // this.dblclick = true;
      !this.disabled && this.children.screen && this.children.screen.click();
    }
  },
  methods: {
    _progressUpdate: function _progressUpdate() {
      this.children.progressBar && this.children.progressBar.update();
      this.children.progressTime && this.children.progressTime.updatePass();
    },
    _hideItself: function _hideItself() {
      var _this3 = this;

      window.clearTimeout(this.timeId);
      this.timeId = setTimeout(function () {
        var bottom = _this3.$wrap.offsetHeight;
        bottom = _this3.children.progressBar ? _this3.children.progressBar.$wrap[0].offsetTop - bottom : -bottom;
        setStyle(_this3.$wrap, {
          bottom: bottom + 'px'
        });
        setStyle(_this3.$dom, {
          visibility: 'hidden'
        });
      }, this.config.hideBarTime);
    },
    _showItself: function _showItself() {
      window.clearTimeout(this.timeId);
      setStyle(this.$wrap, {
        bottom: '0'
      });
      setStyle(this.$dom, {
        visibility: 'visible'
      });
    },
    _display: function _display() {
      var display = this.show ? 'block' : 'none';
      setStyle(this.$dom, {
        display: display
      });
    },
    _mousemove: function _mousemove(e) {
      if (this.paused || this.config.barShowByMouse === 'enter') return;
      this._showItself();
      this._hideItself();
    },

    // controlbar 不可以点
    // 键盘／鼠标事件不监听
    _disable: function _disable(disabled) {
      if (!this.show) return;
      this.disabled = disabled;
      setStyle(this.$wrap, 'pointerEvents', disabled ? 'none' : 'auto');
    },
    _setStyle: function _setStyle() {
      var css = '';
      css += this.config.majorColor ? majorColorStyle.replace(/majorColor/g, this.config.majorColor) : '';
      css += this.config.hoverColor ? hoverColorStyle.replace(/hoverColor/g, this.config.hoverColor) : '';
      var style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }
};

return chimeeControl;

})));
