const isPrime = () => {
  const number = Math.floor(Math.random() * 99) + 1;
  console.log(`Question: ${number}`);
  if (number <= 3) return 1;

  for (let i = 4; i < number; i += 1) {
    if (number % i === 0) return 0;
  }

  return 1;
};

export default isPrime;
