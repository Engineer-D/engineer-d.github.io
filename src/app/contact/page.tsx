import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Oluwadamifogore Daramola — ML/AI Engineer.",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Engineer-D",
    href: siteConfig.links.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "oluwadamifogore",
    href: siteConfig.links.linkedin,
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@oluwadamifogore",
    href: siteConfig.links.twitter,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Get in Touch
      </h1>
      <p className="text-muted mb-10 max-w-xl">
        Interested in working together, discussing AI research, or just want to
        connect? Reach out through any of these channels.
      </p>

      <div className="space-y-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
            className="flex items-center gap-4 border border-card-border rounded-xl p-5 bg-card hover:border-accent/50 transition-colors group"
          >
            <link.icon
              size={22}
              className="text-accent shrink-0"
            />
            <div>
              <p className="font-medium text-sm group-hover:text-accent transition-colors">
                {link.label}
              </p>
              <p className="text-sm text-muted">{link.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
