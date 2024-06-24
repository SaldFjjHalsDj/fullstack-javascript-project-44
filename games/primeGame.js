import isPrime from '../modules/isPrime.js';

const primeGame = () => {
  const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const expectedAnswer = isPrime();
  const result = [];

  result.push(gameInfo, expectedAnswer);

  return result;
};

export default primeGame;
