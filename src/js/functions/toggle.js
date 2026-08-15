import { countLinesInElement } from "./helpFunctions.js";

export default function toggle() {
  const containers = document.querySelectorAll("[data-toggle-container]");

  if (containers.length) {
    containers.forEach((container) => {
      const items = Array.from(
        container.querySelectorAll("[data-toggle-item]"),
      ).filter((item) => window.getComputedStyle(item).display === "none");
      const btn = container.querySelector("[data-toggle-btn]");
      const btnStartText = btn.textContent;
      const text = container.querySelector("[data-toggle-text]");
      const textLines = countLinesInElement(text);

      console.log(textLines);

      if (items.length) {
        btn.addEventListener("click", () => {
          if (btn.classList.contains("_active")) {
            btn.classList.remove("_active");
            btn.textContent = btnStartText;

            items.forEach((item) => {
              item.classList.remove("_show");
              setTimeout(() => {
                item.classList.remove("_active");
              }, 300);
            });
          } else {
            btn.classList.add("_active");
            btn.textContent = btn.dataset.toggleBtn;

            items.forEach((item) => {
              item.classList.add("_active");
              setTimeout(() => {
                item.classList.add("_show");
              }, 150);
            });
          }
        });
      } else if (text && textLines > +text.dataset.toggleText) {
        text.classList.add("_hide");
        btn.addEventListener("click", () => {
          if (btn.classList.contains("_active")) {
            btn.classList.remove("_active");
            btn.textContent = btnStartText;

            text.classList.add("_hide");
          } else {
            btn.classList.add("_active");
            btn.textContent = btn.dataset.toggleBtn;

            text.classList.remove("_hide");
          }
        });
      } else {
        btn.remove();
      }
    });
  }
}
