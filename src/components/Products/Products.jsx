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
<div  className="grid md:grid-cols-4 lg:grid-cols-6 gap-5 ">
  {allProducts?.map((prod)=>{
    return <div   key={prod._id}>
    <img src={prod.imageCover} className='w-full' alt={prod.title} />
    <h2>{prod.title}</h2>
  </div>})}
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

 