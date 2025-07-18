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
 
 
let{addCart}=useContext(CartContext)

 async function AddProducttoCart(prodId){
    let response=await addCart(prodId)
    console.log(response);
    if(response.data.status==='success'){
toast.success(response?.data?.message,{
  duration:300,
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
          Home page
        </title>
      </Helmet>

{allproducts?.length > 0 ? 
 <div className='flex gap-y-3 flex-wrap'>
  {allproducts?.map((prod) => {
    return (
      <div key={prod.id} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-5 group relative transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">
        <div className="p-5 bg-white rounded-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.7)]">
          <Link to={`/productdetails/${prod.id}/${prod.category.name}`}>
            <img src={prod.imageCover} className='w-full h-40 object-cover mb-2' alt="Product description" />
            <span className='text-green-600 block mb-1'>{prod.category.name}</span>
            <h3 className='text-md font-medium'>{prod.title.split(' ').slice(0, 2).join(' ')}</h3>
            <div className="flex justify-between text-sm mt-1">
              <span>{prod.price} EGP</span>
              <span><i className='fas fa-star text-yellow-400'></i> {prod.ratingAverage}</span>
            </div>
          </Link>
        </div>

        {/* الزرار يطلع من تحت */}
        <button
          onClick={() => AddProducttoCart(prod._id)}
          className="absolute left-0 right-0 bottom-[-50px] opacity-0 group-hover:bottom-[-10px] group-hover:opacity-100 bg-green-600 text-white py-2 mx-5 rounded-md transition-all duration-500"
        >
          Add to Cart
        </button>
      </div>
    );
  })}
</div>



  :<Spinner/>}
 
</>
   )
 }
 