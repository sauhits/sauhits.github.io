const menuList = [
  {
    title: "Home",
    toLink: "#home",
    imgLink: "../img/home.svg",
    alt: "",
    class: "menu-home",
  },
  {
    title: "About",
    toLink: "#about",
    imgLink: "../img/about.svg",
    alt: "",
    class: "menu-about",
  },
  {
    title: "Portfolio",
    toLink: "#portfolio",
    imgLink: "../img/portfolio.svg",
    alt: "",
    class: "menu-portfolio",
  },
  {
    title: "Contact",
    toLink: "#contact",
    imgLink: "../img/contact.svg",
    alt: "",
    class: "menu-contact",
  },
];

const menuContainer = document.getElementById("menu-container");
const menuTemplate = document.getElementById("menu-template");

menuList.forEach((data) => {
  const clone = menuTemplate.content.cloneNode(true);
  clone.querySelector(".menu-a").href = data.toLink;
  clone.querySelector(".menu-img").src = data.imgLink;
  clone.querySelector(".menu-p").textContent = data.title;
  clone.querySelector(".menu-a").classList.add(data.class);
  menuContainer.appendChild(clone);
});
