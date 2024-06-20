import isEven from '../modules/isEven.js';

const evenGameImplementation = () => {
  const gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';

  const expectedAnswer = Math.floor(Math.random() * 100);
  const roundQuestion = `Question: ${expectedAnswer}`;
  const result = [];

  result.push(gameInfo, [isEven(expectedAnswer), roundQuestion]);

  return result;
};

export default evenGameImplementation;
