import React from "react";
import { motion } from "framer-motion";
import PostsCard from "./PostsCard";
import { postsData } from "./postsData";

const PostsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[...postsData].reverse().map((post, index) => (
          <motion.div key={index} variants={itemVariants}>
            <PostsCard
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              linkedinUrl={post.linkedinUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PostsGrid;
