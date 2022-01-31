export const isPrime = (number) => {
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
