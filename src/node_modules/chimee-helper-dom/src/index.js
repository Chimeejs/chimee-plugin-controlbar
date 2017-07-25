import { isArray, isString, isObject } from 'toxic-predicate-functions';
import { addEventCache, removeEventCache } from 'chimee-helper-events';
import {makeArray} from 'chimee-helper-utils';

 /**
 * @module dom
 * @author huzunjie
 * @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
 */

const _divEl = document.createElement('div');
let _textAttrName = 'innerText';
('textContent' in _divEl) && (_textAttrName = 'textContent');
const _arrPrototype = Array.prototype;

/**
 * 读取HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @return {String}
 */
export function getAttr (el, attrName) {
  return el.getAttribute(attrName);
}

/**
 * 设置HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @param {String} attrVal 目标属性值
 */
export function setAttr (el, attrName, attrVal) {
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
export function addClassName (el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  const clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(c => el.classList.add(c));
  } else {
    let curCls = ` ${el.className || ''} `;
    clsArr.forEach(c => {
      curCls.indexOf(` ${c} `) === -1 && (curCls += ' ' + c);
    });
    el.className = curCls.trim();
  }
}

/**
 * 为HTML元素移除className
 * @param {HTMLElement} el 目标元素
 * @param {String} cls 要移除的className（多个以空格分割）
 */
