import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../middleware/postsThunk';
import Post from './Post';

const PostContainer = ({id}) => {
    const dispatch = useDispatch();
    const {loading, data, error} = useSelector(state=>state.posts.post[id])  || {
        loading:false,
        data:null,
        error:null,
    };
    useEffect(()=>{
        console.log(loading);
        if(data) return;
        dispatch(getPostById(id));
    },[data,dispatch])

    if(loading && !data) return <h1>loading...</h1>
    if(error) return <h1>error...</h1>
    if(!data) return null;
    return <Post data={data} />
}

export default PostContainer;