import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts';
import { all } from 'redux-saga/effects';
import { postsSaga } from '../middleware/postsSaga';

const rootReducer = combineReducers({counter,posts});

export function* rootSaga(){
    yield all([postsSaga()]);
}

export default rootReducer;