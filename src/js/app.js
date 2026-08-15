import burger from "./functions/burger.js";
import catsListToggle from "./functions/catsListToggle.js";
import filtersShop from "./functions/filtersShop.js";
import fixedCatalog from "./functions/fixed-catalog.js";
import formSearch from "./functions/form-search.js";
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

  Fancybox.bind("[data-fancybox]");
});
