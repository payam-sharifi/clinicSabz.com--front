import {createAsyncThunk} from "@reduxjs/toolkit"
const BASE_URL=process.env.REACT_APP_API_URL;
const axios=require("axios")
export const getPosts= createAsyncThunk("fill",async()=>{
  const response=  await    axios.get(`${BASE_URL}/posts`) 
    return response.data
})