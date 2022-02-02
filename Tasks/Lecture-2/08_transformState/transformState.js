export const transformState = (initialState, transforms) => {
  let state = {...initialState};

  transforms.forEach(transform => {

    switch (transform.operation) {
      case 'addProperties':
        state = {
          ...state, 
          ...transform.properties,
        };
        break;

      case 'removeProperties':
        transform.properties.forEach(index => {
          delete state[index];
        });
        break;

      case 'clear':
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
