import { createSlice } from "@reduxjs/toolkit";

const initialState={

    cart:localStorage.getItem("Shopping-cart")?JSON.parse(localStorage.getItem("Shopping-cart")):[]
}
const updateLocalStorage=(cart)=>{
    localStorage.setItem("Shopping-cart",JSON.stringify(cart))
}

const cartSlice=createSlice({
    name:"changeAmountCart",
    initialState,
    reducers:{
        addToCart(state,action){
            const hasProduct=state.cart.find(p=>p._id===action.payload._id)?true:false
           
           state.cart=hasProduct ? state.cart.map(p=>p._id===action.payload._id ? {...p,qty:p.qty+1} : p):state.cart=[...state.cart,{...action.payload,qty:1}]
          
            updateLocalStorage(state.cart)
        },
        increament(state,action){
            state.cart=state.cart.map(p=>p._id===action.payload ? {...p,qty:p.qty+1} : p)
            updateLocalStorage(state.cart)
        },
        decreament(state,action){
            const product=state.cart.find(p=>p._id===action.payload)
            state.cart=product.qty>1 ?   state.cart= state.cart.map(p=>p._id===action.payload ? {...p,qty:p.qty-1} : p) :   state.cart=state.cart
            updateLocalStorage(state.cart)
        },
        reset(state){
            state.cart=[]
            updateLocalStorage([])
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(p=>p._id!==action.payload)
            updateLocalStorage(state.cart)
        }

    }
})

export const {addToCart,removeFromCart,increament,decreament,reset}=cartSlice.actions;
export default cartSlice.reducer;