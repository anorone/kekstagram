import { isEscapeKey  } from './util.js';

const uploadForm = document.querySelector('#upload-select-image');
const uploadInput = uploadForm.querySelector('#upload-file');
const uploadWindow = uploadForm.querySelector('.img-upload__overlay');
const uploadInfo = uploadWindow.querySelector('.img-upload__text');
const cancelButton = uploadWindow.querySelector('#upload-cancel');

const openUploadWindow = () => {
  document.body.classList.add('modal-open');
  uploadWindow.classList.remove('hidden');
};

const closeUploadWindow = () => {
  document.body.classList.remove('modal-open');
  uploadWindow.classList.add('hidden');
};

const onUploadInfoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeUploadWindow();
    document.removeEventListener('keydown', onKeydown);
    uploadInfo.removeEventListener('keydown', onUploadInfoKeydown);
    uploadForm.reset();
  }
};

const insertImage = () => {
  const imagePreview = document.querySelector('.img-upload__preview img');
  const userImage = uploadInput.files[0];
  const url = URL.createObjectURL(userImage);
  imagePreview.src = url;
};

uploadInput.addEventListener('change', () => {
  insertImage();
  openUploadWindow();
  document.addEventListener('keydown', onKeydown);
  uploadInfo.addEventListener('keydown', onUploadInfoKeydown);
});

cancelButton.addEventListener('click', () => {
  closeUploadWindow();
  document.removeEventListener('keydown', onKeydown);
  uploadInfo.removeEventListener('keydown', onUploadInfoKeydown);
});
