import { useEffect, useState } from "react";
import { memo } from "react";
import Swal from "sweetalert2";
import { Button, ButtonGroup, Modal, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

const Delpost = () => {
  const [log, setlog] = useState();
  const [id, setid] = useState();
  const [isShow, setshowmodal] = useState(false);
  const [newAthour, setNewAthour] = useState();
  const [newTitle, setNewTitle] = useState();
  const [newBody, setNewBody] = useState();
  const [blogPosts, setblogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const [loader, setloader] = useState(true);
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const initModal = (i) => {
    setshowmodal(!isShow);
    setid(i);
  };

  useEffect(() => {
    try {
      fetch(`${BASE_URL}/posts`)
    .then((res) => res.json())
    .then((data) => {
      setblogPosts(data.data);
      setloader(false);
    });
    } catch (error) {
      setloader(true)
    }
    
  },[]);

  const delPost = (id) => {
    axios
      .delete(`${BASE_URL}/posts/${id}`, {
        id,
      })
      .then(function (res) {
        setblogPosts(res.data);
        Swal.fire({
          icon: "success",
          text: "عملیات با موفقیت انجام شد",
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          text: error.response.data,
        });
      });
  };

  const saveUpdate = (id, newAthour, newBody, newTitle) => {
    axios
      .put(`${BASE_URL}/posts/${id}`, {
        title: newTitle,
        body: newBody,
        authour: newAthour,
      })
      .then(function (res) {
        setblogPosts(res.data);
        Swal.fire({
          icon: "success",
          text: "اطلاعات با موفقیت تغییر یافت",
        });
        initModal()
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          text: error.response.data,
        });
      });
  };

  
    return (
      <>
        {loader && <Spinner animation="border" variant="danger" />}

        {blogPosts ?
        <div className="container">
        <div className="row g-5 justify-content-center justify-items-center text-center">
          {currentPosts.map((p) => (
            <div className="col-md-4 " key={p._id}>
              <div className="d-flex shadow">
                <div className="card-post overflow-auto p-3">
                  
                    {/* <p className="text-muted  fs-small">{p.date}</p>   */}
                   
                    <div className="text-right">
                    <p className="fs-smallest text-justify set-text hide-text">{p.body}</p>
                    </div>
                    <div className="fs-smallest text-muted mb-2 mt-2  ">
                      <NavLink
                        className="cursor-pointer"
                        to={`/posts/${p._id}`}
                      >
                        ادامه...
                      </NavLink>
                    </div >
                    <div className="row">
                      <Button
                      size="sm"
                        className="cursor-pointer me-2 rounded"
                        onClick={() => delPost(p._id)}
                      >
                        حذف
                      </Button>
                      <Button
                     size="sm"
                        className="cursor-pointer rounded mt-2"
                        onClick={() => initModal(p._id)}
                      >
                        ویرایش
                      </Button>
                      </div>





                    <Modal show={isShow}>
                        <Modal.Header closeButton onClick={initModal}>
                          <Modal.Title>ویرایش پست</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="row">
                            <div className=" col-md-6 mt-1">
                              <label>عنوان</label>
                            </div>
                            <div className=" col-md-6 mt-1">
                              <input
                                onChange={(e) =>
                                  setNewTitle(e.target.value)
                                }
                                type="text"
                              ></input>
                            </div>
                            <div className=" col-md-6 mt-1">
                              <label>نویسنده</label>
                            </div>
                            <div className=" col-md-6 mt-1">
                              <input
                                onChange={(e) =>
                                  setNewAthour(e.target.value)
                                }
                                type="text"
                              ></input>
                            </div>
                            <div className=" col-md-6 mt-1">
                              <label>متن</label>
                            </div>
                            <div className=" col-md-6 mt-1">
                              <textarea
                                onChange={(e) => setNewBody(e.target.value)}
                                type="text"
                                rows={5}
                              />
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="danger" onClick={initModal}>
                            انصراف
                          </Button>
                          <Button
                            variant="dark"
                            onClick={() =>
                              saveUpdate(id, newAthour, newBody, newTitle)
                            }
                          >
                            ذخیره
                          </Button>
                        </Modal.Footer>
                      </Modal>  
                    
                    
                    
                    
                  
                </div>

                <img
                  src={p.imgurl[0]}
                  className="landscape-img-post"
                  alt="..."
                />
              </div>
            </div>
            ))}
        </div>



        
        <div className="m-left ">
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(blogPosts.length / postsPerPage)}
            previousLabel={"<<"}
            nextLabel={">>"}
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            marginPagesDisplayed={2}
            nextClassName={"item previous "}
            pageClassName={"item pagination-page "}
            pageRangeDisplayed={2}
            previousClassName={"item next"}
          />
        </div>
      </div>
        
        : (
          <h1>ff</h1>
        )}
      </>
    )
};
export default memo(Delpost);
