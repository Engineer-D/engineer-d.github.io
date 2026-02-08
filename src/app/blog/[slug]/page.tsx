import { getAllContent, getContentBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllContent("blog");
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getContentBySlug("blog", slug);
    if (!post) return { title: "Not Found" };
    return {
      title: post.frontmatter.title as string,
      description: post.frontmatter.description as string,
    };
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to Blog
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        {post.frontmatter.title as string}
      </h1>
      {post.frontmatter.date && (
        <p className="text-sm text-muted mb-8">{post.frontmatter.date as string}</p>
      )}

      <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
