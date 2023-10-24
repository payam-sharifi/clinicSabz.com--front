import { useEffect, useState } from "react";
import { memo } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../../css/getposts.css";
import "../../css/pagination.css";
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
    console.log(`${BASE_URL}/posts`);
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data.data);
        setloader(false);
      });
  }, []);
  console.log(blogPosts);
  return (
    <>
      <div className="text-center">
        {loader && <Spinner animation="border" variant="danger" />}
      </div>
      {blogPosts === null ? (
        <h1>null</h1>
      ) : (
        <div className="row justify-content-center justify-content-md-center align-items-center">
          {currentPosts.map((p) => (
            <div className="col-md-4 ">
              <div className="box-article">
                <div className="news-image">
                  <a
                    href="https://medical.sanandajweb.ir/%d9%84%d9%88%d8%b1%d9%85-%d8%a7%db%8c%d9%be%d8%b3%d9%88%d9%85-%d9%85%d8%aa%d9%86-%d8%b3%d8%a7%d8%ae%d8%aa%da%af%db%8c-%d9%86%d8%a7%d9%85%d9%81%d9%87%d9%88%d9%85-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%db%8c-9/"
                    dideo-checked="true"
                  >
                    <img
                      loading="lazy"
                      width="300"
                      src={p.imgurl[0]}
                      class="attachment-medium size-medium wp-post-image"
                      alt=""
                      decoding="async"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />{" "}
                  </a>
                </div>
                <div class="box-news-title ">
                  <a
                    className="text-decoration-none "
                    href="https://medical.sanandajweb.ir/%d9%84%d9%88%d8%b1%d9%85-%d8%a7%db%8c%d9%be%d8%b3%d9%88%d9%85-%d9%85%d8%aa%d9%86-%d8%b3%d8%a7%d8%ae%d8%aa%da%af%db%8c-%d9%86%d8%a7%d9%85%d9%81%d9%87%d9%88%d9%85-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%db%8c-9/"
                    dideo-checked="true"
                  >
                    <h3 class="box-news-tlt">{p.body}</h3>
                  </a>
                  {/*  <div class="d-flex align-items-center mt-3 justify-content-start">
                    <span class="dir-rtl">
                      <i class="text-primary mx-3 bi bi-clock"></i>
                      {p.date}
                    </span>
                
                  </div> */}
                </div>
                <div class="">
                  {/* <a href="#" class="more-news dir-rtl" dideo-checked="true">
                    ادامه مطلب <i class="icon-arrow-left"></i>
                    <i class="bi bi-arrow-left"></i>
                  </a> */}
                  <div className="t-left ">
                    <NavLink
                      className="more-news dir-rtl"
                      to={`/posts/${p._id}`}
                    >
                      ادامه مطلب <i class="icon-arrow-left"></i>
                    <i class="bi bi-arrow-left"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}

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
      )}
    </>
  );
};
export default memo(Getposts);
