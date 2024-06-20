const makeProgression = () => {
  const length = Math.floor(Math.random() * 5) + 5;
  const missingPosition = Math.floor(Math.random() * length);
  const arr = [];
  const result = [];
  const progInc = Math.floor(Math.random() * 10) + 1;

  let progressionElement = Math.floor(Math.random() * 20) + 1;

  for (let i = 0; i < length; i += 1) {
    if (i === missingPosition) {
      arr.push('...');
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
