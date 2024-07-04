import generateRandomNumber from '../utils/generateRandomNumber.js';
import isPrime from '../utils/isPrime.js';

const primeGame = () => {
  const result = ['Answer "yes" if given number is prime. Otherwise answer "no".'];
  const number = generateRandomNumber(1, 99);
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';

  result.push([expectedAnswer, `Question: ${number}`]);

  return result;
};

export default primeGame;
