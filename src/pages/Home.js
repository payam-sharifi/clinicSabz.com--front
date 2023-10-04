import Menu from "../components/Menu";

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Getposts from "../components/posts/Getposts";
import { useEffect, useState } from "react";
import "../css/home.css";
import { NavLink } from "react-router-dom";
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
      {/*     <hr className='hr mb-5 mt-5' ></hr> */}
      <div className="clinics">
        <hr className="dropdown-divider mt-3" />
        <div className="text-center">
          <h1
           
            className="text-success fw-bold mb-3 mt-2"
          >
            کلینیک های ما
          </h1>
        </div>
        <div className=" row mt-md-5  ms-4 text-center justify-content-around align-items-center ">
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="col-md-3 mt-3 "
          >
            <NavLink className="nav-link " to="/reservation">
              <div
                className="card shadow  clinic100 "
                style={{ width: size + "rem" }}
              >
                <img
                  src="images/back_bone.jpeg"
                  height="190"
                  className="card-img-top"
                  alt="..."
                />
                <div className="content">
                  {/*     <div className="text">رزرو وقت </div> */}
                </div>
                <div className="card-body">
                  <p className="card-text">کلینیک ستون فقرات </p>
                </div>
              </div>
            </NavLink>
          </div>

          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="col-md-3 mt-3"
          >
            <NavLink className="nav-link " to="/reservation">
              <div
                className="card shadow clinic100 "
                style={{ width: size + "rem" }}
              >
                <img
                  src="images/types-of-physical-therapy.jpeg"
                  height="190"
                  className="card-img-top"
                  alt="..."
                />
                <div className="content">
                  {/* <div className="text">کلینیک فیزیوتراپی </div> */}
                </div>
                <div className="card-body">
                  <p className="card-text">کلینیک فیزیوتراپی</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="col-md-3 mt-3"
          >
            <NavLink className="nav-link " to="/reservation">
              <div
                className="card shadow clinic100 "
                style={{ width: size + "rem" }}
              >
                <img
                  src="images/ortopedy.jpeg"
                  height="190"
                  className="card-img-top"
                  alt="..."
                />
                <div className="content">
                  {/*   <div className="text">رزرو وقت </div> */}
                </div>
                <div className="card-body">
                  <p className="card-text">کلینیک ارتوپدی</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="600"
            className="col-md-3 mt-3 "
          >
            <NavLink className="nav-link " to="/reservation">
              <div
                className="card shadow clinic100 "
                style={{ width: size + "rem" }}
              >
                <img
                  src="images/fany.jpeg"
                  className="card-img-top"
                  height="190"
                  alt="..."
                />
                <div className="content">
                  {/*    <div className="text">رزرو وقت </div> */}
                </div>
                <div className="card-body">
                  <p className="card-text">کلینیک ارتوپد فنی</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="position-absolute  text-center mt-5">
        <h1
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-delay="400"
          className="text-success fw-bold  mt-3"
        >
          اخبار کلینیک
        </h1>

        {/*  <hr className='col-md-hr mb-5 ' ></hr> */}

        <Getposts />
      </div>
      </div>
     
   
      <Footer />
    </>
  );
};
export default Home;
