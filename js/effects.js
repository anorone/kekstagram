import getOptions from './config.js';

const imagePreview = document.querySelector('.img-upload__preview img');
const effectsPicker = document.querySelector('.effects');
const slider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

noUiSlider.create(slider, {
  range: { min: 0, max: 1},
  start: 1,
  connect: 'lower',
});

effectsPicker.addEventListener('change', () => {
  const pickedEffect = effectsPicker.querySelector('.effects__radio:checked');
  const effectName = pickedEffect.value;
  const classToAdd = `effects__preview--${effectName}`;
  const actualClass = imagePreview.className
    .split(' ')
    .find((item) => item.startsWith('effects__preview--'));

  if (actualClass) {
    imagePreview.classList.remove(actualClass);
  }

  imagePreview.classList.add(classToAdd);

  const sliderOptions = getOptions(effectName);
  slider.targetFilter = sliderOptions.targetFilter;
  slider.noUiSlider.updateOptions(sliderOptions);

  if (effectName === 'none') {
    slider.style.display = 'none';
  } else {
    slider.style.display = 'block';
  }
});

slider.noUiSlider.on('update', ([value]) => {
  if (slider.targetFilter) {
    const filterValue = `${slider.targetFilter}(${value})`;
    imagePreview.style.filter = filterValue;
    imagePreview.style['-webkit-filter'] = filterValue;
    effectLevel.value = parseFloat(value);
  } else {
    imagePreview.style.filter = '';
    imagePreview.style['-webkit-filter'] = '';
    effectLevel.value = '';
  }
});
