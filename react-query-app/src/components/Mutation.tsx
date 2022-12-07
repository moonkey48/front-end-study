import axios from 'axios';
import { useMutation } from 'react-query';

type contentTestType = {
    title:string,
    body:string,
    userId:number
}
const MutationComp = () => {
    const addPost = async (data:contentTestType) => {
        return await axios.post(`https://jsonplaceholder.typicode.com/posts`, data).then(res=>res.data);
    }

    const {mutate, isLoading, isError, error, isSuccess} = useMutation((data:contentTestType)=>addPost(data), {
        onMutate: (variables) => {
            console.log('onMutate', variables);
        },
        onError: (error, variables, context) => {
            console.log('onError', context);
        },
        onSuccess: (data, variables, context) =>{
            console.log('onSuccess', data);
        },
        onSettled:(data,error, variables, context) => {
            console.log('onSettled', data);
        }
    });

    const handleSubmit = () => {
        mutate({title:'title', body:'body', userId:1});
    }

    return (
        <div>
            <button type='button' onClick={handleSubmit}>Add to Post</button>
            {isLoading && <h2>loading...</h2>}
            {isSuccess && <h2>post update success</h2> }
        </div>
    )
}

export default MutationComp;