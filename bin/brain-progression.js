#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../modules/userGreetings.js';
import makeProgression from '../modules/makeProgression.js';

const brainProgression = () => {
  const name = helloUser();

  console.log('What number is missing in the progression?');
  let count = 0;

  while (count <= 2) {
    const missingNumber = makeProgression();
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(missingNumber) === Number(userAnswer)) {
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'`);
      count = 0;
      break;
    }
  }

  if (count > 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainProgression();

export default brainProgression;
