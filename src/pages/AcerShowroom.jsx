import React from 'react';
import Footer from '../components/Footer';
import { FaDesktop, FaLaptop,FaTabletAlt,FaStar,FaArrowRight, FaTv, FaMicrochip, FaMemory, FaHdd, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const AcerShowroom = () => {
  const laptops = [
    {
      id: 1,
      name: "Acer Predator Helios 300",
      image: "https://laptopmedia.com/wp-content/uploads/2019/04/Acer-predator-helios-300-PH315-52-4.jpg",
      price: "₹89,999",
      originalPrice: "₹99,999",
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      graphics: "RTX 4060 8GB",
      display: "15.6\" 144Hz",
      category: "Gaming"
    },
    {
      id: 2,
      name: "Acer Swift 3",
      image: "https://www.notebookcheck.net/uploads/tx_nbc2/AcerSwift3SF313-53__1_.JPG",
      price: "₹54,999",
      originalPrice: "₹64,999",
      processor: "AMD Ryzen 5 5500U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      graphics: "Radeon Graphics",
      display: "14\" Full HD IPS",
      category: "Ultrabook"
    },
    {
      id: 3,
      name: "Acer Aspire 7",
      image: "https://tse2.mm.bing.net/th/id/OIP.EZ0GdS2hYcmcCZK9ZxTLiAHaEo?pid=Api&P=0&h=180",
      price: "₹62,999",
      originalPrice: "₹72,999",
      processor: "Intel Core i5-12450H",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      graphics: "GTX 1650 4GB",
      display: "15.6\" Full HD",
      category: "Gaming"
    },
    {
      id: 4,
      name: "Acer Nitro 5",
      image: "https://www.laptopmedia.com/wp-content/uploads/2021/08/5-16.jpg",
      price: "₹76,999",
      originalPrice: "₹86,999",
      processor: "AMD Ryzen 7 5800H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      graphics: "RTX 3060 6GB",
      display: "15.6\" 144Hz",
      category: "Gaming"
    },
    {
      id: 5,
      name: "Acer TravelMate P2",
      image: "https://m.media-amazon.com/images/I/91eH7Vqm0EL._AC_SL1500_.jpg",
      price: "₹42,999",
      originalPrice: "₹49,999",
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      graphics: "Intel Iris Xe",
      display: "15.6\" Full HD",
      category: "Business"
    },
    {
      id: 6,
      name: "Acer ConceptD 3 Ezel",
      image: "https://www.notebookcheck.net/uploads/tx_nbc2/acer-conceptd-3-ezel-1200x800-1592978234_03.jpg",
      price: "₹1,24,999",
      originalPrice: "₹1,39,999",
      processor: "Intel Core i7-10750H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      graphics: "GTX 1650 Ti 4GB",
      display: "14\" 4K Touch",
      category: "Creator"
    }
  ];

  const productImages = [
    {
      title: "Gaming Laptops",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      description: "High-performance gaming machines"
    },
    {
      title: "Desktop PCs",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=300&fit=crop",
      description: "Powerful desktop computers"
    },
    {
      title: "Monitors",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      description: "Crystal clear displays"
    },
    {
      title: "All-in-One PCs",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop",
      description: "Space-saving solutions"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Gaming': 'bg-red-100 text-red-800',
      'Ultrabook': 'bg-blue-100 text-blue-800',
      'Business': 'bg-green-100 text-green-800',
      'Creator': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-700"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-bold mb-4 transform transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-[fadeInUp_1s_0.2s_forwards]">
            Acer Store Pondicherry
          </h1>
          <h2 className="text-3xl font-semibold mb-6 transform transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-[fadeInUp_1s_0.4s_forwards]">
            Shop Acer Products
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-[fadeInUp_1s_0.6s_forwards]">
            Buy all model Acer Laptop, Desktop, Monitors, All in One PC, & Accessories at Sri Computers, Pondicherry.
          </p>
          <div className="flex justify-center space-x-4 transform transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-[fadeInUp_1s_0.8s_forwards]">
            <a 
              href="https://maps.app.goo.gl/8AwTCo9u84anm3av6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Now
            </a>
            <a 
              href="tel:+919994678486"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productImages.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]" style={{ animationDelay: `${index * 0.2}s` }}>
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:from-black/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300">{product.title}</h3>
                <p className="text-sm opacity-90 transition-opacity duration-300 group-hover:opacity-100">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Laptops Section */}
      <div className="bg-white py-16 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 transition-colors duration-300 hover:text-blue-600">
              Acer Laptops
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 transition-colors duration-300">
              Most Searched Acer Laptops in Pondicherry
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Here are some of the most wanted Acer Laptops in Chennai. In our Store, you can find all kinds of Acer laptops to fit your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laptops.map((laptop, index) => (
              <div key={laptop.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden group opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={laptop.image} 
                    alt={laptop.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(laptop.category)} transition-all duration-300`}>
                      {laptop.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {laptop.name}
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-1">
                      <FaMicrochip className="w-4 h-4 mr-3 text-blue-500 transition-colors duration-300" />
                      <span className="font-medium">{laptop.processor}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-1">
                      <FaMemory className="w-4 h-4 mr-3 text-green-500 transition-colors duration-300" />
                      <span className="font-medium">{laptop.ram}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-1">
                      <FaHdd className="w-4 h-4 mr-3 text-purple-500 transition-colors duration-300" />
                      <span className="font-medium">{laptop.storage}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-1">
                      <FaTv className="w-4 h-4 mr-3 text-orange-500 transition-colors duration-300" />
                      <span className="font-medium">{laptop.display}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-1">
                      <FaDesktop className="w-4 h-4 mr-3 text-red-500 transition-colors duration-300" />
                      <span className="font-medium">{laptop.graphics}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 transition-colors duration-300">
                    <div className="text-center">
                      <div className="mb-2">
                        <span className="text-2xl font-bold text-green-600 transition-colors duration-300">{laptop.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2 transition-colors duration-300">{laptop.originalPrice}</span>
                      </div>
                      <div className="text-xs text-green-600 font-medium transition-colors duration-300">
                        Save ₹{parseInt(laptop.originalPrice.replace(/[₹,]/g, '')) - parseInt(laptop.price.replace(/[₹,]/g, ''))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-8 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards] transition-colors duration-300 hover:text-blue-200">Why Choose Acer?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaLaptop,
              title: "Swift Performance",
              description: "Ultra-thin laptops designed for mobility without compromising on power and speed."
            },
            {
              icon: FaDesktop,
              title: "Predator Gaming",
              description: "High-performance gaming machines built to dominate every battlefield and competition."
            },
            {
              icon: FaTabletAlt,
              title: "Aspire Innovation",
              description: "Affordable laptops packed with features for students, families, and everyday computing."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:bg-white/20 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_forwards]" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                <item.icon className="text-2xl text-white transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold mb-3 transition-colors duration-300">{item.title}</h4>
              <p className="text-blue-100 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Contact Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto text-center px-6">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <FaStar className="w-5 h-5 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-white/90 font-medium">Premium Lenovo Store</span>
          </div>
          
          <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-8 leading-tight">
            Visit Our Store
            <br />
            <span className="text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Today</span>
          </h3>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience cutting-edge Lenovo technology at <span className="font-semibold text-purple-300">Sri Computers, Pondicherry</span>. 
            Our certified experts are ready to help you discover the perfect device for your needs.
          </p>
        </div>

        {/* Enhanced cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: FaMapMarkerAlt,
              iconColor: "from-red-500 to-pink-500",
              glowColor: "red",
              title: "Visit Our Location",
              content: "Sri Computers, Pondicherry",
              subtitle: "Easy to find, convenient parking",
              link: "https://maps.app.goo.gl/8AwTCo9u84anm3av6",
              linkText: "Get Directions"
            },
            {
              icon: FaPhone,
              iconColor: "from-green-500 to-emerald-500",
              glowColor: "green",
              title: "Call Us Now",
              content: "+91 9994678486",
              subtitle: "Expert consultation available",
              link: "tel:+919994678486",
              linkText: "Call Now",
              isPrimary: true
            },
            {
              icon: FaClock,
              iconColor: "from-orange-500 to-yellow-500",
              glowColor: "orange",
              title: "Store Hours",
              content: null,
              subtitle: "Open 7 days a week"
            }
          ].map((item, index) => (
            <div key={index} className="group relative">
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.iconColor} rounded-3xl blur-sm opacity-0 group-hover:opacity-75 transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:border-white/40 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 h-full">
                {/* Icon with gradient background */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${item.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.iconColor} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <item.icon className="relative text-3xl text-white drop-shadow-lg" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-white/60 text-sm font-medium">
                    {item.subtitle}
                  </p>

                  {/* Store hours content */}
                  {item.title === "Store Hours" && (
                    <div className="text-white/80 space-y-3 pt-4">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <span className="font-semibold">Mon - Sat</span>
                        <span className="text-orange-300">10:30 AM - 9:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <span className="font-semibold">Sunday</span>
                        <span className="text-orange-300">10:30 AM - 5:30 PM</span>
                      </div>
                    </div>
                  )}

                  {/* Regular content */}
                  {item.content && (
                    <p className="text-xl font-semibold text-white/90 pt-2">
                      {item.content}
                    </p>
                  )}

                  {/* Action button */}
                  {item.link && (
                    <a 
                      href={item.link}
                      target={item.link.includes('http') ? "_blank" : undefined}
                      rel={item.link.includes('http') ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl ${
                        item.isPrimary 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/25' 
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40'
                      }`}
                    >
                      {item.linkText}
                      <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-white/70 text-lg mb-6">
            Ready to upgrade your tech experience?
          </p>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-2xl font-bold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25">
            <FaStar className="w-5 h-5 animate-pulse" />
            <span>Visit Sri Computers Today</span>
            <FaStar className="w-5 h-5 animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    
    <style>{`
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
    `}</style>
    </>
  );
};

export default AcerShowroom;