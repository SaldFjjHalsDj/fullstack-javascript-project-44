import generateRandomNumber from '../utils/generateRandomNumber.js';

const primeGame = () => {
  const result = ['What number is missing in the progression?'];

  const length = generateRandomNumber(5, 10);
  const missingPosition = generateRandomNumber(0, length);
  const arr = [];
  let missedElement = 0;
  const progInc = generateRandomNumber(1, 10);

  let progressionElement = generateRandomNumber(1, 20);

  for (let i = 0; i < length; i += 1) {
    if (i === missingPosition) {
      arr.push('..');
      missedElement = progressionElement;
      progressionElement += progInc;
    } else {
      arr.push(progressionElement);
      progressionElement += progInc;
    }
  }

  result.push([missedElement, `Question: ${arr.join(' ')}`]);

  return result;
};

export default primeGame;
