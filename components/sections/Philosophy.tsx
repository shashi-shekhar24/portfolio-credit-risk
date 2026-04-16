"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { philosophyItems } from "@/lib/data";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-32 px-6 md:px-24"
      aria-label="Philosophy"
    >
      <ScrollReveal>
        <SectionLabel>How I Think</SectionLabel>
        <h2
          className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#EDEDED]"
          style={{ fontFamily: "var(--font-fraunces), serif", letterSpacing: "-0.01em" }}
        >
          The Unfair Advantage
        </h2>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mb-16 leading-relaxed">
          Positions defended in Credit Risk Strategy Committees. These are not hypotheses — they are
          production outcomes.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {philosophyItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <motion.div
              className="group cursor-default p-8 rounded-2xl border border-[#262626] bg-[#141414] hover:border-[#635BFF]/30 transition-colors duration-300 h-full"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="h-0.5 bg-[#262626] mb-6 origin-left"
                whileHover={{ backgroundColor: "#635BFF", scaleX: 1 }}
                initial={{ scaleX: 0.3, backgroundColor: "#262626" }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-start gap-4">
                <span
                  className="text-xs font-mono text-[#635BFF] mt-1 shrink-0 w-6"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#EDEDED] group-hover:text-[#635BFF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed group-hover:text-[#EDEDED]/80 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
