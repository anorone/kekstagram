import { isEscapeKey  } from './util.js';
import { open, close } from './window.js';

const uploadForm = document.querySelector('#upload-select-image');
const uploadInput = uploadForm.querySelector('#upload-file');
const uploadWindow = uploadForm.querySelector('.img-upload__overlay');
const imagePreview = uploadWindow.querySelector('.img-upload__preview img');
const effectLevelSlider = uploadWindow.querySelector('.effect-level__slider');
const uploadInfo = uploadWindow.querySelector('.img-upload__text');
const cancelButton = uploadWindow.querySelector('#upload-cancel');

const onKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeUploadWindow(); // eslint-disable-line no-use-before-define
    uploadForm.reset();
  }
};

const onUploadInfoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const insertImage = () => {
  const userImage = uploadInput.files[0];
  const url = URL.createObjectURL(userImage);
  imagePreview.src = url;
};

const unsetImagePreview = () => {
  imagePreview.className = '';
  imagePreview.style.filter = '';
  effectLevelSlider.style.display = '';
};

const openUploadWindow = () => {
  open(uploadWindow);
  document.addEventListener('keydown', onKeydown);
  uploadInfo.addEventListener('keydown', onUploadInfoKeydown);
  insertImage();
};

const closeUploadWindow = () => {
  close(uploadWindow);
  document.removeEventListener('keydown', onKeydown);
  uploadInfo.removeEventListener('keydown', onUploadInfoKeydown);
  unsetImagePreview();
};

uploadInput.addEventListener('change', () => {
  openUploadWindow();
});

cancelButton.addEventListener('click', () => {
  closeUploadWindow();
});

export { closeUploadWindow, uploadInput };
