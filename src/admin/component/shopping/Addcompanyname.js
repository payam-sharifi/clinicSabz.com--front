import { useState } from "react";
import axios from "axios"
import {Modal,Button} from 'react-bootstrap'
const BASE_URL = process.env.REACT_APP_API_URL;
const Addcompanyname=()=>{
    const [isShow,setshowmodal]=useState(false)
    const [newGroupName,setNewGroupName]=useState()
    const initModal=()=>{
      setshowmodal(!isShow)
    }


    const saveGroup=()=>{
        axios.post(`${BASE_URL}/productgroup`, {
           groupName:newGroupName
          })
          .then(function (response) {

            console.log(response);
            Swal.fire({
              icon: "success",
              text: "عملیات با موفقیت انجام شد",
            });
            
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              icon: "error",
              text: error.response.data,
            });
          });
    }
    return(
        <>
<Button variant="success ms-2" onClick={initModal} >
اضافه کردن
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>لطفا نام شرکت جدید وارد نمایید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input onChange={(e)=>setNewGroupName(e.target.value)} type='text'></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            انصراف
          </Button>
          <Button variant="dark" onClick={saveGroup}>
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>

</>
    )
}
export default Addcompanyname