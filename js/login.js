const loginButton = document.querySelector('[data-js="button-login"]');

let isUserLoggedIn = false;

export default loginButton.addEventListener('click', () => {
  isUserLoggedIn = !isUserLoggedIn;
  if (isUserLoggedIn) {
    loginButton.innerText = 'Logout';
    console.log(isUserLoggedIn);
  } else {
    loginButton.innerText = 'Login';
  }
});
