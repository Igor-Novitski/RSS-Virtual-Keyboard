const dataButtons = [
   [
      {
         key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote', class: 'Backquote',
      },
      {
         key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1', class: 'Digit1',
      },
      {
         key: { ru: '2', en: '2' }, shift: { ru: '"', en: '@' }, code: 'Digit2', class: 'Digit2',
      },
      {
         key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3', class: 'Digit3',
      },
      {
         key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4', class: 'Digit4',
      },
      {
         key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5', class: 'Digit5',
      },
      {
         key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6', class: 'Digit6',
      },
      {
         key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7', class: 'Digit7',
      },
      {
         key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8', class: 'Digit8',
      },
      {
         key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9', class: 'Digit9',
      },
      {
         key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0', class: 'Digit0',
      },
      {
         key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus', class: 'Minus',
      },
      {
         key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal', class: 'Equal',
      },
      {
         key: { ru: 'Backspace', en: 'Backspace' }, code: 'Backspace', class: 'Backspace',
      },
   ],
   [
      {
         key: { ru: 'Tab', en: 'Tab' }, code: 'Tab', class: 'Tab',
      },
      {
         key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ', class: 'KeyQ',
      },
      {
         key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW', class: 'KeyW',
      },
      {
         key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE', class: 'KeyE',
      },
      {
         key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR', class: 'KeyR',
      },
      {
         key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT', class: 'KeyT',
      },
      {
         key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY', class: 'KeyY',
      },
      {
         key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU', class: 'KeyU',
      },
      {
         key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI', class: 'KeyI',
      },
      {
         key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO', class: 'KeyO',
      },
      {
         key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP', class: 'KeyP',
      },
      {
         key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{' }, code: 'BracketLeft', class: 'BracketLeft',
      },
      {
         key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, code: 'BracketRight', class: 'BracketRight',
      },
      {
         key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'Backslash',
      },
      {
         key: { ru: 'Del', en: 'Del' }, code: 'Delete', class: 'Delete',
      },
   ],
   [
      {
         key: { ru: 'CapsLk', en: 'CapsLk' }, code: 'CapsLock', class: 'CapsLock',
      },
      {
         key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA', class: 'KeyA',
      },
      {
         key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS', class: 'KeyS',
      },
      {
         key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD', class: 'KeyD',
      },
      {
         key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF', class: 'KeyF',
      },
      {
         key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'KeyG', class: 'KeyG',
      },
      {
         key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH', class: 'KeyH',
      },
      {
         key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ', class: 'KeyJ',
      },
      {
         key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK', class: 'KeyK',
      },
      {
         key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL', class: 'KeyL',
      },
      {
         key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon', class: 'Semicolon',
      },
      {
         key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote', class: 'Quote',
      },
      {
         key: { ru: 'Enter', en: 'Enter' }, code: 'Enter', class: 'Enter',
      },
   ],
   [
      {
         key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftLeft', class: 'ShiftLeft',
      },
      {
         key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ', class: 'KeyZ',
      },
      {
         key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX', class: 'KeyX',
      },
      {
         key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC', class: 'KeyC',
      },
      {
         key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV', class: 'KeyV',
      },
      {
         key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB', class: 'KeyB',
      },
      {
         key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN', class: 'KeyN',
      },
      {
         key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM', class: 'KeyM',
      },
      {
         key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma', class: 'Comma',
      },
      {
         key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period', class: 'Period',
      },
      {
         key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash', class: 'Slash',
      },
      {
         key: { ru: '↑', en: '↑' }, code: 'ArrowUp', noType: true, class: 'ArrowUp',
      },
      {
         key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftRight', class: 'ShiftRight',
      },
   ],
   [
      {
         key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlLeft', class: 'ControlLeft',
      },
      {
         key: { ru: 'Alt', en: 'Alt' }, code: 'AltLeft', class: 'AltLeft',
      },
      { key: { ru: ' ', en: ' ' }, code: 'Space', class: 'Space' },
      {
         key: { ru: 'Alt', en: 'Alt' }, code: 'AltRight', class: 'AltRight',
      },
      {
         key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlRight', class: 'ControlRight',
      },
      {
         key: { ru: '←', en: '←' }, code: 'ArrowLeft', noType: true, class: 'ArrowLeft',
      },
      {
         key: { ru: '↓', en: '↓' }, code: 'ArrowDown', noType: true, class: 'ArrowDown',
      },
      {
         key: { ru: '→', en: '→' }, code: 'ArrowRight', noType: true, class: 'ArrowRight',
      },
      {
         key: { ru: '🇷🇺', en: 'en' }, code: 'Lang', class: 'Lang',
      },
   ],
];

export default dataButtons;
