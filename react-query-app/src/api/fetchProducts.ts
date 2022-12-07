import axios from 'axios'

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
export const fetchProductById = async (productId:string) => {
    return await axios(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>{
        return {
            id:res.data.id,
            title: res.data.title,
            price: res.data.price,
            img: res.data.image
        }
    })
}