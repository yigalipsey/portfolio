import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HackathonsSection } from "@/components/sections/hackathons-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";
import { NameWriteEffect } from "@/components/apple-hello-effect";
import { DotDivider } from "@/components/dot-divider";
import { DetailedContact } from "@/components/sections/detailed-contact";

// Keep BLUR_FADE_DELAY here if sections need it as a prop,
// or remove if defined within each section component.
// For now, assuming it's defined within each section.

export default function Page() {
  return (
    <main className="flex flex-col  mx-auto  max-w-[600px] min-h-[100dvh] ">
      <div className="w-full 0">
        <NameWriteEffect speed={1.2} />
      </div>
      <HeroSection />
      <DotDivider hideTopBorder={true} />
      <div className="w-[90%] py-6 mx-auto">
        <DetailedContact />
      </div>
      <DotDivider />
      <div className="w-[90%] py-6 mx-auto">
        <AboutSection />
      </div>
      <DotDivider />
      <div className="w-[90%] py-6 mx-auto">
        <WorkSection />
      </div>
      <DotDivider />
      <div className="w-[90%] py-6 mx-auto">
        <EducationSection />
      </div>
      <DotDivider />
      <div className="w-[90%] py-6 mx-auto">
        <SkillsSection />
      </div>
      <DotDivider />
      <div className="w-[90%] py-6 mx-auto">
        <ProjectsSection />
      </div>
      <DotDivider />
      <div className="w-[90%] py-6 mx-auto">
        <HackathonsSection />
      </div>
      <DotDivider />
      <div className="w-[90%] py-6 mx-auto">
        <ContactSection />
      </div>
    </main>
  );
}
