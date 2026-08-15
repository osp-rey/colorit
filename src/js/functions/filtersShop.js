export default function filtersShop() {
  const filters = document.querySelector("#filters-shop");

  if (filters) {
    const btnOpen = document.querySelector("#filters-shop-open");
    const btnClose = document.querySelector("#filters-shop-close");
    const overlay = document.querySelector("#filters-shop-overlay");

    overlay.addEventListener("click", handlerClose);
    btnClose.addEventListener("click", handlerClose);
    btnOpen.addEventListener("click", handlerOpen);

    function handlerOpen() {
      document.body.classList.add("body-hidden");
      overlay.classList.add("_active");
      filters.classList.add("_open");

      updateHeight();
    }
    function handlerClose() {
      document.body.classList.remove("body-hidden");
      overlay.classList.remove("_active");
      filters.classList.remove("_open");
    }

    function updateHeight() {
      filters.style.maxHeight = `${window.visualViewport.height}px`;
    }

    window.visualViewport.addEventListener("resize", updateHeight);
    window.visualViewport.addEventListener("scroll", updateHeight);
  }
}
