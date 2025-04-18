import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { CheckCircle2 } from "lucide-react";

// Define BLUR_FADE_DELAY or import it from a shared location
const BLUR_FADE_DELAY = 0.04;

export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl flex gap-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Avatar className="size-24 border border-zinc-400 dark:border-zinc-800">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
          <div className="flex flex-col gap-1 flex-1 h-24 justify-center">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">{DATA.name}</h1>
              <CheckCircle2 size={24} className="text-blue-500" />
            </div>
            <p className="text-lg text-muted-foreground">{DATA.description}</p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
