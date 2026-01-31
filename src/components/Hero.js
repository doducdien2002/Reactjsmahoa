import React from "react";
import { Link } from 'react-router-dom';

const TRADING_IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop", // Trading charts
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop", // Crypto trading
  "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1200&auto=format&fit=crop", // Bitcoin charts
  "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop", // Stock market
  "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop", // Financial trading
];

const CryptoCandlesSmall = ({ size = 240, speed = 2.0, label = "CRYPTO · FX" }) => {
  const w = size, h = size, candleW = Math.max(6, Math.round(size / 30));
  return (
    <div style={{ width: w, height: h }} className="relative" aria-hidden>
      <style>{`
        :root{--spd:${speed}s}
        @keyframes up{0%,100%{transform:translateY(8px)}50%{transform:translateY(-4px)}}
        @keyframes down{0%,100%{transform:translateY(-8px)}50%{transform:translateY(4px)}}
        .candle{transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease}
        .candle:hover{transform:scale(1.1) !important; filter: brightness(1.2) drop-shadow(0 4px 8px rgba(0,0,0,0.1))}
        .spark{stroke-dasharray:1000;stroke-dashoffset:1000;animation:draw calc(var(--spd) * 0.9) ease-in-out forwards}
        @keyframes draw{to{stroke-dashoffset:0}}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(2deg)}}
        @keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @media (prefers-reduced-motion: reduce){.candle,.spark, .float{animation:none!important; transition:none}}
      `}</style>

      <div className="absolute inset-0 rounded-xl opacity-80" style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.1), rgba(192,132,252,0.05))", boxShadow: "inset 0 0 20px rgba(167,139,250,0.2)" }} />

      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="relative z-10 overflow-visible">
        <defs>
          <linearGradient id="gG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#ddd6fe"/><stop offset="1" stopColor="#a78bfa"/></linearGradient>
          <linearGradient id="gR" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#fce7f3"/><stop offset="1" stopColor="#f472b6"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        {[0.12,0.22,0.32,0.42,0.52,0.62,0.72,0.82].map((xP,i)=>{
          const x = Math.round(w*xP);
          const top = Math.round(h*(0.28 + (i%3)*0.04));
          const bot = Math.round(h*(0.52 + ((i+1)%3)*0.03));
          const bodyH = Math.max(8, bot-top);
          const isUp = i%2===0;
          const fill = isUp? "url(#gG)" : "url(#gR)";
          const anim = isUp? "up":"down";
          const dur = `${(speed * (0.9 + (i % 3)*0.08)).toFixed(2)}s`;
          const delay = `${(i*0.06).toFixed(2)}s`;
          return (
            <g key={i} className="candle" style={{ transformOrigin:`${x}px ${top+bodyH/2}px`, animation: `${anim} ${dur} ease-in-out ${delay} infinite`, filter: "url(#glow)" }}>
              <line x1={x} x2={x} y1={top - 8} y2={bot + 8} stroke={isUp? "#c4b5fd":"#f9a8d4"} strokeWidth={Math.max(1,Math.round(candleW/3))} strokeLinecap="round" opacity="0.9" />
              <rect x={x - Math.round(candleW/2)} y={top} width={candleW} height={bodyH} rx={3} fill={fill} />
              <rect x={x - Math.round(candleW/2)} y={top} width={candleW} height={bodyH} rx={3} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </g>
          );
        })}

        <g transform={`translate(${w*0.06},${h*0.06})`} className="spark">
          <path d="M0,100 Q50,80 100,120 T200,90 T300,110" fill="none" stroke="url(#gG)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </g>
      </svg>

      <div className="absolute top-2 left-2 text-xs font-medium text-violet-600 opacity-0" style={{ animation: "pulse 2s ease-in-out infinite, fadeIn 1s forwards" }}>
        {label}
      </div>
    </div>
  );
};

