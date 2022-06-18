export default function toggleAnswer(){
  const cards = document.querySelectorAll("[data-js=card]");
  cards.forEach((card) => {
      const answerButton = card.querySelector("[data-js=button]");
      const answer = card.querySelector("[data-js=answer]");
      let answerHidden = true;
          answerButton.addEventListener("click", () => {
            answerHidden = !answerHidden;
            if (answerHidden) {
              answerButton.innerText = 'Show Answer';
            } else {
              answerButton.innerText = 'Hide Answer'
            }
              answer.classList.toggle("hidden")
          })
  })
}