import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";

const Navbar = ({ currentPage = "Home" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/fleet", label: "Fleet" },
    { to: "/team", label: "Team" },
    { to: "/achievements", label: "Achievements" },
    { to: "/posts", label: "Posts" },
    { to: "/support", label: "Support Us" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-300 border-b border-gray-600/60 backdrop-blur-md bg-black/80 shadow-lg shadow-black/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Logo + Brand + Current Page */}
        <motion.div
          className="flex items-center space-x-2 sm:space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <motion.img
              src={Logo}
              alt="DJS Phoenix Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="font-display text-sm sm:text-lg font-bold text-white tracking-tight">
                DJS PHOENIX
              </span>
              <span className="text-gray-400 hidden sm:inline">•</span>
              <span className="font-ui text-xs sm:text-sm text-orange-400 font-semibold tracking-wider hidden sm:inline">
                {currentPage}
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation Menu */}
        <motion.nav
          className="hidden lg:flex items-center space-x-3 md:space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                className="px-3 lg:px-4 py-2 lg:py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors ui-text"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          onClick={toggleMobileMenu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full right-4 mt-2 z-50 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-2 px-3 min-w-[120px]">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors ui-text"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
