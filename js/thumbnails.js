import { getImages } from './data.js';

const picturesArea = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const fragment = document.createDocumentFragment();
const picturesData = getImages(25);

picturesData.forEach(({ id, url, likes: likesCount, comments }) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.dataId = id;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likesCount;
  fragment.appendChild(picture);
});

picturesArea.appendChild(fragment);

export { picturesArea, picturesData };
