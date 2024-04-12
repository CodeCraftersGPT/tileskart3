// create postlist component consuming the API from jsonplaceholder.typicode.com/posts
// and display the list of posts in the browser
import { useEffect,useState } from 'react';

function PostList() {
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState('');
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts1')
        .then((response) => 
        {
            if(response.ok){
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .then(data => setPosts(data))
        .catch(error => {
            setError('Something went wrong');
            console.log(error);
        })
    },[])


    if(error){
        return <div>{error}</div>
    }


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
