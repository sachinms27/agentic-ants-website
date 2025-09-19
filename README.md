# Agentic Ants - AI Command Center Landing Page

A modern, responsive landing page for Agentic Ants - an enterprise-grade AI operations platform that provides comprehensive observability, security, policy management, and cost management for production AI agents and GenAI applications.

## 🚀 Overview

This landing page showcases Agentic Ants' AI Command Center, featuring:
- **FinOps**: AI cost optimization and budget management with token usage tracking and ROI analysis
- **SRE**: Real-time monitoring and reliability engineering for AI systems with automated incident response
- **SecOps**: Enterprise security and compliance for AI operations with SOC2, GDPR, and HIPAA support

The platform offers comprehensive AI agent management capabilities including agent discovery, observability dashboards, compliance reporting, and flexible deployment options (SaaS or Private VPC).

## 🛠️ Tech Stack

- **Framework**: [Next.js 14.2.16](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript 5.7.2](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 3.4.15](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
    - `@radix-ui/react-select` - Select component
    - `@radix-ui/react-slot` - Slot component
  - [Lucide React 0.487.0](https://lucide.dev/) - Beautiful & consistent icons
- **Animations**: [Framer Motion 12.23.12](https://www.framer.com/motion/) - Production-ready animation library
- **Email Service**: [Nodemailer 7.0.6](https://nodemailer.com/) - Email sending functionality
- **Utilities**:
  - [clsx 2.1.1](https://github.com/lukeed/clsx) & [tailwind-merge 2.5.5](https://github.com/dcastil/tailwind-merge) - Conditional CSS classes
  - [class-variance-authority 0.7.1](https://cva.style/) - Component variants
  - [dotenv 17.2.2](https://github.com/motdotla/dotenv) - Environment variable management

## 📁 Project Structure

```
agentic-ants-website/
├── pages/                    # Next.js pages
│   ├── _app.tsx             # Application wrapper with theme provider
│   ├── _document.tsx        # Custom document with font optimization
│   ├── index.tsx            # Main landing page
│   └── api/
│       └── contact.ts       # Contact form API endpoint
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── button.tsx  # Custom button component
│   │   │   ├── select.tsx  # Custom select component
│   │   │   └── utils.ts    # Utility functions
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Challenges.tsx  # AI challenges overview
│   │   ├── PlatformIntro.tsx # Platform introduction
│   │   ├── ThreePillars.tsx # FinOps, SRE, SecOps pillars
│   │   ├── KeyCapabilities.tsx # Core capabilities
│   │   ├── Features.tsx    # Features showcase
│   │   ├── IncludedFeatures.tsx # Feature list
│   │   ├── Integrations.tsx # Supported integrations
│   │   ├── ScrollingIntegrations.tsx # Animated integrations
│   │   ├── Pricing.tsx     # Pricing plans
│   │   ├── CreditsExplained.tsx # Credit system explanation
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Footer component
│   │   ├── VideoSection.tsx # Video showcase
│   │   ├── ThemeProvider.tsx # Theme context provider
│   │   └── ThemeToggle.tsx # Theme toggle component
│   ├── config/
│   │   └── urls.ts         # URL configurations
│   ├── data/               # Static data and content
│   │   ├── contact.ts      # Contact form data
│   │   ├── content.ts      # Main site content
│   │   ├── credits.ts      # Credits system data
│   │   ├── footer.ts       # Footer data
│   │   ├── includedFeatures.ts # Feature definitions
│   │   ├── keyCapabilities.ts # Capability definitions
│   │   ├── platformIntro.ts # Platform introduction data
│   │   ├── pricing.ts      # Pricing plans data
│   │   └── threePillars.ts # Three pillars data
│   ├── hooks/              # Custom React hooks
│   │   ├── useClickOutside.ts # Click outside detection
│   │   ├── useScrolled.ts  # Scroll detection
│   │   └── useTheme.ts     # Theme management
│   ├── lib/                # Utility libraries
│   │   └── email/          # Email service
│   │       ├── config.ts   # Email configuration
│   │       ├── service.ts  # Email sending service
│   │       └── templates.ts # Email templates
│   ├── types/              # TypeScript type definitions
│   │   └── api.ts          # API type definitions
│   └── index.css           # Global styles & Tailwind imports
├── public/                 # Static assets
│   ├── ants-cropped.svg    # Main logo
│   ├── ants.svg           # Full logo
│   └── [various icons]    # Integration and platform icons
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sachinms27/agentic-ants-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Key Components

### Landing Page Sections
- **Navbar** - Navigation with theme toggle and mobile menu
- **Hero** - Main hero section with call-to-action and social proof metrics
- **Challenges** - AI deployment challenges overview (uncontrolled spend, lack of observability, agent sprawl, security gaps)
- **Platform Intro** - Introduction to platform capabilities and ROI metrics
- **Three Pillars** - FinOps, SRE, and SecOps features with detailed capabilities
- **Included Features** - Comprehensive feature list with availability status
- **Integrations** - Supported platforms and tools with filtering capabilities
- **Key Capabilities** - Core platform features (agent discovery, observability, compliance, deployment)
- **Pricing** - Credit-based pricing plans (Scale and Enterprise)
- **Credits Explained** - Usage-based pricing explanation
- **Contact** - Contact form with validation and email service integration
- **Footer** - Links and company information

### UI Components
- Custom button components with variants and animations
- Card layouts for features, pricing, and integrations
- Responsive navigation with mobile support and theme toggle
- Animated sections with Framer Motion
- Interactive integration grid with hover effects
- Form validation and error handling
- Theme-aware design with light/dark mode support

## 🎯 Features

### Core Platform Capabilities
- ✅ **AI Agent FinOps** - Token usage monitoring, cost per customer query, contract optimization, ROI analytics
- ✅ **AI Agent SRE** - End-to-end tracing, automated incident response, performance analytics, real-time monitoring
- ✅ **AI Agent SecOps** - PII detection & protection, compliance reporting, security guardrails, audit trail management
- ✅ **Agent Discovery** - Automatic inventory of AI agents across your infrastructure
- ✅ **Observability** - Real-time monitoring dashboards with comprehensive metrics
- ✅ **Compliance** - SOC2, GDPR, HIPAA ready with enterprise-grade security
- ✅ **Deployment** - Flexible SaaS or Private VPC deployment options

### Technical Features
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Dark Mode** - Built-in theme toggle with system preference detection
- ✅ **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- ✅ **Performance** - Optimized images, lazy loading, and code splitting
- ✅ **Accessibility** - ARIA labels and keyboard navigation support
- ✅ **Type Safety** - Full TypeScript support with strict mode
- ✅ **Modern UI** - Clean, professional design with smooth animations
- ✅ **Email Integration** - Contact form with Nodemailer service and rate limiting
- ✅ **Form Validation** - Client and server-side validation with error handling

### Supported Integrations
- **Developer SDKs**: JavaScript/TypeScript, Python, OpenTelemetry
- **AI Frameworks**: LangChain & LangGraph, LlamaIndex, Semantic Kernel, AutoGen, Haystack
- **No-Code Builders**: Flowise, Langflow, Dify.AI, n8n, LobeChat
- **AI Gateways**: OpenRouter, LiteLLM Proxy
- **Productivity Tools**: JIRA, Slack

## 💰 Pricing Model

Agentic Ants uses a credit-based pricing system with two main plans:

### Scale Plan - $50/month
- **Target**: Startups, small teams, pilots
- **Credits**: 10,000 credits included
- **Features**:
  - Tracing ingestion: 1,000 req/min
  - Data lookup: 30 days retention
  - Prompt fetching: Unlimited
  - API routes: 30 req/min
  - Datasets API: 100 req/min
  - Metrics API: 100 req/day
  - SSO (Google, AzureAD, GitHub)
  - Data Masking

### Enterprise Plan - Custom Pricing
- **Target**: Enterprises, mission-critical workloads
- **Credits**: Custom credit allocation
- **Features**:
  - Custom ingestion & retention
  - Extended historical data
  - Unlimited throughput
  - Custom API scaling
  - SSO enforcement
  - Org- & project-level RBAC
  - Audit Logs
  - Enterprise SSO (Okta, EntraID)

**Credit Usage**: Credits can be applied flexibly across observability, agents, policies, projects, and evaluations.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Email Configuration (Required for contact form)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=noreply@agenticants.ai
EMAIL_REPLY_TO=sales@agenticants.ai
SALES_TEAM_EMAIL=sales@agenticants.ai
COMPANY_NAME=Agentic Ants

# API Configuration
NEXT_PUBLIC_API_URL=https://agenticants.ai
NODE_ENV=development

# Optional: Custom domain for CORS
NEXT_PUBLIC_DOMAIN=agenticants.ai
```

### Email Service Setup

The contact form uses Nodemailer for email delivery. Configure your SMTP settings in the environment variables above. The service includes:

- **Rate Limiting**: 5 requests per hour per IP address
- **Input Validation**: Server-side validation for all form fields
- **Email Templates**: Automated customer confirmation and sales team notifications
- **Error Handling**: Graceful error handling with user-friendly messages

## 📡 API Documentation

### Contact Form API

**Endpoint**: `POST /api/contact`

**Description**: Handles contact form submissions with validation, rate limiting, and email notifications.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "agentCount": "10-50",
  "useCase": "Customer support automation"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Your message has been sent successfully"
}
```

**Error Responses**:
- `400` - Missing required fields or invalid input
- `429` - Rate limit exceeded (5 requests per hour per IP)
- `500` - Server error

**Rate Limiting**: 5 requests per hour per IP address with automatic cleanup of expired entries.

### Customization

- **Colors & Theme**: Edit `tailwind.config.js` for custom color schemes
- **Typography**: Modify font settings in `src/index.css`
- **Components**: All components are in `src/components/` for easy customization
- **Content**: Update text and data in component files and `src/data/`

## 📝 Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, self-documenting code

### Component Structure
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop typing
- Follow the single responsibility principle

### Performance
- Optimize images and assets
- Implement lazy loading where appropriate
- Minimize bundle size
- Use Next.js Image component for images

## 🚢 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Setup for Production

Ensure all required environment variables are configured:

```env
# Production Email Configuration
SMTP_HOST=your-production-smtp-host
SMTP_PORT=587
SMTP_USER=your-production-smtp-username
SMTP_PASS=your-production-smtp-password
EMAIL_FROM=noreply@agenticants.ai
EMAIL_REPLY_TO=sales@agenticants.ai
SALES_TEAM_EMAIL=sales@agenticants.ai
COMPANY_NAME=Agentic Ants

# Production API Configuration
NEXT_PUBLIC_API_URL=https://agenticants.ai
NODE_ENV=production
NEXT_PUBLIC_DOMAIN=agenticants.ai
```

### Deployment Platforms

This Next.js application can be deployed to:
- [Vercel](https://vercel.com/) (Recommended) - Zero-config deployment with automatic HTTPS
- [Netlify](https://www.netlify.com/) - JAMstack deployment platform
- [AWS Amplify](https://aws.amazon.com/amplify/) - Full-stack deployment on AWS
- [Railway](https://railway.app/) - Modern deployment platform
- Any Node.js hosting platform (Heroku, DigitalOcean, etc.)

### Vercel Deployment (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Build Considerations

- **TypeScript Compilation**: Ensure `tsconfig.json` is properly configured
- **Image Optimization**: Next.js Image component is used for optimized loading
- **Email Service**: Configure SMTP credentials for contact form functionality
- **Rate Limiting**: In-memory rate limiting (consider Redis for production scale)

## 🔧 Troubleshooting

### Common Issues

**Build Errors**:
- Ensure all environment variables are properly configured
- Check TypeScript compilation errors with `npm run lint`
- Verify all dependencies are installed with `npm install`

**Email Service Issues**:
- Verify SMTP credentials are correct
- Check firewall settings for SMTP port access
- Ensure email templates are properly formatted

**Rate Limiting**:
- Contact form has 5 requests per hour per IP limit
- Clear browser cache or wait for rate limit reset
- Consider implementing Redis for production rate limiting

**Theme Issues**:
- Clear browser cache for theme persistence
- Check `useTheme` hook implementation
- Verify Tailwind CSS configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, visit our [website](https://agenticants.ai) or contact us through the contact form on the landing page.

**Documentation**: [https://agenticants.ai/docs](https://agenticants.ai/docs)  
**Community**: [https://agenticants.ai/community](https://agenticants.ai/community)  
**Enterprise Support**: Available with Enterprise plan

---

Built with ❤️ by the Agentic Ants team
