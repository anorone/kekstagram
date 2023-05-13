import { isEscapeKey } from './util.js';
import { uploadInput } from './upload.js';

const body = document.body;

const loadingMessage = document
  .querySelector('#messages')
  .content.querySelector('.img-upload__message--loading');

const warningMessage = document
  .querySelector('#warning')
  .content.querySelector('.warning');

const errorMessage = document
  .querySelector('#error')
  .content.querySelector('.error');

const errorButton = errorMessage.querySelector('.error__button');
const errorModal = errorMessage.querySelector('.error__inner');

const successMessage = document
  .querySelector('#success')
  .content.querySelector('.success');

const successButton = successMessage.querySelector('.success__button');
const successModal = successMessage.querySelector('.success__inner');

const onKeydown = (evt) => {
  const isMessageShown = errorMessage.isConnected || successMessage.isConnected;

  if (isEscapeKey(evt) && isMessageShown) {
    body.removeChild(body.lastElementChild);
  }
};

const onMessageShownClick = (evt) => evt.target.remove();
const onModalClick = (evt) => evt.stopPropagation();

body.addEventListener('keydown', onKeydown);
errorMessage.addEventListener('click', onMessageShownClick);
successMessage.addEventListener('click', onMessageShownClick);
errorModal.addEventListener('click', onModalClick);
successModal.addEventListener('click', onModalClick);

successButton.addEventListener('click', () => {
  successMessage.remove();
});

errorButton.addEventListener('click', () => {
  errorMessage.remove();
  uploadInput.click();
});

export {
  errorMessage,
  successMessage,
  warningMessage,
  loadingMessage,
};
