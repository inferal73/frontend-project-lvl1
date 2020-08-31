import {
  checkAnswer,
  gameСycle,
  buildGameContext,
  convertQuestionToSimple,
  askQuestion,
  getAnswer,
} from './engine.js';
import { randomInteger, isPrimality } from '../utils/number.js';

export const runBrainPrime = (name) => {
  gameСycle(() => {
    const randomNumber = randomInteger(0, 1000);

    askQuestion(`${randomNumber}`);
    const answer = getAnswer();

    const isNumPrimality = isPrimality(randomNumber);
    const simpleQuestion = convertQuestionToSimple(isNumPrimality);
    const isAnswerCorrect = checkAnswer(answer, simpleQuestion, true);

    return {
      name,
      answer,
      result: simpleQuestion,
      isAnswerCorrect,
    };
  }, buildGameContext(name));
};

export default runBrainPrime;
