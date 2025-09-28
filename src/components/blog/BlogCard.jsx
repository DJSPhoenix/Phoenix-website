import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/Logo.png";

const BlogCard = ({ title, excerpt, image, linkedinUrl }) => {
  const handleShare = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank");
    }
  };

  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 group"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
          {title}
        </h3>

        <p className="font-body text-sm text-gray-300 mb-4 line-clamp-3 h-16">
          {excerpt}
        </p>

        {/* Author and Share */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white border border-orange-500/30 rounded-full mr-3 flex items-center justify-center p-1">
              <img
                src={Logo}
                alt="DJS Phoenix Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-body text-lg">DJS Phoenix</span>
          </div>

          {/* Share Icon */}
          {linkedinUrl && (
            <motion.button
              onClick={handleShare}
              className="p-2 rounded-full border border-orange-500/30 duration-200 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Share on LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 transition-colors" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
