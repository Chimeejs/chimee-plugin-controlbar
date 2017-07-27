
/**
 * chimee-plugin-controlbar v0.0.8
 * (c) 2017 yandeqiang
 * Released under ISC
 */

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

import { accessor, applyDecorators, autobind } from 'toxic-decorators';
import { $, addClassName, addEvent, deepAssign, formatTime, isObject, removeClassName, removeEvent, setStyle } from 'chimee-helper';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _typeof from 'babel-runtime/helpers/typeof';
import _Number$isInteger from 'babel-runtime/core-js/number/is-integer';
import _Number$parseFloat from 'babel-runtime/core-js/number/parse-float';
import _Object$getOwnPropertyDescriptor from 'babel-runtime/core-js/object/get-own-property-descriptor';

__$styleInject("chimee-progressbar-tip,chimee-screen-full,chimee-screen-small{display:none}chimee-control.full chimee-screen-full,chimee-control.small chimee-screen-small{display:inline-block;width:2em;height:100%}chimee-control{display:block;line-height:2em;font-size:14px;user-select:none;font-family:Roboto,Arial,Helvetica,sans-serif;overflow:hidden;transition:visibility .5s ease}chimee-control,chimee-control-wrap{position:absolute;bottom:0;left:0;width:100%;height:2em}chimee-control-wrap{display:table;background:rgba(0,0,0,.5);transition:bottom .5s ease}.chimee-component{display:table-cell;height:2em;padding:.3em .3em .2em;box-sizing:border-box;vertical-align:top;cursor:pointer;width:1%;line-height:1em;white-space:nowrap}chimee-control-state .left,chimee-control-state .right{transition:all .2s ease-in-out}chimee-control-state svg{width:2em;height:1.4em}chimee-progressbar.chimee-component{width:auto;padding:0 .4em 0 1em}chimee-progressbar-wrap{display:inline-block;width:100%;height:100%;position:relative}chimee-progressbar-all,chimee-progressbar-bg,chimee-progressbar-buffer{position:absolute;top:.9em;left:0;display:inline-block;height:3px}chimee-progressbar-bg{width:100%;background:#4c4c4c}chimee-progressbar-buffer{width:0;background:#6f6f6f}chimee-progressbar-all{background:#de698c}chimee-progressbar-all:after{content:\"\";position:absolute;right:-.2em;top:-.3em;display:inline-block;width:.8em;height:.8em;border-radius:.8em;background:#fff}chimee-progressbar-tip{position:absolute;bottom:.5em;top:-1.5em;left:0;z-index:1;padding:0 .5em;height:1.5em;background:#fff;line-height:1.5em;border-radius:4px;color:#000;text-align:center}chimee-progresstime.chimee-component{color:#fff;font-weight:400;text-align:center;white-space:nowrap;padding:.5em}chimee-progresstime-pass,chimee-progresstime-total{display:inline}chimee-volume.chimee-component{cursor:pointer;white-space:nowrap;padding-right:.5em}chimee-volume-state{display:inline-block;height:100%;width:2em}chimee-volume-state svg{width:2em;height:1.4em}chimee-volume .line,chimee-volume .ring1,chimee-volume .ring2{stroke-dasharray:150;stroke-dashoffset:150;transition:stroke-dashoffset .7s ease-in-out}chimee-volume.high .ring1,chimee-volume.high .ring2,chimee-volume.low .ring2,chimee-volume.mute .line,chimee-volume.mute .ring1,chimee-volume.mute .ring2{stroke-dashoffset:0}chimee-volume-bar{position:relative;display:inline-block;width:4em;height:100%}chimee-volume-bar-all,chimee-volume-bar-bg{position:absolute;top:.6em;left:0;display:inline-block;height:3px}chimee-volume-bar-bg{width:100%;background:#4c4c4c}chimee-volume-bar-all{background:#de698c}chimee-volume-bar-all:after{content:\"\";position:absolute;right:-.2em;top:-.3em;display:inline-block;width:.8em;height:.8em;border-radius:.8em;background:#fff}chimee-screen-small{background:url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjYxcHgiIGhlaWdodD0iNjJweCIgdmlld0JveD0iMCAwIDYxIDYyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4xICgzOTAxMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuNzU2MzA4LCAzMC42MjE4NjcpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMzAuNzU2MzA4LCAtMzAuNjIxODY3KSB0cmFuc2xhdGUoMTUuNzU2MzA4LCAtMTIuMzc4MTMzKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjExLjUxOTA3ODYgNDYuOTQzMTc3OCAxMS43MjEwMDkzIDcwLjc5MTM3NzMgMC41NjUxODA1MjcgNzAuNzkxMzc3MyAxNS40Njc0NDU1IDg1LjgzNTMxMjUgMjkuMzcwMjA5NiA3MC43OTEzNzczIDE4LjU1NzMyNDcgNzAuNzcwMjE1NiAxOC41NTczMjQ3IDQ2Ljk0MzE3NzgiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0Ljk2NzY5NSwgMTkuNzIwMTk4KSByb3RhdGUoMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNC45Njc2OTUsIC0xOS43MjAxOTgpICIgcG9pbnRzPSIxMS41MTkwNzg2IDAuMjc0MTMwMjc4IDExLjcyMTAwOTMgMjQuMTIyMzI5OCAwLjU2NTE4MDUyNyAyNC4xMjIzMjk4IDE1LjQ2NzQ0NTUgMzkuMTY2MjY0OSAyOS4zNzAyMDk2IDI0LjEyMjMyOTggMTguNTU3MzI0NyAyNC4xMDExNjgxIDE4LjU1NzMyNDcgMC4yNzQxMzAyNzgiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);background-repeat:no-repeat;background-size:contain;background-position:50%}chimee-screen-full{background:url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjY3cHgiIGhlaWdodD0iNjZweCIgdmlld0JveD0iMCAwIDY3IDY2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4xICgzOTAxMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJzY3JlZW4tc21hbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzLjc1NjMwOCwgMzIuNjIxODY3KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTMzLjc1NjMwOCwgLTMyLjYyMTg2NykgdHJhbnNsYXRlKDE4Ljc1NjMwOCwgLTEwLjM3ODEzMykiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuOTY3Njk1LCA2Ni4zODkyNDUpIHJvdGF0ZSgxODAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0Ljk2NzY5NSwgLTY2LjM4OTI0NSkgIiBwb2ludHM9IjExLjUxOTA3ODYgNDYuOTQzMTc3OCAxMS43MjEwMDkzIDcwLjc5MTM3NzMgMC41NjUxODA1MjcgNzAuNzkxMzc3MyAxNS40Njc0NDU1IDg1LjgzNTMxMjUgMjkuMzcwMjA5NiA3MC43OTEzNzczIDE4LjU1NzMyNDcgNzAuNzcwMjE1NiAxOC41NTczMjQ3IDQ2Ljk0MzE3NzgiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMTEuNTE5MDc4NiAwLjI3NDEzMDI3OCAxMS43MjEwMDkzIDI0LjEyMjMyOTggMC41NjUxODA1MjcgMjQuMTIyMzI5OCAxNS40Njc0NDU1IDM5LjE2NjI2NDkgMjkuMzcwMjA5NiAyNC4xMjIzMjk4IDE4LjU1NzMyNDcgMjQuMTAxMTY4MSAxOC41NTczMjQ3IDAuMjc0MTMwMjc4Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);background-repeat:no-repeat;background-size:contain;background-position:50%}", undefined);

