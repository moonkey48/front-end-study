import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPost } from '../modules/posts';
import Post from './Post';

const PostContainer = ({postId}) => {
    const {data,loading,error} = useSelector(
        state => state.posts.post[postId]
    ) || {
        loading:false,
        data:null,
        error:null,
    }; //아예 데이터가 존재하지 않는 경우를 대비해서 비구조화 할당에 오류가 나지 않게
    const dispatch = useDispatch();

    useEffect(()=>{
        if(data) return;
        dispatch(getPost(postId));
    },[ postId,dispatch,data ]);

    if(loading && !data) return <div>loading...</div>
    if(error) return <div>error...</div>;
    if(!data) return null;

    return <Post post={data}/>
}

export default PostContainer;