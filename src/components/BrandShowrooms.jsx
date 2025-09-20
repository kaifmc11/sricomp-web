import React, { useState, useEffect, useRef } from 'react';

// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

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

const BrandShowrooms = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollY = useParallax();

  const brands = [
    {
      name: 'Acer',
      title: 'Acer Showroom',
      description: 'Discover the latest Acer laptops, notebooks, tablets, and desktops designed for home and business excellence.',
      color: 'from-emerald-500 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-600/10',
      icon: '🖥️',
      features: ['Gaming Predator Series', 'Business TravelMate', 'Creative ConceptD']
    },
    {
      name: 'Asus',
      title: 'Asus Showroom',
      description: 'Experience cutting-edge ASUS technology with ROG gaming systems, ZenBooks, and professional workstations.',
      color: 'from-orange-500 via-red-500 to-pink-600',
      bgGradient: 'from-orange-500/10 via-red-500/10 to-pink-600/10',
      icon: '⚡',
      features: ['ROG Gaming Series', 'ZenBook Premium', 'ProArt Workstations']
    },
    {
      name: 'Lenovo',
      title: 'Lenovo Showroom',
      description: 'Explore reliable Lenovo ThinkPads, Legion gaming systems, and enterprise solutions for every professional need.',
      color: 'from-red-500 via-rose-500 to-pink-600',
      bgGradient: 'from-red-500/10 via-rose-500/10 to-pink-600/10',
      icon: '💼',
      features: ['ThinkPad Business', 'Legion Gaming', 'Yoga Convertibles']
    },
    {
      name: 'HP',
      title: 'HP Showroom',
      description: 'Discover HP\'s trusted computing solutions, premium Spectre series, and innovative workstations for professionals.',
      color: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-500/10 via-indigo-500/10 to-purple-600/10',
      icon: '🚀',
      features: ['Spectre Premium', 'EliteBook Business', 'OMEN Gaming']
    }
  ];

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-32 px-4 overflow-hidden">
      
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Enhanced Section Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center relative z-10">
        <h2 className={`text-5xl md:text-7xl font-black mb-8 transition-all duration-1500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'
        }`}>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Brand Showrooms
          </span>
        </h2>
        
        <div className={`transition-all duration-1500 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4 leading-relaxed">
            Explore our premium collection from the world's leading laptop manufacturers
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Enhanced Brand Cards Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group relative transition-all duration-1500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced Card Container */}
              <div className="relative h-96 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-700 
                group-hover:scale-105 group-hover:-rotate-1 group-hover:shadow-2xl">
                
                {/* Animated Background with Mesh Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.bgGradient} backdrop-blur-sm transition-all duration-700`}>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 group-hover:from-white/10"></div>
                </div>

                {/* Enhanced Glowing Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${brand.color} p-0.5 opacity-0 
                  group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse`}>
                  <div className="w-full h-full bg-gray-900/95 rounded-3xl"></div>
                </div>

                {/* Enhanced Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${2 + Math.random() * 3}px`,
                        height: `${2 + Math.random() * 3}px`,
                        background: `hsl(${180 + Math.random() * 100}, 70%, 60%)`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced Content Layout */}
                <div className="relative z-20 h-full flex flex-col p-8">
                  
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${brand.color} text-white font-bold text-sm 
                      transform transition-all duration-500 group-hover:scale-110`}>
                      {brand.name}
                    </div>
                    <div className="text-4xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                      {brand.icon}
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent 
                      group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 
                      group-hover:bg-clip-text transition-all duration-700">
                      {brand.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-300 group-hover:text-white text-base leading-relaxed 
                      transition-all duration-500">
                      {brand.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {brand.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center text-sm text-gray-400 group-hover:text-gray-200 
                          transition-all duration-500 opacity-0 group-hover:opacity-100 transform 
                          translate-x-4 group-hover:translate-x-0`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${brand.color} mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -skew-x-12 
                  group-hover:animate-pulse rounded-3xl"></div>
              </div>

              {/* Enhanced Card Glow Shadow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${brand.color} blur-2xl 
                opacity-0 group-hover:opacity-30 transition-all duration-700 -z-10 scale-90 
                group-hover:scale-105`}></div>
              
              {/* Secondary Glow Ring */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${brand.color} blur-3xl 
                opacity-0 group-hover:opacity-10 transition-all duration-1000 -z-20 scale-75 
                group-hover:scale-110`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`text-center mt-20 transition-all duration-1500 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="inline-flex items-center space-x-2 text-gray-400 group cursor-pointer">
          <span className="text-sm group-hover:text-white transition-colors">Explore More</span>
          <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrandShowrooms;