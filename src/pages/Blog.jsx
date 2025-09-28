import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import BlogGrid from "../components/blog/BlogGrid";

const Blog = () => {
  // Standardized animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
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

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white bg-grid-mask bg-noise-mask"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar currentPage="Blog" />

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        variants={sectionVariants}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.h1
              className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent leading-[1.3]"
              variants={heroVariants}
            >
              Phoenix Blog
            </motion.h1>
            <motion.p
              className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              variants={heroVariants}
            >
              Stay updated with the latest news, insights, and stories from the
              Phoenix team
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Blog Grid */}
      <motion.main
        className="container mx-auto px-6 pb-16"
        variants={sectionVariants}
      >
        <BlogGrid />
      </motion.main>
    </motion.div>
  );
};

export default Blog;
