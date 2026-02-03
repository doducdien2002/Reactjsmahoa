import React, { useState} from "react";
import { Copy, X, Sparkles, TrendingUp, Zap, Video } from "lucide-react";
import toast from "react-hot-toast";
import './styles.css';

const Services = () => {
  const [search, setSearch] = useState("");
  const [selectedSan, setSelectedSan] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  
  const [showVideo, setShowVideo] = useState(false);

  // Generate floating particles


  // Video URLs for each exchange
  const videoData = {
    ATX: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Thay bằng link video thật
    BINGX: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    BINANCE: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    OKX: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    BITUNIX: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    MEXC: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    EXNESS: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    TICKMILL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    LITEFOREX: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };

  const huongDanData = {
    ATX: `
      <p><strong>Hoàn phí 20%</strong></p>
      <p><b>Mã giới thiệu:</b>maohoanphi</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 20% phí hằng ngày</li>
      </ul>
    `,
    BINGX: `
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b>YFTFX3BC</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    BINANCE: `
      <h2>BINANCE</h2>
      <p><strong>Hoàn phí 20%</strong></p>
      <p><b>Mã giới thiệu:</b>VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    OKX: `
      <h2>OKX</h2>
      <p><strong>Hoàn phí 40%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 35% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    BITUNIX: `
      <h2>BITUNIX</h2>
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    MEXC: `
      <h2>MEXC</h2>
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> Maohoanphi</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    EXNESS: `
      <h2>EXNESS</h2>
      <p><strong>Hoàn phí 100%</strong></p>
      <p><b>Mã giới thiệu:</b> li725sgw4</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    TICKMILL: `
      <h2>TICKMILL</h2>
      <p><strong>Hoàn phí 80%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 80% phí hằng ngày</li>
      </ul>
    `,
    LITEFOREX: `
      <h2>LITEFOREX</h2>
      <p><strong>Hoàn phí 75%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm "Đăng ký ngay" hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 75% phí hằng ngày</li>
      </ul>
    `,
  };

  const cryptoItems = [
    {
      title: "ATX",
      cashback: "25",
      code: "maohoanphi",
      imgSrc: "https://cashback.exchange/image/exchanges/atx.png",
      link: "https://atxs.io/r/maohoanphi", 
    },
    {
      title: "BINGX",
      cashback: "50",
      code: "KSFN28VY",
      imgSrc: "https://w.ladicdn.com/s500x500/67dbe0216346bb0012ce3b79/bingx-20250426193224-ombgf.png",
      link: "https://bingxdao.com/invite/YFTFX3BC/", 
    },
    {
      title: "BINANCE",
      cashback: "40",
      code: "maohoanphi",
      imgSrc: "https://w.ladicdn.com/s450x450/67dbe0216346bb0012ce3b79/binance-20250427064738-n26nc.png",
    },
    {
      title: "OKX",
      cashback: "40",
      code: "maohoanphi",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/c973b6f4a4b92721f64c11f7aa87d18f.png",
      link: "https://www.okx.com/join/VIDHOANPHI",
    },
    {
      title: "BITUNIX",
      cashback: "40",
      code: "maohoanphi",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/c4ca09fd7478b8af8fb0fcee7593d63d.png",
    },
    {
      title: "MEXC",
      cashback: "40",
      code: "mexc-Maohoanphi",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/ab59a24e551de4d38fbbb5bb557601d6.png",
      link: "https://www.mexc.com/vi-VN/acquisition/custom-sign-up?shareCode=mexc-Maohoanphi", 
    },
  ];

  const forexItems = [
    {
      title: "EXNESS",
      cashback: "100",
      code: "li725sgw4u",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/1c7aea78a2e788fc8238dae8717c1997.png",
      link: "https://one.exnessonelink.com/a/li725sgw4u",
    },
    {
      title: "Vantage",
      cashback: "100",
      code: "maohoanphi",
      imgSrc: "https://cashback.exchange/image/exchanges/vantage.png",
      link: "https://one.exnessonelink.com/a/li725sgw4u",
    },
     {
      title: "XM",
      cashback: "100",
      code: "maohoanphi",
      imgSrc: "https://cashback.exchange/image/exchanges/xm.png",
      link: "https://one.exnessonelink.com/a/li725sgw4u",
    },
  ];

  const items = activeTab === "all" 
    ? [...cryptoItems, ...forexItems] 
    : activeTab === "crypto" 
    ? cryptoItems 
    : forexItems;
    
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success(`✅ Đã copy mã: ${text}`))
      .catch(() => toast.error("❌ Copy lỗi, thử lại!"));
  };

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white relative overflow-hidden"> 
      {/* Animated Background Particles */}
      

      {/* Animated Wave Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading with animated elements */}
        <div className="text-center mb-8">
          <div className="inline-block mb-3 animate-bounce-slow">
            <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center gap-2">
              <Sparkles className="inline w-4 h-4 text-blue-500 animate-pulse" />
              SẢN PHẨM
              <Sparkles className="inline w-4 h-4 text-blue-500 animate-pulse" />
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 animate-title">
            CÁC SÀN GIAO DỊCH HỖ TRỢ HOÀN PHÍ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full animate-expand"></div>
        </div>

        {/* Tabs with hover effects */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl shadow-md p-1 border-2 border-slate-100 backdrop-blur-sm">
            <button
              onClick={() => {
                setActiveTab("all");
                setShowMore(false);
              }}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="relative z-10">⭐ Tất cả</span>
              {activeTab !== "all" && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              )}
            </button>
            <button
              onClick={() => {
                setActiveTab("crypto");
                setShowMore(false);
              }}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                activeTab === "crypto"
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="relative z-10">🪙 Crypto</span>
              {activeTab !== "crypto" && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              )}
            </button>
            <button
              onClick={() => {
                setActiveTab("forex");
                setShowMore(false);
              }}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                activeTab === "forex"
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="relative z-10">💱 Forex</span>
              {activeTab !== "forex" && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              )}
            </button>
          </div>
        </div>

        {/* Search with animated focus */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full sm:w-96 group">
            <input
              type="text"
              placeholder="🔍 Tìm sàn..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all font-medium text-slate-700 bg-white/80 backdrop-blur-sm"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-focus-within:opacity-20 blur transition-opacity pointer-events-none"></div>
          </div>
        </div>

        {/* Cards Grid with stagger animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filteredItems.slice(0, showMore ? filteredItems.length : 8).map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col bg-white rounded-xl shadow-md border-2 border-slate-100 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 p-4 text-center group animate-card-appear relative overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
              
              {/* Image Container */}
              <div className="relative h-24 flex items-center justify-center mb-3 bg-slate-50 rounded-lg overflow-hidden">
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
                />
                <span className="absolute top-1.5 right-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md border border-white animate-pulse-slow">
                  <TrendingUp className="inline w-3 h-3 mr-0.5" />
                  {item.cashback}%
                </span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>

              {/* Register Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-slate-800 to-slate-900 text-white px-3 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 w-full mb-3 text-center relative overflow-hidden group/btn"
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  <Zap className="w-4 h-4" />
                  Đăng ký
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></span>
              </a>

              {/* Code Info */}
              <div className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2.5 mb-3 border border-slate-100">
                <p className="font-medium mb-1.5">Hoàn {item.cashback}% phí</p>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-slate-500">Mã:</span>
                  <span className="font-bold text-slate-900 text-xs">{item.code}</span>
                  <button 
                    type="button" 
                    onClick={(e) => { e.stopPropagation(); handleCopy(item.code); }} 
                    className="p-1 bg-slate-200 hover:bg-blue-400 rounded transition-all hover:scale-110 active:scale-95" 
                    aria-label={`Copy mã ${item.code}`}
                  >
                    <Copy size={12} className="text-slate-700" />
                  </button>
                </div>
              </div>

              {/* Guide Button */}
              <button 
                type="button" 
                onClick={() => setSelectedSan(item.title)} 
                className="px-3 py-2.5 bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 w-full relative overflow-hidden group/guide"
              >
                <span className="relative z-10">📖 Hướng dẫn</span>
                <span className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover/guide:scale-x-100 transition-transform origin-left"></span>
              </button>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredItems.length > 8 && (
          <div className="text-center mb-6">
            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2.5 text-white bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-md hover:shadow-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 font-semibold text-sm hover:scale-105 active:scale-95"
            >
              {showMore ? "Ẩn bớt ▲" : "Xem thêm ▼"}
            </button>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {selectedSan && !showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
          {/* Animated Candles Background */}
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="candle"
                style={{
                  left: `${Math.random() * 100}%`,
                  height: `${40 + Math.random() * 140}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slideUp border-2 border-slate-200 relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 text-white relative overflow-hidden">
              <div className="shimmer-overlay"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/30 backdrop-blur-sm text-white font-bold text-lg shadow-lg animate-pulse-slow">
                  ℹ️
                </div>
                <h2 className="text-xl font-bold tracking-tight">
                  {selectedSan}
                </h2>
              </div>
              <button
                className="p-2 rounded-full hover:bg-white/30 transition-all active:scale-95 hover:rotate-90 duration-300 relative z-10"
                onClick={() => setSelectedSan(null)}
                aria-label="Đóng"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="px-7 py-6 text-[15px] text-slate-800 leading-relaxed overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-100">
              <div
                className="text-left space-y-5 
                  [&_p]:text-left [&_p]:text-[15px] [&_p]:text-slate-800 [&_strong]:font-semibold [&_strong]:text-slate-900 
                  [&_h1]:text-[18px] [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-2 
                  [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-slate-800 
                  [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mt-4 [&_h3]:mb-2
                  [&_ul]:list-disc [&_ul]:ml-5 [&_ol]:list-decimal [&_ol]:ml-5 [&_li]:leading-relaxed [&_li]:mb-1 
                  [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
                  [&_.highlight]:bg-blue-50 [&_.highlight]:border-l-4 [&_.highlight]:border-blue-400 [&_.highlight]:p-3 [&_.highlight]:rounded-md
                  [&_.highlight-existing-ref]:bg-indigo-50 [&_.highlight-existing-ref]:border-l-4 [&_.highlight-existing-ref]:border-indigo-500 [&_.highlight-existing-ref]:p-3 [&_.highlight-existing-ref]:rounded-md [&_.highlight-existing-ref]:mt-3
                  [&_.highlight-existing-ref-1]:bg-blue-50 [&_.highlight-existing-ref-1]:border-l-4 [&_.highlight-existing-ref-1]:border-blue-400 [&_.highlight-existing-ref-1]:p-3 [&_.highlight-existing-ref-1]:rounded-md [&_.highlight-existing-ref-1]:mt-3"
                dangerouslySetInnerHTML={{
                  __html: huongDanData[selectedSan] || "<p>Không có hướng dẫn</p>",
                }}
              />
            </div>

            {/* Footer with Video Button */}
            <div className="flex justify-between gap-3 px-6 py-4 border-t-2 bg-slate-50">
              <button
                type="button"
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2"
                onClick={() => setShowVideo(true)}
              >
                <Video size={18} />
                Video hướng dẫn
              </button>
              <button
                type="button"
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-400 to-indigo-500 text-white hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
                onClick={() => setSelectedSan(null)}
              >
                Đóng
              </button>
            </div>
          </div>

          {/* Inline CSS for animations */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(24px) scale(0.95); opacity: 0; }
              to { transform: translateY(0) scale(1); opacity: 1; }
            }
            @keyframes candleMove {
              0%, 100% { transform: scaleY(0.6); opacity: 0.4; }
              50% { transform: scaleY(1.2); opacity: 0.8; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0) translateX(0); }
              33% { transform: translateY(-20px) translateX(10px); }
              66% { transform: translateY(-10px) translateX(-10px); }
            }
            @keyframes wave {
              0% { transform: translateX(-100%) translateY(0); }
              50% { transform: translateX(-50%) translateY(-10px); }
              100% { transform: translateX(0) translateY(0); }
            }
            @keyframes expand {
              0%, 100% { width: 96px; }
              50% { width: 128px; }
            }
            @keyframes cardAppear {
              from { 
                opacity: 0; 
                transform: translateY(20px) scale(0.9);
              }
              to { 
                opacity: 1; 
                transform: translateY(0) scale(1);
              }
            }
            @keyframes bounceSlow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            @keyframes pulseSlow {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.05); }
            }
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes titleGlow {
              0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
              50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
            }
            
            .animate-fadeIn {
              animation: fadeIn 0.3s ease forwards;
            }
            .animate-slideUp {
              animation: slideUp 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
            }
            .animate-bounce-slow {
              animation: bounceSlow 2s ease-in-out infinite;
            }
            .animate-pulse-slow {
              animation: pulseSlow 3s ease-in-out infinite;
            }
            .animate-expand {
              animation: expand 3s ease-in-out infinite;
            }
            .animate-card-appear {
              animation: cardAppear 0.5s ease-out forwards;
              opacity: 0;
            }
            .animate-title {
              animation: titleGlow 2s ease-in-out infinite;
            }
            
            .particle {
              position: absolute;
              animation: float ease-in-out infinite;
            }
            
            .wave {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 200%;
              height: 100px;
              background: linear-gradient(90deg, 
                transparent, 
                rgba(59, 130, 246, 0.1), 
                transparent
              );
              animation: wave linear infinite;
            }
            .wave1 { animation-duration: 8s; }
            .wave2 { animation-duration: 12s; animation-delay: -4s; }
            .wave3 { animation-duration: 16s; animation-delay: -8s; }
            
            .candle {
              position: absolute;
              bottom: 0;
              width: 3px;
              background: linear-gradient(to top, #3b82f6, #6366f1);
              border-radius: 2px;
              animation: candleMove ease-in-out infinite;
            }
            
            .shimmer-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.3) 50%,
                transparent 100%
              );
              background-size: 200% 100%;
              animation: shimmer 3s linear infinite;
            }
            
            .scrollbar-thin::-webkit-scrollbar { width: 6px; }
            .scrollbar-thin::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #3b82f6, #6366f1);
              border-radius: 9999px;
            }
            .scrollbar-thin::-webkit-scrollbar-track {
              background: #f1f5f9;
            }
          `}</style>
        </div>
      )}

      {/* Video Modal */}
      {showVideo && selectedSan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-4xl mx-4 bg-black rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slideUp border-2 border-slate-700 relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-slate-700 bg-slate-900 text-white">
              <div className="flex items-center gap-3">
                <Video className="w-6 h-6 text-red-500" />
                <h2 className="text-lg font-bold">
                  Video hướng dẫn {selectedSan}
                </h2>
              </div>
              <button
                className="p-2 rounded-full hover:bg-slate-800 transition-all active:scale-95 duration-300"
                onClick={() => setShowVideo(false)}
                aria-label="Đóng video"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoData[selectedSan]}
                title={`Video hướng dẫn ${selectedSan}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Footer */}
            <div className="flex justify-end px-6 py-4 border-t-2 border-slate-700 bg-slate-900">
              <button
                type="button"
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-400 to-indigo-500 text-white hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
                onClick={() => setShowVideo(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;