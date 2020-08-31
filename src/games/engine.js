import {
  message,
  successMessage,
  question,
  failureMessage,
} from '../utils/helpers.js';

const DEFAULT_STEP_COUNT = 3;
const DEFAULT_SIMPLE_INTRO = 'Answer "yes" if the number is even, otherwise answer "no".';

export const gameСycle = (
  gameProcess,
  context,
) => {
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
    successMessage(`Congratulations, ${context.name}!`);
  } else {
    failureMessage(`Let's try again, ${context.name}!`);
  }
};

export const isSimpleAnswerCorrect = (answer) => ['yes', 'no'].indexOf(answer) > -1;
export const convertQuestionToSimple = (q) => (q ? 'yes' : 'no');

export const buildGameContext = (
  name,
  intro = DEFAULT_SIMPLE_INTRO,
  stepCount = DEFAULT_STEP_COUNT,
) => ({ name, stepCount, intro });

export const checkAnswer = (received, expected, simpleAnswer = false) => {
  if (simpleAnswer && !isSimpleAnswerCorrect(received)) return false;
  return received === expected;
};

export const askQuestion = (suffix) => message(`Question: ${suffix}`);
export const getAnswer = () => question('Your answer: ').toLowerCase();
