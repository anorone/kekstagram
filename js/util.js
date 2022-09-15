const doesExceed = (sequence, maxLength) => sequence.length > maxLength;
const matchPattern = (value, pattern) => pattern.test(value);
const hasDuplicates = (arr) => new Set(arr).size < arr.length;
const isEscapeKey = (evt) => evt.code === 'Escape';

export { doesExceed, matchPattern, hasDuplicates, isEscapeKey };
