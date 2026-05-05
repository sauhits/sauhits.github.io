const List = [
  {
    toLink: "https://github.com/sauhits",
    imgLink: "../img/GitHub_Invertocat_Black.svg",
    imgAlt: "GitHub",
    title: "GitHub",
    description: "",
  },
  {
    toLink: "https://qiita.com/sauhits",
    imgLink: "../img/qiita-icon.svg",
    imgAlt: "",
    title: "Qiita",
    description: "たまに記事を書いています",
  },
  {
    toLink: "https://discord.gg/a9mx8VZP",
    imgLink: "../img/Discord-Symbol-Blurple.svg",
    imgAlt: "",
    title: "Discord",
    description: "ゲーム友達など",
  },{
    toLink: "https://x.com/huge_hoge1207",
    imgLink: "../img/logo-black.svg",
    imgAlt: "",
    title: "Twitter",
    description: "つぶやき",
  },
];

const Container = document.getElementById("contact-content-container");
const Template = document.getElementById("content-template-3");

List.forEach((data) => {
  const clone = Template.content.cloneNode(true);
  clone.querySelector(".a-content").href = data.toLink;
  clone.querySelector(".content-icon-img").src = data.imgLink;
  clone.querySelector(".content-title").textContent = data.title;
  clone.querySelector(".content-description").textContent = data.description;
  Container.appendChild(clone);
});
