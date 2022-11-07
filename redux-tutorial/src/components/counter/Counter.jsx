import React, { useState } from 'react';

const Counter = ({increaseNum,decreaseNum,number,diff,setDiffNum}) => {
    return <div>
        <form>
            <h1>{number}</h1>
            <input type="number" value={diff} onChange={(e)=>setDiffNum(parseInt(e.target.value))} />
            <button onClick={(e)=>decreaseNum(e)}>-</button>
            <button onClick={(e)=>increaseNum(e)}>+</button>
        </form>
    </div>
}

export default Counter;