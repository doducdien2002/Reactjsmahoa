import React from 'react';

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
    {/* Animated Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
      {/* Main Content */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">
        
        {/* Cột 1 - Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">V</span>
            </div>
            <h3 className="text-2xl font-bold text-white">MAO HOÀN PHÍ</h3>
          </div>
          
          <p className="text-gray-400 leading-relaxed">
            Nền tảng hoàn phí giao dịch hàng đầu, giúp bạn tối ưu hóa lợi nhuận từng giao dịch.
          </p>

          {/* Benefits */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <span className="text-lg">🎓</span>
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Tặng khóa học miễn phí
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <span className="text-lg">🎁</span>
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Tặng Voucher miễn phí
              </span>
            </div>
          </div>

          {/* Social Media */}
         
        </div>

        {/* Cột 2 - Dịch vụ */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            DỊCH VỤ
          </h3>
          <ul className="space-y-3">
            {[
              { name: 'Hoàn phí BingX', icon: '💰' },
              { name: 'Hoàn phí Bybit', icon: '💵' },
              { name: 'Hoàn phí MEXC', icon: '💸' },
              { name: 'Cấp vốn ATX', icon: '🎯' },
              { name: 'Khóa học Crypto', icon: '📚' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform">
                    {item.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 3 - Về chúng tôi */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            VỀ CHÚNG TÔI
          </h3>
          <ul className="space-y-3">
            {[
              { name: 'Giới thiệu', href: '#about' },
              { name: 'Tin tức', href: '#news' },
              { name: 'Hướng dẫn', href: '#guide' },
              { name: 'Câu hỏi thường gặp', href: '#faq' },
              { name: 'Chính sách bảo mật', href: '#privacy' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 4 - Liên hệ */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            LIÊN HỆ
          </h3>
          <ul className="space-y-4">
            {[
              { icon: '📍', text: 'Hà Nội, Việt Nam', color: 'text-red-400' },
              { icon: '📧', text: 'vidhoanphi@gmail.com', color: 'text-blue-400' },
              { icon: '📞', text: '+84 965427145', color: 'text-green-400' },
              { icon: '🌐', text: 'www.vidhoanphi.com', color: 'text-purple-400' },
            ].map((contact, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <span className="text-2xl group-hover:scale-125 transition-transform">
                  {contact.icon}
                </span>
                <span className={`text-gray-400 group-hover:${contact.color} transition-colors break-all`}>
                  {contact.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Newsletter */}
     
        </div>
      </div>

   
    </div>

    {/* Decorative Bottom Wave */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

    {/* Custom Styles */}
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
    `}</style>
  </footer>
);

export default Footer;