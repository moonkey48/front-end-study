import React from 'react';
import { useLocation } from 'react-router-dom';
import PostContainer from '../components/PostContainer';

const PostPage = () => {
    const location = useLocation();
    const id = location.pathname.replace('/','');

    return <PostContainer postId={parseInt(id,10)} />
}

export default PostPage;