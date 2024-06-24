import generateNumber from './generateNumber.js';

const isEven = () => {
  const evenGameAnswer = generateNumber(0, 100);
  const roundQuestion = `Question: ${evenGameAnswer}`;
  const result = [];

  if (evenGameAnswer % 2 === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }
  result.push(roundQuestion);

  return result;
};

export default isEven;
