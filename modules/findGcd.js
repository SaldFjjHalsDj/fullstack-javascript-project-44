import generateNumber from './generateNumber.js';

const findGcd = () => {
  let firstNumber = generateNumber(0, 100);
  let secondNumber = generateNumber(0, 100);

  const roundQuestion = `Question: ${firstNumber} ${secondNumber}`;

  const buff = firstNumber;
  firstNumber = Math.max(firstNumber, secondNumber);
  secondNumber = Math.min(buff, secondNumber);

  let result = secondNumber;

  while (result > 0) {
    if (firstNumber % result === 0 && secondNumber % result === 0) {
      break;
    }
    result -= 1;
  }

  return [result, roundQuestion];
};

export default findGcd;
