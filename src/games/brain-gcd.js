import {
  checkAnswer,
  buildGameContext,
  gameСycle,
  askQuestion,
  getAnswer,
} from '../engine.js';
import { randomInteger } from '../utils/number.js';

const gcd = (a, b) => {
  if (b > 0) {
    const c = a % b;
    return gcd(b, c);
  }
  return Math.abs(a);
};

export const randomNilToThousand = () => randomInteger(0, 1000);

export const runBrainGcd = () => {
  const context = buildGameContext('Find the greatest common divisor of given numbers.');

  gameСycle(() => {
    const a = randomNilToThousand();
    const b = randomNilToThousand();
    const gcdNum = gcd(a, b);

    askQuestion(`${a} ${b}`);
    const answer = getAnswer();

    const isAnswerCorrect = checkAnswer(answer, String(gcdNum));

    return {
      answer,
      result: gcdNum,
      isAnswerCorrect,
    };
  }, context);
};

export default runBrainGcd;
