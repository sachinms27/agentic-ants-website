"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Blocks, Zap, Calendar } from "lucide-react";
import { includedFeaturesContent } from "../data/includedFeatures";

const categories = [
  { id: "all", name: "All", icon: Blocks },
  { id: "available", name: "Available Now", icon: Zap },
  { id: "coming-soon", name: "Coming Soon", icon: Calendar },
];

export function IncludedFeatures() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredFeatures =
    activeFilter === "all"
      ? includedFeaturesContent.features
      : includedFeaturesContent.features.filter(
          (feature) => feature.status === activeFilter
        );

  return (
    <section
      className="py-12 md:py-20 bg-background"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-4">
            {includedFeaturesContent.header.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {includedFeaturesContent.header.description}
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 max-w-5xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeFilter === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`
                    flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-medium transition-all duration-200
                    ${isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-transparent text-muted-foreground hover:bg-card hover:text-foreground hover:shadow-sm"
                    }
                  `}
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.03,
                }}
                className="group/feature relative p-4 sm:p-5 md:p-6 bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Left Tab/Block - Hidden on mobile */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary group-hover/feature:h-8 transition-all duration-300 origin-center hidden md:block"></div>

              {/* Icon */}
              <div className="mb-3 md:mb-4">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}