import React, { Suspense } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import Loading from '../components/Loading';
import SuspenseSuccess from '../components/suspenseSuccess';

const ProductSuspensePage = () => {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <SuspenseSuccess/>
            </Suspense>
            <ReactQueryDevtools/>
        </>
    )
}

export default ProductSuspensePage;