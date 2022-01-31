export const transformState = (initialState, transforms) => {
  let state = initialState;

  transforms.forEach(item => {

    switch (item.operation) {
      case 'addProperties':
        state = {
          ...state, 
          ...item.properties,
        };
        break;

      case 'removeProperties':
        item.properties.forEach(index => {
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