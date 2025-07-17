import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMeta {
  title: string;
  date: string;
  slug: string;
}

export default function BlogIndex() {
  // Read all markdown files in the posts directory
  const postsDir = path.join(process.cwd(), 'nick-next/posts');
  const files = fs.readdirSync(postsDir);
  const posts: PostMeta[] = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      title: data.title || filename,
      date: data.date || '',
      slug: filename.replace(/\.md$/, ''),
    };
  });
  // Sort posts by date descending
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ fontSize: 36, marginBottom: 32 }}>Blog</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: 24, padding: 20, border: '1px solid #eee', borderRadius: 8, background: '#fafbfc', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <Link href={`/blog/${post.slug}`} style={{ fontSize: 22, color: '#1a202c', textDecoration: 'none', fontWeight: 600 }}>
              {post.title}
            </Link>
            <div style={{ color: '#888', fontSize: 14, marginTop: 4 }}>{post.date}</div>
          </li>
        ))}
      </ul>
    </main>
  );
} 