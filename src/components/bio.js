import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, MessageCircle, Send, Globe, UserCheck, Youtube, Instagram } from 'lucide-react';

// === DỮ LIỆU ===
const exchanges = [
  { name: 'MEXC', reward: '25$', fee: '30-60%', img: 'https://hoanphi.net/wp-content/uploads/2025/08/mexc-logo-100x100.png', link: 'https://www.mexc.com/register?inviteCode=1WvJ8' },
  { name: 'BingX', reward: '500$', fee: '30-60%', img: 'https://hoanphi.net/wp-content/uploads/2025/08/BingX-logo-100x100.png', link: '#' },
  { name: 'OKX', reward: 'Hoàn phí cao', fee: '30-60%', img: 'https://hoanphi.net/wp-content/uploads/2025/08/okx-logo-400x400.png', link: '#' },
  { name: 'Bybit', reward: 'Giao dịch pro', fee: '30-60%', img: 'https://hoanphi.net/wp-content/uploads/2025/08/Bybit-logo-2-401x400.png', link: '#' },
];

const registrations = [
  { username: "a1234567", exchange: "MEXC" },
  { username: "b9876543", exchange: "BingX" },
  { username: "c4567890", exchange: "OKX" },
  { username: "d1122334", exchange: "Bybit" },
  { username: "e5566778", exchange: "MEXC" },
];

