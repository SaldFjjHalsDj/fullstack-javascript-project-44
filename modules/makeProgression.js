import generateNumber from './generateNumber.js';

const makeProgression = () => {
  const length = generateNumber(5, 10);
  const missingPosition = generateNumber(0, length);
  const arr = [];
  const result = [];
  const progInc = generateNumber(1, 10);

  let progressionElement = generateNumber(1, 20);

  for (let i = 0; i < length; i += 1) {
    if (i === missingPosition) {
      arr.push('..');
      result.push(progressionElement);
      progressionElement += progInc;
    } else {
      arr.push(progressionElement);
      progressionElement += progInc;
    }
  }

  const roundQuestion = `Question: ${arr.join(' ')}`;
  result.push(roundQuestion);
  return result;
};

export default makeProgression;
