const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR_PROPERTIES = 'clear';

export const transformState = (initialState, transforms) => {
  let state = {...initialState};

  transforms.forEach(transform => {

    switch (transform.operation) {
      case ADD_PROPERTIES:
        state = {
          ...state, 
          ...transform.properties,
        };
        break;

      case REMOVE_PROPERTIES:
        transform.properties.forEach(index => {
          delete state[index];
        });
        break;

      case CLEAR_PROPERTIES:
        for (const key in state) {
          delete state[key];
        }
        break;

      default: 
        return state;
    }
  });

  return state;
};
