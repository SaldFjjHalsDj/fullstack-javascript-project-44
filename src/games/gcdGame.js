import gcdCalculation from '../utils/gcdCalculation.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const gcdGame = () => {
  const result = ['Find the greatest common divisor of given numbers.'];
  let firstNumber = generateRandomNumber(0, 100);
  let secondNumber = generateRandomNumber(0, 100);

  const buff = firstNumber;
  firstNumber = Math.max(firstNumber, secondNumber);
  secondNumber = Math.min(buff, secondNumber);

  result.push([gcdCalculation(firstNumber, secondNumber), `Question: ${firstNumber} ${secondNumber}`]);

  return result;
};

export default gcdGame;
