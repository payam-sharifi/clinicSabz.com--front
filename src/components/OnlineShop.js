import { useEffect, useState } from "react";
import { memo } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import swal from "sweetalert2";
import { Button, Spinner, ButtonGroup } from "react-bootstrap";
import { addToCart } from "../features/shopping/shopSlice";
import { searchOnProductName } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/actions";
import ReactPaginate from "react-paginate";
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper';
import "../css/productslider.css"
import 'swiper/css'
import 'swiper/css/free-mode'
import "../css/onlineshop.css";
const Shop = () => {
  const { products, loading, error } = useSelector(
    (state) => state.AllProducts
  );

  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  //  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const [search, setsearch] = useState();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    swal.fire({
      title: "محصول اضافه شد",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const searchHandle = (ProductName) => {
    if (ProductName !== "") {
      dispatch(searchOnProductName(ProductName));
    } else {
      dispatch(getProducts());
    }
  };
  return (
    <>
    
      
     
        {loading && <Spinner animation="border" variant="danger" />}
        {error && (
          <h5 className="mt-5">خطایی اتفاق افتاده با مدیر سایت تماس بگیرید</h5>
        )}
        {currentPosts &&
          currentPosts.map((p) => (
     
       
            <div
              className="onlinecart  d-flex flex-column justify-content-around px-2 text-center "
              key={p._id}
            >
                
              <div className="img-top">
                <img src="images/1.jpeg" className="d-block w-100" alt="..." />
              </div>
              <div className="title">{p.productname}</div>
              <div className="price">
                {p.sellprice} <span>تومان</span>
              </div>
              <button
                onClick={() => handleAddToCart(p)}
                className="btn btn-success "
              >
                {" "}
                افزودن به سبد خرید
              </button>
            </div>
           
            
          ))}
   
    
      

       {/*   <div className="col-md-8 pagin mt-1">
            <ReactPaginate
              onPageChange={paginate}
              pageCount={Math.ceil(products.length / postsPerPage)}
              previousLabel={"<<"}
              nextLabel={">>"}
              activeClassName={"item active "}
              breakClassName={"item break-me "}
              breakLabel={"..."}
              containerClassName={"pagination"}
              disabledClassName={"disabled-page"}
              marginPagesDisplayed={2}
              nextClassName={"item previous "}
              pageClassName={"item pagination-page "}
              pageRangeDisplayed={2}
              previousClassName={"item next"}
            />
          </div>  */}
          
    </>
  );
};
export default memo(Shop);
