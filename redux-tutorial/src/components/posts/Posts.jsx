import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({data}) => {
    useEffect(()=>{
        console.log(data);
    },[data])
    return(
        <ul>{
         data.map(post=>{
            return <li key={post.id} style={{listStyle:'none'}}>
                <Link to={`/${post.id}`}><h1>{post.title}</h1></Link>
            </li>
         })
        }</ul>
    )
}

export default Posts;