import { getData, sortData } from './main';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

beforeEach(() => fetch.mockClear());

describe('Data request with sort function', () => {
  beforeEach(() => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { category: 'b' },
            { category: 'c' },
            { category: 'a' },
          ]),
      })
    );
  });

  test('should return value from backend', async () => {
    const result = await getData('https://fakestoreapi.com/products');

    expect(result).toEqual([
      { category: 'b' },
      { category: 'c' },
      { category: 'a' },
    ]);
  });

  test('should sorted initial array', async () => {
    const result = await sortData();

    expect(result).toEqual([
      { category: 'a' },
      { category: 'b' },
      { category: 'c' },
    ]);
  });

  test('fetch should be called once with https://fakestoreapi.com/products', async () => {
    await sortData();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });
});
