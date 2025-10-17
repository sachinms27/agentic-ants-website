import Head from 'next/head'
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { PlatformIntro } from "@/components/PlatformIntro"
import { ThreePillars } from "@/components/ThreePillars"
// import { KeyCapabilities } from "@/components/KeyCapabilities"
import { Challenges } from "@/components/Challenges"
// import { Features } from "@/components/Features"
import { IncludedFeatures } from "@/components/IncludedFeatures"
import { Integrations } from "@/components/Integrations"
// import { ScrollingIntegrations } from "@/components/ScrollingIntegrations"
import { Pricing } from "@/components/Pricing"
import { CreditsExplained } from "@/components/CreditsExplained"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ScrollSpyManager } from "@/components/ScrollSpyManager"

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>AgenticAnts - AI Command Center for AI Agents | Enterprise LLMOps Platform</title>
        <meta name="title" content="AgenticAnts - AI Command Center for AI Agents | Enterprise LLMOps Platform" />
        <meta name="description" content="Transform your AI operations with enterprise-grade observability, security, and cost management for production AI agents and GenAI applications. Comprehensive FinOps, SRE, and SecOps platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI agents, LLMOps, AI agent management, FinOps, SRE, SecOps, AI observability, AI cost management, enterprise AI, AI compliance, AI agent monitoring, LLM optimization, AI security, agent orchestration, GenAI platform, AI operations, MLOps, AI governance" />
        <meta name="author" content="AgenticAnts" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agenticants.ai/" />
        <meta property="og:title" content="AgenticAnts - AI Command Center for AI Agents | Enterprise LLMOps" />
        <meta property="og:description" content="Enterprise-grade observability, security, and cost management for production AI agents and GenAI applications. Monitor, optimize, and secure your agentic workforce." />
        <meta property="og:image" content="https://agenticants.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:alt" content="AgenticAnts - AI Command Center for AI Agents" />
        <meta property="og:site_name" content="AgenticAnts" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://agenticants.ai/" />
        <meta name="twitter:title" content="AgenticAnts - AI Command Center for AI Agents" />
        <meta name="twitter:description" content="Enterprise-grade observability, security, and cost management for production AI agents and GenAI applications." />
        <meta name="twitter:image" content="https://x.com/AgenticAntsAi/photo" />
        <meta name="twitter:site" content="@AgenticAntsAi" />
        <meta name="twitter:creator" content="@AgenticAntsAi" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://agenticants.ai/" />
        <link rel="icon" type="image/svg+xml" href="/ants-cropped.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AgenticAnts",
              "url": "https://agenticants.ai",
              "logo": "https://agenticants.ai/ants-cropped.svg",
              "description": "Enterprise AI Command Center for AI Agents - LLMOps, FinOps, SRE, and SecOps platform",
              "sameAs": [
                "https://x.com/agenticantsai?s=11",
                "https://www.linkedin.com/company/agentic-ants/about/",
                "https://discord.gg/HnC7ZZNu",
                "https://www.youtube.com/@AgenticAnts"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "url": "https://agenticants.ai/#contact"
              }
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AgenticAnts",
              "url": "https://agenticants.ai",
              "description": "AI Command Center for AI Agents - Enterprise LLMOps Platform",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://agenticants.ai/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AgenticAnts Platform",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free tier available with credit-based pricing"
              },
              "description": "Enterprise-grade AI agent management platform with observability, security, and cost optimization"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        {/* Theme-aware radial gradient background */}
        <div className="fixed inset-0 z-[-2] bg-background">
          <div className="absolute inset-0 bg-gradient-hero-light dark:bg-gradient-hero-dark" />
        </div>

        {/* Dotted overlay pattern - top 30% of viewport with fade effect */}
        <div className="fixed top-0 left-0 w-full h-[100vh] z-[1] pointer-events-none">
          <div className="absolute inset-0
                        bg-[radial-gradient(circle_at_1px_1px,#d1d5db_1px,transparent_1px)]
                        dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_1px)]
                        [background-size:16px_16px]
                        opacity-60 dark:opacity-40">
          </div>
          {/* Fade out gradient for smooth blending */}
          <div className="absolute inset-0
                        bg-gradient-to-b from-transparent via-transparent to-[#ffffff]
                        dark:bg-gradient-to-b dark:from-transparent dark:via-transparent dark:to-[#000000]">
          </div>
        </div>

        <ScrollSpyManager />
        <Navbar />
        <main>
          <Hero />
          <Challenges />
          <PlatformIntro />
          <ThreePillars />
          <IncludedFeatures />
          <Integrations />
          {/* <ScrollingIntegrations /> */}
          {/* <KeyCapabilities /> */}
          <Pricing />
          <CreditsExplained />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}