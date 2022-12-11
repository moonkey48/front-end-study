import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Product } from '../types/product';

type SuspenseSuccessProps = {
    data:Product[]
}
const imgStyle = {
    width:'200px',
    height:'auto'
}
const listStyle = {
    marginBottom: '100px'
}
const SuspenseSuccess = ({data}:SuspenseSuccessProps) => {
    console.log(data)
    return (
        <>
        <ul>
        {data.map(item=>{
            return <li style={listStyle} key={item.id}>
                <h1>{item.title}</h1>
                <img style={imgStyle} src={item.img} alt="" />
                <h4>{item.price}</h4>
            </li>
        })}
        </ul>
        <ReactQueryDevtools/>
        </>
    )
}

export default SuspenseSuccess;