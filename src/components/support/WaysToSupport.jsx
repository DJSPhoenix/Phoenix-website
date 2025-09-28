import React from "react";
import { motion } from "framer-motion";

const WaysToSupport = ({ items }) => {
  // Standardized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <>
      <motion.div className="text-center mb-6 sm:mb-10" variants={itemVariants}>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
          Ways to Support
        </h2>
        <p className="font-body text-sm sm:text-base lg:text-lg text-gray-300 px-4">
          Monetary or in‑kind. Choose what suits you best.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        {items.map((card, index) => (
          <motion.div
            key={card.key}
            className="h-full"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-transparent p-4 sm:p-6 transition-all duration-300 hover:border-orange-500/40 hover:bg-white/5 hover:shadow-[0_0_24px_rgba(255,140,0,0.25)] h-full">
              <div className="pointer-events-none absolute left-0 inset-y-0 w-1 rounded-l-2xl bg-gradient-to-b from-orange-500/60 via-orange-400/30 to-transparent" />
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                {card.description}
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1">
                {card.highlights?.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default WaysToSupport;
