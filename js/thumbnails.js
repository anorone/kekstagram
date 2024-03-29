import { getData } from './fetch.js';
import { warningMessage, loadingMessage } from './messages.js';
import addFilters from './filter.js';

const picturesArea = document.querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const onError = () => {
  loadingMessage.remove();
  document.body.appendChild(warningMessage);
  setTimeout(() => {
    warningMessage.style.opacity = 0;
  }, 5000);
};

const renderPictures = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach(({ id, url, likes: likesCount, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.dataId = id;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likesCount;
    fragment.appendChild(picture);
  });

  picturesArea.innerHTML = '';
  picturesArea.appendChild(fragment);
};

const onSuccess = (data) => {
  renderPictures(data);
  addFilters(data, renderPictures);
  loadingMessage.remove();
};

document.body.appendChild(loadingMessage);

const picturesData = await getData(
  'https://24.javascript.pages.academy/kekstagram/data',
  onError,
  onSuccess
);

export { picturesArea, picturesData };
