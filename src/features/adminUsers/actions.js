import {createAsyncThunk} from "@reduxjs/toolkit"

const BASE_URL=process.env.REACT_APP_API_URL/* "https://nodejs-clinic.chbk.run" */;
const axios=require("axios")
export const getUsers= createAsyncThunk("fill",async()=>{
  const response=  await   axios.get(`${BASE_URL}/authUser`)
    return response.data
})
