import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types/blog';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blog/${blog.slug}`}>
        <img 
          src={blog.heroImage} 
          alt={blog.title}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/blog/${blog.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors duration-300">
            {blog.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {blog.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>
        <Link 
          to={`/blog/${blog.slug}`}
          className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
