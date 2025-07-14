 import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let initialState = {
  allProducts: null,
  isLoading: false,
  isError: false,
};

export const getAllproduct = createAsyncThunk(
  'ProductSlice/getAllproduct',
  async () => {
    const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products/');
    console.log(data);  
    return data.data;   
  }
);

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    product: () => {
      console.log('product');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllproduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllproduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allProducts = action.payload;  
      })
      .addCase(getAllproduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const productReducer = ProductSlice.reducer;
export const { product } = ProductSlice.actions;
