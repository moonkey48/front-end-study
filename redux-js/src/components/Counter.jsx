import React from 'react';

const Counter = ({number, diff, onIncrease, onDecrease, onSetdiff}) => {
    const onChange = e =>{
        onSetdiff(parseInt(e.target.value))
    }
    return <form>
        <h1>{number}</h1>
        <input type="number" value={diff} onChange={onChange} min={1}/>
        <button onClick={e=>{
            e.preventDefault();
            onIncrease();
        }}>+</button>
        <button onClick={e=>{
            e.preventDefault()
            onDecrease()
        }}>-</button>
    </form>
}

export default Counter;