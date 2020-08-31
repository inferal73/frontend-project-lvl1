export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isEven = (num) => num % 2 === 0;

export const gcd = (a, b) => {
  if (b > 0) {
    const c = a % b;
    return gcd(b, c);
  }
  return Math.abs(a);
};

export const isPrimality = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

export const randomProgression = (len = 10) => {
  const startNumber = randomInteger(4, 10);
  const step = randomInteger(2, 8);
  const progression = [startNumber];
  for (let i = 0; i < len; i += 1) {
    progression.push(progression[progression.length - 1] + step);
  }
  return progression;
};

export default {
  randomInteger,
  randomProgression,
  isPrimality,
  gcd,
};
