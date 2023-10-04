import {createSlice} from "@reduxjs/toolkit"
import { getPosts } from "./actions"

const initialState={
    posts:[],
    loading:false,
    error:false,
}

 const postsSlice=createSlice({
     name:"fill",
    initialState,
   extraReducers:(builder)=>{
       builder
       .addCase(getPosts.fulfilled,(state,action)=>{
        state.error=false;
        state.loading=false;   
        state.products=action.payload
       })
       .addCase(getPosts.pending,(state)=>{
           state.loading=true
       })
       .addCase(getPosts.rejected,(state)=>{
           state.error=true;
           state.loading=false
       })
   },
   reducers:{
   searchOnPostTitle(state,action){
    state.posts=state.posts.filter(p=>p.title===action.payload)
    
},
searchOnPostId(state,action){
    state.posts=state.posts.filter(p=>p._id===action.payload)
    
}
   }
 })
 export const {searchOnPostsName,searchOnPostId}=postsSlice.actions;
 export default postsSlice.reducer