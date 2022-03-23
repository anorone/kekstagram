import { getRandomNumber, getRandomFrom } from './util.js';

const COMMENT_TEMPLATES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Ольга',
  'Денис',
  'Дмитрий',
  'Саша',
  'Мария',
  'Юлия',
  'Николай',
  'Слава',
  'Екатерина',
  'Аня',
];

const getComments = (() => {
  const usedIds = [];

  return (count) => {
    const comments = [];

    for (let i = 0; i < count; i += 1) {
      let commentId;

      do {
        commentId = getRandomNumber(100, 500);
      } while (usedIds.includes(commentId));

      comments[i] = {
        id: commentId,
        avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
        message: getRandomFrom(COMMENT_TEMPLATES),
        name: getRandomFrom(NAMES),
      };

      usedIds.push(commentId);
    }

    return comments;
  };
})();

const getImages = (count) => {
  const images = [];

  for (let i = 1; i <= count; i += 1) {
    images[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Путь к картинке с номером ${i}: photos/${i}.jpg`,
      likes: getRandomNumber(15, 200),
      comments: getComments(getRandomNumber(0, 3)),
    };
  }

  return images;
};

export { getImages };
