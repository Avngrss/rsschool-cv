window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  document.querySelectorAll(".section").forEach((el, i) => {
    if (el.offsetTop - document.querySelector(".navbar").clientHeight <= scrollDistance) {
      document.querySelectorAll(".navbar a").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document.querySelectorAll(".navbar li")[i].querySelector("a").classList.add("active");
    }
  });
});
