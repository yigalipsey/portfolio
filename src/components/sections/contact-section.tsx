import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define BLUR_FADE_DELAY or import it from a shared location
const BLUR_FADE_DELAY = 0.04;

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm on WhatsApp{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={DATA.contact.social.WhatsApp.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-9 transition-colors hover:text-primary"
                    )}
                    target="_blank"
                  >
                    <Icons.whatsapp
                      className="size-5"
                      style={{ filter: "grayscale(1)" }}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>WhatsApp</p>
                </TooltipContent>
              </Tooltip>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
