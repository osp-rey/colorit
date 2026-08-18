export default function sidebarAccount() {
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