// Image Slideshow Component
const TradingSlideshow = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRADING_IMAGES.length);
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .slide-active {
          animation: slideIn 0.5s ease-in-out;
        }
      `}</style>
      
      {TRADING_IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Trading ${index + 1}`}
          className={`w-full h-80 object-cover absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100 slide-active' : 'opacity-0'
          }`}
          style={{ 
            position: index === currentIndex ? 'relative' : 'absolute',
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-transparent to-transparent" />
    </div>
  );
};

const Hero = () => {
  return (
    <main className="relative overflow-hidden pt-4 pb-0" style={{ background: 'linear-gradient(135deg, #674cdc 0%, #5a3ec9 50%, #4d30b6 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT SIDE - Text content with tight left alignment */}
          <div className="lg:col-span-7 space-y-6 animate-fadeIn">
            <div className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg transform transition hover:scale-105 hover:shadow-xl border border-white/30">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300">
                CRYPTO • FOREX • HOÀN PHÍ
              </span>
            </div>

            {/* Main heading - tight left alignment, no text centering */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl
                   font-bold tracking-tight leading-[0.95] text-left" 
                style={{ fontWeight: 700 }}>
              <span className="block text-white drop-shadow-lg">Hoàn Phí Giao Dịch</span>
              <span className="block whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 drop-shadow-2xl">Nhanh</span>
                <span className="inline text-white"> &amp; </span>
                <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 drop-shadow-2xl">An toàn</span>
              </span>
            </h1>

            <p className="text-lg text-white max-w-2xl leading-relaxed font-medium drop-shadow-md text-left">
              Chúng tôi xử lý hoàn phí nhanh chóng trên các sàn Crypto, Forex. Các bạn sẽ nhận được <span className="text-green-300 font-bold">40-60%</span> phí giao dịch của mình vào mỗi tháng kèm nhiều ưu đãi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-green-500 hover:to-emerald-500"
              >
                <span className="text-xl group-hover:animate-bounce">🚀</span>
                <span>Đăng ký & Nhận Hoàn</span>
                <span className="ml-2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              </Link>

              <Link
                to="/news/2"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3.5 rounded-full shadow-md hover:shadow-xl hover:border-white/50 hover:bg-white/20 transform transition-all duration-300 hover:scale-105 font-semibold"
              >
                <span>ℹ️</span> Tìm hiểu thêm về hoàn phí
              </Link>
            </div>

            <div className="mt-12">
              <div className="flex flex-wrap items-center gap-8 mt-12">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-white">Hợp tác nhiều sàn lớn</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-white">Hoàn Nhanh Chóng 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-white">98k người hài lòng</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Images */}
          <div className="lg:col-span-5">

            {/* DESKTOP: 2 CARDS */}
            <div className="hidden lg:flex justify-end gap-8 mt-8">
              
              {/* CANDLES CARD */}
              <div className="float" style={{ animation: "float 6s ease-in-out infinite" }}>
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-5 shadow-2xl border border-violet-100/50">
                  <CryptoCandlesSmall size={220} speed={2.5} />
                </div>
              </div>

              {/* PHONE IMAGE - SLIDESHOW */}
              <div className="float" style={{ animation: "float 7s ease-in-out infinite 1s" }}>
                <div className="relative">
                  <TradingSlideshow />

                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xl border-2 border-white">
                    Hoàn 40–60%
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <p className="text-4xl font-black drop-shadow-lg">8,423</p>
                    <p className="text-xs opacity-90 font-medium">người đăng ký</p>
                  </div>
                </div>
              </div>

            </div>

            {/* MOBILE: 1 IMAGE - SLIDESHOW */}
            <div className="lg:hidden mt-12 px-6">
              <div className="flex justify-center">
                <div className="relative w-full max-w-xs">

                  <div className="float rounded-3xl overflow-hidden"
                       style={{ animation: "float 7s ease-in-out infinite" }}>
                    <TradingSlideshow />
                  </div>

                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl border-2 border-white z-10">
                    Hoàn 40–60%
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <p className="text-5xl font-black drop-shadow-lg">8,423</p>
                    <p className="text-sm opacity-90 font-medium">người đã nhận</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;