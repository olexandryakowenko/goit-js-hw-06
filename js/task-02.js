const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = [];
ingredients.forEach((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = `${el}`;
  ingredientsList.push(li);
});
const ingredientsUl = document.getElementById("ingredients");
ingredientsUl.append(...ingredientsList);
