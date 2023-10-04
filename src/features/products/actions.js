import {createAsyncThunk} from "@reduxjs/toolkit"
const BASE_URL=process.env.REACT_APP_API_URL;
const axios=require("axios")
export const getProducts= createAsyncThunk("fill",async()=>{
  const response=  await    axios.get(`${BASE_URL}/product`) 
    return response.data
})