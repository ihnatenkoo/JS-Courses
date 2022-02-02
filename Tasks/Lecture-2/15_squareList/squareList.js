export const squareList = (initialArray) => {
  if (Array.isArray(initialArray)) {
    const resultArray = initialArray
      .map((item) => {
        if (Number.isInteger(item) && item > 0) {
          return item ** 2;
        }
      })
      .filter((item) => item !== undefined);

    return resultArray;
  } else {
    console.error(
      `Error! Value ${initialArray} - is not an Array. Pleace pass to the function correct Array value`,
    );
  }
  
};
