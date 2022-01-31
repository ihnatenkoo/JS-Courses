export const moveZeros = (initialArray) => {
  const arrayOfZero = [];
  const arraofValues = [];

  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] === 0) {
      arrayOfZero.push(0);
    } else {
      arraofValues.push(initialArray[i]);
    }
  }

  return [...arraofValues, ...arrayOfZero];
};