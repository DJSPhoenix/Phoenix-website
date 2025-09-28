import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";

const AboutHero = ({ title, subtitle, imageSrc, tags = [] }) => {
  return (
    <section className="relative py-12 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.25, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6">
              <HiSparkles className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              <span className="font-ui text-xs sm:text-sm text-white font-bold">
                About Us
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {title}
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-orange-400 via-orange-200 to-white bg-clip-text text-transparent tracking-wide mb-6 sm:mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 mb-6">
              <Link to="/team">
                <motion.button
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#ff8c00] to-orange-600 text-white font-ui font-bold hover:shadow-lg hover:shadow-orange-500/30 transition cursor-pointer text-sm sm:text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet the Team
                </motion.button>
              </Link>
              <Link to="/achievements">
                <motion.button
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/20 bg-white/5 text-white font-ui font-bold hover:bg-white/10 transition cursor-pointer text-sm sm:text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Achievements
                </motion.button>
              </Link>
            </div>

            {Array.isArray(tags) && tags.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-ui bg-white/10 border border-white/15 text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            className="relative order-first lg:order-none"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
          >
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5">
              <img
                src={imageSrc}
                alt="About hero"
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
