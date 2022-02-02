import { invertObject } from './invertObject';

describe('invertObject inverts an object. Every `key: value` should be `value: key` in the object that you return', () => {
  test('Should return empty object {}, when pass {}', () => {
    expect(invertObject({})).toEqual({});
  });

  test('Should return empty {bar: foo}, when pass {foo: bar}', () => {
    expect(invertObject({ foo: 'bar' })).toEqual({ bar: 'foo' });
  });

  test('Should return {2: "1", 4: "2", 6: "3"}, when pass {"1": 2, "2": 4, "3": 6}', () => {
    expect(
      invertObject({
        1: 2,
        2: 4,
        3: 6,
      }),
    ).toEqual({
      2: '1',
      4: '2',
      6: '3',
    });
  });

  test('Should return null, when pass {"foo": "bar", "hello": "world", "js": "bar"}', () => {
    expect(
      invertObject({
        foo: 'bar',
        hello: 'world',
        js: 'bar',
      }),
    ).toEqual(null);
  });
});
