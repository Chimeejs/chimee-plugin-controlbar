import * as utils from 'index';

describe('deepClone', () => {
  expect(() => utils.deepClone()).toThrow('deepClone only accept non primitive type');
    // 不考虑循环引用
  const examples = [
    [1, 2, 3, {a: 1, b: {c: 2, d: [912, {a: 1}]}}],
    {a: 1},
    {a: 1, b: '2', c: {d: 3, e: [1, 3, 4], f: {g: 1, e: 2, p: [1, {a: 1, e: 2}, {a: 1, d: 2}]}}}
  ];
  const results = examples;
  examples.forEach((example, index) => {
    test(index.toString(), () => {
      const answer = utils.deepClone(example);
      expect(answer).not.toBe(results[index]);
      expect(answer).toEqual(results[index]);
    });
  });
});

describe('deepAssign', () => {
  test('throw error', () => {
    expect(() => utils.deepAssign()).toThrow('deepAssign accept two and more argument');
    expect(() => utils.deepAssign(1)).toThrow('deepAssign accept two and more argument');
    expect(() => utils.deepAssign(1, 2)).toThrow('deepAssign only accept non primitive type');
  });
  const examples = [
    [[], []], [[0, 1, 2, 3, 4], [5, 6, 7, 8]], [[0, 1, 2], [4, 5, 6], [7, 8, 9]], [[], [0, 1, 2]],
    [[0, 1, 2], []], [[0, 1, 2], {}], [{}, [0, 1, 2]], [{'0': 0, '1': 1, '2': 2}, [7, 8, 9]],
    [[7, 8, 9], {'0': 0, '1': 1, '2': 2}],
    [{}, {}], [{}, {a: 1}], [{a: 1}, {b: 1}],
    [{a: 1}, {a: 2}], [{a: 1, b: 2}, {c: 3, d: 4}], [{a: 1, b: 2}, {b: 3, c: 4}], [{a: 1}, {b: {c: 1, d: 4}}],
    [{a: 1, b: {c: 1, d: 4, e: 5}}, {a: 1, b: {c: 21, d: 4}}]
  ];
  const results = [
    [], [5, 6, 7, 8, 4], [7, 8, 9], [0, 1, 2],
    [0, 1, 2], [0, 1, 2], {'0': 0, '1': 1, '2': 2}, {'0': 7, '1': 8, '2': 9},
    [0, 1, 2],
    {}, {a: 1}, {a: 1, b: 1},
    {a: 2}, {a: 1, b: 2, c: 3, d: 4}, {a: 1, b: 3, c: 4}, {a: 1, b: {c: 1, d: 4}},
    {a: 1, b: {c: 21, d: 4, e: 5}}
  ];
  examples.forEach((example, index) => {
    test(index.toString(), () => {
      const origin = example[0];
      const result = utils.deepAssign(...example);
      expect(origin).toBe(result);
      expect(result).toEqual(results[index]);
    });
  });
});
describe('camelize', () => {
  const examples = [
    'helloWorld', 'hello world', 'hello-world', 'hello - world',
    'HelloWorld', '   Hello, world'
  ];
  examples.forEach((example, index) => {
    test('small ' + index.toString(), () => {
      expect(utils.camelize(example)).toBe('helloWorld');
    });
  });
  const examples2 = [
    'helloWorld', 'hello world', 'hello-world', 'hello - world',
    'HelloWorld', '   Hello, world'
  ];
  examples2.forEach((example, index) => {
    test('big ' + index.toString(), () => {
      expect(utils.camelize(example, true)).toBe('HelloWorld');
    });
  });
});

describe('hypenate', () => {
  const examples = ['helloWorld', '  hello  world', 'hello-world', 'HelloWorld'];
  examples.forEach((example, index) => {
    test(index.toString(), () => {
      expect(utils.hypenate(example)).toBe('hello-world');
    });
  });
});

describe('bind', () => {
  test('use bind', () => {
    const foo = {};
    function bar () {
      expect(this).toBe(foo);
    }
    utils.bind(bar, foo)();
  });
  test('use apply', () => {
    const foo = {};
    function bar () {
      expect(this).toBe(foo);
    }
    bar.bind = null;
    utils.bind(bar, foo)();
  });
  test('use call', () => {
    const foo = {};
    function bar () {
      expect(this).toBe(foo);
    }
    bar.bind = null;
    bar.apply = null;
    utils.bind(bar, foo)();
  });
});

test('rand', () => {
  expect(utils.rand(4).length).toBe(4);
});

test('uuid', () => {
  expect(utils.uuid()).not.toEqual(utils.uuid());
});
