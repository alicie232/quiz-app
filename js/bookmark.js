let bookmark = document.querySelector('[data-js=bookmark]');
bookmark.addEventListener('click', () =>
  document
    .querySelector('.question-card__bookmark')
    .classList.toggle('question-card__bookmark--marked')
);