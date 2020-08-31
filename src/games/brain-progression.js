import {
  checkAnswer,
  buildGameContext,
  gameСycle,
  askQuestion,
  getAnswer,
} from './engine.js';
import { randomProgression } from '../utils/number.js';
import { getRandomElement, hideArrayElement } from '../utils/array.js';

export const runBrainProgression = (name) => {
  const context = buildGameContext(name, 'What number is missing in the progression?');

  gameСycle(() => {
    const progression = randomProgression();
    const secretEl = getRandomElement(progression);
    const progressionWithSecret = hideArrayElement(secretEl, progression);

    askQuestion(`${progressionWithSecret.join(' ')}`);
    const answer = getAnswer();

    const isAnswerCorrect = checkAnswer(answer, String(secretEl));

    return {
      name,
      answer,
      result: secretEl,
      isAnswerCorrect,
    };
  }, context);
};

export default runBrainProgression;
