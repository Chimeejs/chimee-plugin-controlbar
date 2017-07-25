import * as event from 'index';
const tempEl = document.createElement('div');
/* 添加到文档用于测试选择器 */
document.body.appendChild(tempEl);

/* 属性操作 */
const _target = { name: 'test_obj_name' };
const _type = 'evt_type';
let _count = 0;
const _handler = e => { _count++; };

test('addEventCache', () => {
  _count = 0;
  event.addEventCache(_target, _type, _handler);
  event.emitEventCache(_target, _type);
  expect(_count).toBe(1);
});
test('removeEventCache', () => {
  _count = 0;
  event.removeEventCache(_target, _type, _handler);
  event.emitEventCache(_target, _type);
  expect(_count).toBe(0);
});
test('addEventCache - handlerWrap', () => {
  _count = 0;
  event.addEventCache(_target, _type, _handler, () => { _count++; });
  event.emitEventCache(_target, _type);
  expect(_count).toBe(1);
});
test('removeEventCache - handlerWrap', () => {
  _count = 0;
  event.removeEventCache(_target, _type, _handler);
  event.emitEventCache(_target, _type);
  expect(_count).toBe(0);
});
test('addEventCache - once', () => {
  _count = 0;
  event.addEventCache(_target, _type, _handler, true);
  event.emitEventCache(_target, _type);
  expect(_count).toBe(1);
});
test('removeEventCache - once', () => {
  _count = 0;
  event.addEventCache(_target, _type, ()=>{}, true);
  event.removeEventCache(_target, _type, _handler, true);
  event.emitEventCache(_target, _type);
  expect(_count).toBe(0);
});
test('removeEventCache - onceAll', () => {
  _count = 0;
  event.addEventCache(_target, _type, _handler, true);
  event.removeEventCache(_target, _type, undefined, true);
  event.emitEventCache(_target, _type);
  expect(_count).toBe(0);
});

test('emitEventCache - ret text', done => {
  const tar = {};
  const emit_arg = 'text';
  const emit_fun = (e) => {
    expect(e.data).toBe(emit_arg);
    done();
  };
  event.addEventCache(tar, _type, emit_fun);
  event.emitEventCache(tar, _type, emit_arg);
});
test('emitEventCache - ret arr', done => {
  const tar = {};
  const emit_arg = [ 'arr' ];
  const emit_fun = (e) => {
    expect(e.data).toBe(emit_arg);
    done();
  };
  event.addEventCache(tar, _type, emit_fun);
  event.emitEventCache(tar, _type, emit_arg);
});
test('emitEventCache - ret obj', done => {
  const tar = {};
  const emit_arg = { src: 'test' };
  const emit_fun = (e) => {
    expect(e.src).toBe(emit_arg.src);
    done();
  };
  event.addEventCache(tar, _type, emit_fun);
  event.emitEventCache(tar, _type, emit_arg);
});

test('CustEvent - targetEmpty', () => {
  const _custEvent = new event.CustEvent();
  expect(_custEvent.__target).toBe(_custEvent);
});

test('CustEvent - targetErr', () => {
  expect(() => new event.CustEvent('a')).toThrow('target');
});

test('CustEvent - target', () => {
  const targetObj = { name: 'test_target_name' };
  const custEvent = new event.CustEvent(targetObj);
  expect(custEvent.__target.name).toBe(targetObj.name);
});

const _targetObj = { name: 'test_assign_name' };
const _custEvent = new event.CustEvent(_targetObj, true);
test('CustEvent - target assign', () => {
  console.log(_targetObj.on)
  expect(_targetObj.on).toBeInstanceOf(Function);
  expect(_targetObj.once).toBeInstanceOf(Function);
  expect(_targetObj.off).toBeInstanceOf(Function);
  expect(_targetObj.emit).toBeInstanceOf(Function);
});
test('CustEvent - on', () => {
  _count = 0;
  _custEvent.on(_type, _handler);
  _custEvent.emit(_type);
  expect(_count).toBe(1);
});
test('CustEvent - once', () => {
  _count = 0;
  _custEvent.off(_type);
  _custEvent.once(_type, _handler);
  _custEvent.emit(_type);
  _custEvent.emit(_type);
  expect(_count).toBe(1);
});
test('CustEvent - off', () => {
  _count = 0;
  _custEvent.off(_type, _handler);
  _custEvent.emit(_type);
  expect(_count).toBe(0);
});
test('CustEvent - emit ret', done => {
  _count = 0;
  _custEvent.on(_type, e => {
    expect(e.data).toBe('test');
    done();
  });
  _custEvent.emit(_type, 'test');
});
test('CustEvent - off all', () => {
  _count = 0;
  _custEvent.on(_type, _handler);
  _custEvent.off(_type);
  expect(_count).toBe(0);
});
