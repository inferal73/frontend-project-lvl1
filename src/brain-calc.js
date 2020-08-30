import {
  checkAnswer,
  message,
  question,
  failureMessage,
  successMessage,
  repeatGame,
  randomInteger,
  randomElement,
} from './utils.js';

export const randomNumber = () => randomInteger(0, 20);

const operations = [
  {
    text: '+',
    fn: (a, b) => a + b,
  },
  {
    text: '-',
    fn: (a, b) => a - b,
  },
  {
    text: '*',
    fn: (a, b) => a * b,
  },
];

const randomOperation = () => randomElement(operations);

export const runBrainCalc = (name) => {
  message('What is the result of the expression?');

  repeatGame((context) => {
    const a = randomNumber();
    const b = randomNumber();
    const opration = randomOperation();
    const result = opration.fn(a, b);

    message(`Question: ${a} ${opration.text} ${b}`);
    const answer = question('Your answer: ').toLowerCase();

    const isAnswerCorrect = checkAnswer(answer, String(result));

    if (isAnswerCorrect) {
      successMessage('Correct!');
      if (context.isLastItem) successMessage(`Congratulations, ${name}!`);
      return true;
    }
    failureMessage(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    failureMessage(`Let's try again, ${name}!`);
    return false;
  });
};

export default runBrainCalc;
