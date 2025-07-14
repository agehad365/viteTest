 import React, { useEffect ,useState} from 'react'
 import style from './Spinner.module.css'
 import {BallTriangle} from 'react-loader-spinner'
import {Helmet} from "react-helmet";

 export default function Spinner() {
const [counter,usecounter]=useState(0)
counter 
usecounter
  useEffect(()=>{

  },[])
   return (<>
    <Helmet>
           <title>
             Spinner page
           </title>
         </Helmet>
      <div className='h-screen flex justify-center items-center'> <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /> </div>
  </>
   )
 }
 