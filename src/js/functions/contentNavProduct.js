export default function contentNavProduct() {
  const target = document.querySelector(".s-product__content-nav");

  if (target) {
    const headerHeight = document.querySelector(".header").clientHeight;

    target.style.top = `${headerHeight}px`;
  }
}
