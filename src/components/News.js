import React from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import newsImg from '../assets/anhtintuc.png';
import newsATX from '../assets/atx.png';

// Import css của Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const newsList = [
  {
    id: 1,
    title: "HOÀN 50% PHÍ GIAO DỊCH SÀN BINGX",
    description: "Chỉ cần 1 bước đơn giản, bạn có thể nhận lại 50% phí giao dịch.",
    imgSrc: newsImg,
    category: "Khuyến mãi",
    date: "15/01/2026"
  },
  {
    id: 2,
    title: "HOÀN PHÍ GIAO DỊCH",
    description: "Đăng ký qua link của chúng tôi để nhận lại phí giao dịch nhanh chóng trong 24h.",
    imgSrc: "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien2-20250501170052-d4azq.png",
    category: "Tin tức",
    date: "12/01/2026"
  },
  {
    id: 3,
    title: "TỔNG HỢP CÁC SÀN HỖ TRỢ HOÀN PHÍ",
    description: "Danh sách các sàn đang hỗ trợ hoàn phí giao dịch.",
    imgSrc: "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien3-20250501173033-wwcal.png",
    category: "Hướng dẫn",
    date: "10/01/2026"
  },
  {
    id: 4,
    title: "CẤP VỐN 1M2 VOUCHER ATX",
    description: "Hỗ trợ voucher trải nghiệm tại Atx",
    imgSrc: newsATX,
    category: "Ưu đãi",
    date: "08/01/2026"
  },
];

const News = () => (
  <section id="news" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
    </div>

    {/* Animated Grid Pattern */}
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-full shadow-sm">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <span className="text-sm font-bold text-blue-700 tracking-widest uppercase">
            Tin tức & Cập nhật
          </span>
        </div>

        {/* Main Title */}
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
            Các Bài Viết
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mới Nhất
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cập nhật thông tin mới nhất về các chương trình hoàn phí và ưu đãi đặc biệt
          </p>
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
            1280: { slidesPerView: 4, spaceBetween: 32 },
          }}
          className="pb-4"
        >
          {newsList.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination mt-12 flex justify-center gap-2"></div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <span>Xem tất cả tin tức</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>

    {/* Custom Styles */}
    <style jsx>{`
      /* Custom Pagination Styles */
      .custom-pagination {
        position: relative;
      }

      .custom-pagination :global(.swiper-pagination-bullet) {
        width: 12px;
        height: 12px;
        background: #e5e7eb;
        opacity: 1;
        margin: 0 6px;
        border-radius: 50%;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
      }

      .custom-pagination :global(.swiper-pagination-bullet:hover) {
        background: #cbd5e1;
        transform: scale(1.2);
      }

      .custom-pagination :global(.swiper-pagination-bullet-active) {
        background: linear-gradient(135deg, #3b82f6, #6366f1);
        width: 32px;
        height: 12px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
      }

      /* Swiper Custom Styles */
      :global(.swiper-slide) {
        height: auto;
        display: flex;
      }

      /* Animation for cards entrance */
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      :global(.swiper-slide-visible) {
        animation: slideUp 0.6s ease-out;
      }
    `}</style>
  </section>
);

export default News;