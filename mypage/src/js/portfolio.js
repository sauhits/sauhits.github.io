const List = [
  {
    toLink: "#portfolio-detail/1",
    title: "学科研究室配属システム",
    description:
      "2025年度静岡大学情報学部情報科学科を対象とした研究室配属システム",
  },
  {
    toLink: "#portfolio-detail/6",
    title: "Discord Bot",
    description: "Discordアプリケーション上で動作するアプリケーション",
  },
  {
    toLink: "#portfolio-detail/4",
    title: "Calender API",
    description: "入力情報を書き込んだカレンダー画像を返すAPI",
  },
  {
    toLink: "#portfolio-detail/5",
    title: "LINEリマインダー",
    description: "LINEをインターフェースに持つリマインダーシステム",
  },
  // {
  //   toLink: "#portfolio-detail/7",
  //   title: "C言語コンパイラ",
  //   description: "SEP-3を対象としたC言語コンパイラ",
  // },
  {
    toLink: "#portfolio-detail/4",
    title: "Zenjo",
    description: "大学ポータルサイトを対象とした便利拡張機能",
  },
  {
    toLink: "#portfolio-detail/4",
    title: "二者対話の発話を対象としたBERTによる話題抽出と話題遷移の検出",
    description:
      "二者対話の発話ログを用いて話題の抽出と話題遷移の検知を目指した",
  },
  {
    toLink: "#portfolio-detail/4",
    title: "Never Bash",
    description: "CLIにおけるタイプミスを解説する架空まとめサイトを生成する",
  },
];

const Container = document.getElementById("portfolio-content-container");
const Template = document.getElementById("content-template-2");

List.forEach((data) => {
  const clone = Template.content.cloneNode(true);
  clone.querySelector(".a-content").href = data.toLink;
  clone.querySelector(".content-title").textContent = data.title;
  clone.querySelector(".content-description").textContent = data.description;
  Container.appendChild(clone);
});
