 import { useQuery } from '@tanstack/react-query';
 import axios from 'axios'
import React from 'react'
 
 export default function useApi(endPoint) {

      function getApi(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/${endPoint}`)
      }

 let{isError,isLoading,error,data}=  useQuery({
    queryKey:['endPoint'],
    queryFn:()=>{   return axios.get(`https://ecommerce.routemisr.com/api/v1/${endPoint}`)

    }
   })

return { isError, isLoading, error, data };
 }
 