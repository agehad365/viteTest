 import React, { useEffect,   } from 'react'
 import Spinner from '../Spinner/Spinner'
 import {useDispatch, useSelector} from 'react-redux'
  import { decrease, increase, increaseByAmount } from '../../../lib/counterSlice'
import { getAllproduct } from '../../../lib/productSlice';
import {Helmet} from "react-helmet";

   export default function Products( ) {
  
let dispatch=useDispatch()
   let {counter,userName}=useSelector((state)=>{return state.counterReducer})
 let {allProducts , isLoading,isError}= useSelector((state)=>{ return state.productReducer})
 
  
    useEffect(()=>{
  dispatch(getAllproduct())
    },[])

    if(isLoading){
      return <Spinner/>
    }
    if(isError){
   return <h2> Error...</h2>
    }
   return (
<>
 <Helmet>
        <title>
          Cart page
        </title>
      </Helmet>
 <div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-between gap-y-8">
    {allProducts?.map((prod) => (
      <div
        key={prod._id}
        className="w-full sm:w-1/2 md:w-1/4 p-2 group relative transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
      >
        <div className="bg-white rounded-md p-4 shadow-sm hover:shadow-[0_0_20px_4px_rgba(34,197,94,0.5)] transition-all duration-500 h-full">
          <img
            src={prod.imageCover}
            alt={prod.title}
            className="w-full h-40 object-cover rounded mb-3"
          />
          <h2 className="text-md font-semibold text-center">{prod.title}</h2>
        </div>

         <button
          onClick={() => AddProducttoCart(prod._id)}
          className="absolute left-0 right-0 bottom-[-50px] opacity-0 group-hover:bottom-[-10px] group-hover:opacity-100 bg-green-600 text-white py-2 mx-5 rounded-md transition-all duration-500"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

 </>

   )
 }

//     <div>
      
// <h2>products counter :{counter}</h2>
// <h2>products user :{userName}</h2>
 
//  <button onClick={ ()=>{dispatch(increase())}} className='bg-green-500 py-3 px-2 mx-5'>+++</button>
//  <button onClick={ ()=>{dispatch(decrease())}} className='bg-green-500 py-3 px-2 mx-5'>---</button>
//  <button onClick={ ()=>{dispatch(increaseByAmount(20))}} className='bg-green-500 py-3 px-2 mx-5'>increaseByAmount</button>
//     </div>

 