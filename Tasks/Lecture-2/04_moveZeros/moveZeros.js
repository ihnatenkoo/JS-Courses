export const moveZeros = (initialArray) => {
  const arrayOfZero = [];
  const arrayOfValues = [];

  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] === 0) {
      arrayOfZero.push(0);
    } else {
      arrayOfValues.push(initialArray[i]);
    }
  }

  return [...arrayOfValues, ...arrayOfZero];
};