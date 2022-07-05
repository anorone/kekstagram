const scalePicker = document.querySelector('.scale');
const scaleDownButton = scalePicker.querySelector('.scale__control--smaller');
const scaleUpButton = scalePicker.querySelector('.scale__control--bigger');
const scaleLevel = scalePicker.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const minScale = 25;
const maxScale = 100;
const step = 25;

const rescaleImagePreview = (scaleValue) => {
  const classToAdd = `preview__img--scale_${scaleValue}`;
  const actualClass = imagePreview.className
    .split(' ')
    .find((item) => item.startsWith('preview__img--scale'));

  if (actualClass) {
    imagePreview.classList.remove(actualClass);
  }

  imagePreview.classList.add(classToAdd);
};

scaleDownButton.addEventListener('click', () => {
  const actualScale = parseInt(scaleLevel.value, 10);

  if (actualScale > minScale) {
    const newScale = actualScale - step;
    scaleLevel.value = `${newScale}%`;
    rescaleImagePreview(newScale);
  }
});

scaleUpButton.addEventListener('click', () => {
  const actualScale = parseInt(scaleLevel.value, 10);

  if (actualScale < maxScale) {
    const newScale = actualScale + step;
    scaleLevel.value = `${newScale}%`;
    rescaleImagePreview(newScale);
  }
});
