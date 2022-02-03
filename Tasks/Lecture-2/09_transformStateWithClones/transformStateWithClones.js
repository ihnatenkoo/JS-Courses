const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR_PROPERTIES = 'clear';

export const transformStateWithClones = (initialState, transforms) => {
  const localState = [];

  transforms.forEach(transform => {

    switch (transform.operation) {

      case ADD_PROPERTIES:
        if (localState.length === 0) {
          localState[0] = {
            ...initialState,
            ...transform.properties,
          };
        } else {
          const newLocalState = {
            ...localState[localState.length - 1],
            ...transform.properties,
          };

          localState.push(newLocalState);
        }
        break;

      case REMOVE_PROPERTIES: {
        const newLocalState = {...localState[localState.length - 1]};
  
        transform.properties.forEach(index => {
          delete newLocalState[index];
        });
        localState.push(newLocalState);
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

