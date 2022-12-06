import React, { useEffect, useState } from 'react';

const UsersNoQuery = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async ()=> {
            const response = await fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
            setUsers(response);
            console.log(response);
            setLoading(false);
        })();
    },[]);

    return (
        <>
        {loading ?
        <h1>loading...</h1>
        :
        <ul>{
            users.map((user,index)=>{
                return <li key={index}>
                    {index}
                </li>
            })
        }</ul>
        }
        </>
    )
}

export default UsersNoQuery;