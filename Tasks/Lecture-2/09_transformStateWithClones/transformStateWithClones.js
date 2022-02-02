export const transformStateWithClones = (initialState, transforms) => {
  const localState = [];

  transforms.forEach(transform => {

    switch (transform.operation) {

      case 'addProperties':
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

      case 'removeProperties': {
        const newLocalState = {...localState[localState.length - 1]};
  
        transform.properties.forEach(index => {
          delete newLocalState[index];
        });
        localState.push(newLocalState);
        break;
      }
   
      case 'clear':
        localState.push({});
        break;

      default: 
        return localState;
    }
  });

  return localState;
};

