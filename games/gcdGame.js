import findGcd from '../modules/findGcd.js';

const gcdGameImplementation = () => {
  const gcdGameInfo = 'Find the greatest common divisor of given numbers.';

  const gcdGameAnswer = findGcd();
  const result = [];

  result.push(gcdGameInfo, gcdGameAnswer);

  return result;
};

export default gcdGameImplementation;
