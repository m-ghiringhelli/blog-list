import React, { useState, useEffect } from 'react';
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

  return (
    <div>Main</div>
  );
}
