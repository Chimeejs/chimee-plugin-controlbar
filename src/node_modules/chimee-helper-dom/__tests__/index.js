import * as dom from 'index';

const tempEl = document.createElement('div');
/* 添加到文档用于测试选择器 */
document.body.appendChild(tempEl);

/* 属性操作 */
const attrName = 'attr';
const attrVal = 'val';
test('setAttr && getAttr', () => {
  dom.setAttr(tempEl, attrName, attrVal);
  expect(dom.getAttr(tempEl, attrName)).toBe(attrVal);

  dom.setAttr(tempEl, attrName); // 清空
  expect(dom.getAttr(tempEl, attrName)).toBe(null);
});

/* 类名操作 */
const className = 'test-cls';
const classNames = 'test-cls1 test-cls2';
test('addClassName', () => {
  dom.addClassName(tempEl, className);
  expect(tempEl.className).toBe(className);

  dom.addClassName(tempEl, classNames);
  expect(tempEl.className).toBe(className + ' ' + classNames);

});

test('hasClassName', () => {
  expect(dom.hasClassName(tempEl, className)).toBe(true);
  expect(dom.hasClassName(tempEl, classNames)).toBe(true);
});

test('removeClassName', () => {
  dom.removeClassName(tempEl, className);
  expect(dom.hasClassName(tempEl, className)).toBe(false);
  dom.removeClassName(tempEl, classNames);
  dom.removeClassName(tempEl); // 未传递className 啥也不干
  expect(dom.hasClassName(tempEl, classNames)).toBe(false);
});

/* 事件操作 */
let evtCount = 0;
const evtHandler = e => evtCount++;
test('addEvent', () => {
  evtCount = 0;
  dom.addEvent(tempEl, 'click', evtHandler);
  tempEl.click();
  tempEl.click();
  expect(evtCount).toBe(2);
});

test('removeEvent', () => {
  dom.removeEvent(tempEl, 'click', evtHandler);
  tempEl.click();
  expect(evtCount).toBe(2);
});

test('addEvent - Once', () => {
  evtCount = 0;
  dom.addEvent(tempEl, 'click', evtHandler, true);
  tempEl.click();
  tempEl.click();
  expect(evtCount).toBe(1);
  dom.removeEvent(tempEl, 'click', evtHandler, true);
});

test('removeEvent - Once', () => {
  evtCount = 0;
  dom.addEvent(tempEl, 'click', evtHandler, true);
  dom.removeEvent(tempEl, 'click', evtHandler, true);
  tempEl.click();
  expect(evtCount).toBe(0); // remove后evtCount不再累加保持0
});

tempEl.innerHTML = `
  <a>aaa</a>
  <b>bbb</b>
`;

test('addDelegate', () => {
  evtCount = 0;
  dom.addDelegate(tempEl, 'a', 'click', evtHandler);
  const aEl = tempEl.querySelector('a');

  /* 通过实例化Event实现冒泡 */
  const clickEvent = new window.Event('click', { bubbles: true });
  clickEvent.srcElement = aEl; // NODE环境下srcElement需要手动赋值
  aEl.dispatchEvent(clickEvent);

  expect(evtCount).toBe(1);
});
test('removeDelegate', () => {
  evtCount = 0;
  dom.removeDelegate(tempEl, 'a', 'click', evtHandler);
  const aEl = tempEl.querySelector('a');

  /* 通过实例化Event实现冒泡 */
  const clickEvent = new window.Event('click', { bubbles: true });
  clickEvent.srcElement = aEl; // NODE环境下srcElement需要手动赋值
  aEl.dispatchEvent(clickEvent);

  expect(evtCount).toBe(0);
});

const styleKey = 'width';
const styleVal = '1px';
test('setStyle && getStyle', () => {
  dom.setStyle(tempEl, styleKey, styleVal);
  expect(dom.getStyle(tempEl, styleKey)).toBe(styleVal);
  dom.setStyle(tempEl, { width: '2px' });
  expect(dom.getStyle(tempEl, styleKey)).toBe('2px');
});

test('query', () => {
  const queryRet = dom.query('div');
  expect(queryRet).toHaveLength(1);
  expect(queryRet[0].tagName.toLocaleLowerCase()).toBe('div');
  expect(queryRet.constructor).toBe(NodeList);
  /* 强制返回Array */
  expect(dom.query('div', document, true).constructor).toBe(Array);
});

test('findParents', () => {
  expect(dom.findParents(tempEl)).toHaveLength(3); // body->html->document
  expect(dom.findParents(tempEl, document.body)).toHaveLength(0); // 到body停止且不包含body
  expect(dom.findParents(tempEl, document.body, false, true)).toHaveLength(1); // 到body停止且包含body
  expect(dom.findParents(tempEl, document.body, true, true)).toHaveLength(2); // 到body停止且包含body和元素自己
});

test('removeEl', () => {
  const box = document.createElement('div');
  box.innerHTML = '<a>a</a>';
  dom.removeEl(box.querySelector('a'));
  expect(box.querySelector('a')).toBeNull();
});

const testHTML = '<a>a</a><b>b</b>';
test('$', () => {
  /* HTMLElenemt */
  expect(dom.$(tempEl)).toHaveLength(1);
  /* selector */
  const divWrap = dom.$('div');
  expect(divWrap).toHaveLength(1);
  /* NodeWrap */
  expect(dom.$(divWrap)).toHaveLength(1);
  /* selector && container */
  expect(dom.$('div', document.body)).toHaveLength(1);
  /* HTMLString */
  expect(dom.$(testHTML)).toHaveLength(2);
  /* NodeList */
  expect(dom.$(document.querySelectorAll('div'))[0].tagName.toLocaleLowerCase()).toBe('div');
  /* Array */
  expect(dom.$([tempEl])[0].tagName.toLocaleLowerCase()).toBe('div');
  /* 任意其他对象 */
  expect(dom.$({ any: 1 })).toHaveLength(1);
});

