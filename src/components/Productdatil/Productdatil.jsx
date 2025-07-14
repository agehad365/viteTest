 import React, { useEffect, useState  } from 'react'
 import axios from 'axios'
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import Spinner from '../Spinner/Spinner';
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import {Helmet} from "react-helmet";

   export default function Productdatil() {
    const { addCart } = useContext(CartContext);
 
     let {id,ctaegory}=useParams()
    console.log(id);

      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    const [productdetails,setProductdetails]=useState(null);
    const [relaetedproduct,setrelaetedproduct]=useState(null);

 function getallproducts(){
  axios.get('https://ecommerce.routemisr.com/api/v1/products').then((data)=>{
    console.log('allproduct',data?.data);
    console.log('category',ctaegory);
    let related = data?.data?.data?.filter((prod) => prod.category.name === ctaegory);

 console.log('related',related)
 setrelaetedproduct(related)

  }).catch((error)=>{
    console.log(error);
    
  })
 }
    function getproductdetails(){

   axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then(({data})=>{
    console.log(data?.data);
    setProductdetails(data?.data);

    
   }).catch((error)=>{
    console.log(error);
    
   })

}
let {data,isError,isLoading,error}=useQuery({
  queryKey:['details', id ],
  queryFn:()=>{
    return axios.get( `https://ecommerce.routemisr.com/api/v1/products?${id}`)
  },
  select:(data)=>{
    return data?.data?.data
  }
})
console.log(data?.data?.data);

    // useEffect(()=>{
    //   getproductdetails()
    //   getallproducts()
    // },[id])

   return (
     < >
   <Helmet>
          <title>
            Productdetails page
          </title>
        </Helmet>

     {productdetails? <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/4">
          <Slider {...settings} >
            {productdetails?.images.map((src, index) => (
                <img key={index} className='w-full' src={src} alt={productdetails?.title} />
                      ))}
             </Slider >

           </div>
                    <img className='w-full' src={productdetails?.imageCover} alt={productdetails?.title} />
      <div className="w-3/4"></div>
       <h3 className='text-3xl font-black'>{productdetails?.title}</h3>
           <p className='text-slate-400 my-2'>{productdetails?.description}</p>
                         <span className='text-green-400 text-xl'>{productdetails?.categroy?.name}</span>
                              <div className="flex justify-between my-2">
                                <span>{productdetails.price} Egp</span>
        <span><i className='fas fa-start text-yellow-400'></i>{productdetails.ratingAverage}</span>
            <button className='w-full bg-green-600 py-2 rounded-md my-2'>Add to Cart</button>
                  </div>
                </div> : <Spinner/>}
    
             <div className='my-10'>
                 <h3 className='text-2xl text-green-500 font-medium'>related product</h3>
                    <div className="flex flex-wrap"  >
                 {relaetedproduct?.map((prod)=>{
                return   <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/6' >
            <div className="product p-5">
             <Link to={`/Productdatil/${prod._id}/${prod.category.name}`}>
  
               <img src={prod.imageCover} className='w-full' alt="Product description" />
        <span className='text-green-600'>{prod.category.name}</span>
           <h3 className='text-xl font-medium'>{prod.title.split(' ').slice(0,2).join(' ')}</h3>
            <div className="flex justify-between">
          <span>{prod.price} Egp</span>
          <span><i className='fas fa-start text-yellow-400'></i>{prod.ratingAverage}</span>
            </div>

           </Link>
           
            <button   onClick={() => addCart(productdetails._id)} 
             className='w-full bg-green-600 py-2 rounded-md my-2'>Add to Cart</button>
      </div>
  </div>})}

</div>
                     </div>
       </>

   )
 }
 