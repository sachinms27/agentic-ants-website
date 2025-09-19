# Agentic Ants - AI Command Center Landing Page

A modern, responsive landing page for Agentic Ants - an enterprise-grade AI operations platform that provides comprehensive observability, security, policy management, and cost management for production AI agents and GenAI applications.

## 🚀 Overview

This landing page showcases Agentic Ants' AI Command Center, featuring:
- **FinOps**: AI cost optimization and budget management
- **SRE**: Real-time monitoring and reliability engineering for AI systems
- **SecOps**: Enterprise security and compliance for AI operations

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
  - [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- **Utilities**:
  - [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Conditional CSS classes
  - [class-variance-authority](https://cva.style/) - Component variants

## 📁 Project Structure

```
landing-page/
├── pages/              # Next.js pages
│   ├── _app.tsx       # Application wrapper
│   ├── _document.tsx  # Custom document
│   └── index.tsx      # Main landing page
├── src/
│   ├── components/    # components
│   │   ├── ui/       # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── data/         # Static data and configurations
│   ├── hooks/        # Custom React hooks
│   └── index.css     # Global styles & Tailwind imports
├── public/           # Static assets (images, icons)
├── .eslintrc.json   # ESLint configuration
├── .gitignore       # Git ignore rules
├── next.config.js   # Next.js configuration
├── package.json     # Dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
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

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Key Components

### Landing Page Sections
- **Navbar** - Navigation with theme toggle and mobile menu
- **Hero** - Main hero section with call-to-action
- **Challenges** - AI deployment challenges overview
- **Platform Intro** - Introduction to the platform capabilities
- **Three Pillars** - FinOps, SRE, and SecOps features
- **Key Capabilities** - Core platform features
- **Included Features** - Comprehensive feature list
- **Integrations** - Supported platforms and tools
- **Pricing** - Flexible pricing plans
- **Credits Explained** - Usage-based pricing explanation
- **Contact** - Contact form and information
- **Footer** - Links and company information

### UI Components
- Custom button components with variants
- Card layouts for features and pricing
- Responsive navigation with mobile support
- Theme toggle for light/dark mode
- Animated sections with Framer Motion

## 🎯 Features

- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Dark Mode** - Built-in theme toggle with system preference detection
- ✅ **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- ✅ **Performance** - Optimized images, lazy loading, and code splitting
- ✅ **Accessibility** - ARIA labels and keyboard navigation support
- ✅ **Type Safety** - Full TypeScript support with strict mode
- ✅ **Modern UI** - Clean, professional design with smooth animations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add any API endpoints or configuration here
NEXT_PUBLIC_API_URL=your-api-url
```

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

### Deployment Platforms

This Next.js application can be deployed to:
- [Vercel](https://vercel.com/) (Recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support  visit our [website](https://agenticants.ai).


Built with ❤️ by the Agentic Ants team
