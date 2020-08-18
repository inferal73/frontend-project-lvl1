import { message, question } from './utils.js';

const askName = () => {
  const name = question('May I have your name? ');
  if (!name || name.length === 0) return 'Anonymous';
  return name;
};

export const welcomeMessage = () => {
  message('Welcome to the Brain Games!');
  const name = askName();
  message(`Hello, ${name}!`);
  return name;
};

export { runBrainEven } from './brain-even.js';

export default welcomeMessage;
