import findGcd from '../modules/findGcd.js';

const gcdGame = () => {
  const gameInfo = 'Find the greatest common divisor of given numbers.';
  const expectedAnswer = findGcd();
  const result = [];

  result.push(gameInfo, expectedAnswer);

  return result;
};

export default gcdGame;
