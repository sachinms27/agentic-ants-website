"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingContent } from "../data/pricing";

export function Pricing() {
  const handleContactSales = () => {
    // Navigate to contact section
    window.location.href = "#contact";
  };

  const handleGetStarted = () => {
    // Placeholder for get started action
    console.log("Get started clicked");
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {pricingContent.title}
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {pricingContent.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingContent.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 right-6 z-10">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    <span className="font-semibold text-xs">
                      Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="bg-card border border-border rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {plan.name}
                  </h3>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        /
                        {plan.period === "per month"
                          ? "month"
                          : plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {plan.credits}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={
                      plan.id === "enterprise"
                        ? handleContactSales
                        : handleGetStarted
                    }
                    className={`
                      w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 text-center
                      ${
                        plan.isPopular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-border text-foreground hover:bg-muted/50"
                      }
                    `}
                  >
                    {plan.id === "enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </motion.button>
                </div>

                {/* Features Section */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-4 text-sm">
                      Features
                    </h4>
                    <div className="space-y-3">
                      {plan.features.map(
                        (featureGroup, groupIndex) => (
                          <div
                            key={groupIndex}
                            className="space-y-3"
                          >
                            {featureGroup.items.map(
                              (feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{
                                    opacity: 0,
                                    x: -10,
                                  }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.3,
                                    delay:
                                      index * 0.1 +
                                      groupIndex * 0.05 +
                                      featureIndex * 0.02,
                                  }}
                                  className="flex items-start gap-3"
                                >
                                  <div className="flex-shrink-0 mt-0.5">
                                    <Check className="w-4 h-4 text-muted-foreground" />
                                  </div>
                                  <span className="text-sm text-foreground leading-relaxed">
                                    {feature}
                                  </span>
                                </motion.div>
                              ),
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Subtle highlight for popular plan */}
                {plan.isPopular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-transparent pointer-events-none rounded-2xl" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}