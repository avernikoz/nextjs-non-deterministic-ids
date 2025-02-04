import Blog from "./Blog";

export function generateStaticParams() {
  // Example: if you have a list of blog posts
  const posts = [
    { slug: 'first-post' },
    { slug: 'second-post' },
    // ... more posts
  ];

  return [
    { someparam: [] }, // for /blog
    ...posts.map(post => ({
      someparam: [post.slug] // for /blog/[slug]
    }))
  ];
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-app-dark">
      <Blog />
    </div>
  );
}
