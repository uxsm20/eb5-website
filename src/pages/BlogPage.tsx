import React from 'react';
import BlogList from '../components/BlogList';
import { useScrollTop } from '../hooks/useScrollTop';

const BlogPage: React.FC = () => {
  useScrollTop();

  return (
    <div className="pt-20">
      <BlogList />
    </div>
  );
};

export default BlogPage;
