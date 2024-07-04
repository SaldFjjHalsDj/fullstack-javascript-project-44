import isEven from '../utils/isEven.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const evenGame = () => {
  const result = ['Answer "yes" if the number is even, otherwise answer "no".'];
  const number = generateRandomNumber(0, 100);

  const evenGameAnswer = isEven(number) ? 'yes' : 'no';

  result.push([evenGameAnswer, `Question: ${number}`]);

  return result;
};

export default evenGame;
