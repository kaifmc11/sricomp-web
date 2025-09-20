import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import Nav from "./Nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "shadow-2xl bg-white/90 backdrop-blur-2xl border-b border-gray-100/60"
            : "shadow-xl bg-white"
        }`}
        style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}
      >
        {/* Top Bar */}
        <div
          className={`relative overflow-hidden transition-all duration-500 ease-in-out transform-gpu ${
            scrolled ? "h-0 opacity-0 translate-y-[-100%]" : "h-auto opacity-100 translate-y-0"
          }`}
        >
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900"></div>
          
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-purple-600/30 animate-pulse"></div>
          
          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M0,10 Q25,0 50,10 T100,10" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" className="animate-pulse" />
            </svg>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + i * 0.5}s`,
                }}
              />
            ))}
          </div>

          <div
            className={`max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
              scrolled ? "py-0" : "py-4"
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Contact info with premium styling */}
              <div className="flex flex-row flex-wrap gap-6 sm:gap-8 items-center justify-center w-full lg:w-auto">
                <a
                  href="mailto:sricomputerspondy@gmail.com"
                  className="group flex items-center gap-4 hover:text-red-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-pink-500/40 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                    <div className="relative p-3 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl border border-red-300/20 group-hover:from-red-400/30 group-hover:to-pink-400/30 group-hover:border-red-300/40 transition-all duration-300">
                      <FaEnvelope className="text-red-300 text-base group-hover:text-red-100" />
                    </div>
                  </div>
                  <span className="font-medium text-base text-gray-100 group-hover:text-red-100 tracking-wide" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    sricomputerspondy@gmail.com
                  </span>
                </a>
                
                <a
                  href="tel:9994678486"
                  className="group flex items-center gap-4 hover:text-green-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                    <div className="relative p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-300/20 group-hover:from-green-400/30 group-hover:to-emerald-400/30 group-hover:border-green-300/40 transition-all duration-300">
                      <FaPhone className="text-green-300 text-base group-hover:text-green-100" />
                    </div>
                  </div>
                  <span className="font-medium text-base text-gray-100 group-hover:text-green-100 tracking-wide" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    +91 99946 78486
                  </span>
                </a>
              </div>

              {/* Enhanced social icons */}
              <div className="flex gap-3 justify-center">
                {[
                  {
                    icon: FaYoutube,
                    color: "text-red-300 group-hover:text-red-100",
                    bg: "from-red-500/20 to-red-600/20 group-hover:from-red-400/30 group-hover:to-red-500/30",
                    border: "border-red-300/20 group-hover:border-red-300/40",
                    shadow: "from-red-500/40 to-red-600/40",
                    href: "https://youtube.com/@sritechtamil7820?si=J1W-I_AXqjVAb-Rb",
                  },
                  {
                    icon: FaInstagram,
                    color: "text-pink-300 group-hover:text-pink-100",
                    bg: "from-pink-500/20 to-purple-500/20 group-hover:from-pink-400/30 group-hover:to-purple-400/30",
                    border: "border-pink-300/20 group-hover:border-pink-300/40",
                    shadow: "from-pink-500/40 to-purple-500/40",
                    href: "https://www.instagram.com/sricomputers?igsh=NjU5cDU0c3g1MnQ=",
                  },
                  {
                    icon: FaWhatsapp,
                    color: "text-green-300 group-hover:text-green-100",
                    bg: "from-green-500/20 to-emerald-500/20 group-hover:from-green-400/30 group-hover:to-emerald-400/30",
                    border: "border-green-300/20 group-hover:border-green-300/40",
                    shadow: "from-green-500/40 to-emerald-500/40",
                    href: "https://wa.me/919994678486",
                  },
                  {
                    icon: FaFacebook,
                    color: "text-blue-300 group-hover:text-blue-100",
                    bg: "from-blue-500/20 to-blue-600/20 group-hover:from-blue-400/30 group-hover:to-blue-500/30",
                    border: "border-blue-300/20 group-hover:border-blue-300/40",
                    shadow: "from-blue-500/40 to-blue-600/40",
                    href: "https://www.facebook.com/share/1BDAT367bW/",
                  },
                ].map(({ icon: Icon, color, bg, border, shadow, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-2xl bg-gradient-to-br ${bg} ${color} border ${border} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${shadow} rounded-2xl blur-sm group-hover:blur-md opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                    <div className="relative">
                      <Icon className="text-base" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <Nav scrolled={scrolled} />

        {/* Enhanced custom CSS */}
        <style>{`
          @keyframes floatUp {
            0% { opacity: 0; transform: translateY(20px); }
            50% { opacity: 1; transform: translateY(-10px); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .animate-float {
            animation: floatUp 3s ease-in-out infinite;
          }
          
          /* Smooth scrolling enhancements */
          html {
            scroll-behavior: smooth;
          }
          
          /* Enhanced backdrop blur for supported browsers */
          @supports (backdrop-filter: blur(20px)) {
            .backdrop-blur-2xl {
              backdrop-filter: blur(20px) saturate(1.2);
            }
          }
          
          /* Letter spacing adjustments */
          .tracking-wide {
            letter-spacing: 0.025em;
          }
          
          /* Premium shadows */
          .shadow-premium {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </header>
    </>
  );
}