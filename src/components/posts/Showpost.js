import { useEffect, useState } from "react";
import { memo } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import axios from "axios";
import { useSelector } from "react-redux";
const BASE_URL = process.env.REACT_APP_API_URL;
const Showpost = () => {
  const { products, loading, error } = useSelector((state) => state.allposts);
  const postId = useParams();
  const [post, setPost] = useState(null);
  const [mainImg, setmMinImg] = useState();
  /*   const [loading,setLoading]=useState(null)
    const [error,setError]=useState(null) */
  useEffect(() => {
 
    axios(`${BASE_URL}/posts/${postId.postId}`)
      .then((res) => {
        setPost(res.data);
        setmMinImg(res.data.imgurl[0]);
      })
      .catch((err) => console.log(err.message));
  }, [postId]);

  return (
    <>
      <Menu />
      <div className="container">
        {loading && <h1>loading...</h1>}
        {error && <h5>مشکلی پیش آمده لطفا با مدیر سایت تماس بگیرید</h5>}
        {post && (
          <div className="row mt-5 justify-content-center">
            <div className="col-md-6">
              <div className="row-reverse mt-5 lh-base align-items-center justify-content-center">
                <div className="col-md-4">
                  <h1 className="fs-5 fw-bold">
                    <span className="fs-3">عنوان :</span> {post.title}
                  </h1>

                  <p className="text-muted">نویسنده : {post.author}</p>
                </div>
                <div className="col-md-8">
                  <p className="fs-6 set-text">{post.body}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-5 ">
              <div className="col-md-6 col-sm-2">
                <img src={mainImg} className="showimg" alt="..." />
              </div>

              <div className="row d-n">
                {post.imgurl.map((p) => (
                  <div className="col-md-3  mt-2 p-c">
                    <img
                      src={p}
                      onClick={(e) => setmMinImg(e.target.src)}
                      className="photo-bandangoshti"
                      alt="..."
                    />
                  </div>
                ))}
              </div>
              <div className="row d-md-none">
                {post.imgurl.map((p) => (
                  <img
                    src={p}
                    onClick={(e) => setmMinImg(e.target.src)}
                    className="mt-2 photo-bandangoshti"
                    alt="..."
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default memo(Showpost);
