// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const arrayIngredients = ingredients.map(element => {
  const nameIngredietEl = document.createElement('li')
  nameIngredietEl.textContent = element;
  nameIngredietEl.classList = 'item'
  return nameIngredietEl;
})
ingredientsList.append(...arrayIngredients)