import {
  checkAnswer,
  buildGameContext,
  gameСycle,
  askQuestion,
  getAnswer,
} from '../engine.js';
import { randomInteger } from '../utils/number.js';
import { getRandomElement, hideArrayElement } from '../utils/array.js';

const randomProgression = (len = 10) => {
  const startNumber = randomInteger(4, 10);
  const step = randomInteger(2, 8);
  const progression = [startNumber];
  for (let i = 0; i < len; i += 1) {
    progression.push(progression[progression.length - 1] + step);
  }
  return progression;
};

export const runBrainProgression = () => {
  const context = buildGameContext('What number is missing in the progression?');

  gameСycle(() => {
    const progression = randomProgression();
    const secretEl = getRandomElement(progression);
    const progressionWithSecret = hideArrayElement(secretEl, progression);

    askQuestion(`${progressionWithSecret.join(' ')}`);
    const answer = getAnswer();

    const isAnswerCorrect = checkAnswer(answer, String(secretEl));

    return {
      answer,
      result: secretEl,
      isAnswerCorrect,
    };
  }, context);
};

export default runBrainProgression;
