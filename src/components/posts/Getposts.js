import { useEffect, useState } from "react";
import { memo } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
const BASE_URL = process.env.REACT_APP_API_URL;

const Getposts = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const [loader, setloader] = useState(true);
  useEffect(() => {
    console.log(`${BASE_URL}/posts`)
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data.data);
        setloader(false);
      });
  }, []);
console.log(blogPosts)
  return (
    <>
      {loader && <Spinner animation="border" variant="danger" />}
      {blogPosts === null ? (
        <h1>null</h1>
      ) : (
        <div className="container">
          <div  className="row g-5 justify-content-center justify-items-center text-center">
            {currentPosts.map((p) => (
              <div data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="500" className="col-md-4 mb-5" key={p._id}>
                <div className="d-flex shadow">
                  <div className="card-post  overflow-auto ">
                    <div className="p-3  ">
                      <p className="text-muted fs-smallest  d-none">{p.date}</p>
                      <div className="text-right">
                        
                        <p className="fs-smallest text-justify set-text hide-text">
                          {p.body}
                        </p>

                        <div className="fs-smallest text-muted d-flex mt-2  mb-2">
                          <NavLink
                            className="cursor-pointer"
                            to={`/posts/${p._id}`}
                          >
                            ادامه ...
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="landscape-img-post"
                    src={p.imgurl[0]}
                    alt="..."
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="m-left" style={{marginBottom:10+"rem"}}>
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
      )}
    </>
  );
};
export default memo(Getposts);
