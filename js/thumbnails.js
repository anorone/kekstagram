import { getData } from './fetch.js';

const picturesArea = document.querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const warningTemplate = document
  .querySelector('#warning')
  .content.querySelector('.warning');

const onError = () => {
  document.body.appendChild(warningTemplate);
  setTimeout(() => {
    warningTemplate.style.opacity = 0;
  }, 5000);
};

const onSuccess = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach(({ id, url, likes: likesCount, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.dataId = id;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likesCount;
    fragment.appendChild(picture);
  });

  picturesArea.appendChild(fragment);
};

const picturesData = await getData(
  'https://24.javascript.pages.academy/kekstagram/data',
  onError,
  onSuccess
);

export { picturesArea, picturesData };
