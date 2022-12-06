import axios from 'axios';

const sleep = n => new Promise(res=>setTimeout(res,n));

export const getPosts = async()=>{
    await sleep(1000)
    const res = await axios('http://localhost:4000/posts');
    return res.data;
}
export const getPostById = async(id)=>{
    await sleep(1000)
    const res = await axios(`http://localhost:4000/posts/${id}`);
    return res.data;
}