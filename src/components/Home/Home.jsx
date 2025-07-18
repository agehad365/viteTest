 import React, { useEffect, useContext  } from 'react'
 import Product from '../Products/Products'
import Cart from '../Cart/Cart';
import { CounterContext  } from '../Context/Context';
import RecentProducts from '../RecentProducts/RecentProducts';
import Catgeories from '../Catgeories/Catgeories';
import MainSlider from '../MainSlider/MainSlider';
 import { Helmet } from 'react-helmet';
 
  export default function Home() {
    const  {counter ,setcounter,user}=useContext(CounterContext)
    console.log('I am in home ');
   
 
      useEffect(()=>{
        },[])
   return (<>
 <Helmet>
        <title>
          Home page
        </title>
      </Helmet>

 <MainSlider/>
 
   <RecentProducts/>
   </>)
 }
 