export const createAdder = (initialValue = 0) => {
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
