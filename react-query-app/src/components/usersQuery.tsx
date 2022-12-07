import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from '../api/fetchUser';
import { User } from '../types/user';

const UsersQuery = () => {
    //5초마다 refetch해서 data를 가져온다. 
    const [users, setUsers] = useState<User[]>([]);
    const {isLoading, data, error} = useQuery(['users'], fetchUsers, {
        refetchInterval:50000,
        staleTime:1000,
        onSuccess:(data)=>{
            setUsers(data);
        }
    });
    


    return (
    <>
        {
            isLoading?
            <h1>loading...</h1>
            :
            <ul>{
                users.map(user=>{
                    return <li key={user.id}>
                        {user.name}
                    </li>
                })
            }</ul>
        }
    </>
    )
}

export default UsersQuery;