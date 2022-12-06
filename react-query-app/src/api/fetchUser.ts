export const fetchUsers = async()=>{
    return await 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res=>{
        return res.map((user:any)=>{
            return {
                id:user.id,
                name:user.name,
                email:user.email
            }
        })
    })
}