import React from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from '../api/getUser';

const UsersQuery = () => {
    //5초마다 refetch해서 data를 가져온다. 
    const {isLoading, data} = useQuery('users', fetchUsers, {
        refetchInterval:5000
    });
    return (
    <>
    {isLoading?
    <h1>loading...</h1>
    :
    <h1>dataLoaded</h1>
    }
    </>
    )
}

export default UsersQuery;