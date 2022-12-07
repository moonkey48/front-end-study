import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/fetchProducts';

const ProductsItem = () => {
    const params = useParams();
    const {isLoading, data, error} = useQuery(
        ['products', params.id], 
        ()=>fetchProductById(params.id as string),
        {
            enabled: !!params.id, //아예 실행이 안되게 하네
            staleTime:60*1000
        }
    );
    
    {if(isLoading) return <h1>Loading....</h1>}
    {if(error) return <h1>erorr !!</h1> }
    return <>
    <div>
        <h1>{data?.title}</h1>
        <h1>{data?.price}</h1>
        <img style={{width:'200px', height:'auto'}} src={data?.img} alt="" />
    </div>
    <ReactQueryDevtools/>
    </>
}

export default ProductsItem;