export function removeClassName (el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  const clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(c => el.classList.remove(c));
  } else {
    let curCls = ` ${el.className} `;
    clsArr.forEach(c => {
      const tar = ' ' + c + ' ';
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
export function hasClassName (el, className) {
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
export function removeEvent (el, type, handler, once = false, capture = false) {
  if (once) {
    /* 尝试从缓存中读取包装后的方法 */
    const handlerWrap = removeEventCache(el, type + '_once', handler);
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
export function addEvent (el, type, handler, once = false, capture = false) {
  if (once) {
    const oldHandler = handler;
    handler = (function () {
      return function (...args) {
        oldHandler.apply(this, args);
        removeEvent(el, type, handler, once, capture);
      };
    })();
    /* 将包装后的方法记录到缓存中 */
    addEventCache(el, type + '_once', oldHandler, handler);
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
export function addDelegate (el, selector, type, handler, capture = false) {

  const handlerWrap = function (e) {
    const targetEls = findParents(e.srcElement, el, true);
    const targetEl = query(selector, el, true).find(seEl => targetEls.find(tgEl => (seEl === tgEl)));
    targetEl && handler.apply(targetEl, arguments);

  };
  /* 将包装后的方法记录到缓存中 */
  addEventCache(el, type + '_delegate_' + selector, handler, handlerWrap);
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
export function removeDelegate (el, selector, type, handler, capture = false) {
  /* 尝试从缓存中读取包装后的方法 */
  const handlerWrap = removeEventCache(el, type + '_delegate_' + selector, handler);
  handlerWrap && el.removeEventListener(type, handlerWrap, capture);
}

/**
 * 读取HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @return {String}
 */
export function getStyle (el, key) {
  return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
}

/**
 * 设置HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @param {String} val 样式值
 */
export function setStyle (el, key, val) {
  if (isObject(key)) {
    for(const k in key) {
      setStyle(el, k, key[k]);
    }
  }else{
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
export function query (selector, container = document, toArray) {
  const retNodeList = container.querySelectorAll(selector);
  return toArray ? Array.from(retNodeList) : retNodeList;
}

/**
 * 从DOM树中移除el
 * @param {HTMLElement} el 目标元素
 */
export function removeEl (el) {
  el.parentNode.removeChild(el);
}

/**
 * 查找元素的父节点们
 * @param {HTMLElement} el 目标元素
 * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
 * @param {Boolean} haveEl 包含当前元素
 * @param {Boolean} haveEndEl 包含设定的最大父容器
 */
export function findParents (el, endEl = null, haveEl, haveEndEl) {
  const retEls = [];
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
export function $ (selector, container) {
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
export class NodeWrap {
  constructor (selector, container = document) {

    const _this = this;
    _this.selector = selector;

    /* String||NodeList||HTMLElement 识别处理 */
    let elsArr;
    if (selector && selector.constructor === NodeList) {
      /* 支持直接传入NodeList来构建包装器 */
      elsArr = makeArray(selector);
    } else if (isArray(selector)) {
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
    Object.assign(_this, elsArr);

    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
    _this.length = elsArr.length;
  }

  /**
   * 循环遍历DOM集合
   * @param {Function} fn 遍历函数 fn(item, i)
   * @return {Object}
   */
  each (...args) {
    _arrPrototype.forEach.apply(this, args);
    return this;
  };

  /**
   * 添加元素到DOM集合
   * @param {HTMLElement} el 要加入的元素
   * @return {this}
   */
  push (...args) {
    _arrPrototype.push.apply(this, args);
    return this;
  };

  /**
   * 截取DOM集合片段，并得到新的包装器splice
   * @param {Nubmer} start
   * @param {Nubmer} count
   * @return {NodeWrap} 新的DOM集合包装器
   */
  splice (...args) {
    return $(_arrPrototype.splice.apply(this, args));
  };

  /**
   * 查找子元素
   * @param {String} selector 选择器
   * @return {NodeWrap} 新的DOM集合包装器
   */
  find (selector) {
    let childs = [];
    this.each(el => {
      childs = childs.concat(query(selector, el, true));
    });
    const childsWrap = $(childs);
    childsWrap.parent = this;
    childsWrap.selector = selector;
    return childsWrap;
  }

  /**
   * 添加子元素
   * @param {HTMLElement} childEls 要添加的HTML元素
   * @return {this}
   */
  append (childEls) {
    const childsWrap = $(childEls);
    const firstEl = this[0];
    childsWrap.each(newEl => firstEl.appendChild(newEl));
    return this;
  }

  /**
   * 将元素集合添加到指定容器
   * @param {HTMLElement} parentEl 要添加到父容器
   * @return {this}
   */
  appendTo (parentEl) {
    $(parentEl).append(this);
    return this;
  }

  /**
   * DOM集合text内容读写操作
   * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
   * @return {this}
   */
  text (val) {
    if (arguments.length === 0) {
      return this[0][_textAttrName];
    }
    return this.each(el => {
      el[_textAttrName] = val;
    });
  }

  /**
   * DOM集合HTML内容读写操作
   * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
   * @return {this}
   */
  html (html) {
    if (arguments.length === 0) {
      return this[0].innerHTML;
    }
    return this.each(el => {
      el.innerHTML = html;
    });
  }

  /**
   * DOM集合属性读写操作
   * @param {String} name 属性名称
   * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
   * @return {this}
   */
  attr (name, val) {
    if (arguments.length === 1) {
      return getAttr(this[0], name);
    }
    return this.each(el => setAttr(el, name, val));
  }

  /**
   * DOM集合dataset读写操作
   * @param {String} key 键名
   * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
   * @return {this}
   */
  data (key, val) {
    if (arguments.length === 0) {
      return this[0].dataset || {};
    }
    if (arguments.length === 1) {
      return (this[0].dataset || {})[key];
    }
    return this.each(el => {
      (el.dataset || (el.dataset = {}))[key] = val;
    });
  }

  /**
   * DOM集合样式读写操作
   * @param {String} key 样式key
   * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
   * @return {this}
   */
  css (key, val) {
    if (arguments.length === 1 && !isObject(key)) {
      return getStyle(this[0], key);
    }
    return this.each(el => setStyle(el, key, val));
  }

  /**
   * 为DOM集合增加className
   * @param {String} cls 要增加的className
   * @return {this}
   */
  addClass (cls) {
    return this.each(el => addClassName(el, cls));
  }

  /**
   * 移除当前DOM集合的className
   * @param {String} cls 要移除的className
   * @return {this}
   */
  removeClass (cls) {
    return this.each(el => removeClassName(el, cls));
  }

  /**
   * 检查索引0的DOM是否有className
   * @param {String} cls 要检查的className
   * @return {this}
   */
  hasClass (cls) {
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
  on (type, handler, once = false, capture = false) {
    return this.each(el => addEvent(el, type, handler, once, capture));
  }

  /**
   * 为DOM集合解除事件监听
   * @param {String} type 事件名称
   * @param {Function} handler 处理函数
   * @param {Boolean} once 是否只监听一次
   * @param {Boolean} capture 是否在捕获阶段监听
   * @return {this}
   */
  off (type, handler, once = false, capture = false) {
    return this.each(el => removeEvent(el, type, handler, once, capture));
  }

  /**
   * 为DOM集合绑定事件代理
   * @param {String} selector 目标子元素选择器
   * @param {String} type 事件名称
   * @param {Function} handler 处理函数
   * @param {Boolean} capture 是否在捕获阶段监听
   * @return {this}
   */
  delegate (selector, type, handler, capture = false) {
    return this.each(el => addDelegate(el, selector, type, handler, capture));
  }

  /**
   * 为DOM集合解绑事件代理
   * @param {String} selector 目标子元素选择器
   * @param {String} type 事件名称
   * @param {Function} handler 处理函数
   * @param {Boolean} capture 是否在捕获阶段监听
   * @return {this}
   */
  undelegate (selector, type, handler, capture = false) {
    return this.each(el => removeDelegate(el, selector, type, handler, capture));
  }

  /**
   * 从DOM树中移除
   * @return {this}
   */
  remove () {
    return this.each(el=> removeEl(el));
  }
};

