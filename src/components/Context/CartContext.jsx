import { createContext, useEffect, useState } from "react";
import axios from 'axios'

 export let CartContext=createContext(null)

 export function CartContextProvider(props){
const [cardId,setCardId]=useState(null)
const [totalprice,SettotalPrice]=useState(0)
const [products,setProducts]=useState(null)
const [numofCartItems,setnumofCartItems]=useState(0)
setnumofCartItems
let token= localStorage.getItem('usertoken') 
let headers={token:localStorage.getItem('usertoken')}

function resetCart(){
  setCardId(null)
  setnumofCartItems(0)
  setProducts(null)
  SettotalPrice(0)
}

  function addCart(prodId){
  return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:prodId},{
      headers
    })
    .then((response)=>{
      getUseCartItem( )
    

  return response
    }).catch((error)=>{
  return error
    })
}

 function getUseCartItem( ){
   axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
    headers
   }).then((response)=>{
     setCardId(response?.data?.data?._id);
     SettotalPrice(response?.data.data?.totalCartPric)
     setnumofCartItems(response?.data?.numOfCartItems);
     setProducts(response?.data.data?.Products);
console.log("response.data.data:", response?.data?.data);
    
   }).catch((error)=>{
    console.log(error);

   })
 
  }

function UpdateCart(prodId ,count){
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}` ,{
    count:count},{
    headers}).then((response)=>{
       setCardId(response?.data?.data?._id);
       SettotalPrice(response?.data?.data?.totalCartPric)
       setnumofCartItems(response?.data?.numOfCartItems);
       setProducts(response?.data?.data?.Products);
    
return response

    }).catch((error)=>{
     return error
    })

} 

function deleteCartItem(prodId ){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}` ,{
    headers
    })
    .then((response)=>{
       setCardId(response?.data?.data?._id);
       SettotalPrice(response?.data?.data?.totalCartPric)
       setnumofCartItems(response?.data?.numOfCartItems);
       setProducts(response?.data?.data?.Products);
       return response
    
    }).catch((error)=>{
     return error
    })

} 



  useEffect(() => {
    if(token){
 getUseCartItem()
    }
  }, [token])
  
    return (
        <>
        <CartContext.Provider  value={{deleteCartItem,resetCart,UpdateCart,addCart,numofCartItems,totalprice,products,cardId}}>
               {props.children}
        </CartContext.Provider> 
        </>
    )
 }