import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Tag } from "@/components/ui/Tag";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-24 border-t border-[#262626] bg-[#0D0D0D]"
      aria-label="Experience"
    >
      <ScrollReveal>
        <SectionLabel>Career</SectionLabel>
        <h2
          className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#EDEDED]"
          style={{ fontFamily: "var(--font-fraunces), serif", letterSpacing: "-0.01em" }}
        >
          Experience
        </h2>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mb-16 leading-relaxed">
          A progression of decisions made, models deployed, and capital protected — not a list of
          job titles.
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-[#635BFF]/60 via-[#262626] to-transparent"
          aria-hidden="true"
        />

        <div className="space-y-12">
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Date column */}
                <div className="md:w-[200px] shrink-0 md:text-right">
                  <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-[196px] top-1 w-2 h-2 rounded-full bg-[#635BFF] border-2 border-[#0D0D0D] shadow-[0_0_8px_rgba(99,91,255,0.6)]"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="flex-1 pb-8 md:pb-0">
                  <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 hover:border-[#635BFF]/30 transition-colors duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="text-lg font-semibold text-[#EDEDED] group-hover:text-[#635BFF] transition-colors duration-300">
                        {item.role}
                      </h3>
                      <span
                        className="text-sm font-mono text-[#635BFF] shrink-0"
                        style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                      >
                        {item.company}
                      </span>
                    </div>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
