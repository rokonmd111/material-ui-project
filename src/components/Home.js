import React, { useEffect, useState } from 'react';
import PostsList from './PostsList';

const Home = () => {
    const [posts, SetPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => SetPosts(data));
    }, [])
    return (
        <div>
            {
                posts.map(post => <PostsList key={post.id} post={post}></PostsList>)
            }
        </div>
    );
};

export default Home;