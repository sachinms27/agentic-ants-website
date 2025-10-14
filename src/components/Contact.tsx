"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Rocket,
  Lightbulb,
  Shield,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";
import { contactContent } from "../data/contact";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    agentCount: "",
    useCase: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const iconMap = {
    "🚀": Rocket,
    "💡": Lightbulb,
    "🔒": Shield,
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);

        // Reset form after success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            agentCount: "",
            useCase: "",
          });
        }, 4000);
      } else {
        setError(result.message || 'Failed to submit form. Please try again.');
        // Clear error after 5 seconds
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error. Please check your connection and try again.');
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight px-4">
            {contactContent.title}
          </h2>
        </motion.div>

        {/* Main 2-Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Subtitle & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-1 px-2 sm:px-0"
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {contactContent.subtitle}
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="space-y-6 md:space-y-8">
              {contactContent.benefits.map((benefit, index) => {
                const Icon =
                  iconMap[benefit.icon as keyof typeof iconMap];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="flex items-start gap-4 md:gap-6"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base sm:text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden mx-2 sm:mx-0">
              {/* Success State */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-card flex items-center justify-center z-10 rounded-2xl"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      Our team will contact you within 24 hours
                      to discuss your requirements.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Form Header */}
              <div className="mb-5 sm:mb-6 md:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                  {contactContent.form.title}
                </h3>
                <p className="text-sm sm:text-sm md:text-base text-muted-foreground">
                  {contactContent.form.subtitle}
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                </motion.div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 md:space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label className="block text-sm sm:text-sm md:text-base font-medium text-foreground mb-1.5 sm:mb-2">
                    {contactContent.form.fields.name.label} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      handleInputChange("name", e.target.value)
                    }
                    placeholder={
                      contactContent.form.fields.name
                        .placeholder
                    }
                    className="w-full px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-base bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all duration-200 hover:border-muted-foreground/30"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm sm:text-sm md:text-base font-medium text-foreground mb-1.5 sm:mb-2">
                    {contactContent.form.fields.email.label} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange("email", e.target.value)
                    }
                    placeholder={
                      contactContent.form.fields.email
                        .placeholder
                    }
                    className="w-full px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-base bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all duration-200 hover:border-muted-foreground/30"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm sm:text-sm md:text-base font-medium text-foreground mb-1.5 sm:mb-2">
                    {contactContent.form.fields.company.label} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange(
                        "company",
                        e.target.value,
                      )
                    }
                    placeholder={
                      contactContent.form.fields.company
                        .placeholder
                    }
                    className="w-full px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-base bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all duration-200 hover:border-muted-foreground/30"
                  />
                </div>

                {/* Agent Count Field */}
                <div>
                  <label className="block text-sm sm:text-sm md:text-base font-medium text-foreground mb-1.5 sm:mb-2">
                    {
                      contactContent.form.fields.agentCount
                        .label
                    }
                  </label>
                  <Select
                    value={formData.agentCount}
                    onValueChange={(value) =>
                      handleInputChange("agentCount", value)
                    }
                  >
                    <SelectTrigger className="w-full h-9 sm:h-10 md:h-12 px-3 sm:px-3.5 md:px-4 text-sm sm:text-base md:text-base bg-input-background border border-border rounded-xl text-foreground hover:border-muted-foreground/30 focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all duration-200">
                      <SelectValue
                        placeholder={
                          contactContent.form.fields.agentCount
                            .placeholder
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="!bg-input-background border border-border rounded-xl shadow-lg overflow-hidden">
                      {contactContent.form.fields.agentCount.options?.map(
                        (option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            className="cursor-pointer text-sm md:text-base"
                          >
                            {option}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Use Case Textarea */}
                <div>
                  <label className="block text-sm sm:text-sm md:text-base font-medium text-foreground mb-1.5 sm:mb-2">
                    {contactContent.form.fields.useCase.label}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.useCase}
                    onChange={(e) =>
                      handleInputChange(
                        "useCase",
                        e.target.value,
                      )
                    }
                    placeholder={
                      contactContent.form.fields.useCase
                        .placeholder
                    }
                    className="w-full px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-base bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all duration-200 hover:border-muted-foreground/30 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-2.5 sm:py-3 md:py-3 px-4 sm:px-5 md:px-6 rounded-xl text-sm sm:text-base md:text-base font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span className="text-sm md:text-base">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm md:text-base">{contactContent.form.submitText}</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </>
                  )}
                </motion.button>

                {/* Privacy Notice */}
                <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  {contactContent.form.privacyText}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}