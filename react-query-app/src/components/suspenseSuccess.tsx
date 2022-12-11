import React from 'react';
import { useQuery } from 'react-query';
import { fetchProduct } from '../api/fetchProducts';
import { Product } from '../types/product';

const imgStyle = {
    width:'200px',
    height:'auto'
}
const listStyle = {
    marginBottom: '100px'
}
const SuspenseSuccess = () => {
    const {data,isLoading,isError} = useQuery('products',fetchProduct, {
        suspense:true,
        cacheTime:2000,
        staleTime: 0,
    })
    return (
        <>
        <ul>
        {data.map((item:Product)=>{
            return <li style={listStyle} key={item.id}>
                <h1>{item.title}</h1>
                <img style={imgStyle} src={item.img} alt="" />
                <h4>{item.price}</h4>
            </li>
        })}
        </ul>
        </>
    )
}

export default SuspenseSuccess;