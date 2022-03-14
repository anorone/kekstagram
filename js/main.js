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

const doesNotExceed = (string, maxLength) => string.length <= maxLength;

getRandomNumber();
doesNotExceed();
