import readlineSync from 'readline-sync';
import helloUser from './modules/userGreetings.js';

const gameImplementation = (game) => {
  const name = helloUser();

  let count = 0;

  while (count <= 2) {
    const gameInfo = game();
    const expectedAnswer = gameInfo[1][0];
    const roundQuestion = gameInfo[1][1];

    if (count === 0) {
      console.log(gameInfo[0]);
    }

    console.log(roundQuestion);
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer.toString() === userAnswer.toString()) {
      count += 1;
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

export default gameImplementation;
