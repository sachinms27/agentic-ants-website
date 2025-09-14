
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Network,
  Shield,
} from "lucide-react";
import { siteContent } from "../data/content";

const challengeIcons = [
  TrendingUp,
  BarChart3, 
  Network,
  Shield, 
];

export function Challenges() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            {siteContent.challenges.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {siteContent.challenges.subtitle}
          </motion.p>
        </div>

        {/* Quadrant Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Dividing Lines - Hidden on mobile */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-border/60 transform -translate-y-1/2"></div>
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-border/60 transform -translate-x-1/2"></div>
            </div>

            {/* 2x2 Quadrants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {siteContent.challenges.items.map(
                (challenge, index) => {
                  const IconComponent = challengeIcons[index];
                  return (
                    <div
                      key={index}
                      className={`relative p-8 md:p-10 group hover:bg-muted/10 transition-all duration-300 ${
                        // Add bottom border on mobile for all except last item
                        index <
                        siteContent.challenges.items.length - 1
                          ? "border-b border-border md:border-b-0"
                          : ""
                      }`}
                    >
                      {/* Icon Container */}
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground leading-tight">
                          {challenge.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}