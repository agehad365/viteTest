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
    <div className="flex flex-wrap">
   {data?.data?.data.map((brand)=>{ return <img key={brand._id} src={(brand.image)} alt="" />
   })}

    </div>
   </>
    )
 }
 