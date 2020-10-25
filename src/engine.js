import {
  message,
  successMessage,
  question,
  failureMessage,
} from './utils/helpers.js';

const DEFAULT_STEP_COUNT = 3;
const DEFAULT_SIMPLE_INTRO = 'Answer "yes" if the number is even, otherwise answer "no".';

const askName = () => {
  const name = question('May I have your name? ');
  if (!name || name.length === 0) return 'Anonymous';
  return name;
};

export const gameСycle = (
  gameProcess,
  context,
) => {
  message('Welcome to the Brain Games!');
  const name = askName();
  message(`Hello, ${name}!`);

  message(context.intro);
  let success = true;
  for (let i = 0; i < context.stepCount; i += 1) {
    const stepContext = gameProcess();

    if (!stepContext.isAnswerCorrect) {
      failureMessage(`"${stepContext.answer}" is wrong answer ;(. Correct answer was "${stepContext.result}".`);
      success = false;
      break;
    }
    successMessage('Correct!');
  }
  if (success) {
    successMessage(`Congratulations, ${name}!`);
  } else {
    failureMessage(`Let's try again, ${name}!`);
  }
};

export const isSimpleAnswerCorrect = (answer) => ['yes', 'no'].indexOf(answer) > -1;
export const convertQuestionToSimple = (q) => (q ? 'yes' : 'no');

export const buildGameContext = (
  intro = DEFAULT_SIMPLE_INTRO,
  stepCount = DEFAULT_STEP_COUNT,
) => ({ stepCount, intro });

export const checkAnswer = (received, expected, simpleAnswer = false) => {
  if (simpleAnswer && !isSimpleAnswerCorrect(received)) return false;
  return received === expected;
};

export const askQuestion = (suffix) => message(`Question: ${suffix}`);
export const getAnswer = () => question('Your answer: ').toLowerCase();
