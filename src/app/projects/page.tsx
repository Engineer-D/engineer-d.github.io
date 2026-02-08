import { projects } from "@/lib/constants";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production AI agents, LLM alignment research, and embedded AI systems by Oluwadamifogore Daramola.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Projects
      </h1>
      <p className="text-muted mb-10 max-w-2xl">
        Production systems, research explorations, and personal builds — from
        multi-agent cybersecurity platforms to edge-deployed computer vision.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
