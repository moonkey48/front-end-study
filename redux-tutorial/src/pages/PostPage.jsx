import React from 'react';
import PostContainer from '../components/post/PostContainer';
import {useLocation} from 'react-router-dom';

const PostPage = () => {
    const location = useLocation()
    const id = location.pathname.replace('/','');
    return <PostContainer id={id}/>
}

export default PostPage;