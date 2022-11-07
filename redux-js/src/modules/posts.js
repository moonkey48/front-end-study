import * as postsAPI from '../api/posts';
import { createPromiseSaga, createPromiseSagaById, createPromiseThunk, createPromiseThunkById, handleAsyncActionById, handleAsyncActions, reducerUtils } from '../lib/asyncUtils';
import {call, put, takeEvery} from 'redux-saga/effects';

/**
 * 프로미스를 다루는 리덕스 모듈을 다룰 때 주의 사항
 * 1. 프로미스가 시작, 성공, 실패 했을 때 다른 액션을 디스패치해야 한다.
 * 2. 각 프로미스마다 thunk 함수를 만들어주어야 한다.
 * 3. 리듀서에서 액션에 따라 로딩중, 결과, 에러 상태를 변경해주어야 한다.
 */
 const GET_POSTS = 'GET_POSTS'; // 요청 시작
 const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
 const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패
 
 // 포스트 하나 조회하기
 const GET_POST = 'GET_POST';
 const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
 const GET_POST_ERROR = 'GET_POST_ERROR';
 
 //redux-thunk
//  export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
//  export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

 //redux-saga
 export const getPosts = () => ({type:GET_POSTS});
 export const getPost = id => ({type:GET_POST, payload:id, meta:id});

const getPostsSaga = createPromiseSaga(GET_POSTS,postsAPI.getPosts)
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

export function* postsSaga(){
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}


 
 // initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
 const initialState = {
   posts: reducerUtils.initial(),
   post: {}
 };
 
 export default function posts(state = initialState, action) {
   switch (action.type) {
     case GET_POSTS:
     case GET_POSTS_SUCCESS:
     case GET_POSTS_ERROR:
       return handleAsyncActions(GET_POSTS, 'posts',true)(state, action);
     case GET_POST:
     case GET_POST_SUCCESS:
     case GET_POST_ERROR:
       return handleAsyncActionById(GET_POST, 'post', true)(state, action);
     default:
       return state;
   }
 }
 














//util 적용 전

// import * as postsAPI from '../api/posts';

// /**
//  * 프로미스를 다루는 리덕스 모듈을 다룰 때 주의 사항
//  * 1. 프로미스가 시작, 성공, 실패 했을 때 다른 액션을 디스패치해야 한다.
//  * 2. 각 프로미스마다 thunk 함수를 만들어주어야 한다.
//  * 3. 리듀서에서 액션에 따라 로딩중, 결과, 에러 상태를 변경해주어야 한다.
//  */

// const GET_POSTS = 'GET_POSTS';
// const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
// const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// const GET_POST = 'GET_POST';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_ERROR = 'GET_POST_ERROR';

// /**
//  * thunk를 사용할 때, 꼭 모든 액션들에 대하여 액션 생성 함수를 만들 필요는 없다.
//  * 그냥 thunk 함수에서 바로 액션 객체를 만들어주어도 된다.
//  */
// export const getPosts = () => async dispatch => {
//     dispatch({type:GET_POSTS});
//     try{
//         const posts = await postsAPI.getPosts();
//         dispatch({type:GET_POSTS_SUCCESS, posts});
//     }catch(e){
//         dispatch({type:GET_POSTS_ERROR, error:e});
//     }
// }

// export const getPost = id => async dispatch =>{
//     dispatch({type:GET_POST});
//     try{
//         const post = await postsAPI.getPostById(id);
//         dispatch({type:GET_POST_SUCCESS,post});
//     }catch(e){
//         dispatch({type:GET_POST_ERROR,error:e});
//     }
// }

// const initialState = {
//     posts:{
//         loading:false,
//         data:null,
//         error:null,
//     },
//     post:{
//         loading:false,
//         data:null,
//         error:null,
//     }
// }

// export default function posts(state=initialState, action){
//     switch(action.type){
//         case GET_POSTS:
//             return {
//                 ...state,
//                 posts:{
//                     loading:true,
//                     data:null,
//                     error:null,
//                 }
//             }
//         case GET_POSTS_SUCCESS:
//             return {
//                 ...state,
//                 posts:{
//                     loading:false,
//                     data:action.posts,
//                     error:null,
//                 }
//             }
//         case GET_POSTS_ERROR:
//             return {
//                 ...state,
//                 posts:{
//                     loading:true,
//                     data:null,
//                     error:action.error,
//                 }
//             }
//         case GET_POST:
//             return {
//                 ...state,
//                 post:{
//                     loading:true,
//                     data:null,
//                     error:null,
//                 }
//             }
//         case GET_POST_SUCCESS:
//             return {
//                 ...state,
//                 post:{
//                     loading:false,
//                     data:action.post,
//                     error:null,
//                 }
//             }
//         case GET_POST_ERROR:
//             return {
//                 ...state,
//                 post:{
//                     loading:true,
//                     data:null,
//                     error:action.error,
//                 }
//             }
//         default:
//             return state;
//     }
// }




