export const moveZeros = (initialArray) => {
  if (Array.isArray(initialArray)) {
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
  } else {
    console.error(
      `Error! Value ${initialArray} - is not an Array. Pleace pass to the function correct Array value`,
    );
  }
};
