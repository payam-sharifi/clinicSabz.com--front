import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import shopSlice from "./shopping/shopSlice";
import usersSlice from "./adminUsers/usersSlice";
import postsSlice from "./posts/postsSlice";

export const store=configureStore({
    reducer:{
        AllProducts:productsSlice,
        cart:shopSlice,
        allUsers:usersSlice,
    
   
        allposts:postsSlice
    },
    devTools:true,
})  