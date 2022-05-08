export function createKeyboard() {
   const keyboard = document.querySelector(".keyboard");

   const rowArr = [14, 15, 13, 13, 9]

   for (let i = 0; i < rowArr.length; i++) {
      const row = document.createElement('div');
      row.className = 'row';
      keyboard.append(row);
      for (let j = 0; j < rowArr[i]; j++) {
         const key = document.createElement('div');
         key.className = 'key';
         row.append(key);
      }
   }
}


