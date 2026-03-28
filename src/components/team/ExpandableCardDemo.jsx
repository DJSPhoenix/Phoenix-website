import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { coreTeamCards } from "./teamData";

export function ExpandableCardDemo() {
  // Combine both core and junior core into one unified team
  const allTeamCards = [...coreTeamCards];

  const TeamCard = ({ card, index }) => (
    <motion.div
      key={card.Name}
      className="group relative bg-black border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.02] sm:hover:scale-[1.05] transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.2 + index * 0.05,
      }}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Profile Image - Circular */}
      <div className="relative mb-4 sm:mb-6 md:mb-8 flex justify-center">
        <div className="relative overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
          <img
            src={card.src}
            alt={card.Name}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          {/* Left side - Name and Position */}
          <div className="flex-1 text-left space-y-1 sm:space-y-2">
            <h3 className="font-ui font-bold text-white text-sm sm:text-base md:text-lg">
              {card.Name}
            </h3>
            <p className="font-body text-orange-400 text-xs sm:text-sm font-medium">
              {card.Title}
            </p>
          </div>

          {/* Right side - Simple LinkedIn icon */}
          <div className="flex items-center justify-center ml-2 sm:ml-4">
            <motion.a
              href={card.linkedinLink || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={24} className="sm:hidden" />
              <FaLinkedin size={32} className="hidden sm:block" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
      {/* Unified Team Grid - No Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {allTeamCards.map((card, index) => (
          <TeamCard key={card.Name} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}
