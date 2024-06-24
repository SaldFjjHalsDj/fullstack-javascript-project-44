import expressionEvaluation from '../modules/expressionEvaluation.js';

const calcGame = () => {
  const gameInfo = 'What is the result of the expression?';
  const expectedAnswer = expressionEvaluation();
  const result = [];

  result.push(gameInfo, expectedAnswer);

  return result;
};

export default calcGame;
