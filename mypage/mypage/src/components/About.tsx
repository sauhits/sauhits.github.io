// データの型定義
interface AboutItem {
  toLink: string;
  imgLink: string;
  imgAlt: string;
  title: string;
  description: string;
}

export default function About() {
  // about.js にあったデータを定義（画像パスを /img/ に調整）
  const list: AboutItem[] = [
    {
      toLink: "#profile",
      imgLink: "/img/profile.svg",
      imgAlt: "",
      title: "Profile",
      description: "自己紹介，趣味",
    },
    {
      toLink: "#career",
      imgLink: "/img/career.svg",
      imgAlt: "",
      title: "Career",
      description: "資格，経歴",
    },
  ];

  return (
    <section id="about" className="page">
      <div className="title">About</div>
      <div className="content">
        <ul id="about-content-container">
          {/* Homeと同様にmap関数でループ処理を行います */}
          {list.map((data, index) => (
            <a key={index} className="a-content" href={data.toLink}>
              <li className="hover-on">
                <div className="content-icon-text">
                  <img
                    className="content-icon-img"
                    src={data.imgLink}
                    alt={data.imgAlt}
                  />
                  <div className="content-text">
                    <p className="content-title">{data.title}</p>
                    <p className="content-description">{data.description}</p>
                  </div>
                </div>
                {/* 矢印の画像（Home.tsxで修正したときと同じBase64データ、または共通のimgを配置してください） */}
                <img
                  alt=""
                  src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABiA..."}
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}
