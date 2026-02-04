import React, { useState, useEffect } from "react";
import { TrendingUp, Zap, Copy, Gift, Star } from "lucide-react";
import toast from "react-hot-toast";
import "./NewsPopup.css";

const NewsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem("atxPopupHiddenUntil");

    // Nếu đang trong thời gian bị ẩn thì không hiện
    if (hideUntil && Date.now() < parseInt(hideUntil)) {
      return;
    }

    // Hiện popup sau 1s khi vào web
    const timer = setTimeout(() => {
      setShouldShow(true);
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShouldShow(false);
    }, 300);
  };

  // Ẩn popup trong 2 tiếng
  const handleDontShowAgain = () => {
    const twoHoursLater = Date.now() + 2 * 60 * 60 * 1000;
    localStorage.setItem("atxPopupHiddenUntil", twoHoursLater.toString());
    handleClose();
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success(`✅ Đã copy mã: ${text}`))
      .catch(() => toast.error("❌ Copy lỗi, thử lại!"));
  };

  const handleRegister = () => {
    window.open("https://atxs.io/r/maohoanphi", "_blank");
    handleClose();
  };

  if (!shouldShow) return null;

  return (
    <div className={`news-popup-overlay ${isVisible ? "active" : ""}`}>
      <div className={`news-popup atx-popup ${isVisible ? "active" : ""}`}>
        <button className="news-popup-close" onClick={handleClose}>
          ✕
        </button>

        <div className="news-popup-content">
          <div className="hot-badge">
            <Star className="w-4 h-4 mr-1" />
            HOT
          </div>

          <div className="atx-logo-container">
            <img 
              src="https://cashback.exchange/image/exchanges/atx.png" 
              alt="ATX" 
              className="atx-logo"
            />
          </div>
          
          <h2 className="news-popup-title atx-title">
            SÀN ATX - HOÀN PHÍ 25%
          </h2>

          <div className="atx-highlight-box">
            <Gift className="w-5 h-5 text-yellow-500" />
            <span>Khuyến mãi đặc biệt tháng 2/2026</span>
          </div>
          
          <div className="news-popup-body">
            <ul className="atx-features-list">
              <li>
                <div className="feature-icon">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="feature-text">
                  <strong>Hoàn 25% phí giao dịch</strong>
                  <span>Nhận cashback hàng ngày</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="feature-text">
                  <strong>Xử lý siêu nhanh</strong>
                  <span>Rút tiền trong vòng 1-3ph</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">
                  <Gift className="w-5 h-5" />
                </div>
                <div className="feature-text">
                  <strong>Tặng 2tr cho người mới</strong>
                  <span>Trade lãi là rút</span>
                </div>
              </li>
            </ul>

            <div className="referral-code-box">
              <div className="code-label">Mã giới thiệu</div>
              <div className="code-content">
                <span className="code-text">maohoanphi</span>
                <button 
                  className="code-copy-btn"
                  onClick={() => handleCopy("maohoanphi")}
                  aria-label="Copy mã giới thiệu"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="atx-note">
              ⚡ Đăng ký ngay hôm nay để nhận ưu đãi tốt nhất!
            </p>
          </div>

          <div className="news-popup-actions">
            <button 
              className="news-popup-btn primary atx-register-btn" 
              onClick={handleRegister}
            >
              <Zap className="w-4 h-4 mr-2" />
              Đăng ký ngay
            </button>
            <button 
              className="news-popup-btn secondary" 
              onClick={handleDontShowAgain}
            >
              Không hiển thị lại (2h)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPopup;
