import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import Loading from '../components/Loading';

type PostData = {
    title:string,
    body:string,
    userId:number
}
const PostMutation = () => {
    // https://jsonplaceholder.typicode.com/posts
    const addPost = async (data:PostData) => {
        return await axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then(res=>res.data);
    }
    const mutation = useMutation((data:PostData)=>addPost(data),{
        onMutate: ()=>{
            console.log('mutate start');
        },
        onSuccess: (data)=>{
            console.log('mutate success');
            console.log(data)
        },
        onSettled: ()=>{
            console.log('mutate settled');
        }
    })

    const onSubmit = () => {
        mutation.mutate({title:'hello', body:'world', userId:1})
    }
    return <>
        {mutation.isLoading && <Loading/> }
        {mutation.isSuccess && <h1>post success</h1> }
        {mutation.isError && <h1>error!</h1> }
        <button onClick={onSubmit}>추가하기</button>
    </>
}

export default PostMutation;