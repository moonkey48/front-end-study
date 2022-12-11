import { Suspense } from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from '../api/fetchUser';
import { User } from '../types/user';

const SuspenseQuery = () => {
    return (
        <Suspense fallback={<h1>Load User...</h1>}>
            <UserListContainer />
        </Suspense>
    )
}
const UserListContainer = () =>{
    const {data:users} = useQuery(['productsSuspense'], fetchUsers, {
        suspense: true,
    })

    return (
        <ul>{
             users.map((user:User)=>{
                return <UserItem key={user.id} user={user} />
            })
        }</ul>
    )
}

type UserItemProps = {
    user:User
}
const UserItem = ({user}:UserItemProps) =>{
    return <li>{user.name}</li>
}


export default SuspenseQuery;