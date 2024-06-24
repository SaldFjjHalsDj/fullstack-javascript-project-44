import isEven from '../modules/isEven.js';

const evenGame = () => {
  const gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expectedAnswer = isEven();
  const result = [];

  result.push(gameInfo, expectedAnswer);

  return result;
};

export default evenGame;
