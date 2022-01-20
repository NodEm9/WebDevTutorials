const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelectorAll(".nav");

let showOpen = false;

const toggleBurger = () => {
  if (!showOpen) {
    mainNav.forEach((item) => item.classList.add("open"));

    showOpen = true;
  } else {
    mainNav.forEach((item) => item.classList.remove("open"));

    showOpen = false;
  }
};

hamburger.addEventListener("click", toggleBurger);
