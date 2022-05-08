import { createKeyboard } from './js/keyboard.js';
import { createPageLayout } from './js/pageLayout.js';
import dataButtons from './js/dataButtons.js';

createPageLayout();
createKeyboard();
/*
const keys = document.querySelectorAll('.key');

function changeButton() {
   keys.classList.add('active');
}

keys.addEventListener('click', changeButton);
*/

//document.body.innerHTML = '';