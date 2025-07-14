 import React, { useContext } from 'react'
 import  {useState,useEffect} from 'react'
 import axios from 'axios'
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import {Helmet} from "react-helmet";

 export default function RecentProducts() {
const[allproducts,setallproducts]=useState(null)
 
allproducts
let{addCart}=useContext(CartContext)

 async function AddProducttoCart(prodId){
    let response=await addCart(prodId)
    console.log(response);
    if(response.data.status==='success'){
toast.success(response?.data?.message,{
  duraton:300,
position:'top-right'
})

    }else{
      toast.error('error.... ')
    }
    
  }
  function getallproducts(){
    axios.get('https://ecommerce.routemisr.com/api/v1/products').then(
      
      ({data})=>{
        console.log(data?.data);
        setallproducts(data?.data)
      }
    ).catch((error)=>{
      console.log(error);
      
    })
  
   }
       useEffect(()=>{
   getallproducts()
       },[])
   return  (
<>
 <Helmet>
        <title>
          RecentProducts page
        </title>
      </Helmet>

{allproducts?.length > 0 ? 
 <div className='flex gap-y-3 flex-wrap '>
   {allproducts?.map((prod)=>{
    return    <div key={prod.id   } className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6 m-5 ">
      <div className="product p-5 ">
    <Link to={`/productdetails/${prod.id}/${prod.category.name}`}>
  
      <img src={prod.imageCover} className='w-full' alt="Product description" />
        <span className='text-green-600'>{prod.category.name}</span>
        <h3 className='text-xl font-medium'>{prod.title.split(' ').slice(0,2).join(' ')}</h3>

      <div className="flex justify-between">
        <span>{prod.price} Egp</span>
        <span><i className='fas fa-start text-yellow-400'></i>{prod.ratingAverage}</span>
      </div>

    </Link>
      </div>
            <button onClick={ ()=>{AddProducttoCart(prod._id)}} className='cursor-pointer w-full bg-green-600 py-2 rounded-md my-2'>Add to Cart</button>
    </div>
   })}
   
  </div>:<Spinner/>}
 
</>
   )
 }
 