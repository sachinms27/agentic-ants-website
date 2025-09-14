
import { motion } from "framer-motion";
import { keyCapabilitiesContent } from "../data/keyCapabilities";

export function KeyCapabilities() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid of Capabilities */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyCapabilitiesContent.capabilities.map(
            (capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <div className="h-full p-6 bg-card border border-border rounded-2xl hover:border-border/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {capability.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}