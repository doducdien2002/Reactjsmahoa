import React from "react";
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
      <p><strong>BingX</strong> là sàn giao dịch hàng đầu châu Á, triển khai chiến dịch <em>“Hoàn 50% phí giao dịch”</em> dành cho toàn bộ người dùng mới và cũ.</p>

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
        “Một bước đi chiến lược giúp BingX trở thành lựa chọn hàng đầu của trader khu vực châu Á.”
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
        “Hoàn phí giao dịch = nhận lại tiền thật từ chính những lệnh bạn đã thực hiện.”
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
        “Đối với trader chuyên nghiệp, hoàn phí không chỉ là phần thưởng mà là chiến lược giảm chi phí giao dịch thông minh.”
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
      <p>Thay vì để phí giao dịch “bốc hơi”, bạn hoàn toàn có thể biến chúng thành lợi nhuận thực tế. Chỉ cần vài phút để đăng ký và kích hoạt ưu đãi, bạn sẽ nhận được phần hoàn phí tự động mỗi ngày.</p>

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
    title: "TOP CÁC SÀN HỖ TRỢ HOÀN PHÍ GIAO DỊCH 2025",
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
        “Lựa chọn sàn phù hợp giúp bạn tiết kiệm hàng triệu đồng phí giao dịch mỗi tháng.”
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
        “ATX phù hợp cho cả người mới lẫn trader chuyên nghiệp.”
      </blockquote>

      <h2>📞 Hỗ trợ</h2>
      <p>Liên hệ <strong>DUCDIENHOANPHI</strong> để nhận hướng dẫn chi tiết về chương trình hoàn phí.</p>
    `,
  },
];

const NewsPage = () => {
  const { id } = useParams();
  const newsItem = newsList.find((item) => item.id.toString() === id);

  if (!newsItem)
    return (
      <div className="max-w-4xl mx-auto mt-24 p-6 text-center text-red-500 text-lg">
        ❌ Bài viết không tồn tại
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto mt-24 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Nội dung chính */}
      <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">{newsItem.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Đăng ngày 11/10/2025 • Tác giả:{" "}
          <span className="font-medium text-gray-700">Đức Diện</span>
        </p>
        <img
          src={newsItem.imgSrc}
          alt={newsItem.title}
          className="rounded-xl shadow-md mb-6 w-full object-cover"
        />

   <div
  className="prose max-w-none prose-blue prose-h2:text-xl prose-p:leading-relaxed prose-ul:list-disc prose-ol:list-decimal text-left news-content"
  dangerouslySetInnerHTML={{ __html: newsItem.content }}
/>
        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["#Crypto", "#HoànPhí", "#Blog"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bình luận */}
      {/* Bình luận */}
<div className="mt-10 border-t pt-6">
  <h2 className="text-xl font-semibold mb-4">💬 Bình luận</h2>

  <textarea
    className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-400"
    placeholder="Nhập bình luận của bạn..."
  />
  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
    Gửi bình luận
  </button>

  {/* Bình luận giả */}
  <div className="mt-6 space-y-5">
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50">
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">Minh Trí</p>
          <p className="text-xs text-gray-500">12/10/2025</p>
        </div>
      </div>
      <p className="text-gray-700">
        Bài viết rất chi tiết! Mình từng không để ý tới hoàn phí, giờ thấy tiết kiệm được kha khá. Cảm ơn tác giả!
      </p>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50">
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://i.pravatar.cc/40?img=8"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">Thảo Vy</p>
          <p className="text-xs text-gray-500">13/10/2025</p>
        </div>
      </div>
      <p className="text-gray-700">
        Mình mới biết hoàn phí có thể nhận bằng USDT, khá hay. BingX đúng là chơi lớn thật!
      </p>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50">
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">Đức Anh</p>
          <p className="text-xs text-gray-500">14/10/2025</p>
        </div>
      </div>
      <p className="text-gray-700">
        Mong sàn Bybit cũng có chương trình hoàn 50% như BingX 😄 Cảm ơn web đã chia sẻ.
      </p>
    </div>
  </div>
</div>

      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Tìm kiếm */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              className="w-full border px-3 py-2 rounded-lg pl-10 focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Tin mới nhất */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">🆕 Tin mới nhất</h3>
          <ul className="space-y-3">
            {newsList.slice(0, 3).map((item) => (
              <li key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <span className="text-sm text-gray-700 font-medium">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tin nổi bật */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">🔥 Tin nổi bật</h3>
          <ul className="space-y-3">
            {newsList.slice(-2).map((item) => (
              <li key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <span className="text-sm text-gray-700 font-medium">{item.title}</span>
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
