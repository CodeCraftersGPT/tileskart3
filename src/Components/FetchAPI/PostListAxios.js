import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostListAxios() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        setPosts(response.data);
        setLoading(false);
        setError("");
      })
      .catch(error => {
        console.log(error);
        setPosts([]);
        setLoading(false);
        setError("Something went wrong!");
      });
  
  }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


  return (
    <div>
      <h1>Post List Axios</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )

}

export default PostListAxios;