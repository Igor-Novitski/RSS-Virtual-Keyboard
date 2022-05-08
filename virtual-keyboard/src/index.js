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

if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');

function firstFillKeys() {
   if (localStorage.lang === 'en') {
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
   (localStorage.lang === 'en') ? localStorage.lang = 'ru' : localStorage.lang = 'en';
   fillKeys();
}

langK.addEventListener('click', changeLang);



function changeCaps() {
   (!capsK.classList.contains('down')) ? capsK.classList.add('down') : capsK.classList.remove('down');
   capsK.classList.toggle('red');
   fillKeys();
}

capsK.addEventListener('click', changeCaps);

function fillKeys() {
   if (localStorage.lang === 'en') {
      for (let i = 0; i < rows.length; i++) {
         for (let j = 0; j < rows[i].children.length; j++) {
            if (capsK.classList.contains('down') && rows[i].children[j].textContent.length === 1) {
               rows[i].children[j].innerHTML = dataButtons[i][j].key.en.toUpperCase();
            } else if (rows[i].children[j].textContent.length === 1) {
               rows[i].children[j].innerHTML = dataButtons[i][j].key.en;
            }
         }
      }
   } else {
      for (let i = 0; i < rows.length; i++) {
         for (let j = 0; j < rows[i].children.length; j++) {
            if (capsK.classList.contains('down') && rows[i].children[j].textContent.length === 1) {
               rows[i].children[j].innerHTML = dataButtons[i][j].key.ru.toUpperCase();
            } else if (rows[i].children[j].textContent.length === 1) {
               rows[i].children[j].innerHTML = dataButtons[i][j].key.ru;
            }
         }
      }
   }
}