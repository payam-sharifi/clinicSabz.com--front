import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRef } from "react";
import { memo } from "react";
import Swal from "sweetalert2";
const BASE_URL = process.env.REACT_APP_API_URL;
const AddPosts = () => {
  const refauthor = useRef(null);
  const refsubject = useRef(null);

  const refbody = useRef(null);
  const [subject, setsubject] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("");
  const [img, setimg] = useState({ img1: "", img2: "", img3: "", img4: "" });
  const [imgchecked, setimgchecked] = useState(true);
  const [filmchecked, setfilmchecked] = useState(true);
  const [url, seturl] = useState(null);
  const [acceptfile, setacceptfile] = useState(null);
  const [dis, setdis] = useState(true);

  const { users, loading, error, isLogin } = useSelector(
    (state) => state.allUsers
  );

  const handleimgchecked = (e) => {
    setimgchecked(!e.target.checked);

    if (imgchecked) {
      seturl(`${BASE_URL}/posts/uploadimg`);
      setacceptfile("image/*");
      setdis(false);
    } else {
      setdis(true);
    }
  };

  const handlefilmchecked = (e) => {
    setfilmchecked(!e.target.checked);

    if (filmchecked) {
      seturl(`${BASE_URL}/posts/uploadvideo`);
      setacceptfile("video/*");
      setdis(false);
    } else {
      setdis(true);
    }
  };
  const successShow = () => {
    Swal.fire("اطلاعات با موفقیت ثبت شد", "", "success");
  };
  if (isLogin) {
    return (
      <>
        <div className="container mt-5">
          <div className="form-check">
            <input
              onChange={(e) => handleimgchecked(e)}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              آپلود عکس
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={(e) => handlefilmchecked(e)}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              آپلود فیلم
            </label>
          </div>

          <form action={url} encType="multipart/form-data" method="post">
            <div className="form-group">
              <div className="row-reverse">
                <div className="col-md-4">
                  <img
                    width={100}
                    src={img.img1 === "" ? "" : URL.createObjectURL(img.img1)}
                  ></img>
                  <input
                    disabled={dis}
                    type="file"
                    accept={acceptfile}
                    className="form-control-file"
                    onChange={(e) =>
                      setimg({ ...img, img1: e.target.files[0] })
                    }
                    name="image"
                  />
                </div>

                <div className="col-md-4 mt-1">
                  <img
                    width={100}
                    src={img.img2 === "" ? "" : URL.createObjectURL(img.img2)}
                  ></img>
                  <input
                    disabled={dis}
                    type="file"
                    accept={acceptfile}
                    className="form-control-file"
                    onChange={(e) =>
                      setimg({ ...img, img2: e.target.files[0] })
                    }
                    name="image"
                  />
                </div>

                <div className="col-md-4 mt-1">
                  <img
                    width={100}
                    src={img.img3 === "" ? "" : URL.createObjectURL(img.img3)}
                  ></img>
                  <input
                    disabled={dis}
                    type="file"
                    accept={acceptfile}
                    className="form-control-file"
                    onChange={(e) =>
                      setimg({ ...img, img3: e.target.files[0] })
                    }
                    name="image"
                  />
                </div>
                <div className="col-md-4  mt-1">
                  <img
                    width={100}
                    src={img.img4 === "" ? "" : URL.createObjectURL(img.img4)}
                  ></img>
                  <input
                    disabled={dis}
                    type="file"
                    accept={acceptfile}
                    className="form-control-file"
                    onChange={(e) =>
                      setimg({ ...img, img4: e.target.files[0] })
                    }
                    name="image"
                  />
                </div>
              </div>
              {/* end of upload section */}
              <input
                type="text"
                ref={refauthor}
                onChange={(e) => setauthor(e.target.value)}
                className="form-control mt-1"
                placeholder="نام نویسنده"
                name="author"
              />
              <input
                type="text"
                ref={refsubject}
                required
                onChange={(e) => setsubject(e.target.value)}
                className="form-control mt-1"
                placeholder="عنوان"
                name="title"
              />
              <textarea
                ref={refbody}
                required
                onChange={(e) => setbody(e.target.value)}
                rows="8"
                type="text"
                className="form-control mt-1"
                placeholder="متن"
                name="body"
              />
              <input
                onClick={successShow}
                type="submit"
                value="ثبت"
                className="btn btn-primary mt-1"
              />
            </div>
          </form>
        </div>
      </>
    );
  } else return;
};
export default memo(AddPosts);
