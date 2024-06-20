import isPrime from '../modules/isPrime.js';

const primeGameImplementation = () => {
  const primeGameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeGameAnswer = isPrime();
  const result = [];

  result.push(primeGameInfo, primeGameAnswer);

  return result;
};

export default primeGameImplementation;
