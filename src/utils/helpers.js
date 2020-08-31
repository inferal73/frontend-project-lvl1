import readlineSync from 'readline-sync';
import colors from 'colors';

export const isNil = (value) => value == null;

export const message = (text) => console.log(colors.cyan(text));
export const question = (text) => readlineSync.question(colors.yellow(text));
export const successMessage = (text) => console.log(colors.brightGreen(text));
export const failureMessage = (text) => console.log(colors.brightRed(text));

export default {
  isNil,
  message,
  question,
  successMessage,
  failureMessage,
};
