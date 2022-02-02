export const squareList = (initialArray) => {
  const resultArray = initialArray
    .map((item) => {
      if (Number.isInteger(item) && item > 0) {
        return item ** 2;
      }
    })
    .filter((item) => item !== undefined);

  return resultArray;
};
