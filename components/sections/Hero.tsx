import Link from "next/link";
import { heroContent } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center items-start px-6 md:px-24 overflow-hidden border-b border-[#262626]"
      aria-label="Hero"
    >
      {/* Ambient glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 91, 255, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#635BFF 1px, transparent 1px), linear-gradient(90deg, #635BFF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl">
        {/* Eyebrow */}
        <div
          className="animate-fade-in-up mb-8"
          style={{ animationDelay: "0s" }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-[#635BFF] uppercase tracking-widest">
            <span className="w-4 h-px bg-[#635BFF]" aria-hidden="true" />
            Credit Risk Data Scientist
          </span>
        </div>

        {/* Headline — LCP element, CSS animation only */}
        <h1
          className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-[#EDEDED] animate-fade-in-up mb-8"
          style={{
            animationDelay: "0.1s",
            fontFamily: "var(--font-fraunces), serif",
            letterSpacing: "-0.02em",
          }}
        >
          Credit risk is a<br />
          <span className="text-[#A1A1AA]">signal processing</span>
          <br />
          problem.
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {heroContent.subtext}
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href={heroContent.ctaPrimary.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#EDEDED] text-[#0A0A0A] font-medium text-sm transition-transform hover:scale-[0.97] active:scale-[0.97] focus:ring-2 focus:ring-[#635BFF] focus:outline-none"
          >
            {heroContent.ctaPrimary.label}
          </Link>
          <Link
            href={heroContent.ctaSecondary.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#141414] border border-[#262626] text-[#EDEDED] font-medium text-sm transition-all hover:bg-[#262626] hover:scale-[0.97] active:scale-[0.97] focus:ring-2 focus:ring-[#635BFF] focus:outline-none"
          >
            {heroContent.ctaSecondary.label}
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 flex flex-wrap gap-8 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          {[
            { value: "$3B+", label: "Portfolio AUM" },
            { value: "5 yrs", label: "Production PD Models" },
            { value: "340 bps", label: "Peak Gini Improvement" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl font-mono font-medium text-[#EDEDED]"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#A1A1AA] mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up flex flex-col items-center gap-2"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      >
        <span className="text-xs text-[#A1A1AA] font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#635BFF] to-transparent" />
      </div>
    </section>
  );
}
