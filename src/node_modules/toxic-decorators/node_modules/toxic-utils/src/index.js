// @flow
import {isArray, isObject, isPrimitive, isString, isVoid} from 'toxic-predicate-functions';
/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
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
 * deeply clone an object
 * @param  {Array|Object} source if you pass in other type, it will throw an error
 * @return {clone-target}        the new Object
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

/**
 * generate an uuid
 */
export function uuid (): string {
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}
/**
 * generate an random number which length is 4
 */
export function S4 (): string {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * generate an random number with specific length
 */
export function rand (length: number): string {
  let str = '';
  while(str.length < length) {
    str += S4();
  }
  return str.slice(0, length);
}

/**
 * get an deep property
 */
export function getDeepProperty (obj: any, keys: string | Array<string>, {
  throwError = false,
  backup,
}: {
  throwError?: boolean,
  backup?: any
} = {}) {
  if(isString(keys)) {
    keys = keys.split('.');
  }
  if(!isArray(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  const read = [];
  let target = obj;
  for(let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    if(isVoid(target)) {
      if(throwError) {
        throw new Error(`obj${read.length > 0 ? ('.' + read.join('.')) : ' itself'} is ${target}`);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}
