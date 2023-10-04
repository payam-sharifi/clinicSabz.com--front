import { memo } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Menu = () => {
  const [show, setshow] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  });

  return (
    <nav
      className={
        show
          ? "trans navbar navbar-expand-md fixed-top navbar-light header-scroll header-sm-scroll"
          : "trans navbar mb-3 header-sm-scroll navbar-expand-md fixed-top navbar-light"
      }
    >
      <div className="container  justify-content-center">
        <NavLink
          className="nav-link d-flex justify-content-center align-items-center me-5 "
          to="/basket"
        >
          <span className="badge rounded-pill bg-dark me-1">{cart.length}</span>
          <i className="bi bi-basket-fill fs-5"></i>
        </NavLink>
        <h5 className="mt-2 text-decoration-none fw-bold cursor-pointer">
          <span className="text-success ">Clinicsabz</span>.Com
        </h5>

        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
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
            {/*    <li className="nav-item nav-trans">
                <a className="nav-link nav-trans" href="#">کلینیک ارتوپدی</a>
              </li>
              <li className="nav-item nav-trans">
                <a className="nav-link nav-trans" href="#">کلینیک ارتوپدی فنی</a>
              </li>
              <li className="nav-item nav-trans">
                <a className="nav-link nav-trans" href="#">کلینیک ستون فقرات</a>
              </li>
              <li className="nav-item nav-trans">
                <a className="nav-link nav-trans" href="#">کلینیک فیزیوتراپی</a>
              </li> */}
            <li className="nav-item ">
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
                  nav.isActive ? "nav-link nav-trans " : "nav-link nav-trans"
                }
              >
                درباره ما
              </NavLink>
            </li>
          
              <a
                href="#footer"
                className="text-decoration-none mt-2 "
               /*  className={(nav) =>
                  nav.isActive ? "nav-link nav-trans " : "nav-link nav-trans"
                } */
              >
                تماس با ما
              </a>
           
            <li className="nav-item">
              <NavLink
                to="/reservation"
                className={(nav) =>
                  nav.isActive ? "nav-link nav-trans " : "nav-link nav-trans"
                }
              >
                رزرو وقت
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default memo(Menu);
