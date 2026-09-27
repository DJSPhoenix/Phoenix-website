import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaUsers, FaTrophy } from "react-icons/fa";
import { PiDroneFill } from "react-icons/pi";

const iconMap = {
  users: FaUsers,
  trophy: FaTrophy,
  drone: PiDroneFill,
};

const StatCard = ({ item, progress }) => {
  const cardRef = useRef(null);

  const onEnter = () => {
    gsap.to(cardRef.current, {
      boxShadow: "0 25px 60px -20px rgba(255, 140, 0, 0.25)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const onLeave = () => {
    gsap.to(cardRef.current, {
      boxShadow: "none",
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const Icon = iconMap[item.iconKey] || FaUsers;

  return (
    <div
      ref={cardRef}
      className="stats-card-item opacity-0 bg-white/[0.02] backdrop-blur-xl border rounded-2xl p-6 text-center transition-[border-color] duration-300"
      style={{ border: "1px solid rgba(255, 140, 0, 0.4)" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#ff8c00] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
      </div>
      <div className="font-ui font-bold text-3xl sm:text-4xl text-white mb-2">
        {Math.round((item.target || 0) * progress)}
        {item.suffix || ""}
      </div>
      <div className="font-body text-sm sm:text-base text-gray-400 font-medium">
        {item.label}
      </div>
    </div>
  );
};

const StatsCounter = ({ items = [] }) => {
  const containerRef = useRef(null);
  const [countProgress, setCountProgress] = useState(0);

  useGSAP(
    () => {
      // 1. Header scroll trigger
      gsap.fromTo(
        ".stats-header",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".stats-header",
            start: "top bottom",
            end: "top 72%",
            scrub: true,
          },
        }
      );

      // 2. Cards stagger / reveal
      const cards = gsap.utils.toArray(".stats-card-item");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top bottom",
            end: "top 72%",
            scrub: true,
            onUpdate: (self) => setCountProgress(self.progress),
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="stats-header opacity-0 mb-10 sm:mb-14">
          <h2
            className="font-display font-bold text-white leading-none tracking-tighter mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            Our Impact in Numbers
          </h2>
          <p
            className="font-body text-neutral-400 max-w-lg"
            style={{
              fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
              lineHeight: 1.65,
            }}
          >
            These numbers represent our commitment to excellence and growth.
          </p>
        </div>

        {/* Grid of counter cards */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <StatCard
              key={item.label}
              item={item}
              progress={countProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
