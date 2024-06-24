import generateNumber from './generateNumber.js';

const expressionEvaluation = () => {
  const operators = ['*', '-', '+'];
  const operator = operators[generateNumber(0, 3)];
  const firstNumber = generateNumber(0, 100);
  const secondNumber = generateNumber(0, 100);

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
