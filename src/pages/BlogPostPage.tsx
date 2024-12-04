import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetail from '../components/BlogDetail';
import { useScrollTop } from '../hooks/useScrollTop';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  useScrollTop();

  return (
    <div className="pt-20">
      <BlogDetail slug={slug || ''} />
    </div>
  );
};

export default BlogPostPage;
