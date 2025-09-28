import React from "react";
import { motion } from "framer-motion";

const Wishlist = ({ groups }) => {
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
    <motion.section
      className="container mx-auto px-4 sm:px-6 max-w-5xl py-8 sm:py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-center mb-6 sm:mb-8" variants={itemVariants}>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          In‑Kind Wishlist
        </h2>
        <p className="font-body text-sm sm:text-base lg:text-lg text-gray-300 mt-2 px-4">
          Items and services that create immediate impact.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-stretch">
        {groups.map((group, index) => (
          <motion.div
            key={group.category}
            className="h-full"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-transparent p-4 sm:p-6 transition-all duration-300 hover:border-orange-500/40 hover:bg-white/5 hover:shadow-[0_0_24px_rgba(255,140,0,0.25)] h-full flex flex-col">
              <div className="pointer-events-none absolute left-0 inset-y-0 w-1 rounded-l-2xl bg-gradient-to-b from-white/60 via-white/20 to-transparent" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-white font-semibold text-lg sm:text-xl">
                    {group.category}
                  </h3>
                  <motion.a
                    href={`?supportType=In%E2%80%91Kind&interest=${encodeURIComponent(
                      group.category
                    )}#contact`}
                    className="ui-text inline-flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm border transition-all border-orange-500 bg-orange-500/10 text-white hover:bg-orange-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sponsor this area
                  </motion.a>
                </div>
              </div>
              <ul className="block sm:hidden space-y-2">
                {group.items.map((it, i) => (
                  <motion.li
                    key={group.category + i}
                    className="text-gray-200 text-xs leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    • {it}
                  </motion.li>
                ))}
              </ul>
              <ul className="hidden sm:flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.map((it, i) => (
                  <motion.li
                    key={group.category + i}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/15 bg-white/5 text-gray-200 hover:border-orange-500/40 hover:bg-white/10 transition-colors text-xs sm:text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {it}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Wishlist;
