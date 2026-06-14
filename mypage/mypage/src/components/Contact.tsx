// データの型定義
interface ContactItem {
  toLink: string;
  imgLink: string;
  imgAlt: string;
  title: string;
  description: string;
}

export default function Contact() {
  // contact.js にあったデータを定義（画像パスを /img/ に調整）
  const list: ContactItem[] = [
    {
      toLink: "https://github.com/sauhits",
      imgLink: "/img/GitHub_Invertocat_Black.svg",
      imgAlt: "GitHub",
      title: "GitHub",
      description: "",
    },
    {
      toLink: "https://qiita.com/sauhits",
      imgLink: "/img/qiita-icon.svg",
      imgAlt: "",
      title: "Qiita",
      description: "たまに記事を書いています",
    },
    {
      toLink: "https://discord.gg/a9mx8VZP",
      imgLink: "/img/Discord-Symbol-Blurple.svg",
      imgAlt: "",
      title: "Discord",
      description: "ゲーム友達など",
    },
    {
      toLink: "https://x.com/huge_hoge1207",
      imgLink: "/img/logo-black.svg",
      imgAlt: "",
      title: "Twitter",
      description: "つぶやき",
    },
  ];

  return (
    <section id="contact" className="page">
      <div className="title">Contact</div>
      <div className="content">
        <ul id="contact-content-container">
          {list.map((data, index) => (
            /* 外部サイトへのリンクなので、新しいタブで開くように 
              target="_blank" と rel="noopener noreferrer"（セキュリティ対策）を付与しています 
            */
            <a 
              key={index} 
              className="a-content" 
              href={data.toLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <li className="hover-on">
                <div className="content-icon-text">
                  <img className="content-icon-img" src={data.imgLink} alt={data.imgAlt} />
                  <div className="content-text">
                    <p className="content-title">{data.title}</p>
                    <p className="content-description">{data.description}</p>
                  </div>
                </div>
                {/* 右側の矢印アイコン（Home等と同じBase64文字列、または共通のimg） */}
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