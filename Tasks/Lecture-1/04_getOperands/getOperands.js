export function getOperands(expression) {
  if (expression.match(/[+\-/*]/)) {
    const arrOfNumber = expression.split(' ').filter(i => !isNaN(i));
    const result = `a: ${arrOfNumber[0]}, b: ${arrOfNumber[1]}`;

    return result;
  }
}