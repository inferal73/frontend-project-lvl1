import readlineSync from 'readline-sync';
import colors from 'colors';

export const isEven = (num) => num % 2 === 0;

export const isNil = (value) => value == null;

export const repeatGame = (gameCycle, stepCount = 3) => {
  for (let i = 0; i < stepCount; i += 1) {
    const isLastItem = i === stepCount - 1;
    const ahead = gameCycle({ isLastItem });
    if (!ahead) break;
  }
};

export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const isSimpleAnswerCorrect = (answer) => ['yes', 'no'].indexOf(answer) > -1;
export const convertQuestionToSimple = (question) => (question ? 'yes' : 'no');

export const checkAnswer = (answer, question, simpleAnswer = false) => {
  if (simpleAnswer && !isSimpleAnswerCorrect(answer)) return false;
  return answer === question;
};

export const gcd = (a, b) => {
  if (b > 0) {
    const c = a % b;
    return gcd(b, c);
  }
  return Math.abs(a);
};

export const message = (text) => console.log(colors.cyan(text));
export const question = (text) => readlineSync.question(colors.yellow(text));
export const successMessage = (text) => console.log(colors.brightGreen(text));
export const failureMessage = (text) => console.log(colors.brightRed(text));

export default {
  isEven,
  randomInteger,
};
