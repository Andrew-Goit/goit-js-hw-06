const categoriesRef = document.querySelector("#categories");
const itemRef = document.querySelector(".item");

const numberOfCategories = categoriesRef.children
console.log('Number of categories:', numberOfCategories.length);

[...numberOfCategories].map(element => {
    console.log('');
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.children[1].children.length);
  });