import { createEl } from "./helpFunctions.js";

export default function productAvailability() {
  const buttons = document.querySelectorAll("[data-product-availability]");

  if (buttons.length) {
    buttons.forEach((btn) => {
      let timeout = null;

      btn.addEventListener("mouseenter", () => {
        timeout = setTimeout(() => {
          createItem();
        }, 100);
      });
      btn.addEventListener("mouseleave", () => {
        clearTimeout(timeout);

        const tooltip = btn.querySelector(".tooltip-a");

        if (tooltip) {
          tooltip.classList.remove("_open");

          setTimeout(() => {
            tooltip.remove();
          }, 300);
        }
      });

      function createItem() {
        const data = JSON.parse(btn.dataset.productAvailability);

        const tooltip = createEl("div", "tooltip-a");
        tooltip.innerHTML = `
        <div class="tooltip-a-inside">
          <div class="tooltip-a-title">Наличие по магазинам</div>
          <div class="tooltip-a-body _scrollbar"></div>
        </div>
        `;
        const tooltipBody = tooltip.querySelector(".tooltip-a-body");

        data.forEach((itemData) => {
          const tooltipItem = createEl("div", "tooltip-a-item");
          tooltipItem.innerHTML = `
            <div class="tooltip-a-item__body">
              <div class="tooltip-a-item__title">${itemData.title}</div>
              <div class="tooltip-a-item__text">${itemData.text}</div>
            </div>
            <div class="tooltip-a-item__count">${itemData.count}</div>
          `;
          tooltipBody.appendChild(tooltipItem);
        });

        btn.appendChild(tooltip);
        setTimeout(() => {
          tooltip.classList.add("_open");
        }, 100);
      }
    });
  }
}
