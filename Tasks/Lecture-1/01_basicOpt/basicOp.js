function basicOp(operand, a, b) {

  switch(operand) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0
  }
}

module.exports = basicOp;