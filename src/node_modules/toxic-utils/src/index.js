// @flow
import {isArray, isObject, isPrimitive} from 'toxic-predicate-functions';
/**
 * 生成深度遍历函数的处理器，常用于生成深度拷贝等
 * @param  {Function} fn 遍历到深度变量的时候的操作
 * @return {Function}     可用的操作函数
 */
export function genTraversalHandler (fn: Function): Function {
  function recursiveFn (source, target, key) {
    if(isArray(source) || isObject(source)) {
      target = target || (isObject(source) ? {} : []);
      for(const key in source) {
        target[key] = recursiveFn(source[key], target[key], key);
      }
      return target;
    }
    return fn(source, target, key);
  };
  return recursiveFn;
};
const _deepAssign = genTraversalHandler(val => val);
/**
 * 对象克隆
 * @param  {Array|Object} source 传其他值会直接返回
 * @return {clone-target}        [description]
 */
export function deepClone<T: Object | Array<any>> (source: T): T {
  if(isPrimitive(source)) {
      throw new TypeError('deepClone only accept non primitive type');
    }
  return _deepAssign(source);
};
/**
 * merge multiple objects
 * @param  {...Object} args [description]
 * @return {merge-object}         [description]
 */
export function deepAssign<T: any> (...args: Array<T>): T & T {
  if(args.length < 2) {
    throw new Error('deepAssign accept two and more argument');
  }
  for(let i = args.length - 1; i > -1; i--) {
    if(isPrimitive(args[i])) {
      throw new TypeError('deepAssign only accept non primitive type');
    }
  }
  const target = args.shift();
  args.forEach(source => _deepAssign(source, target));
  return target;
}

/**
 * camelize any string, e.g hello world -> helloWorld
 * @param  {string} str only accept string!
 * @return {string}     camelize string
 */
export function camelize (str: string, isBig: ?boolean): string {
  return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
    return (!isBig && index === 0)
      ? initials.toLowerCase()
      : initials.toUpperCase();
  });
}
/**
 * hypenate any string e.g hello world -> hello-world
 * @param  {string} str only accept string
 * @return {string}
 */
export function hypenate (str: string): string {
  return camelize(str).replace(/([A-Z])/g, match => '-' + match.toLowerCase());
}

/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
export function bind (fn: Function, context: any): Function {
  if (fn.bind) {
    return fn.bind(context);
  } else if(fn.apply) {
    return function __autobind__ (...args: any) {
      return fn.apply(context, args);
    };
  } else {
    return function __autobind__ (...args: any) {
      return fn.call(context, ...args);
    };
  }
}

// **********************  计算类    ************************
// 计算获取某种东西或者计算出某种东西
// ********************************************************
// 生成uuid
export function uuid (): string {
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}
// 生成四个随机数
export function S4 (): string {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
// 生成任意长度的随机数
export function rand (length: number): string {
  let str = '';
  while(str.length < length) {
    str += S4();
  }
  return str.slice(0, length);
}

