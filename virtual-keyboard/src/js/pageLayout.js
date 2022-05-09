export function createPageLayout() {
   const container = document.createElement('div');
   container.className = 'container';
   document.body.append(container);

   const tittle = document.createElement('h1');
   tittle.innerHTML = 'Virtual Keyboard';
   container.append(tittle);

   const display = document.createElement('textarea');
   display.className = 'display';
   container.append(display);

   const keyboard = document.createElement('div');
   keyboard.className = 'keyboard';
   container.append(keyboard);

   const footer = document.createElement('p');
   footer.innerHTML = `🛈 To change the language press "Cntrl + Alt"(left) combination or special button "en/ru".<br/>
         Only for Windows system.`;
   container.append(footer);
}