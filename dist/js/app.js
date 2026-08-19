(() => {
    "use strict";
    function anchors_anchors() {
        const containers = document.querySelectorAll(".anchors");
        if (containers.length) {
            containers.forEach(container => {
                const blocks = [];
                const items = container.querySelectorAll("a");
                items.forEach(item => {
                    const block = document.querySelector(`${item.getAttribute("href")}`);
                    if (block) blocks.push(block);
                    item.addEventListener("click", e => {
                        e.preventDefault();
                        if (block) {
                            block.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    });
                });
                const options = {
                    root: null,
                    rootMargin: "0px",
                    scrollMargin: "0px",
                    threshold: .01
                };
                function callback(entries, observer) {
                    entries.forEach(entry => {
                        const target = entry.target;
                        if (entry.isIntersecting) {
                            const id = target.id;
                            const anchorsItems = document.querySelectorAll(`a[href="#${id}"]`);
                            anchorsItems.forEach(item => {
                                const neighborsItems = item.closest(".anchors").querySelectorAll("a");
                                if (neighborsItems.length) neighborsItems.forEach(i => i?.classList?.remove("_active"));
                                item?.classList?.add("_active");
                            });
                        }
                    });
                }
                const observer = new IntersectionObserver(callback, options);
                blocks.forEach(block => {
                    observer.observe(block);
                });
            });
        }
    }
    function burger_burger() {
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
                burgerCloses.forEach(btn => btn.addEventListener("click", handleClose));
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
                buttonsTab.forEach(btn => {
                    btn.addEventListener("click", () => {
                        const idTab = btn.dataset.burgerTabBtn;
                        const currentTab = burger.querySelector(`[data-burger-tab="${idTab}"]`);
                        allTabs.forEach(t => {
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
    function catsListToggle() {
        const wrappers = document.querySelectorAll(".s-cats-list__slider-wrap");
        if (wrappers.length) {
            wrappers.forEach(wrap => {
                const btn = wrap.querySelector(".s-cats-list__btn-more");
                if (btn) {
                    const inside = wrap.querySelector(".s-cats-list__slider-wrap-inside");
                    const toggleText = btn.dataset.toggleText;
                    const startHeight = window.getComputedStyle(inside).maxHeight;
                    btn.addEventListener("click", () => {
                        const span = btn.querySelector("span");
                        const text = span.textContent;
                        const openHeight = wrap.querySelector(".s-cats-list__slider").clientHeight + "px";
                        if (wrap.classList.contains("_open")) {
                            wrap.classList.remove("_open");
                            btn.classList.remove("_active");
                            span.textContent = text;
                            inside.style.maxHeight = startHeight;
                        } else {
                            wrap.classList.add("_open");
                            btn.classList.add("_active");
                            span.textContent = toggleText;
                            inside.style.maxHeight = openHeight;
                        }
                    });
                }
            });
        }
    }
    function contentNavProduct() {
        const target = document.querySelector(".s-product__content-nav");
        if (target) {
            const headerHeight = document.querySelector(".header").clientHeight;
            target.style.top = `${headerHeight}px`;
        }
    }
    function counter() {
        const counters = document.querySelectorAll("[data-counter]");
        if (counters.length) {
            counters.forEach(counter => {
                const minus = counter.querySelector("[data-counter-minus]");
                const plus = counter.querySelector("[data-counter-plus]");
                const input = counter.querySelector("[data-counter-input]");
                minus.addEventListener("click", () => {
                    const value = +input.value - 1;
                    if (value < +input.min) return;
                    input.value = value;
                });
                plus.addEventListener("click", () => {
                    const value = +input.value + 1;
                    if (value > +input.max) return;
                    input.value = value;
                });
            });
        }
    }
    function filtersShop() {
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
    function fixedCatalog() {
        const fixedCatalog = document.querySelector(".fixed-catalog");
        if (fixedCatalog) {
            const buttonsTabs = document.querySelectorAll("[data-fixed-catalog-btn-tab]");
            const buttonsToggle = document.querySelectorAll(".toggle-fixed-catalog");
            document.body.addEventListener("click", handleClose);
            fixedCatalog.addEventListener("click", e => e.stopPropagation());
            buttonsToggle.forEach(btn => {
                btn.addEventListener("click", e => {
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
                buttonsTabs.forEach(btn => {
                    let timeout = null;
                    btn.addEventListener("mouseenter", () => {
                        timeout = setTimeout(() => {
                            const id = btn.dataset.fixedCatalogBtnTab;
                            const currentTab = fixedCatalog.querySelector(`[data-fixed-catalog-tab="${id}"]`);
                            buttonsTabs.forEach(b => b.classList.remove("_active"));
                            btn.classList.add("_active");
                            tabs.forEach(t => {
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
                let offsetTop = document.querySelector(".header-t").clientHeight + header.clientHeight;
                if (header.classList.contains("_scroll")) {
                    offsetTop = header.clientHeight;
                }
                fixedCatalog.style.maxHeight = `${window.visualViewport.height - offsetTop}px`;
                fixedCatalog.style.top = `${offsetTop}px`;
            }
        }
    }
    function formSearch() {
        const forms = document.querySelectorAll(".form-s");
        if (forms.length) {
            document.body.addEventListener("click", () => {
                const openedForms = document.querySelectorAll(".form-s._open");
                if (openedForms.length) {
                    openedForms.forEach(f => f.classList.remove("_open"));
                }
            });
            forms.forEach(form => {
                form.addEventListener("click", e => {
                    e.stopPropagation();
                });
            });
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header");
        if (header && window.matchMedia("(min-width: 1026px)").matches) {
            let lastScrollTop = 0;
            window.addEventListener("scroll", changeScroll);
            function changeScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 0) {
                    header.classList.add("_scroll");
                } else {
                    header.classList.remove("_scroll");
                }
                lastScrollTop = scrollTop;
            }
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function inputPlaceholders() {
        const placeholders = document.querySelectorAll(".input-placeholder");
        if (placeholders.length) {
            placeholders.forEach(placeholder => {
                const control = placeholder.closest(".form-control");
                const input = control.querySelector(".input");
                input.addEventListener("focus", () => {
                    placeholder.style.opacity = 0;
                });
                input.addEventListener("blur", () => {
                    placeholder.style.opacity = 1;
                });
            });
        }
    }
    function mediaAdaptive() {
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function(item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                }
            } else {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    if (оbject.element.classList.contains(this.daClassname)) {
                        this.moveBack(оbject.parent, оbject.element, оbject.index);
                    }
                }
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== undefined) {
                parent.children[index].insertAdjacentElement("beforebegin", element);
            } else {
                parent.insertAdjacentElement("beforeend", element);
            }
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") {
                Array.prototype.sort.call(arr, function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
                        if (a.place === "first" || b.place === "last") {
                            return -1;
                        }
                        if (a.place === "last" || b.place === "first") {
                            return 1;
                        }
                        return a.place - b.place;
                    }
                    return a.breakpoint - b.breakpoint;
                });
            } else {
                Array.prototype.sort.call(arr, function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
                        if (a.place === "first" || b.place === "last") {
                            return 1;
                        }
                        if (a.place === "last" || b.place === "first") {
                            return -1;
                        }
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
    }
    function createScript(url, type) {
        if (!url) return;
        return new Promise((resolve, reject) => {
            const script = document.querySelector(`script[src="${url}"]`);
            if (script) {
                resolve(script);
            } else {
                const htmlScript = document.createElement("script");
                htmlScript.src = url;
                if (type) {
                    htmlScript.type = type;
                }
                htmlScript.onload = () => {
                    resolve(htmlScript);
                };
                htmlScript.onerror = () => {
                    reject(new Error(`Не удалось загрузить скрипт: ${url}`));
                };
                document.head.appendChild(htmlScript);
            }
        });
    }
    function countLinesInElement(element) {
        if (!element) return 0;
        var text = element.innerText || element.textContent || "";
        var text = element.innerText || "";
        if (!text.trim()) return 0;
        var clone = element.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.visibility = "hidden";
        clone.style.width = element.offsetWidth + "px";
        clone.style.height = "auto";
        clone.style.maxHeight = "none";
        clone.style.overflow = "visible";
        clone.style.whiteSpace = "normal";
        clone.style.wordWrap = "break-word";
        var computedStyle = window.getComputedStyle(element);
        clone.style.fontSize = computedStyle.fontSize;
        clone.style.fontFamily = computedStyle.fontFamily;
        clone.style.fontWeight = computedStyle.fontWeight;
        clone.style.lineHeight = computedStyle.lineHeight;
        clone.style.padding = computedStyle.padding;
        clone.style.margin = "0";
        clone.style.border = "none";
        clone.style.boxSizing = "border-box";
        document.body.appendChild(clone);
        var height = clone.offsetHeight;
        var lineHeight = parseFloat(computedStyle.lineHeight) || parseFloat(computedStyle.fontSize) * 1.2;
        document.body.removeChild(clone);
        return Math.ceil(height / lineHeight);
    }
    function slideUp(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function slideDown(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout(() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function createEl(tag, classes = "") {
        const item = document.createElement(tag);
        if (classes) {
            classes.split(" ").forEach(c => {
                item.classList.add(c);
            });
        }
        return item;
    }
    function productAvailability() {
        const buttons = document.querySelectorAll("[data-product-availability]");
        if (buttons.length) {
            buttons.forEach(btn => {
                let timeout = null;
                btn.addEventListener("mouseenter", () => {
                    timeout = setTimeout(() => {
                        createItem();
                    }, 100);
                });
                btn.addEventListener("mouseleave", () => {
                    clearTimeout(timeout);
                    const tooltip = btn.querySelector(".tooltip-a");
                    if (tooltip) {
                        tooltip.classList.remove("_open");
                        setTimeout(() => {
                            tooltip.remove();
                        }, 300);
                    }
                });
                function createItem() {
                    const data = JSON.parse(btn.dataset.productAvailability);
                    const tooltip = createEl("div", "tooltip-a");
                    tooltip.innerHTML = `\n        <div class="tooltip-a-inside">\n          <div class="tooltip-a-title">Наличие по магазинам</div>\n          <div class="tooltip-a-body _scrollbar"></div>\n        </div>\n        `;
                    const tooltipBody = tooltip.querySelector(".tooltip-a-body");
                    data.forEach(itemData => {
                        const tooltipItem = createEl("div", "tooltip-a-item");
                        tooltipItem.innerHTML = `\n            <div class="tooltip-a-item__body">\n              <div class="tooltip-a-item__title">${itemData.title}</div>\n              <div class="tooltip-a-item__text">${itemData.text}</div>\n            </div>\n            <div class="tooltip-a-item__count">${itemData.count}</div>\n          `;
                        tooltipBody.appendChild(tooltipItem);
                    });
                    btn.appendChild(tooltip);
                    setTimeout(() => {
                        tooltip.classList.add("_open");
                    }, 100);
                }
            });
        }
    }
    function reviewsInit() {
        const block = document.querySelector("#myReviews__block-widget");
        if (block) {
            const options = {
                root: null,
                rootMargin: "0px",
                scrollMargin: "0px",
                threshold: .01
            };
            function callback(entries, observer) {
                entries.forEach(entry => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        createScript("https://myreviews.dev/widget/dist/blockWidget.js", "text/javascript").then(() => {
                            new window.myReviews.BlockWidget({
                                uuid: "bd743998-a6ad-4087-92b8-dbbc19817a33",
                                name: "g128656",
                                additionalFrame: "none",
                                lang: "ru",
                                widgetId: "1"
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
    function handlerSelect() {
        const selects = document.querySelectorAll(".select");
        if (selects.length) {
            document.body.addEventListener("click", () => {
                const openSelects = document.querySelectorAll(".select._open");
                if (openSelects.length) openSelects.forEach(s => s.classList.remove("_open"));
            });
            selects.forEach(select => {
                select.addEventListener("click", e => e.stopPropagation());
                const items = select.querySelectorAll(".select-item");
                const btn = select.querySelector(".select-btn");
                const input = select.querySelector(".select-input");
                btn.addEventListener("click", () => {
                    if (select.classList.contains("_open")) {
                        select.classList.remove("_open");
                    } else {
                        selects.forEach(s => s.classList.remove("_open"));
                        select.classList.add("_open");
                    }
                });
                items.forEach(item => {
                    item.addEventListener("click", () => {
                        handlerChange(item);
                    });
                });
                function handlerChange(item) {
                    const value = item.textContent.trim();
                    input.value = value;
                    select.classList.remove("_open");
                    items.forEach(i => i.classList.remove("_active"));
                    item.classList.add("_active");
                }
            });
        }
    }
    function shopsMaps() {
        const containers = document.querySelectorAll("[data-shops-map-container]");
        if (containers.length) {
            const sect = document.querySelector(".s-shops");
            const options = {
                root: null,
                rootMargin: "0px",
                scrollMargin: "0px",
                threshold: .01
            };
            function callback(entries, observer) {
                entries.forEach(entry => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        createScript("https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU", "text/javascript").then(() => {
                            initShopsMaps();
                        });
                        observer.unobserve(target);
                    }
                });
            }
            const observer = new IntersectionObserver(callback, options);
            observer.observe(sect);
            function initShopsMaps() {
                containers.forEach(container => {
                    const items = container.querySelectorAll("[data-map-item]");
                    const coords = Array.from(items).map(item => item.dataset.mapItem);
                    const map = container.querySelector("[data-shops-map]");
                    handlerCreateMap(map, coords);
                    items.forEach(item => {
                        item.addEventListener("click", () => {
                            if (item.classList.contains("_active")) return;
                            const coords = [ item.dataset.mapItem ];
                            items.forEach(i => i.classList.remove("_active"));
                            item.classList.add("_active");
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
                    let iconSize = [ 50, 50 ];
                    let iconPosition = [ 0, 0 ];
                    let iconOffset = [ -iconSize[0] / 2, -iconSize[1] / 2 ];
                    let objectMark = {};
                    if (iconHref) {
                        objectMark = {
                            iconLayout: "default#image",
                            iconImageHref: iconHref,
                            iconImageSize: iconSize,
                            iconImageOffset: iconOffset
                        };
                    }
                    function init() {
                        const firstCoord = JSON.parse(coords[0]);
                        const map = new ymaps.Map(htmlMap, {
                            center: JSON.parse(coords[0]),
                            zoom
                        });
                        coords.forEach(coord => {
                            const point = JSON.parse(coord);
                            const placemark = new ymaps.Placemark(point, {}, objectMark);
                            map.geoObjects.add(placemark);
                        });
                        map.controls.remove("geolocationControl");
                        map.controls.remove("searchControl");
                        map.controls.remove("trafficControl");
                        map.controls.remove("typeSelector");
                        map.controls.remove("fullscreenControl");
                        map.controls.remove("rulerControl");
                    }
                    ymaps.ready(init);
                    htmlMap.style.opacity = 1;
                }, 400);
            }
        }
    }
    function sidebarAccount() {
        const sidebar = document.querySelector("#sidebar-account");
        if (sidebar) {
            const btnOpen = document.querySelector("#sidebar-account-open");
            const btnClose = document.querySelector("#sidebar-account-close");
            const overlay = document.querySelector("#sidebar-account-overlay");
            btnOpen.addEventListener("click", handlerOpen);
            btnClose.addEventListener("click", handlerClose);
            overlay.addEventListener("click", handlerClose);
            function handlerOpen() {
                document.body.classList.add("body-hidden");
                sidebar.classList.add("_open");
                overlay.classList.add("_active");
                updateHeight();
            }
            function handlerClose() {
                document.body.classList.remove("body-hidden");
                sidebar.classList.remove("_open");
                overlay.classList.remove("_active");
            }
            function updateHeight() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            window.visualViewport.addEventListener("resize", updateHeight);
            window.visualViewport.addEventListener("scroll", updateHeight);
        }
    }
    function sliders() {
        const headerNavSlider = document.querySelector(".header-nav__slider");
        if (headerNavSlider) {
            const swiper = new Swiper(headerNavSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 40,
                navigation: {
                    prevEl: ".header-nav__slider .slider-arrow._prev",
                    nextEl: ".header-nav__slider .slider-arrow._next"
                }
            });
        }
        const heroSlider = document.querySelector(".s-hero__slider");
        if (heroSlider) {
            const swiper = new Swiper(heroSlider, {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: "auto",
                centeredSlides: true,
                initialSlide: 1,
                autoplay: {
                    delay: 6e3
                },
                navigation: {
                    prevEl: ".s-hero .slider-arrow._prev",
                    nextEl: ".s-hero .slider-arrow._next"
                },
                pagination: {
                    el: ".s-hero .slider-pagination",
                    clickable: true
                }
            });
        }
        const catsSlidersSect = document.querySelectorAll(".s-cats__slider");
        if (catsSlidersSect.length) {
            catsSlidersSect.forEach(slider => {
                const sect = slider.closest("section");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    slidesPerView: "auto",
                    spaceBetween: 5,
                    autoplay: {
                        delay: 6500
                    },
                    navigation: {
                        prevEl: sect.querySelector(".slider-arrow._prev"),
                        nextEl: sect.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: sect.querySelector(".slider-pagination"),
                        clickable: true
                    },
                    breakpoints: {
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 16
                        },
                        576: {
                            slidesPerView: "auto",
                            spaceBetween: 16
                        }
                    }
                });
            });
        }
        const recSliders = document.querySelectorAll(".s-rec__slider");
        if (recSliders.length) {
            recSliders.forEach(slider => {
                const sect = slider.closest("section");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    slidesPerView: "auto",
                    spaceBetween: 5,
                    autoplay: {
                        delay: 6e3
                    },
                    navigation: {
                        prevEl: sect.querySelector(".slider-arrow._prev"),
                        nextEl: sect.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: sect.querySelector(".slider-pagination"),
                        clickable: true
                    },
                    breakpoints: {
                        1365: {
                            slidesPerView: 6,
                            spaceBetween: 10
                        },
                        1026: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        },
                        576: {
                            slidesPerView: "auto",
                            spaceBetween: 10
                        }
                    }
                });
            });
        }
        const productsSlider = document.querySelectorAll(".products-slider");
        if (productsSlider.length) {
            productsSlider.forEach(slider => {
                const sliderWrap = slider.closest(".slider-wrapper");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    autoplay: {
                        delay: 6500
                    },
                    navigation: {
                        prevEl: sliderWrap.querySelector(".slider-arrow._prev"),
                        nextEl: sliderWrap.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: sliderWrap.nextElementSibling,
                        clickable: true
                    },
                    breakpoints: {
                        1540: {
                            slidesPerView: 5,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                        576: {
                            slidesPerView: "auto",
                            spaceBetween: 15
                        }
                    }
                });
            });
        }
        const sectNavSliders = document.querySelectorAll(".sect-nav");
        if (sectNavSliders.length) {
            sectNavSliders.forEach(slider => {
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 5,
                    slidesPerView: "auto",
                    navigation: {
                        prevEl: slider.querySelector(".sect-nav-side._prev"),
                        nextEl: slider.querySelector(".sect-nav-side._next")
                    }
                });
            });
        }
        const catsListSliders = document.querySelectorAll(".s-cats-list__slider");
        if (catsListSliders.length) {
            catsListSliders.forEach(slider => {
                const sect = slider.closest("section");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 10,
                    slidesPerView: "auto",
                    navigation: {
                        prevEl: sect.querySelector(".slider-arrow._prev"),
                        nextEl: sect.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: sect.querySelector(".slider-pagination"),
                        clickable: true
                    },
                    breakpoints: {
                        1026: {
                            spaceBetween: 40,
                            slidesPerView: 5
                        },
                        576: {
                            spaceBetween: 20,
                            slidesPerView: "auto"
                        }
                    }
                });
            });
        }
        const allCatsSliders = document.querySelectorAll(".s-all__cats-slider");
        if (allCatsSliders) {
            allCatsSliders.forEach(slider => {
                const wrap = slider.closest(".s-all__cats-wrap");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 5,
                    slidesPerView: "auto",
                    pagination: {
                        el: wrap?.querySelector(".slider-pagination"),
                        clickable: true
                    },
                    autoplay: {
                        delay: 7500
                    },
                    breakpoints: {
                        1365: {
                            spaceBetween: 16,
                            slidesPerView: 6
                        },
                        1200: {
                            spaceBetween: 16,
                            slidesPerView: 5
                        },
                        1026: {
                            spaceBetween: 16,
                            slidesPerView: 4
                        }
                    }
                });
            });
        }
        const offerSliders = document.querySelectorAll(".s-offer__slider");
        if (offerSliders.length) {
            offerSliders.forEach(slider => {
                const sect = slider.closest("section");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 10,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 7e3
                    },
                    pagination: {
                        pagination: {
                            el: sect.querySelector(".slider-pagination"),
                            clickable: true
                        }
                    },
                    breakpoints: {
                        576: {
                            spaceBetween: 15,
                            slidesPerView: 2
                        }
                    }
                });
            });
        }
        const shopItemsGallerySliders = document.querySelectorAll(".s-shops__item-gallery");
        if (shopItemsGallerySliders.length) {
            shopItemsGallerySliders.forEach(slider => {
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 5,
                    slidesPerView: 4,
                    breakpoints: {
                        1200: {
                            spaceBetween: 5,
                            slidesPerView: 2
                        }
                    }
                });
            });
        }
        const catsSliders = document.querySelectorAll(".cats-slider");
        if (catsSliders.length) {
            catsSliders.forEach(slider => {
                const wrap = slider.closest(".slider-wrapper");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 5,
                    slidesPerView: "auto",
                    navigation: {
                        prevEl: wrap.querySelector(".slider-arrow._prev"),
                        nextEl: wrap.querySelector(".slider-pagination._next")
                    },
                    pagination: {
                        el: wrap.nextElementSibling,
                        clickable: true
                    },
                    autoplay: {
                        delay: 7500
                    },
                    breakpoints: {
                        1365: {
                            spaceBetween: 16,
                            slidesPerView: 6
                        },
                        1200: {
                            spaceBetween: 16,
                            slidesPerView: 5
                        },
                        1026: {
                            spaceBetween: 16,
                            slidesPerView: 4
                        }
                    }
                });
            });
        }
        const productSlider = document.querySelector(".s-product__slider");
        if (productSlider) {
            const thumbSlider = document.querySelector(".s-product__thumb-slider");
            const thumbSliderWrap = document.querySelector(".s-product__thumb-wrap");
            const thumbsSwiper = new Swiper(thumbSlider, {
                speed: 900,
                spaceBetween: 5,
                slidesPerView: 5,
                direction: "vertical",
                navigation: {
                    prevEl: ".s-product__thumb-arrow._prev",
                    nextEl: ".s-product__thumb-arrow._next"
                },
                on: {
                    init: swiper => {
                        isEndSlider(swiper);
                    },
                    slideChange: swiper => {
                        isEndSlider(swiper);
                    }
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 5,
                        slidesPerView: 6
                    }
                }
            });
            function isEndSlider(swiper) {
                if (swiper.isEnd) {
                    thumbSliderWrap.classList.add("_end");
                } else {
                    thumbSliderWrap.classList.remove("_end");
                }
            }
            const swiper = new Swiper(productSlider, {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: 1,
                thumbs: {
                    swiper: thumbSlider
                },
                pagination: {
                    el: ".s-product__gallery .slider-pagination",
                    clickable: true
                },
                autoplay: {
                    delay: 6500
                }
            });
        }
        const sliderTeam = document.querySelector(".s-team__slider");
        if (sliderTeam) {
            const swiper = new Swiper(sliderTeam, {
                speed: 900,
                spaceBetween: 10,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".s-team .slider-arrow._prev",
                    nextEl: ".s-team .slider-arrow._next"
                },
                pagination: {
                    el: ".s-team .slider-pagination",
                    clickable: true
                },
                autoplay: {
                    delay: 6e3
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                        slidesPerView: 4
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    }
                }
            });
        }
        const gallerySliders = document.querySelectorAll(".s-gallery__slider");
        if (gallerySliders.length) {
            gallerySliders.forEach(slider => {
                const wrap = slider.closest(".slider-wrapper");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 10,
                    slidesPerView: 1,
                    navigation: {
                        prevEl: wrap.querySelector(".slider-arrow._prev"),
                        nextEl: wrap.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: wrap.nextElementSibling,
                        clickable: true
                    },
                    autoplay: {
                        delay: 6500
                    },
                    breakpoints: {
                        1026: {
                            spaceBetween: 15,
                            slidesPerView: 2
                        },
                        576: {
                            spaceBetween: 10,
                            slidesPerView: 2
                        }
                    }
                });
            });
        }
        const infoSliders = document.querySelectorAll(".s-info__slider");
        if (infoSliders.length) {
            infoSliders.forEach(slider => {
                const wrap = slider.closest(".slider-wrapper");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 15,
                    slidesPerView: 1,
                    navigation: {
                        prevEl: wrap.querySelector(".slider-arrow._prev"),
                        nextEl: wrap.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: wrap.nextElementSibling,
                        clickable: true
                    },
                    autoplay: {
                        delay: 7e3
                    },
                    breakpoints: {
                        576: {
                            spaceBetween: 15,
                            slidesPerView: 2
                        }
                    }
                });
            });
        }
        const assortmentSliders = document.querySelectorAll(".s-assortment__slider");
        if (assortmentSliders.length) {
            assortmentSliders.forEach(slider => {
                const wrap = slider.closest(".slider-wrapper");
                const swiper = new Swiper(slider, {
                    speed: 900,
                    spaceBetween: 5,
                    slidesPerView: "auto",
                    navigation: {
                        prevEl: wrap.querySelector(".slider-arrow._prev"),
                        nextEl: wrap.querySelector(".slider-arrow._next")
                    },
                    pagination: {
                        el: wrap.nextElementSibling,
                        clickable: true
                    },
                    autoplay: {
                        delay: 6500
                    },
                    breakpoints: {
                        1365: {
                            spaceBetween: 16,
                            slidesPerView: 6
                        },
                        1200: {
                            spaceBetween: 16,
                            slidesPerView: 5
                        },
                        1026: {
                            spaceBetween: 16,
                            slidesPerView: 4
                        }
                    }
                });
            });
        }
        const partnersSlider = document.querySelector(".s-partners__slider");
        if (partnersSlider) {
            const swiper = new Swiper(partnersSlider, {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".s-partners .slider-arrow._prev",
                    nextEl: ".s-partners .slider-arrow._next"
                },
                pagination: {
                    el: ".s-partners .slider-pagination",
                    clickable: true
                },
                autoplay: {
                    delay: 7e3
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 15,
                        slidesPerView: 8
                    },
                    1026: {
                        spaceBetween: 15,
                        slidesPerView: 6
                    }
                }
            });
        }
        const clientsSlider = document.querySelector(".s-clients__slider");
        if (clientsSlider) {
            const swiper = new Swiper(clientsSlider, {
                speed: 900,
                spaceBetween: 10,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".s-clients .slider-arrow._prev",
                    nextEl: ".s-clients .slider-arrow._next"
                },
                pagination: {
                    el: ".s-clients .slider-pagination",
                    clickable: true
                },
                autoplay: {
                    delay: 7e3
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 40,
                        slidesPerView: 3
                    },
                    1026: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    }
                }
            });
        }
        const reminderSlider = document.querySelector(".s-reminder__slider");
        if (reminderSlider) {
            const swiper = new Swiper(reminderSlider, {
                speed: 900,
                spaceBetween: 15,
                slidesPerView: 1,
                navigation: {
                    prevEl: ".s-reminder .slider-arrow._prev",
                    nextEl: ".s-reminder .slider-arrow._next"
                },
                pagination: {
                    el: ".s-reminder .slider-pagination",
                    clickable: true
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: 3
                    }
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) {
                initSpollers(spollersRegular);
            }
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) {
                mdQueriesArray.forEach(mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
            }
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) {
                                spollerTitle.nextElementSibling.hidden = true;
                            }
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerItem = el.closest("[data-spoller-item]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
                            hideSpollersBody(spollersBlock);
                        }
                        spollerTitle.classList.toggle("_spoller-active");
                        if (spollerItem) spollerItem.classList.toggle("_spoller-item-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) {
                document.addEventListener("click", function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) {
                        spollersClose.forEach(spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        });
                    }
                });
            }
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) {
                    return item.dataset[dataSetValue].split(",")[0];
                }
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) {
                                return true;
                            }
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) {
                return _slideDown(target, duration);
            } else {
                return _slideUp(target, duration);
            }
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tabs() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    if (btn.classList.contains("_active")) return;
                    const container = btn.closest(".tabs");
                    const tabId = btn.dataset.tabBtn;
                    const allButtons = container.querySelector(".tabs-nav").querySelectorAll("[data-tab-btn]");
                    const allTabs = [];
                    const allTabsContents = container.querySelectorAll(".tabs-content");
                    allTabsContents.forEach(tabsContent => {
                        const tabs = Array.from(tabsContent.children).filter(child => child.hasAttribute("data-tab"));
                        allTabs.push(...tabs);
                    });
                    const currentTabs = container.querySelectorAll(`[data-tab="${tabId}"]`);
                    allTabs.forEach(t => {
                        t.classList.remove("_show");
                        setTimeout(() => {
                            t.classList.remove("_active");
                        }, 150);
                    });
                    setTimeout(() => {
                        currentTabs.forEach(t => {
                            t.classList.add("_active");
                            setTimeout(() => {
                                t.classList.add("_show");
                            }, 150);
                        });
                    }, 150);
                    allButtons.forEach(b => b.classList.remove("_active"));
                    btn.classList.add("_active");
                });
            });
        }
    }
    function toggle() {
        const containers = document.querySelectorAll("[data-toggle-container]");
        if (containers.length) {
            containers.forEach(container => {
                const items = Array.from(container.querySelectorAll(":scope > [data-toggle-content] > [data-toggle-item]")).filter(item => window.getComputedStyle(item).display === "none");
                const btn = container.querySelector(":scope > [data-toggle-btn]");
                const btnStartText = btn.textContent || btn.dataset.startText;
                const text = container.querySelector(":scope > [data-toggle-content] [data-toggle-text]");
                const textLines = countLinesInElement(text);
                const itemTextBtn = btn.querySelector("[data-toggle-btn-text]");
                let itemToggleText = itemTextBtn || btn;
                if (items.length) {
                    btn.addEventListener("click", () => {
                        if (btn.classList.contains("_active")) {
                            btn.classList.remove("_active");
                            itemToggleText.textContent = btnStartText;
                            items.forEach(item => {
                                item.classList.remove("_show");
                                setTimeout(() => {
                                    item.classList.remove("_active");
                                }, 300);
                            });
                        } else {
                            btn.classList.add("_active");
                            itemToggleText.textContent = btn.dataset.toggleBtn;
                            items.forEach(item => {
                                item.classList.add("_active");
                                setTimeout(() => {
                                    item.classList.add("_show");
                                }, 150);
                            });
                        }
                    });
                } else if (text && textLines > +text.dataset.toggleText) {
                    text.classList.add("_hide");
                    btn.addEventListener("click", () => {
                        if (btn.classList.contains("_active")) {
                            btn.classList.remove("_active");
                            itemToggleText.textContent = btnStartText;
                            text.classList.add("_hide");
                        } else {
                            btn.classList.add("_active");
                            itemToggleText.textContent = btn.dataset.toggleBtn;
                            text.classList.remove("_hide");
                        }
                    });
                } else {
                    btn.remove();
                }
            });
        }
    }
    function toggleBonuseCheckout() {
        const counter = document.querySelector("#checkout-bonuse-count");
        if (counter) {
            const input = document.querySelector("#checkout-bonuse-input");
            input.addEventListener("change", () => {
                if (input.checked) {
                    counter.classList.add("_active");
                } else {
                    counter.classList.remove("_active");
                }
            });
        }
    }
    function videoBg() {
        const videos = document.querySelectorAll(".video-bg");
        if (videos.length) {
            setTimeout(() => {
                videos.forEach(video => {
                    if (!video.src) {
                        const src = video.dataset.src;
                        video.src = src;
                    }
                });
            }, 500);
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        fixedCatalog();
        sliders();
        formSearch();
        shopsMaps();
        tabs();
        catsListToggle();
        burger_burger();
        productAvailability();
        handlerSelect();
        spoller();
        filtersShop();
        toggle();
        mediaAdaptive();
        headerScroll();
        inputmask();
        anchors_anchors();
        contentNavProduct();
        counter();
        inputPlaceholders();
        toggleBonuseCheckout();
        sidebarAccount();
        videoBg();
        reviewsInit();
        Fancybox.bind("[data-fancybox]", {
            closeButton: false,
            on: {
                destroy: instance => {
                    const id = instance.getSlide().src;
                    if (id.includes("#modal")) {
                        const modal = document.querySelector(id);
                        const inputNote = modal.querySelector(".input-note");
                        const modalTitle = modal.querySelector(".modal__title[data-text]");
                        if (inputNote) inputNote.value = "";
                        if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
                    }
                }
            }
        });
    });
})();