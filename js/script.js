document
  .querySelector(".header__hamburger")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header__slide-menu").classList.toggle("active");
  });

// JavaScript (script.js)
gsap.registerPlugin(ScrollTrigger);

gsap.to(".header__pc-header", {
  scrollTrigger: {
    trigger: ".header",
    start: "bottom 80%", // ビューポートの上部にヘッダーが来た時にトリガー
    end: "bottom 80%",
    toggleActions: "play none none reverse", // スクロールダウンでplay, スクロールアップでreverse
    // markers: true,
  },
  position: "fixed",
  top: 50,
  width: "100%",
  zIndex: 9999,
  duration: 0,
  maker: true,
});

gsap.to(".header__en", {
  scrollTrigger: {
    trigger: ".header",
    start: "bottom 0%", // ビューポートの上部にヘッダーが来た時にトリガー
    toggleActions: "play none none reverse", // スクロールダウンでplay, スクロールアップでreverse
  },
  color: "#ffffff",
  duration: 0,
});

const Text = document.querySelector(".card__text");
document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    const currentClamp = Text.style.getPropertyValue("-webkit-line-clamp");
    if (currentClamp === "100") {
      // もし現在の値が100なら、元の状態（例: 3行に制限）に戻す
      Text.style.setProperty("-webkit-line-clamp", "3");
    } else {
      // それ以外の場合は、-webkit-line-clampを100に設定
      Text.style.setProperty("-webkit-line-clamp", "100");
    }
  });
});

const Card = document.querySelector(".main__cardall");

const New = document.querySelector(".main__new");

New.addEventListener("click", function () {
  Card.style.flexDirection = "column-reverse";
});
