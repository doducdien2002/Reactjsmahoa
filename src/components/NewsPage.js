import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./NewsPage.css";
import newsImg from '../assets/anhtintuc.png';
import newsATX from '../assets/atx.png';

// Danh sách bài viết
const newsList = [
  {
    id: 1,
    title: "HOÀN 50% PHÍ GIAO DỊCH SÀN BINGX",
    description:
      "Sàn BingX mang đến chương trình hoàn 50% phí giao dịch cực hấp dẫn, giúp trader tiết kiệm tối đa chi phí.",
    imgSrc:newsImg,
    content: `
      <h2>🎯 Giới thiệu chương trình</h2>
      <p><strong>BingX</strong> là sàn giao dịch hàng đầu châu Á, triển khai chiến dịch <em>"Hoàn 50% phí giao dịch"</em> dành cho toàn bộ người dùng mới và cũ.</p>

      <div style="text-align:center; margin: 16px 0;">
      </div>

      <h2>💡 Cách tham gia</h2>
      <ol>
        <li>Đăng ký tài khoản BingX qua mã giới thiệu KSFN28VY</li>
        <li>Hoàn tất KYC để kích hoạt hoàn phí.</li>
        <li>Giao dịch và nhận hoàn phí tự động.</li>
      </ol>

      <h2>📊 Ưu điểm</h2>
      <ul>
        <li>Hoàn tới 50% phí giao dịch.</li>
        <li>Không giới hạn số lần hoàn.</li>
        <li>Phí hoàn nhanh và minh bạch.</li>
      </ul>

      <blockquote style="border-left:4px solid #3b82f6; background:#eff6ff; padding:12px; border-radius:8px; font-style:italic;">
        "Một bước đi chiến lược giúp BingX trở thành lựa chọn hàng đầu của trader khu vực châu Á."
      </blockquote>

      <h2>📞 Liên hệ hỗ trợ</h2>
      <p>Liên hệ đội ngũ <strong>VIDHOANPHI </strong> để nhận mã hoàn phí và được hướng dẫn chi tiết.</p>
    `,
  },
 {
  id: 2,
  title: "HOÀN PHÍ GIAO DỊCH LÀ GÌ?",
  description:
    "Tìm hiểu khái niệm hoàn phí giao dịch trong crypto, cơ chế hoạt động, lợi ích và cách nhận ưu đãi hoàn phí để tối ưu chi phí và lợi nhuận.",
  imgSrc:
    "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien2-20250501170052-d4azq.png",
  content: `
    <div style="font-family:'Inter',sans-serif; line-height:1.75; color:#1f2937;">

      <div style="display:inline-block; background:linear-gradient(45deg,#22c55e,#3b82f6); color:#fff; padding:6px 14px; border-radius:0 10px 0 10px; font-weight:700;">
        💸 HOÀN PHÍ GIAO DỊCH
      </div>

      <h2 style="margin-top:24px; font-size:1.6rem; color:#111827;">🚀 Hoàn phí giao dịch là gì?</h2>
      <p><strong>Hoàn phí giao dịch</strong> (<em>Trading Fee Rebate</em> hay <em>Cashback</em>) là chương trình mà <strong>sàn giao dịch hoàn trả lại cho người dùng một phần hoặc toàn bộ phí mà họ đã trả khi thực hiện lệnh giao dịch</strong>. </p>
      <p>Nói cách khác, mỗi khi bạn giao dịch (mua, bán, hoặc mở vị thế futures, margin…), sàn sẽ trích lại một phần phí đó và gửi trả về ví của bạn dưới dạng <strong>tiền thưởng, token, hoặc USDT</strong>.</p>

      <blockquote style="border-left:4px solid #22c55e; background:#f0fdf4; padding:12px; border-radius:8px; margin:20px 0; font-style:italic;">
        "Hoàn phí giao dịch = nhận lại tiền thật từ chính những lệnh bạn đã thực hiện."
      </blockquote>

      <h2 style="margin-top:20px; font-size:1.4rem; color:#1d4ed8;">📘 Cơ chế hoạt động của hoàn phí giao dịch</h2>
      <p>Khi bạn giao dịch trên sàn, bạn phải trả một khoản gọi là <strong>phí giao dịch</strong> (trung bình 0.1% đối với Spot và 0.02–0.06% đối với Futures).</p>
      <p>Khi tham gia chương trình hoàn phí, <strong>hệ thống sẽ ghi nhận tất cả lệnh giao dịch của bạn</strong> và hoàn lại một tỷ lệ nhất định — thường từ <b>10% đến 60%</b> — tùy thuộc vào cấp độ người dùng hoặc chương trình ưu đãi của sàn.</p>

      <div style="background:#f9fafb; padding:12px 16px; border-radius:10px; border:1px solid #e5e7eb;">
        <p><strong>Ví dụ:</strong> Bạn giao dịch 10.000 USDT, phí sàn là 0.1% = 10 USDT.</p>
        <p>Nếu sàn hoàn 50%, bạn sẽ <strong>được hoàn lại 5 USDT</strong> sau mỗi giao dịch. Số tiền này thường được cộng trực tiếp vào ví Spot hoặc ví Cashback.</p>
      </div>

      <h2 style="margin-top:24px; font-size:1.4rem; color:#1d4ed8;">🎯 Phân loại hoàn phí giao dịch</h2>
      <ul style="margin-left:20px; list-style:disc;">
        <li><strong>Hoàn phí Spot:</strong> áp dụng cho giao dịch mua bán thông thường trên thị trường giao ngay.</li>
        <li><strong>Hoàn phí Futures:</strong> dành cho các giao dịch hợp đồng tương lai (long/short).</li>
        <li><strong>Hoàn phí giới thiệu:</strong> người giới thiệu (referrer) nhận % hoàn phí từ giao dịch của người được giới thiệu.</li>
        <li><strong>Hoàn phí KOL/đại lý:</strong> mức hoàn cao hơn, thường từ 40–60%, dành cho người hợp tác quảng bá sàn.</li>
      </ul>

      <h2 style="margin-top:24px; font-size:1.4rem; color:#1d4ed8;">💡 Lợi ích khi tham gia hoàn phí</h2>
      <ul style="margin-left:20px; list-style:disc;">
        <li><strong>Tiết kiệm chi phí giao dịch:</strong> giúp trader giữ lại nhiều lợi nhuận hơn.</li>
        <li><strong>Không giới hạn thời gian:</strong> hoàn phí hoạt động liên tục 24/7, minh bạch.</li>
        <li><strong>Hỗ trợ trader lâu dài:</strong> mỗi lệnh đều mang lại giá trị, dù là nhỏ nhất.</li>
        <li><strong>Không cần kinh nghiệm:</strong> chỉ cần tạo tài khoản, xác minh KYC và giao dịch bình thường.</li>
      </ul>

      <blockquote style="border-left:4px solid #3b82f6; background:#eff6ff; padding:12px; border-radius:8px; margin:20px 0; font-style:italic;">
        "Đối với trader chuyên nghiệp, hoàn phí không chỉ là phần thưởng mà là chiến lược giảm chi phí giao dịch thông minh."
      </blockquote>

      <h2 style="margin-top:24px; font-size:1.4rem; color:#1d4ed8;">🔐 Tại sao cần xác minh KYC để nhận hoàn phí?</h2>
      <p>Hầu hết các sàn lớn như <strong>BingX</strong>, <strong>Bybit</strong>, <strong>MEXC</strong> yêu cầu xác minh danh tính (<b>KYC</b>) để đảm bảo tính bảo mật và chống gian lận khi hoàn phí. Việc này giúp:</p>
      <ul style="margin-left:20px; list-style:disc;">
        <li>Bảo vệ tài khoản người dùng khỏi hành vi gian lận.</li>
        <li>Xác định người thực nhận ưu đãi chính xác.</li>
        <li>Tăng hạn mức rút tiền và kích hoạt nhiều chương trình khuyến mãi khác.</li>
      </ul>

      <h2 style="margin-top:24px; font-size:1.4rem; color:#1d4ed8;">⚙️ Cách nhận hoàn phí giao dịch</h2>
      <ol style="margin-left:20px; list-style:decimal;">
        <li>Đăng ký tài khoản qua liên kết hoặc mã giới thiệu của đối tác hoàn phí (ví dụ: <b>DUCDIEN8386</b>).</li>
        <li>Hoàn tất KYC để kích hoạt quyền hoàn phí.</li>
        <li>Giao dịch như bình thường và hệ thống sẽ tự động hoàn phí.</li>
      </ol>

      <div style="text-align:center; margin:24px 0;">
       
        <p style="font-size:0.9rem; color:#4b5563; margin-top:4px;">Ví dụ: Sàn BingX hoàn tới 50% phí giao dịch cho người dùng mới</p>
      </div>

      <h2 style="margin-top:24px; font-size:1.4rem; color:#1d4ed8;">🚀 Bắt đầu nhận hoàn phí ngay hôm nay</h2>
      <p>Thay vì để phí giao dịch "bốc hơi", bạn hoàn toàn có thể biến chúng thành lợi nhuận thực tế. Chỉ cần vài phút để đăng ký và kích hoạt ưu đãi, bạn sẽ nhận được phần hoàn phí tự động mỗi ngày.</p>

      <div style="margin-top:20px; text-align:center;">
        <button style="background:linear-gradient(90deg,#22c55e,#16a34a); color:#fff; padding:10px 24px; border:none; border-radius:8px; font-weight:600; cursor:pointer;">
          ĐĂNG KÝ NGAY ĐỂ NHẬN HOÀN PHÍ
        </button>
      </div>

      <p style="margin-top:24px; color:#4b5563; font-size:0.95rem;">
        #Crypto #HoànPhí #TradingFee #Cashback #BingX #Bybit #MEXC #Blog
      </p>
    </div>
  `,
},

  {
    id: 3,
    title: "TOP CÁC SÀN HỖ TRỞ HOÀN PHÍ GIAO DỊCH 2025",
    description:
      "Tổng hợp các sàn giao dịch hỗ trợ hoàn phí tốt nhất năm 2025 giúp bạn tối ưu lợi nhuận khi trade.",
    imgSrc:
      "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien3-20250501173033-wwcal.png",
    content: `
      <h2>🏆 1. Mexc</h2>
      <p>Hoàn 50% phí cho người dùng mới. Giao diện thân thiện, hỗ trợ nhiều cặp giao dịch.</p>
      <p>Nhiều cặp giao dịch không mất phí,đòn bẩy x150 .</p> 
      <h2>💰 2. Binance</h2>
      <p>Hoàn 25% phí khi sử dụng BNB, phù hợp với trader chuyên nghiệp.</p>
      <h2>🚀 3. Bingx</h2>
      <p>Thường xuyên có các chiến dịch hoàn phí và thưởng giao dịch hấp dẫn.</p>

      <blockquote style="border-left:4px solid #f97316; background:#fff7ed; padding:12px; border-radius:8px; font-style:italic;">
        "Lựa chọn sàn phù hợp giúp bạn tiết kiệm hàng triệu đồng phí giao dịch mỗi tháng."
      </blockquote>
    `,
  },
  {
    id: 4,
    title: "CẤP VỐN 1M2 TÀI KHOẢN MỚI",
    description:
      "ATX là sàn giao dịch tại Việt Nam ,giao dịch mượt mà dễ tiếp cận cho người mới.",
    imgSrc: newsATX,
    content: `
      <h2>📌 Giới thiệu Atx</h2>
      <p><strong>ATX</strong> là sàn giao dịch tại Việt Nam ,giao dịch mượt mà dễ tiếp cận cho người mới..</p>
      <p>Đăng ký tài khoản qua mã giới thiệu <strong>25514969</strong> để nhận ưu đãi hấp dẫn.</p>
      Link đăng ký : <a href="https://attlas.io/r/25514969" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://www.atx.com/register?inviteCode=DUCDIEN8386</a>
      <div style="text-align:center; margin: 16px 0;">
      </div>
      <h2>💵 Cấp Voucher trải nghiệm</h2>
      <ul>
        <li>Lãi rút về tài khoản</li>
        <li>Ưu đãi thêm khi người mới tham gia đăng ký</li>
      </ul>

      <div style="text-align:center; margin:20px 0;">
      
      </div>

      <h2>📈 Ưu điểm</h2>
      <ul>
        <li>Phí thấp, tốc độ giao dịch nhanh.</li>
        <li>Đa dạng coin và sản phẩm.</li>
        <li>Bảo mật hàng đầu.</li>
      </ul>

      <blockquote style="border-left:4px solid #eab308; background:#fefce8; padding:12px; border-radius:8px; font-style:italic;">
        "ATX phù hợp cho cả người mới lẫn trader chuyên nghiệp."
      </blockquote>

      <h2>📞 Hỗ trợ</h2>
      <p>Liên hệ <strong>DUCDIENHOANPHI</strong> để nhận hướng dẫn chi tiết về chương trình hoàn phí.</p>
    `,
  },
];

