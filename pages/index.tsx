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
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        {/* Theme-aware radial gradient background */}
        <div className="fixed inset-0 z-[-2] bg-background">
          <div className="absolute inset-0 bg-gradient-hero-light dark:bg-gradient-hero-dark" />
        </div>

        <Navbar />
        <main>
          <Hero />
          <Challenges />
          <PlatformIntro />
          <ThreePillars />
          <IncludedFeatures />
          <Integrations />
          {/* <ScrollingIntegrations /> */}
          <KeyCapabilities />
          <Pricing />
          <CreditsExplained />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}