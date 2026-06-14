import { useState, useEffect } from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact'; // 1. 追加

export default function App() {
  const [currentHash, setCurrentHash] = useState('#home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setCurrentHash(window.location.hash);
      } else {
        setCurrentHash('#home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app-root">
      <header>
        <div>
          <p></p>
        </div>
      </header>

      <main>
        {/* サイドバーエリア */}
        <section className="side">
          <a href="#profile">
            <div className="account-menu">
              <img src="/img/oct_icon.jpg" alt="" />
              <div className="account-info">
                <div className="account-name">Coela</div>
              </div>
            </div>
          </a>
          <Navigation currentHash={currentHash} />
        </section>

        {/* コンテンツ表示エリア */}
        <div className="content-area">
          <div className="area">
            {currentHash === '#home' && <Home />}
            {currentHash === '#about' && <About />}
            
            {/* 2. 仮置きの枠を Contact コンポーネントに置き換え */}
            {currentHash === '#contact' && <Contact />}
            
            {/* その他の下層ページ（順次移植） */}
            {currentHash === '#profile' && (
              <section id="profile" className="page">
                <div className="title">Profile</div>
                <div className="content">プロフィール詳細（未移植）</div>
              </section>
            )}
            {currentHash === '#career' && (
              <section id="career" className="page">
                <div className="title">Career</div>
                <div className="content">経歴詳細（未移植）</div>
              </section>
            )}
            {currentHash === '#portfolio' && (
              <section id="portfolio" className="page">
                <div className="title">Portfolio</div>
                <div className="content">ポートフォリオ一覧（未移植）</div>
              </section>
            )}
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-right">
          <p className="footer-right-text">
            &copy; 2026 Coela. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}