 import { useQuery } from '@tanstack/react-query';
import React  from 'react'
import axios from 'axios'
import Spinner from '../Spinner/Spinner';
import useApi from '../../hooks/useApi';
import {Helmet} from "react-helmet";

   export default function Brands() {

//    let {data,isError,error,isLoading,isFetched,isFetcging}=useQuery({
//     queryKey:['brands'],
//     queryFn:()=>{
//  return axios.get(`https://ecommerce.routemisr.com/api/v1/brands `)

//     },
//     select:(data)=>{
//       return data.data.data
//     },
//      gcTime:3000,
//      refetchOnMount:true,
//      refetchOnReconnect:true

    
//    })

 
//  console.log('data',data?.data?.data)
//   if(isLoading){
//     return <Spinner/>
//   }if(isError){
//     return <h2>Error.....</h2>
//   }

let{data}=useApi('brands')
console.log(data?.data?.data);

   return (<>
        <Helmet>
               <title>
                 Brand page
               </title>
             </Helmet>

<div className="container  mx-auto px-4">
   
    <h1 className="text-3xl font-bold text-green-600  text-center m-15  fw-bold">All Brands</h1>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
   
  {data?.data?.data.map((brand) => (
    <div
      key={brand._id}
      className="bg-white border rounded-md p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(34,197,94,0.5)]"
    >
      <img
        src={brand.image}
        alt={brand.name}
        className="w-full h-40 object-contain mx-auto"
      />
      <h3 className="text-center mt-2 text-lg font-semibold">{brand.name}</h3>
    </div>
  ))}
</div>
</div>

   </>
    )
 }
 