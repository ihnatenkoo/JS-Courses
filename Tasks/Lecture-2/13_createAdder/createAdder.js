export const createAdder = (initialValue = 0) => {
  if ('number' === typeof initialValue) {
    let total = initialValue;

    return (...args) => {
      const argsSum = args.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      );
  
      total += argsSum;
  
      return total;
    };
  } else {
    console.error(
      `Error! Value ${initialValue} - is not a number. Pleace pass to the function correct number value`,
    );
  }

};
