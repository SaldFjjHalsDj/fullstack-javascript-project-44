const gcdCalculation = (firstNumber, secondNumber) => {
  let result = secondNumber;

  while (result > 0) {
    if (firstNumber % result === 0 && secondNumber % result === 0) {
      break;
    }
    result -= 1;
  }

  return result;
};

export default gcdCalculation;
