import burger from "./functions/burger.js";
import catsListToggle from "./functions/catsListToggle.js";
import filtersShop from "./functions/filtersShop.js";
import fixedCatalog from "./functions/fixed-catalog.js";
import formSearch from "./functions/form-search.js";
import headerScroll from "./functions/headerScroll.js";
import mediaAdaptive from "./functions/mediaAdaptive.js";
import productAvailability from "./functions/productAvailability.js";
import handlerSelect from "./functions/select.js";
import shopsMaps from "./functions/shopsMaps.js";
import sliders from "./functions/sliders.js";
import spoller from "./functions/spollers.js";
import tabs from "./functions/tabs.js";
import toggle from "./functions/toggle.js";

document.addEventListener("DOMContentLoaded", () => {
  fixedCatalog();
  sliders();
  formSearch();
  shopsMaps();
  tabs();
  catsListToggle();
  burger();
  productAvailability();
  handlerSelect();
  spoller();
  filtersShop();
  toggle();
  mediaAdaptive();
  headerScroll();

  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
  // Fancybox.show([{ src: "#modal-cities", type: "inline" }], {
  //   closeButton: false,
  // });
});
