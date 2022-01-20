const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelectorAll(".nav");
// const navItem = document.querySelector(".navItems");
// const navBar = document.querySelector(".navbar");



let showOpen = false;

const toggleBurger = () => {
  if (!showOpen) {
    // navItem.classList.add("open");
    // navBar.classList.add("open");
    // mainNav.classList.add("open");
    mainNav.forEach(item => item.classList.add('open'));

    showOpen = true;
  } else {
    // navItem.classList.remove("open");
    // navBar.classList.remove("open");
    // mainNav.classList.remove("open");
    mainNav.forEach(item => item.classList.remove('open'));

    showOpen = false;
  }
};

hamburger.addEventListener("click", toggleBurger);