const isPrime = () => {
  const number = Math.floor(Math.random() * 99) + 1;
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
