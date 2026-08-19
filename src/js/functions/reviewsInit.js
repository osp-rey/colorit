import { createScript } from "./helpFunctions.js";

export default function reviewsInit() {
  const block = document.querySelector("#myReviews__block-widget");

  if (block) {
    const options = {
      root: null,
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: 0.01,
    };

    function callback(entries, observer) {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          createScript(
            "https://myreviews.dev/widget/dist/blockWidget.js",
            "text/javascript",
          ).then(() => {
            new window.myReviews.BlockWidget({
              uuid: "bd743998-a6ad-4087-92b8-dbbc19817a33",
              name: "g128656",
              additionalFrame: "none",
              lang: "ru",
              widgetId: "1",
            }).init();
          });

          observer.unobserve(target);
        }
      });
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(block);
  }
}
