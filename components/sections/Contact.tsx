"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { contactContent } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-24 border-t border-[#262626] bg-[#0A0A0A]"
      aria-label="Contact"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-[#635BFF] uppercase tracking-widest mb-8">
            <span className="w-4 h-px bg-[#635BFF]" aria-hidden="true" />
            Get in touch
          </span>
          <h2
            className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-8 text-[#EDEDED]"
            style={{ fontFamily: "var(--font-fraunces), serif", letterSpacing: "-0.02em" }}
          >
            {contactContent.headline}
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-4 max-w-2xl mx-auto leading-relaxed">
            {contactContent.subtext}
          </p>
          <p className="text-sm text-[#A1A1AA] mb-12 font-mono"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            {contactContent.availability} &nbsp;·&nbsp; {contactContent.roleTarget}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={`mailto:${contactContent.email}`}
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#EDEDED] text-[#0A0A0A] font-medium text-sm transition-transform hover:scale-[0.97] active:scale-[0.97] focus:ring-2 focus:ring-[#635BFF] focus:outline-none shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              {contactContent.email}
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#141414] border border-[#262626] text-[#EDEDED] font-medium text-sm transition-all hover:bg-[#262626] hover:scale-[0.97] active:scale-[0.97] focus:ring-2 focus:ring-[#635BFF] focus:outline-none"
            >
              Download Resume
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex gap-6">
            {[
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/shashi-shekhar-ds",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#EDEDED] transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#262626] w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <span>© 2026 Shashi Shekhar. All rights reserved.</span>
          <span
            className="font-mono"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </div>
    </section>
  );
}
