 import React from 'react'
   import { Formik, useFormik } from 'formik';
 import   { useEffect,useContext,useState } from 'react'
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';
 import axios from 'axios';
import {Helmet} from "react-helmet";
 


 export default function Checkout() {
  let { cardId, resetCart } = useContext(CartContext);
     console.log("Cart id is",cardId);
  
const [isOnline,setisOnline]=useState(true)

function PayOnline(val){
axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:5174/`,{shippingAddress:val}
  ,{
      headers:{
        token:localStorage.getItem('usertoken')
      }
    }).then((response)=>{
      console.log(response);
      if(response.data.status==='success'){
        console.log(response.data.session.url);
     window.location.href = response.data.session.url;
        
      }
      
    }).catch((error)=>{
      console.log(error);
      
    })
}
function PayCash(val){
console.log(val);
  axios.post(`https://ecommerce.routemisr.com/api/v1/orders/65cb72e38462ab02c71ee050/${cardId}`,{shippingAddress:val},{ 
     headers:{token:localStorage.getItem('usertoken')}
    }).then((response)=>{
console.log(response);
if(response.data.status==='success'){
  toast.success('check out done.... ')
  resetCart()
}
else{
  toast.error('error....')
}
    }).catch((error)=>{
      console.log(error);
      
    })

 
}

function detectPayment(val){
  if(isOnline){
    PayOnline(val)
  }
  else{
    PayCash(val)
  }
}

   let formik =useFormik({
      initialValues: {
     
      city:"",
      phone:"",
      details:"",
     
      },
      onSubmit:detectPayment,
    
  
       
    })
  
  useEffect(()=>{

  },[])
   return (
     < >
 
     
      <div className=" bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div className="bg-white shadow-md rounded-md p-6">
      <img className="mx-auto h-12 w-auto text-green-900" src="https://www.svgrepo.com/show/499664/user-happy.svg" />
      <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-green-900">
       CheckOut Now
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        
        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700">details</label>
          <div className="mt-1">
            <input value={formik.values.details}  onChange={formik.handleChange} name="details" id="details" type=" text " autoComplete="email-address" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
       
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">phone</label>
          <div className="mt-1">
            <input value={formik.values.phone}   onChange={formik.handleChange} name="phone" id="phone" type="tel" autoComplete="password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
          </div>
          
             <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">city</label>
          <div className="mt-1">
            <input value={formik.values.city}  onChange={formik.handleChange} name="city" id="city" type="tel" autoComplete="password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
          </div>
        </div>
     
   
        <div className=''>
          {<button onClick={()=>{
            setisOnline(false)
          }} type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
         Pay Cash
          </button> }
           
             <button onClick={()=>{
            setisOnline(true)
          }} type="submit" className="flex w-full justify-center my-4 rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
         Pay Online
          </button>
        </div>
       
      </form>
    </div>
  </div>
</div>

     
     
     </>
   )
 }
 