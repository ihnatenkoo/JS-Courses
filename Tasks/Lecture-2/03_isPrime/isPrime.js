export const isPrime = (number) => {
  if ('number' !== typeof number) {
    throw new Error(
      `Error! Value ${number} - is not a Number. Pleace pass to the function correct value`,
    );
  }

  let numberIsPrime = true;

  if (number <= 1) {
    numberIsPrime = false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        numberIsPrime = false;
        break;
      }
    }
  }

  return numberIsPrime;
};
