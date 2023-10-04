import { useState } from "react";
import { NavLink } from "react-router-dom";
import { memo } from "react";
const Adminmenu = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown1, setShowDropDown1] = useState(false);
  const toggleDropDown = (e) => {
    switch (e) {
      case "1":
        setShowDropDown(!showDropDown);
        console.log("1");
        break;
      case "2":
        setShowDropDown1(!showDropDown1);
        console.log("2");
        break;
    }
  };

  return (
    <>
      <div className="mt-3 ">
        <ul className="list-unstyled">
          <li className="sidebar-item active">
            <NavLink
              to="/LoginPanel"
              className=" sidebar-link d-flex align-items-center"
            >
              <i className="bi bi-grid-fill me-2"></i>
              <span>داشبورد</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <div
              onClick={() => toggleDropDown("1")}
              className=" sidebar-link d-flex align-items-center"
            >
              <i className="bi bi-grid-fill me-2"></i>
              <span> پست ها</span>
              <i className="bi bi-chevron-down ms-auto me-2"></i>
            </div>
            <ul className={showDropDown ? "submenu" : "d-none"}>
              <li className="submenu-item">
                <NavLink to="/admin/showposts">نمایش پست ها</NavLink>
              </li>
              <li className="submenu-item">
                <NavLink to="/admin/addposts">ایجاد پست </NavLink>
              </li>
          
            </ul>
          </li>
          <li className="sidebar-item">
            <div
              onClick={() => toggleDropDown("2")}
              className=" sidebar-link d-flex align-items-center"
            >
              <i className="bi bi-box-seam me-2"></i>
              <span>محصولات</span>
              <i className="bi bi-chevron-down ms-auto me-2"></i>
            </div>
            <ul className={showDropDown1 ? "submenu" : "d-none"}>
              <li className="submenu-item">
                <NavLink to="/admin/addproducts">لیست محصولات</NavLink>
              </li>
              {/*       <li className="submenu-item">
                <a href="http://localhost:3000/admin/addproducts">ایجاد محصولات </a>
              </li>
              <li className="submenu-item">
                <a href="http://localhost:3000/admin/addproducts">ویرایش محصولات</a>
              </li> */}
            </ul>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/admin/logout"
              className="sidebar-link d-flex align-items-center"
            >
              <i className="bi bi-x-square me-2"></i>
              <span>خروج</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default memo(Adminmenu);
