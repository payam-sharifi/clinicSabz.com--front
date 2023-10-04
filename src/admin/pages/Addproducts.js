import Swal from "sweetalert2";
import { memo } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ProductTable from "../component/shopping/ProductTable";
export const tableContext = React.createContext();
const BASE_URL = process.env.REACT_APP_API_URL;
const API_URL = `${BASE_URL}/product`;
const Addproducts = () => {
 
  
  const [isShow, setshowmodal] = useState(false);
  const [newGroupName, setNewGroupName] = useState("کالا");
  const [product, setproduct] = useState(null);
  const [newproductname, setnewproductname] = useState();
  const [newnumberstock, setnewnumberstock] = useState();
  const [newprice, setnewprice] = useState();
  const [newcompany, setnewcompany] = useState();
  const [productgroup, setproductgroup] = useState(null);
  const [code, setcode] = useState(1000);
const[newproductinfo,setnewproductinfo]=useState()
  const [newsellprice, setnewsellprice] = useState();
  const [deletecode, setdeletecode] = useState();
  const [modaldelete, setmodaldelete] = useState();
  const [isshowedit, setisshowedit] = useState();
  const [addModal, setAddModal] = useState();
  const [editcode, seteditcode] = useState();
  const [img, setimg] = useState();
  const setEditCode = (editcode) => {
    for (let i = 0; i < product.length; i++)
      if (product[i].productcode === parseInt(editcode)) return true;
    return false;
  };
  const showAddModal = () => {
    setAddModal(!addModal);
  };
  const initModal = () => {
    setshowmodal(!isShow);
  };
  const initModaldelete = () => {
    setmodaldelete(!modaldelete);
  };
  const productGroupRefresh=()=>{
   try {
    fetch(`${BASE_URL}/productgroup`)
    .then((res) => res.json())
    .then((data) => {
      setproductgroup(data);
     
    }); 
   } catch (error) {
     
   }
   
  }
  const fillTable=()=>{
    fetch(`${BASE_URL}/product`)
    .then((res) => res.json())
    .then((data) => {
      setproduct(data);
      let lastelm = data[data.length - 1].productcode;
      setcode(lastelm + 1);
      console.log(data);
    });
  }
  const removeProduct = () => {
    Swal.fire({
      title: "آیا از حذف اطلاعات مطمعن هستید ؟",
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: `خیر`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`${BASE_URL}/product`, {
     

            data: {
              productcode: deletecode,
            },
          })
          .then(function (response) {
            if (response.data.deletedCount > 0) {
              Swal.fire(
                `تعداد ${response.data.deletedCount} عدد داده حذف شد`,
                "",
                "success"
              );
            fillTable()
            initModaldelete()
            } else {
              Swal.fire({ icon: "error", text: `هیچ داده ای حذف نشد` });
             
            }
          })
          .catch(function (res) {
            Swal.fire({ icon: "error", text: res.response.data });
          });
      } else if (result.isDenied) {
        Swal.fire("اطلاعات ذخیره نشد", "", "info");
        setInterval(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };
  const saveGroup = () => {
    try {
      axios
         .post(`${BASE_URL}/productgroup`, {
           groupName: newGroupName,
         })
         productGroupRefresh()
      initModal()
      Swal.fire({
        icon: "success",
        text: "عملیات با موفقیت انجام شد",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "عملیات با موفقیت انجام نشد",
      });
    }

  };

  const modaledit = () => {
    setisshowedit(!isshowedit);
  };

  const editProduct = () => {
    const resultcode = setEditCode(editcode);
    try {
      Swal.fire({
        title: "آیا از ویرایش اطلاعات مطمعن هستید؟",
        showDenyButton: true,
  
        confirmButtonText: "بله",
        denyButtonText: `خیر`,
      }).then((result) => {
        if (result.isConfirmed) {
          if (resultcode) {
            axios
              .put(`${BASE_URL}/product`, {
                productname: newproductname,
                productgroup: newGroupName,
                numberInStock: newnumberstock,
                price: newprice,
                company: newcompany,
                sellprice: newsellprice,
                productcode: editcode,
                productinfo:newproductinfo,
              })
              .then(function (response) {
                Swal.fire("اطلاعات با موفقیت ویرایش شد", "", "success");
                modaledit()
              fillTable()
              })
              .catch(function (error) {
                Swal.fire("مشکلی پیش آمده است", "", "info");
                modaledit()
              });
          } else Swal.fire("کد وارد شده اشتباه است", "", "info");
        } else if (result.isDenied) {
          Swal.fire("ویرایش اطلاعات کنسل شد", "", "info");
        }
      });
    } catch (error) {
      Swal.fire("اطلاعات با موفقیت ویرایش نشد", "", "error");
    }
  
  };

const successShow=()=>{
  Swal.fire("اطلاعات با موفقیت ثبت شد", "", "success");
}
  useEffect(() => {
  
    fillTable()
      productGroupRefresh();
  }, []);

  return (
    <div className="container mt-5">
      {/* Show Table */}
      <tableContext.Provider value={product}>
        <ProductTable />
      </tableContext.Provider>
      <ButtonGroup size="sm" >
        <Button
          variant="success ms-2 px-2 "
          className="m-3 rounded"
          onClick={showAddModal}
        >
          افزودن محصول
        </Button>
        <Button variant="success ms-2" className="m-3 rounded " onClick={modaledit}>
          ویرایش محصول
        </Button>
        <Button
          variant="success ms-2"
          className=" m-3 rounded "
          onClick={initModaldelete}
        >
          حذف محصول
        </Button>
      </ButtonGroup>
      {/* Add Product */}
      <div className="row">
        <div className="col-md-4">
          <Modal show={addModal}>
            <Modal.Header closeButton onClick={showAddModal}>
              <Modal.Title>لطفا اطلاعات محصول را وارد کنید</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                action={API_URL}
                encType="multipart/form-data"
                method="post"
              >
                <div className="form-group">
                  <div className="row mt-3">
                    <div className="col-md-4"> گروه محصول را انتخاب کنید</div>
                    <div className="col-md-4">
                      <select
                      onClick={productGroupRefresh}
                        name="productgroup"
                        onChange={(e) => setNewGroupName(e.target.value)}
                        placeholder="لطفا گروه محصول را انتخاب نمایید"
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        {productgroup === null
                          ? ""
                          : productgroup.map((p) => (
                              <option  key={p._id} value={p.groupName}>
                                {p.groupName}
                              </option>
                            ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <Button variant="danger" onClick={initModal}>
                        اضافه کردن
                      </Button>
                    </div>
                    <Modal show={isShow}>
                      <Modal.Header closeButton onClick={showAddModal}>
                        <Modal.Title>
                          لطفا نام گروه محصول را وارد کنید
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <input
                          type="text"
                          onChange={(e) => setNewGroupName(e.target.value)}
                          className="form-control mt-3"
                          placeholder="عنوان"
                          name="productgroup"
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="dark" onClick={saveGroup}>
                          ذخیره
                        </Button>
                        <Button variant="danger" onClick={initModal}>
                          انصراف
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>

                  {/*  <img width={5} height={5} src={img==="" ?"":URL.createObjectURL(img)} ></img>    */}

                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label htmlFor="image" style={{ fontSize: "0.85rem" }}>
                        {" "}
                        عکس محصول را انتخاب کنید
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="image"
                        type="file"
                        accept=".jpg,.png,.jpeg"
                        className="form-control-file"
                        onChange={(e) => setimg(e.target.files[0])}
                        name="image"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label
                        htmlFor="productname"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {" "}
                        نام محصول را وارد نمایید
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="productname"
                        onChange={(e) => setnewproductname(e.target.value)}
                        className="form-control "
                        placeholder="نام "
                        name="productname"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label htmlFor="tedad" style={{ fontSize: "0.85rem" }}>
                        {" "}
                        تعداد محصول را وارد نمایید
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="tedad"
                        onChange={(e) => setnewnumberstock(e.target.value)}
                        type="number"
                        className="form-control "
                        placeholder="تعداد"
                        name="numberInStock"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label htmlFor="code" style={{ fontSize: "0.85rem" }}>
                        {" "}
                        کد محصول(خودکار)
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="code"
                        value={code}
                        readOnly={true}
                        type="number"
                        className="form-control "
                        placeholder="کد خودکار تعریف میشود"
                        name="code"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label htmlFor="price" style={{ fontSize: "0.85rem" }}>
                        قیمت خرید محصول
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="price"
                        onChange={(e) => setnewprice(e.target.value)}
                        type="text"
                        className="form-control "
                        placeholder="قیمت خرید "
                        name="price"
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label
                        htmlFor="sellprice"
                        style={{ fontSize: "0.85rem" }}
                      >
                        قیمت فروش محصول
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="sellprice"
                        onChange={(e) => setnewsellprice(e.target.value)}
                        type="text"
                        className="form-control "
                        placeholder="قیمت فروش"
                        name="sellprice"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label htmlFor="company" style={{ fontSize: "0.85rem" }}>
                        نام کمپانی سازنده
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="company"
                        onChange={(e) => setnewcompany(e.target.value)}
                        type="text"
                        className="form-control "
                        placeholder="نام شرکت سازنده"
                        name="company"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label htmlFor="info" style={{ fontSize: "0.85rem" }}>
                        توضیحات{" "}
                      </label>
                    </div>
                    <div className="col-md-8">
                      <textarea
                        id="info"
                        rows="6"
                        className="form-control "
                        placeholder="توضیحات مربوط به محصول را وارد کنید"
                        name="productinfo"
                      />
                    </div>
                  </div>
                  {/*  <input  type="text" className="form-control mt-3" placeholder="عنوان" name="productgroup"/> */}

                  <Button
                  onClick={successShow}
                    type="submit"
                    variant="dark"
                    value="ثبت"
                    className="btn btn-primary mt-3"
                  >
                    ذخیره
                  </Button>
                  <Button
                    onClick={showAddModal}
                    variant="danger"
                    value="ثبت"
                    className="btn btn-primary ms-3 mt-3"
                  >
                    حذف
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>

        {/* Remove Product */}
        <div className="col-md-4"></div>
        <Modal show={modaldelete}>
          <Modal.Header closeButton onClick={initModaldelete}>
            <Modal.Title>لطفا کد محصول را وارد کنید</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              onChange={(e) => setdeletecode(e.target.value)}
              type="number"
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={initModaldelete}>
              انصراف
            </Button>
            <Button variant="dark" onClick={removeProduct}>
              حذف
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Edit product Section */}
        <div className="col-md-4">
          <Modal show={isshowedit}>
            <Modal.Header closeButton onClick={modaledit}>
              <Modal.Title>
                لطفا نام گروه جدید محصول را انتخاب نمایید
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="m-3 row">
                <div className="col-md-4">
                  <label htmlFor="productName" style={{ fontSize: "0.85rem" }}>
                    {" "}
                    کد محصول را وارد کنید :
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    onChange={(e) => seteditcode(e.target.value)}
                    type="text"
                    id="productName"
                    className="ms-2"
                  ></input>
                </div>
              </div>

              <div className="m-3 row">
                <div className="col-md-4">
                  <label htmlFor="productName" style={{ fontSize: "0.85rem" }}>
                    {" "}
                    نام محصول را وارد کنید
                  </label>
                </div>

                <div className="col-md-4">
                  <input
                    onChange={(e) => setnewproductname(e.target.value)}
                    type="text"
                    id="productName"
                    className="ms-2"
                  ></input>
                </div>
              </div>

              <div className="m-3 row">
                <div className="col-md-4">
                  <label
                    htmlFor="productamount"
                    style={{ fontSize: "0.85rem" }}
                  >
                    تعداد را وارد کنید
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    onChange={(e) => setnewnumberstock(e.target.value)}
                    type="number"
                    id="productamount"
                    className="ms-2"
                  ></input>
                </div>
              </div>

              <div className="m-3 row">
                <div className="col-md-4">
                  <label htmlFor="productprice" style={{ fontSize: "0.85rem" }}>
                    {" "}
                    قیمت خرید را وارد کنید
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    onChange={(e) => setnewprice(e.target.value)}
                    type="text"
                    id="productprice"
                    className="ms-2"
                  ></input>
                </div>
              </div>

              <div className="m-3 row">
                <div className="col-md-4">
                  <label
                    htmlFor="sellproductprice"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {" "}
                    قیمت فروش را وارد کنید
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    onChange={(e) => setnewsellprice(e.target.value)}
                    type="text"
                    id="sellproductprice"
                    className="ms-2"
                  ></input>
                </div>
              </div>

              <div className="m-3 row">
                <div className="col-md-4">
                  <label htmlFor="company" style={{ fontSize: "0.85rem" }}>
                    {" "}
                    شرکت سازنده را وارد کنید
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    onChange={(e) => setnewcompany(e.target.value)}
                    type="text"
                    id="company"
                    className="ms-2"
                  ></input>
                </div>
              </div>
              <div className="m-3 row">
                <div className="col-md-4">
                  <label htmlFor="info" style={{ fontSize: "0.85rem" }}>
                    {" "}
                    توضیحات
                  </label>
                </div>
                <div className="col-md-4">
                  <textarea
                    onChange={(e) => setnewproductinfo(e.target.value)}
                    type="text"
                    rows={5}
                    id="info"
                    className="ms-2"
                  ></textarea>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={modaledit}>
                انصراف
              </Button>
              <Button variant="dark" onClick={editProduct}>
                ذخیره
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      {/* Filter Section */}
      {/*  <div className="col-md-4">
<Button variant="success ms-2" className="m-3" onClick={showAddModal} >
فیلتر محصولات
</Button>
<Modal show={addModal}>
        <Modal.Header closeButton onClick={showAddModal}>
          <Modal.Title>لطفا اطلاعات محصول را وارد کنید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      






      
        <div className="m-3 row">
         
            <div className="col-md-4"> 
              <label htmlFor="productName" style={{fontSize: "0.85rem"}}> نام محصول را وارد کنید</label>
</div>

<div className="col-md-4"> 
<input  onChange={(e)=>setnewproductname(e.target.value)} type="text" id="productName" className="ms-2"></input>
</div>
</div>

<div className="m-3 row">
  <div className="col-md-4">
<label htmlFor="productamount" style={{fontSize: "0.85rem"}}>تعداد را وارد کنید</label>
</div>
<div className="col-md-4">
<input onChange={(e)=>setnewnumberstock(e.target.value)} type="number" id="productamount" className="ms-2"></input>
</div>
</div>

<div className="m-3 row">
  <div className="col-md-4">
<label htmlFor="productprice" style={{fontSize: "0.85rem"}}> قیمت خرید را وارد کنید</label>
</div>
<div className="col-md-4">
<input onChange={(e)=>setnewprice(e.target.value)} type="text" id="productprice" className="ms-2"></input>
</div>
</div>



<div className="m-3 row">
  <div className="col-md-4">
<label htmlFor="sellproductprice" style={{fontSize: "0.85rem"}}> قیمت فروش را وارد کنید</label>
</div>
<div className="col-md-4">
<input onChange={(e)=>setnewsellprice(e.target.value)} type="text" id="sellproductprice" className="ms-2"></input>
</div>
</div>



<div className="m-3 row">
  <div className="col-md-4">
<label htmlFor="company" style={{fontSize: "0.85rem"}}>شرکت سازنده را وارد کنید</label>
</div>
<div className="col-md-4">
<input onChange={(e)=>setnewcompany(e.target.value)} type="text" id="company" className="ms-2"></input>
</div>
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={showAddModal}>
            انصراف
          </Button>
          <Button variant="dark" onClick={addproductfunc}>
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>
</div> */}
    </div>
  );
};
export default memo(Addproducts);
