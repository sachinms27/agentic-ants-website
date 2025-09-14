"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Code2,
  Zap,
  Blocks,
  Globe,
  Calendar,
  Flame,
} from "lucide-react";

const integrations = [
  // Developer SDKs
  {
    name: "JavaScript / TypeScript",
    category: "Developer SDKs",
    image: "/ts.svg",
    isPopular: true,
    url: "https://github.com/ ",
  },
  {
    name: "Python SDK",
    category: "Developer SDKs",
    image: "/python.svg",
    url: "https://github.com/ ",
  },
  {
    name: "OpenTelemetry",
    category: "Developer SDKs",
    image: "/opentelemetry_icon.svg",
    url: "https://github.com/ ",
  },

  // AI Frameworks
  {
    name: "LangChain & LangGraph",
    category: "AI Frameworks",
    image: "/langchain_icon.webp",
    isPopular: true,
    url: "https://github.com/ ",
  },
  {
    name: "LlamaIndex",
    category: "AI Frameworks",
    image: "/llamaindex_icon.webp",
    isPopular: true,
    url: "https://github.com/ ",
  },
  {
    name: "Semantic Kernel",
    category: "AI Frameworks",
    image: "/microsoft_icon.svg",
    url: "https://github.com/ ",
  },
  {
    name: "AutoGen",
    category: "AI Frameworks",
    image: "/autogen_icon.svg",
    url: "https://github.com/ ",
  },
  {
    name: "Haystack",
    category: "AI Frameworks",
    image: "/haystack_icon.webp",
    url: "https://github.com/ ",
  },

  // No-Code Builders
  {
    name: "Flowise",
    category: "No-Code Builders",
    image: "/flowise_logo.webp",
    isPopular: true,
    url: "https://github.com/ ",
  },
  {
    name: "Langflow",
    category: "No-Code Builders",
    image: "/langflow_icon.svg",
    isPopular: true,
    url: "https://github.com/ ",
  },
  {
    name: "Dify.AI",
    category: "No-Code Builders",
    image: "/dify_icon.webp",
    url: "https://github.com/ ",
  },
  {
    name: "n8n",
    category: "No-Code Builders",
    image: "/n8n_icon.svg",
    url: "https://github.com/ ",
  },
  {
    name: "LobeChat",
    category: "No-Code Builders",
    image: "/lobechat_icon.webp",
    url: "https://github.com/ ",
  },

  // AI Gateways
  {
    name: "OpenRouter",
    category: "AI Gateways",
    image: "/openrouter_icon.svg",
    url: "https://github.com/ ",
  },
  {
    name: "LiteLLM Proxy",
    category: "AI Gateways",
    image: "/litellm_icon.webp",
    url: "https://github.com/ ",
  },

  // Productivity Tools
  {
    name: "JIRA",
    category: "Productivity Tools",
    image: "/Jira.webp",
    url: "https://github.com/ ",
  },
  {
    name: "Slack",
    category: "Productivity Tools",
    image: "/slack.webp",
    url: "https://github.com/ ",
  },
];

const categories = [
  { id: "all", name: "All", icon: Blocks },
  { id: "Developer SDKs", name: "Developer SDKs", icon: Code2 },
  { id: "AI Frameworks", name: "AI Frameworks", icon: Blocks },
  {
    id: "No-Code Builders",
    name: "No-Code Builders",
    icon: Zap,
  },
  { id: "AI Gateways", name: "AI Gateways", icon: Globe },
  {
    id: "Productivity Tools",
    name: "Productivity Tools",
    icon: Calendar,
  },
];

export function Integrations() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleIntegrationClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const filteredIntegrations =
    activeFilter === "all"
      ? integrations
      : integrations.filter(
        (integration) =>
          integration.category === activeFilter,
      );

  return (
    <section className="py-16 md:py-24 bg-background">
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
            Integrations
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Connect with your existing AI infrastructure,
            frameworks, and monitoring tools
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
            {categories.map((category, index) => {
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

        {/* Integration Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
        >
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={`${integration.name}-${activeFilter}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              onClick={() =>
                handleIntegrationClick(integration.url)
              }
              className="relative group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl p-4 md:p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full">
                {/* Popular Badge */}
                {integration.isPopular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Flame className="w-3 h-3" />
                    <span className="hidden sm:inline">Popular</span>
                  </div>
                )}

                {/* Brand Image */}
                <div className="mb-3 md:mb-4">
                    <Image
                      src={integration.image}
                      alt={integration.name}
                      width={64}
                      height={64}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl mx-auto object-contain"
                    />
                </div>

                {/* Integration Info */}
                <div className="text-center">
                  <h4 className="text-xs md:text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight mb-1">
                    {integration.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {integration.category}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredIntegrations.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No integrations found for this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}