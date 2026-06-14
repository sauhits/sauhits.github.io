// メニュー項目のデータ型定義
interface MenuItem {
  toLink: string;
  imgLink: string;
  imgAlt: string;
  title: string;
}

// 親コンポーネント（App.tsx）から、現在のページ位置（currentHash）を受け取る設定
interface NavigationProps {
  currentHash: string;
}

export default function Navigation({ currentHash }: NavigationProps) {
  // メニューのデータ配列（元のmenu.jsのデータをここに配置します）
  const menuList: MenuItem[] = [
    {
      toLink: "#home",
      imgLink: "/img/home.svg", // パスを /img/ に調整
      imgAlt: "",
      title: "Home",
    },
    {
      toLink: "#about",
      imgLink: "/img/about.svg",
      imgAlt: "",
      title: "About",
    },
    {
      toLink: "#portfolio",
      imgLink: "/img/portfolio.svg",
      imgAlt: "",
      title: "Portfolio",
    },
    {
      toLink: "#contact",
      imgLink: "/img/contact.svg",
      imgAlt: "",
      title: "Contact",
    },
  ];

  return (
    <div className="menu">
      <ul id="menu-container">
        {menuList.map((data, index) => (
          <a key={index} href={data.toLink} className="menu-a">
            {/* 現在選択されているメニューにだけ、CSSで背景が変わるよう 'active' クラスを付与します */}
            <li className={currentHash === data.toLink ? "active" : ""}>
              <img className="menu-img" src={data.imgLink} alt={data.imgAlt} />
              <p className="menu-p">{data.title}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
