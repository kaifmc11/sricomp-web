import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane, FaComments } from 'react-icons/fa';

export default function ContactHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      content: 'Pondicherry',
      description: 'Visit our office',
      gradient: 'from-purple-500 via-blue-500 to-indigo-600',
      glowColor: 'shadow-purple-500/25',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-blue-50',
      direction: 'left'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      content: 'sricomputerspondy@gmail.com',
      description: 'Drop us a line',
      href: 'mailto:sricomputerspondy@gmail.com',
      gradient: 'from-rose-500 via-pink-500 to-red-500',
      glowColor: 'shadow-pink-500/25',
      bgPattern: 'bg-gradient-to-br from-rose-50 to-pink-50',
      direction: 'up'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      content: '(+91) 9994678486',
      description: 'Quick support call',
      href: 'tel:+919994678486',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      glowColor: 'shadow-emerald-500/25',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-50',
      direction: 'right'
    }
  ];

  const getAnimationClass = (direction, index) => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'transform -translate-x-20 scale-95 opacity-0';
        case 'right':
          return 'transform translate-x-20 scale-95 opacity-0';
        case 'up':
          return 'transform translate-y-20 scale-95 opacity-0';
        default:
          return 'transform translate-y-20 scale-95 opacity-0';
      }
    }
    return 'transform translate-x-0 translate-y-0 scale-100 opacity-100';
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden min-h-screen flex items-center"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Enhanced Heading */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-12 opacity-0'
          }`}>
            <div className="relative inline-block mb-6">
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent relative z-10">
                Get In Touch
              </h2>
              <div className={`absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-lg opacity-20 transition-all duration-1000 ${
                isVisible ? 'scale-100' : 'scale-0'
              }`} style={{ transitionDelay: '400ms' }}></div>
            </div>
            
            <div className={`flex items-center justify-center space-x-2 mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
            </div>
          </div>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-6 opacity-0'
          }`}>
            Ready to transform your digital presence? Let's start a conversation that leads to extraordinary results.
          </p>
        </div>

        {/* Enhanced Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group relative ${getAnimationClass(card.direction, index)} transition-all duration-1000 ease-out`}
                style={{ transitionDelay: isVisible ? `${800 + index * 200}ms` : '0ms' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card container */}
                <div className={`relative overflow-hidden ${card.bgPattern} backdrop-blur-sm p-8 rounded-3xl border border-white/50 transition-all duration-700 group-hover:scale-105 ${isHovered ? `shadow-2xl ${card.glowColor}` : 'shadow-lg'}`}>
                  
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${card.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.3}s`,
                          animation: isHovered ? 'float 3s ease-in-out infinite' : 'none'
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="relative text-center">
                    {/* Enhanced Icon */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-125`}></div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-500 mb-4 font-medium">
                      {card.description}
                    </p>
                    
                    {/* Content */}
                    {card.href ? (
                      <a
                        href={card.href}
                        className={`inline-block bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent font-bold text-lg hover:scale-105 transition-all duration-300 hover:underline decoration-2 underline-offset-4`}
                      >
                        {card.content}
                      </a>
                    ) : (
                      <p className={`bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent font-bold text-lg`}>
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1400 ${
          isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-12 opacity-0'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50">
              <div className="flex items-center justify-center mb-6">
                <FaComments className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Ready to Connect?
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you have questions about our services, need technical support, or want to explore new opportunities — we're here to make it happen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:sricomputerspondy@gmail.com"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <FaEnvelope className="w-5 h-5" />
                    <span>Send Email</span>
                  </div>
                </a>
                
                <a
                  href="tel:+919994678486"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <FaPhone className="w-5 h-5" />
                    <span>Call Now</span>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 text-sm text-gray-500">
                <p>Response time: Usually within 2-4 hours during business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(180deg); 
          }
        }
      `}</style>
    </section>
  );
}