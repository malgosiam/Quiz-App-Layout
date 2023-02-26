const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer1 = document.querySelector('[data-js="card-answer-1"]');

document.getElementById("card__answer1").hidden = true;

answerButton.addEventListener("click", () => {
  answer1.classList.toggle("card__answer--active");
  //console.log(answerButton.textContent.trim());

  if (answer1.classList.contains("card__answer--active")) {
    answerButton.textContent = "hide answer";
    document.getElementById("card__answer1").hidden = false;
  } else {
    answerButton.textContent = "show answer";
    document.getElementById("card__answer1").hidden = true;
  }
});
