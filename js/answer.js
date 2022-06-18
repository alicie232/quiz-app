/* Aufgabe: Antwort ist hidden. Mit Klick auf Show Answer, die Antwort anzeigen
erneuter Klick auf Hide Answer, die Antwort verstecken */

const answer = document.querySelector('[data-js=answer]');
const button = document.querySelector('[data-js=button]');

button.addEventListener('click', () => {
  answer.classList.toggle('hidden');
});

// Bookmark färbt sich beim Klicken um

let bookmark = document.querySelector('[data-js=bookmark]');
bookmark.addEventListener('click', () =>
  document
    .querySelector('.question-card__bookmark')
    .classList.toggle('question-card__bookmark--marked')
);
