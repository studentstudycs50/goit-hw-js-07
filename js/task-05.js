//Напиши скрипт который, при наборе текста в 
//инпуте input#name-input (событие input), 
//подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться
// строка 'незнакомец'.

let inputName = document.getElementById("name-input")

let outputName = document.getElementById("name-output")

inputName.addEventListener('input', (event) =>{
    event.target.value === '' ? outputName.textContent = "незнакомец" : outputName.textContent = event.target.value
    
})
// Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
