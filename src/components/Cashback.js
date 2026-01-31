import React from 'react';
import { TrendingUp, Shield, Zap, Sparkles, CheckCircle2, Clock, Target, Gift } from 'lucide-react';

const Cashback = () => (
  <div className="section cashback relative overflow-hidden">
    {/* Subtle animated background */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none"></div>
    
    <div className="content max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10">
      
      {/* Cashback Introduction Section - New Design */}
      <div className="mb-20 animate-fadeInUp">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-bold tracking-wide uppercase text-blue-700">
              Về chúng tôi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Hoàn Phí Giao Dịch là gì?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tiết kiệm chi phí giao dịch, tối ưu lợi nhuận cho trader
          </p>
        </div>

        {/* Main Content - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Description */}
            <div className="prose prose-lg">
              <p className="text-slate-700 leading-relaxed mb-6">
                <strong className="text-slate-900">Hoàn Phí Giao Dịch</strong> là chương trình hoàn trả 
                một phần chi phí giao dịch (spread hoặc commission) cho nhà đầu tư Forex và Crypto 
                thông qua đối tác giới thiệu (IB) liên kết với sàn.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-blue-600">hoanphi.AI</strong> cung cấp dịch vụ hoàn phí 
                tự động, minh bạch và tối ưu, hợp tác với nhiều sàn giao dịch uy tín toàn cầu.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 h-full border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Hoàn phí cao nhất</h4>
                  <p className="text-sm text-slate-600">Lên đến 50% phí giao dịch</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 h-full border-2 border-transparent group-hover:border-teal-200 transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Không giới hạn</h4>
                  <p className="text-sm text-slate-600">Thời gian & số lượng giao dịch</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 h-full border-2 border-transparent group-hover:border-violet-200 transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Minh bạch 24/7</h4>
                  <p className="text-sm text-slate-600">Theo dõi mọi giao dịch</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 h-full border-2 border-transparent group-hover:border-pink-200 transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Ưu đãi độc quyền</h4>
                  <p className="text-sm text-slate-600">Bonus & quà tặng hấp dẫn</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <p className="text-sm text-slate-700">
                Chúng tôi cam kết trở thành <strong className="text-slate-900">người bạn đồng hành tin cậy</strong> giúp trader tối ưu chi phí
              </p>
            </div>
          </div>

          {/* Right - Visual Example */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Ví dụ hoàn phí</p>
                    <p className="text-2xl font-black">10,000 USDT</p>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
              </div>

              {/* Calculation */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-600">Khối lượng giao dịch</span>
                  <span className="font-bold text-slate-900">10,000 USDT</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-600">Phí giao dịch (0.05%)</span>
                  <span className="font-bold text-rose-500">-5.00 USDT</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Hoàn phí</span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 text-xs font-bold rounded-full">50%</span>
                  </div>
                  <span className="font-bold text-emerald-500">+2.50 USDT</span>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Phí thực tế</span>
                    <span className="text-2xl font-black text-blue-600">2.50 USDT</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Tiết kiệm được 50% chi phí!</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl p-4 shadow-xl text-white transform rotate-3 hover:rotate-0 transition-transform">
              <div className="text-3xl font-black">50%</div>
              <div className="text-xs opacity-90">Tiết kiệm</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-violet-400 to-purple-400 rounded-2xl p-4 shadow-xl text-white transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="text-3xl font-black">24h</div>
              <div className="text-xs opacity-90">Hoàn phí</div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with Background */}
     
    </div>

    {/* How to Register Section - FULL WIDTH WITH SOFT GRADIENT */}
    <section className="animate-slideIn py-20 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 via-violet-50/50 to-purple-50/50 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200 to-violet-200 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-gradient-to-br from-violet-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-15 animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border-2 border-blue-100/50">
              <Zap className="w-5 h-5 text-blue-500 animate-bounce" style={{animationDuration: '1.5s'}} />
              <span className="text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Quy trình đơn giản
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900">
              Cách Đăng Ký Hoàn Phí
            </h2>
            <p className="text-lg text-slate-800 max-w-2xl mx-auto font-semibold drop-shadow-sm">
              Chỉ 4 bước đơn giản để bắt đầu nhận hoàn phí
            </p>
          </div>

          {/* Steps Timeline with Enhanced Animations */}
          <div className="max-w-6xl mx-auto relative">
          {/* Background gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 rounded-3xl blur-3xl -z-10"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Connecting Lines (Desktop only) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
              <div className="relative h-full max-w-5xl mx-auto px-24">
                <div className="h-full bg-gradient-to-r from-blue-300 via-indigo-300 via-violet-300 to-purple-300 rounded-full animate-flowLine"></div>
              </div>
            </div>

            {/* Step 1 - Blue Theme */}
            <div className="relative group animate-stepBounceIn" style={{animationDelay: '0.1s'}}>
              <div className="text-center relative z-10">
                {/* Animated Step Circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  {/* Outer pulse rings */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-2xl opacity-20 animate-ping" style={{animationDuration: '3s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity"></div>
                  
                  {/* Main circle */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-400 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white">
                    <span className="text-3xl font-black animate-numberPop" style={{animationDelay: '0.3s'}}>1</span>
                  </div>
                  
                  {/* Orbiting sparkles */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s', animationDelay: '5s'}}>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-indigo-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Animated Icon Card */}
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg animate-float border-2 border-blue-100">
                  <span className="text-4xl animate-bounce" style={{animationDuration: '2s', animationDelay: '0.5s'}}>🌱</span>
                </div>

                {/* Content with slide-in animation */}
                <div className="animate-slideInUp" style={{animationDelay: '0.4s'}}>
                  <h3 className="font-black text-slate-900 mb-2 text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Đăng ký tài khoản
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Theo link giới thiệu để kích hoạt hoàn phí
                  </p>
                  
                  {/* Animated Tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-shadow group-hover:scale-105 duration-300">
                    <Clock className="w-4 h-4 animate-spin" style={{animationDuration: '3s'}} />
                    <span>2 phút</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Indigo Theme */}
            <div className="relative group animate-stepBounceIn" style={{animationDelay: '0.2s'}}>
              <div className="text-center relative z-10">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-violet-300 rounded-full blur-2xl opacity-20 animate-ping" style={{animationDuration: '3s', animationDelay: '0.3s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-violet-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity" style={{animationDelay: '0.3s'}}></div>
                  
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-purple-400 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white">
                    <span className="text-3xl font-black animate-numberPop" style={{animationDelay: '0.5s'}}>2</span>
                  </div>
                  
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s', animationDelay: '2s'}}>
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-indigo-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s', animationDelay: '7s'}}>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-violet-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                </div>

                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg animate-float border-2 border-indigo-100" style={{animationDelay: '0.2s'}}>
                  <span className="text-4xl animate-bounce" style={{animationDuration: '2s', animationDelay: '0.7s'}}>✨</span>
                </div>

                <div className="animate-slideInUp" style={{animationDelay: '0.6s'}}>
                  <h3 className="font-black text-slate-900 mb-2 text-xl bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Giao dịch tự do
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Trade như bình thường, không ràng buộc
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-shadow group-hover:scale-105 duration-300">
                    <TrendingUp className="w-4 h-4 animate-bounce" style={{animationDuration: '2s'}} />
                    <span>Không giới hạn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Violet Theme */}
            <div className="relative group animate-stepBounceIn" style={{animationDelay: '0.3s'}}>
              <div className="text-center relative z-10">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-300 to-purple-300 rounded-full blur-2xl opacity-20 animate-ping" style={{animationDuration: '3s', animationDelay: '0.6s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-300 to-purple-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity" style={{animationDelay: '0.6s'}}></div>
                  
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white">
                    <span className="text-3xl font-black animate-numberPop" style={{animationDelay: '0.7s'}}>3</span>
                  </div>
                  
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s', animationDelay: '4s'}}>
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-violet-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s', animationDelay: '9s'}}>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                </div>

                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg animate-float border-2 border-violet-100" style={{animationDelay: '0.4s'}}>
                  <span className="text-4xl animate-bounce" style={{animationDuration: '2s', animationDelay: '0.9s'}}>⚛️</span>
                </div>

                <div className="animate-slideInUp" style={{animationDelay: '0.8s'}}>
                  <h3 className="font-black text-slate-900 mb-2 text-xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Tự động tính toán
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Hệ thống tính phí hoàn định kỳ
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-600 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-shadow group-hover:scale-105 duration-300">
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span>Tự động</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Purple/Pink Theme */}
            <div className="relative group animate-stepBounceIn" style={{animationDelay: '0.4s'}}>
              <div className="text-center relative z-10">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-2xl opacity-20 animate-ping" style={{animationDuration: '3s', animationDelay: '0.9s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity" style={{animationDelay: '0.9s'}}></div>
                  
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white">
                    <span className="text-3xl font-black animate-numberPop" style={{animationDelay: '0.9s'}}>4</span>
                  </div>
                  
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s', animationDelay: '6s'}}>
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s', animationDelay: '11s'}}>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-pink-300 rounded-full -ml-1 shadow-lg animate-pulse"></div>
                  </div>
                </div>

                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg animate-float border-2 border-purple-100" style={{animationDelay: '0.6s'}}>
                  <span className="text-4xl animate-bounce" style={{animationDuration: '2s', animationDelay: '1.1s'}}>💰</span>
                </div>

                <div className="animate-slideInUp" style={{animationDelay: '1s'}}>
                  <h3 className="font-black text-slate-900 mb-2 text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Nhận hoàn phí
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Tiền về tài khoản, rút hoặc giao dịch ngay
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-shadow group-hover:scale-105 duration-300">
                    <Gift className="w-4 h-4 animate-bounce" style={{animationDuration: '1.5s'}} />
                    <span>Trong 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        </div>
      </section>

      {/* Enhanced CSS Styles */}
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes stepBounceIn {
        0% {
          opacity: 0;
          transform: translateY(60px) scale(0.8);
        }
        60% {
          opacity: 1;
          transform: translateY(-10px) scale(1.05);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes numberPop {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.3);
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes flowLine {
        0% {
          background-position: 0% 50%;
        }
        100% {
          background-position: 200% 50%;
        }
      }

      @keyframes ping {
        75%, 100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }

      .animate-slideIn {
        animation: fadeInUp 1s ease-out 0.2s forwards;
        opacity: 0;
      }

      .animate-stepBounceIn {
        animation: stepBounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        opacity: 0;
      }

      .animate-numberPop {
        animation: numberPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        display: inline-block;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-slideInUp {
        animation: slideInUp 0.6s ease-out forwards;
        opacity: 0;
      }

      .animate-flowLine {
        background-size: 200% 100%;
        animation: flowLine 3s linear infinite;
      }

      .animate-ping {
        animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }

      .prose {
        max-width: none;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .animate-spin {
        animation: spin 1s linear infinite;
      }

      @keyframes bounce {
        0%, 100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }

      .animate-bounce {
        animation: bounce 1s infinite;
      }
    `}</style>
  </div>
);

export default Cashback;