const doms = new dom.NodeWrap(tempEl);
test('NodeWrap.each', () => {
  let tag = '';
  doms.each(el => { tag = el.tagName; });
  expect(tag.toLocaleLowerCase()).toBe('div');
});
test('NodeWrap.push', () => {
  doms.push(document);
  expect(doms).toHaveLength(2);
});
test('NodeWrap.splice', () => {
  doms.splice(1, 1);
  expect(doms).toHaveLength(1);
  expect(tempEl.tagName.toLocaleLowerCase()).toBe('div');
});
test('NodeWrap.find', () => {
  const childs = doms.find('*');
  expect(childs).toHaveLength(2);
  expect(childs[0].tagName.toLocaleLowerCase()).toBe('a');
});
test('NodeWrap.text', () => {
  doms.text(testHTML);
  expect(doms.text()).toBe(testHTML);
});
test('NodeWrap.html', () => {
  doms.html(testHTML);
  expect(doms.html()).toBe(testHTML);
});
test('NodeWrap.attr', () => {
  doms.attr(attrName, attrVal);
  expect(doms.attr(attrName)).toBe(attrVal);
});
test('NodeWrap.data', () => {
  doms.data(attrName, attrVal);
  expect(doms.data(attrName)).toBe(attrVal);
  expect(doms.data()[attrName]).toBe(attrVal);

  const ndElWrap = dom.$({ tagName: 'no-dataset' });
  expect(ndElWrap.data(attrName)).toBeUndefined();
  expect(JSON.stringify(ndElWrap.data())).toBe('{}');
  ndElWrap.data(attrName, attrVal);
  expect(ndElWrap.data(attrName)).toBe(attrVal);
});
test('NodeWrap.css', () => {
  doms.css(styleKey, styleVal);
  expect(doms.css(styleKey)).toBe(styleVal);

  doms.css({ width: '3px' });
  expect(doms.css(styleKey)).toBe('3px');

});
test('NodeWrap.addClass', () => {
  doms.addClass(className);
  expect(tempEl.className).toBe(className);
  doms.addClass(classNames);
  expect(tempEl.className).toBe(className + ' ' + classNames);
});
test('NodeWrap.hasClass', () => {
  expect(doms.hasClass(className)).toBe(true);
  expect(doms.hasClass(classNames)).toBe(true);
});
test('NodeWrap.removeClass', () => {
  doms.removeClass(className);
  expect(tempEl.className).toBe(classNames);
  doms.removeClass(classNames);
  expect(tempEl.className).toBe('');
});
const nclElWrap = dom.$({ tagName: 'test-no-class-list' });
const nclCls = 'no-class-list cls2';
test('NodeWrap.addClass - no classList', () => {
  /* 测试不支持classList的场景 */
  nclElWrap.addClass(nclCls);
  nclElWrap.addClass();
  expect(nclElWrap[0].className).toBe(nclCls);
});
test('NodeWrap.removeClass - no classList', () => {
  /* 测试不支持classList的场景 */
  nclElWrap.removeClass(nclCls);
  expect(nclElWrap[0].className).toBe('');
});

let _count = 0;
const clickHandler = e=>_count++;
test('NodeWrap.on', () => {
  _count = 0;
  dom.$(tempEl).on('click', clickHandler);
  tempEl.click();
  tempEl.click();
  expect(_count).toBe(2);
});
test('NodeWrap.un', () => {
  dom.$(tempEl).off('click', clickHandler);
  tempEl.click();
  expect(_count).toBe(2);
});
test('NodeWrap.on - once', () => {
  _count = 0;
  dom.$(tempEl).on('click', clickHandler, true);
  tempEl.click();
  tempEl.click();
  expect(_count).toBe(1);
  dom.$(tempEl).off('click', clickHandler, true);
});
test('NodeWrap.un - once', () => {
  dom.$(tempEl).on('click', clickHandler, true).off('click', clickHandler, true);
  tempEl.click();
  expect(_count).toBe(1);
});
test('NodeWrap.delegate', () => {
  _count = 0;
  const domWrap = dom.$(tempEl);
  domWrap.delegate('a', 'click', clickHandler);
  const aEl = tempEl.querySelector('a');

  /* 通过实例化Event实现冒泡 */
  const clickEvent = new window.Event('click', { bubbles: true });
  clickEvent.srcElement = aEl; // NODE环境下srcElement需要手动赋值
  aEl.dispatchEvent(clickEvent);

  expect(_count).toBe(1);
});
test('NodeWrap.undelegate', () => {
  _count = 0;
  const domWrap = dom.$(tempEl);
  domWrap.undelegate('a', 'click', clickHandler);
  const aEl = tempEl.querySelector('a');

  /* 通过实例化Event实现冒泡 */
  const clickEvent = new window.Event('click', { bubbles: true });
  clickEvent.srcElement = aEl; // NODE环境下srcElement需要手动赋值
  aEl.dispatchEvent(clickEvent);

  expect(_count).toBe(0);
});

test('NodeWrap.append', () => {
  const domWrap = dom.$('<div>');
  domWrap.append('<i>ii</i>');
  expect(domWrap.find('i')).toHaveLength(1);
});
test('NodeWrap.appendTo', () => {
  const child = dom.$('<h1>');
  const parent = dom.$('<div>');
  child.appendTo(parent);
  expect(parent.find('h1')).toHaveLength(1);
});

test('NodeWrap.remove', () => {
  const $box = dom.$('<div><a>a</a></div>');
  $box.find('a').remove();
  expect($box.find('a')).toHaveLength(0);
});
