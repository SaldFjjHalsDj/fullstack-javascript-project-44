import generateNumber from './generateNumber.js';

const isPrime = () => {
  const number = generateNumber(1, 99);
  const roundQuestion = `Question: ${number}`;

  if (number <= 2) return ['yes', roundQuestion];

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return ['no', roundQuestion];
  }

  const result = [];
  result.push();

  return ['yes', roundQuestion];
};

export default isPrime;
