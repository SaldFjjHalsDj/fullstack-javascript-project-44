#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../modules/userGreetings.js';
import findGcd from '../modules/findGcd.js';

const brainGcd = () => {
  const name = helloUser();

  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;

  while (count <= 2) {
    const answer = findGcd();

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(answer) === Number(userAnswer)) {
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      count = 0;
      break;
    }
  }

  if (count > 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainGcd();

export default brainGcd;
