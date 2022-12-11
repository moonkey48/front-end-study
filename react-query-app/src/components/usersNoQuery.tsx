import { useEffect, useState } from 'react';
import { User } from '../types/user';

const UsersNoQuery = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(()=>{
        (async ()=> {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
                setUsers(response);
            }catch(e){
                console.log(e);
                setError(true);
            }finally{
                setLoading(false);
            }
        })();
    },[]);

    return (
        <>
        {
            loading ?
            <h1>loading...</h1>
            :
            users &&
            <ul>{
                users.map((user,index)=>{
                    return <li key={index}> user... </li>
                })
            }</ul>
        }
        </>
    )
}

export default UsersNoQuery;