/**
 * toxic-predicate-functions v0.1.2
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * is void element or not ? Means it will return true when val is undefined or null
 * @param  {Anything}  obj
 * @return {Boolean}   return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 * @param {Anything} arr
 * @return {Boolean} true when it is a boolean
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * 判断是否为function
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * 判断是否是对象
 * @param  {Anything}  obj 传入对象
 * @return {Boolean}     [description]
 */
function isObject$1(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 * @param  {Anything}  obj
 * @return {Boolean}   return true when it's a number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * 判断是否是string
 * @param  {Anything}  str [description]
 * @return {Boolean}     [description]
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 * @param  {Anything} bool
 * @return {Boolean}
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 * @param  {Anyting}  val
 * @return {Boolean}  true when type is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}

/**
 * toxic-utils v0.1.5
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
    if (isArray(source) || isObject$1(source)) {
      target = target || (isObject$1(source) ? {} : []);
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
      this.parent.$wrap.removeChild(this.$dom);
    }
  }, {
    key: 'createEl',
    value: function createEl() {
      this.$dom = document.createElement(this.option.tag);
      this.$dom.innerHTML = this.option.html || '';
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
        _this[key] = _this.option.event[item];
        addEvent(_this.$dom, item, _this[key], false, false);
      });
    }
  }, {
    key: 'removeAllEvent',
    value: function removeAllEvent() {
      var _this2 = this;

      this.option.defaultEvent && _Object$keys(this.option.defaultEvent).forEach(function (item) {
        removeEvent(_this2.$dom, item, _this2[_this2.option.defaultEvent[item]], false, false);
      });
      this.option.event && _Object$keys(this.option.event).forEach(function (item) {
        var key = '__' + item;
        // this[key] = this.option.event[item];
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
      addClassName(this.$dom, 'chimee-component');
      // 用户自定义配置
      var width = this.option.width || '2em';
      setStyle(this.$dom, 'width', width);
    }
  }]);

  return Component;
}(Base);

/**
 * play 配置
 */

