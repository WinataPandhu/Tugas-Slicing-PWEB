const header = document.getElementById("header");
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
  if (toTop) toTop.classList.toggle("show", window.scrollY > 400);
});

if (toTop) {
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}