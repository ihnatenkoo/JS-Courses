export const createAdder = (initialValue = 0) => {
  if ('number' !== typeof initialValue) {
    throw new Error(
      `Error! Value ${initialValue} - is not a Number. Pleace pass to the function correct value`,
    );
  }

  let total = initialValue;

  return (...args) => {
    const argsSum = args.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );

    total += argsSum;

    return total;
  };
};
