export default function inputPlaceholders() {
  const placeholders = document.querySelectorAll(".input-placeholder");

  if (placeholders.length) {
    placeholders.forEach(placeholder => {
      const control = placeholder.closest(".form-control");
      const input = control.querySelector(".input");

      input.addEventListener("focus", () => {
        placeholder.style.opacity = 0;
      })
      input.addEventListener("blur", () => {
        placeholder.style.opacity = 1;
      })
    })
  }
}