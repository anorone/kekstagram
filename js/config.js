const Configs = {
  CHROME: {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    format: {
      to: (number) => number.toFixed(1),
      from: (value) => parseFloat(value),
    },
    targetFilter: 'grayscale',
  },
  SEPIA: {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    format: {
      to: (number) => number.toFixed(1),
      from: (value) => parseFloat(value),
    },
    targetFilter: 'sepia',
  },
  MARVIN: {
    range: { min: 0, max: 100 },
    start: 100,
    step: 1,
    format: {
      to: (number) => `${number}%`,
      from: (value) => parseInt(value, 10),
    },
    targetFilter: 'invert',
  },
  PHOBOS: {
    range: { min: 0, max: 3 },
    start: 3,
    step: 0.1,
    format: {
      to: (number) => `${number.toFixed(1)}px`,
      from: (value) => parseFloat(value),
    },
    targetFilter: 'blur',
  },
  HEAT: {
    range: { min: 1, max: 3 },
    start: 3,
    step: 0.1,
    format: {
      to: (number) => number.toFixed(1),
      from: (value) => parseFloat(value),
    },
    targetFilter: 'brightness',
  },
  DEFAULT: {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    format: {
      to: (number) => number.toFixed(1),
      from: (value) => parseFloat(value),
    },
    targetFilter: '',
  },
};

export default (effectName) => Configs[effectName.toUpperCase()] || Configs.DEFAULT;
