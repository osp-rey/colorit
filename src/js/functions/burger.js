export default function burger() {
  const burger = document.querySelector("#burger");

  if (burger) {
    burgerInit();
    function burgerInit() {
      const burgerOpen = document.querySelector("#burger-open");
      const burgerCloses = burger.querySelectorAll(".burger__close");
      const burgerOverlay = document.querySelector("#burger-overlay");

      burgerOverlay.addEventListener("click", handleClose);

      burgerOpen.addEventListener("click", () => {
        handleOpen();
      });
      burgerCloses.forEach((btn) => btn.addEventListener("click", handleClose));

      function updateHeightBurger() {
        burger.style.maxHeight = `${window.visualViewport.height}px`;
      }

      function handleOpen() {
        document.body.classList.add("body-hidden");
        burger.classList.add("_open");
        burgerOverlay.classList.add("_active");

        updateHeightBurger();
      }
      function handleClose() {
        document.body.classList.remove("body-hidden");
        burger.classList.remove("_open");
        burgerOverlay.classList.remove("_active");
      }

      window.visualViewport.addEventListener("resize", updateHeightBurger);
      window.visualViewport.addEventListener("scroll", updateHeightBurger);

      updateHeightBurger();
    }

    const buttonsTab = burger.querySelectorAll("[data-burger-tab-btn]");

    if (buttonsTab.length) {
      const allTabs = burger.querySelectorAll("[data-burger-tab]");

      buttonsTab.forEach((btn) => {
        btn.addEventListener("click", () => {
          const idTab = btn.dataset.burgerTabBtn;
          const currentTab = burger.querySelector(
            `[data-burger-tab="${idTab}"]`,
          );

          allTabs.forEach((t) => {
            t.classList.remove("_show");

            setTimeout(() => {
              t.classList.remove("_active");
            }, 200);
          });

          setTimeout(() => {
            currentTab.classList.add("_active");
            setTimeout(() => {
              currentTab.classList.add("_show");
            }, 100);
          }, 210);
        });
      });
    }
  }
}
