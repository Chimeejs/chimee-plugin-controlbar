declare module 'toxic-utils' {
  declare export function genTraversalHandler (fn: Function): Function;
  declare export function deepClone<T: Object | Array<any>> (source: T): T;
  declare export function deepAssign<T: any> (...args: Array<T>): T & T;
  declare export function camelize (str: string, isBig: ?boolean): string;
  declare export function hypenate (str: string): string;
  declare export function bind (fn: Function, context: any): Function;
  declare export function getDeepProperty (obj: any, keys: string | Array<string>, option?: {throwError?: boolean, backup?: any}): any;
}