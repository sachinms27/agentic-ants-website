
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { threePillarsContent } from "../data/threePillars";

export function ThreePillars() {
  return (
    <section
      id="pillars"
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-4">
            {threePillarsContent.header.title}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {threePillarsContent.header.description}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {threePillarsContent.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative flex flex-col"
            >
              {/* Large Number Outside Card - Desktop Only */}
              <div className="mb-0 text-center">
                <span className="text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] hidden md:block font-bold text-foreground/60 dark:text-foreground/50 leading-none select-none">
                  {pillar.number}
                </span>
              </div>

              {/* Card Container - Equal Height with Overlap */}
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex-1 flex flex-col md:-mt-[12%] relative z-10"
              >
                <div className="flex flex-row justify-between">
                  {/* Focus Badge */}
                  <div
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mb-4 md:mb-6 ${pillar.bgAccent} self-start`}
                  >
                    <span className={pillar.accent}>
                      {pillar.focus}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 md:mb-6 md:self-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <pillar.icon
                        className={`w-5 h-5 md:w-6 md:h-6 ${pillar.accent}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle - Aligned */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">
                    {pillar.title}
                  </h3>
                  <h4
                    className={`text-sm md:text-base font-semibold ${pillar.accent}`}
                  >
                    {pillar.subtitle}
                  </h4>
                </div>

                {/* Description - Fixed Height Area */}
                <div className="mb-6 md:mb-8 flex-grow">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Features - Consistent Layout */}
                <div className="mb-6 md:mb-8">
                  <h5 className="text-sm md:text-base font-semibold text-foreground mb-3 md:mb-4">
                    Key Features:
                  </h5>
                  <div className="space-y-2 md:space-y-3">
                    {pillar.features.map(
                      (feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay:
                              index * 0.15 + featureIndex * 0.1,
                          }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-xs md:text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* CTA Button - Bottom Aligned */}
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-sm"
                  >
                    {pillar.cta}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}