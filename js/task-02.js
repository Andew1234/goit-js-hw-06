const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul");
const ingredientItem = document.createElement("li");
ingredientItem.classList.add("item");

ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  ingredientsList.appendChild(ingredientItem);
});
