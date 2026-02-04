import React, { useState, useEffect } from "react";

import logo from '../assets/logo.png';

export default function Header({ onOpenContact = () => {} }) {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [setActiveSubmenu] = useState(null);
  
  // Mobile submenu states
  const [mobileForexOpen, setMobileForexOpen] = useState(false);
  const [mobileCryptoOpen, setMobileCryptoOpen] = useState(false);

  // Danh sách các sàn
  const forexPlatforms = [
    { name: 'Exness', icon: '🏆' },
    { name: 'XM', icon: '⭐' },
    { name: 'IC Markets', icon: '📊' },
    { name: 'FBS', icon: '💎' },
    { name: 'Tickmill', icon: '🎯' }
  ];

  const cryptoPlatforms = [
    { name: 'Binance', icon: '🟡' },
    { name: 'Bybit', icon: '🔷' },
    { name: 'OKX', icon: '⚫' },
    { name: 'Gate.io', icon: '🔵' },
    { name: 'Bitget', icon: '🟢' }
  ];

  // Theo dõi scroll để thêm effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hàm cuộn đến section hoặc reload trang
  const handleNavClick = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setActiveSubmenu(null);
  };

  const goNews = (e) => {
    e.preventDefault();
    handleNavClick("news");
  };

  const handleContactClick = () => {
    onOpenContact();
    setIsMenuOpen(false);
  };

  const handlePlatformClick = (type, platform) => {
    console.log(`Navigate to ${type} - ${platform}`);
    setIsServicesOpen(false);
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');
        
        /* Glass morphism effect - Purple Theme matching Hero gradient */
        .header-glass {
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          background: linear-gradient(135deg, rgba(103, 76, 220, 0.95) 0%, rgba(90, 62, 201, 0.95) 50%, rgba(77, 48, 182, 0.95) 100%);
          box-shadow: 0 4px 24px rgba(103, 76, 220, 0.3);
        }

        /* Logo animations */
        .logo-container {
          position: relative;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .logo-container:hover {
          transform: translateY(-2px);
        }

        .logo-img {
          transition: all 0.35s ease;
          filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0));
        }

        .logo-container:hover .logo-img {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) brightness(1.15);
          transform: scale(1.05);
        }

        /* Logo text */
        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
          color: white;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .logo-text-highlight {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 30%, #fcd34d 60%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.4));
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .logo-container:hover .logo-text {
          letter-spacing: 0.03em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
          transform: scale(1.03);
        }

        .logo-container:hover .logo-text-highlight {
          filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.6));
          animation: shimmer 1.5s ease-in-out infinite;
        }

        /* Navigation Links */
        .nav-link {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          padding: 0.625rem 0.75rem;
          border-radius: 0.5rem;
          cursor: pointer;
        }

        .nav-link:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-1px);
        }

        .nav-link:active {
          transform: translateY(0);
        }

        /* Dropdown Container - CRITICAL FOR HOVER */
        .services-dropdown {
          position: relative;
        }

        /* Hover trigger - show dropdown on hover */
        .services-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
          font-size: 0.75rem;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        /* Level 1 Dropdown Menu (Forex/Crypto) */
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          min-width: 200px;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(103, 76, 220, 0.2), 0 0 0 1px rgba(103, 76, 220, 0.1);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
          overflow: visible;
        }

        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 2px;
          rotate: 45deg;
          box-shadow: -2px -2px 4px rgba(103, 76, 220, 0.1);
        }

        /* Dropdown item wrapper for hover trigger */
        .dropdown-item-wrapper {
          position: relative;
        }

        /* Show submenu on hover */
        .dropdown-item-wrapper:hover .submenu {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.875rem 1.25rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.9375rem;
          color: #374151;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(103, 76, 220, 0.08) 0%, rgba(90, 62, 201, 0.08) 100%);
          color: #674cdc;
          padding-left: 1.5rem;
        }

        .dropdown-item-icon {
          font-size: 1.25rem;
          transition: transform 0.25s ease;
        }

        .dropdown-item:hover .dropdown-item-icon {
          transform: scale(1.15);
        }

        .dropdown-item-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .dropdown-item-arrow {
          font-size: 0.75rem;
          color: #9ca3af;
          transition: all 0.25s ease;
        }

        .dropdown-item:hover .dropdown-item-arrow {
          color: #674cdc;
          transform: translateX(2px);
        }

        /* Level 2 Submenu (Platforms) */
        .submenu {
          position: absolute;
          left: calc(100% + 0.5rem);
          top: -0.5rem;
          min-width: 180px;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(103, 76, 220, 0.2), 0 0 0 1px rgba(103, 76, 220, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateX(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 110;
          overflow: hidden;
        }

        .submenu-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.75rem 1rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          color: #4b5563;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
          border-left: 2px solid transparent;
        }

        .submenu-item:hover {
          background: linear-gradient(135deg, rgba(103, 76, 220, 0.06) 0%, rgba(90, 62, 201, 0.06) 100%);
          color: #674cdc;
          border-left-color: #674cdc;
          padding-left: 1.25rem;
        }

        .submenu-item-icon {
          font-size: 1rem;
          transition: transform 0.2s ease;
        }

        .submenu-item:hover .submenu-item-icon {
          transform: scale(1.1);
        }

        .dropdown-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(103, 76, 220, 0.15), transparent);
          margin: 0.25rem 0;
        }

        /* Contact Button */
        .contact-btn {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: -0.01em;
          background: white;
          color: #674cdc;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: pointer;
        }

        .contact-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(103, 76, 220, 0.15), transparent);
          border-radius: 50%;
          transition: width 0.5s ease, height 0.5s ease;
        }

        .contact-btn:hover::before {
          width: 300%;
          height: 300%;
        }

        .contact-btn:hover {
          background: #f3f4f6;
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .contact-btn:active {
          transform: scale(0.97) translateY(0);
        }

        /* Mobile Menu Icon */
        .menu-icon {
          position: relative;
          width: 26px;
          height: 20px;
        }

        .menu-icon span {
          display: block;
          width: 100%;
          height: 2.5px;
          background: white;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          border-radius: 2px;
          position: absolute;
        }

        .menu-icon span:nth-child(1) {
          top: 0;
        }

        .menu-icon span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
          width: 80%;
        }

        .menu-icon span:nth-child(3) {
          bottom: 0;
        }

        .menu-icon:hover span {
          background: #e5e7eb;
        }

        .menu-icon.open span:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          background: white;
        }

        .menu-icon.open span:nth-child(2) {
          opacity: 0;
          width: 0;
        }

        .menu-icon.open span:nth-child(3) {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
          background: white;
        }

        /* Mobile Menu */
        .mobile-menu {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(103, 76, 220, 0.98);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-link {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.25s ease;
          border-left: 3px solid transparent;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.15);
          transition: left 0.3s ease;
        }

        .mobile-nav-link:hover::before {
          left: 0;
        }

        .mobile-nav-link:hover {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          padding-left: 1.25rem;
        }

        /* Mobile Submenu */
        .mobile-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-submenu.open {
          max-height: 400px;
        }

        .mobile-submenu-item {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          padding: 0.75rem 1rem 0.75rem 2rem;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .mobile-submenu-item:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          padding-left: 2.5rem;
        }

        /* Mobile Level 3 Submenu */
        .mobile-platform-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-platform-submenu.open {
          max-height: 300px;
        }

        .mobile-platform-item {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          padding: 0.625rem 1rem 0.625rem 3.5rem;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .mobile-platform-item:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding-left: 4rem;
        }

        /* Header Border Animation */
        .header-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: borderFlow 3s ease-in-out infinite;
        }

        @keyframes borderFlow {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 0%;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .nav-link {
            font-size: 0.875rem;
          }
          .contact-btn {
            font-size: 0.875rem;
            padding: 0.625rem 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.125rem;
          }
          
          .nav-link,
          .contact-btn,
          .mobile-nav-link {
            font-size: 0.9375rem;
          }
        }
      `}</style>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled 
            ? 'header-glass shadow-xl' 
            : ''
        }`}
        style={!scrolled ? { background: 'linear-gradient(135deg, #674cdc 0%, #5a3ec9 50%, #4d30b6 100%)' } : {}}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div 
              onClick={() => handleNavClick("home")}
              className="logo-container flex items-center gap-3"
            >
              <img 
                src={logo} 
                alt="VID Logo" 
                className="logo-img h-11 w-11 object-contain"
              />
              <div className="logo-text tracking-tight">
                MAO <span className="logo-text-highlight">HOÀN PHÍ</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <button
                onClick={() => handleNavClick("home")}
                className="nav-link text-gray-100"
              >
                Trang Chủ
              </button>
              
              {/* Dropdown Menu - Sàn Giao Dịch with PURE CSS HOVER */}
              <div className="services-dropdown">
                <button
                  className="nav-link text-gray-100 dropdown-toggle"
                >
                  Sàn Giao Dịch
                  <span className="dropdown-arrow">▼</span>
                </button>
                
                <div className="dropdown-menu">
                  {/* Forex with Submenu */}
                  <div className="dropdown-item-wrapper">
                    <div className="dropdown-item">
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-icon">💱</span>
                        <span>Forex</span>
                      </div>
                      <span className="dropdown-item-arrow">▶</span>
                    </div>
                    
                    {/* Forex Platforms Submenu */}
                    <div className="submenu">
                      {forexPlatforms.map((platform, index) => (
                        <button
                          key={index}
                          onClick={() => handlePlatformClick('forex', platform.name)}
                          className="submenu-item"
                        >
                          <span className="submenu-item-icon">{platform.icon}</span>
                          <span>{platform.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="dropdown-divider"></div>
                  
                  {/* Crypto with Submenu */}
                  <div className="dropdown-item-wrapper">
                    <div className="dropdown-item">
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-icon">₿</span>
                        <span>Crypto</span>
                      </div>
                      <span className="dropdown-item-arrow">▶</span>
                    </div>
                    
                    {/* Crypto Platforms Submenu */}
                    <div className="submenu">
                      {cryptoPlatforms.map((platform, index) => (
                        <button
                          key={index}
                          onClick={() => handlePlatformClick('crypto', platform.name)}
                          className="submenu-item"
                        >
                          <span className="submenu-item-icon">{platform.icon}</span>
                          <span>{platform.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={goNews}
                className="nav-link text-gray-100"
              >
                Tin Tức
              </button>
              
              <button
                onClick={handleContactClick}
                className="contact-btn px-5 py-2.5 rounded-xl shadow-md"
              >
                Liên hệ
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-3 hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* Animated Border */}
          <div className="header-border"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden border-t border-white/10 backdrop-blur-xl">
            <nav className="px-4 py-6 space-y-2">
              <button
                onClick={() => handleNavClick("home")}
                className="mobile-nav-link w-full text-left px-4 py-3.5 text-gray-100 rounded-lg"
              >
                Trang Chủ
              </button>
              
              {/* Mobile Dropdown - Sàn Giao Dịch */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="mobile-nav-link w-full text-left px-4 py-3.5 text-gray-100 rounded-lg flex items-center justify-between"
                >
                  <span>Sàn Giao Dịch</span>
                  <span className={`dropdown-arrow text-xs ${isServicesOpen ? 'open' : ''}`}>▼</span>
                </button>
                
                <div className={`mobile-submenu ${isServicesOpen ? 'open' : ''}`}>
                  {/* Forex Mobile Submenu */}
                  <div>
                    <button
                      onClick={() => setMobileForexOpen(!mobileForexOpen)}
                      className="mobile-submenu-item w-full text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span>💱</span>
                        <span>Forex</span>
                      </div>
                      <span className={`dropdown-arrow text-xs ${mobileForexOpen ? 'open' : ''}`}>▼</span>
                    </button>
                    
                    <div className={`mobile-platform-submenu ${mobileForexOpen ? 'open' : ''}`}>
                      {forexPlatforms.map((platform, index) => (
                        <button
                          key={index}
                          onClick={() => handlePlatformClick('forex', platform.name)}
                          className="mobile-platform-item w-full text-left"
                        >
                          <span>{platform.icon}</span>
                          <span>{platform.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Crypto Mobile Submenu */}
                  <div>
                    <button
                      onClick={() => setMobileCryptoOpen(!mobileCryptoOpen)}
                      className="mobile-submenu-item w-full text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span>₿</span>
                        <span>Crypto</span>
                      </div>
                      <span className={`dropdown-arrow text-xs ${mobileCryptoOpen ? 'open' : ''}`}>▼</span>
                    </button>
                    
                    <div className={`mobile-platform-submenu ${mobileCryptoOpen ? 'open' : ''}`}>
                      {cryptoPlatforms.map((platform, index) => (
                        <button
                          key={index}
                          onClick={() => handlePlatformClick('crypto', platform.name)}
                          className="mobile-platform-item w-full text-left"
                        >
                          <span>{platform.icon}</span>
                          <span>{platform.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={goNews}
                className="mobile-nav-link w-full text-left px-4 py-3.5 text-gray-100 rounded-lg"
              >
                Tin Tức
              </button>
              
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-3"></div>
              
              <button
                onClick={handleContactClick}
                className="contact-btn w-full px-4 py-3.5 rounded-xl mt-3 shadow-md"
              >
                Liên hệ
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer để content không bị che bởi fixed header */}
      <div className="h-20"></div>
    </>
  );
}