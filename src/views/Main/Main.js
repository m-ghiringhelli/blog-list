import React, { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import { fetchBlogs } from '../../services/blogs';

export default function Main() {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchBlogs();
        setBlogs(resp);
        setLoading(false);
      } catch (e) {
        setErrorMessage('Whoopsies! Try refreshing the page?');
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id}
          title={blog.title}
          subtitle={blog.subtitle}
          text={blog.text} 
          image={blog.image} />
      ))}
    </div>
  );
}
