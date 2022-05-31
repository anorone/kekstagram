const getRandomNumber = (min, max) => {
  if (min < 0 || max < min) {
    return null;
  }

  return min + Math.round(Math.random() * (max - min));
};

const getRandomFrom = (array) => {
  const randomIndex = getRandomNumber(0, array.length - 1);

  return array[randomIndex];
};

const doesExceed = (sequence, maxLength) => sequence.length > maxLength;
const matchPattern = (value, pattern) => pattern.test(value);
const hasDuplicates = (arr) => new Set(arr).size < arr.length;
const isEscapeKey = (evt) => evt.code === 'Escape';

export {
  getRandomNumber,
  getRandomFrom,
  doesExceed,
  matchPattern,
  hasDuplicates,
  isEscapeKey,
};
