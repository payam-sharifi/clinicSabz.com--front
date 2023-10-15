import Menu from "../components/Menu";
import Between from "../components/Between";
import Cart from "../components/Cart";
import CartReverse from "../components/CartReverse";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Getposts from "../components/posts/Getposts";
import { useEffect, useState } from "react";
import "../css/home.css";

import "../css/getposts.css";
import { NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";
import OnlineShop from "../components/OnlineShop";
import ProductSlider from "../components/ProductSlider";
const BASE_URL = "https://nodejs-clinic.chbk.run";
const Home = () => {
  const [size, setsize] = useState(18);

  useEffect(() => {
    console.log("base", BASE_URL);
  });
  const func = () => {
    if (window.scrollY > 600) {
      window.scrollTo(0, 700);
    }
  };

  return (
    <>
      <Menu />

      <Carousel />
      <Between />
      <div className="row">
      <div className="text-center mt-5  departments overflow-hidden">
          <h1 style={{ color: "black" }}>محصولات ما</h1>
        </div>
        <div className=" slider ">
     
     <ProductSlider />

     </div>
      </div>
     
      <div className="clinics ">
        <div className="parallax ">
          <hr className="dropdown-divider " />

          <div className="text-center me-5 me-md-0  departments overflow-hidden">
            <h1>دپارتمان ها</h1>
          </div>

         
            <div className="row align-items-center justify-content-center ms-3 mt-5 me-md-0">
              <div className="col-md-3 ">
                <div
                  data-aos="fade-in"
                  data-aos-duration="3500"
                  data-aos-delay="3500"
                  className="col-md-3 mt-3 "
                >
                  <NavLink className="nav-link " to="/reservation">
                    <div
                      className="card shadow-lg-lg  clinic100 "
                      style={{ width: size + "rem" }}
                    >
                      <img
                        src="images/fany.jpeg"
                        style={{ height: 300 + "px" }}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="content">
                        <h4 class="nav-box-title">کلینیک ارتوپد فنی</h4>
                        <a
                          href="tel:09035648082"
                          target="_blank"
                          class="text-decoration-none btn-brown pl-5 pr-5"
                          dideo-checked="true"
                        >
                          وقت رزرو کنید
                        </a>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-3  ">
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  className="col-md-3 mt-3 "
                >
                  <NavLink className="nav-link " to="/reservation">
                    <div
                      className="card shadow-lg  clinic100 "
                      style={{ width: size + "rem" }}
                    >
                      <img
                        src="images/back_bone.jpeg"
                        style={{ height: 300 + "px" }}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="content">
                        <h4 class="nav-box-title">کلینیک ستون فقرات</h4>
                        <a
                          href="tel:09035648082"
                          target="_blank"
                          class="text-decoration-none btn-brown pl-5 pr-5"
                          dideo-checked="true"
                        >
                          وقت رزرو کنید
                        </a>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  data-aos="fade-in"
                  data-aos-duration="2000"
                  data-aos-delay="2000"
                  className="col-md-3 mt-3 "
                >
                  <NavLink className="nav-link " to="/reservation">
                    <div
                      className="card shadow-lg  clinic100 "
                      style={{ width: size + "rem" }}
                    >
                      <img
                        src="images/types-of-physical-therapy.jpeg"
                        style={{ height: 300 + "px" }}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="content">
                        <h4 class="nav-box-title">کلینیک فیزیوتراپی</h4>
                        <a
                          href="tel:09035648082"
                          target="_blank"
                          class="text-decoration-none btn-brown pl-5 pr-5"
                          dideo-checked="true"
                        >
                          وقت رزرو کنید
                        </a>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  data-aos="fade-in"
                  data-aos-duration="3000"
                  data-aos-delay="3000"
                  className="col-md-3 mt-3 "
                >
                  <NavLink className="nav-link " to="/reservation">
                    <div
                      className="card shadow-lg  clinic100 "
                      style={{ width: size + "rem" }}
                    >
                      <img
                        src="images/ortopedy.jpeg"
                        style={{ height: 300 + "px" }}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="content">
                        <h4 class="nav-box-title">کلینیک ارتوپدی</h4>
                        <a
                          href="tel:09035648082"
                          target="_blank"
                          class="text-decoration-none btn-brown pl-5 pr-5"
                          dideo-checked="true"
                        >
                          وقت رزرو کنید
                        </a>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
      

          <div
            class="elementor-shape elementor-shape-bottom"
            data-negative="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                class="elementor-shape-fill"
                d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100c0,0,0,0,0-0 L0,0v99.3C0,99.3,79.7,98.7,194,99z"
              ></path>
            </svg>
          </div>
        </div>
      </div>





      
      <div className="services  container mb-5">
        <div className="text-center   departments overflow-hidden">
          <h1 style={{ color: "black" }}>خدمات ما</h1>
        </div>

        <Cart />
        <div className="divider"></div>
        <CartReverse />
        <div className="divider"></div>
        <Cart />
      </div>

      <div className="parallax1 p-md-5">
        <div
          id="article"
          className="text-center  mb-5  me-md-5  departments overflow-hidden"
        >
          <h1 className="article-title  me-5 mt-5 mt-md-0"> آخرین مقالات </h1>
        </div>

        <Getposts />
      </div>
      
   
     
     

      <Footer />
    </>
  );
};
export default Home;
