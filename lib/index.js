
/**
 * chimee-plugin-controlbar v0.2.9
 * (c) 2017 yandeqiang
 * Released under ISC
 */

'use strict';

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

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var toxicDecorators = require('toxic-decorators');
var chimeeHelper = require('chimee-helper');
var _Object$keys = _interopDefault(require('babel-runtime/core-js/object/keys'));
var _Object$getPrototypeOf = _interopDefault(require('babel-runtime/core-js/object/get-prototype-of'));
var _classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('babel-runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('babel-runtime/helpers/possibleConstructorReturn'));
var _get = _interopDefault(require('babel-runtime/helpers/get'));
var _inherits = _interopDefault(require('babel-runtime/helpers/inherits'));
var _toConsumableArray = _interopDefault(require('babel-runtime/helpers/toConsumableArray'));
var _typeof = _interopDefault(require('babel-runtime/helpers/typeof'));
var _Number$isInteger = _interopDefault(require('babel-runtime/core-js/number/is-integer'));
var _Number$parseFloat = _interopDefault(require('babel-runtime/core-js/number/parse-float'));
var _Object$getOwnPropertyDescriptor = _interopDefault(require('babel-runtime/core-js/object/get-own-property-descriptor'));
var _Array$from = _interopDefault(require('babel-runtime/core-js/array/from'));

__$styleInject("/* 暂时存放到这的， 用来设置 container video 的基本样式 */\ncontainer {\n  position: relative;\n}\n\ncontainer,\nvideo {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  outline: none;\n}\n\nvideo:focus {\n  outline: none;\n}\n\n/* 用到的变量 */\n\n/* 全局默认样式 */\n.chimee-flex-component svg g {\n  fill: #fff;\n  stroke: #fff;\n}\n\n.chimee-flex-component svg:hover g {\n  fill: #fff;\n  stroke: #fff;\n}\n\n/* 默认隐藏 */\nchimee-volume-state-mute,\nchimee-volume-state-low,\nchimee-volume-state-high,\nchimee-control-state-pause,\nchimee-control-state-play,\nchimee-progressbar-tip,\nchimee-screen-full,\nchimee-clarity-list,\nchimee-screen-small {\n  display: none;\n}\n\n/* 满足条件时显示 */\nchimee-control.full chimee-screen-full,\nchimee-control.small chimee-screen-small,\nchimee-volume.mute chimee-volume-state-mute,\nchimee-volume.low chimee-volume-state-low,\nchimee-volume.high chimee-volume-state-high,\nchimee-control.pause chimee-control-state-pause,\nchimee-control.play chimee-control-state-play,\nchimee-control.full chimee-screen-full,\nchimee-control.small chimee-screen-small {\n  display: inline-block;\n  width: 1.4em;\n  height: 100%;\n}\n\n/* 开始写具体样式 */\nchimee-control {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  font-size: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n  -webkit-transition: visibility 0.5s ease;\n  transition: visibility 0.5s ease;\n}\n\nchimee-control-wrap {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2.2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  background: rgba(0, 0, 0, .5);\n  -webkit-transition: bottom 0.5s ease;\n  transition: bottom 0.5s ease;\n  pointer-events: auto;\n}\n\n.chimee-flex-component {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  height: 2em;\n  cursor: pointer;\n}\n\n.chimee-flex-component svg {\n  vertical-align: middle;\n  width: 2em;\n  height: 1.5em;\n}\n\n/* 播放器状态，播放／暂停 */\nchimee-control-state.chimee-flex-component {\n  -ms-flex-preferred-size: 3em;\n      flex-basis: 3em;\n  text-align: right;\n  margin-right: 1em;\n}\n\n/* 播放器状态，播放／暂停 动画效果 */\nchimee-control-state .left,\nchimee-control-state .right {\n  -webkit-transition: d 0.2s ease-in-out;\n  transition: d 0.2s ease-in-out;\n}\n\n/* 时间显示 */\nchimee-progresstime.chimee-flex-component {\n  color: #fff;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n}\n\nchimee-progresstime-pass,\nchimee-progresstime-total {\n  display: inline;\n}\n\n/* 播放器控制条 */\nchimee-progressbar.chimee-flex-component {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\nchimee-progressbar-wrap {\n  display: inline-block;\n  height: 100%;\n  position: absolute;\n  left: 1em;\n  right: 1em;\n  top: 0;\n}\n\nchimee-progressbar.progressbar-layout-top {\n  position: static\n}\n\nchimee-progressbar.progressbar-layout-top chimee-progressbar-wrap {\n  top: -1.6em;\n  height: 1.6em;\n  left: 0.8em;\n  right: 0;\n}\n\nchimee-progressbar.progressbar-layout-top .chimee-progressbar-line {\n  left: 0;\n  top: 0.8em;\n}\n\n.chimee-progressbar-line {\n  position: absolute;\n  top: 0.9em;\n  left: 0;\n  display: inline-block;\n  height: 3px;\n}\n\nchimee-progressbar-bg {\n  width: 100%;\n  background: #4c4c4c;\n}\n\nchimee-progressbar-buffer {\n  width: 0;\n  background: #6f6f6f;\n}\n\nchimee-progressbar-all {\n  margin-left: -0.8em;\n  background: #de698c;\n}\n\nchimee-progressbar-ball {\n  content: '';\n  position: absolute;\n  right: -0.8em;\n  top: -0.3em;\n  display: inline-block;\n  width: 0.8em;\n  height: 0.8em;\n  border-radius: 0.8em;\n  background: #fff;\n  pointer-events: none;\n}\n\nchimee-progressbar-tip {\n  position: absolute;\n  bottom: 0.5em;\n  top: -1.5em;\n  left: 0;\n  z-index: 10;\n  padding: 0 0.5em;\n  height: 1.5em;\n  background: #fff;\n  line-height: 1.5em;\n  border-radius: 4px;\n  color: #000;\n  text-align: center;\n}\n\n/* 音量控制 */\nchimee-volume.chimee-flex-component {\n  cursor: pointer;\n  padding: 0;\n  -ms-flex-preferred-size: 7em;\n      flex-basis: 7em;\n  white-space: nowrap;\n  margin-right: 1em;\n  position: relative;\n}\n\nchimee-volume.chimee-flex-component.vertical {\n  padding-right: 1em;\n  -ms-flex-preferred-size: 2em;\n      flex-basis: 2em;\n}\n\nchimee-volume-state {\n  display: inline-block;\n  width: 2em;\n  vertical-align: top;\n}\n\n/* 动画所用到的元素 css */\nchimee-volume .ring1,\nchimee-volume .ring2,\nchimee-volume .line {\n  stroke-dasharray: 150;\n  stroke-dashoffset: 150;\n  -webkit-transition: stroke-dashoffset 0.7s ease-in-out;\n  transition: stroke-dashoffset 0.7s ease-in-out;\n}\n\nchimee-volume.mute .line,\nchimee-volume.mute .ring1,\nchimee-volume.mute .ring2 {\n  stroke-dashoffset: 0;\n}\n\nchimee-volume.high .ring1,\nchimee-volume.high .ring2 {\n  stroke-dashoffset: 0;\n}\n\nchimee-volume.low .ring2 {\n  stroke-dashoffset: 0;\n}\n\nchimee-volume.vertical:hover chimee-volume-bar {\n  display: inline-block;\n}\n\nchimee-volume.vertical chimee-volume-bar {\n  position: absolute;\n  top: -7em;\n  left: -0.2em;\n  width: 2em;\n  height: 4em;\n  padding-bottom: 3em;\n  display: none;\n  vertical-align: middle;\n}\n\nchimee-volume.vertical chimee-volume-bar::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 1em;\n  background: #212121;\n  border-radius: 4px;\n}\n\nchimee-volume.horizonal chimee-volume-bar {\n  position: relative;\n  height: 1.2em;\n  width: 4em;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nchimee-volume.vertical chimee-volume-bar-wrap {\n  display: inline-block;\n  position: absolute;\n  bottom: 1em;\n  left: 0;\n  top: 1em;\n  right: 0;\n  height: 4em;\n}\n\nchimee-volume.vertical chimee-volume-bar-all,\nchimee-volume.vertical chimee-volume-bar-bg {\n  position: absolute;\n  bottom: 0;\n  left: 1em;\n  display: inline-block;\n  width: 2px;\n  border-radius: 4px;\n}\n\nchimee-volume.vertical chimee-volume-bar-bg {\n  height: 4em;\n  background: #4c4c4c;\n  opacity: 0.5;\n}\n\nchimee-volume.vertical chimee-volume-bar-all {\n  background: #de698c;\n}\n\nchimee-volume.vertical chimee-volume-bar-all::after {\n  content: '';\n  position: absolute;\n  right: -0.34em;\n  top: -0.4em;\n  display: inline-block;\n  width: 0.8em;\n  height: 0.8em;\n  border-radius: 0.8em;\n  background: #fff;\n  pointer-events: none;\n}\n\nchimee-volume.horizonal chimee-volume-bar {\n  position: relative;\n  height: 1.2em;\n  width: 4em;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nchimee-volume.horizonal chimee-volume-bar-all,\nchimee-volume.horizonal chimee-volume-bar-bg {\n  position: absolute;\n  top: 0.4em;\n  left: 0;\n  display: inline-block;\n  height: 2px;\n}\n\nchimee-volume.horizonal chimee-volume-bar-bg {\n  width: 4em;\n  background: #4c4c4c;\n  opacity: 0.5;\n}\n\nchimee-volume.horizonal chimee-volume-bar-all {\n  background: #de698c;\n}\n\nchimee-volume.horizonal chimee-volume-bar-all::after {\n  content: '';\n  position: absolute;\n  right: -0.4em;\n  top: -0.3em;\n  display: inline-block;\n  width: 0.8em;\n  height: 0.8em;\n  border-radius: 0.8em;\n  background: #fff;\n  pointer-events: none;\n}\n\n/* 全屏 */\nchimee-screen.chimee-flex-component {\n  -ms-flex-preferred-size: 3em;\n      flex-basis: 3em;\n  text-align: left;\n}\n\n/* 清晰度切换 */\nchimee-clarity.chimee-flex-component {\n  position: relative;\n  color: #fff;\n  width: 6em;\n  height: 1.75em;\n  padding: 0;\n  padding-right: 1em;\n  padding-left: 1em;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 16px;\n}\n\nchimee-clarity.chimee-flex-component:hover chimee-clarity-list {\n  display: inline-block;\n}\n\nchimee-clarity.chimee-flex-component svg {\n  width: auto;\n  height: auto;\n}\n\nchimee-clarity-list {\n  position: absolute;\n  left: 0;\n  bottom: 1em;\n  width: 100%;\n  padding-bottom: 1.5em;\n  opacity: 0.8;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  line-height: 0;\n}\n\nchimee-clarity-list ul {\n  margin: 0;\n  padding: 0.5em 0;\n  background: #292929;\n  line-height: 2em;\n}\n\nchimee-clarity-list li {\n  list-style-type: none;\n}\n\nchimee-clarity-list li:hover,\nchimee-clarity-list li.active {\n  color: #de698c;\n}\n\nchimee-clarity-list-arrow {\n  position: absolute;\n  bottom: 1.5em;\n  width: 100%;\n}\n", undefined);

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
function isArray(arr) {
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
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
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
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}

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
    if (isArray(source) || isObject$1(source)) {
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
    value: function destroy() {}
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
        chimeeHelper.addEvent(_this.$dom, item, _this[key], false, false);
      });
      this.option.event && _Object$keys(this.option.event).forEach(function (item) {
        var key = '__' + item;
        _this[key] = _this.option.event[item];
        chimeeHelper.addEvent(_this.$dom, item, _this[key], false, false);
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
      this.$dom = chimeeHelper.$(this.$dom);
      chimeeHelper.$.addClass(this.$dom, 'chimee-flex-component');
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

    _this.option = chimeeHelper.deepAssign(defaultOption, chimeeHelper.isObject(option) ? option : {});
    _this.animate = false;
    _this.init();
    return _this;
  }

  _createClass(Play, [{
    key: 'init',
    value: function init() {
      // 创建 html ／ 绑定事件
      _get(Play.prototype.__proto__ || _Object$getPrototypeOf(Play.prototype), 'create', this).call(this);
      this.$dom = chimeeHelper.$(this.$dom);
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
      chimeeHelper.addClassName(this.parent.$dom, nextState);
      chimeeHelper.removeClassName(this.parent.$dom, state);
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
    _this.option = chimeeHelper.deepAssign(defaultOption$1, chimeeHelper.isObject(option) ? option : {});
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
      this.$dom = chimeeHelper.$(this.$dom);
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
      chimeeHelper.addEvent(window, 'mousemove', this.draging);
      chimeeHelper.addEvent(window, 'mouseup', this.dragEnd);
      chimeeHelper.addEvent(window, 'contextmenu', this.dragEnd);
    }

    /**
     * 更新声音条
     */

  }, {
    key: 'update',
    value: function update() {
      this.changeState();
      this.layout === 'vertical' ? this.$all.css('height', this.parent.volume * 100 + '%') : this.$all.css('width', this.parent.volume * 100 + '%');
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
    }

    /**
     * 结束拖拽
     */

  }, {
    key: 'dragEnd',
    value: function dragEnd() {
      this.startX = 0;
      this.startVolume = 0;
      chimeeHelper.removeEvent(window, 'mousemove', this.draging);
      chimeeHelper.removeEvent(window, 'mouseup', this.dragEnd);
      chimeeHelper.removeEvent(window, 'contextmenu', this.dragEnd);
    }
  }]);

  return Volume;
}(Base), (_applyDecoratedDescriptor(_class.prototype, 'draging', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class.prototype, 'draging'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'dragEnd', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class.prototype, 'dragEnd'), _class.prototype)), _class);

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

    _this.option = chimeeHelper.deepAssign(defaultOption$2, chimeeHelper.isObject(option) ? option : {});
    _this.visiable = option !== false;
    _this.init();
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'init',
    value: function init() {
      _get(ProgressBar.prototype.__proto__ || _Object$getPrototypeOf(ProgressBar.prototype), 'create', this).call(this);
      this.$dom = chimeeHelper.$(this.$dom);
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
        chimeeHelper.setStyle(this.parent.$wrap, 'paddingTop', this.$ball[0].offsetHeight + 'px');
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
      this.$all.css('width', timePer * 100 + '%');
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
      chimeeHelper.addEvent(window, 'mousemove', this.draging);
      chimeeHelper.addEvent(window, 'mouseup', this.dragEnd);
      chimeeHelper.addEvent(window, 'contextmenu', this.dragEnd);
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
      // if(!this.inBall) {
      this.parent.currentTime = this._currentTime;
      // this.inBall = false;
      // }
      this._currentTime = undefined;
      chimeeHelper.removeEvent(window, 'mousemove', this.draging);
      chimeeHelper.removeEvent(window, 'mouseup', this.dragEnd);
      chimeeHelper.removeEvent(window, 'contextmenu', this.dragEnd);
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
      var tipContent = chimeeHelper.formatTime(time);
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
}(Base), (_applyDecoratedDescriptor$1(_class$1.prototype, 'mousedown', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'mousedown'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'draging', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'draging'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'dragEnd', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'dragEnd'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'tipShow', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'tipShow'), _class$1.prototype), _applyDecoratedDescriptor$1(_class$1.prototype, 'tipEnd', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class$1.prototype, 'tipEnd'), _class$1.prototype)), _class$1);

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

    _this.option = chimeeHelper.deepAssign(defaultOption$3, chimeeHelper.isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(ProgressTime, [{
    key: 'init',
    value: function init() {
      _get(ProgressTime.prototype.__proto__ || _Object$getPrototypeOf(ProgressTime.prototype), 'create', this).call(this);
      this.$dom = chimeeHelper.$(this.$dom);
      this.$total = this.$dom.find('chimee-progresstime-total-value');
      this.$pass = this.$dom.find('chimee-progresstime-pass');
      this.$dom.addClass('chimee-flex-component');
    }
  }, {
    key: 'updatePass',
    value: function updatePass() {
      this.$pass.text(chimeeHelper.formatTime(this.parent.currentTime));
    }
  }, {
    key: 'updateTotal',
    value: function updateTotal() {
      this.$total.text(chimeeHelper.formatTime(this.parent.duration));
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
    _this.option = chimeeHelper.deepAssign(defaultOption$4, chimeeHelper.isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Screen, [{
    key: 'init',
    value: function init() {
      _get(Screen.prototype.__proto__ || _Object$getPrototypeOf(Screen.prototype), 'create', this).call(this);
      this.$dom = chimeeHelper.$(this.$dom);
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
      chimeeHelper.addClassName(this.parent.$dom, state);
      chimeeHelper.removeClassName(this.parent.$dom, removeState);
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
}(Base), (_applyDecoratedDescriptor$2(_class$2.prototype, 'screenChange', [toxicDecorators.autobind], _Object$getOwnPropertyDescriptor(_class$2.prototype, 'screenChange'), _class$2.prototype)), _class$2);

/**
 * play 配置
 */

var defaultOption$5 = {
  tag: 'chimee-clarity',
  width: '2em',
  html: '\n    <chimee-clarity-text></chimee-clarity-text>\n    <chimee-clarity-list>\n      <ul></ul>\n      <div class="chimee-clarity-list-arrow">\n        <svg viewBox="0 0 115 6"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Group-3-Copy" fill="#57B0F6">\n            <polygon id="Path-2" points="0.0205224145 0.0374249581 0.0205224145 2.12677903 53.9230712 2.12677903 57.1127727 5.3468462 60.2283558 2.12677903 113.820935 2.12677903 113.820935 0.0374249581"></polygon>\n          </g>\n        </svg>\n      </div>\n    </chimee-clarity-list>\n  ',
  defaultEvent: {
    click: 'click'
  }
};

var Clarity = function (_Base) {
  _inherits(Clarity, _Base);

  function Clarity(parent, option) {
    _classCallCheck(this, Clarity);

    var _this = _possibleConstructorReturn(this, (Clarity.__proto__ || _Object$getPrototypeOf(Clarity)).call(this, parent));

    _this.option = chimeeHelper.deepAssign(defaultOption$5, chimeeHelper.isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Clarity, [{
    key: 'init',
    value: function init() {
      _get(Clarity.prototype.__proto__ || _Object$getPrototypeOf(Clarity.prototype), 'create', this).call(this);
      chimeeHelper.addClassName(this.$dom, 'chimee-flex-component');

      this.$text = chimeeHelper.$(this.$dom).find('chimee-clarity-text');
      this.$list = chimeeHelper.$(this.$dom).find('chimee-clarity-list');
      this.$listUl = this.$list.find('ul');

      // 用户自定义配置
      this.option.width && chimeeHelper.setStyle(this.$dom, 'width', this.option.width);

      this.initTextList();
    }
  }, {
    key: 'initTextList',
    value: function initTextList() {
      var _this2 = this;

      this.option.list.forEach(function (item) {
        var li = chimeeHelper.$(document.createElement('li'));
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
      var elem = e.target;
      if (elem.tagName === 'LI') {
        _Array$from(elem.parentElement.children).map(function (item) {
          chimeeHelper.removeClassName(item, 'active');
        });
        var url = elem.getAttribute('data-url') || '';
        chimeeHelper.addClassName(e.target, 'active');
        this.$text.text(e.target.textContent);
        this.switchClarity(url);
      }
    }
  }, {
    key: 'switchClarity',
    value: function switchClarity(url) {
      var _this3 = this;

      if (this.loadOption) {
        this.loadOption.abort = true;
      }
      this.loadOption = {
        abort: false,
        repeatTimes: 3,
        increment: 1,
        immediate: true
      };
      var currentTime = this.parent.currentTime;
      this.parent.$silentLoad(url, this.loadOption).then(function () {
        _this3.parent.currentTime = currentTime;
        _this3.loadOption = undefined;
      }).catch(function (e) {});
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

var majorColorStyle = '\n  .chimee-flex-component svg g{\n    fill: majorColor;\n    stroke: majorColor;\n  }\n  chimee-progressbar-all{\n    background: majorColor;\n  }\n  chimee-volume.chimee-flex-component chimee-volume-bar-all{\n    background: majorColor;    \n  }\n  chimee-clarity-list li:hover,\n  chimee-clarity-list li.active {\n    color: majorColor;\n  }\n';

var hoverColorStyle = '\n  .chimee-flex-component svg:hover g{\n    fill: hoverColor;\n    stroke: hoverColor;\n  }\n';

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
  operable: false,
  penetrate: false,
  create: function create() {},
  init: function init(videoConfig) {
    if (videoConfig.controls === false) return;
    this.show = true;
    videoConfig.controls = false;
    var _this = this;
    toxicDecorators.applyDecorators(videoConfig, {
      controls: toxicDecorators.accessor({
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
    this.config = chimeeHelper.isObject(this.$config) ? chimeeHelper.deepAssign(defaultConfig, this.$config) : defaultConfig;
    this.$dom.innerHTML = '<chimee-control-wrap></chimee-control-wrap>';
    this.$wrap = this.$dom.querySelector('chimee-control-wrap');
    this.children = createChild(this);
    this._setStyle();
  },
  destroy: function destroy() {
    window.clearTimeout(this.timeId);
  },
  inited: function inited() {
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
      this._hideItself();
    },
    pause: function pause() {
      this.children.play && this.children.play.changeState('pause');
      this._showItself();
    },
    load: function load() {},
    c_touchmove: function c_touchmove() {
      this._mousemove();
    },
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
    touchstart: function touchstart(e) {
      !this.disabled && this.children.play && this.children.play.click(e);
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
        chimeeHelper.setStyle(_this3.$wrap, {
          bottom: bottom + 'px'
        });
        chimeeHelper.setStyle(_this3.$dom, {
          visibility: 'hidden'
        });
      }, 2000);
    },
    _showItself: function _showItself() {
      window.clearTimeout(this.timeId);
      chimeeHelper.setStyle(this.$wrap, {
        bottom: '0'
      });
      chimeeHelper.setStyle(this.$dom, {
        visibility: 'visible'
      });
    },
    _display: function _display() {
      var display = this.show ? 'block' : 'none';
      chimeeHelper.setStyle(this.$dom, {
        display: display
      });
    },
    _mousemove: function _mousemove(e) {
      if (this.paused) return;
      this._showItself();
      this._hideItself();
    },

    // controlbar 不可以点
    // 键盘／鼠标事件不监听
    _disable: function _disable(disabled) {
      this.disabled = disabled;
      chimeeHelper.setStyle(this.$wrap, 'pointerEvents', disabled ? 'none' : 'auto');
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

module.exports = chimeeControl;
