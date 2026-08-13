import catsListToggle from "./functions/catsListToggle.js";
import fixedCatalog from "./functions/fixed-catalog.js";
import formSearch from "./functions/form-search.js";
import shopsMaps from "./functions/shopsMaps.js";
import sliders from "./functions/sliders.js";
import tabs from "./functions/tabs.js";

document.addEventListener("DOMContentLoaded", () => {
  fixedCatalog();
  sliders();
  formSearch();
  shopsMaps();
  tabs();
  catsListToggle();

  Fancybox.bind("[data-fancybox]");
});
