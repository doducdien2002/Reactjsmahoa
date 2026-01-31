import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Header({ onOpenContact = () => {} }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      // Nếu click "Trang Chủ" - reload về đầu trang
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Cuộn đến section tương ứng
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Chiều cao của header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const goNews = (e) => {
    e.preventDefault();
    handleNavClick("news");
  };

  const handleContactClick = () => {
    onOpenContact();
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap');
        
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

        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
        }

        .logo-container:hover .logo-text {
          letter-spacing: 0.01em;
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
        }

        .nav-link:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-1px);
        }

        .nav-link:active {
          transform: translateY(0);
        }

        /* Contact Button - Purple #674cdc */
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

        /* Header Border Animation - White */
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
              className="logo-container flex items-center gap-3 cursor-pointer"
            >
              <img 
                src={logo} 
                alt="VID Logo" 
                className="logo-img h-11 w-11 object-contain"
              />
              <div className="logo-text text-white tracking-tight">
                MAO <span className="text-purple-200 font-semibold">HOÀN PHÍ</span>
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
              
              <button
                onClick={() => handleNavClick("services")}
                className="nav-link text-gray-100"
              >
                Sàn Giao Dịch
              </button>
              
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
              
              <button
                onClick={() => handleNavClick("services")}
                className="mobile-nav-link w-full text-left px-4 py-3.5 text-gray-100 rounded-lg"
              >
                Sàn Giao Dịch
              </button>
              
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