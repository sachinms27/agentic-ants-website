
import { motion } from "framer-motion";
import Image from "next/image";

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

export function ScrollingIntegrations() {
  // Create two different sets for the rows
  const firstRowIntegrations = integrations.slice(
    0,
    Math.ceil(integrations.length / 2),
  );
  const secondRowIntegrations = integrations.slice(
    Math.ceil(integrations.length / 2),
  );

  // Create multiple copies for truly seamless infinite scroll
  const createInfiniteArray = (arr: typeof integrations) => {
    // Create 4 copies to ensure seamless scrolling
    return [...arr, ...arr, ...arr, ...arr];
  };

  const infiniteFirstRow = createInfiniteArray(
    firstRowIntegrations,
  );
  const infiniteSecondRow = createInfiniteArray(
    secondRowIntegrations,
  );

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling Rows */}
        <div className="space-y-8">
          {/* First Row - Scrolling Left */}
          <div className="relative overflow-hidden mask-gradient">
            <motion.div
              className="flex gap-6 will-change-transform"
              animate={{
                x: [-88 * firstRowIntegrations.length, 0],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{
                width: `${88 * infiniteFirstRow.length}px`,
              }}
            >
              {infiniteFirstRow.map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0 w-16 h-16 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-accent/50 transition-colors duration-300 group overflow-hidden"
                  title={integration.name}
                >
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    width={40}
                    height={40}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="relative overflow-hidden mask-gradient">
            <motion.div
              className="flex gap-6 will-change-transform"
              animate={{
                x: [0, -88 * secondRowIntegrations.length],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{
                width: `${88 * infiniteSecondRow.length}px`,
              }}
            >
              {infiniteSecondRow.map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0 w-16 h-16 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-accent/50 transition-colors duration-300 group overflow-hidden"
                  title={integration.name}
                >
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    width={40}
                    height={40}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}