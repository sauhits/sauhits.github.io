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
    title: "出身:",
    description: "愛知県",
  },
  {
    title: "趣味:",
    description: "ギター，プログラミング，カフェ巡り，お散歩",
  },
  {
    title: "ゲーム:",
    description: "Apex，原神",
  },
  {
    title: "自己紹介:",
    description:
      "こんにちは！私はCoela[síːlə]です．\n中学生の頃に触れたロボットプログラミングからプログラミングを始めました．\n高校の頃までEV3を用いたロボットプログラミングに熱中していました．\n現在は静岡大学にて情報学の基礎を学びながらネットワークを主軸に研究をしています．",
  },
  {
    title: "メインPC:",
    description: "Intel Core i5-11400F | 16GB RAM | AMD Radeon RX 6500 XT",
  },
  {
    title: "サブPC:",
    description: "Intel Core i7-1260P | 16GB RAM | Intel Iris Xe Graphics",
  },
];

function createTitle() {
  const Container = document.getElementById("profile-title-content-container");
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
    "profile-description-content-container",
  );
  const Template = document.getElementById("content-template-5");

  List2.forEach((data) => {
    const clone = Template.content.cloneNode(true);
    clone.querySelector(".mini-content-title").textContent = data.title;
    clone.querySelector(".mini-content-description").textContent = data.description;
    Container.appendChild(clone);
  });
}

createTitle();
createDescription();
