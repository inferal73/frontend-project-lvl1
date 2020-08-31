import {
  checkAnswer,
  buildGameContext,
  gameСycle,
  askQuestion,
  getAnswer,
} from './engine.js';
import { randomInteger, gcd } from '../utils/number.js';

export const randomNilToThousand = () => randomInteger(0, 1000);

export const runBrainGcd = (name) => {
  const context = buildGameContext(name, 'Find the greatest common divisor of given numbers.');

  gameСycle(() => {
    const a = randomNilToThousand();
    const b = randomNilToThousand();
    const gcdNum = gcd(a, b);

    askQuestion(`${a} ${b}`);
    const answer = getAnswer();

    const isAnswerCorrect = checkAnswer(answer, String(gcdNum));

    return {
      name,
      answer,
      result: gcdNum,
      isAnswerCorrect,
    };
  }, context);
};

export default runBrainGcd;
