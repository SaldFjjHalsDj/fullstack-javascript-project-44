import generateRandomNumber from '../utils/generateRandomNumber.js';

const calcGame = () => {
  const result = ['What is the result of the expression?'];

  const operators = ['*', '-', '+'];
  const index = generateRandomNumber(0, 3);
  const operator = operators[index];
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);

  const roundQuestion = `Question: ${firstNumber} ${operator} ${secondNumber}`;

  switch (operator) {
    case '*':
      result.push([firstNumber * secondNumber, roundQuestion]);
      return result;
    case '-':
      result.push([firstNumber - secondNumber, roundQuestion]);
      return result;
    case '+':
      result.push([firstNumber + secondNumber, roundQuestion]);
      return result;
    default:
      throw Error('Error: Invalid operator!');
  }
};

export default calcGame;
