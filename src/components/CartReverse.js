import React from 'react';
import "../css/Cart.css"
function CartReverse(props) {
    return (
        <div className="about1 ">
          <img
            loading="lazy"
            width="1000"
            height="458"
            src="https://medical.sanandajweb.ir/wp-content/uploads/2022/08/333-1.jpg"
            className="about-image"
            alt=""
            decoding="async"
            srcset="https://medical.sanandajweb.ir/wp-content/uploads/2022/08/333-1.jpg 1000w, https://medical.sanandajweb.ir/wp-content/uploads/2022/08/333-1-600x275.jpg 600w, https://medical.sanandajweb.ir/wp-content/uploads/2022/08/333-1-300x137.jpg 300w, https://medical.sanandajweb.ir/wp-content/uploads/2022/08/333-1-768x352.jpg 768w"
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
          <div className="about-box1">
            <h2 className="about-box-title">لورم ایپسوم متن ساختگی</h2>
            <p className="about-box-text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
    );
}

export default CartReverse;