const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ingredientsRef = document.querySelector('#ingredients');

// const elements = ingredients.map(el => {
//   const ingredientsItemRef = document.createElement('li');
//   ingredientsItemRef.classList.add('.item');
//   ingredientsItemRef.textContent = `${el}`;
//   console.log(ingredientsItemRef);
//   return ingredientsItemRef;
// });
// ingredientsRef.append(...elements);


const ingredientsEl = document.querySelector ('#ingredients');

const elements = ingredients.map ((element) => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = `${element}`;
  ingredientsItemEl.classList.add('.item');

  console.log (ingredientsItemEl)
  return ingredientsItemEl;
});

ingredientsEl.append(...elements);
