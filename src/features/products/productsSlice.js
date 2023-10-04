import {createSlice} from "@reduxjs/toolkit"
import { getProducts } from "./actions"

const initialState={
    products:[],
    loading:false,
    error:false,
}

 const productsSlice=createSlice({
     name:"fill",
    initialState,
   extraReducers:(builder)=>{
       builder
       .addCase(getProducts.fulfilled,(state,action)=>{
        state.error=false;
        state.loading=false;   
        state.products=action.payload
       })
       .addCase(getProducts.pending,(state)=>{
           state.loading=true
       })
       .addCase(getProducts.rejected,(state)=>{
           state.error=true;
           state.loading=false
       })
   },
   reducers:{
   searchOnProductName(state,action){
    state.products=state.products.filter(p=>p.productname===action.payload)
    
}
   }
 })
 export const {searchOnProductName}=productsSlice.actions;
 export default productsSlice.reducer