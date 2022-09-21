const buttonDecrementRef = document.querySelector(
    'button[data-action="decrement"]'
  );
  const buttonIncrementRef = document.querySelector(
    'button[data-action="increment"]'
  );
  const counterRef = document.querySelector('#value');

  let counterValue = 0;

  // buttonDecrementRef.addEventListener("click", () => {
  //   counterValue -= 1;
  //   counterRef.textContent = `${counterValue}`;
  // });
  // buttonIncrementRef.addEventListener("click", ()=> {
  //   counterValue +=1;
  //   counterRef.textContent = `${counterValue}`
  // });
  
  buttonDecrementRef.addEventListener("click", () => {
    counterRef.textContent = `${counterValue -= 1}`;
  });
  buttonIncrementRef.addEventListener("click", ()=> {
    counterRef.textContent = `${counterValue +=1}`
  });