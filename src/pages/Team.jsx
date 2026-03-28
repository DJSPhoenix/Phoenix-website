import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableCardDemo } from "../components/team/ExpandableCardDemo";
import Navbar from "../components/common/Navbar";
import { HiSparkles } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

const Team = () => {
  const [showTeamCards, setShowTeamCards] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <Navbar currentPage="Team" />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Minds Behind
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                DJS Phoenix
              </span>
            </motion.h1>

            <motion.p
              className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Award-winning innovators, competition champions, and the future
              leaders of drone technology. Meet the exceptional team that has
              conquered national and international competitions.
            </motion.p>

            {/* Year Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 sm:mt-16"
            >
              <motion.button
                onClick={() => setShowTeamCards(!showTeamCards)}
                className="group relative w-full max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4 border border-orange-500/60 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex-1 text-center font-display text-2xl sm:text-3xl font-bold text-white">
                  2025 - 2026
                </span>
                <motion.span
                  className="ml-4 block"
                  animate={{ rotate: showTeamCards ? 90 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="block w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-orange-400 drop-shadow-[0_0_6px_rgba(255,140,0,0.6)]" />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Team Cards - Conditional Render */}
            <motion.div className="mt-8 sm:mt-12">
              <AnimatePresence mode="wait">
                {showTeamCards && (
                  <motion.div
                    key="team-cards"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.25, 0, 1] }}
                  >
                    <ExpandableCardDemo />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
