export const frankenSplice = (array1, array2, index) => {
  const result = [...array2];

  result.splice(index, 0, ...array1);

  return result;
};
