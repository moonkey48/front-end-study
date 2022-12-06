import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProduct } from '../api/fetchProducts';
import { Product } from '../types/product';

const Products = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const {isLoading, data} = useQuery(['products'], fetchProduct, {
        onSuccess:(data)=>{
            console.log(data)
            setProductList(data);
        },
        staleTime:3000,
        enabled:true
    })

    return <>
    {isLoading ? 
    <h1>fetching products...</h1>
    :
    <ul>{
        productList.map((item)=>{
            return <li 
            key={item.id}
            style={{listStyle:'none', marginBottom:'200px'}}
            >
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
                <img
                style={{width:'200px',height:'auto'}} 
                src={item.img} alt="thumbnail img" 
                />
            </li>
        })
    }</ul>
    }
    </>
}

export default Products;