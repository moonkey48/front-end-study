import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { fetchProduct } from '../api/fetchProducts';
import Error from './Error';
import Loading from './Loading';
import SuspenseSuccess from './suspenseSuccess';

const SuspenseProducts = () => {
    const {data,isLoading,isError} = useQuery('products',fetchProduct, {
        suspense:true,
        cacheTime:2000,
        staleTime: 0,
    })
    console.log(isLoading);
    return (
    <>
        {isLoading && <Loading/>}
        {isError && <Error/>}
        {data && <SuspenseSuccess data={data} />}
    </>
    )
}

export default SuspenseProducts;