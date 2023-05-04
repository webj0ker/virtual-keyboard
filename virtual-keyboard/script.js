window.onload = () => {

  const keys = [
    { code: 'Backquote', en: '`', enShift: '~', ru: 'ё', ruShift: 'Ё' },
    { code: 'Digit1', en: '1', enShift: '!', ru: '1', ruShift: '!' },
    { code: 'Digit2', en: '2', enShift: '@', ru: '2', ruShift: '"' },
    { code: 'Digit3', en: '3', enShift: '#', ru: '3', ruShift: '№' },
    { code: 'Digit4', en: '4', enShift: '$', ru: '4', ruShift: ';' },
    { code: 'Digit5', en: '5', enShift: '%', ru: '5', ruShift: '%' },
    { code: 'Digit6', en: '6', enShift: '^', ru: '6', ruShift: ':' },
    { code: 'Digit7', en: '7', enShift: '&', ru: '7', ruShift: '?' },
    { code: 'Digit8', en: '8', enShift: '*', ru: '8', ruShift: '*' },
    { code: 'Digit9', en: '9', enShift: '(', ru: '9', ruShift: '(' },
    { code: 'Digit0', en: '0', enShift: ')', ru: '0', ruShift: ')' },
    { code: 'Minus', en: '-', enShift: '_', ru: '-', ruShift: '_' },
    { code: 'Equal', en: '=', enShift: '+', ru: '=', ruShift: '+' },
    { code: 'Backspace', specKey: true, codefunc: function () { } },

    { code: 'Tab', specKey: true, codeHtml: '\t', },
    { code: 'KeyQ', en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й' },
    { code: 'KeyW', en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц' },
    { code: 'KeyE', en: 'e', enShift: 'E', ru: 'у', ruShift: 'У' },
    { code: 'KeyR', en: 'r', enShift: 'R', ru: 'к', ruShift: 'К' },
    { code: 'KeyT', en: 't', enShift: 'T', ru: 'е', ruShift: 'Е' },
    { code: 'KeyY', en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н' },
    { code: 'KeyU', en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г' },
    { code: 'KeyI', en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш' },
    { code: 'KeyO', en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ' },
    { code: 'KeyP', en: 'p', enShift: 'P', ru: 'з', ruShift: 'З' },
    { code: 'BracketLeft', en: '[', enShift: '{', ru: 'х', ruShift: 'Х' },
    { code: 'BracketRight', en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ' },
    { code: 'Backslash', en: '\\', enShift: '|', ru: '\\', ruShift: '/' },
    { code: 'Delete', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Del' },

    { code: 'CapsLock', specKey: true, en: '', enShift: '', ru: '', ruShift: '' },
    { code: 'KeyA', en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф' },
    { code: 'KeyS', en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы' },
    { code: 'KeyD', en: 'd', enShift: 'D', ru: 'в', ruShift: 'В' },
    { code: 'KeyF', en: 'f', enShift: 'F', ru: 'а', ruShift: 'А' },
    { code: 'KeyG', en: 'g', enShift: 'G', ru: 'п', ruShift: 'П' },
    { code: 'KeyH', en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р' },
    { code: 'KeyJ', en: 'j', enShift: 'J', ru: 'о', ruShift: 'О' },
    { code: 'KeyK', en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л' },
    { code: 'KeyL', en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д' },
    { code: 'Semicolon', en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж' },
    { code: 'Quote', en: "'", enShift: '"', ru: 'э', ruShift: 'Э' },
    { code: 'Enter', en: 'Enter', enShift: 'Enter', ru: 'Enter', ruShift: 'Enter', name: 'Enter', specKey: true, codeHtml: '\r' },

    { code: 'ShiftLeft', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Shift' },
    { code: 'KeyZ', en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я' },
    { code: 'KeyX', en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч' },
    { code: 'KeyC', en: 'c', enShift: 'C', ru: 'с', ruShift: 'С' },
    { code: 'KeyV', en: 'v', enShift: 'V', ru: 'м', ruShift: 'М' },
    { code: 'KeyB', en: 'b', enShift: 'B', ru: 'и', ruShift: 'И' },
    { code: 'KeyN', en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т' },
    { code: 'KeyM', en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь' },
    { code: 'Comma', en: ',', enShift: '<', ru: 'б', ruShift: 'Б' },
    { code: 'Period', en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю' },
    { code: 'Slash', en: '/', enShift: '?', ru: '.', ruShift: ',' },
    { code: 'ArrowUp', en: '↑', enShift: '↑', ru: '↑', ruShift: '↑' },
    { code: 'ShiftRight', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Shift' },

    { code: 'ControlLeft', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Ctrl' },
    { code: 'MetaLeft', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Win' },
    { code: 'AltLeft', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Alt' },
    { code: 'Space', en: ' ', enShift: ' ', ru: ' ', ruShift: ' ', specKey: true, codeHtml: ' ' },
    { code: 'AltRight', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Alt' },
    { code: 'ArrowLeft', en: '←', enShift: '←', ru: '←', ruShift: '←' },
    { code: 'ArrowDown', en: '↓', enShift: '↓', ru: '↓', ruShift: '↓' },
    { code: 'ArrowRight', en: '→', enShift: '→', ru: '→', ruShift: '→' },
    { code: 'ControlRight', en: '', enShift: '', ru: '', ruShift: '', specKey: true, name: 'Ctrl' }
  ];

  let h1 = document.createElement('h1');
  h1.innerHTML = 'Виртуальная клавиатура';
  document.body.append(h1);

  let textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.autofocus = true;
  document.body.append(textarea);

  let keyboard = document.createElement('div');
  keyboard.id = 'keyboard';
  document.body.append(keyboard);

  let p = document.createElement('p');
  p.textContent = 'Переключение языков комбинацией левых Ctrl + Alt';
  document.body.append(p);

  let langLocal = localStorage.lang || localStorage.setItem('lang', 'en');

  let addKeysDom = function (objKey, lang = localStorage.lang || 'en') {
    let key = document.createElement('div');
    key.className = objKey.code;
    key.innerText = objKey[lang] || objKey.name || objKey.code;
    // key.innerText = objKey.en || objKey.name || objKey.code;
    return document.getElementById('keyboard').append(key);
  }

  keys.forEach(objKey => addKeysDom(objKey, langLocal));
  class Button {
    textarea = document.getElementById('textarea');

    constructor(options) {

      this.code = options.code;
      this.en = options.en;
      this.enShift = options.enShift;
      this.ru = options.ru;
      this.ruShift = options.ruShift;
    }

    pushKey(event) {
      let localObjKey = {}
      keys.forEach(function (obj) {

        if (obj.code === event.code) {
          let btn = document.querySelector(`.${obj.code}`);
          localObjKey = obj;

          if (event.type === 'keydown') {
            btn.classList.add('active');
          }

          if (event.type === 'keyup') {
            btn.classList.remove('active');
          }
        }
      });

      if (event.type === 'keyup') {

        if (!localObjKey.codefunc) {
          if (textarea.selectionStart != undefined) {

            let carriage = textarea.selectionStart;
            textarea.value = textarea.value.substring(0, textarea.selectionStart) + (localObjKey.codeHtml || localObjKey[localStorage.lang]) + textarea.value.substring(textarea.selectionEnd, textarea.value.length);
            textarea.selectionStart = carriage + localObjKey.en.length;
            textarea.selectionEnd = textarea.selectionStart;
          } else {
            textarea.value += (localObjKey.codeHtml || localObjKey.en)
          }
        }

      }

    }

    mouseClick(event) {

      keys.forEach(function (obj) {

        if (event.target.className === obj.code && !obj.codefunc) {

          if (textarea.selectionStart != undefined) {

            let carriage = textarea.selectionStart;
            // textarea.value = textarea.value.substring(0, textarea.selectionStart) + (obj.codeHtml || obj.en) + textarea.value.substring(textarea.selectionEnd, textarea.value.length);
            textarea.value = textarea.value.substring(0, textarea.selectionStart) + (obj.codeHtml || obj[localStorage.lang]) + textarea.value.substring(textarea.selectionEnd, textarea.value.length);
            textarea.selectionStart = carriage + obj.en.length;
            textarea.selectionEnd = textarea.selectionStart;
          } else {
            textarea.value += (obj.codeHtml || obj.en)
          }



        }
      });

    }

  }

  let button = new Button(keys);

  document.getElementById('keyboard').addEventListener("click", (event) => {
    button.mouseClick(event);


    if (event.target.classList.contains('Backspace')) {

      if (textarea.selectionStart) {
        let caretka = textarea.selectionStart - 1
        textarea.value = textarea.value.replace(textarea.value.slice(textarea.selectionStart - 1, textarea.selectionEnd), '');
        // textarea.value = textarea.value.replace(textarea.value.slice(textarea.selectionStart-1, textarea.selecti  onEnd), '');

        textarea.selectionStart = caretka
        textarea.selectionEnd = caretka
      }

    }

    if (event.target.classList.contains('Delete')) {

      let caretka = textarea.selectionStart
      textarea.value = textarea.value.replace(textarea.value.slice(textarea.selectionStart, textarea.selectionStart + 1), '');
      textarea.selectionStart = caretka
      textarea.selectionEnd = caretka

    }

  });

  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.ctrlKey && event.altKey) {
      event.preventDefault();

      keyboard.innerHTML = ''

      if (localStorage.getItem('lang') === 'en') {
        localStorage.setItem('lang', 'ru');

      } else if (localStorage.getItem('lang') === 'ru') {
        localStorage.setItem('lang', 'en');
      }

      keys.forEach(objKey => addKeysDom(objKey, localStorage.lang));

    }

    if (event.code === 'Backspace') {

      if (textarea.selectionStart) {
        let caretka = textarea.selectionStart - 1
        textarea.value = textarea.value.replace(textarea.value.slice(textarea.selectionStart - 1, textarea.selectionEnd), '');
        // textarea.value = textarea.value.replace(textarea.value.slice(textarea.selectionStart-1, textarea.selecti  onEnd), '');
        console.log(textarea.value.selectionStart)
        textarea.selectionStart = caretka
        textarea.selectionEnd = caretka
      }

    }
    if (event.code === 'Delete') {

      let caretka = textarea.selectionStart
      textarea.value = textarea.value.replace(textarea.value.slice(textarea.selectionStart, textarea.selectionStart + 1), '');
      textarea.selectionStart = caretka
      textarea.selectionEnd = caretka

    }

    // let caps = false;
    // if(event.code === 'CapsLock') {
    //   !caps
    //   if(caps) {
    //     keys.forEach(objKey => addKeysDom(objKey, localStorage.lang));
    //   } else if (!caps) {
    //     keys.forEach(objKey => addKeysDom(objKey, localStorage.lang));
    //   }
    // }

    button.pushKey(event);


  });

  // document.addEventListener('keyup', (event) => {
  document.addEventListener("keyup", (event) => {
    event.preventDefault();
    button.pushKey(event);
  });


}