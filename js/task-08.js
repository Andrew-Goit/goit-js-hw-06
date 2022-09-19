const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit (event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please, all fields must be filled');
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
}
