
import { motion } from "framer-motion";
import { platformIntroContent } from "../data/platformIntro";

export function PlatformIntro() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-4">
            {platformIntroContent.header.title}
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4 px-4">
            {platformIntroContent.header.subtitle}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {platformIntroContent.header.description}
          </p>
        </motion.div>

        {/* Platform Features Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dividing Lines - Hidden on mobile */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-border/60 transform -translate-y-1/2"></div>
              {/* Vertical Lines */}
              <div className="absolute left-1/3 top-0 bottom-0 w-px border-l border-dashed border-border/60 transform -translate-x-1/2"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-px border-l border-dashed border-border/60 transform -translate-x-1/2"></div>
            </div>

            {/* 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-none">
              {platformIntroContent.features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-6 md:p-8 group hover:bg-muted/10 transition-all duration-300 ${
                    // Add bottom border on mobile for all except last item
                    index < platformIntroContent.features.length - 1
                      ? "border-b border-dashed md:border-b-0"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}