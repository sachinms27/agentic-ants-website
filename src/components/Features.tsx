"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { siteContent } from "../data/content";
import { ArrowRight } from "lucide-react";

export function Features() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl text-foreground"
          >
            {siteContent.features.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto"
          >
            {siteContent.features.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a
                href={siteContent.features.cta.primary.href}
                onClick={(e) => {
                  if (siteContent.features.cta.primary.href.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(siteContent.features.cta.primary.href);
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }
                }}
              >
                {siteContent.features.cta.primary.label}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <a
                href={siteContent.features.cta.secondary.href}
                onClick={(e) => {
                  if (siteContent.features.cta.secondary.href.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(siteContent.features.cta.secondary.href);
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }
                }}
              >
                {siteContent.features.cta.secondary.label}
              </a>
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
          >
            {siteContent.features.metrics.map(
              (metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="text-center space-y-2"
                >
                  <div className="text-2xl md:text-3xl text-foreground">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}