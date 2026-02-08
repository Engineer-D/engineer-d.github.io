import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Bot, Brain, Shield, Cpu } from "lucide-react";
import { projects, siteConfig } from "@/lib/constants";
import { ProjectCard } from "@/components/ProjectCard";

const specialties = [
  {
    icon: Bot,
    title: "AI Agent Systems",
    description:
      "Production multi-agent architectures for cybersecurity, sales automation, and customer support.",
  },
  {
    icon: Brain,
    title: "LLM Alignment & Fine-tuning",
    description:
      "RLHF, DPO, GRPO, PPO, SFT, PEFT/QLoRA — training models that reason reliably.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & FinTech AI",
    description:
      "Compliance automation, fraud detection, and risk assessment with sub-second latency.",
  },
  {
    icon: Cpu,
    title: "Embedded & Edge AI",
    description:
      "Computer vision and ML on ESP32, Raspberry Pi, and IoT devices with real-time inference.",
  },
];

const stats = [
  { value: "6+", label: "Production AI Agents" },
  { value: "5+", label: "Years Experience" },
  { value: "500+", label: "Students Mentored" },
  { value: "4", label: "Conference Talks" },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <p className="text-accent font-medium mb-3">Hi, I&apos;m</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Oluwadamifogore Daramola
        </h1>
        <p className="text-xl sm:text-2xl text-muted mb-6">
          ML/AI Engineer &middot; Agent Systems &middot; LLM Alignment
        </p>
        <p className="text-base text-muted max-w-2xl leading-relaxed mb-8">
          I build production AI agents for cybersecurity, fintech, and
          healthcare. Specializing in LLM alignment, multi-agent systems, and
          embedded AI. Founder of{" "}
          <span className="text-foreground font-medium">Eusate</span>.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-medium hover:bg-accent-light transition-colors"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-card-border px-5 py-2.5 rounded-lg font-medium hover:border-accent/50 transition-colors"
          >
            Get in Touch
          </Link>
          <div className="flex items-center gap-3 ml-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="border border-card-border rounded-xl p-5 bg-card hover:border-accent/30 transition-colors"
            >
              <s.icon size={22} className="text-accent mb-3" />
              <h3 className="font-semibold mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-accent hover:text-accent-light transition-colors flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center border border-card-border rounded-xl p-5 bg-card"
            >
              <p className="text-2xl sm:text-3xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
