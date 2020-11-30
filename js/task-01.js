const categories = document.querySelectorAll(".item")

console.log(`В списке ${categories.length} категории.`);

categories.forEach((categorie) =>
console.log(`Категория:${categorie.firstElementChild.textContent}\nКоличество элементов:${categorie.lastElementChild.children.length}`)
)




