import React from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

type contentTestType = {
    title:string,
    body:string,
    userId:number
}
const Mutation = () => {
    const addPost = (data:contentTestType) => {
        return  axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
    }

    const mutation = useMutation((data:contentTestType)=>addPost(data), {
        onMutate: (variables) => {
            console.log('onMutate', variables);
        },
        onError: (error, variables, context) => {
            console.log('onError', context);
        },
        onSuccess: (data, variables, context) =>{
            console.log('onSuccess', data);

            /**
             * update 후에 query key의 get 함수를  재실행
             * queryClient.invalidateQueries(query key);
             * 
             * mutation 에서 return 된 값으로 get 함수의 파라미터를 변경해야 할 경우 setQueryData 사용
             * queryClient.setQueryData([query key, {userId: 1}], data);
             */
        },
        onSettled:(data,error, variables, context) => {
            console.log('onSettled', data);
        }
    });

    const handleSubmit = () => {
        mutation.mutate({title:'title', body:'body', userId:1});
    }

    return (
        <div>
            <button type='button' onClick={handleSubmit}>Add to Post</button>
            {mutation.isLoading && <h2>loading...</h2>}
            {mutation.isSuccess && <h2>post update success</h2> }
        </div>
    )
}

export default Mutation;