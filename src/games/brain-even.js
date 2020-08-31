import {
  checkAnswer,
  buildGameContext,
  convertQuestionToSimple,
  gameСycle,
  askQuestion,
  getAnswer,
} from './engine.js';
import { randomInteger, isEven } from '../utils/number.js';

export const runBrainEven = (name) => {
  gameСycle(() => {
    const randomNumber = randomInteger(0, 1000);

    askQuestion(`${randomNumber}`);
    const answer = getAnswer();

    const isNumEven = isEven(randomNumber);
    const simpleQuestion = convertQuestionToSimple(isNumEven);
    const isAnswerCorrect = checkAnswer(answer, simpleQuestion, true);

    return {
      name,
      answer,
      result: simpleQuestion,
      isAnswerCorrect,
    };
  }, buildGameContext(name));
};

export default runBrainEven;
