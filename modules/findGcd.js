const findGcd = () => {
  let first = Math.floor(Math.random() * 100);
  let second = Math.floor(Math.random() * 100);

  console.log(`Question: ${first} ${second}`);

  const buff = first;
  first = Math.max(first, second);
  second = Math.min(buff, second);

  let result = second;

  while (result > 0) {
    if (first % result === 0 && second % result === 0) {
      break;
    }
    result -= 1;
  }

  return result;
};

export default findGcd;
