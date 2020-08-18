import {
  randomInteger, isEven, checkAnswer, convertQuestionToSimple, message, question, failureMessage, successMessage,
} from './utils.js';

const STEP_COUNT = 3;

const randomNilToThousand = () => randomInteger(0, 1000);

export const runBrainEven = (name) => {
  message('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < STEP_COUNT; i += 1) {
    const num = randomNilToThousand();

    message(`Question: ${num}`);
    const answer = question('Your answer: ').toLowerCase();

    const isNumEven = isEven(num);
    const simpleQuestion = convertQuestionToSimple(isNumEven);
    const isAnswerCorrect = checkAnswer(answer, simpleQuestion);

    if (isAnswerCorrect) {
      successMessage('Correct!');
      if (i === STEP_COUNT - 1) successMessage(`Congratulations, ${name}!`);
    } else {
      failureMessage(`"${answer}" is wrong answer ;(. Correct answer was "${simpleQuestion}".`);
      failureMessage(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default runBrainEven;
