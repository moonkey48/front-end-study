import React from 'react';
import { useMemo } from 'react';

function caculateAge(user){
    let result = Math.random()*100;
    console.log(`${user.name} is ${Math.floor(result)} years old`);
    return Math.floor(result);
}

const Memo = ({user}) => {
    const name = useMemo((user)=>caculateAge(user),[user]);
    return <h1>{name?name:''}</h1>
}

export default Memo;