export const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const hideArrayElement = (el, progression) => {
  const progressionWithSecret = [...progression];
  const idx = progression.indexOf(el);
  progressionWithSecret[idx] = '..';
  return progressionWithSecret;
};

export default {
  getRandomElement,
  hideArrayElement,
};
