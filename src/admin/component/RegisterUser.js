import { useEffect, useRef, useState } from "react";
import * as services from "../../services/user.service";
import { memo } from "react";
import { Modal, Button } from "react-bootstrap";
import cryptoJS from "crypto-js";
import Swal from "sweetalert2";
import { getUsers } from "../../features/adminUsers/actions";
import { useDispatch} from "react-redux";


const RegisterUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const [show, setshow] = useState(false);
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [repassword, setrepassword] = useState();

  const password1 = useRef();
  const password2 = useRef();
  const showregmodal = () => {
    setshow(!show);
  };
  const encryptData = (arg) => {
    const encryptpass = cryptoJS.AES.encrypt(arg, "qwerty11839").toString();
    return encryptpass;
  };

  const register = async () => {
    if (password === repassword || password === null || repassword === null) {
      const pasData = encryptData(password);
      try {
        const response = await services.register(
          userName,
          email,
          pasData,
          phone
        );
        if (response.status===200) {
          Swal.fire({
            icon: "success",
            text: "کاربر با موفقیت ثبت شد",
          });
          dispatch(getUsers());
          setshow(!show);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: "عملیات نا موفق !",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "کلمه عبور یکسان نمیباشد ",
      });

      password2.current.value = null;
    }
  };


  return (
    <>
      <div onClick={showregmodal} data-toggle="modal" type="submit">
       افزودن کاربر جدید
      </div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={showregmodal}>
          <Modal.Title>مشخصات کاربر جدید را وارد کنید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mt-3">
            <div className="col-md-4">
              <label>نام کاربری</label>
            </div>
            <div className="col-md-4">
              <input
                required
                onChange={(e) => setuserName(e.target.value)}
                type="text"
                className=""
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>کلمه عبور</label>
            </div>
            <div className="col-md-4">
              <input
                required
                ref={password1}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className=""
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <label>تکرار کلمه عبور</label>
            </div>
            <div className="col-md-4">
              <input
                required
                ref={password2}
                onChange={(e) => setrepassword(e.target.value)}
                type="password"
                className=""
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>ایمیل</label>
            </div>
            <div className="col-md-4">
              <input
                required
                onChange={(e) => setemail(e.target.value)}
                type="email"
                className=""
              />
            </div>
          </div>

          {/*  <div className="row mt-3">
              <div className="col-md-4">
              
                <label>موبایل</label>
                </div>
                <div className="col-md-4">
                <input required onChange={(e)=>setphone(e.target.value)} type="number" className=""/>
                </div>
                </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={register}>
            ثبت
          </Button>
          <Button variant="dark" onClick={showregmodal}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default memo(RegisterUser);
