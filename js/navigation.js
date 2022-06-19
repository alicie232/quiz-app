const pageHome = document.querySelector('[data-js=home]');
const pageBookmark = document.querySelector('[data-js=bookmarked]');
const pageCreate = document.querySelector('[data-js=create]');
const pageProfile = document.querySelector('[data-js=profile]');

const linkHome = document.querySelector('[data-js=link-home]');
const linkBookmark = document.querySelector('[data-js=link-bookmark]');
const linkCreate = document.querySelector('[data-js=link-create]');
const linkProfile = document.querySelector('[data-js=link-profile]');

const allPages = document.querySelectorAll('.page');

export default function navigation() {

linkHome.addEventListener('click', () => {
  allPages.forEach((page) => {
    page.classList.remove('current');
  })
  pageHome.classList.add('current');
})

linkBookmark.addEventListener('click', () => {
    allPages.forEach((page) => {
      page.classList.remove('current');
    })
    pageBookmark.classList.add('current');
  })

linkCreate.addEventListener('click', () => {
  allPages.forEach((page) => {
    page.classList.remove('current');
  })
  pageCreate.classList.add('current');
})

linkProfile.addEventListener('click', () => {
  allPages.forEach((page) => {
    page.classList.remove('current');
  })
  pageProfile.classList.add('current');
})
}