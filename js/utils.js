import {isNonNegativeInt} from './validation.js';

const ALERT_SHOW_TIME = 5000;

function getRandomInt(min, max) {
  if (!isNonNegativeInt(min) || !isNonNegativeInt(max)) {
    throw new Error('Аргументы должны быть неотрицательными целыми числами');
  }
  if (min >= max) {
    throw new Error('Минимальное значение должно быть меньше максимального');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const isEscapeKey = (evt) => (
  evt.key === 'Escape'
);


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const debouncer = function() {
  let timeoutId;
  const debounce = (callback, timeoutDelay = 500) =>
    (...rest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
  return {
    debounce
  };
};

export {getRandomInt, isEscapeKey, showAlert, shuffleArray, debouncer};
