import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

// Define BLUR_FADE_DELAY or import it from a shared location
const BLUR_FADE_DELAY = 0.04;

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Take a Peek at My Creations
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve built a range of projects, from sleek landing pages to
                robust web platforms. Below are some highlights I&apos;m proud
                of.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
