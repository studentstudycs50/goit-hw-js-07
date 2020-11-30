// Напиши скрипт, который бы при потере
//  фокуса на инпуте, проверял его содержимое 
//  на правильное количество символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.
// Если введено подходящее количество,
// то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы
// valid и invalid.



const validInputRef = document.querySelector("#validation-input");
const inputLength = Number(validInputRef.getAttribute("data-length"));

const input = (event) =>

  event.target.value.length === inputLength
    ? validInputRef.classList.add("valid") ||
    validInputRef.classList.remove("invalid") :
    validInputRef.classList.add("invalid") ||
    validInputRef.classList.remove("valid");

validInputRef.addEventListener("blur", input);