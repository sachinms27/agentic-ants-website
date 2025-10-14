"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { Features } from "./Features";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Here you would implement actual video play logic
    console.log("Playing video...");
  };

  return (
    <section className="py-16 -mt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer container with theme-consistent styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8"
        >
          {/* Inner video container with play button overlay */}
          <div className="relative aspect-video bg-muted rounded-xl overflow-hidden group cursor-pointer">
            {/* Video background placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/80" />

            {/* Play button overlay */}
            {!isPlaying && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
                onClick={handlePlayVideo}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-primary/90 hover:bg-primary backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                >
                  <Play
                    className="w-8 h-8 text-primary-foreground ml-1"
                    fill="currentColor"
                  />
                </motion.div>

                {/* Ripple effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-20 h-20 border-2 border-primary/30 rounded-full"
                />
              </motion.div>
            )}

            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
      <Features />
    </section>
  );
}