// === COMPONENT CHÍNH ===
const Bio = () => {
  const [theme, setTheme] = useState('dark');
  const [tickerItems, setTickerItems] = useState([]);
  const tickerRef = useRef(null);
  const particlesRef = useRef(null);

  // === THEME ===
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setTheme(saved || 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // === PARTICLES ===
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      p.style.animationDuration = `${Math.random() * 8 + 8}s`;
      container.appendChild(p);
    }
  }, []);

  // === TICKER ===
  useEffect(() => {
    const initial = registrations.map((r, index) => ({
      ...r,
      id: `${r.username}-${r.exchange}-${index}`,
      masked: r.username[0] + '***' + r.username.slice(-4)
    }));
    setTickerItems([...initial, ...initial]);

    const interval = setInterval(() => {
      const r = registrations[Math.floor(Math.random() * registrations.length)];
      const newItem = { ...r,  id: `${r.username}-${r.exchange}-${Date.now()}`, masked: r.username[0] + '***' + r.username.slice(-4) };
      setTickerItems(prev => {
        const updated = [newItem, ...prev];
        return updated.length > 30 ? updated.slice(0, 30) : updated;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* === TOÀN BỘ STYLE TRONG JSX === */}
      <style jsx>{`
        :root {
          --bg: #0f172a;
          --card: #1e293b;
          --text: #e2e8f0;
          --accent: #f59e0b;
          --accent-hover: #d97706;
          --green: #10b981;
          --border: #334155;
          --ticker-bg: rgba(15, 23, 42, 0.95);
          --ticker-item-bg: rgba(30, 41, 59, 0.9);
        }
        [data-theme="light"] {
          --bg: #f8fafc;
          --card: #ffffff;
          --text: #1e293b;
          --accent: #ea580c;
          --accent-hover: #c2410c;
          --green: #16a34a;
          --border: #e2e8f0;
          --ticker-bg: rgba(248, 250, 252, 0.95);
          --ticker-item-bg: rgba(255, 255, 255, 0.9);
        }

        .particle {
          position: absolute;
          width: 3px; height: 3px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          animation: snow 10s linear infinite;
        }
          img {
  max-width: 100%;
  height: auto;
}
        @keyframes snow { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }

        .animate-scroll-left { animation: scroll-left 18s linear infinite; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 20px;
          background: var(--accent);
          color: white;
          border-radius: 16px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(245,158,11,0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .btn:hover {
          background: var(--accent-hover);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(217,119,6,0.4);
        }
        .btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: 0.6s;
        }
        .btn:hover::before { left: 100%; }

        /* Mobile adjustment */
        @media (max-width: 768px) {
          body {
            padding-right: 10px;
            padding-left: 10px;
            overflow-x: hidden;
          }

          .min-h-screen {
            padding-right: 0;
            padding-left: 0;
          }

          .btn { 
            width: 100%;
            padding: 14px 16px;
            font-size: 0.95rem; 
          }

          .btn span {
            font-size: 0.8rem; 
          }
header {
  position: relative;
  padding-top: 5rem; /* để tạo không gian tránh nút */
}
          .card {
            margin-left: 10px;
            margin-right: 10px;
            box-sizing: border-box;
          }

          .card-content {
            margin-top: 20px;
            padding-left: 15px;
            padding-right: 15px;
          }
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.max-w-6xl {
  box-sizing: border-box;
}

          /* Make the content inside card responsive */
          .max-w-5xl {
            width: 100%;
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      `}</style>

      <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--bg)', color: 'var(--text)' }}>


        {/* NÚT SÁNG/TỐI */}
        <button
          onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" style={{ color: 'var(--accent)' }} /> : <Moon className="w-5 h-5" style={{ color: 'var(--accent)' }} />}
        </button>

        {/* PARTICLES */}
        <div ref={particlesRef} className={`fixed inset-0 pointer-events-none z-0 ${theme === 'light' ? 'opacity-0' : ''} transition-opacity`} />

        {/* HEADER */}
        <header className="py-12 text-center border-b" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, #1e293b, #0f172a)' : 'linear-gradient(135deg, #fef3c7, #fde68a)', borderColor: 'var(--border)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ color: theme === 'dark' ? 'white' : '#1e293b' }}>
            VID Hoàn Phí
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>
            Đồng hành cùng bạn trên hành trình đầu tư Crypto an toàn & hiệu quả tại{' '}
            <a href="https://vidhoanphi.com" target="_blank" style={{ color: 'var(--accent)', fontWeight: 600 }} className="underline">
              vidhoanphi.com
            </a>
          </p>
        </header>

        {/* CARD CHÍNH */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-12 box-border">

          <div className="rounded-3xl p-8 md:p-12 shadow-2xl border relative overflow-hidden hover:-translate-y-3 transition-all"
               style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

            {/* TICKER */}
            <div className="absolute top-0 left-0 w-full overflow-hidden py-2 border-b"
                 style={{ background: 'var(--ticker-bg)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}>
              <div ref={tickerRef} className="flex animate-scroll-left whitespace-nowrap">
                {tickerItems.map(item => (
                  <div key={item.id} className="inline-flex items-center gap-3 px-6 py-2 rounded-xl border shadow-md mx-8 flex-shrink-0"
                       style={{ background: 'var(--ticker-item-bg)', borderColor: 'rgba(16,185,129,0.3)', color: 'var(--green)' }}>
                    <UserCheck className="w-5 h-5 animate-pulse" style={{ color: 'var(--accent)' }} />
                    <span className="font-bold">Tài khoản {item.masked}</span>
                    <span>đã đăng ký</span>
                    <span className="font-semibold" style={{ color: 'var(--accent)' }}>{item.exchange}</span>
                    <span>thành công!</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nhận Tài Liệu & Thưởng Giao Dịch</h2>
              <p className="max-w-2xl mx-auto mb-10" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                Hỗ trợ đăng ký sàn uy tín • Nhận thưởng lên đến <strong>500$</strong> • Tài liệu miễn phí
              </p>

              {/* NÚT HÀNH ĐỘNG */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
                {/* ZALO */}
                <a href="https://zalo.me/0915465335" target="_blank" className="btn group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-md group-hover:scale-110 transition">
                    <MessageCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-left text-white">
                    Zalo Hỗ Trợ
                    <span className="block text-sm opacity-90 mt-1">091.546.5335</span>
                  </div>
                </a>

                {/* TELEGRAM */}
                <a href="https://t.me/vidhoanphi" target="_blank" className="btn group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-md group-hover:scale-110 transition">
                    <Send className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-left text-white">
                    Nhận Tài Liệu Trade
                    <span className="block text-sm opacity-90 mt-1">Hướng dẫn chi tiết</span>
                  </div>
                </a>

                {/* SÀN GIAO DỊCH */}
                {exchanges.map((ex, i) => (
                  <a key={i} href={ex.link} target="_blank" className="btn group">
                    <img src={ex.img} alt={ex.name} className="w-9 h-9 rounded-lg" />
                    <div className="text-left text-white">
                      {ex.name} - {ex.reward}
                      <span className="block text-sm opacity-90 mt-1">Hoàn phí {ex.fee}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* SOCIAL */}
              <div className="flex justify-center gap-5">
                <a href="#" target="_blank" className="w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-md transition-all hover:-translate-y-2 hover:rotate-12"
                   style={{ backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0', color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" target="_blank" className="w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-md transition-all hover:-translate-y-2 hover:rotate-12"
                   style={{ backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0', color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://vidhoanphi.com" target="_blank" className="w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-md transition-all hover:-translate-y-2 hover:rotate-12"
                   style={{ backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0', color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center py-6 border-t mt-16" style={{ background: theme === 'dark' ? '#0f172a' : '#f1f5f9', color: theme === 'dark' ? '#64748b' : '#475569', borderColor: 'var(--border)' }}>
          <p>© 2025 <strong style={{ color: theme === 'dark' ? 'white' : '#1e293b' }}>VID HOÀN PHÍ</strong> – Phát Tài Phát Lộc!</p>
        </footer>
      </div>
    </>
  );
};

// === CẤU TRÚC ĐÚNG: export default Bio ===
export default Bio;
