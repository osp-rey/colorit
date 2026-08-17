import anchors from "./functions/anchors.js";
import burger from "./functions/burger.js";
import catsListToggle from "./functions/catsListToggle.js";
import contentNavProduct from "./functions/contentNavProduct.js";
import counter from "./functions/counter.js";
import filtersShop from "./functions/filtersShop.js";
import fixedCatalog from "./functions/fixed-catalog.js";
import formSearch from "./functions/form-search.js";
import headerScroll from "./functions/headerScroll.js";
import inputmask from "./functions/inputmask.js";
import inputPlaceholders from "./functions/inputPlaceholders.js";
import mediaAdaptive from "./functions/mediaAdaptive.js";
import productAvailability from "./functions/productAvailability.js";
import handlerSelect from "./functions/select.js";
import shopsMaps from "./functions/shopsMaps.js";
import sliders from "./functions/sliders.js";
import spoller from "./functions/spollers.js";
import tabs from "./functions/tabs.js";
import toggle from "./functions/toggle.js";
import toggleBonuseCheckout from "./functions/toggleBonuseCheckout.js";

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
  inputmask();
  anchors();
  contentNavProduct();
  counter();
  inputPlaceholders();
  toggleBonuseCheckout();

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
  // Fancybox.show([{ src: "#modal-auth", type: "inline" }], {
  //   closeButton: false,
  // });
});
