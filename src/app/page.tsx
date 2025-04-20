import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HackathonsSection } from "@/components/sections/hackathons-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";
import { NameWriteEffect } from "@/components/apple-hello-effect";
import { ShalomWriteEffect } from "@/components/shalom-write-effect";
import { DotDivider } from "@/components/dot-divider";
import { DetailedContact } from "@/components/sections/detailed-contact";
import BlurFade from "@/components/magicui/blur-fade";

// Define the delay constant
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col mx-auto max-w-[600px] min-h-[100dvh]">
      <BlurFade delay={BLUR_FADE_DELAY * 0}>
        <div className="w-full">
          <NameWriteEffect speed={1.8} />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <div className="w-full flex items-center justify-center min-h-[80px]">
          <ShalomWriteEffect speed={1.2} className="mx-auto" />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <HeroSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <DotDivider hideTopBorder={true} />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
        <div className="w-[90%] py-3 mx-auto">
          <DetailedContact />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <DotDivider />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
        <div className="w-[90%] py-3 mx-auto">
          <AboutSection />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <DotDivider />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
        <div className="w-[90%] py-3 mx-auto">
          <WorkSection />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <DotDivider />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
        <div className="w-[90%] py-3 mx-auto">
          <EducationSection />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <DotDivider />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
        <div className="w-[90%] py-3 mx-auto">
          <SkillsSection />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <DotDivider />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
        <div className="w-[90%] py-3 mx-auto">
          <ProjectsSection />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <DotDivider />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
        <div className="w-[90%] py-3 mx-auto">
          <HackathonsSection />
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <DotDivider />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
        <div className="w-[90%] py-3 mx-auto">
          <ContactSection />
        </div>
      </BlurFade>
    </main>
  );
}
