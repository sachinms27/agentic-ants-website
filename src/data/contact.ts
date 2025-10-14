export const contactContent = {
  title: "Contact",
  subtitle: "Ready to Transform Your AI Operations? See how Ants Platform helps you manage your agentic workforce with our comprehensive FinOps, SRE, and SecOps platform.",
  
  benefits: [
    {
      icon: "🚀",
      title: "Quick Setup",
      description: "Get up and running in under 30 minutes"
    },
    {
      icon: "💡", 
      title: "Expert Guidance",
      description: "Dedicated success manager for Enterprise plans"
    },
    // {
    //   icon: "🔒",
    //   title: "Enterprise Security", 
    //   description: "SOC2, GDPR, HIPAA compliant from day one"
    // }
  ],
  
  form: {
    title: "Request a Demo",
    subtitle: "See Ants Platform in action with a personalized demo",
    
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name",
        required: true
      },
      email: {
        label: "Work Email",
        placeholder: "you@company.com", 
        required: true
      },
      company: {
        label: "Company",
        placeholder: "Your company",
        required: true
      },
      agentCount: {
        label: "Number of AI Agents",
        placeholder: "e.g., 10-50",
        options: [
          "1-10",
          "10-50", 
          "50-100",
          "100-500",
          "500-1000",
          "1000+"
        ]
      },
      useCase: {
        label: "Tell us about your use case",
        placeholder: "What AI agents are you currently running? What challenges are you facing?"
      }
    },
    
    submitText: "Request Demo",
    privacyText: "By submitting this form, you agree to our Privacy Policy and Terms of Service"
  }
};