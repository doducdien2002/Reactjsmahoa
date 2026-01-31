// App.jsx
import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cashback from "./components/Cashback";
import News from "./components/News";
import Testimonials from "./components/Testimonials";
import NewsPage from "./components/NewsPage";
import Contact from "./components/contact";
import { Toaster } from "react-hot-toast";
import Bio from './components/bio';
import ContactWidget from "./components/ContactWidget";
import "./App.css";

// === HOME PAGE ===
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "news") {
      setTimeout(() => {
        document.getElementById("news")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Services />
      <Cashback />
      <section id="news">
        <News />
      </section>
      <Testimonials />
    </>
  );
};

// === LAYOUT CHUNG CHO CÁC TRANG KHÁC (CÓ HEADER + FOOTER) ===
const MainLayout = ({ children }) => {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setOpenContact(true)} />
      {children}
      <Footer />
      <ContactWidget />
      <Toaster position="bottom-center" reverseOrder={false} />
      <Contact open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
};

// === TRANG BIO: KHÔNG CÓ HEADER, FOOTER, WIDGET ===
const BioPage = () => {
  return <Bio />;
};

// === APP CHÍNH ===
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* CÁC TRANG DÙNG LAYOUT CHUNG */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/news" element={<MainLayout><News /></MainLayout>} />
          <Route path="/news/:id" element={<MainLayout><NewsPage /></MainLayout>} />
          <Route path="/testimonials" element={<MainLayout><Testimonials /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="*" element={<MainLayout><Home /></MainLayout>} />

          {/* TRANG BIO: HOÀN TOÀN RIÊNG BIỆT */}
          <Route path="/bio" element={<BioPage />} />
        </Routes>
      </div>
    </Router>
  );
}