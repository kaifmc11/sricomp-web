import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaStar, FaDirections, FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import Footer from '../components/Footer'; 

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone Support",
      subtitle: "Available 24/7",
      details: "+91 99946 78486",
      description: "Call us anytime for immediate assistance with your tech needs",
      action: "Call Now",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      shadow: "shadow-emerald-500/25",
      glowColor: "emerald",
      onClick: () => window.location.href = 'tel:+919994678486'
    },
    {
      icon: FaEnvelope,
      title: "Email Support", 
      subtitle: "Professional queries",
      details: "sricomputerspondy@gmail.com",
      description: "Send us detailed queries and get comprehensive solutions",
      action: "Send Email",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      shadow: "shadow-blue-500/25",
      glowColor: "blue",
      onClick: () => window.location.href = 'mailto:sricomputerspondy@gmail.com'
    },
    {
      icon: FaClock,
      title: "Business Hours",
      subtitle: "Visit our store",
      details: "Mon-Sat: 10:30 AM - 9:30 PM\nSunday: 10:30 AM - 5:30 PM",
      description: "Come visit us for hands-on assistance and product demos",
      action: "WhatsApp Us",
      gradient: "from-violet-400 via-purple-500 to-pink-600",
      shadow: "shadow-purple-500/25",
      glowColor: "purple",
      onClick: () => window.open('https://wa.me/919994678486', '_blank')
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}\n\nSent from Sri Computers website contact form.`;
    
    const whatsappURL = `https://wa.me/919994678486?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Dynamic cursor effect */}
          <div 
            className="absolute w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              transform: 'translate3d(0, 0, 0)',
            }}
          ></div>
        </div>

        <div className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20 opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 font-medium">Available Now - Ready to Help</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-8 leading-tight">
                Get in Touch
              </h1>
              <p className="text-2xl text-blue-200/90 max-w-4xl mx-auto leading-relaxed font-light">
                Experience premium tech support and solutions in the heart of Puducherry. 
                <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                  Your technology partner since day one.
                </span>
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid xl:grid-cols-3 gap-8 mb-20">
              {/* Contact Cards */}
              <div className="xl:col-span-2 opacity-0 animate-[slideUp_1s_ease-out_0.4s_forwards]">
                <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={index}
                        className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-700 cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-2xl ${info.shadow} hover:scale-[1.02] hover:-translate-y-1`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-700 blur-xl`}></div>
                        
                        <div className="relative z-10 flex items-start gap-6">
                          <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${info.gradient} shadow-xl transition-all duration-500 ${
                            hoveredCard === index ? 'transform scale-110 rotate-3' : ''
                          }`}>
                            <IconComponent className="w-8 h-8 text-white" />
                            {hoveredCard === index && (
                              <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-2xl blur-md opacity-75 animate-pulse`}></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-4">
                              <h3 className="font-bold text-white text-2xl mb-1">{info.title}</h3>
                              <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                {info.subtitle}
                              </span>
                            </div>
                            
                            <p className="text-blue-100 text-lg mb-4 whitespace-pre-line font-medium">
                              {info.details}
                            </p>
                            
                            <p className="text-blue-200/80 mb-6 leading-relaxed">
                              {info.description}
                            </p>
                            
                            <button 
                              onClick={info.onClick}
                              className={`relative bg-gradient-to-r ${info.gradient} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/button overflow-hidden ${
                                hoveredCard === index ? 'translate-x-2 shadow-2xl' : ''
                              }`}
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                {info.action}
                                <div className="transform transition-transform group-hover/button:translate-x-1">→</div>
                              </span>
                              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/button:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                          </div>
                        </div>

                        {/* Hover particles effect */}
                        {hoveredCard === index && (
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={i}
                                className={`absolute w-1 h-1 bg-gradient-to-r ${info.gradient} rounded-full animate-ping`}
                                style={{
                                  top: `${20 + i * 15}%`,
                                  left: `${10 + i * 12}%`,
                                  animationDelay: `${i * 200}ms`
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced Map Section */}
              <div className="opacity-0 animate-[slideUp_1s_ease-out_0.6s_forwards]">
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-700 hover:shadow-2xl shadow-blue-500/20 group">
                  {/* Map Container */}
                  <div className="relative h-[500px] bg-gradient-to-br from-blue-900/50 via-indigo-900/50 to-purple-900/50 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full animate-pulse blur-2xl"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse delay-1000 blur-2xl"></div>
                    </div>
                    
                    {/* Map Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center z-10">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:scale-110 transition-transform duration-500">
                          <FaMapMarkerAlt className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Location Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce shadow-lg relative z-10">
                          <div className="absolute -inset-2 bg-red-400/50 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>

                    {/* Business Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform group-hover:scale-105 transition-all duration-500">
                        <h4 className="font-bold text-white text-xl mb-2">Sri Computers</h4>
                        <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                          170, Kamaraj Salai, Pillaithotam, Saram, Puducherry, 605013
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="w-4 h-4" />
                            ))}
                          </div>
                          <span className="text-sm text-blue-200 font-medium">4.8 (124+ reviews)</span>
                        </div>
                        <button 
                          onClick={() => window.open('https://maps.app.goo.gl/8AwTCo9u84anm3av6', '_blank')}
                          className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 group/btn"
                        >
                          <FaDirections className="w-4 h-4" />
                          <span>Get Directions</span>
                          <div className="w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">→</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="opacity-0 animate-[slideUp_1s_ease-out_0.8s_forwards]">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-700 shadow-2xl shadow-blue-500/20">
                {/* Form Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-emerald-400/30">
                    <FaPaperPlane className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-medium">Send us a message</span>
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-4">
                    Let's Connect
                  </h2>
                  <p className="text-blue-200 text-xl">We'll respond via WhatsApp within minutes!</p>
                </div>
                
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-blue-100 mb-3">Your Name *</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white placeholder-blue-300/70 hover:bg-white/20 focus:bg-white/20 focus:shadow-lg focus:shadow-emerald-500/25"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-blue-100 mb-3">Your Email *</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                          className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-blue-300/70 hover:bg-white/20 focus:bg-white/20 focus:shadow-lg focus:shadow-blue-500/25"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-blue-100 mb-3">Your Phone *</label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                          className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-blue-300/70 hover:bg-white/20 focus:bg-white/20 focus:shadow-lg focus:shadow-purple-500/25"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-100 mb-3">Your Message *</label>
                    <div className="relative">
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:border-emerald-400 focus:outline-none transition-all duration-300 resize-none text-white placeholder-blue-300/70 hover:bg-white/20 focus:bg-white/20 focus:shadow-lg focus:shadow-emerald-500/25"
                      ></textarea>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      onClick={handleSubmit}
                      className={`relative group/submit bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto overflow-hidden ${
                        isSubmitted ? 'from-green-500 to-emerald-600' : ''
                      }`}
                    >
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/submit:scale-x-100 transition-transform origin-left duration-500"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitted ? (
                          <>
                            <FaCheckCircle className="w-6 h-6" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <FaWhatsapp className="w-6 h-6" />
                            Send via WhatsApp
                          </>
                        )}
                      </span>
                      
                      {/* Sparkle effects */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover/submit:opacity-100 group-hover/submit:animate-ping"
                            style={{
                              top: `${20 + i * 20}%`,
                              right: `${10 + i * 15}%`,
                              animationDelay: `${i * 300}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                    </button>
                    <p className="text-blue-300/80 mt-4 text-sm">
                      Your message will be sent directly to our WhatsApp: 
                      <span className="font-semibold text-emerald-400 ml-1">+91 99946 78486</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Custom Styles */}
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
          
          /* Custom scrollbar */
          textarea::-webkit-scrollbar {
            width: 6px;
          }
          
          textarea::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
          }
          
          textarea::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
          }
          
          textarea::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
          }

          /* Glow effects */
          .shadow-emerald-500\/25 {
            box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.25);
          }
          
          .shadow-blue-500\/25 {
            box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.25);
          }
          
          .shadow-purple-500\/25 {
            box-shadow: 0 25px 50px -12px rgba(168, 85, 247, 0.25);
          }
        `}</style>
      </div>
      
      <Footer />
    </>
  );
}