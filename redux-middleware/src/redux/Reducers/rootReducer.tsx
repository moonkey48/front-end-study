import { combineReducers } from 'redux';
import handleBoardList from './handleBoardList';

const rootReducer = combineReducers({handleBoardList});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;