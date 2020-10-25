import {
  checkAnswer,
  buildGameContext,
  convertQuestionToSimple,
  gameСycle,
  askQuestion,
  getAnswer,
} from '../engine.js';
import { randomInteger } from '../utils/number.js';

const isEven = (num) => num % 2 === 0;

export const runBrainEven = () => {
  gameСycle(() => {
    const randomNumber = randomInteger(0, 1000);

    askQuestion(`${randomNumber}`);
    const answer = getAnswer();

    const isNumEven = isEven(randomNumber);
    const simpleQuestion = convertQuestionToSimple(isNumEven);
    const isAnswerCorrect = checkAnswer(answer, simpleQuestion, true);

    return {
      answer,
      result: simpleQuestion,
      isAnswerCorrect,
    };
  }, buildGameContext());
};

export default runBrainEven;
