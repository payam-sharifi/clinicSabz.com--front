import React from 'react';
import "../css/between.css"
function Between(props) {
    return (
        <div className=" row betcontainer px-4  justify-content-around align-items-center">
            <div className='col-md-3 d-flex justify-content-center align-items-center'>
            <div className='icon '>
            <i class="bi fs-2 text-success bi-geo-alt-fill"></i>
            </div>
         <div className='mt-2 ms-2'>
            <div className='betitemheader'>آدرس</div>
            <p className='betitemcontent'>سعادت آباد چهارراه سرو کوچه جوی پا پلاک ۳۸ واحد۱۳</p>
            </div>
            </div>
            <div className='col-md-3 d-flex justify-content-center align-items-center'>
                <div className='icon '>
            <i class="bi fs-2 text-success  bi-calendar-check"></i>
            </div>
         <div className='mt-2 ms-2'>
            <div className='betitemheader'>ساعت کاری</div>
            <p className='betitemcontent'>۸ الی ۱۳ و ۱۶ الی ۲۰</p>
            </div>
            </div>
            <div className='col-md-3 d-flex justify-content-center align-items-center'>
            <div className='icon '>
            <i class="bi fs-2 text-success bi-telephone-fill "></i>
            </div>
         <div className='mt-2 ms-2'>
            <div className='betitemheader'>تلفن</div>
            <p className='betitemcontent'>09351900180</p>
            </div>
            </div>
            <div className='col-md-3 d-flex justify-content-center align-items-center'>
            <div className='icon '>
            <i class="bi  fs-2 text-success bi-envelope "></i>
            </div>
         <div className='mt-2 ms-2'>
            <div className='betitemheader'>ایمیل</div>
            <p className='betitemcontent'>info@clinicsabz.com</p>
            </div>
            </div>
        </div>
    );
}

export default Between;