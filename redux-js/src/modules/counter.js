import {delay, put, take, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

const initialState = {
    number:0,
    diff:1
}

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});
export const increaseAsync = () => ({type:INCREASE_ASYNC});
export const decreaseAsync = () => ({type:DECREASE_ASYNC});

function* increaseSaga(){
    yield delay(1000);
    yield put(increase());
}
function* decreaseSaga(){
    yield delay(1000)
    yield put(decrease());
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

export const setDiff = diff => ({type:SET_DIFF,diff})

export default function counter(state=initialState, action){
    switch(action.type){
        case SET_DIFF:
            return {
                ...state,
                diff:action.diff
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff,
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
            }
        default:
            return state;
    }
}