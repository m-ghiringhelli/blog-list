import React, { useState, useEffect } from 'react';
import { fetchBlogs } from '../../services/blogs'; 

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      console.log(resp);
    };
    fetchData();
  }, []);

  return (
    <div>Main</div>
  );
}
