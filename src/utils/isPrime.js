const isPrime = (number) => {
  if (number <= 2) return true;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

export default isPrime;
