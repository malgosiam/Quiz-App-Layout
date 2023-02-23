const body = document.querySelector("body");
const toggleButton = document.querySelector(".toggle");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleButton.classList.toggle("active");
});
