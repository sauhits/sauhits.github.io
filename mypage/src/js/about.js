const List = [
  {
    toLink: "#profile",
    imgLink: "../img/profile.svg",
    imgAlt: "",
    title: "Profile",
    description: "自己紹介，趣味",
  },
  {
    toLink: "#career",
    imgLink: "../img/career.svg",
    imgAlt: "",
    title: "Career",
    description: "資格，経歴",
  },
  {
    toLink: "#tech",
    imgLink: "../img/tech.svg",
    imgAlt: "",
    title: "Tech",
    description: "技術スタック，スキル",
  },
];

const Container = document.getElementById("about-content-container");
const Template = document.getElementById("content-template-1");

List.forEach((data) => {
  const clone = Template.content.cloneNode(true);
  clone.querySelector(".a-content").href = data.toLink;
  clone.querySelector(".content-icon-img").src = data.imgLink;
  clone.querySelector(".content-title").textContent = data.title;
  clone.querySelector(".content-description").textContent = data.description;
  Container.appendChild(clone);
});
