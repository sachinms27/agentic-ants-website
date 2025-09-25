export const pricingContent = {
  title: "Pricing",
  subtitle: "AgenticAnts uses a credit-based system so you only pay for what you use. Each credit can be applied flexibly across observability, agents, policies, projects, and evaluations.",
  
  plans: [
    {
      id: "free",
      name: "Free",
      description: "Get started with basic features",
      price: "$0",
      period: "per month",
      credits: "50,000 credits/month",
      isPro: false,
      features: [
        {
          category: "Essentials",
          items: [
            "Basic features",
            "Up to 3 team members",
          ]
        },
        {
          category: "Support & Data",
          items: [
            "Community support",
          ]
        }
      ],    },
    {
      id: "pro",
      name: "Pro",
      description: "Startups, small teams, pilots",
      price: "$50",
      period: "per month",
      credits: "100,000 credits",
      isPro: true,
      features: [
        {
          category: "Performance",
          items: [
            "Tracing ingestion: 1,000 req/min",
            "Data lookup: 30 days retention",
            "Prompt fetching: Unlimited",
            "API routes: 30 req/min"
          ]
        },
        {
          category: "APIs",
          items: [
            "Datasets API: 100 req/min",
            "Metrics API: 100 req/day"
          ]
        },
        {
          category: "Security",
          items: [
            "SSO (Google, AzureAD, GitHub)",
            "Data Masking"
          ]
        }
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Enterprises, mission-critical workloads",
      price: "Custom",
      period: "pricing",
      credits: "Custom credits",
      isPro: false,
      features: [
        {
          category: "Performance",
          items: [
            "Custom ingestion & retention",
            "Extended historical data",
            "Unlimited throughput",
            "Custom API scaling"
          ]
        },
        {
          category: "Security & Compliance",
          items: [
            "SSO enforcement",
            "Org- & project-level RBAC",
            "Audit Logs",
            "Enterprise SSO (Okta, EntraID)"
          ]
        }
      ]
    }
  ]
};