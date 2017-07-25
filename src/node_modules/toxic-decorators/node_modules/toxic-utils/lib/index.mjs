
/**
 * toxic-utils v0.1.5
 * (c) 2017 toxic-johann
 * Released under MIT
 */

import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import { isArray, isObject, isPrimitive, isString, isVoid } from 'toxic-predicate-functions';

/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
 */
function genTraversalHandler(fn) {
  function recursiveFn(source, target, key) {
    if (isArray(source) || isObject(source)) {
      target = target || (isObject(source) ? {} : []);
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
 * deeply clone an object
 * @param  {Array|Object} source if you pass in other type, it will throw an error
 * @return {clone-target}        the new Object
 */
function deepClone(source) {
  if (isPrimitive(source)) {
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

/**
 * generate an uuid
 */
function uuid() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
/**
 * generate an random number which length is 4
 */
function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}

/**
 * generate an random number with specific length
 */
function rand(length) {
  var str = '';
  while (str.length < length) {
    str += S4();
  }
  return str.slice(0, length);
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
  if (!isArray(keys)) {
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

export { genTraversalHandler, deepClone, deepAssign, camelize, hypenate, bind, uuid, S4, rand, getDeepProperty };
