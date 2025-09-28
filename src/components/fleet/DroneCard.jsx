import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { defaultDrones } from "./DroneData";

const DroneCard = ({ drone, index }) => {
  const [expanded, setExpanded] = useState(false);
  const isCurrent = drone.status === "current";

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border transition-all bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.6 + index * 0.15, // Wait for page stagger + individual card delay
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
      style={{
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Media */}
      <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
        {drone.image ? (
          <>
            <img
              src={drone.image}
              alt={drone.name}
              className={
                "w-full h-full object-cover object-center saturate-100"
              }
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/35 to-transparent`}
            />
          </>
        ) : (
          <div className="w-full h-full bg-gray-900/80 border-b border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="ui-text inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] bg-yellow-500/15 border border-yellow-400/40 text-yellow-200 mb-2">
                WIP
              </div>
              <div className="font-body text-gray-400 text-xs sm:text-sm">
                Image coming soon
              </div>
            </div>
          </div>
        )}
        {drone.wip && drone.image && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 ui-text px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] bg-yellow-500/20 border border-yellow-400/50 text-yellow-200">
            WIP
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
              {drone.name}
            </h3>
            <div className="ui-text text-xs text-gray-300 mt-1">
              {isCurrent ? "Current" : "Retired"} • {drone.type}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={`ui-text inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm border transition-all flex-shrink-0
              ${
                expanded
                  ? "border-orange-500 bg-orange-500/10 text-white shadow-[0_0_20px_rgba(255,140,0,0.2)]"
                  : "border-white/30 bg-white/10 text-gray-100 hover:border-orange-500 hover:bg-orange-500/10"
              }
            `}
          >
            <span className="hidden sm:inline">
              {expanded ? "Hide specs" : "View specs"}
            </span>
            <span className="sm:hidden">{expanded ? "Hide" : "View"}</span>
            <span
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden
            >
              ▾
            </span>
          </button>
        </div>

        {/* Expandable specs */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 font-body">
                {Object.entries(drone.specs || {}).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-gray-400 capitalize">
                      {k.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </span>
                    <span className="text-white">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DroneCard;
