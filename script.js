const body = document.querySelector("body");
const toggleButton = document.querySelector(".toggle");

//toggleButton.addEventListener("click", () => toggle.classList.toggle("active"));

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark", "active");
});

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
  console.log("Hallo");
});
console.log(bookmarkButton);
//bookmarkButton.addEventListener("click", toggleBookmark);

//function toggleBookmark() {
//  bookmarkButton.classList.toggle("bookmark--active");
