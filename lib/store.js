 import {   configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice';
import { productReducer } from './productSlice';

 counterReducer
export let store= configureStore({
reducer:{
  counterReducer ,
  productReducer  
   

}

 })


 