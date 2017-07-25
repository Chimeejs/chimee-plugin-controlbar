
/**
 * toxic-utils v0.1.3
 * (c) 2017 toxic-johann
 * Released under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _toConsumableArray = _interopDefault(require('babel-runtime/helpers/toConsumableArray'));
var toxicPredicateFunctions = require('toxic-predicate-functions');

/**
 * 生成深度遍历函数的处理器，常用于生成深度拷贝等
 * @param  {Function} fn 遍历到深度变量的时候的操作
 * @return {Function}     可用的操作函数
 */
function genTraversalHandler(fn) {
  function recursiveFn(source, target, key) {
    if (toxicPredicateFunctions.isArray(source) || toxicPredicateFunctions.isObject(source)) {
      target = target || (toxicPredicateFunctions.isObject(source) ? {} : []);
      for (var _key in source) {
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
 * 对象克隆
 * @param  {Array|Object} source 传其他值会直接返回
 * @return {clone-target}        [description]
 */
function deepClone(source) {
  if (toxicPredicateFunctions.isPrimitive(source)) {
    throw new TypeError('deepClone only accept non primitive type');
  }
  return _deepAssign(source);
}
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
    if (toxicPredicateFunctions.isPrimitive(args[i])) {
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
 * camelize any string, e.g hello world -> helloWorld
 * @param  {string} str only accept string!
 * @return {string}     camelize string
 */
function camelize(str, isBig) {
  return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
    return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
  });
}
/**
 * hypenate any string e.g hello world -> hello-world
 * @param  {string} str only accept string
 * @return {string}
 */
function hypenate(str) {
  return camelize(str).replace(/([A-Z])/g, function (match) {
    return '-' + match.toLowerCase();
  });
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

// **********************  计算类    ************************
// 计算获取某种东西或者计算出某种东西
// ********************************************************
// 生成uuid
function uuid() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
// 生成四个随机数
function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}
// 生成任意长度的随机数
function rand(length) {
  var str = '';
  while (str.length < length) {
    str += S4();
  }
  return str.slice(0, length);
}

exports.genTraversalHandler = genTraversalHandler;
exports.deepClone = deepClone;
exports.deepAssign = deepAssign;
exports.camelize = camelize;
exports.hypenate = hypenate;
exports.bind = bind;
exports.uuid = uuid;
exports.S4 = S4;
exports.rand = rand;
