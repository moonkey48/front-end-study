import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../../actions/counter';
import Counter from './Counter';

const CounterContainer = () => {
    const dispatch = useDispatch();
    const number = useSelector(state=>state.counter.num);
    const diff = useSelector(state=>state.counter.diff);
    const increaseNum = (e) =>{
        e.preventDefault();
        dispatch(increase())
    }
    const decreaseNum = (e) =>{
        e.preventDefault();
        dispatch(decrease());
    }
    const setDiffNum = (num) =>{
        dispatch(setDiff(num))
    }
    return <Counter 
    number={number} 
    diff={diff}
    increaseNum={increaseNum} 
    decreaseNum={decreaseNum}
    setDiffNum={setDiffNum}
    />
}

export default CounterContainer;