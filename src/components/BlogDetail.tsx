import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { Blog } from '../types/blog';
import { blogs } from '../data/blogs';

interface BlogDetailProps {
  slug: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ slug }) => {
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center text-gray-600 gap-4">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>

        <div className="mb-12">
          <img 
            src={blog.heroImage} 
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center italic">
            Image source: Unsplash.com
          </p>
        </div>

        <div className="prose">
          <ReactMarkdown>
            {blog.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
            <div className="flex flex-wrap items-center gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm font-medium text-primary-600 bg-white px-3 py-1 rounded-full border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <Link 
              to="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
