import fixedCatalog from "./functions/fixed-catalog.js";
import formSearch from "./functions/form-search.js";
import sliders from "./functions/sliders.js";

document.addEventListener("DOMContentLoaded", () => {
  fixedCatalog();
  sliders();
  formSearch();
});
