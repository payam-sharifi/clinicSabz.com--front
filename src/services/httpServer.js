import axios from "axios"
import Swal from "sweetalert2"

axios.defaults.baseURL=process.env.REACT_APP_API_URL
axios.interceptors.response.use(null,error=>{
    const expectedError=
        error.response &&
        error.response.status >=400 &&
        error.response.status <=500;
        if(!expectedError){
            console.log(".logging the error",error)
            Swal.fire({
                icon: "error",
                text: " خطای غیر منتظره اتفاق افتاده  با مدیریت تماس بگیرید !!!",
              });
           
        }
        return Promise.reject(error)
})
export function setjwt(jwt){

axios.defaults.headers.common["x-auth-token"]=jwt
}
export default{
    get: axios.get,
    put: axios.put,
    delete:axios.delete,
    post:axios.post,
    setjwt
}