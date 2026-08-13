import { createScript } from "./helpFunctions.js";

export default function shopsMaps() {
  const containers = document.querySelectorAll("[data-shops-map-container]");

  if (containers.length) {
    const sect = document.querySelector(".s-shops");
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
            "https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU",
            "text/javascript",
          ).then(() => {
            initShopsMaps();
          });

          observer.unobserve(target);
        }
      });
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(sect);

    function initShopsMaps() {
      containers.forEach((container) => {
        const items = container.querySelectorAll("[data-map-item]");
        const coords = Array.from(items).map((item) => item.dataset.mapItem);
        const map = container.querySelector("[data-shops-map]");

        handlerCreateMap(map, coords);

        items.forEach((item) => {
          item.addEventListener("click", () => {
            if (item.classList.contains("_active")) return;

            const coords = [item.dataset.mapItem];

            items.forEach(i => i.classList.remove("_active"))
            item.classList.add("_active")

            handlerCreateMap(map, coords, 18);
          });
        });
      });
    }

    function handlerCreateMap(htmlMap, coords, z) {
      htmlMap.style.opacity = 0;
      setTimeout(() => {
        htmlMap.innerHTML = "";
        const zoom = z || Number(htmlMap.dataset.zoom);
        const iconHref = htmlMap.dataset.icon;

        let iconSize = [50, 50];
        let iconPosition = [0, 0];
        let iconOffset = [-iconSize[0] / 2, -iconSize[1] / 2];

        let objectMark = {};

        if (iconHref) {
          objectMark = {
            iconLayout: "default#image",
            iconImageHref: iconHref,
            iconImageSize: iconSize,
            iconImageOffset: iconOffset,
          };
        }

        function init() {
          const firstCoord = JSON.parse(coords[0]);
          const map = new ymaps.Map(htmlMap, {
            center: JSON.parse(coords[0]),
            zoom,
          });

          coords.forEach((coord) => {
            const point = JSON.parse(coord);
            const placemark = new ymaps.Placemark(point, {}, objectMark);
            map.geoObjects.add(placemark);
          });

          map.controls.remove("geolocationControl"); // удаляем геолокацию
          map.controls.remove("searchControl"); // удаляем поиск
          map.controls.remove("trafficControl"); // удаляем контроль трафика
          map.controls.remove("typeSelector"); // удаляем тип
          map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
          // htmlMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
          map.controls.remove("rulerControl"); // удаляем контрол правил
          // htmlMap.behaviors.disable(["scrollZoom"]);
        }

        ymaps.ready(init);

        htmlMap.style.opacity = 1;
      }, 400);
    }
  }
}
