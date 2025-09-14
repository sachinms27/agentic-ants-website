import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { siteContent } from "../data/content";
import { VideoSection } from "./VideoSection";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20" />

      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center mt-8 gap-2 ">
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                  ⚡️{siteContent.hero.announcement.text}
                </div>
              </span>
            </div>

            {/* Main heading */}
            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-5 leading-[1.1] tracking-tight max-w-4xl mx-auto text-[40px]">
              {siteContent.hero.title}
            </h1>

            {/* Description */}
            <p className="sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-[16px] mb-10">
              {siteContent.hero.description}
            </p>

            {/* CTA Buttons Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Primary CTA - Get Started */}
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 h-11 text-base font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a
                  href={siteContent.hero.cta.primary.href}
                  className="flex items-center gap-2"
                >
                  <span className="relative z-10">
                    {siteContent.hero.cta.primary.label}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </Button>
            </div>

            {/* Video Section */}
            <VideoSection />
          </div>
        </div>
      </div>
    </section>
  );
}