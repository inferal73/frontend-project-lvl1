import {
  checkAnswer,
  buildGameContext,
  gameСycle,
  askQuestion,
  getAnswer,
} from './engine.js';
import { randomInteger } from '../utils/number.js';
import { getRandomElement } from '../utils/array.js';

const randomNumber = () => randomInteger(0, 20);

const operations = [
  {
    text: '+',
    fn: (a, b) => a + b,
  },
  {
    text: '-',
    fn: (a, b) => a - b,
  },
  {
    text: '*',
    fn: (a, b) => a * b,
  },
];

const randomOperation = () => getRandomElement(operations);

export const runBrainCalc = (name) => {
  const context = buildGameContext(name, 'What is the result of the expression?');

  gameСycle(() => {
    const a = randomNumber();
    const b = randomNumber();
    const opration = randomOperation();
    const result = opration.fn(a, b);

    askQuestion(`${a} ${opration.text} ${b}`);
    const answer = getAnswer();

    const isAnswerCorrect = checkAnswer(answer, String(result));
    return {
      name,
      answer,
      result,
      isAnswerCorrect,
    };
  }, context);
};

export default runBrainCalc;
