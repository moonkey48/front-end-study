import { GET_POST, GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS, GET_POST_ERROR, GET_POST_SUCCESS } from '../actions/posts';
import { handleAsyncAction, handleAsyncActionById, postsUtils } from '../lib/postsUtil';

const initialState={
    post:{},
    posts:{
        loading:false,
        data:null,
        error:null
    }
}

export const getPostsForSaga = () => ({type:GET_POSTS});
export const getPostForSaga = id => ({type:GET_POST, payload:id, meta:id});

export default function posts(state=initialState, action){
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncAction(GET_POSTS,'posts')(state,action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionById(GET_POST, 'post')(state,action)
        default:
            return state;
    }
}