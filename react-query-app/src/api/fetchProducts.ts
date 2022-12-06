export const fetchProduct = async()=>{
    return await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        return json.map((item:any)=>{
            return {
                id:item.id,
                title:item.title,
                price:item.price,
                img: item.image
            }
        })
    })
}