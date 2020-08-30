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
} from './utils.js';

export const randomNilToThousand = () => randomInteger(0, 1000);

export const runBrainEven = (name) => {
  message('Answer "yes" if the number is even, otherwise answer "no".');

  repeatGame((context) => {
    const num = randomNilToThousand();

    message(`Question: ${num}`);
    const answer = question('Your answer: ').toLowerCase();

    const isNumEven = isEven(num);
    const simpleQuestion = convertQuestionToSimple(isNumEven);
    const isAnswerCorrect = checkAnswer(answer, simpleQuestion, true);

    if (isAnswerCorrect) {
      successMessage('Correct!');
      if (context.isLastItem) successMessage(`Congratulations, ${name}!`);
      return true;
    }
    failureMessage(`"${answer}" is wrong answer ;(. Correct answer was "${simpleQuestion}".`);
    failureMessage(`Let's try again, ${name}!`);
    return false;
  });
};

export default runBrainEven;
