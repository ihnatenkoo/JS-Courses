export const squareList = (initialArray) => {
  if (!Array.isArray(initialArray)) {
    throw new Error(
      `Error! Value ${initialArray} - is not an Array. Pleace pass to the function correct value`,
    );
  }

  return initialArray
    .reduce((prevState, currentValue) => {
      if (Number.isInteger(currentValue) && currentValue > 0) {
        prevState.push(currentValue ** 2);
      }

      return prevState;
    }, [])
    .filter(Boolean);
};
