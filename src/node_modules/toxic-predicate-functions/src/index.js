// @flow
/**
 * is void element or not ? Means it will return true when val is undefined or null
 * @param  {Anything}  obj
 * @return {Boolean}   return true when val is undefined or null
 */
export function isVoid (obj: any): boolean {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 * @param {Anything} arr
 * @return {Boolean} true when it is a boolean
 */
export function isArray (arr: any): boolean {
  return Array.isArray(arr);
}

/**
 * 判断是否为function
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isFunction (obj: any): boolean {
  return typeof obj === 'function';
}

/**
 * 判断是否是对象
 * @param  {Anything}  obj 传入对象
 * @return {Boolean}     [description]
 */
export function isObject (obj: any): boolean {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 * @param  {Anything}  obj
 * @return {Boolean}   return true when it's a number
 */
export function isNumber (obj: any): boolean {
  return typeof obj === 'number';
}
/**
 * to tell you if the val can be transfer into data
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isNumeric (obj: any): boolean {
  return !isArray(obj) && (obj - Number.parseFloat(obj) + 1) >= 0;
}
/**
 * 判断是否为整数
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isInteger (num: any): boolean {
  return Number.isInteger(num);
}

/**
 * 判断是否为空
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 * @example
 * "", {}, [], 0, null, undefined, false 为空
 */
export function isEmpty (obj: any): boolean {
  if(isArray(obj)) {
    return obj.length === 0;
  } else if(isObject(obj)) {
    return Object.keys(obj).length === 0;
  } else {
    return !obj;
  }
}
/**
 * 判断是否为事件
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isEvent (obj: any): boolean {
  return obj instanceof Event || obj.originalEvent instanceof Event;
}
/**
 * 判断是否为blob
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isBlob (obj: any): boolean {
  return obj instanceof Blob;
}
/**
 * 判断是否为file上传的文件
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isFile (obj: any): boolean {
  return isBlob(obj) && isString(obj.name);
}
/**
 * 判断是否为日期对象
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isDate (obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Date]';
}
/**
 * 判断是否是string
 * @param  {Anything}  str [description]
 * @return {Boolean}     [description]
 */
export function isString (str: any): boolean {
  return typeof str === 'string' ||
   str instanceof String;
}
/**
 * is Boolean or not
 * @param  {Anything} bool
 * @return {Boolean}
 */
export function isBoolean (bool: any): boolean {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 * @param {Anything} obj
 * @return {boolean}
 */
export function isPromise (obj: any): boolean {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 * @param  {Anyting}  val
 * @return {Boolean}  true when type is number/string/boolean/undefined/null
 */
export function isPrimitive (val: any): boolean {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}
/**
 * 判断是否为url且必须要带有协议头
 * @param  {Anything}  str [description]
 * @return {Boolean}     [description]
 */
export function isUrl (str: any): boolean {
  return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
}
/**
 * to test if a HTML node
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isNode (obj: any): boolean {
  return !!(typeof Node === 'object'
      ? obj instanceof Node
      : obj &&
        typeof obj === 'object' &&
        typeof obj.nodeType === 'number' &&
        typeof obj.nodeName === 'string');
}
/**
 * to test if a HTML element
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
export function isElement (obj: any): boolean {
  return !!(typeof HTMLElement === 'object'
    ? obj instanceof HTMLElement
    : obj &&
      typeof obj === 'object' &&
      obj !== null &&
      obj.nodeType === 1 &&
      typeof obj.nodeName === 'string');
}
/**
 * check if node A is node B's parent or not
 * @param  {Node}  parent
 * @param  {Node}  child
 * @return {Boolean}
 */
export function isChildNode (parent: Node, child: Node): boolean {
  if(!isNode(parent) || !isNode(child)) {
    return false;
  }
  return child.parentNode === parent;
}
/**
 * check if node B is node A's posterrity or not
 * @param  {Node}  parent
 * @param  {Node}  child
 * @return {Boolean}
 */
export function isPosterityNode (parent: Node, child: Node): boolean {
  if(!isNode(parent) || !isNode(child)) {
    return false;
  }
  while(child.parentNode) {
    child = child.parentNode;
    if(child === parent) {
      return true;
    }
  }
  return false;
}
/**
 * check if the string is an HTMLString
 * @param  {string}  str only accept string
 * @return {Boolean}
 */
export function isHTMLString (str: string): boolean {
  return /<[^>]+?>/.test(str);
}
/**
 * check if is an error
 * @param {anything} val
 * @return {boolean}
 */
export function isError (val: any): boolean {
  return val instanceof Error;
}
