import {  useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../../services/user.service"
import Swal from "sweetalert2";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {ArcaptchaWidget}  from "arcaptcha-react"
import "../styles/loginForm.scss";



const LoginForm = () => {
  
  const navigate=useNavigate()
const [capcha,setCapcha]=useState(true)
  const [account, setaccount] = useState({ userName: "", password: "" });
  const inputusernameref = useRef();
  const inputpasswordref = useRef();
const ArRef=useRef()

 useEffect(()=>{
    


  if(process.env.NODE_ENV==="production"){
    setCapcha(false)
  }
},[]) 

const getToken =  () => {

    setCapcha(true)
    
    
};
  const handleSubmit = async () => {
  
    if(capcha){
   //Calling auth Api 
   try {
    const {data:jwt}= await services.login(account.userName,account.password)
    localStorage.setItem("token",jwt)
    navigate("/Admin/AdminPanel")
    
  
   } catch (err) {
     if(err.response && err.response.status===400){
      Swal.fire({
        icon: "error",
        text: "نام کاربری یا کلمه عبور اشتباه است",
      });
      inputusernameref.current.value=""
      inputpasswordref.current.value=""
     }
   }
  }else{
    Swal.fire({
      icon: "error",
      text: "لطفا تیک مربوط به شناسایی ربات را بزنید",
    });
  }
 
/*     const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);   */
  };

  return (
    <>
      <div className="form-signinn ">
        <div className="box-form  ">
          <Form
            noValidate
            //   validated={validated}
            onSubmit={(e) => handleSubmit(e)}
          >
            <Row className="mb-3 ">
              <Form.Group className="mb-3 " controlId="formBasicUsername">
                <InputGroup className="row" hasValidation>
                  <div className="text-center">
                    <Form.Label>نام کاربری</Form.Label>
                  </div>
                  <div className="col-md-12">
                    <Form.Control
                      required
                      onChange={(e) =>
                        setaccount({ ...account, userName: e.target.value })
                      }
                      value={account.userName}
                      ref={inputusernameref}
                      autoFocus
                      type="text"
                      placeholder="نام کاربری"
                    />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    نام کاربری نمیتواند خالی باشد
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <InputGroup className="row" hasValidation>
                  <Form.Label as={Col} md="12">
                    کلمه عبور
                  </Form.Label>
                  <div>
                    <Form.Control
                      onChange={(e) =>
                        setaccount({ ...account, password: e.target.value })
                      }
                      required
                      value={account.password}
                      ref={inputpasswordref}
                      type="password"
                      placeholder="کلمه عبور"
                    />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    کلمه عبور نمیتواند خالی باشد
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              
              <ArcaptchaWidget
              ref={ArRef}
              site-key="mjwnxvkoh7"
              callback={getToken}
              //theme='dark' it's not required. Default is light
            //  lang='en' it's not required. Default is fa
              />
              <div className="text-center mt-3">
                <Button onClick={()=>handleSubmit()} as={Col} md="6" variant="success" type="submit">
                  ورود
                </Button>
              </div>
            </Row>
          </Form>
         
        </div>
      </div>
    </>
  );
};
export default LoginForm;
