import { getAllContent } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writings on LLM engineering, agent systems, embedded AI, and research notes by Oluwadamifogore Daramola.",
};

export default function BlogPage() {
  const posts = getAllContent("blog");

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Blog
      </h1>
      <p className="text-muted mb-10">
        Writings on LLM engineering, agent systems, embedded AI, and research
        notes.
      </p>

      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-card-border rounded-xl p-5 bg-card hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold group-hover:text-accent transition-colors">
                    {post.frontmatter.title}
                  </h2>
                  {post.frontmatter.description && (
                    <p className="text-sm text-muted mt-1">
                      {post.frontmatter.description as string}
                    </p>
                  )}
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted group-hover:text-accent transition-colors mt-1 shrink-0"
                />
              </div>
              {post.frontmatter.date && (
                <p className="text-xs text-muted mt-2">
                  {post.frontmatter.date as string}
                </p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-card-border rounded-xl p-12 text-center bg-card">
          <p className="text-muted mb-2">No posts yet.</p>
          <p className="text-sm text-muted">
            Check back soon — writing about LLM engineering, agent systems, and
            research.
          </p>
        </div>
      )}
    </div>
  );
}
