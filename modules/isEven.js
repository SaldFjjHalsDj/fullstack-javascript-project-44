const isEven = () => {
  const evenGameAnswer = Math.floor(Math.random() * 100);
  const roundQuestion = `Question: ${evenGameAnswer}`;
  const result = [];

  evenGameAnswer % 2 === 0 ? result.push('yes') : result.push('no');
  result.push(roundQuestion);

  return result;
};

export default isEven;
