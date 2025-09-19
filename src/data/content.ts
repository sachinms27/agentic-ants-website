import { SIGN_IN_URL } from "../config/urls";

export const siteContent = {
  brand: {
    name: "Agentic Ants",
    logo: "/ants-cropped.svg",
  },
  navigation: {
    items: [
      { label: "Products", href: "#pillars" },
      { label: "Resources", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
    auth: {
      signIn: { label: "Sign In", href: SIGN_IN_URL },
      demo: { label: "Request Demo", href: "#contact" },
    },
  },
  hero: {
    title: "Your AI Command Center for AI Agents",
    description:
      "Transform your AI operations with enterprise-grade observability, security, and cost management for production AI agents and GenAI applications.",
    cta: {
      primary: { label: "Get Started", href: "/" },
      secondary: { label: "Learn More", href: "/" },
    },
    announcement: {
      text: "Introducing Ants Platform",
      description: "",
    },
  },
  socialProof: {
    title: "Trusted by teams worldwide",
    subtitle:
      "Join thousands of developers and enterprises building the future of AI",
    metrics: [
      {
        value: "10,000+",
        label: "Active Users",
        description: "Developers and teams",
      },
      {
        value: "50+",
        label: "Countries",
        description: "Global presence",
      },
      {
        value: "99.9%",
        label: "Uptime",
        description: "Enterprise reliability",
      },
      {
        value: "$2M+",
        label: "Cost Saved",
        description: "AI infrastructure optimization",
      },
    ],
    companies: {
      title: "Powering innovation at leading companies",
      logos: [
        { name: "TechCorp", logo: "🏢" },
        { name: "DataFlow", logo: "📊" },
        { name: "AI Solutions", logo: "🤖" },
        { name: "CloudFirst", logo: "☁️" },
        { name: "InnovateLab", logo: "🔬" },
        { name: "FutureTech", logo: "🚀" },
      ],
    },
  },
  features: {
    title: "Achieve ROI with Your GenAI Investments",
    description:
      "Align GenAI investments to real customer metrics and KPIs. Take control of your GenAI costs with real-time FinOps for complete visibility, unit economics, and razor-sharp spend forecasting.",
    cta: {
      primary: { label: "Request a Demo", href: "#contact" },
      secondary: { label: "See Pricing", href: "#pricing" },
    },
    metrics: [
      {
        value: "1000+",
        label: "AI Agents Observed Daily",
      },
      {
        value: "10M+",
        label: "Traces Evaluated",
      },
      {
        value: "90%",
        label: "Reduction in MTTR",
      },
    ],
  },
  challenges: {
    title: "The Challenges of Managing AI Agents",
    subtitle:
      "As organizations scale their AI operations, managing the agentic workforce becomes increasingly complex",
    items: [
      {
        title: "Uncontrolled AI Spend",
        description:
          "Organizations struggle with escalating AI costs and lack visibility into agent resource consumption.",
      },
      {
        title: "Lack of Observability",
        description:
          "No insight into AI agent performance, failures, or behavioral patterns across the ecosystem.",
      },
      {
        title: "Agent Sprawl",
        description:
          "Multiple AI agents deployed without governance, creating operational and security risks.",
      },
      {
        title: "Security & Compliance Gaps",
        description:
          "AI agents operating without proper guardrails, audit trails, or regulatory compliance.",
      },
    ],
  },
};

export type SiteContent = typeof siteContent;