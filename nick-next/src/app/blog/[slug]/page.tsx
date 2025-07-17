import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const postPath = path.join(process.cwd(), 'nick-next/posts', `${params.slug}.md`);
  if (!fs.existsSync(postPath)) {
    notFound();
  }
  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);

  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>{data.title}</h1>
      <div style={{ color: '#888', fontSize: 15, marginBottom: 32 }}>{data.date}</div>
      <article style={{ lineHeight: 1.7, fontSize: 18, background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #eee' }}>
        <MDXRemote source={content} />
      </article>
    </main>
  );
} 