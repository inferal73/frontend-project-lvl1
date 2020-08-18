import readlineSync from 'readline-sync';
import colors from 'colors';

export const isEven = (num) => num % 2 === 0;

export const isNil = (value) => value == null;

export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isSimpleAnswerCorrect = (answer) => ['yes', 'no'].indexOf(answer) > -1;
export const convertQuestionToSimple = (question) => (question ? 'yes' : 'no');

export const checkAnswer = (answer, question) => {
  if (!isSimpleAnswerCorrect(answer)) return false;
  return answer === question;
};

export const message = (text) => console.log(colors.cyan(text));
export const question = (text) => readlineSync.question(colors.yellow(text));
export const successMessage = (text) => console.log(colors.brightGreen(text));
export const failureMessage = (text) => console.log(colors.brightRed(text));

export default {
  isEven,
  randomInteger,
};
