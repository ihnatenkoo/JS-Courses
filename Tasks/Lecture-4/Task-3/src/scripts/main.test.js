import axios from 'axios';
import { getData } from './main';

jest.mock('axios');

describe('Axios GET request', () => {
  let response;
  let users;

  beforeEach(() => {
    users = [
      { 
        id: 1, name: 'Dmytro',
      },
      { 
        id: 2, name: 'Alex',
      },
    ];

    response = {
      data: {
        users,
      },
    };
  });

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response);

    return getData('https://jsonplaceholder.typicode.com/users').then(
      (data) => {
        expect(data.users).toEqual(users);
      },
    );
  });

  test('should catch error', async () => {
    try {
      await getData('https://jsonplaceholder.typicode.com/users');
    } catch (error) {
      expect(error.message).toBe('Error');
    }
  });
});

