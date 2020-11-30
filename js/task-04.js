// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой 
//будет хранится текущее значение счетчика.
// Создай функции increment и decrement для 
//увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
let value = document.getElementById("value");
console.log(value);
let btnIncrement = document.querySelector('button[data-action="increment"]')

let btnDecrement = document.querySelector('button[data-action="decrement"]')

 function increment() { 
    counterValue += 1;
    value.textContent = counterValue

 };

function decrement() { 
   counterValue -= 1;
   value.textContent = counterValue

};

btnIncrement.addEventListener('click', increment)
btnDecrement.addEventListener('click', decrement)


