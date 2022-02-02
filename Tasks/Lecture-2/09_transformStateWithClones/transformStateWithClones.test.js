import { transformStateWithClones } from './transformStateWithClones';

const transformsArray1 = [
  {
    operation: 'addProperties',
    properties: {
      name: 'Jim',
      hello: 'world',
    },
  },
  {
    operation: 'removeProperties',
    properties: ['bar', 'hello'],
  },
  {
    operation: 'addProperties',
    properties: { another: 'one' },
  },
];

const resultTest1 = [
  {
    foo: 'bar',
    bar: 'foo',
    name: 'Jim',
    hello: 'world',
  },
  {
    foo: 'bar',
    name: 'Jim',
  },
  {
    foo: 'bar',
    name: 'Jim',
    another: 'one',
  },
];

const transformsArray2 = [
  {
    operation: 'addProperties',
    properties: { yet: 'another property' },
  },
  { operation: 'clear' },
  { operation: 'clear' },
  {
    operation: 'addProperties',
    properties: {
      foo: 'bar',
      name: 'Jim',
    },
  },
];

const resultsTest2 = [
  {
    foo: 'bar',
    bar: 'foo',
    yet: 'another property',
  },
  {},
  {},
  {
    foo: 'bar',
    name: 'Jim',
  },
];

describe('Accep 2 arguments state and transforms. Return array where each element has to represent the state produced by the next operation', () => {
  test('Should work with a long list of operations: addProperties => removeProperties => addProperties', () => {
    expect(
      transformStateWithClones(
        {
          foo: 'bar',
          bar: 'foo',
        },
        transformsArray1,
      ),
    ).toEqual(resultTest1);
  });

  test('Should work with a long list of operations: addProperties => clear => clear => addProperties', () => {
    expect(
      transformStateWithClones(
        {
          foo: 'bar',
          bar: 'foo',
        },
        transformsArray2,
      ),
    ).toEqual(resultsTest2);
  });

  test('Test operation addProperties with empty object', () => {
    expect(
      transformStateWithClones({}, [
        {
          operation: 'addProperties',
          properties: { name: 'Jim' },
        },
      ]),
    ).toEqual([{ name: 'Jim' }]);
  });
});
