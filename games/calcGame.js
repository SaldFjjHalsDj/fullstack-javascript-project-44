import expressionEvaluation from '../modules/expressionEvaluation.js';

const calcGameImplementation = () => {
  const calcGameInfo = 'What is the result of the expression?';

  const calcGameAnswer = expressionEvaluation();
  const result = [];

  result.push(calcGameInfo, calcGameAnswer);

  return result;
};

export default calcGameImplementation;
