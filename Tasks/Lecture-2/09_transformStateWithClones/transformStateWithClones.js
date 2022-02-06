const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR_PROPERTIES = 'clear';

export const transformStateWithClones = (initialState, transforms) => {
  const localState = [];

  let cloneInitialState = { ...initialState };

  transforms.forEach((transform) => {
    const { operation, properties } = transform;

    switch (operation) {
      case ADD_PROPERTIES:
        localState.push({
          ...cloneInitialState,
          ...properties,
        });

        cloneInitialState = {
          ...cloneInitialState,
          ...properties,
        };
        break;

      case REMOVE_PROPERTIES: {
        properties.forEach((i) => {
          delete cloneInitialState[i];
        });
        localState.push(cloneInitialState);
        break;
      }

      case CLEAR_PROPERTIES:
        localState.push({});
        cloneInitialState = {};
        break;

      default:
        return localState;
    }
  });

  return localState;
};
