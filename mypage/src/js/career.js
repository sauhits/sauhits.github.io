const List1 = [
  {
    imgLink: "../img/profile.svg",
    imgAlt: "",
    title: "Coela <sauhits>",
    description: "現在：大学生",
  },
];
const List2 = [
  {
    title: "2004年 12月:",
    description: "誕生",
  },
  {
    title: "2021年  8月:",
    description:
      "中部大学学長杯争奪LEGOロボットコンテスト2021エキスパート競技部門\n第三位 テセウスの舟",
  },
  {
    title: "2023年  4月:",
    description: "静岡大学 情報学部 情報科学科 入学",
  },
  {
    title: "2024年  3月:",
    description: "数理データサイエンス教育プログラム 認定",
  },
  {
    title: "2025年  9月:",
    description: "数理データサイエンスAI教育プログラム(応用基礎レベル) 認定",
  },
  {
    title: "2026年  4月:",
    description:
      "AIスキル検定 初級 合格\n安全運転能力検定 4級 合格（オンライン）\n色彩士検定 4級 合格\n実用マナー検定 準3級 合格\n就活ガイド 3級 合格\nタイピング技能検定 e-typing master 8級 合格\n日本化粧品検定 3級 合格\nフェムテック境界認定資格 3級 合格\n化粧品成分検定 3級 合格",
  },
];

function createTitle() {
  const Container = document.getElementById("career-title-content-container");
  const Template = document.getElementById("content-template-4");

  List1.forEach((data) => {
    const clone = Template.content.cloneNode(true);
    clone.querySelector(".content-icon-img").src = data.imgLink;
    clone.querySelector(".content-title").textContent = data.title;
    clone.querySelector(".content-description").textContent = data.description;
    Container.appendChild(clone);
  });
}

function createDescription() {
  const Container = document.getElementById(
    "career-description-content-container",
  );
  const Template = document.getElementById("content-template-5");

  List2.forEach((data) => {
    const clone = Template.content.cloneNode(true);
    clone.querySelector(".mini-content-title").textContent = data.title;
    clone.querySelector(".mini-content-description").textContent =
      data.description;
    Container.appendChild(clone);
  });
}

createTitle();
createDescription();
