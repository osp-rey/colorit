export default function catsListToggle() {
  const wrappers = document.querySelectorAll(".s-cats-list__slider-wrap");

  if (wrappers.length) {
    wrappers.forEach((wrap) => {
      const btn = wrap.querySelector(".s-cats-list__btn-more");
      
      if (btn) {
        const inside = wrap.querySelector(".s-cats-list__slider-wrap-inside");
        const toggleText = btn.dataset.toggleText;
        const startHeight = window.getComputedStyle(inside).maxHeight;

        btn.addEventListener("click", () => {
          const span = btn.querySelector("span");
          const text = span.textContent;
          const openHeight = wrap.querySelector(".s-cats-list__slider").clientHeight + "px";

          if (wrap.classList.contains("_open")) {
            wrap.classList.remove("_open");
            btn.classList.remove("_active");
            span.textContent = text;
            inside.style.maxHeight = startHeight;
          } else {
            wrap.classList.add("_open");
            btn.classList.add("_active");
            span.textContent = toggleText;
            inside.style.maxHeight = openHeight;
          }
        });
      }
    });
  }
}
