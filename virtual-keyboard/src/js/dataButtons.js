const dataButtons = [
   [
      {
         key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote', class: 'key Backquote',
      },
      {
         key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1', class: 'key Digit1',
      },
      {
         key: { ru: '2', en: '2' }, shift: { ru: '"', en: '@' }, code: 'Digit2', class: 'key Digit2',
      },
      {
         key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3', class: 'key Digit3',
      },
      {
         key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4', class: 'key Digit4',
      },
      {
         key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5', class: 'key Digit5',
      },
      {
         key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6', class: 'key Digit6',
      },
      {
         key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7', class: 'key Digit7',
      },
      {
         key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8', class: 'key Digit8',
      },
      {
         key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9', class: 'key Digit9',
      },
      {
         key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0', class: 'key Digit0',
      },
      {
         key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus', class: 'key Minus',
      },
      {
         key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal', class: 'key Equal',
      },
      {
         key: { ru: 'Backspace', en: 'Backspace' }, code: 'Backspace', class: 'key Backspace',
      },
   ],
   [
      {
         key: { ru: 'Tab', en: 'Tab' }, code: 'Tab', class: 'key Tab',
      },
      {
         key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ', class: 'key KeyQ',
      },
      {
         key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW', class: 'key KeyW',
      },
      {
         key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE', class: 'key KeyE',
      },
      {
         key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR', class: 'key KeyR',
      },
      {
         key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT', class: 'key KeyT',
      },
      {
         key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY', class: 'key KeyY',
      },
      {
         key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU', class: 'key KeyU',
      },
      {
         key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI', class: 'key KeyI',
      },
      {
         key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO', class: 'key KeyO',
      },
      {
         key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP', class: 'key KeyP',
      },
      {
         key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{' }, code: 'BracketLeft', class: 'key BracketLeft',
      },
      {
         key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, code: 'BracketRight', class: 'key BracketRight',
      },
      {
         key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'key Backslash',
      },
      {
         key: { ru: 'Del', en: 'Del' }, code: 'Delete', class: 'key Delete',
      },
   ],
   [
      {
         key: { ru: 'CapsLk', en: 'CapsLk' }, code: 'CapsLock', class: 'key CapsLock',
      },
      {
         key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA', class: 'key KeyA',
      },
      {
         key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS', class: 'key KeyS',
      },
      {
         key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD', class: 'key KeyD',
      },
      {
         key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF', class: 'key KeyF',
      },
      {
         key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'KeyG', class: 'key KeyG',
      },
      {
         key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH', class: 'key KeyH',
      },
      {
         key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ', class: 'key KeyJ',
      },
      {
         key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK', class: 'key KeyK',
      },
      {
         key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL', class: 'key KeyL',
      },
      {
         key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon', class: 'key Semicolon',
      },
      {
         key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote', class: 'key Quote',
      },
      {
         key: { ru: 'Enter', en: 'Enter' }, code: 'Enter', class: 'key Enter',
      },
   ],
   [
      {
         key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftLeft', class: 'key ShiftLeft',
      },
      {
         key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ', class: 'key KeyZ',
      },
      {
         key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX', class: 'key KeyX',
      },
      {
         key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC', class: 'key KeyC',
      },
      {
         key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV', class: 'key KeyV',
      },
      {
         key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB', class: 'key KeyB',
      },
      {
         key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN', class: 'key KeyN',
      },
      {
         key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM', class: 'key KeyM',
      },
      {
         key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma', class: 'key Comma',
      },
      {
         key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period', class: 'key Period',
      },
      {
         key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash', class: 'key Slash',
      },
      {
         key: { ru: '↑', en: '↑' }, code: 'ArrowUp', noType: true, class: 'key ArrowUp',
      },
      {
         key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftRight', class: 'key ShiftRight',
      },
   ],
   [
      {
         key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlLeft', class: 'key ControlLeft',
      },
      {
         key: { ru: 'Alt', en: 'Alt' }, code: 'AltLeft', class: 'key AltLeft',
      },
      { key: { ru: ' ', en: ' ' }, code: 'Space', class: 'key Space' },
      {
         key: { ru: 'Alt', en: 'Alt' }, code: 'AltRight', class: 'key AltRight',
      },
      {
         key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlRight', class: 'key ControlRight',
      },
      {
         key: { ru: '←', en: '←' }, code: 'ArrowLeft', noType: true, class: 'key ArrowLeft',
      },
      {
         key: { ru: '↓', en: '↓' }, code: 'ArrowDown', noType: true, class: 'key ArrowDown',
      },
      {
         key: { ru: '→', en: '→' }, code: 'ArrowRight', noType: true, class: 'key ArrowRight',
      },
      {
         key: { ru: '🇷🇺', en: 'en' }, code: 'Lang', class: 'key Lang',
      },
   ],
];

export default dataButtons;
