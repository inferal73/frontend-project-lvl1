import {
  checkAnswer,
  gameСycle,
  buildGameContext,
  convertQuestionToSimple,
  askQuestion,
  getAnswer,
} from '../engine.js';
import { randomInteger } from '../utils/number.js';

const isPrimality = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

export const runBrainPrime = () => {
  const context = buildGameContext('Answer "yes" if given number is prime. Otherwise answer "no".');

  gameСycle(() => {
    const randomNumber = randomInteger(0, 1000);

    askQuestion(`${randomNumber}`);
    const answer = getAnswer();

    const isNumPrimality = isPrimality(randomNumber);
    const simpleQuestion = convertQuestionToSimple(isNumPrimality);
    const isAnswerCorrect = checkAnswer(answer, simpleQuestion, true);

    return {
      answer,
      result: simpleQuestion,
      isAnswerCorrect,
    };
  }, context);
};

export default runBrainPrime;
