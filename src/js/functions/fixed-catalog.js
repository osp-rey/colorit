export default function fixedCatalog() {
  const fixedCatalog = document.querySelector(".fixed-catalog");

  if (fixedCatalog) {
    const buttonsTabs = document.querySelectorAll(
      "[data-fixed-catalog-btn-tab]",
    );
    const buttonsToggle = document.querySelectorAll(".toggle-fixed-catalog");

    document.body.addEventListener("click", handleClose);
    fixedCatalog.addEventListener("click", (e) => e.stopPropagation());

    buttonsToggle.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (!fixedCatalog.classList.contains("_open")) {
          handlerOpen();
        } else {
          handleClose();
        }
      });
    });

    if (buttonsTabs.length) {
      const tabs = document.querySelectorAll("[data-fixed-catalog-tab]");
      buttonsTabs.forEach((btn) => {
        let timeout = null;
        btn.addEventListener("mouseenter", () => {
          timeout = setTimeout(() => {
            const id = btn.dataset.fixedCatalogBtnTab;
            const currentTab = fixedCatalog.querySelector(
              `[data-fixed-catalog-tab="${id}"]`,
            );

            buttonsTabs.forEach((b) => b.classList.remove("_active"));
            btn.classList.add("_active");

            tabs.forEach((t) => {
              t.classList.remove("_show");
              setTimeout(() => {
                t.classList.remove("_active");
              }, 150);
            });

            setTimeout(() => {
              currentTab.classList.add("_active");
              setTimeout(() => {
                currentTab.classList.add("_show");
              }, 150);
            }, 150);
          }, 150);
        });
        btn.addEventListener("mouseleave", () => {
          clearTimeout(timeout);
        });
      });
    }

    function handlerOpen() {
      fixedCatalog.classList.add("_open");
      document.body.classList.add("body-hidden");
      changeHeight();
    }
    function handleClose() {
      fixedCatalog.classList.remove("_open");
      document.body.classList.remove("body-hidden");
    }

    function changeHeight() {
      const header = document.querySelector(".header");
      let offsetTop =
        document.querySelector(".header-t").clientHeight +
        header.clientHeight;

      if (header.classList.contains("_scroll")) {
        offsetTop = header.clientHeight;
      }
        
      fixedCatalog.style.maxHeight = `${window.visualViewport.height - offsetTop}px`;
      fixedCatalog.style.top = `${offsetTop}px`;
    }
  }
}
