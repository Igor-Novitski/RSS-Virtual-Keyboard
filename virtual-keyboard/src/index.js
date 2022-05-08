import { createKeyboard } from './js/keyboard.js';
import { createPageLayout } from './js/pageLayout.js';
import dataButtons from './js/dataButtons.js';

createPageLayout();
createKeyboard();

//buttons animation

const keys = document.querySelectorAll('.key');

function changeButtonDown(event) {
   if (event.target.classList.contains('key')) {
      event.target.classList.add('active');
   }
}

function changeButtonUp(event) {
   if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
   }
}

keys.forEach((item) => { item.addEventListener('mousedown', (changeButtonDown)) });
keys.forEach((item) => { item.addEventListener('mouseup', (changeButtonUp)) });
keys.forEach((item) => { item.addEventListener('mouseout', (changeButtonUp)) });

//document.body.innerHTML = '';