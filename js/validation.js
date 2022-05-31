import { doesExceed, matchPattern, hasDuplicates } from './util.js';

const HASHTAG_PATTERN = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const HASHTAG_MAX_LENGTH = 20;
const HASHTAGS_MAX_COUNT = 5;
const COMMENT_MAX_LENGTH = 140;

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

const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

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
  }

  hashtagsField.reportValidity();
});

commentField.addEventListener('input', () => {
  const comment = commentField.value;

  if (doesExceed(comment, COMMENT_MAX_LENGTH)) {
    commentField.setCustomValidity(Messages.COMMENT_HINTS[0]);
  } else {
    commentField.setCustomValidity('');
  }

  commentField.reportValidity();
});
