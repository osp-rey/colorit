export default function accDrop() {
  const btn = document.querySelector("#btn-acc-drop");

  if (btn) {
    document.body.addEventListener("click", () => {
      btn.classList.remove("_open");
    });

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("_open");
    });
  }
}
