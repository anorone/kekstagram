import { isEscapeKey } from './util.js';
import { open, close } from './window.js';
import { picturesArea, picturesData } from './pictures.js';

const fullscreenWindow = document.querySelector('.big-picture');
const cancelButton = fullscreenWindow.querySelector('#picture-cancel');

const image = fullscreenWindow.querySelector('.big-picture__img img');
const imageCaption = fullscreenWindow.querySelector('.social__caption');
const imageLikesCount = fullscreenWindow.querySelector('.likes-count');

const shownCommentsCount = fullscreenWindow.querySelector('.shown-comments');
const commentsTotalCount = fullscreenWindow.querySelector('.comments-count');
const commentsList = fullscreenWindow.querySelector('.social__comments');
const commentsLoader = fullscreenWindow.querySelector('.comments-loader');

const createComment = ({ avatar: pathToAvatar, name: userName, message }) => {
  const comment = document.createElement('li');
  const avatar = new Image(35, 35);
  const commentText = document.createElement('p');

  comment.append(avatar, commentText);
  comment.className = 'social__comment';

  avatar.className = 'social__picture';
  avatar.alt = userName;
  avatar.src = pathToAvatar;

  commentText.className = 'social__text';
  commentText.textContent = message;

  return comment;
};

const renderComments = (data = commentsLoader.comments) => {
  const renderLimit = 5;
  const beginIndex = commentsList.children.length;
  const endIndex = beginIndex + renderLimit;

  const commentsFragment = document.createDocumentFragment();
  for (let i = beginIndex; i < endIndex && i < data.length; i += 1) {
    const comment = createComment(data[i]);
    commentsFragment.appendChild(comment);
  }

  commentsList.appendChild(commentsFragment);

  if (commentsList.children.length === data.length) {
    commentsLoader.classList.add('hidden');
  }

  shownCommentsCount.textContent = commentsList.children.length;
};

const onCommentsLoaderClick = () => {
  renderComments();
};

const onKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    close(fullscreenWindow);
    commentsLoader.classList.remove('hidden');
    commentsLoader.removeEventListener('click', onCommentsLoaderClick);
    document.removeEventListener('keydown', onKeydown);
  }
};

picturesArea.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');

  if (picture) {
    evt.preventDefault();

    const pictureData = picturesData.find(({ id }) => id === picture.dataId);
    const { url, description, likes: likesCount, comments } = pictureData;

    image.src = url;
    imageCaption.textContent = description;
    imageLikesCount.textContent = likesCount;
    commentsTotalCount.textContent = comments.length;
    commentsList.innerHTML = '';

    renderComments(comments);

    commentsLoader.comments = comments;
    commentsLoader.addEventListener('click', onCommentsLoaderClick);
    document.addEventListener('keydown', onKeydown);
    open(fullscreenWindow);
  }
});

cancelButton.addEventListener('click', () => {
  close(fullscreenWindow);
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  document.removeEventListener('keydown', onKeydown);
});
