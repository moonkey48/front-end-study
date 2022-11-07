import { DECREASE, INCREASE, SET_DIFF } from '../actions/counter';

const initialState = {
    num:0,
    diff:1
}

export default function counter(state=initialState, action){
switch(action.type){
        case INCREASE:
            return{
                ...state,
                num:state.num+state.diff
            }
        case DECREASE:
            return{
                ...state,
                num:state.num-state.diff
            }
        case SET_DIFF:
            return{
                ...state,
                diff:action.payload
            }
        default:
            return state;
    }
}