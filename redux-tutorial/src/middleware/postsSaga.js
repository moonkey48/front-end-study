import {call, put, takeEvery} from 'redux-saga/effects';
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from '../actions/posts';
import * as postsAPI from '../api/postsAPI';

function* getPostsSaga(action){
    try{
        const payload = yield call(postsAPI.getPosts,action.payload);
        console.log('saga on')
        yield put({type: GET_POSTS_SUCCESS,payload });
    }catch(e){
        yield put({type: GET_POSTS_ERROR, payload:e })
    }
}

export function* postsSaga(){
    console.log('posts Saga')
    yield takeEvery(GET_POSTS, getPostsSaga);
}