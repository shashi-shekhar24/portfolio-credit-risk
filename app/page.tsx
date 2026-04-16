import { Hero } from "@/components/sections/Hero";
import { Differentiator } from "@/components/sections/Differentiator";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Philosophy } from "@/components/sections/Philosophy";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Differentiator />
      <CaseStudies />
      <Philosophy />
      <Experience />
      <Contact />
    </>
  );
}
