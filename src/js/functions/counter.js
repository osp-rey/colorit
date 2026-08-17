export default function counter() {
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
      })
       plus.addEventListener("click", () => {
        const value = +input.value + 1;
        if (value > +input.max) return;
        input.value = value;
      })
    })
  }
}