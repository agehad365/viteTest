 import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';
import Spinner from '../Spinner/Spinner';
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { Helmet } from "react-helmet";
 
export default function Productdatil() {
  const { addCart } = useContext(CartContext);
  let { id, category } = useParams();
  console.log(id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [productdetails, setProductdetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);

  function getallproducts() {
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
      .then((data) => {
        console.log('allproduct', data?.data);
        console.log('category', category);
        let related = data?.data?.data?.filter((prod) => prod.category.name === category);
        console.log('related', related);
        setRelatedProducts(related);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getproductdetails() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        console.log(data?.data);
        setProductdetails(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getproductdetails();
    getallproducts();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Productdetail page</title>
      </Helmet>

      {productdetails ? (
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/4">
            <Slider {...settings}>
              {productdetails?.images.map((src, index) => (
                <img key={index} className='w-full' src={src} alt={productdetails?.title} />
              ))}
            </Slider>
          </div>
          <div className="w-full md:w-3/4 px-4">
            <img className='w-full' src={productdetails?.imageCover} alt={productdetails?.title} />
            <h3 className='text-3xl font-black mt-4'>{productdetails?.title}</h3>
            <p className='text-slate-400 my-2'>{productdetails?.description}</p>
            <span className='text-green-400 text-xl'>{productdetails?.category?.name}</span>
            <div className="flex justify-between my-2 items-center">
              <span>{productdetails.price} Egp</span>
              <span><i className='fas fa-star text-yellow-400'></i> {productdetails.ratingAverage}</span>
            </div>
            <button
              onClick={() => addCart(productdetails._id)}
              className='w-full bg-green-600 py-2 rounded-md my-2 text-white'
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      <div className='my-10'>
        <h3 className='text-2xl text-green-500 font-medium'>Related Products</h3>
        <div className="flex flex-wrap">
          {relatedProducts?.map((prod) => (
            <div key={prod._id} className='w-full md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
              <div className="product p-5 border rounded shadow-sm">
                <Link to={`/Productdatil/${prod._id}/${prod.category.name}`}>
                  <img src={prod.imageCover} className='w-full' alt={prod.title} />
                  <span className='text-green-600'>{prod.category.name}</span>
                  <h3 className='text-xl font-medium'>{prod.title.split(' ').slice(0, 2).join(' ')}</h3>
                  <div className="flex justify-between">
                    <span>{prod.price} Egp</span>
                    <span><i className='fas fa-star text-yellow-400'></i> {prod.ratingAverage}</span>
                  </div>
                </Link>
                <button
                  onClick={() => addCart(prod._id)}
                  className='w-full bg-green-600 py-2 rounded-md my-2 text-white'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
