import {
  checkAnswer,
  message,
  question,
  failureMessage,
  successMessage,
  repeatGame,
  randomInteger,
  randomElement,
  randomProgression,
  hideArrayEl,
} from './utils.js';

export const randomNilToThousand = () => randomInteger(0, 1000);

export const runBrainProgression = (name) => {
  message('What number is missing in the progression?');

  repeatGame((context) => {
    const progression = randomProgression();
    const secretEl = randomElement(progression);
    const progressionWithSecret = hideArrayEl(secretEl, progression);

    message(`Question: ${progressionWithSecret.join(' ')}`);
    const answer = question('Your answer: ').toLowerCase();

    const isAnswerCorrect = checkAnswer(answer, String(secretEl));

    if (isAnswerCorrect) {
      successMessage('Correct!');
      if (context.isLastItem) successMessage(`Congratulations, ${name}!`);
      return true;
    }
    failureMessage(`"${answer}" is wrong answer ;(. Correct answer was ${secretEl}`);
    failureMessage(`Let's try again, ${name}!`);
    return false;
  });
};

export default runBrainProgression;
