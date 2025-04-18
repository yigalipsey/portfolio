import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { CheckCircle2 } from "lucide-react";
import { HyperText } from "@/components/magicui/hyper-text";

// Define BLUR_FADE_DELAY or import it from a shared location
const BLUR_FADE_DELAY = 0.04;

export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl flex gap-8 items-stretch">
        <BlurFade
          delay={BLUR_FADE_DELAY}
          className="border border-zinc-400 dark:border-zinc-800"
        >
          <Avatar className="size-24 border border-zinc-400 dark:border-zinc-800">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 1.5} className="flex-1">
          <div className="flex flex-col flex-1 border border-zinc-400 dark:border-zinc-800 p-4 h-full">
            <div className="flex-1 flex items-center justify-start text-muted-foreground">
              Available for work
            </div>
            <div className="flex-1 flex items-center justify-start gap-2">
              <h1 className="text-3xl font-bold tracking-tight">{DATA.name}</h1>
              <CheckCircle2 size={24} className="text-blue-500" />
            </div>
            <div className="flex-1 flex items-center justify-start">
              <HyperText
                className="text-lg text-muted-foreground font-normal"
                as="p"
                startOnView={true}
                delay={BLUR_FADE_DELAY * 2}
              >
                {DATA.description}
              </HyperText>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
