import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, decreaseAsync, increase, increaseAsync, setDiff } from '../modules/counter';
import Counter from './Counter';

const CounterContainer = () => {
    const {number, diff} = useSelector(state=>({
        number:state.counter.number,
        diff:state.counter.diff,
    }))
    const dispatch = useDispatch();
    const onIncrease = ()=> dispatch(increaseAsync());
    const onDecrease = ()=> dispatch(decreaseAsync());
    const onSetdiff = diff => dispatch(setDiff(diff));

    return <Counter 
    number={number} 
    diff={diff} 
    onIncrease={onIncrease}
    onDecrease={onDecrease}
    onSetdiff={onSetdiff}
    />
}

export default CounterContainer;