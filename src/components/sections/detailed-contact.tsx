import React from "react";
import {
  Code,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ContactItemProps {
  icon: React.ElementType;
  text: string | undefined;
  href?: string;
}

function ContactItem({ icon: Icon, text, href }: ContactItemProps) {
  if (!text) return null;

  const content = (
    <div className="flex items-center gap-3">
      <Icon className="size-4 text-muted-foreground" />
      <span className="text-sm text-foreground">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {content}
      </a>
    );
  }

  return content;
}

export function DetailedContact() {
  const contactDetails = [
    {
      icon: Code,
      text: DATA.description,
    },
    {
      icon: MapPin,
      text: DATA.location,
      href: DATA.locationLink,
    },
    {
      icon: Phone,
      text: DATA.contact.tel,
      href: `tel:${DATA.contact.tel}`,
    },
    {
      icon: Mail,
      text: DATA.contact.email,
      href: `mailto:${DATA.contact.email}`,
    },
    {
      icon: Icons.linkedin,
      text: "/yigalipsey",
      href: DATA.contact.social.LinkedIn.url,
    },
  ];

  return (
    <section id="detailed-contact">
      {/* <h2 className="text-xl font-bold mb-4">Contact Details</h2> */}
      <div className="flex flex-col py-2 gap-4">
        {contactDetails.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            text={item.text}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}
