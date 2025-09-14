
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { includedFeaturesContent } from "../data/includedFeatures";

export function IncludedFeatures() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "premium":
        return (
          <div className="flex items-center gap-1">
            <Star
              className="w-3 h-3 text-primary"
              fill="currentColor"
            />
            <span className="text-xs font-medium text-primary">
              Premium
            </span>
          </div>
        );
      case "coming-soon":
        return (
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
            Coming Soon
          </span>
        );
      default:
        return null;
    }
  };

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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-px md:bg-border md:border-l md:border-r md:border-border">
          {includedFeaturesContent.features.map((feature, index) => (
            <div
              key={index}
              className="group/feature relative p-4 sm:p-5 md:p-6 bg-card rounded-xl md:rounded-none border border-border md:border-0 overflow-hidden transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-0 before:bg-gradient-to-t before:from-primary/3 before:to-transparent before:transition-all before:duration-300 hover:before:h-full hover:shadow-md md:hover:shadow-none"
            >
              {/* Left Tab/Block - Hidden on mobile */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary group-hover/feature:h-8 transition-all duration-300 origin-center hidden md:block"></div>

              {/* Status Badge */}
              <div className="flex justify-end mb-3 md:mb-4">
                {getStatusBadge(feature.status)}
              </div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}