#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../modules/userGreetings.js';
import isEven from '../modules/isEven.js';

const brainEven = () => {
  const name = helloUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  const answerList = ['no', 'yes'];

  while (count <= 2) {
    const number = Math.floor(Math.random() * 100);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const userAnswer = answerList.indexOf(answer);

    if (userAnswer + isEven(number) === 2 || userAnswer + isEven(number) === 0) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerList[isEven(number)]}'`);
      count = 0;
      break;
    }
  }

  if (count > 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainEven;
