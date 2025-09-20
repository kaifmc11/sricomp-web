import { FaHeart, FaCode } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl"></div>
      </div>

      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          
          {/* Company info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sri Computers
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Designer credit */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Crafted with</span>
            <FaHeart className="w-3 h-3 text-red-400 animate-pulse" />
            <span>and</span>
            <FaCode className="w-3 h-3 text-blue-400" />
            <span>by</span>
            <span className="relative group cursor-pointer">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium transition-all duration-300 hover:from-purple-400 hover:to-pink-400">
                Kaif Sulthan
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}