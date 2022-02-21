import { getCompletedTasks } from './main';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

beforeEach(() => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(users),
    })
  );
});

beforeEach(() => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(todo),
    })
  );
});

beforeEach(() => fetch.mockClear());

const users = [{ id: 1, name: 'Alex' }];

const todo = [
  { userId: 1, title: 'work', completed: true },
  { userId: 1, title: 'shopping', completed: false },
];

describe('Added completed Tasks in users todo list', () => {
  test('should return data with user completed tasks', async () => {
    const result = await getCompletedTasks();

    expect(result).toEqual([
      {
        id: 1,
        name: 'Alex',
        todo: [{ userId: 1, title: 'work', completed: true }],
      },
    ]);
  });

  test('should called 2 times with correct links', async () => {
    await getCompletedTasks();

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos'
    );
  });
});
