import Head from 'next/head'
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { PlatformIntro } from "@/components/PlatformIntro"
import { ThreePillars } from "@/components/ThreePillars"
import { KeyCapabilities } from "@/components/KeyCapabilities"
import { Challenges } from "@/components/Challenges"
import { Features } from "@/components/Features"
import { IncludedFeatures } from "@/components/IncludedFeatures"
import { Integrations } from "@/components/Integrations"
import { ScrollingIntegrations } from "@/components/ScrollingIntegrations"
import { Pricing } from "@/components/Pricing"
import { CreditsExplained } from "@/components/CreditsExplained"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ScrollSpyManager } from "@/components/ScrollSpyManager"

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentic Ants - AI Command Center for AI Agents | Enterprise LLMOps Platform</title>
        <meta name="description" content="Transform your AI operations with enterprise-grade observability, security, and cost management for production AI agents and GenAI applications. Comprehensive FinOps, SRE, and SecOps platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI agents, LLMOps, FinOps, SRE, SecOps, AI observability, AI cost management, enterprise AI, AI compliance" />
        <meta property="og:title" content="Agentic Ants - AI Command Center for AI Agents" />
        <meta property="og:description" content="Enterprise-grade observability, security, and cost management for production AI agents and GenAI applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agenticants.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agentic Ants - AI Command Center for AI Agents" />
        <meta name="twitter:description" content="Enterprise-grade observability, security, and cost management for production AI agents and GenAI applications." />
        <link rel="canonical" href="https://agenticants.ai" />
        <link rel="icon" type="image/svg+xml" href="/ants-cropped.svg" />
       
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