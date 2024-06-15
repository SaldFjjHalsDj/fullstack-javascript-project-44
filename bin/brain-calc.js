#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../modules/userGreetings.js';
import expressionEvaluation from '../modules/expressionEvaluation.js';

const brainCalc = () => {
  const name = helloUser();

  console.log('What is the result of the expression?');
  let count = 0;
  const operators = ['*', '-', '+'];

  while (count <= 2) {
    const operator = operators[Math.floor(Math.random() * 3)];
    const expectedAnswer = expressionEvaluation(operator);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(expectedAnswer) === Number(userAnswer)) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      count = 0;
      break;
    }
  }

  if (count > 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainCalc();

export default brainCalc;
