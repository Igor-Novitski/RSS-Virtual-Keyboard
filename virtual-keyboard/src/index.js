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

//firstFillKeys

const rows = document.querySelectorAll('.row');


let lang = 'en';

function firstFillKeys() {
   if (lang === 'en') {
      for (let i = 0; i < rows.length; i++) {
         for (let j = 0; j < rows[i].children.length; j++) {
            rows[i].children[j].innerHTML = dataButtons[i][j].key.en;
            rows[i].children[j].classList.add(dataButtons[i][j].class);
         }
      }
   } else {
      for (let i = 0; i < rows.length; i++) {
         for (let j = 0; j < rows[i].children.length; j++) {
            rows[i].children[j].innerHTML = dataButtons[i][j].key.ru;
            rows[i].children[j].classList.add(dataButtons[i][j].class);
         }
      }
   }
}

firstFillKeys();

const capsK = document.querySelector('.CapsLock');
const shiftK = document.querySelector('.ShiftLeft');
const altK = document.querySelector('.AltLeft');
const langK = document.querySelector('.Lang');

//change lang

function changeLang() {
   (lang === 'en') ? lang = 'ru' : lang = 'en';
   firstFillKeys();
}

langK.addEventListener('click', changeLang);



console.log(rows[4].children);