
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 //=====================REDUCE==========
  const list = document.getElementById("ingredients")
  console.log(list);
  
  const listItems = ingredients.reduce((acc, ingredient)=>{
  let li = document.createElement("li")
  li.textContent = ingredient
  acc.push(li)
  return acc

},[])

console.log(listItems);

list.append(...listItems)
//===================END REDUCE===========


//   Напиши скрипт, который для каждого элемента массива ingredients 
//   создаст отдельный li, после чего вставит все li за одну 
//операцию в список ul.ingredients.
//    Для создания DOM-узлов используй document.createElement().


