import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";
import { NavLink } from "react-router-dom";
import RegisterUser from "../component/RegisterUser";
import { getUsers } from "../../features/adminUsers/actions";
import {setLocalStorage,getCurrentUser} from "../../features/adminUsers/usersSlice";
import { memo } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const { users, loading, error, token, currentUser } = useSelector(
    (state) => state.allUsers
  );

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCurrentUser());
  }, [dispatch]);


  return (
    <div className="d-flex align-items-center ">
      <div class="dropdown cursor-pointer ">
        <div
          className="dropdown-toggle "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="position-absolute top-0 end-50 translate-middle  badge rounded-pill bg-red">
            9
          </span>
          <i className="bi bi-envelope fs-5 text-gray-600"></i>
        </div>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item fs-7" href="#">
              لورم
            </a>
          </li>
          <li>
            <a className="dropdown-item fs-7" href="#">
              لورم لورم
            </a>
          </li>
          <li>
            <a className="dropdown-item fs-7" href="#">
              لورم لورم لورم
            </a>
          </li>
        </ul>
      </div>

      <div className="dropdown cursor-pointer mx-4">
        <div
          className="dropdown-toggle "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="position-absolute top-0 end-50 translate-middle  badge rounded-pill bg-red">
            1
          </span>
          <i className="bi bi-bell fs-5 text-gray-600"></i>
        </div>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item fs-7" href="#">
              لورم
            </a>
          </li>
          <li>
            <a className="dropdown-item fs-7" href="#">
              لورم لورم
            </a>
          </li>
          <li>
            <a className="dropdown-item fs-7" href="#">
              dddd
            </a>
          </li>
        </ul>
      </div>

      <div className="dropdown cursor-pointer ">
        <div
          className="d-flex align-items-center me-2 dropdown-toggle profile"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="" className="img-fluid rounded-circle" width="45"></img>
          <div>
            <h6 className="fs-6 fw-bold text-gray-600 mb-0">کلینیک سبز</h6>
            <p className="fs-8 text-gray-600 mb-0">
            {currentUser ? (
                      <p>{currentUser.userName}</p>
                    ) : (
                      <p>تعریف نشده</p>
                    )}
              
            </p>
          </div>
        </div>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item fs-7" href="#">
              لورم
            </a>
          </li>
          <li>
            <a className="dropdown-item fs-7" href="#">
              <RegisterUser />
            </a>
          </li>
          <li>
          <NavLink  to="/admin/logout" className="dropdown-item fs-7">
<span>خروج</span>
          </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default memo(Header);
