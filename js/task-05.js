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
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
  
  
  
  // =============================REDUCE============
  const ulRef = document.querySelector("#gallery");
  console.log(ulRef);
  const createLi = images.reduce((acc, imgObj) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const img = document.createElement("img");
    img.classList.add("gallery__img");
    // img.setAtribute("src", img.url);
    // img.setAtribute("alt", img.alt);
    img.src = imgObj.url;
    img.alt = imgObj.alt;
    li.append(img);
    acc.push(li);
    return acc;
  }, []);
  console.dir(createLi);
  ulRef.append(...createLi);
  //============================= END REDUCE ===========
  
  
  
