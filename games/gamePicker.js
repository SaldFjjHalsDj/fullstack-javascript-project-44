import isEven from '../modules/isEven.js';
import isPrime from '../modules/isPrime.js';
import expressionEvaluation from '../modules/expressionEvaluation.js';
import makeProgression from '../modules/makeProgression.js';
import findGcd from '../modules/findGcd.js';

const gamePicker = (game) => {

  let gameInfo = '';
  let expectedAnswer = [];
  const result = [];

  switch (game) {
    case 'prime':
      gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      expectedAnswer = isPrime();
      result.push(gameInfo, expectedAnswer);
      return result;
    case 'even':
      gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';
      expectedAnswer = isEven();
      result.push(gameInfo, expectedAnswer);
      return result;
    case 'progression':
      gameInfo = 'What number is missing in the progression?';
      expectedAnswer = makeProgression();
      result.push(gameInfo, expectedAnswer);
      return result;
    case 'gcd':
      gameInfo = 'Find the greatest common divisor of given numbers.';
      expectedAnswer = findGcd();
      result.push(gameInfo, expectedAnswer);
      return result;
    case 'calc':
      gameInfo = 'What is the result of the expression?';
      expectedAnswer = expressionEvaluation();
      result.push(gameInfo, expectedAnswer);
      return result;
    default:
      return null;
  }
};

export default gamePicker;
