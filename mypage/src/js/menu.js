const menuList = [
  { title: "Home", toLink: "#home", imgLink: "../img/home.svg", alt: "" },
  {
    title: "About",
    toLink: "#about",
    imgLink: "../img/about.svg",
    alt: "",
  },
  {
    title: "Portfolio",
    toLink: "#portfolio",
    imgLink: "../img/portfolio.svg",
    alt: "",
  },
  {
    title: "Contact",
    toLink: "#contact",
    imgLink: "../img/contact.svg",
    alt: "",
  },
];

const menuContainer = document.getElementById("menu-container");
const menuTemplate = document.getElementById("menu-template");

menuList.forEach((data) => {
  const clone = menuTemplate.content.cloneNode(true);
  clone.querySelector(".menu-a").href = data.toLink;
  clone.querySelector(".menu-img").src = data.imgLink;
  clone.querySelector(".menu-p").textContent = data.title;
  menuContainer.appendChild(clone);
});
