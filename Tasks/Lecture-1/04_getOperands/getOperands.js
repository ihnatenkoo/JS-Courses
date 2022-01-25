function getOperands(str) {
  const arr =  str.split(' ')

  if (arr.some(i => i == "+" || i == "-" || i == "*" || i == "/")) {
    const arrOfNumber = arr.filter(i => !isNaN(i));
    return result = `a: ${arrOfNumber[0]}, b: ${arrOfNumber[1]}`;
  }
}

module.exports = getOperands;
