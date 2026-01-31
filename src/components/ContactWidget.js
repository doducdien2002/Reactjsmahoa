import { useState } from "react";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoClose, IoChatbubbleEllipses } from "react-icons/io5";

const ContactWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(103, 76, 220, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(103, 76, 220, 0.8);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .contact-item {
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) backwards;
        }

        .contact-item:nth-child(1) {
          animation-delay: 0.1s;
        }

        .contact-item:nth-child(2) {
          animation-delay: 0.2s;
        }

        .contact-item:nth-child(3) {
          animation-delay: 0.3s;
        }

        .main-button {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .contact-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-link::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #674cdc, #a78bfa);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-link:hover::before {
          opacity: 1;
        }

        .contact-link:hover {
          transform: translateY(-4px) scale(1.1);
        }

        .contact-link:active {
          transform: translateY(-2px) scale(1.05);
        }

        @media (max-width: 640px) {
          .contact-widget-container {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>

      <div className="contact-widget-container fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
        {open && (
          <div className="bg-white backdrop-blur-lg p-5 rounded-2xl shadow-2xl flex flex-col items-center gap-3 border-2" style={{ borderColor: '#a78bfa' }}>
            {/* Header */}
            <div className="text-center mb-2">
              <h3 className="text-sm font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #674cdc, #5a3ec9, #4d30b6)' }}>
                Liên hệ với chúng tôi
              </h3>
            </div>

            {/* Zalo */}
            <a
              href="https://zalo.me/g/egkfta239"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-item group p-4 rounded-full shadow-lg hover:shadow-2xl"
              style={{ background: 'linear-gradient(to bottom right, #674cdc, #5a3ec9)' }}
            >
              <SiZalo className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/maofasttrading"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-item group p-4 rounded-full shadow-lg hover:shadow-2xl"
              style={{ background: 'linear-gradient(to bottom right, #5a3ec9, #4d30b6)' }}
            >
              <FaTelegramPlane className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@hoanphi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-item group p-4 rounded-full shadow-lg hover:shadow-2xl"
              style={{ background: 'linear-gradient(to bottom right, #4d30b6, #3d248f)' }}
            >
              <FaYoutube className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>

            {/* Footer text */}
            <div className="text-center mt-1">
              <p className="text-xs font-medium" style={{ color: '#674cdc' }}>
                Hỗ trợ 24/7
              </p>
            </div>
          </div>
        )}

        {/* Nút toggle - Purple theme */}
        <button
          onClick={() => setOpen(!open)}
          className="main-button p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 relative overflow-hidden group"
          style={{ background: 'linear-gradient(to right, #674cdc, #5a3ec9)' }}
          aria-label={open ? "Đóng menu liên hệ" : "Mở menu liên hệ"}
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          
          {/* Icon */}
          <div className="relative">
            {open ? (
              <IoClose className="text-white text-3xl transition-transform duration-300 rotate-0 group-hover:rotate-90" />
            ) : (
              <IoChatbubbleEllipses className="text-white text-3xl transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>

          {/* Notification badge */}
          {!open && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          )}
        </button>
      </div>
    </>
  );
};

export default ContactWidget;