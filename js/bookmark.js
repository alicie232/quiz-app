export default function toggleBookmark(){
  const bookmarks = document.querySelectorAll("[data-js=bookmark]")
  bookmarks.forEach((bookmark) => {
      bookmark.addEventListener("click", () => {
          bookmark.classList.toggle('question-card__bookmark--marked')
      } )
  })
}

// export default function toggleBookmark(){
// const bookmark = document.querySelector('[data-js=bookmark]')
// bookmark.addEventListener('click', () =>
//   document.querySelector('.question-card__bookmark')
//     .classList.toggle('question-card__bookmark--marked')
// );
// console.log(bookmark);
// }