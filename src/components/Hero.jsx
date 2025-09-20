import React, { useState, useEffect } from 'react';

// Smooth scroll hook for parallax effects
const useParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const scrollY = useParallax();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const heroElement = document.querySelector('.hero-container');
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timer);
      };
    }
    
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    const phoneNumber = "+919994678486";
    
    // Set clicked state for visual feedback
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    // Try to initiate phone call
    try {
      window.location.href = `tel:${phoneNumber}`;
    } catch (error) {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard!`);
      }).catch(() => {
        alert(`Call us at: ${phoneNumber}`);
      });
    }
  };

  return (
    <div className="hero-container relative h-screen w-full overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <div 
        className="absolute inset-0 opacity-90 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.4) 0%, 
            rgba(147, 51, 234, 0.4) 25%, 
            rgba(236, 72, 153, 0.4) 50%, 
            rgba(239, 68, 68, 0.3) 75%, 
            rgba(0, 0, 0, 0.9) 100%),
            linear-gradient(135deg, 
            rgba(30, 41, 59, 0.95) 0%, 
            rgba(15, 23, 42, 0.98) 100%)
          `,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 transition-all duration-1000"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `hsl(${200 + Math.random() * 160}, 70%, 60%)`,
              animation: `floatParticle ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Animated Brand Logos with Stagger */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        {['ACER', 'ASUS', 'DELL', 'HP', 'LENOVO'].map((brand, i) => (
          <div
            key={brand}
            className={`absolute text-white/10 font-black text-4xl md:text-6xl transition-all duration-2000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-32 scale-75'
            }`}
            style={{
              left: `${10 + i * 18}%`,
              top: `${15 + Math.sin(i * 0.8) * 25}%`,
              animation: `brandFloat ${5 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${-20 + i * 8}deg) ${isLoaded ? '' : 'translateY(32px) scale(0.75)'}`,
              transitionDelay: `${i * 200}ms`,
            }}
          >
            {brand}
          </div>
        ))}
      </div>

      {/* Enhanced Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse"
          style={{
            top: '20%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        <div 
          className="absolute w-32 h-32 bg-purple-500/25 rounded-full blur-xl animate-pulse"
          style={{
            top: '70%',
            right: '20%',
            animationDelay: '1.5s',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-pink-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '10%',
            left: '30%',
            animationDelay: '3s',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Main Content with Enhanced Animations */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <div className={`transition-all duration-2000 ease-out ${
          isLoaded 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95'
        }`}>
          
          {/* Enhanced Glowing Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative">
              <span className="block mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Welcome to
              </span>
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 blur-2xl opacity-60 animate-pulse"></span>
                <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent font-black tracking-tight">
                  Sri Computers
                </span>
              </span>
            </h1>
          </div>

          {/* Enhanced Subtitle with Staggered Brand Pills */}
          <div className={`mb-12 transition-all duration-2000 ease-out delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p className="text-xl md:text-3xl mb-8 font-light text-gray-200 tracking-wide">
              Premium Laptop Dealer in 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> Pondicherry</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
              {['Acer', 'Asus', 'Dell', 'HP', 'Lenovo'].map((brand, i) => (
                <span
                  key={brand}
                  className={`px-6 py-3 rounded-2xl border border-white/20 backdrop-blur-md bg-white/5 
                    transition-all duration-1000 ease-out hover:bg-white/15 hover:scale-110 hover:border-white/40
                    hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer group ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${500 + i * 150}ms`,
                    animation: `brandPulse ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`
                  }}
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {brand}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button with Click Functionality */}
          <div className={`mb-16 transition-all duration-2000 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
            <button 
              onClick={handleContactClick}
              className={`group relative px-10 py-5 text-lg font-bold text-white overflow-hidden rounded-3xl 
                transition-all duration-500 hover:scale-110 active:scale-95 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/30
                ${isClicked ? 'scale-95' : ''} cursor-pointer`}
            >
              
              {/* Enhanced Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl 
                transition-all duration-500 group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-500"></div>
              
              {/* Animated Border Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-0.5 
                opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500" style={{ animationDuration: '3s' }}>
                <div className="w-full h-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl"></div>
              </div>

              {/* Button Content */}
              <div className="relative flex items-center space-x-4">
                <svg className="w-7 h-7 group-hover:animate-bounce transition-all duration-300 group-hover:scale-110" 
                  fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="text-left">
                  <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">Contact Us</div>
                  <div className="font-mono text-xl group-hover:scale-105 transition-transform">+91 9994678486</div>
                </div>
              </div>

              {/* Enhanced Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 
                group-hover:animate-pulse rounded-3xl"></div>
                
              {/* Click Ripple Effect */}
              <div className={`absolute inset-0 bg-white/20 rounded-3xl transition-all duration-200 ${
                isClicked ? 'animate-ping' : 'scale-0 opacity-0'
              }`}></div>
            </button>
          </div>

          {/* Enhanced Stats Section */}
          <div className={`flex flex-wrap justify-center gap-12 transition-all duration-2000 ease-out delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {[
              { number: '1000+', label: 'Happy Customers' },
              { number: '5+', label: 'Top Brands' },
              { number: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer transition-all duration-500 hover:scale-125" 
                style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300 group-hover:text-white group-hover:font-semibold 
                  transition-all duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-30px) translateX(10px) rotate(90deg); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(-10px) rotate(180deg); opacity: 0.6; }
          75% { transform: translateY(-40px) translateX(5px) rotate(270deg); opacity: 0.3; }
        }
        @keyframes brandFloat {
          0%, 100% { transform: translateY(0px) rotate(-20deg); opacity: 0.1; }
          33% { transform: translateY(-25px) rotate(-15deg); opacity: 0.2; }
          66% { transform: translateY(-10px) rotate(-25deg); opacity: 0.15; }
        }
        @keyframes brandPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          50% { box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.1); }
        }
      `}</style>
    </div>
  );
};

export default Hero;