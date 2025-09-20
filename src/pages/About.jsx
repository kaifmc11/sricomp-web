import { FaTag, FaGift, FaLaptop, FaTools, FaShieldAlt, FaClock } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export default function About() {
  const [visibleElements, setVisibleElements] = useState(new Set());

  const features = [
    {
      icon: FaTag,
      title: "Best Prices",
      description: "Competitive pricing on all Dell & Lenovo products with transparent, no-hidden-cost policy"
    },
    {
      icon: FaGift,
      title: "Exclusive Offers",
      description: "Special discounts, seasonal deals, and bundle packages for maximum value on your purchase"
    },
    {
      icon: FaLaptop,
      title: "Authorized Dealer",
      description: "Official Dell & Lenovo partner ensuring genuine products with full manufacturer warranty"
    },
    {
      icon: FaTools,
      title: "Expert Services",
      description: "Professional repair, upgrade, and maintenance services for all laptop brands and models"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description: "Rigorous quality checks and comprehensive after-sales support for customer satisfaction"
    },
    {
      icon: FaClock,
      title: "Quick Support",
      description: "Fast turnaround times for repairs and prompt customer service for all your tech needs"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all elements with IDs
    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in-left {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          opacity: 0;
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          opacity: 0;
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          opacity: 0;
          animation: fadeInScale 0.7s ease-out forwards;
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          line-height: 1.2;
          padding: 0.1em 0;
        }
        
        .feature-card {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-card.visible:nth-child(1) { transition-delay: 0.1s; }
        .feature-card.visible:nth-child(2) { transition-delay: 0.2s; }
        .feature-card.visible:nth-child(3) { transition-delay: 0.3s; }
        .feature-card.visible:nth-child(4) { transition-delay: 0.4s; }
        .feature-card.visible:nth-child(5) { transition-delay: 0.5s; }
        .feature-card.visible:nth-child(6) { transition-delay: 0.6s; }

        /* Immediate visibility for hero section */
        #animate-hero {
          opacity: 1;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
        {/* Hero Section - Always visible immediately */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          
          {/* Hero Title - Visible immediately */}
          <div id="animate-hero" className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] text-shadow">
              About{" "}
              <span className="gradient-text">
                Sri Com
              </span>
              <span className="gradient-text">
                puters
              </span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Your trusted technology partner in Pondicherry, specializing in premium Dell & Lenovo products 
              with exceptional service and unbeatable value.
            </p>
          </div>

          {/* Image Section */}
          <div 
            id="animate-image" 
            className={`mb-20 ${visibleElements.has('animate-image') ? 'animate-slide-in-left' : ''}`}
          >
            <div className="relative mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-all duration-700"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Modern laptops showcase - Dell & Lenovo premium collection at Sri Computers"
                  className="w-full h-48 sm:h-72 md:h-96 lg:h-[600px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div 
            id="animate-description" 
            className={`text-center max-w-5xl mx-auto mb-20 ${visibleElements.has('animate-description') ? 'animate-slide-in-right' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight text-shadow">
              Premier Dell & Lenovo Store in{" "}
              <span className="gradient-text">
                Pondicherry
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 font-light px-4">
              Discover our extensive collection of laptops, desktops, gaming PCs, monitors, workstations, 
              and servers. Whether you're a student, professional, or business owner, we have the perfect 
              technology solution tailored to your needs and budget.
            </p>
          </div>

          {/* Features Section Header */}
          <div 
            id="animate-features-header" 
            className={`mb-16 ${visibleElements.has('animate-features-header') ? 'animate-fade-in-scale' : ''}`}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 text-shadow">
              Why Choose{" "}
              <span className="gradient-text">
                Sri Computers?
              </span>
            </h3>
          </div>

          {/* Features Grid */}
          <div id="animate-features" className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`feature-card group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 hover:border-blue-200 cursor-pointer ${
                    visibleElements.has('animate-features') ? 'visible' : ''
                  }`}
                >
                  <div className="flex items-center justify-center w-18 h-18 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <feature.icon className="w-9 h-9 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-center text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div 
            id="animate-services" 
            className={`mb-20 ${visibleElements.has('animate-services') ? 'animate-slide-in-left' : ''}`}
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 sm:p-12 lg:p-16 rounded-3xl text-white text-center max-w-6xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold mb-8">
                  Complete Technology Solutions
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-12 opacity-95 font-light">
                  Beyond sales, we provide comprehensive laptop repair services, hardware upgrades, 
                  spare parts replacement, and technical support for all major brands. Our certified 
                  technicians ensure your devices perform at their best.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                    <h4 className="font-bold text-xl mb-3">Repair Services</h4>
                    <p className="text-sm opacity-90">All brands supported</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                    <h4 className="font-bold text-xl mb-3">Hardware Upgrades</h4>
                    <p className="text-sm opacity-90">RAM, SSD, Graphics</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                    <h4 className="font-bold text-xl mb-3">Technical Support</h4>
                    <p className="text-sm opacity-90">Expert guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            id="animate-cta" 
            className={`text-center mt-20 ${visibleElements.has('animate-cta') ? 'animate-slide-in-right' : ''}`}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-shadow">
              Ready to Upgrade Your Tech?
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Visit our showroom in Pondicherry or contact us to explore our latest collection 
              and find the perfect technology solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://share.google/7dQk5dOAMkeSGY7ET" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:-translate-y-1 inline-block"
              >
                Visit Our Store
              </a>
              <a 
                href="tel:+919994678486" 
                className="bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}