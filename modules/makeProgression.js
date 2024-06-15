const makeProgression = () => {
  const length = Math.floor(Math.random() * 5) + 5;
  const missingPosition = Math.floor(Math.random() * length);
  const arr = [];
  const progInc = Math.floor(Math.random() * 10) + 1;
  let first = Math.floor(Math.random() * 20) + 1;
  let result = 0;

  for (let i = 0; i < length; i += 1) {
    if (i === missingPosition) {
      arr.push('...');
      result = first;
      first += progInc;
    } else {
      arr.push(first);
      first += progInc;
    }
  }

  console.log('Question: ', arr.join(' '));
  return result;
};

export default makeProgression;
