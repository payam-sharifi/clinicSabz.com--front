import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterUser from "./RegisterUser";
import { getUsers } from "../../features/adminUsers/actions";
import {setLocalStorage,getCurrentUser} from "../../features/adminUsers/usersSlice";
import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
const Shortcuts = () => {
  const [showP,setShowp]=useState(false)
  const { users, loading, error, token, currentUser } = useSelector(
    (state) => state.allUsers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCurrentUser());
  }, [dispatch]);

  const showProfile=()=>{
    setShowp(!showP)
  }
  return (
    <div className="content p-2 p-lg-4">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-xl-9">
            {/* stats */}
            <div className="row g-4">
            <div className="col-6 col-xl-3">
                <div className="card">
                  <Link className="card-body cursor-pointer text-decoration-none" to="/admin/addproducts">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="stats-icon bg-purple">
                          <i className="bi bi-eye-fill lh-0"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="fs-smallest mt-3">محصولات</h6>
                      
                      </div>
                    </div>
                  </Link>
                </div>
              </div> 
              <div className="col-6 col-xl-3">
                <div className="card">
                  <Link className="card-body fs-7  cursor-pointer text-decoration-none" to="/admin/addposts">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="stats-icon bg-blue">
                          <i className="bi bi-person-fill lh-0"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                       {/*  <Link className="fs-7 text-muted cursor-pointer text-decoration-none" >ایجاد پست جدید</Link> */}
                       <p className="mb-0  text-black fs-smallest">ایجاد پست جدید...</p>
                        {/* <p className="mb-0 fs-smallest text-muted">تعداد پست ها : <span>11</span></p> */}

                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="stats-icon bg-green">
                          <i className="bi bi-person-plus-fill lh-0"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="fs-smallest "><RegisterUser /></h6>
                        
                        {/*  <h6 className="mb-0 fw-bold">18600</h6> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 ">
                <div className="card p-c">
                  <div className="card-body " onClick={showProfile}>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="stats-icon bg-red">
                          <i className="bi bi-bookmark-dash-fill lh-0"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="d-flex">
                        <h6  className="fs-smallest ">
                        نمایش پروفایل :
                          </h6>
                          <p className="fs-smallest">{currentUser.userName} </p>
                          
                          
                          </div>
                        {/*  <h6 className="mb-0 fw-bold">18600</h6> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* charts */}
          </div>
          {/* profile */}
          {showP ?        
          <div className="col-xl-3">
            <div className="card ">
              <div className="card-body  row align-items-center">
                <div className="col-md-2">
                  <img
                    maxwidth="70"
                    src=""
                    className="img-fluid rounded-circle"
                  ></img>
                </div>

                <div className="ms-1 row " style={{ fontSize: 0.8 + "rem" }}>
                  <div className="col-md-6  text-muted">
                    <p className="fw-bold">نام کاربری:</p>
                  </div>
                  <div className="col-md-6  text-muted">
                    {currentUser ? (
                      <p>{currentUser.userName}</p>
                    ) : (
                      <p>تعریف نشده</p>
                    )}
                  </div>

                  <div className="col-md-6">
                    <p className="mb-0 text-muted">سطح دسترسی:</p>
                  </div>
                  <div className="col-md-6  text-muted">
                    {currentUser.isAdmin == "true" ? (
                      <p>مدیر</p>
                    ) : (
                      <p>تعریف نشده</p>
                    )}
                  </div>
                  <div className="col-md-6  text-muted">
                    <p className="mb-0">ایمیل:</p>
                  </div>
                  <div className="col-md-6  text-muted">
                    {currentUser.Email ? (
                      <p>{currentUser.Email}</p>
                    ) : (
                      <p>تعریف نشده</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <></>
          }
        </div>
      </div>
    </div>
  );
};
export default memo(Shortcuts);
