const answer = document.querySelector('[data-js=answer]');
const button = document.querySelector('[data-js=button]');

button.addEventListener('click', () => {
  answer.classList.toggle('hidden');
});