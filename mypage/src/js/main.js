function handleRouting() {
  const hash = window.location.hash || "#home";

  const allPages = document.querySelectorAll(".page");
  allPages.forEach((page) => {
    page.classList.remove("active");
  });

  const rawHash = hash.replace("#", "");
  const targetId = rawHash.split("/")[0];
  const targetPage = document.getElementById(targetId);

  if (targetPage) {
    targetPage.classList.add("active");
  }
}

window.addEventListener("DOMContentLoaded", handleRouting);
window.addEventListener("hashchange", handleRouting);
