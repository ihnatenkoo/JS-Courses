const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR_PROPERTIES = 'clear';

export const transformStateWithClones = (initialState, transforms) => {
  const localState = [];

  transforms.forEach((transform, index) => {
    const { operation, properties } = transform;
    const isFirstIndex = 0 === index;
    const cloneInitialState = isFirstIndex
      ? { ...initialState }
      : { ...localState[index - 1] };

    switch (operation) {
      case ADD_PROPERTIES:
        localState.push({
          ...cloneInitialState,
          ...properties,
        });

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
        break;

      default:
        return localState;
    }
  });

  return localState;
};
