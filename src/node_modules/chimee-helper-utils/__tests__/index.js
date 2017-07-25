import * as utils from 'index';

describe('runRejectableQueue', async () => {
  test('empty', () => {
    expect(utils.runRejectableQueue([])).resolves.toBe();
  });
  test('no function', () => {
    expect(utils.runRejectableQueue([1, 2, 3])).resolves.toBe();
  });
  test('no function but has a false', () => {
    expect(utils.runRejectableQueue([1, 2, false, 3])).rejects.toMatch('stop');
  });
  test('functions', () => {
    expect(utils.runRejectableQueue([
      () => {},
      () => {},
      () => {}
    ])).resolves.toBe();
  });
  test('functions and promise', () => {
    expect(utils.runRejectableQueue([
      () => {},
      Promise.resolve(),
      () => new Promise(resolve => resolve())
    ])).resolves.toBe();
  });
  test('function and promise.reject', () => {
    expect(utils.runRejectableQueue([
      () => {},
      Promise.reject(),
      () => new Promise(resolve => resolve())
    ])).rejects.toMatch('stop');
  });
  test('function return promise.reject', () => {
    expect(utils.runRejectableQueue([
      () => {},
      Promise.resolve(),
      () => new Promise((resolve, reject) => reject())
    ])).rejects.toMatch('stop');
  });
  test('order', async () => {
    const checkArray = [];
    await expect(utils.runRejectableQueue([
      () => checkArray.push(1),
      () => checkArray.push(2),
      () => false,
      () => checkArray.push(3),
      () => checkArray.push(4),
    ])).rejects.toMatch('stop');
    expect(checkArray).toEqual([1, 2]);
  });
  test('error catch', async () => {
    const error = new Error('i am an error');
    await expect(utils.runRejectableQueue([
      () => {},
      () => {},
      () => {throw error;}
    ])).rejects.toBe(error);
  });
});

test('runStoppableQueue', async () => {
  expect(utils.runStoppableQueue([])).toBe(true);
  expect(utils.runStoppableQueue([1, 2, 3])).toBe(true);
  expect(utils.runStoppableQueue([1, 2, false, 3])).toBe(false);
  expect(utils.runStoppableQueue([
    () => {},
    () => {},
    () => {}
  ])).toBe(true);
  expect(utils.runStoppableQueue([
    () => {},
    Promise.resolve(),
    () => new Promise(resolve => resolve())
  ])).toBe(true);
  const checkArray = [];
  await expect(utils.runStoppableQueue([
    () => checkArray.push(1),
    () => checkArray.push(2),
    () => false,
    () => checkArray.push(3),
    () => checkArray.push(4),
  ])).toBe(false);
  expect(checkArray).toEqual([1, 2]);
});

test('decodeUTF8', () => {
  const examples = [
    new Uint8Array(10),
    new Uint8Array(10).map((v, i)=>{ return 0x70; }),
    new Uint8Array(10).map((v, i)=>{ return 0xA0; }),
    new Uint8Array(10).map((v, i)=>{ return 0xE0; }),
    new Uint8Array(10).map((v, i)=>{ return 0xF7; })
  ];
  examples.forEach(example => {
    expect(utils.decodeUTF8(example)).toHaveLength(10);
  });
});

test('setFrozenAttr', () => {
  const obj = {};
  expect(() => utils.setFrozenAttr(obj, 1, 1)).toThrow();
  expect(() => utils.setFrozenAttr(1, 1, 1)).toThrow();
  utils.setFrozenAttr(obj, 'test', 1);
  expect(obj.test).toBe(1);
  expect(() => {obj.test = 2;}).toThrow();
  expect(() => {delete obj.test;}).toThrow();
  const keys = [];
  for(const key in obj) keys.push(key);
  expect(keys).toEqual([]);
});

test('setAttrGetterAndSetter', () => {
  const obj = {};
  expect(() => utils.setAttrGetterAndSetter(1, 2)).toThrow();
  expect(() => utils.setAttrGetterAndSetter(obj, 2)).toThrow();
  const result = [];
  const set = val => {
    result.push(val);
    return ++val;
  };
  utils.setAttrGetterAndSetter(obj, 'a', {set});
  obj.a = 1;
  expect(obj.a).toBe(2);
  expect(obj.__a).toBe(2);
  expect(result).toEqual([1]);
  utils.setAttrGetterAndSetter(obj, 'b', {set}, '$');
  obj.b = 1;
  expect(obj.b).toBe(2);
  expect(obj.__b).toBe(undefined);
  expect(obj.$b).toBe(2);
  expect(result).toEqual([1, 1]);
  const option = {
    get () {return this.__a;},
    set (val) {this.__a = val + 2;}
  };
  utils.setAttrGetterAndSetter(obj, 'c', option);
  obj.c = 3;
  expect(obj.a).toBe(5);
  expect(obj.c).toBe(5);
  expect(obj.__a).toBe(5);
  expect(obj.__c).toBe(undefined);
  utils.setAttrGetterAndSetter(obj, 'd', {});
  expect(() => {obj.d = 3;}).toThrow();
  expect(obj.d).toBe();
});

