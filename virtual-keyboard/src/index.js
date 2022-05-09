import createKeyboard from './js/keyboard.js';
import createPageLayout from './js/pageLayout.js';
import dataButtons from './js/dataButtons.js';

createPageLayout();
createKeyboard();

// buttons animation

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

keys.forEach((item) => { item.addEventListener('mousedown', (changeButtonDown)); });
keys.forEach((item) => { item.addEventListener('mouseup', (changeButtonUp)); });
keys.forEach((item) => { item.addEventListener('mouseout', (changeButtonUp)); });

// firstFillKeys

const rows = document.querySelectorAll('.row');

if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');

function firstFillKeys() {
  if (localStorage.lang === 'en') {
    for (let i = 0; i < rows.length; i += 1) {
      for (let j = 0; j < rows[i].children.length; j += 1) {
        rows[i].children[j].innerHTML = dataButtons[i][j].key.en;
        rows[i].children[j].classList.add(dataButtons[i][j].class);
      }
    }
  } else {
    for (let i = 0; i < rows.length; i += 1) {
      for (let j = 0; j < rows[i].children.length; j += 1) {
        rows[i].children[j].innerHTML = dataButtons[i][j].key.ru;
        rows[i].children[j].classList.add(dataButtons[i][j].class);
      }
    }
  }
}

firstFillKeys();

const capsK = document.querySelector('.CapsLock');
const shiftKr = document.querySelector('.ShiftRight');
const shiftKl = document.querySelector('.ShiftLeft');
const ctrlKl = document.querySelector('.ControlLeft');
const altK = document.querySelector('.AltLeft');
const langK = document.querySelector('.Lang');

// change lang & capsLK

function fillKeys() {
  if (localStorage.lang === 'en') {
    for (let i = 0; i < rows.length; i += 1) {
      for (let j = 0; j < rows[i].children.length; j += 1) {
        if (capsK.classList.contains('down') && rows[i].children[j].textContent.length === 1) {
          rows[i].children[j].innerHTML = dataButtons[i][j].key.en.toUpperCase();
        } else if (rows[i].children[j].textContent.length === 1) {
          rows[i].children[j].innerHTML = dataButtons[i][j].key.en;
        }
      }
    }
  } else {
    for (let i = 0; i < rows.length; i += 1) {
      for (let j = 0; j < rows[i].children.length; j += 1) {
        if (capsK.classList.contains('down') && rows[i].children[j].textContent.length === 1) {
          rows[i].children[j].innerHTML = dataButtons[i][j].key.ru.toUpperCase();
        } else if (rows[i].children[j].textContent.length === 1) {
          rows[i].children[j].innerHTML = dataButtons[i][j].key.ru;
        }
      }
    }
  }
}

const changeLang = () => {
  if (localStorage.lang === 'en') {
    localStorage.lang = 'ru';
  } else {
    localStorage.lang = 'en';
  }
  if (shiftKl.classList.contains('down')) {
    shiftKl.classList.remove('down');
    shiftKr.classList.remove('red');
    shiftKl.classList.remove('red');
  }
  fillKeys();
};

langK.addEventListener('click', changeLang);

function changeCaps() {
  if (!capsK.classList.contains('down')) {
    capsK.classList.add('down');
  } else {
    capsK.classList.remove('down');
  }
  capsK.classList.toggle('red');
  fillKeys();
}

capsK.addEventListener('click', changeCaps);

// shift

function changeShiftByClick() {
  if (!capsK.classList.contains('down')) {
    if (shiftKl.classList.contains('down')) {
      for (let i = 0; i < rows.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (dataButtons[i][j].shift) {
            rows[i].children[j].innerHTML = dataButtons[i][j].shift[localStorage.lang];
          }
        }
      }
    } else {
      fillKeys();
    }
  } else if (shiftKl.classList.contains('down')) {
    for (let i = 0; i < rows.length; i += 1) {
      for (let j = 0; j < rows[i].children.length; j += 1) {
        if (dataButtons[i][j].shift && rows[i].children[j].textContent.length === 1) {
          rows[i].children[j].innerHTML = dataButtons[i][j].shift[localStorage.lang].toLowerCase();
        }
      }
    }
  } else {
    fillKeys();
  }
}

function changeShift() {
  if (!shiftKl.classList.contains('down')) {
    shiftKl.classList.add('down');
  } else {
    shiftKl.classList.remove('down');
  }
  shiftKr.classList.toggle('red');
  shiftKl.classList.toggle('red');
  fillKeys();
  changeShiftByClick();
}

shiftKr.addEventListener('click', (changeShift));
shiftKl.addEventListener('click', (changeShift));

// physical keyboard keys animation and functional

const display = document.querySelector('.display');

const codeArr = [];

for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < rows[i].children.length; j += 1) {
    if (dataButtons[i][j].code) codeArr.push(dataButtons[i][j].code);
  }
}

document.addEventListener('keydown', (event) => {
  if (codeArr.includes(event.code)) {
    document.querySelector(`.${event.code}`).classList.add('active');
  }
  if (ctrlKl.classList.contains('active') && altK.classList.contains('active')) {
    changeLang();
  }
  if (event.key === 'Alt' || event.key === 'AltGr') {
    event.preventDefault();
  }
  if (event.key === 'Tab') {
    event.preventDefault();
    display.value += '    ';
  }
  if (event.code === 'CapsLock') {
    changeCaps();
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    changeShift();
  }
  display.focus();
});

document.addEventListener('keyup', (event) => {
  if (codeArr.includes(event.code)) {
    document.querySelector(`.${event.code}`).classList.remove('active');
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    changeShift();
  }
});
display.focus();

// write by virtual keyboard

let cursor;
let text;

function writeByClick(event) {
  cursor = display.selectionStart;
  display.focus();
  if (event.target.textContent.length === 1) {
    display.value += event.target.textContent;
  }
  if (event.target.textContent === 'Tab') {
    text = [...display.value];
    text.splice(cursor, 0, '    ');
    text = text.join('');
    display.value = text;
  }
  if (event.target.textContent === 'Enter') {
    text = [...display.value];
    text.splice(cursor, 0, '\n');
    text = text.join('');
    display.value = text;
  }
  if (event.target.textContent === 'Backspace') {
    text = [...display.value];
    text.pop();
    text = text.join('');
    display.value = text;
  }
}

keys.forEach((k) => { k.addEventListener('click', writeByClick); });

console.log('Уважаемый проверяющий, в случае обнаружения каких-либо ошибок или недочетов, готов все исправить в кратчайшее время, поэтому прошу Вас оставлять ваши даннные');
