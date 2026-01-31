import React from 'react';
import TestimonialCard from './TestimonialCard';
import nhansandy from '../assets/nhansandy.png';
import thayongnoi from '../assets/thayongnoi.png';
import thubeo from '../assets/thubeo.png';

const Testimonials = () => (
  <div className="relative py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    {/* Decorative Grid Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">
            Phản hồi khách hàng
          </span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300 leading-tight">
          Hơn 1K Người Dùng 
          <br />
          <span className="text-blue-400">Hài Lòng</span>
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Khám phá những trải nghiệm thực tế từ cộng đồng người dùng của chúng tôi
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <TestimonialCard 
          name="TRẦN VINH"
          quote="Giờ mình biết được hoàn phí giao dịch, đã giúp tôi lấy lại rất nhiều những khoản phí đóng mở lệnh, tôi trân trọng cảm ơn đội ngũ đã giúp tôi"
          date="24/04/2025"
          imgSrc={thayongnoi}
        />
        <TestimonialCard 
          name="NHÀN SANDY"
          quote="Cảm ơn đội ngũ hoàn phí đã hỗ trợ mình hoàn phí giao dịch trên các sàn giao dịch Crypto. Cảm ơn bạn nhiều lắm nhé!"
          date="20/03/2025"
          imgSrc={nhansandy}
        />
        <TestimonialCard 
          name="TIỂU THƯ HỌ PHẠM"
          quote="Tôi được người bạn giới thiệu qua bên bạn và tôi đã nhận được phí giao dịch, rất nhiều nhờ hoàn phí nhé. Share liền Telegram để mọi người cùng biết nha!"
          date="16/02/2025"
          imgSrc={thubeo}
        />
      </div>

      {/* Call to Action Section */}
      <div className="relative">
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Sẵn sàng bắt đầu?
              </h3>
              <p className="text-blue-100 text-lg">
                Tham gia cùng hàng nghìn người dùng khác ngay hôm nay
              </p>
            </div>

            {/* Input Group */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Nhập email hoặc số điện thoại"
                className="flex-1 min-w-[280px] px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
              />
              <button className="group relative px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  ĐĂNG KÝ NGAY
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="relative mt-10 pt-10 border-t border-white/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1K+</div>
                <div className="text-blue-100 text-sm md:text-base">Người dùng</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-blue-100 text-sm md:text-base">Hài lòng</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100 text-sm md:text-base">Hỗ trợ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Custom Animations */}
    <style jsx>{`
      @keyframes blob {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  </div>
);

export default Testimonials;