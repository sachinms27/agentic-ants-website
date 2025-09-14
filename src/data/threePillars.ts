import {
  DollarSign,
  Activity,
  Shield,
} from "lucide-react";

export const threePillarsContent = {
  header: {
    title: "Pillars of Agent Management",
    description:
      "Comprehensive FinOps, SRE, and SecOps capabilities designed specifically for AI agent operations.",
  },
  pillars: [
    {
      id: "finops",
      number: "1",
      icon: DollarSign,
      title: "AI Agent FinOps",
      subtitle: "Cost Optimization & ROI",
      focus: "CFO Focus",
      description:
        "Right-size AI spend with comprehensive token usage tracking, contract optimization, and ROI analysis. Get showback reports and cost-per-query insights.",
      features: [
        "Token usage monitoring",
        "Cost per customer query",
        "Contract optimization",
        "ROI analytics dashboard",
      ],
      cta: "Optimize Costs",
      accent: "text-green-500",
      bgAccent: "bg-green-500/10 border-green-500/20",
    },
    {
      id: "sre",
      number: "2",
      icon: Activity,
      title: "AI Agent SRE",
      subtitle: "Observability & Performance",
      focus: "CTO Focus",
      description:
        "Full observability across sessions, agents, traces, and spans. Reduce MTTR by up to 90% with automated remediation and root cause analysis.",
      features: [
        "End-to-end tracing",
        "Automated incident response",
        "Performance analytics",
        "Real-time monitoring",
      ],
      cta: "Improve Reliability",
      accent: "text-blue-500",
      bgAccent: "bg-blue-500/10 border-blue-500/20",
    },
    {
      id: "secops",
      number: "3",
      icon: Shield,
      title: "AI Agent SecOps",
      subtitle: "Security & Compliance",
      focus: "CRO Focus",
      description:
        "Comprehensive risk mitigation with guardrails for PII, safety controls, and compliance audits. Meet SOC2, GDPR, and HIPAA requirements.",
      features: [
        "PII detection & protection",
        "Compliance reporting",
        "Security guardrails",
        "Audit trail management",
      ],
      cta: "Secure Agents",
      accent: "text-purple-500",
      bgAccent: "bg-purple-500/10 border-purple-500/20",
    },
  ],
};