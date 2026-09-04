"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_ANNOUNCEMENTS = [
  '✨ Use code "DRDEO" and get flat ₹100 off ✨  ',
  "⏰ Limited Time Offer!",
  "🚚 Free Shipping Across India",
];

interface AnnouncementBarProps {
  announcements?: string[];
  autoSlideInterval?: number;
}

export default function AnnouncementBar({
  announcements = DEFAULT_ANNOUNCEMENTS,
  autoSlideInterval = 4400,
}: AnnouncementBarProps) {
  const isEnabled =
    process.env.NEXT_PUBLIC_ENABLE_ANNOUNCEMENT_BAR !== "false" &&
    process.env.NEXT_PUBLIC_ANNOUNCEMENT_BAR !== "false" &&
    process.env.NEXT_PUBLIC_SHOW_ANNOUNCEMENT_BAR !== "false";

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isEnabled || isPaused || announcements.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [announcements.length, autoSlideInterval, isEnabled, isPaused]);

  if (!isEnabled) return null;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full bg-[#003286] text-white py-2 px-4 overflow-hidden relative z-40 select-none shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center h-5 sm:h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-center font-inter text-xs sm:text-sm font-medium tracking-wide text-white/95 truncate"
          >
            {announcements[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
