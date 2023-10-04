import {createSlice} from "@reduxjs/toolkit"
import { getUsers } from "./actions"
import jwtDecode from "jwt-decode";
const initialState={
    users:[],
    currentUser:{},
    loading:false,
    error:false,
    isAdmin:false,
    isLogin:false,
    token:localStorage.getItem("token")
}
const updateLocalStorage=(token)=>{
    localStorage.setItem("token",token)
  }
  function currentUser (){
    
  }

 const usersSlice=createSlice({
     name:"fill",
    initialState,
   extraReducers:(builder)=>{
       builder
       .addCase(getUsers.fulfilled,(state,action)=>{
        state.error=false;
        state.loading=false;   
        state.users=action.payload
       })
       .addCase(getUsers.pending,(state)=>{
           state.loading=true
       })
       .addCase(getUsers.rejected,(state)=>{
           state.error=true;
           state.loading=false
       })
   },
   reducers:{
   searchOnUsersName(state,action){
    state.users=state.users.filter(p=>p.userName===action.payload)
    
},
setLocalStorage: (state,action) => {
    
    state.token= action.payload
    updateLocalStorage(state.token)
   },
   getCurrentUser:(state,action)=>{
    try {
        const jwt = localStorage.getItem("token");
        if(jwt){
            state.isLogin=true
        }
        const user=jwtDecode(jwt)
        state.currentUser=user
      } catch (error) {
      }

   }
   
   }
 })
 export const {searchOnUserName,setLocalStorage,getCurrentUser}=usersSlice.actions;
 export default usersSlice.reducer