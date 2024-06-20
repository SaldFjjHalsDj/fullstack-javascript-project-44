import makeProgression from '../modules/makeProgression.js';

const progressionGameImplementation = () => {
  const progressionGameInfo = 'What number is missing in the progression?';

  const progressionGameAnswer = makeProgression();
  const result = [];

  result.push(progressionGameInfo, progressionGameAnswer);

  return result;
};

export default progressionGameImplementation;
