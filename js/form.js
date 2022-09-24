import './validation.js';
import './scale.js';
import './effects.js';

import { closeUploadWindow } from './upload.js';
import { errorMessage, successMessage } from './messages.js';
import { postData } from './fetch.js';

const uploadForm = document.querySelector('#upload-select-image');

const show = (message) => {
  closeUploadWindow();
  uploadForm.reset();
  document.body.appendChild(message);
};

const onError = () => show(errorMessage);
const onSuccess = () => show(successMessage);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = uploadForm.checkValidity();

  if (isValid) {
    postData(
      new FormData(uploadForm),
      'https://24.javascript.pages.academy/kekstagram',
      onError,
      onSuccess
    );
  }
});
