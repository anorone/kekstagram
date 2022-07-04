import { imagePreview, slider } from './effects.js';
import { isEscapeKey  } from './util.js';
import { open, close } from './window.js';

const uploadForm = document.querySelector('#upload-select-image');
const uploadInput = uploadForm.querySelector('#upload-file');
const uploadWindow = uploadForm.querySelector('.img-upload__overlay');
const uploadInfo = uploadWindow.querySelector('.img-upload__text');
const cancelButton = uploadWindow.querySelector('#upload-cancel');

const unsetImagePreview = () => {
  imagePreview.className = '';
  imagePreview.style.filter = '';
  slider.style.display = '';
};

const onUploadInfoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    close(uploadWindow);
    document.removeEventListener('keydown', onKeydown);
    uploadInfo.removeEventListener('keydown', onUploadInfoKeydown);
    uploadForm.reset();
    unsetImagePreview();
  }
};

const insertImage = () => {
  const userImage = uploadInput.files[0];
  const url = URL.createObjectURL(userImage);
  imagePreview.src = url;
};

uploadInput.addEventListener('change', () => {
  insertImage();
  document.addEventListener('keydown', onKeydown);
  uploadInfo.addEventListener('keydown', onUploadInfoKeydown);
  open(uploadWindow);
});

cancelButton.addEventListener('click', () => {
  close(uploadWindow);
  document.removeEventListener('keydown', onKeydown);
  uploadInfo.removeEventListener('keydown', onUploadInfoKeydown);
  unsetImagePreview();
});
