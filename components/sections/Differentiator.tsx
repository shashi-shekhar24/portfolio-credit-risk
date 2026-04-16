import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RFMVisualizerClient } from "@/components/motion/RFMVisualizerClient";

export function Differentiator() {
  return (
    <section
      id="methodology"
      className="py-32 px-6 md:px-24"
      aria-label="Signal Engineering vs Static Scorecards"
    >
      <ScrollReveal>
        <SectionLabel>Methodology</SectionLabel>
        <h2
          className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#EDEDED]"
          style={{ fontFamily: "var(--font-fraunces), serif", letterSpacing: "-0.01em" }}
        >
          Signal Engineering vs.<br />Static Scorecards
        </h2>
        <p className="text-[#A1A1AA] max-w-3xl mb-16 text-lg leading-relaxed">
          Traditional Probability of Default models fail SMEs. They rely on quarterly balance sheets
          and thin credit bureau files. By engineering behavioural signals from raw transactional
          data, distress is captured weeks before a missed payment.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Legacy card */}
        <ScrollReveal delay={0.1}>
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 h-full flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#FF4C4C]/10 flex items-center justify-center mb-6 border border-[#FF4C4C]/20">
              <span
                className="text-[#FF4C4C] text-xs font-bold"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                LEGACY
              </span>
            </div>
            <h3 className="font-sans font-semibold text-xl mb-3 text-[#EDEDED]">
              The Static Failure
            </h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed flex-grow">
              Logistic regression over standard DTI and credit utilisation assumes linear risk. For
              modern, high-velocity SMEs with thin bureau files, this produces high false-positive
              rejection rates and invisible risk accumulation.
            </p>
            <div className="mt-8">
              <RFMVisualizerClient />
            </div>
          </div>
        </ScrollReveal>

        {/* RFM card */}
        <ScrollReveal delay={0.2} className="md:col-span-2">
          <div className="bg-[#141414] border border-[#635BFF]/30 rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group">
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#635BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            <div className="w-12 h-12 rounded-full bg-[#635BFF]/10 flex items-center justify-center mb-6 relative z-10 border border-[#635BFF]/30">
              <span
                className="text-[#635BFF] text-xs font-bold"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                RFM
              </span>
            </div>
            <h3 className="font-sans font-semibold text-xl mb-3 relative z-10 text-[#EDEDED]">
              Transactional Dynamics
            </h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-xl relative z-10 mb-6">
              Applying Recency, Frequency, and Monetary modelling to daily supply-chain cash flows.
              FFT isolates dominant business cycle frequency — normalising RFM metrics beyond
              arbitrary calendar windows. Gradient Boosting maps non-linear relationships, extracting
              predictive alpha from volatility, payment delays, and vendor concentration.
            </p>

            {/* Formula chips */}
            <div
              className="flex flex-wrap gap-3 relative z-10"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              {[
                "Recency(t) = Δ days",
                "Freq(μ) = n/Σt",
                "PD = ƒ(RFM)",
                "FFT(x) → cycle frequency",
              ].map((formula) => (
                <span
                  key={formula}
                  className="bg-[#0A0A0A] px-3 py-2 rounded-md border border-[#635BFF]/20 text-xs text-[#635BFF]"
                >
                  {formula}
                </span>
              ))}
            </div>

            {/* Comparison stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-[#0A0A0A] rounded-xl p-4 border border-[#262626]">
                <div className="text-xs text-[#A1A1AA] uppercase tracking-wider mb-1">
                  Signal Lead Time
                </div>
                <div
                  className="text-2xl font-medium text-[#22C55E]"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  45 days
                </div>
                <div className="text-xs text-[#A1A1AA] mt-1">before first missed payment</div>
              </div>
              <div className="bg-[#0A0A0A] rounded-xl p-4 border border-[#262626]">
                <div className="text-xs text-[#A1A1AA] uppercase tracking-wider mb-1">
                  vs. Bureau Lag
                </div>
                <div
                  className="text-2xl font-medium text-[#FF4C4C]"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  90 days
                </div>
                <div className="text-xs text-[#A1A1AA] mt-1">delinquency before detection</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
