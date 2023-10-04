import { memo } from "react";
import { NavLink } from "react-router-dom";

const NotFound=()=>{
    
    return(
        <>
        <NavLink className=" form-singin text-decoration-none mt-5 ms-5" to="/">
        <h1 className="text-black" style={{marginTop:15+"rem",marginRight:35+"rem"}}> صفحه مورد نظر وجود ندارد<br/> بازگشت به صفحه اصلی </h1>
            
        </NavLink>
      
       </>
    )
}
export default memo(NotFound);