test('transObjectAttrIntoArray', () => {
  expect(utils.transObjectAttrIntoArray({})).toEqual([]);
  expect(utils.transObjectAttrIntoArray({1: 'a', 2: 'b'})).toEqual(['a', 'b']);
  expect(utils.transObjectAttrIntoArray({1: 'a', 2: 'b'}, (b, a) => +a - +b)).toEqual(['b', 'a']);
});
describe('throttle - 节流函数', () =>{
  test('throttle', done => { 
    const staDate = new Date();
    const throttleFn = utils.throttle(() => {
      expect(new Date - staDate).toBeGreaterThanOrEqual(0);
      done();
    });
    throttleFn();
  });
  test('throttle once', done => { 
    // 100 毫秒内调用多次，只执行1次
    let count = 0;
    const fn = utils.throttle(() => {
      count ++;
      //console.log('count:', count);
      expect(count).toBe(1);
      done();
    }, 100);
    for(let i=0; i<10; i++) fn();
  });
  test('throttle Wait', done => {
    const staDate = new Date();
    const throttleWaitFn = utils.throttle(() => {
      expect(new Date - staDate).toBeGreaterThanOrEqual(10);
      done();
    },10, { leading: false });
    throttleWaitFn();
  });
  test('throttle Wait&Timeout', done => {
    const staDate = new Date();
    const fn = utils.throttle(() => {
      done();
      return 123;
    }, 10, { leading: false, trailing: true });
    fn(); // 不到点调用，启用定时器
    const _date = window.Date;
    window.Date = function(){
      this.valueOf = function(){
        return new _date()-100;
      }
    };
    fn();
    window.Date = _date;
  });

  test('throttle Ctx', done => {
    const staDate = new Date();
    const throttleFn = utils.throttle(() => {
      expect(new Date - staDate).toBeGreaterThanOrEqual(0);
      done();
    }, 0, {}, {ctx: 'isMe'});
    throttleFn();
  });
});

test('animationFrame', done => {

  /* 重写掉系统方法，以测试最低兼容 */
  const _requestAnimationFrame = window.requestAnimationFrame;
  const _mozRequestAnimationFrame = window.mozRequestAnimationFrame;
  const _webkitRequestAnimationFrame = window.webkitRequestAnimationFrame;
  const _msRequestAnimationFrame = window.msRequestAnimationFrame;
  const _oRequestAnimationFrame = window.oRequestAnimationFrame;
  const _cancelAnimationFrame = window.cancelAnimationFrame;
  const _mozCancelAnimationFrame = window.mozCancelAnimationFrame;
  const _webkitCancelAnimationFrame = window.webkitCancelAnimationFrame;
  const _webkitCancelRequestAnimationFrame = window.webkitCancelRequestAnimationFrame;
  const _msCancelAnimationFrame = window.msCancelAnimationFrame;
  const _oCancelAnimationFrame = window.oCancelAnimationFrame;
  window.requestAnimationFrame = window.mozRequestAnimationFrame = window.webkitRequestAnimationFrame = window.msRequestAnimationFrame = window.oRequestAnimationFrame = window.requestAnimationFrame = window.mozRequestAnimationFrame = window.webkitRequestAnimationFrame = window.msRequestAnimationFrame = window.oRequestAnimationFrame = null;

  // requestAnimationFrame
  const staDate = new Date();
  utils.raf(()=>{
    // 模拟时定时器延迟为17毫秒
    expect(new Date - staDate).toBeGreaterThanOrEqual(17);
    done();
  });

  // cancelAnimationFrame
  const cbk = jest.fn();
  const id = utils.raf(cbk);
  utils.caf(id);
  utils.raf(() => {
    expect(cbk).not.toBeCalled();
    done();
  });

  /* 恢复系统方法 */
  window.requestAnimationFrame = _requestAnimationFrame;
  window.mozRequestAnimationFrame = _mozRequestAnimationFrame;
  window.webkitRequestAnimationFrame = _webkitRequestAnimationFrame;
  window.msRequestAnimationFrame = _msRequestAnimationFrame;
  window.oRequestAnimationFrame = _oRequestAnimationFrame;
  window.cancelAnimationFrame = _cancelAnimationFrame;
  window.mozCancelAnimationFrame = _mozCancelAnimationFrame;
  window.webkitCancelAnimationFrame = _webkitCancelAnimationFrame;
  window.webkitCancelRequestAnimationFrame = _webkitCancelRequestAnimationFrame;
  window.msCancelAnimationFrame = _msCancelAnimationFrame;
  window.oCancelAnimationFrame = _oCancelAnimationFrame;
});

test('strRepeat', () => {
  expect(utils.strRepeat(9, 2)).toBe('09');
  expect(utils.strRepeat(9)).toBe('9');
  expect(utils.strRepeat('')).toBe('');
});

test('formatTime', () => {
  expect(utils.formatTime(120)).toBe('02:00');
  expect(utils.formatTime(120.2)).toBe('02:00');
});


describe('addTransMethod', () => {
  const obj = {
    val: 123,
    test(){
      expect(this.val).toBe(123);
    }
  };
  test('add trans', () => {
    utils.addTransMethod(obj);
    expect(typeof obj.trans).toBe('function');
  });
  test('run trans', () => {
    obj.trans('test')();
    expect(obj.trans('test_')).toThrow('obj.trans(methodName) parameter must be Function');
  });
});

test('appendCSS', () => {
  const cssText = `
    test { width: 1px }
    test-tag {top: 2px;}
  `;
  utils.appendCSS(cssText);
  expect(document.querySelector('style').innerHTML).toBe(cssText);

  const cssText2 = ' a{ b：22 }';
  utils.appendCSS(cssText2);
  expect(document.querySelector('style').innerHTML).toBe(cssText + '' + cssText2);
});
