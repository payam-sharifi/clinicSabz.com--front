import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "../css/productslider.css";
import "swiper/css";
import "swiper/css/free-mode";
import "../css/onlineshop.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import swal from "sweetalert2";

import { useEffect, useState } from "react";
import { memo } from "react";

import { Button, Spinner, ButtonGroup } from "react-bootstrap";
import { addToCart } from "../features/shopping/shopSlice";
import { searchOnProductName } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/actions";

import "../css/productslider.css";
import "swiper/css";
import "swiper/css/free-mode";
import "../css/onlineshop.css";

function ProductSlider(props) {
  const { products, loading, error } = useSelector(
    (state) => state.AllProducts
  );

  const cart = useSelector((state) => state.cart);
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
   
    <Swiper
      autoplay={{ delay: 3000 }}
      grabCursor={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={250}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      {loading && <Spinner animation="border" variant="danger" />}
      {error && (
        <h5 className="mt-5">خطایی اتفاق افتاده با مدیر سایت تماس بگیرید</h5>
      )}
      {currentPosts &&
        currentPosts.map((p) => (
<div>
          <SwiperSlide>
           
            <div
              className="onlinecart  d-flex flex-column justify-content-around px-2 text-center "
              key={p._id}
            >
              <div className="img-top">
                <img src={p.imgurl} className="d-block w-100" alt="..." />
              </div>
              <div className="title">{p.productname}</div>
              <div className="price">
                {p.sellprice} <span>تومان</span>
              </div>
              <Button
                onClick={() => handleAddToCart(p)}
                className="btn btn-success"
              >
                {" "}
                افزودن به سبد خرید
              </Button>
            </div>
          
          </SwiperSlide>
          </div>
        ))}
    </Swiper>
  
  );
}

export default ProductSlider;
