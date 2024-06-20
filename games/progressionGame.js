import makeProgression from '../modules/makeProgression.js';

const progressionGameImplementation = () => {
  const gameInfo = 'What number is missing in the progression?';

  const expectedAnswer = makeProgression();
  const result = [];

  result.push(gameInfo, expectedAnswer);

  return result;
};

export default progressionGameImplementation;
