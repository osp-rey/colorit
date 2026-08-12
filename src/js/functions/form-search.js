export default function formSearch() {
  const forms = document.querySelectorAll(".form-s");

  if (forms.length) {
    document.body.addEventListener("click", () => {
      const openedForms = document.querySelectorAll(".form-s._open");

      if (openedForms.length) {
        openedForms.forEach((f) => f.classList.remove("_open"));
      }
    });

    forms.forEach((form) => {
      form.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  }
}
