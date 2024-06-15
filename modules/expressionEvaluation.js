const expressionEvaluation = (operator) => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);

  switch (operator) {
    case '*':
      return firstNumber * secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '+':
      return firstNumber + secondNumber;
    default:
      return null;
  }
};

export default expressionEvaluation;
