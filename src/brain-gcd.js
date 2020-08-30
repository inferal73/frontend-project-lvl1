import {
  isEven,
  checkAnswer,
  convertQuestionToSimple,
  message,
  question,
  failureMessage,
  successMessage,
  repeatGame,
  randomInteger,
  gcd
} from './utils.js';

export const randomNilToThousand = () => randomInteger(0, 1000);

export const runBrainGcd = (name) => {
  message('Find the greatest common divisor of given numbers.');

  repeatGame((context) => {
    const a = randomNilToThousand();
    const b = randomNilToThousand();
    const gcdNum = gcd(a, b);

    message(`Question: ${a} ${b}`);
    const answer = question('Your answer: ').toLowerCase();

    const isAnswerCorrect = checkAnswer(answer, String(gcdNum));

    if (isAnswerCorrect) {
      successMessage('Correct!');
      if (context.isLastItem) successMessage(`Congratulations, ${name}!`);
      return true;
    }
    failureMessage(`"${answer}" is wrong answer ;(. Correct answer was "${gcdNum}".`);
    failureMessage(`Let's try again, ${name}!`);
    return false;
  });
};

export default runBrainGcd;
