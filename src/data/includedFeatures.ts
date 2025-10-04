import {
  Zap,
  Shield,
  Eye,
  GitBranch,
  BarChart3,
  Users,
  Download,
  HeadphonesIcon,
  Lock,
  Network,
  Database,
  Gauge,
  FileText,
} from "lucide-react";

export const includedFeaturesContent = {
  header: {
    title: "Included Features (All Plans)",
    description: "Where We Shine - Our Advanced AI Agent Management Capabilities",
  },
  features: [
    {
      icon: Zap,
      title: "LLM Cost Optimizer",
      description:
        "Optimize LLM costs, recommend best models for AI Agents, ensure reliability, and integrate with Slack/Jira for developer notifications.",
      status: "premium",
    },
    {
      icon: Shield,
      title: "Agent Policy Management",
      description:
        "Audit and Enforce on API, Token Quota, protocols, API calls, Encryption and more.",
      status: "coming-soon",
    },
    {
      icon: Database,
      title: "LLM Cache Recommendation",
      description:
        "Suggests optimal caching strategies to reduce repetitive calls and lower LLM costs.",
        status: "coming-soon",
      },
    {
      icon: Gauge,
      title: "LLM Latency Optimizer",
      description:
        "Monitors and fine-tunes model routing to minimize response times across workloads.",
        status: "coming-soon",
      },
    {
      icon: FileText,
      title: "LLM Inventory Governance",
      description:
        "Provides visibility and controls over deployed models - approved/non-approved, usage policies, and compliance.",
      status: "coming-soon",
    },
    {
      icon: Lock,
      title: "AI Agent Security Posture Management with Compliance",
      description:
        "control egress, ingress, limits, protocols, encryption support and more.",
      status: "coming-soon",
    },
    {
      icon: Network,
      title: "Agent Graph",
      description:
        "Maps relationships between AI agents, data sources, and workflows to enhance observability and orchestration.",
      status: "coming-soon",
    },
    {
      icon: Eye,
      title: "LLM Application & Agent Tracing",
      description:
        "Traces & Graphs, Session Tracking, User Tracking, Token & Cost Tracking, SDKs, OpenTelemetry, Proxy Logging, Multi-modal (beta)",
      status: "available",
    },
    {
      icon: GitBranch,
      title: "Prompt Management",
      description:
        "Versioning, Fetching, Release Management, Composability, Caching, Playground, Experiments, Webhooks & Slack",
      status: "available",
    },
    {
      icon: BarChart3,
      title: "Evaluation",
      description:
        "Datasets, Remote & Native Runs, Evaluation Scores, User Feedback, Human Annotation & Queues, LLM-as-Judge",
      status: "available",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Unlimited Projects, User scaling via credits, RBAC (Enterprise)",
      status: "available",
    },
    {
      icon: Download,
      title: "Exports & API",
      description:
        "Batch Export via UI, PostHog Integration, Public API (rate-limited)",
      status: "available",
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description:
        "Community & Chat; Enterprise adds SLA, Private Slack, Dedicated Engineer",
      status: "available",
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description:
        "Data Region (US/EU), Data Masking, SSO, Enterprise SSO, SOC2, ISO27001, GDPR DPA, HIPAA (Enterprise)",
      status: "available",
    },
  ],
};