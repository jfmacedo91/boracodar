function toggleInput(event) {
  const icon = event.target;
  const inputWrapper = event.currentTarget.parentNode;
  const input = inputWrapper.querySelector('input');
  if(input.type === 'password') {
    input.type = 'text';
    icon.src = './assets/eye.svg';
  } else {
    input.type = 'password';
    icon.src = './assets/eye-off.svg';
  }
}