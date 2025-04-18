import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HackathonsSection } from "@/components/sections/hackathons-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";
import { NameWriteEffect } from "@/components/apple-hello-effect";

// Keep BLUR_FADE_DELAY here if sections need it as a prop,
// or remove if defined within each section component.
// For now, assuming it's defined within each section.

export default function Page() {
  return (
    <main className="flex flex-col  mx-auto  max-w-[600px] min-h-[100dvh] space-y-10">
      <div className="w-full flex justify-center pt-8">
        <NameWriteEffect speed={1.2} />
      </div>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <HackathonsSection />
      <ContactSection />
    </main>
  );
}
