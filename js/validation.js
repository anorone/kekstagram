import { doesExceed, matchPattern, hasDuplicates } from './util.js';

const uploadForm = document.querySelector('#upload-select-image');
const fieldSet = uploadForm.querySelector('.img-upload__text');
const hashtagsField = fieldSet.querySelector('.text__hashtags');
const commentField = fieldSet.querySelector('.text__description');

const COMMENT_MAX_LENGTH = commentField.maxLength;
const HASHTAG_PATTERN = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const HASHTAG_MAX_LENGTH = 20;
const HASHTAGS_MAX_COUNT = 5;

const Messages = {
  HASHTAG_HINTS: [
    'Хэштег не может состоять только из знака #.',
    `Хэштег должен быть не больше ${HASHTAG_MAX_LENGTH} знаков и не должен содержать спецсимволы.`,
    'Хэштеги не должны повторяться.',
    `Разрешено максимум ${HASHTAGS_MAX_COUNT} хэштегов.`,
  ],
  COMMENT_HINTS: [
    `Длина комментария не может быть больше ${COMMENT_MAX_LENGTH} символов.`,
  ],
};

hashtagsField.addEventListener('input', () => {
  const hashtags = hashtagsField.value
    .split(' ')
    .filter((str) => str)
    .map((hashtag) => hashtag.trim().toLowerCase());

  if (hashtags.includes('#')) {
    hashtagsField.setCustomValidity(Messages.HASHTAG_HINTS[0]);
  } else
  if (!hashtags.every((hashtag) => matchPattern(hashtag, HASHTAG_PATTERN))) {
    hashtagsField.setCustomValidity(Messages.HASHTAG_HINTS[1]);
  } else
  if (hasDuplicates(hashtags)) {
    hashtagsField.setCustomValidity(Messages.HASHTAG_HINTS[2]);
  } else
  if (doesExceed(hashtags, HASHTAGS_MAX_COUNT)) {
    hashtagsField.setCustomValidity(Messages.HASHTAG_HINTS[3]);
  } else {
    hashtagsField.setCustomValidity('');
    hashtagsField.style.outline = '';
  }

  hashtagsField.reportValidity();
});

commentField.addEventListener('input', () => {
  const comment = commentField.value;

  if (doesExceed(comment, COMMENT_MAX_LENGTH)) {
    commentField.setCustomValidity(Messages.COMMENT_HINTS[0]);
  } else {
    commentField.setCustomValidity('');
    hashtagsField.style.outline = '';
  }

  commentField.reportValidity();
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = uploadForm.reportValidity();

  if (!isValid) {
    fieldSet.querySelectorAll(':invalid').forEach((input) => {
      input.style.outline = '5px solid #ff4e4e';
    });
  }
});
