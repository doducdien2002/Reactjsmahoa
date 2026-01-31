import React from "react";
import { Link } from 'react-router-dom';

const TRADING_IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
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

const TradingSlideshow = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRADING_IMAGES.length);
    }, 1000);

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

const WaveBackground = () => {
  return (
    <div className="absolute inset-x-0 overflow-hidden pointer-events-none" style={{ height: '220px', bottom: '0' }}>
      <style>{`
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }
        .svg-waves__parallax > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
        .svg-waves__parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
          fill: #d8d4e3;
          fill-opacity: 0.4;
        }
        .svg-waves__parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
          fill: #e3e0ec;
          fill-opacity: 0.5;
        }
        .svg-waves__parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
          fill: #edeaf4;
          fill-opacity: 0.6;
        }
        .svg-waves__parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
          fill: #f5f3f9;
          fill-opacity: 0.7;
        }
        .svg-waves__parallax > use:nth-child(5) {
          animation-delay: -6s;
          animation-duration: 25s;
          fill: #faf9fc;
          fill-opacity: 0.85;
        }
        .svg-waves__parallax > use:nth-child(6) {
          animation-delay: -7s;
          animation-duration: 30s;
          fill: #ffffff;
          fill-opacity: 1;
        }
      `}</style>
      
      <svg 
        className="svg-waves" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="auto"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <path 
            id="gentle-wave" 
            d="M-160 44c30 0 58-10 88-10s 58 10 88 10 58-10 88-10 58 10 88 10 v44h-352z" 
          />
        </defs>
        <g className="svg-waves__parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" />
          <use xlinkHref="#gentle-wave" x="48" y="3" />
          <use xlinkHref="#gentle-wave" x="48" y="5" />
          <use xlinkHref="#gentle-wave" x="48" y="7" />
          <use xlinkHref="#gentle-wave" x="48" y="9" />
          <use xlinkHref="#gentle-wave" x="48" y="11" />
        </g>
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <main className="relative pt-2" style={{ background: 'linear-gradient(135deg, #674cdc 0%, #5a3ec9 50%, #4d30b6 100%)', paddingBottom: '150px', overflow: 'hidden' }}>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {/* HÌNH TRÒN MÉO MÉO - Organic Blob Shape */}
        <svg 
          className="absolute" 
          style={{ left: '5%', top: '20%', width: '300px', height: '300px' }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="none" 
            stroke="rgba(255,255,255,0.15)" 
            strokeWidth="3"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,0 150,0
               a 75,75 0 1,0 -150,0
               q 20,-30 40,-10
               t 30,15
               t 35,-5
               t 20,-25
               q -15,-20 -35,-15
               t -45,10
               t -45,30"
            style={{
              animation: 'morph 8s ease-in-out infinite'
            }}
          />
        </svg>

        <style>{`
          @keyframes morph {
            0%, 100% {
              d: path("M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0 q 20,-30 40,-10 t 30,15 t 35,-5 t 20,-25 q -15,-20 -35,-15 t -45,10 t -45,30");
            }
            50% {
              d: path("M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0 q 25,-20 35,-15 t 40,20 t 25,-10 t 15,-30 q -20,-15 -40,-10 t -35,15 t -40,25");
            }
          }
        `}</style>
        
        {/* Sparkle Icons */}
        <div className="absolute" style={{ left: '50%', top: '12%', color: '#f472b6', fontSize: '28px', opacity: 0.4 }}>✦</div>
        <div className="absolute" style={{ right: '15%', top: '18%', color: '#c084fc', fontSize: '32px', opacity: 0.4 }}>✦</div>
        <div className="absolute" style={{ left: '60%', bottom: '45%', color: '#f472b6', fontSize: '24px', opacity: 0.3 }}>✦</div>
        
        {/* X Icons */}
        <div className="absolute" style={{ left: '5%', top: '8%', color: '#c084fc', fontSize: '24px', opacity: 0.3 }}>✕</div>
        <div className="absolute" style={{ right: '8%', top: '10%', color: '#a78bfa', fontSize: '20px', opacity: 0.3 }}>✕</div>
        <div className="absolute" style={{ right: '40%', top: '5%', color: '#c084fc', fontSize: '20px', opacity: 0.3 }}>✕</div>
        
        {/* Circle Icons */}
        <div className="absolute" style={{ left: '8%', top: '50%', color: '#f472b6', fontSize: '20px', opacity: 0.3 }}>◯</div>
        <div className="absolute" style={{ right: '5%', bottom: '30%', color: '#93c5fd', fontSize: '18px', opacity: 0.3 }}>◯</div>
        <div className="absolute" style={{ left: '20%', top: '15%', color: '#c084fc', fontSize: '18px', opacity: 0.3 }}>◯</div>
        
        {/* Plus Icons */}
        <div className="absolute" style={{ left: '2%', top: '35%', color: '#f472b6', fontSize: '24px', opacity: 0.3 }}>+</div>
        <div className="absolute" style={{ right: '10%', top: '40%', color: '#c084fc', fontSize: '20px', opacity: 0.3 }}>+</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 relative" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* LEFT SIDE - Text content - MOBILE CẢI THIỆN, DESKTOP GIỮ NGUYÊN */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-3 animate-fadeIn">
            
            {/* Badge - THU NHỎ LẠI */}
            <div className="inline-block relative">
              {/* Glow layers nhẹ hơn - MOBILE */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-xl opacity-40 lg:hidden"></div>
              
              {/* Badge chính nhỏ gọn */}
              <div className="relative overflow-visible rounded-full">
                <style>{`
                  @keyframes shine {
                    0% { transform: translateX(-100%) rotate(45deg); }
                    100% { transform: translateX(200%) rotate(45deg); }
                  }
                  
                  /* Animation chạy dọc border */
                  @keyframes runAlongBorder {
                    0% {
                      left: 0%;
                      top: 0%;
                    }
                    25% {
                      left: 100%;
                      top: 0%;
                    }
                    50% {
                      left: 100%;
                      top: 100%;
                    }
                    75% {
                      left: 0%;
                      top: 100%;
                    }
                    100% {
                      left: 0%;
                      top: 0%;
                    }
                  }
                `}</style>
                
                {/* Content - BADGE NHỎ GỌN */}
                <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 lg:from-white/20 lg:via-white/20 lg:to-white/20 backdrop-blur-md text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-full font-bold shadow-xl lg:shadow-lg transform transition hover:scale-105 border-2 border-white/60 lg:border border-white/30"
                     style={{
                       boxShadow: "0 0 30px rgba(139, 92, 246, 0.4), 0 10px 25px rgba(0, 0, 0, 0.2)",
                       lineHeight: '1.3'
                     }}>
                  <span className="text-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-green-300 lg:via-cyan-300 lg:to-blue-300 text-xs lg:text-sm tracking-wide font-bold whitespace-nowrap">
                    <span className="lg:hidden">CRYPTO • FOREX • HOÀN PHÍ</span>
                    <span className="hidden lg:inline">CRYPTO • FOREX • HOÀN PHÍ</span>
                  </span>
                </div>
                
                {/* ANIMATED GIF ICONS NHỎ TRONG SUỐT - CHỈ MOBILE */}
                <div className="lg:hidden absolute inset-0 pointer-events-none" style={{ borderRadius: '9999px' }}>
                  {/* Icon 1 - Coin */}
                  <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-60"
                       style={{ 
                         animation: 'runAlongBorder 8s linear infinite'
                       }}>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Coin.png" alt="" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Icon 2 - Money Bag */}
                  <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-60"
                       style={{ 
                         animation: 'runAlongBorder 8s linear infinite 2s'
                       }}>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Money%20Bag.png" alt="" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Icon 3 - Chart */}
                  <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-60"
                       style={{ 
                         animation: 'runAlongBorder 8s linear infinite 4s'
                       }}>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Chart%20Increasing.png" alt="" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Icon 4 - Sparkles */}
                  <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-60"
                       style={{ 
                         animation: 'runAlongBorder 8s linear infinite 6s'
                       }}>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sparkles.png" alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading - Mobile lớn hơn, Desktop giữ nguyên */}
            <h1 className="text-5xl xs:text-6xl sm:text-7xl
                   lg:text-6xl xl:text-7xl
                   font-black lg:font-bold 
                   tracking-tight leading-[1.1] lg:leading-[0.95] 
                   text-left">
              
              <span className="block text-white drop-shadow-2xl lg:drop-shadow-lg mb-2 lg:mb-0">
                Hoàn Phí Giao Dịch
              </span>
              <span className="block lg:whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 lg:via-emerald-300 lg:to-green-400 drop-shadow-2xl">
                  Nhanh
                </span>
                <span className="inline text-white mx-3 lg:mx-2"> &amp; </span>
                <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 lg:via-blue-300 lg:to-cyan-400 drop-shadow-2xl">
                  An toàn
                </span>
              </span>
            </h1>

            {/* Description - Mobile lớn hơn, Desktop giữ nguyên */}
            <p className="text-lg sm:text-xl lg:text-lg 
                          text-white/90 lg:text-white 
                          max-w-2xl leading-relaxed 
                          font-normal lg:font-medium 
                          drop-shadow-md text-left !mt-6 lg:!mt-3">
              Chúng tôi xử lý hoàn phí nhanh chóng trên các sàn Crypto, Forex. 
              <br className="hidden sm:block lg:hidden" />
              Các bạn sẽ nhận được <span className="text-green-300 font-bold text-xl lg:text-base">40-60%</span> phí giao dịch của mình vào mỗi tháng kèm nhiều ưu đãi.
            </p>

            {/* CTA Buttons - Mobile lớn hơn, Desktop giữ nguyên */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-3 !mt-8 lg:!mt-4">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 lg:via-emerald-400 lg:to-green-500 text-white px-8 py-4 lg:px-7 lg:py-3.5 rounded-full font-bold text-lg lg:text-base shadow-2xl lg:shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-green-500 hover:to-emerald-600 lg:hover:to-emerald-500"
              >
                <span className="text-2xl lg:text-xl group-hover:animate-bounce">🚀</span>
                <span>Đăng ký & Nhận Hoàn</span>
                <span className="ml-2 w-2.5 lg:w-2 h-2.5 lg:h-2 rounded-full bg-red-500 animate-pulse" />
              </Link>

              <Link
                to="/news/2"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/40 lg:border-white/30 text-white px-7 py-4 lg:px-6 lg:py-3.5 rounded-full shadow-lg lg:shadow-md hover:shadow-xl hover:border-white/60 lg:hover:border-white/50 hover:bg-white/20 transform transition-all duration-300 hover:scale-105 font-semibold text-lg lg:text-base"
              >
                <span>ℹ️</span> 
                <span>Tìm hiểu thêm<span className="hidden lg:inline"> về hoàn phí</span></span>
              </Link>
            </div>

            {/* Features - Chỉ hiện trên Desktop */}
            <div className="!mt-10 hidden lg:block">
              <div className="flex flex-wrap items-center gap-6">
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

          {/* RIGHT SIDE - Images - GIỮ NGUYÊN DESKTOP, CẢI THIỆN MOBILE */}
          <div className="lg:col-span-5">
            {/* DESKTOP: 2 CARDS - GIỮ NGUYÊN */}
            <div className="hidden lg:flex justify-end gap-6 mt-8" style={{ marginRight: '-80px' }}>
              <div className="float" style={{ 
                animation: "float 6s ease-in-out infinite",
                transform: "translateX(40px) translateY(30px) scale(0.95)",
                opacity: 0.85
              }}>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 shadow-2xl border border-violet-100/50"
                     style={{
                       boxShadow: "0 30px 60px -15px rgba(103, 76, 220, 0.4), 0 0 0 1px rgba(167, 139, 250, 0.1)"
                     }}>
                  <CryptoCandlesSmall size={200} speed={2.5} />
                </div>
              </div>

              <div className="float" style={{ 
                animation: "float 7s ease-in-out infinite 1s",
                transform: "translateX(-20px) translateY(0px) scale(1.05)",
                zIndex: 20
              }}>
                <div className="relative" style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.35))"
                }}>
                  <TradingSlideshow />
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xl border-2 border-white">
                    Hoàn 40–60%
                  </div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <p className="text-4xl font-black drop-shadow-lg">8,423</p>
                    <p className="text-xs opacity-90 font-medium">người đăng ký</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE: THIẾT KẾ LẠI ẢNH - 3D CARD VỚI PERSPECTIVE */}
            <div className="lg:hidden mt-16 px-4">
              <style>{`
                @keyframes float3D {
                  0%, 100% {
                    transform: translateY(0) rotateY(-5deg) rotateX(2deg);
                  }
                  50% {
                    transform: translateY(-20px) rotateY(5deg) rotateX(-2deg);
                  }
                }
                
                @keyframes glowPulse {
                  0%, 100% {
                    box-shadow: 
                      0 0 60px rgba(34, 197, 94, 0.6),
                      0 0 100px rgba(16, 185, 129, 0.4),
                      0 30px 80px rgba(0, 0, 0, 0.4);
                  }
                  50% {
                    box-shadow: 
                      0 0 80px rgba(34, 197, 94, 0.8),
                      0 0 120px rgba(16, 185, 129, 0.6),
                      0 35px 90px rgba(0, 0, 0, 0.5);
                  }
                }
              `}</style>
              
              <div className="flex justify-center" style={{ perspective: '1500px' }}>
                <div className="relative w-full max-w-sm">
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-500 rounded-3xl blur-3xl opacity-60"
                       style={{ 
                         animation: "glowPulse 3s ease-in-out infinite",
                         transform: 'scale(1.1)'
                       }}></div>
                  
                  {/* Main card with 3D transform */}
                  <div className="relative"
                       style={{ 
                         animation: "float3D 8s ease-in-out infinite",
                         transformStyle: 'preserve-3d'
                       }}>
                    
                    {/* Card container */}
                    <div className="relative rounded-3xl overflow-hidden"
                         style={{
                           boxShadow: `
                             0 0 60px rgba(34, 197, 94, 0.6),
                             0 30px 80px rgba(0, 0, 0, 0.4),
                             inset 0 0 0 2px rgba(255, 255, 255, 0.3)
                           `
                         }}>
                      <TradingSlideshow />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                             style={{
                               animation: 'shine 4s ease-in-out infinite',
                               transform: 'skewX(-20deg)'
                             }}></div>
                      </div>
                    </div>
                    
                    {/* Badge "Hoàn 40-60%" - THU NHỎ, KHÔNG NHẤP NHÁY */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="relative">
                        {/* Glow - nhẹ hơn */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-60"></div>
                        
                        {/* Badge - nhỏ hơn */}
                        <div className="relative bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-xl border-2 border-white"
                             style={{
                               boxShadow: '0 8px 20px rgba(34, 197, 94, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                             }}>
                          <span className="drop-shadow-md">Hoàn 40–60%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats "8,423 người đã nhận" - NÂNG CẤP */}
                    <div className="absolute bottom-6 left-6 z-10">
                      <div className="relative">
                        {/* Background blur */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl"></div>
                        
                        {/* Content */}
                        <div className="relative px-5 py-3">
                          <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400"
                             style={{
                               filter: 'drop-shadow(0 4px 8px rgba(34, 197, 94, 0.5))',
                               lineHeight: '1.2'
                             }}>
                            8,423
                          </p>
                          <p className="text-sm text-white/95 font-bold mt-1 tracking-wide">
                            người đã nhận ✓
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corners */}
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-4 border-r-4 border-white/40 rounded-tr-xl"></div>
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-4 border-l-4 border-white/40 rounded-bl-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WaveBackground />
    </main>
  );
};

export default Hero;