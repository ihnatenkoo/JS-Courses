import { transformState } from './transformState';

const transformsArray1 = [
  {
    operation: 'addProperties',
    properties: { yet: 'another property' },
  },
  { operation: 'clear' },
  {
    operation: 'addProperties',
    properties: {
      foo: 'bar',
      name: 'Jim',
    },
  },
];

const transformsArray2 = [
  {
    operation: 'addProperties',
    properties: {
      name: 'Jim',
    },
  },
];

const transformArray3 = [
  {
    operation: 'removeProperties',
    properties: ['another'],
  },
  { operation: 'clear' },
  { operation: 'clear' },
  { operation: 'clear' },
  {
    operation: 'addProperties',
    properties: { yet: 'another property' },
  },
  { operation: 'clear' },
  {
    operation: 'addProperties',
    properties: {
      foo: 'bar',
      name: 'Jim',
    },
  },
  {
    operation: 'removeProperties',
    properties: ['name', 'hello'],
  },
];

describe('transformState accepting 2 arguments state and transforms. It should change the state based on the given transforms and return it', () => {
  test('Should work with a long list of operations', () => {
    expect(
      transformState(
        {
          foo: 'bar',
          name: 'Jim',
          another: 'one',
        },
        transformsArray1,
      ),
    ).toEqual({
      foo: 'bar',
      name: 'Jim',
    });
  });

  test('Test addProperties operation with empty object', () => {
    expect(transformState({}, transformsArray2)).toEqual({
      name: 'Jim',
    });
  });

  test('Test clear operation', () => {
    expect(
      transformState(
        {
          foo: 'bar',
          name: 'Jim',
          another: 'one',
        },
        [{ operation: 'clear' }],
      ),
    ).toEqual({});
  });

  test('Should work with a long list of operations', () => {
    expect(
      transformState(
        {
          foo: 'bar',
          name: 'Jim',
          another: 'one',
        },
        transformArray3,
      ),
    ).toEqual({ foo: 'bar' });
  });
});
