
import { memo } from "react";
import Shortcuts from "../component/Shortcuts";
import { useState, useEffect } from "react";
import Header from "./Header";
import Adminmenu from "../component/Adminmenu";
import Delpost from "../component/posts/Delpost";
import { useDispatch, useSelector } from "react-redux";


const ShowPostPage = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  const [showSide, setShowSide] = useState();
  const toggleHandleSideBar = () => {
    setShowSide(!showSide);
  };


  useEffect(() => {
    if (window.innerWidth <= 992) {
      setShowSide(false);
    } else setShowSide(true);

  }, []);


 
  return (
    <>
      <section>
        <section className={showSide ? " sidebar" : "sidebar deactive "}>
          <div className="d-flex justify-content-between  justify-content-lg-center align-items-center">
            <h4 className="fw-b"> ClinicSabz</h4>
            <i
              className="bi bi-x fw-b fs-1 d-lg-none"
              onClick={toggleHandleSideBar}
            ></i>
          </div>

          <Adminmenu />
        </section>
        <section className={showSide ? "main" : "main activee"}>
          <header className="header toggle-sidebar-icon   d-flex align-item-center justify-content-between p-3">
            <i
              className="bi bi-justify fs-3 cursor-pointer"
              onClick={toggleHandleSideBar}
            ></i>
            <Header />
            
          </header>
          <Shortcuts/>
      <Delpost/>
        </section>
       
      </section>
    </>
  )
};
export default memo(ShowPostPage);
