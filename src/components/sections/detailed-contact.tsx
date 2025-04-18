import React from "react";
import {
  Code,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactItemProps {
  icon: React.ElementType;
  text: string;
}

function ContactItem({ icon: Icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="size-4 text-muted-foreground" />
      <span className="text-sm text-foreground">{text}</span>
    </div>
  );
}

export function DetailedContact() {
  const contactDetails = [
    {
      icon: Code,
      text: "Senior Frontend Developer",
    },
    { icon: Lightbulb, text: "Founder @Quaric" },
    { icon: MapPin, text: "Ho Chi Minh City, Viet Nam" },
    { icon: Phone, text: "+84 777 888 148" },
    { icon: Mail, text: "dai@chanhdai.com" },
    { icon: LinkIcon, text: "chanhdai.com" },
  ];

  return (
    <section id="detailed-contact">
      {/* <h2 className="text-xl font-bold mb-4">Contact Details</h2> */}
      <div className="flex flex-col gap-4">
        {contactDetails.map((item, index) => (
          <ContactItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
}
