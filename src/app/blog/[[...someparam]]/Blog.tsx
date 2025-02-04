"use client";

import { useParams } from "next/navigation";

type BlogPost = {
  title: string;
  date: string;
  content: string;
};

// Mock blog posts data (in real app, this would come from a database or API)
const blogPosts: Record<string, BlogPost> = {
  'first-post': {
    title: 'My First Blog Post',
    date: '2024-03-20',
    content: 'This is the content of my first blog post. It talks about something interesting.',
  },
  'second-post': {
    title: 'Another Great Post',
    date: '2024-03-21',
    content: 'Here is my second blog post. It contains even more fascinating information.',
  },
};

export default function BlogPage() {
  const params = useParams();
  const param = params.someparam;

  const renderContent = () => {
    // If no param (base /blog route), show blog list
    if (!param) {
      return (
        <div className="space-y-8">
          <h1 className="text-3xl font-bold mb-8">My Test Blog</h1>
          <div className="grid gap-6">
            {Object.entries(blogPosts).map(([slug, post]) => (
              <article key={slug} className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div className="text-gray-400 text-sm mb-3">{post.date}</div>
                <p className="text-gray-300">{post.content.substring(0, 100)}...</p>
                <a href={`/blog/${slug}`} className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      );
    }

    const page = Array.isArray(param) ? param[0] : param;
    const post = page ? blogPosts[page as keyof typeof blogPosts] : null;

    // If post exists, show the post
    if (post) {
      return (
        <article className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-400 mb-6">{post.date}</div>
          <p className="text-gray-200 leading-relaxed">{post.content}</p>
          <a href="/blog" className="text-blue-400 hover:text-blue-300 mt-8 inline-block">
            ← Back to blog list
          </a>
        </article>
      );
    }

    // Default case - Show a friendly 404 for blog
    return (
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Oops! Post Not Found</h1>
        <p className="text-gray-400">
          The blog post you're looking for doesn't exist... yet! 
        </p>
        <div className="mt-6">
          <a href="/blog" className="text-blue-400 hover:text-blue-300">
            ← Go back to blog list
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-app-dark text-white p-8">
      {renderContent()}
    </div>
  );
}