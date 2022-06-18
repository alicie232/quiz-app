export default function toggleBookmark(){
  const bookmarks = document.querySelectorAll("[data-js=bookmark]")
  bookmarks.forEach((bookmark) => {
      bookmark.addEventListener("click", () => {
          bookmark.classList.toggle('question-card__bookmark--marked')
      } )
  })
}