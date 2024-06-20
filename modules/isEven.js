const isEven = () => {
  const evenGameAnswer = Math.floor(Math.random() * 100);
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
