import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaLaptop, FaDesktop, FaMobileAlt, FaPrint } from "react-icons/fa";
import sriLogo from "../assets/sri-logo.png";

export default function Nav({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const navRef = useRef(null);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Brands",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { name: "Asus", href: "/showroom/asus", icon: FaLaptop },
        { name: "Acer", href: "/showroom/acer", icon: FaDesktop },
        { name: "Lenovo", href: "/showroom/lenovo", icon: FaMobileAlt },
        { name: "HP", href: "/showroom/hp", icon: FaPrint },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  // Lock/unlock body scroll when mobile menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Update navHeight when menu is opened or on initial render
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [isMenuOpen]);

  const isBrandPage = location.pathname.startsWith("/showroom/");

  return (
    <div className="max-w-7xl mx-auto">
      <nav
        ref={navRef}
        className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 relative"
      >
        {/* Logo */}
        <div className="flex-shrink-0 group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
          <img
            src={sriLogo}
            alt="Sri Computers Logo"
            className="h-20 w-auto transition-all duration-500 group-hover:scale-110 relative z-10 drop-shadow-lg"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1 relative">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.isDropdown ? (
                <div
                  className="relative group"
                  onMouseEnter={() => setIsBrandsDropdownOpen(true)}
                  onMouseLeave={() => setIsBrandsDropdownOpen(false)}
                >
                  <button
                    className={`relative text-white font-semibold transition-all duration-300 px-5 py-2.5 rounded-xl group overflow-hidden flex items-center gap-2 ${
                      isBrandPage
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25"
                        : "hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <span className="relative z-10">{item.name}</span>
                    <FaChevronDown
                      className={`relative z-10 text-sm transition-transform duration-300 ${
                        isBrandsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                        isBrandPage ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`}
                    ></span>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-100/50 overflow-hidden transition-all duration-300 z-50 ${
                      isBrandsDropdownOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => {
                        const IconComponent = dropdownItem.icon;
                        return (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            className={`block px-5 py-3 text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group relative overflow-hidden flex items-center gap-3 ${
                              location.pathname === dropdownItem.href
                                ? "text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50"
                                : ""
                            }`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                            <IconComponent className="relative z-10 text-sm" />
                            <span className="relative z-10">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`relative text-gray-700 font-semibold transition-all duration-300 px-5 py-2.5 rounded-xl group overflow-hidden ${
                    location.pathname === item.href
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25"
                      : "hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      location.pathname === item.href
                        ? "w-4/5"
                        : "w-0 group-hover:w-4/5"
                    }`}
                  ></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="lg:hidden relative w-12 h-12 flex items-center justify-center text-white hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 group overflow-hidden shadow-md hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative z-10">
            {isMenuOpen ? (
              <FaTimes className="text-xl transition-all duration-300 transform rotate-90" />
            ) : (
              <FaBars className="text-xl transition-all duration-300" />
            )}
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 z-40"
          style={{ top: `${navHeight}px` }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="relative bg-white/95 backdrop-blur-xl shadow-2xl animate-[slideDown_0.4s_ease-out] max-h-[calc(100vh-var(--nav-height))] overflow-y-auto border-b border-gray-100/50 rounded-b-2xl">
            <div className="px-6 py-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileBrandsOpen(!isMobileBrandsOpen)}
                        className={`relative w-full text-left py-4 px-5 font-medium rounded-xl transition-all duration-300 transform hover:translate-x-2 mb-2 group overflow-hidden flex items-center justify-between ${
                          isBrandPage
                            ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25"
                            : "text-white hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <span className="relative z-10">{item.name}</span>
                        <FaChevronDown
                          className={`relative z-10 text-sm transition-transform duration-300 ${
                            isMobileBrandsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isMobileBrandsOpen && (
                        <div className="ml-4 mb-2">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => {
                            const IconComponent = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileBrandsOpen(false);
                                }}
                                className={`relative block py-3 px-5 font-medium rounded-xl transition-all duration-300 transform hover:translate-x-2 mb-2 group overflow-hidden flex items-center gap-3 ${
                                  location.pathname === dropdownItem.href
                                    ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                                }`}
                                style={{
                                  animationDelay: `${
                                    (index + dropdownIndex + 1) * 100
                                  }ms`,
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                <IconComponent className="relative z-10 text-sm" />
                                <span className="relative z-10">
                                  {dropdownItem.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative block py-4 px-5 font-medium rounded-xl transition-all duration-300 transform hover:translate-x-2 mb-2 group overflow-hidden ${
                        location.pathname === item.href
                          ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-25px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}