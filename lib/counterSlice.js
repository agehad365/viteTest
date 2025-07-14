import { createSlice } from "@reduxjs/toolkit";

 let initialState={
       counter:0,
       userName:'ahmed'
 }
 export let counterSlice=createSlice(
    {
        name:'counterSlice',
        initialState ,
        reducers:{
            increase:( state,action)=>{
                state.counter+=1
            console.log('inc+++');
                
            },
            decrease:(state,action)=>{
                state.counter-=1
            console.log('dec--');
                
            },
            increaseByAmount:(state,action)=>{
                console.log(action.payload);
                
                state.counter+=action.payload
                console.log('by amountt');
                
            }
        }
          
       
    }
 )
export let counterReducer= counterSlice.reducer 
export let {increase,decrease,increaseByAmount}=counterSlice.actions