// create postlist component consuming the API from jsonplaceholder.typicode.com/posts
// and display the list of posts in the browser


import React, { Component } from 'react';
import { useEffect,useState } from 'react';


function PostList() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])



    return (
        <div>
            List of Posts
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>

        </div>
    )
}

export default PostList;
