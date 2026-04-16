import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Tag } from "@/components/ui/Tag";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-32 px-6 md:px-24 border-y border-[#262626] bg-[#0D0D0D]"
      aria-label="Case Studies"
    >
      <ScrollReveal>
        <SectionLabel>Execution &amp; Impact</SectionLabel>
        <h2
          className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#EDEDED]"
          style={{ fontFamily: "var(--font-fraunces), serif", letterSpacing: "-0.01em" }}
        >
          Case Studies
        </h2>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mb-16 leading-relaxed">
          Each project follows a four-part structure: Problem → Insight → Approach → Impact. No
          code samples. Only business outcomes.
        </p>
      </ScrollReveal>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={0.1}>
            <article
              className="border border-[#262626] rounded-2xl bg-[#0A0A0A] overflow-hidden flex flex-col md:flex-row group hover:border-[#635BFF]/30 transition-colors duration-300"
              aria-label={project.title}
            >
              {/* Content */}
              <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-mono text-[#635BFF] uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {project.company}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#262626]" aria-hidden="true" />
                  <span className="text-xs text-[#A1A1AA] font-mono">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-8 text-[#EDEDED] group-hover:text-[#635BFF] transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="space-y-5 text-sm">
                  {[
                    { label: "Problem", value: project.problem, color: "text-[#A1A1AA]" },
                    { label: "Insight", value: project.insight, color: "text-[#A1A1AA]" },
                    { label: "Approach", value: project.approach, color: "text-[#A1A1AA]" },
                    { label: "Impact", value: project.impact, color: "text-[#EDEDED] font-medium" },
                  ].map(({ label, value, color }) => (
                    <div
                      key={label}
                      className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-2"
                    >
                      <strong
                        className={`uppercase tracking-wider text-xs mt-0.5 ${
                          label === "Impact"
                            ? "text-[#22C55E]"
                            : "text-[#A1A1AA]"
                        }`}
                      >
                        {label}
                      </strong>
                      <span className={`${color} leading-relaxed`}>{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              {/* Metric panel */}
              <div className="md:w-1/3 bg-[#141414] border-t md:border-t-0 md:border-l border-[#262626] flex items-center justify-center min-h-[200px] relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background:
                      "radial-gradient(circle at center, #635BFF 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 text-center p-8">
                  <div
                    className="text-3xl md:text-4xl font-medium text-[#635BFF] mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {project.metric}
                  </div>
                  <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">
                    Key Outcome
                  </div>
                  <div
                    className="mt-6 w-16 h-16 border border-[#635BFF]/40 rounded-full mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(99,91,255,0.15)]"
                    aria-hidden="true"
                  >
                    <span
                      className="text-[#635BFF] text-xs font-mono font-semibold"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      AUC&gt;0.9
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
