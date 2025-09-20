import React, { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  // Gallery images
  const galleryImages = [
    {
      src: "/src/assets/gallery-1.jpg",
      alt: "Gallery Image 1",
      brand: "ASUS",
      title: "ROG Gaming Series",
      description: "High-performance gaming laptops",
    },
    {
      src: "/src/assets/gallery-2.jpg",
      alt: "Gallery Image 2",
      brand: "Lenovo",
      title: "ThinkPad Business",
      description: "Professional business solutions",
    },
    {
      src: "/src/assets/gallery-3.jpg",
      alt: "Gallery Image 3",
      brand: "ACER",
      title: "Predator Series",
      description: "Ultimate gaming experience",
    },
    {
      src: "/src/assets/gallery-4.jpg",
      alt: "Gallery Image 4",
      brand: "HP",
      title: "Pavilion Series",
      description: "Versatile everyday computing",
    },
  ];

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const items = sectionRef.current?.querySelectorAll(".gallery-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Animation control
  const getAnimationClass = (index) => {
    const isVisible = visibleItems.includes(index);
    const isEven = index % 2 === 0;

    if (!isVisible) {
      return isEven
        ? "translate-x-[-100px] opacity-0"
        : "translate-x-[100px] opacity-0";
    }

    return "translate-x-0 opacity-100";
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-500/30">
              Premium Collection
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Gallery
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-8 rounded-full shadow-lg shadow-blue-500/25"></div>

          <p className="text-2xl text-blue-100 mb-6 font-light">
            Premium Computing Solutions
          </p>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Discover our extensive collection of cutting-edge laptops, desktops,
            and monitors from industry-leading brands at Sri Computers
            Pondicherry
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`gallery-item group relative transform transition-all duration-1000 ease-out ${getAnimationClass(
                index
              )}`}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:-translate-y-4 hover:scale-105">
                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] lg:h-[450px] object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-white/30">
                        <span className="text-sm font-bold text-white tracking-wider">
                          {image.brand}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-300">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {image.title}
                    </h3>
                    <p className="text-blue-100 opacity-90 text-sm leading-relaxed mb-4">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left shadow-lg shadow-blue-500/50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
