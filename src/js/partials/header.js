//elements UI

const navLoginBtn = document.querySelector(".header_login");
const navSearchBtn = document.querySelector(".header_search");
const signForm = document.querySelector(".sign");
const searchForm = document.querySelector(".search");
const searchClose = document.querySelector(".search_close");

// events

navLoginBtn.addEventListener("click", () => {
  signForm.parentElement.classList.toggle("hidden_active");
  searchForm.parentElement.classList.remove("hidden_active");
});

navSearchBtn.addEventListener("click", () => {
  signForm.parentElement.classList.remove("hidden_active");
  searchForm.parentElement.classList.toggle("over-flow_animate");
});

searchClose.addEventListener("click", () => {
  searchForm.parentElement.classList.toggle("over-flow_animate");
});
