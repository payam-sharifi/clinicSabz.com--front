import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { increament,decreament,reset, removeFromCart } from "../../features/shopping/shopSlice";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const Basket=()=>{
    
    const {cart}=useSelector(state=>state.cart)
   const dispatch=useDispatch()
const addAmount=(id)=>{
    dispatch(increament(id))
    Swal.fire({
        title:"سبد خرید به روزرسانی شد",
        icon:"success",
        showConfirmButton:false,
        timerProgressBar:true,
        timer:2000,
        toast:true,
        position:"top"
      })
}
const minusAmount=(id)=>{
    dispatch(decreament(id))
    Swal.fire({
        title:"سبد خرید به روزرسانی شد",
        icon:"success",
        showConfirmButton:false,
        timerProgressBar:true,
        timer:2000,
        toast:true,
        position:"top"
      })
}
const clearCart=()=>{
    dispatch(reset())
    Swal.fire({
        title:"سبد خرید به روزرسانی شد",
        icon:"success",
        showConfirmButton:false,
        timerProgressBar:true,
        timer:2000,
        toast:true,
        position:"top"
      })
}
const remove=(id)=>{
dispatch(removeFromCart(id))
Swal.fire({
    title:"سبد خرید به روزرسانی شد",
    icon:"success",
    showConfirmButton:false,
    timerProgressBar:true,
    timer:2000,
    toast:true,
    position:"top"
  })
}
return(
    <>
<Menu/>
<div style={{height:"100vh"}}>
{cart.length===0 ?
<div className="col-md-12 text-center " style={{marginTop:"10rem"}}>
    <div>
        <i className="bi bi-basket-fill" style={{fontSize:"100px"}}> </i>
    </div>
    <h3>سبد خرید خالی است</h3>
    <NavLink className="btn btn-outline-dark mt-3" to="/shopping"> فروشگاه</NavLink>

</div>
: 

 <div className="container mt-5" style={{marginTop:"auto"}}>
            <div className="row mt-5">
                <div className="col-lg-12 pl-3 pt-3">
                    <table className="table table-hover border bg-white">
                        <thead>
                            <tr>
                                <th>نام کالا</th>
                                <th>قیمت</th>
                                <th style={{ width: '10%' }}>تعداد</th>
                                <th>قیمت کل</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && cart.map(p => (
                                <tr>
                                    <td className="align-middle">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img
                                                    src={p.imgurl}
                                                    alt="..."
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="col-lg-10">
                                                <h5> {p.productname} </h5>
                                                <p> {p.productinfo} </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">{p.sellprice}</td>
                                    <td className="align-middle">
                                        <button  onClick={()=>addAmount(p._id)} className="btn btn-sm btn-dark me-2">
                                            +
                                        </button>
                                        <span>{p.qty}</span>
                                        <button  onClick={()=>minusAmount(p._id)} className="btn btn-sm btn-dark ms-2">
                                            -
                                        </button>
                                    </td>
                                    <td className="align-middle">{p.sellprice * p.qty}</td>
                                    <td className="align-middle" style={{ width: '15%' }}>
                                        <button onClick={()=>remove(p._id)} className="btn btn-danger btn-sm">حذف محصول</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <a onClick={()=>clearCart()} className="btn btn-dark">حذف سبد</a>
                                </td>
                                <td colspan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center" style={{ width: '15%' }}>
                                    <strong>Total : { cart.reduce((total, p) => {
                                        return total + p.sellprice * p.qty
                                    }, 0) }</strong>
                                </td>
                                <td>
                                    <a href="/" className="btn btn-success btn-block">پرداخت</a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
    
    
        </div> 
}

</div>
<Footer/>


</>

)
}

export default memo(Basket);