declare module 'chimee-helper-utils' {
  declare export function makeArray (obj: any): Array<any>;
  declare export function transObjectAttrIntoArray (obj: Object, fn?: Function): Array<string>;
  declare export function runRejectableQueue (queue: Array<any>, ...args: any): Promise<*>;
  declare export function runStoppableQueue (queue: Array<any>, ...args: any): boolean;
  declare export function setFrozenAttr (obj: Object, key: string, value: any): void;
  declare export function setAttrGetterAndSetter (obj: Object, key: string, option: {get?: Function, set?: Function}, prefix: string): void;
  declare export function decodeUTF8 (uint8array: any): string;
  declare export function debounce (func: Function, wait: number, immediate: boolean): Function;
  declare export function throttle (func: Function, wait: number, options: any, cxt: any): Function;
  declare export function strRepeat (num: any, bit: number): string;
  declare export function formatTime (time: number): string;
  declare export function addTransMethod (obj: Object): Function;
  declare export function appendCSS (cssText: string): HTMLElement;
  declare export function formatDate (date: Date, pattern: string): string;
  declare export function getLocalStorage (key: string): string | null | void;
  declare export function setLocalStorage (key: string, val: string): void;
}
