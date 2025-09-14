
import { motion } from "framer-motion";
import {
  Calculator,
  Zap,
  Users,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { creditsContent } from "../data/credits";

export function CreditsExplained() {
  const iconMap = {
    "1 Trace": BarChart3,
    "1 Observability Event": Zap,
    "1 Score/Evaluation": CheckCircle,
    "1 Cost Optimizer Run/model": Calculator,
    "1 Cost Recommendation": Calculator,
    "1 Active Policy": Shield,
    "1 Agent (Discovered/Managed)": Users,
    "1 User": Users,
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-4">
            How Credits Work
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Every action costs exactly{" "}
            <span className="font-semibold text-foreground">
              1 credit
            </span>
            . No hidden fees, no complex calculations—just
            simple, predictable pricing.
          </p>
        </motion.div>

        {/* Credit Rates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 md:mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {creditsContent.creditRates.map((rate, index) => {
              const Icon =
                iconMap[rate.action as keyof typeof iconMap] ||
                Calculator;

              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>

                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-xs md:text-sm leading-tight">
                      {rate.action.replace("1 ", "")}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-lg md:text-xl font-bold text-primary">
                        1
                      </span>
                      <span className="text-xs text-muted-foreground">
                        credit
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Scale Plan Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Example with Scale (10,000 credits)
            </h3>
          </div>

          {/* Breakdown List */}
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            {creditsContent.example.breakdown.map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.05,
                  }}
                  className="flex items-center justify-between p-2.5 md:p-3 bg-muted/30 rounded-lg"
                >
                  <span className="text-sm md:text-base font-medium text-foreground">
                    {item.usage}
                  </span>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                    <span className="text-sm md:text-base font-semibold text-primary">
                      {item.credits}
                    </span>
                  </div>
                </motion.div>
              ),
            )}
          </div>

          {/* Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-border pt-3 md:pt-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-base md:text-lg font-bold text-foreground">
                Total
              </span>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-bold text-primary">
                  = 10,000 credits
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}