// Component cho comment với tính năng like và cảm xúc - ĐÃ CHỈNH SỬA
const Comment = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);

  const reactions = [
    { emoji: "👍", label: "Like" },
    { emoji: "❤️", label: "Love" },
    { emoji: "😂", label: "Haha" },
    { emoji: "😮", label: "Wow" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😡", label: "Angry" }
  ];

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
      setSelectedReaction(null);
    }
  };

  const handleReaction = (reaction) => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
    setSelectedReaction(reaction);
    setShowReactions(false);
  };

  return (
    <div className="border border-slate-200 rounded-2xl p-5 shadow-sm bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300">
      {/* Header với avatar và thông tin - CHỈNH LẠI ALIGNMENT */}
      <div className="flex items-start gap-3.5 mb-4">
        <div className="flex-shrink-0">
          <img
            src={comment.avatar}
            alt="avatar"
            className="w-11 h-11 rounded-full border-2 border-blue-100 object-cover shadow-sm"
          />
        </div>
        <div className="flex-1 min-w-0">
          {/* Căn chỉnh tên và ngày theo chiều ngang */}
          <div className="flex items-center gap-2 mb-1.5">
            <p className="font-semibold text-slate-800 text-[15px]">{comment.name}</p>
            <span className="text-slate-300">•</span>
            <p className="text-xs text-slate-500">{comment.date}</p>
          </div>
          {/* Nội dung comment */}
          <p className="text-slate-700 leading-relaxed text-[15px]">{comment.text}</p>
        </div>
      </div>

      {/* Like và Reactions - CĂNG THEO ML CỦA AVATAR */}
      <div className="flex items-center gap-4 ml-[50px] relative">
        <div 
          className="relative"
          onMouseEnter={() => setShowReactions(true)}
          onMouseLeave={() => setShowReactions(false)}
        >
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              liked
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            {selectedReaction ? (
              <span className="text-lg leading-none">{selectedReaction.emoji}</span>
            ) : (
              <span className={`text-lg leading-none ${liked ? "text-blue-600" : ""}`}>👍</span>
            )}
            <span className="font-semibold">{likeCount}</span>
          </button>

          {/* Reactions popup */}
          {showReactions && (
            <div className="absolute bottom-full left-0 mb-2 bg-white rounded-full shadow-xl border border-slate-200 px-2 py-2 flex gap-1 animate-fade-in z-10">
              {reactions.map((reaction) => (
                <button
                  key={reaction.label}
                  onClick={() => handleReaction(reaction)}
                  className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-slate-100 transition-all duration-200 hover:scale-125"
                  title={reaction.label}
                >
                  <span className="text-xl leading-none">{reaction.emoji}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="text-slate-600 hover:text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-50 transition-all duration-200">
          💬 Trả lời
        </button>
      </div>
    </div>
  );
};

const NewsPage = () => {
  const { id } = useParams();
  const newsItem = newsList.find((item) => item.id.toString() === id);
  
  // State cho zoom ảnh
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Danh sách ảnh hoa hồng - CHỈ 3 ảnh
  const commissionImages = [
    { src: '/hh1.jpg', title: 'Hoa Hồng Cấp 1', desc: 'Lên đến 40% hoa hồng' },
    { src: '/hh2.jpg', title: 'Hoa Hồng Cấp 2', desc: 'Lên đến 25% hoa hồng' },
    { src: '/hh3.jpg', title: 'Hoa Hồng Đặc Biệt', desc: 'Bonus thêm 10%' }
  ];
  
  // Auto slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % commissionImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const openImageGallery = (index) => {
    setCurrentImageIndex(index);
    setZoomedImage(commissionImages[index].src);
    document.body.style.overflow = 'hidden';
  };
  
  const closeImageGallery = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % commissionImages.length;
    setCurrentImageIndex(newIndex);
    setZoomedImage(commissionImages[newIndex].src);
  };
  
  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + commissionImages.length) % commissionImages.length;
    setCurrentImageIndex(newIndex);
    setZoomedImage(commissionImages[newIndex].src);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeImageGallery();
  };

  useEffect(() => {
    if (zoomedImage) {
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [zoomedImage, currentImageIndex]);

  // Dữ liệu comment mẫu
  const [comments] = useState([
    {
      id: 1,
      name: "Minh Trí",
      avatar: "https://i.pravatar.cc/40?img=5",
      date: "12/10/2025",
      text: "Bài viết rất chi tiết! Mình từng không để ý tới hoàn phí, giờ thấy tiết kiệm được kha khá. Cảm ơn tác giả!",
      likes: 12
    },
    {
      id: 2,
      name: "Thảo Vy",
      avatar: "https://i.pravatar.cc/40?img=8",
      date: "13/10/2025",
      text: "Mình mới biết hoàn phí có thể nhận bằng USDT, khá hay. BingX đúng là chơi lớn thật!",
      likes: 8
    },
    {
      id: 3,
      name: "Đức Anh",
      avatar: "https://i.pravatar.cc/40?img=12",
      date: "14/10/2025",
      text: "Mong sàn Bybit cũng có chương trình hoàn 50% như BingX 😄 Cảm ơn web đã chia sẻ.",
      likes: 15
    }
  ]);

  if (!newsItem)
    return (
      <div className="max-w-4xl mx-auto mt-24 p-6 text-center text-red-500 text-lg">
        ❌ Bài viết không tồn tại
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto mt-24 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Modal Gallery Zoom Ảnh */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-98 z-50 flex items-center justify-center p-4"
          onClick={closeImageGallery}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 text-white text-3xl hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300 z-20 flex items-center justify-center"
            onClick={closeImageGallery}
          >
            ✕
          </button>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white bg-opacity-20 hover:bg-opacity-40 text-white text-3xl rounded-full transition-all duration-300 z-20 flex items-center justify-center backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white bg-opacity-20 hover:bg-opacity-40 text-white text-3xl rounded-full transition-all duration-300 z-20 flex items-center justify-center backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              key={currentImageIndex}
              src={zoomedImage}
              alt={commissionImages[currentImageIndex].title}
              className="max-w-[90%] max-h-[85vh] object-contain animate-slide-in shadow-2xl rounded-lg"
            />
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 backdrop-blur-md px-6 py-4 rounded-xl text-center animate-fade-in">
              <h3 className="text-white text-xl font-bold mb-1">
                {commissionImages[currentImageIndex].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {commissionImages[currentImageIndex].desc}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                {currentImageIndex + 1} / {commissionImages.length}
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 backdrop-blur-md p-2 rounded-full">
            {commissionImages.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                  setZoomedImage(img.src);
                }}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'border-white scale-110' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Nội dung chính */}
      <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
        <h1 className="text-3xl font-bold mb-3 text-slate-800">{newsItem.title}</h1>
        <p className="text-sm text-slate-500 mb-6">
          Đăng ngày 11/10/2025 • Tác giả:{" "}
          <span className="font-medium text-slate-700">Đức Diện</span>
        </p>
        <img
          src={newsItem.imgSrc}
          alt={newsItem.title}
          className="rounded-xl shadow-md mb-6 w-full object-cover"
        />

        {/* Banner Hoa Hồng - CHỈNH TÔNG MÀU */}
        <div className="mt-6 mb-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200 shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            🌹 Phí Giao Dịch Hoàn Lại 🌹
          </h3>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="flex gap-4 transition-transform duration-1000 ease-linear"
              style={{
                animation: 'scroll 15s linear infinite',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {[...commissionImages, ...commissionImages].map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80"
                >
                  <div 
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl border-2 border-blue-100 cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => openImageGallery(index % commissionImages.length)}
                  >
                    <div className="overflow-hidden rounded-lg mb-3 relative group">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white text-4xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                          🔍
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        💸 HOÀN PHÍ
                      </div>
                    </div>
                    <h4 className="font-bold text-center text-blue-700 text-lg mb-1">{img.title}</h4>
                    <p className="text-center text-slate-600 text-sm">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl">
              🎁 Tham Gia Ngay
            </button>
          </div>
        </div>

        <div
          className="prose max-w-none prose-blue prose-h2:text-xl prose-p:leading-relaxed prose-ul:list-disc prose-ol:list-decimal text-left news-content"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />

        {/* Tags - CHỈNH MÀU */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["#Crypto", "#HoànPhí", "#Blog"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bình luận - CHỈNH MÀU */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
            💬 Bình luận <span className="text-sm font-normal text-slate-500">({comments.length})</span>
          </h2>

          <div className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-200">
            <textarea
              className="w-full border border-slate-300 rounded-lg p-4 mb-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none bg-white transition-all duration-200"
              rows="3"
              placeholder="Chia sẻ suy nghĩ của bạn..."
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <button className="text-slate-500 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
                  📷 Ảnh
                </button>
                <button className="text-slate-500 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
                  😊 Cảm xúc
                </button>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                Đăng bình luận
              </button>
            </div>
          </div>

          {/* Danh sách comments */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar - CHỈNH MÀU */}
      <div className="space-y-6">
        {/* Tìm kiếm */}
        <div className="p-5 border border-slate-200 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              className="w-full border border-slate-300 px-4 py-2.5 rounded-lg pl-11 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            />
            <span className="absolute left-3.5 top-3 text-slate-400 text-lg">🔍</span>
          </div>
        </div>

        {/* Tin mới nhất */}
        <div className="p-5 border border-slate-200 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold mb-4 border-b border-slate-200 pb-3 text-slate-800">🆕 Tin mới nhất</h3>
          <ul className="space-y-3">
            {newsList.slice(0, 3).map((item) => (
              <li key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-3 hover:bg-slate-50 rounded-lg p-2.5 transition-all duration-200 group"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-lg border-2 border-slate-100 group-hover:border-blue-200 transition-colors duration-200"
                  />
                  <span className="text-sm text-slate-700 font-medium group-hover:text-blue-600 transition-colors duration-200">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tin nổi bật */}
        <div className="p-5 border border-slate-200 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold mb-4 border-b border-slate-200 pb-3 text-slate-800">🔥 Tin nổi bật</h3>
          <ul className="space-y-3">
            {newsList.slice(-2).map((item) => (
              <li key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-3 hover:bg-slate-50 rounded-lg p-2.5 transition-all duration-200 group"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-lg border-2 border-slate-100 group-hover:border-blue-200 transition-colors duration-200"
                  />
                  <span className="text-sm text-slate-700 font-medium group-hover:text-blue-600 transition-colors duration-200">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;