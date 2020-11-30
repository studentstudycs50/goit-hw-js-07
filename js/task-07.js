// Напиши скрипт, который реагирует на изменение
// значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const fontSizeChanger = (event) =>
  (textRef.style.fontSize = event.currentTarget.value + "px");

fontSizeRef.addEventListener("input", fontSizeChanger);