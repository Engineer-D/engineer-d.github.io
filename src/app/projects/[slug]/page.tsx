import { projects } from "@/lib/constants";
import { getContentBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Not Found" };
    return {
      title: project.title,
      description: project.description,
    };
  });
}

const typeBadgeColors: Record<string, string> = {
  Production: "bg-green-500/10 text-green-400 border-green-500/20",
  Research: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Personal: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Startup: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const mdx = getContentBySlug("projects", slug);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-xs px-2.5 py-1 rounded-full border ${typeBadgeColors[project.type]}`}
        >
          {project.type}
        </span>
        <span className="text-sm text-muted">{project.year}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {project.title}
      </h1>

      <p className="text-lg text-muted leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md bg-tag-bg text-tag-text"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="flex gap-4 mb-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-card-border px-4 py-2 rounded-lg hover:border-accent/50 transition-colors"
            >
              <Github size={16} /> View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-light transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      )}

      {mdx ? (
        <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={mdx.content} />
        </article>
      ) : (
        <div className="border border-card-border rounded-xl p-8 text-center">
          <p className="text-muted">
            Detailed write-up coming soon.
          </p>
        </div>
      )}
    </div>
  );
}
