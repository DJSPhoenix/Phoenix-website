import React from "react";
import { motion } from "framer-motion";
import HeroBackground from "../components/hero/HeroBackground";
import HeroContent from "../components/hero/HeroContent";
import AboutTeam from "../components/about/AboutTeam";
import CompetitionsSection from "../components/competitions/CompetitionsSection";
import Navbar from "../components/common/Navbar";

const Home = () => {
  // Animation variants for page sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-black">
      <Navbar currentPage="Home" />
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <HeroBackground />
        <HeroContent />
      </section>

      {/* About Team Section */}
      <AboutTeam />

      {/* Competitions Section */}
      <CompetitionsSection />
    </div>
  );
};

export default Home;
