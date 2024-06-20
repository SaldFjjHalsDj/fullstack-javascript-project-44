const expressionEvaluation = () => {
  const operators = ['*', '-', '+'];
  const operator = operators[Math.floor(Math.random() * 3)];
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  const roundQuestion = `Question: ${firstNumber} ${operator} ${secondNumber}`;

  switch (operator) {
    case '*':
      return [firstNumber * secondNumber, roundQuestion];
    case '-':
      return [firstNumber - secondNumber, roundQuestion];
    case '+':
      return [firstNumber + secondNumber, roundQuestion];
    default:
      return null;
  }
};

export default expressionEvaluation;
