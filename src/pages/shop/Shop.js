import { useEffect, useState } from "react";
import { memo } from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Spinner, ButtonGroup } from "react-bootstrap";
import { addToCart } from "../../features/shopping/shopSlice";
import { searchOnProductName } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/actions";
import ReactPaginate from "react-paginate";
const Shop = () => {
  const { products, loading, error } = useSelector(
    (state) => state.AllProducts
  );

  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  //  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const [search, setsearch] = useState();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    swal.fire({
      title: "محصول اضافه شد",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const searchHandle = (ProductName) => {
    if (ProductName !== "") {
      dispatch(searchOnProductName(ProductName));
    } else {
      dispatch(getProducts());
    }
  };
  return (
    <>
      <Menu />

      <div className="container">
        <div class="row">
          <div className="row mt-5">
            <div className="col-md-4 mt-5">
              <div className="search">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="جستجوی بر اساس نام محصول"
                  onChange={(e) => setsearch(e.target.value)}
                />
              </div>
            </div>
            <ButtonGroup className="mt-4 ">
              <Button
                className="mx-2 rounded  btn-size"
                onClick={() => searchHandle(search)}
              >
                جستجو
              </Button>
              <Button
                className="rounded btn-size"
                onClick={() => dispatch(getProducts())}
              >
                نمایش همه
              </Button>
            </ButtonGroup>

            {loading && <Spinner animation="border" variant="danger" />}
            {error && (
              <h5 className="mt-5">
                خطایی اتفاق افتاده با مدیر سایت تماس بگیرید
              </h5>
            )}
            {currentPosts &&
              currentPosts.map((p) => (
                <div className="col-md-4 mt-3" key={p._id}>
                  <Card style={{ maxWidth: 18 + "rem"}}>
                    <Card.Img
                      variant="top"
                      src={p.imgurl}
                      className="img-fluid"
                      height={60}
                    />
                    <Card.Body>
                      <Card.Title>{p.productname}</Card.Title>
                     
                      
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p>قیمت فروش</p>
                        {p.sellprice}
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p>موجودی</p>
                        {p.numberInStock}
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p>شرکت سازنده</p>
                        {p.company}
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                      <details>
                        <summary>نمایش توضیحات</summary>
                        <Card.Text>{p.productinfo}</Card.Text>
                      </details>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                     
                     
                      <Button onClick={() => handleAddToCart(p)}>
                        افزودن به سبد خرید
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
          <div className="m-r mt-5">
            <ReactPaginate
              onPageChange={paginate}
              pageCount={Math.ceil(products.length / postsPerPage)}
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
      </div>
      <Footer />
    </>
  );
};
export default memo(Shop);
