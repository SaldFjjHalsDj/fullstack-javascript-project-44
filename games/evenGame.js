import isEven from '../modules/isEven.js';

const evenGameImplementation = () => {
  const evenGameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenGameAnswer = Math.floor(Math.random() * 100);
  const roundQuestion = `Question: ${evenGameAnswer}`;
  const result = [];

  result.push(evenGameInfo, [isEven(evenGameAnswer), roundQuestion]);

  return result;
};

export default evenGameImplementation;
