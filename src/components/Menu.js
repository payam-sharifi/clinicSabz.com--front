import { memo } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BrowserView, MobileView } from "react-device-detect";

const Menu = () => {
  const [show, setshow] = useState(false);
  const [overflow, setoverflow] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  });
  const disbalescroll = () => {
    if (overflow === false) {
      setoverflow(true);
      document.body.style.overflow = "hidden";
    } else {
      setoverflow(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <nav
        className={
          show
            ? "justify-content-md-around   align-items-center trans navbar navbar-expand-md fixed-top navbar-light header-scroll header-sm-scroll"
            : "justify-content-md-around   align-items-center trans navbar mb-3 header-sm-scroll navbar-expand-md fixed-top navbar-light"
        }
      >
        {/*   <nav
      id="nav"
        className={
          "   justify-content-md-around   align-items-center "
        }
      > */}
        <div className="">
          <div className="d-flex align-items-center">
            <img src="/images/templogo.jpeg" alt="" width="40" height={40} />
            <div className="d-flex flex-column justify-content-center">
              <div
                style={{ fontSize: 13, fontWeight: "bold", marginButtom: 0 }}
              >
                کلینیک <span style={{ color: "green" }}>سبز</span>{" "}
              </div>
              <span style={{ fontSize: 10 }}>
                <span className="text-success ">Clinicsabz</span>.Com
              </span>
            </div>
          </div>
        </div>
        <BrowserView>
          <div className="">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <NavLink
                    to="/"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans active"
                        : "nav-link nav-trans"
                    }
                  >
                    خانه
                  </NavLink>
                </li>

                <li className="nav-item mx-4">
                  <NavLink
                    to="/shopping"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans active"
                        : "nav-link nav-trans"
                    }
                  >
                    فروشگاه
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="#"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans "
                        : "nav-link nav-trans"
                    }
                  >
                    درباره ما
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="#footer"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans mx-4 "
                        : "mx-4 nav-link nav-trans"
                    }
                  >
                    تماس با ما
                  </NavLink>
                  {/*   <a href="#footer" className=" mx-4  text-decoration-none mt-2 ">
                تماس با ما
              </a> */}
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/reservation"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans "
                        : "nav-link nav-trans"
                    }
                  >
                    رزرو وقت
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </BrowserView>

        <div className="">
          <div className="container d-flex">
            <NavLink
              className="nav-link d-flex justify-content-center align-items-center me-md-5 me-2  "
              to="/basket"
            >
              <span className="badge rounded-pill bg-dark me-1">
                {cart.length}
              </span>
              <i className="bi bi-basket-fill fs-5"></i>
            </NavLink>

            <button
              onClick={disbalescroll}
              className="navbar-toggler  ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <MobileView>
        {overflow && (
          <div>
            <div className="sidecover" onClick={disbalescroll}></div>
            <div className="sidebarclinic">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans activeMenuItem "
                        : "nav-link nav-trans"
                    }
                  >
                    خانه
                  </NavLink>
                </li>

                <li className="nav-item ">
                  <NavLink
                    to="/shopping"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans activeMenuItem "
                        : "nav-link nav-trans"
                    }
                  >
                    فروشگاه
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="#"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans "
                        : "nav-link nav-trans"
                    }
                  >
                    درباره ما
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="#footer"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans"
                        : "mx-4 nav-link nav-trans"
                    }
                  >
                    تماس با ما
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/reservation"
                    className={(nav) =>
                      nav.isActive
                        ? "nav-link nav-trans "
                        : "nav-link nav-trans"
                    }
                  >
                    رزرو وقت
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </MobileView>
    </>
  );
};
export default memo(Menu);
