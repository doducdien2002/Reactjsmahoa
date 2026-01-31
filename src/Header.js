const Header=()=>{
    const Header = () => (
  <div className="section header">
    <div className="content">
<header className="bg-blue shadow-md fixed top-0 left-0 w-full z-50 animate-slideIn">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* Logo */}
    <div className="text-3xl font-extrabold text-accent-1 tracking-wide cursor-pointer hover:scale-105 transition">
      HOAN PHI CRYPTO
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex space-x-10">
      <a href="#" className="text-lg text-accent-1 hover:text-accent transition">Trang Chủ</a>
      <a href="#" className="text-lg text-accent-1 hover:text-accent transition">Về chúng tôi</a>
      <a href="#" className="text-lg text-accent-1 hover:text-accent transition">Tin Tức</a>
      <a href="#" className="text-lg text-accent-1 hover:text-accent transition">Đăng Ký</a>
      <a href="#" className="text-lg text-accent-1 hover:text-accent transition">Phản hồi</a>
    </nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button className="text-accent-1 focus:outline-none hover:text-accent transition">
        <svg xmlns="http://www.w3.org/2000/svg" 
             className="h-8 w-8" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</header>

    </div>
  </div>
);

}
export default NewsPage;