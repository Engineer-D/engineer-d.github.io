import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/constants";

const typeBadgeColors: Record<string, string> = {
  Production: "bg-green-500/10 text-green-400 border-green-500/20",
  Research: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Personal: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Startup: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="group border border-card-border rounded-xl p-5 bg-card hover:border-accent/50 transition-all duration-200 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border ${typeBadgeColors[project.type]}`}
          >
            {project.type}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="font-semibold text-base mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-tag-bg text-tag-text"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-tag-bg text-tag-text">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {(project.github || project.demo) && (
          <div className="flex gap-3 pt-2 border-t border-card-border">
            {project.github && (
              <span className="text-xs text-muted flex items-center gap-1">
                <Github size={12} /> Code
              </span>
            )}
            {project.demo && (
              <span className="text-xs text-muted flex items-center gap-1">
                <ExternalLink size={12} /> Demo
              </span>
            )}
          </div>
        )}
      </article>
    </Link>
  );
}
