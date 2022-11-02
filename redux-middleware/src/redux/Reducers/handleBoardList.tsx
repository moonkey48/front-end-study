import { SET_BOARDLIST } from '../Actions/changeBoardListActions';
import * as type from '../Types';
import {createReducer} from 'typesafe-actions';
import produce from 'immer';
/**
 * typesafe-actions/createReducer
 * 기존에 reducer를 switch/case 문으로 작성하는 것을
 * object 형식으로 작성할 수 있게 한다
 * 
 * immer/produce
 * reducer함수 작성시 불변성 유지를 위해 ...문법을 사용했지만 큰 규모의 프로젝트나 복잡한 함수 사용시 불변성 유지가 어렵다.
 * produce는 2개의 인자만 설정해주면 불변성을 스스로 관리해준다. 
 */

export const initialState: type.BOARDLIST = {
    boardList:[]
}

const boardlist = createReducer<type.BOARDLIST, type.changeBoardListAction>(initialState, {
    [SET_BOARDLIST]: (state, action)=>
        produce(state, (prevState)=>{
            prevState.boardList = action.payload
        })
})
export default boardlist;



