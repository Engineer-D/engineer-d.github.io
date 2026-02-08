import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src", "content");

export function getContentBySlug(type: "projects" | "blog", slug: string) {
  const filePath = path.join(contentDir, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  return { frontmatter: data, content };
}

export function getAllContent(type: "projects" | "blog") {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(source);
    return { slug, frontmatter: data };
  });
}
