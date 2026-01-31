import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Contact({ open, onClose }) {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  const copy = async (text, label = "Đã sao chép") => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label}: ${text}`);
    } catch {
      toast.error("Không thể sao chép");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-[95vw] max-w-3xl rounded-3xl bg-white shadow-2xl ring-1 ring-black/5
          animate-[fadeIn_180ms_ease-out] 
        "
      >
        {/* Header gradient - PURPLE THEME */}
        <div 
          className="rounded-t-3xl px-6 py-5 text-white"
          style={{ background: 'linear-gradient(135deg, #674cdc 0%, #5a3ec9 50%, #4d30b6 100%)' }}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
              📞
            </div>
            <div>
              <h3 id="contact-title" className="text-xl font-semibold leading-tight">
                Liên hệ nhanh
              </h3>
              <p className="text-white/80 text-sm">
                Kết nối với đội ngũ chúng tôi qua các kênh bên dưới
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Telegram */}
            <ContactCard
              icon="👥"
              title="Nhóm / Community"
              subtitle="Telegram"
              main="https://t.me/vidhoanphi"
              actionHref="https://t.me/vidhoanphi"
              actionLabel="Mở Telegram"
              onCopy={() => copy("https://t.me/vidhoanphi", "Link Telegram")}
            />

            {/* Hotline */}
            <ContactCard
              icon="📞"
              title="Hotline"
              subtitle="Điện thoại"
              main="+84 96 542 7145"
              actionHref="tel:+84965427145"
              actionLabel="Gọi ngay"
              onCopy={() => copy("+84965427145", "Số điện thoại")}
            />

            {/* Zalo */}
            <ContactCard
              icon="💬"
              title="Zalo"
              subtitle="Chat nhanh"
              main="zalo.me/0965427145"
              actionHref="https://zalo.me/g/xfehbq386"
              actionLabel="Mở Zalo"
              onCopy={() => copy("https://zalo.me/g/xfehbq386", "Zalo")}
            >
              {/* QR (tuỳ chọn) – đặt ảnh public/img/zalo-qr.png nếu có */}
              <img
                src={`${process.env.PUBLIC_URL}/img/zalo-qr.png`}
                alt="QR Zalo"
                className="mt-3 h-24 w-24 rounded-lg ring-1 ring-slate-200 object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </ContactCard>

            {/* Email */}
            <ContactCard
              icon="✉️"
              title="Email"
              subtitle="Hỗ trợ"
              main="vidhoanphi@gmail.com"
              actionHref="mailto:vidhoanphi@gmail.com"
              actionLabel="Gửi email"
              onCopy={() => copy("vidhoanphi@gmail.com", "Email")}
            />
          </div>

          {/* Footer actions */}
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Đóng
            </button>
            <a
              href="https://t.me/vidhoanphi"
              target="_blank"
              rel="noreferrer"
              style={{ background: 'linear-gradient(to right, #674cdc, #5a3ec9)' }}
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Tham gia ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Card item */
function ContactCard({ icon, title, subtitle, main, actionHref, actionLabel, onCopy, children }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-slate-50 text-lg ring-1 ring-slate-200">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-wide text-slate-500">{subtitle}</p>
          <h4 className="truncate text-base font-semibold text-slate-900">{title}</h4>
          <p className="mt-1 truncate text-sm text-slate-700">{main}</p>

          <div className="mt-3 flex gap-2">
            <a
              href={actionHref}
              target={actionHref?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{ background: 'linear-gradient(to right, #674cdc, #5a3ec9)' }}
              className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
            >
              {actionLabel}
            </a>
            <button
              onClick={onCopy}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              Sao chép
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

/* Tailwind keyframe nhỏ cho fade-in (thêm vào globals.css nếu muốn mượt hơn)
@keyframes fadeIn{from{opacity:0;transform:translateY(4px) scale(.98)}to{opacity:1;transform:none}}
*/