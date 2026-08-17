export default function toggleBonuseCheckout() {
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