var defaultOption = {
  tag: 'chimee-control-state',
  html: '\n    <svg viewBox="0 0 206 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g fill="#ffffff" stroke="#ffffff">\n        <path class="left"></path>\n        <path class="right"></path>\n      </g>\n    </svg>\n  ',
  defaultEvent: {
    click: 'click'
  }
};

var Play = function (_Base) {
  _inherits(Play, _Base);

  function Play(parent, option) {
    _classCallCheck(this, Play);

    var _this = _possibleConstructorReturn(this, (Play.__proto__ || _Object$getPrototypeOf(Play)).call(this, parent));

    _this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Play, [{
    key: 'init',
    value: function init() {
      _get(Play.prototype.__proto__ || _Object$getPrototypeOf(Play.prototype), 'create', this).call(this);
      addClassName(this.$dom, 'chimee-component');
      this.$left = $(this.$dom).find('.left');
      this.$right = $(this.$dom).find('.right');
      // 用户自定义配置
      this.option.width && setStyle(this.$dom, 'width', this.option.width);
      this.changeState('pause');
    }
  }, {
    key: 'changeState',
    value: function changeState(state) {
      var nextState = state === 'play' ? 'pause' : 'play';
      this.state = state;
      addClassName(this.parent.$dom, nextState);
      removeClassName(this.parent.$dom, state);
      this.setPath(nextState);
    }
  }, {
    key: 'click',
    value: function click(e) {
      var nextState = this.state === 'play' ? 'pause' : 'play';
      this.changeState(nextState);
      this.parent.$emit(nextState);
    }
  }, {
    key: 'setPath',
    value: function setPath(state) {
      var _this2 = this;

      this.$left.attr('d', 'M0.921875,0.265625L0.921875,197.074852L79.3611755,172.829747L79.3611755,26.9775543Z');
      this.$right.attr('d', 'M126.921875,22.56643L126.921875,182.056305L205.361168,144.776862L205.361168,56.6476783Z');
      setTimeout(function () {
        if (state === 'play') {
          _this2.$left.attr('d', 'M0.921875,0.265625L0.921875,197.074852L95.7890625,149L96.2929688,49Z');
          _this2.$right.attr('d', 'M90.3142151,45.9315226L90.3142151,151.774115L201.600944,99.9938782L201.600944,98.0237571Z');
        } else {
          _this2.$left.attr('d', 'M0.921875,1.265625L0.921875,198.074852L79.3611677,198.074852L79.3611677,0.258923126Z');
          _this2.$right.attr('d', 'M126.921875,1.265625L126.921875,198.074852L205.361168,198.074852L205.361168,0.258923126Z');
        }
      }, 140);
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
  html: '\n    <chimee-volume-state>\n      <svg viewBox="0 0 107 101" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g class="volume" stroke="#ffffff">\n          <polygon class="horn" fill="#ffffff" points="0.403399942 30 27.3842118 30 56.8220589 2.84217094e-14 57.9139815 100 27.3842118 70 0.403399942 70"></polygon>\n          <path class="ring1" d="M63,5.00975239 C69.037659,4.78612057 75.9178585,8.40856146 83.6405984,15.877075 C95.2247083,27.0798454 100,34.7975125 100,50.9608558 C100,67.1241991 95.3628694,73.7907482 83.6405984,83.8306724 C75.8257511,90.5239552 68.9455516,94.0320644 63,94.355" stroke-width="10"></path>\n          <path class="ring2" d="M65.2173913,29.4929195 C67.8779343,29.3931169 70.9097496,31.0097416 74.3128371,34.3427934 C79.4174684,39.3423712 81.5217391,42.7866154 81.5217391,50 C81.5217391,57.2133846 79.4783502,60.1885354 74.3128371,64.6691576 C70.8691617,67.656239 67.8373465,69.2218397 65.2173913,69.3659595" stroke-width="10"></path>\n          <path class="line" d="M4.19119202,3.65220497 L102,96" stroke-width="10"></path>\n        </g>\n    </svg>\n    </chimee-volume-state>\n    <chimee-volume-bar>\n      <chimee-volume-bar-bg></chimee-volume-bar-bg>\n      <chimee-volume-bar-all></chimee-volume-bar-all>\n      <chimee-volume-bar-track></chimee-volume-bar-track>\n    </chimee-volume-bar>\n  ',
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
    _this.option = deepAssign(defaultOption$1, isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Volume, [{
    key: 'inited',
    value: function inited() {
      this.update();
    }
  }, {
    key: 'init',
    value: function init() {
      _get(Volume.prototype.__proto__ || _Object$getPrototypeOf(Volume.prototype), 'create', this).call(this);
      this.$state = $('chimee-volume-state', this.$dom);
      this.$bar = $('chimee-volume-bar', this.$dom);
      this.$all = $('chimee-volume-bar-all', this.$dom);
      this.$bg = $('chimee-volume-bar-bg', this.$dom);
      addClassName(this.$dom, 'chimee-component');
      this.changeState();
      // 用户自定义配置
      this.option.width && setStyle(this.$dom, 'width', this.option.width);
    }
  }, {
    key: 'changeState',
    value: function changeState() {
      if (this.parent.volume === 0) {
        this.state = 'mute';
      } else if (this.parent.volume > 0 && this.parent.volume <= 0.5) {
        this.state = 'low';
      } else if (this.parent.volume > 0.5 && this.parent.volume <= 1) {
        this.state = 'high';
      }
      removeClassName(this.$dom, 'mute low high');
      addClassName(this.$dom, this.state);
    }
  }, {
    key: 'click',
    value: function click(e) {
      var path = e.path || getElementPath(e.target);
      if (path.indexOf(this.$state[0]) !== -1) {
        this.stateClick(e);
      } else if (path.indexOf(this.$bar[0]) !== -1) {
        this.barClick(e);
      }
    }
  }, {
    key: 'stateClick',
    value: function stateClick() {
      var currentVolume = this.parent.volume;
      this.parent.volume = currentVolume === 0 ? this.parent.preVolume : 0;
      this.parent.preVolume = currentVolume;
      this.changeState();
    }
  }, {
    key: 'barClick',
    value: function barClick(e) {
      var volume = e.layerX / this.$bg[0].offsetWidth;
      this.parent.volume = volume < 0 ? 0 : volume > 1 ? 1 : volume;
      this.update();
    }
  }, {
    key: 'mousedown',
    value: function mousedown(e) {
      this.click(e);
      this.startX = e.clientX;
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
      this.$all.css('width', this.parent.volume * 100 + '%');
    }

    /**
     * 开始拖拽
     * @param {EventObject} e 鼠标事件
     */

  }, {
    key: 'draging',
    value: function draging(e) {
      this.endX = e.clientX;
      var dragVolume = (this.endX - this.startX) / this.$bg[0].offsetWidth;
      var dragAfterVolume = +(this.startVolume + dragVolume).toFixed(2);
      this.parent.volume = dragAfterVolume < 0 ? 0 : dragAfterVolume > 1 ? 1 : dragAfterVolume;
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

/**
 * progressBar 配置
 */

var defaultOption$2 = {
  tag: 'chimee-progressbar',
  html: '\n    <chimee-progressbar-wrap>\n      <chimee-progressbar-bg></chimee-progressbar-bg>\n      <chimee-progressbar-buffer></chimee-progressbar-buffer>\n      <chimee-progressbar-all></chimee-progressbar-all>\n      <chimee-progressbar-tip></chimee-progressbar-tip>\n    </chimee-progressbar-wrap>\n  ',
  defaultEvent: {}
};

var ProgressBar = (_class$1 = function (_Base) {
  _inherits(ProgressBar, _Base);

  function ProgressBar(parent, option) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || _Object$getPrototypeOf(ProgressBar)).call(this, parent));

    _this.option = deepAssign(defaultOption$2, isObject(option) ? option : {});
    _this.visiable = option !== false;
    _this.init();
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'init',
    value: function init() {
      _get(ProgressBar.prototype.__proto__ || _Object$getPrototypeOf(ProgressBar.prototype), 'create', this).call(this);
      this.$wrap = $('chimee-progressbar-wrap', this.$dom);
      this.$buffer = $('chimee-progressbar-buffer', this.$dom);
      this.$all = $('chimee-progressbar-all', this.$dom);
      this.$tip = $('chimee-progressbar-tip', this.$dom);
      this.$track = $('chimee-progressbar-track', this.$dom);
      addClassName(this.$dom, 'chimee-component');
      !this.visiable && setStyle(this.$dom, 'visibility', 'hidden');
      this.addWrapEvent();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeWrapEvent();
      _get(ProgressBar.prototype.__proto__ || _Object$getPrototypeOf(ProgressBar.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'addWrapEvent',
    value: function addWrapEvent() {
      this.$wrap.on('mousedown', this.mousedown);
      this.$wrap.on('mouseenter', this.mouseenter);
    }
  }, {
    key: 'removeWrapEvent',
    value: function removeWrapEvent() {
      this.$wrap.off('mousedown', this.mousedown);
      this.$wrap.off('mouseenter', this.mouseenter);
    }

    /**
     * 缓存进度条更新 progress 事件
     */

  }, {
    key: 'progress',
    value: function progress() {
      var buffer = 0;
      try {
        var bufferLength = this.parent.buffered.length;
        buffer = this.parent.buffered.end(bufferLength);
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
      var time = this._currentTime !== undefined ? this._currentTime : this.parent.currentTime;
      var timeWidth = time ? time / this.parent.duration * 100 + '%' : 0;
      this.$all.css('width', timeWidth);
    }
  }, {
    key: 'mousedown',
    value: function mousedown(e) {
      if (e.target === this.$tip[0]) return;
      this._currentTime = this.parent.currentTime = e.layerX / this.$wrap[0].offsetWidth * this.parent.duration;
      this.update();
      this.startX = e.clientX;
      this.startTime = this.parent.currentTime;
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
      this.startX = 0;
      this.startTime = 0;
      this.parent.currentTime = this._currentTime;
      this._currentTime = undefined;
      removeEvent(window, 'mousemove', this.draging);
      removeEvent(window, 'mouseup', this.dragEnd);
      removeEvent(window, 'contextmenu', this.dragEnd);
    }
  }, {
    key: 'mouseenter',
    value: function mouseenter() {
      this.$wrap.on('mousemove', this.tipShow);
      this.$wrap.on('mouseleave', this.tipEnd);
    }
  }, {
    key: 'tipShow',
    value: function tipShow(e) {
      if (e.target === this.$tip[0]) return;
      var time = e.layerX / this.$wrap[0].offsetWidth * this.parent.duration;
      time = time < 0 ? 0 : time > this.parent.duration ? this.parent.duration : time;
      var tipContent = formatTime(time);
      var left = e.layerX - this.$tip[0].offsetWidth / 2;
      this.$tip.text(tipContent);
      this.$tip.css('display', 'inline-block');
      this.$tip.css('left', left + 'px');
    }
  }, {
    key: 'tipEnd',
    value: function tipEnd() {
      this.$wrap.off('mousemove', this.tipShow);
      this.$wrap.off('mouseleave', this.tipEnd);
      this.$tip.css('display', 'none');
    }
  }]);

  return ProgressBar;
}(Base), (_applyDecoratedDescriptor$1(_class$1.prototype, 'mousedown', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'mousedown'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'draging', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'draging'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'dragEnd', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'dragEnd'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'mouseenter', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'mouseenter'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'tipShow', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'tipShow'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'tipEnd', [autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'tipEnd'), _class$1.prototype)), _class$1);

/**
 * progressTime 配置
 */

var defaultOption$3 = {
  tag: 'chimee-progresstime',
  html: '\n    <chimee-progresstime-pass>00:00</chimee-progresstime-pass\n    ><chimee-progresstime-total\n      ><span>/</span\n      ><chimee-progresstime-total-value>00:00</chimee-progresstime-total-value>\n    </chimee-progresstime-total>\n  ',
  defaultEvent: {}
};

var ProgressTime = function (_Base) {
  _inherits(ProgressTime, _Base);

  function ProgressTime(parent, option) {
    _classCallCheck(this, ProgressTime);

    var _this = _possibleConstructorReturn(this, (ProgressTime.__proto__ || _Object$getPrototypeOf(ProgressTime)).call(this, parent));

    _this.option = deepAssign(defaultOption$3, isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(ProgressTime, [{
    key: 'init',
    value: function init() {
      _get(ProgressTime.prototype.__proto__ || _Object$getPrototypeOf(ProgressTime.prototype), 'create', this).call(this);
      this.$total = $('chimee-progresstime-total-value', this.$dom);
      this.$pass = $('chimee-progresstime-pass', this.$dom);
      addClassName(this.$dom, 'chimee-component');

      // 用户自定义配置
      // this.option.width && setStyle(this.$dom, 'width', this.option.width);
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

var screenEvent = '';
var currentScreenElement = '';

if (document.webkitCancelFullScreen) {
  screenEvent = 'webkitfullscreenchange';
  currentScreenElement = 'webkitFullscreenElement';
} else if (document.mozCancelFullScreen) {
  screenEvent = 'mozfullscreenchange';
  currentScreenElement = 'mozFullScreenElement';
} else if (document.msExitFullscreen) {
  screenEvent = 'msfullscreenchange';
  currentScreenElement = 'msFullscreenElement';
} else if (document.exitFullscreen) {
  screenEvent = 'fullscreenchange';
  currentScreenElement = 'fullscreenElement';
}

/**
 * Screen 配置
 */

var defaultOption$4 = {
  tag: 'chimee-screen',
  html: '\n    <chimee-screen-full></chimee-screen-full>\n    <chimee-screen-small></chimee-screen-small>\n  ',
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
    _this.option = deepAssign(defaultOption$4, isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Screen, [{
    key: 'init',
    value: function init() {
      _get(Screen.prototype.__proto__ || _Object$getPrototypeOf(Screen.prototype), 'create', this).call(this);
      this.changeState(this.state);
      // addClassName(this.$dom, 'flex-item');
      addClassName(this.$dom, 'chimee-component');
      // 用户自定义配置
      this.option.width && setStyle(this.$dom, 'width', this.option.width);
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
      this.parent.$fullScreen(full, 'container');
      if (full) {
        addEvent(document, screenEvent, this.screenChange);
      } else {
        removeEvent(document, screenEvent, this.screenChange);
      }
    }
  }, {
    key: 'screenChange',
    value: function screenChange() {
      if (document[currentScreenElement]) return;
      this.state = 'small';
      this.changeState('small');
      this.parent.$fullScreen(false, 'container');
    }
  }]);

  return Screen;
}(Base), (_applyDecoratedDescriptor$2(_class$2.prototype, 'screenChange', [autobind], _Object$getOwnPropertyDescriptor(_class$2.prototype, 'screenChange'), _class$2.prototype)), _class$2);

function hundleChildren(plugin) {
  var childConfig = {};
  if (!plugin.$config.children) {
    childConfig = plugin.live ? {
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
        default:
          children[item] = new Component(plugin, childConfig[item]);
          break;
      }
    });
  }

  return children;
}

/**
 * 插件默认配置
 */
var defaultConfig = {};

var chimeeControl = {
  name: 'chimeeControl',
  el: 'chimee-control',
  data: {
    children: {}
  },
  level: 99,
  create: function create() {},
  init: function init(videoConfig) {
    if (videoConfig.controls === false) return;
    this.show = true;
    videoConfig.controls = false;
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
    this.live = videoConfig.type === 'live';
    this.config = isObject(this.$config) ? deepAssign(defaultConfig, this.$config) : defaultConfig;
    this.$dom.innerHTML = '<chimee-control-wrap></chimee-control-wrap>';
    this.$wrap = this.$dom.querySelector('chimee-control-wrap');
    this.children = createChild(this);
  },
  destroy: function destroy() {
    for (var i in this.children) {
      this.children[i].destroy();
    }
    this.$dom.parentNode.removeChild(this.$dom);
    window.clearTimeout(this.timeId);
  },
  inited: function inited() {
    for (var i in this.children) {
      this.children[i].inited && this.children[i].inited();
    }
  },

  events: {
    play: function play() {
      this.children.play && this.children.play.changeState('play');
      this._hideItself();
    },
    pause: function pause() {
      this.children.play && this.children.play.changeState('pause');
      this._showItself();
    },
    load: function load() {},
    c_mousemove: function c_mousemove() {
      this._mousemove();
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
      this.children.play && this.children.play.click(e);
    },
    dblclick: function dblclick(e) {
      this.dblclick = true;
      this.children.screen && this.children.screen.click();
    }
  },
  methods: {
    _progressUpdate: function _progressUpdate() {
      this.children.progressBar && this.children.progressBar.update();
      this.children.progressTime && this.children.progressTime.updatePass();
    },
    _hideItself: function _hideItself() {
      var _this2 = this;

      window.clearTimeout(this.timeId);
      this.timeId = setTimeout(function () {
        setStyle(_this2.$wrap, {
          bottom: '-4em'
        });
        setStyle(_this2.$dom, {
          visibility: 'hidden'
        });
      }, 2000);
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
      var display = this.show ? 'table' : 'none';
      setStyle(this.$dom, {
        display: display
      });
    },
    _mousemove: function _mousemove(e) {
      if (this.paused) return;
      this._showItself();
      this._hideItself();
    }
  }
};

export default chimeeControl;
