const List = [
  {
    toLink: "#about",
    imgLink: "../img/about.svg",
    imgAlt: "",
    title: "About",
    description: "経歴, 人物紹介",
  },
  {
    toLink: "#portfolio",
    imgLink: "../img/portfolio.svg",
    imgAlt: "",
    title: "Portfolio",
    description: "制作物紹介",
  },
  {
    toLink: "#contact",
    imgLink: "../img/contact.svg",
    imgAlt: "",
    title: "Contact",
    description: "SNS,連絡用",
  },
];

const Container = document.getElementById("home-content-container");
const Template = document.getElementById("content-template-1");

List.forEach((data) => {
  const clone = Template.content.cloneNode(true);
  clone.querySelector(".a-content").href = data.toLink;
  clone.querySelector(".content-icon-img").src = data.imgLink;
  clone.querySelector(".content-title").textContent = data.title;
  clone.querySelector(".content-description").textContent = data.description;
  Container.appendChild(clone);
});
