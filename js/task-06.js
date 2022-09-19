const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', handler);
function handler (event) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
if (event.currentTarget.value.length === +inputRef.dataset.length)
    {inputRef.classList.add('valid')}
else
    {inputRef.classList.add('invalid')};
    
}
