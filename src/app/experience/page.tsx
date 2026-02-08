import { experiences } from "@/lib/constants";
import { Briefcase, FlaskConical, Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career timeline of Oluwadamifogore Daramola — ML Engineer across cybersecurity, fintech, healthcare, and embedded AI.",
};

const typeIcons: Record<string, typeof Briefcase> = {
  Industry: Briefcase,
  Research: FlaskConical,
  Startup: Rocket,
};

const typeColors: Record<string, string> = {
  Industry: "bg-green-500/10 text-green-400 border-green-500/20",
  Research: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Startup: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Experience
      </h1>
      <p className="text-muted mb-12 max-w-2xl">
        From embedded systems to production LLM agents — building AI that ships.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-timeline-line hidden sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const Icon = typeIcons[exp.type] || Briefcase;
            return (
              <div key={i} className="relative sm:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-background hidden sm:block" />

                <div className="border border-card-border rounded-xl p-5 bg-card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-base">{exp.role}</h3>
                      <p className="text-sm text-muted">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border flex items-center gap-1 ${typeColors[exp.type]}`}
                      >
                        <Icon size={11} />
                        {exp.type}
                      </span>
                      <span className="text-xs text-muted">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1 shrink-0">
                          &bull;
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
