import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../middleware/postsThunk';
import { getPostsForSaga } from '../../reducers/posts';
import Posts from './Posts';

const PostsContainer = () => {
    const {loading,data,error} = useSelector(state=>state.posts.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(data) return;
        dispatch(getPostsForSaga());
    },[data,dispatch]);

    if(loading && !data)return <h1>loading...</h1>
    if(error)return <h1>error!</h1>
    if(!data)return null;
    return <Posts data={data} />
}

export default PostsContainer;