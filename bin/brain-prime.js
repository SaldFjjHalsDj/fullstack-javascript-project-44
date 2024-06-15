#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../modules/userGreetings.js';
import isPrime from '../modules/isPrime.js';

const brainPrime = () => {
  const name = helloUser();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;
  const answerList = ['no', 'yes'];

  while (count <= 2) {
    const expectedAnswer = isPrime();
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = answerList.indexOf(userAnswer);

    if (answer + expectedAnswer === 2 || answer + expectedAnswer === 0) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerList[expectedAnswer]}'`);
      count = 0;
      break;
    }
  }

  if (count > 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainPrime();

export default brainPrime;
