document
  .querySelector(".header__hamburger")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header__slide-menu").classList.toggle("active");
  });
