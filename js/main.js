const getRandomNumber = (min, max) => {
  if (min < 0 || max < min) {
    return null;
  }

  return min + Math.round(Math.random() * (max - min));
};

const doesNotExceed = (string, maxLength) => string.length <= maxLength;

getRandomNumber();
doesNotExceed();
