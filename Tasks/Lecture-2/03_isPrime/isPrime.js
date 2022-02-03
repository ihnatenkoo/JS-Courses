export const isPrime = (number) => {
  if ('number' === typeof number) {
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
  } else {
    console.error(
      `Error! Value ${number} - is not a number. Pleace pass to the function correct number value`,
    );
  }
};
