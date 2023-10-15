import { memo } from "react";



const Footer =()=>{
    return(
       
         <div id="footer" className=" bg-menu  ">  
  
        <div className="row justify-content-center   container  p-4">
          <div className="col-md-4 ">
                 <h5>اطلاعات تماس :</h5>
                 <hr />

                 <div className="d-flex mt-3">
                     <i className="bi bi-telephone me-3"></i>
                    <p>تلفن :<a href="https://api.whatsapp.com/send?phone=09351900180"  className="cursor-pointor ms-2">۰۹۳۵۱۹۰۰۱۸۰</a></p>
                </div>

                 <div className="d-flex ">
                     <i className="bi bi-geo-alt me-3"></i>
                     <p>آدرس :<span className="ms-2 ad">سعادت آباد چهارراه سرو کوچه جوی پا پلاک ۳۸ واحد۱۳</span></p>
                  </div>


                   <div className="d-flex ">
                      <i className="bi bi-envelope me-3"></i>
                       <p>ایمیل :<span className="ms-2">info@clinicsabz.com</span></p>
                   </div>
    


            </div>

    {/*         <div className="col-md-4 ">
                   <h5>لوکیشن کلینیک اروتز و پروتز سبز :</h5>
                    <hr />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8205171273453!2d51.36017331526147!3d35.779784980171506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81ad9a8df879c3ce!2zMzXCsDQ2JzQ3LjIiTiA1McKwMjEnNDQuNSJF!5e0!3m2!1sen!2s!4v1662979330959!5m2!1sen!2s" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
              </div> */}
        
              <div className="col-md-4 ">
                <h5>ما را در شبکه های اجتماعی دنبال کنید :</h5>
                 <hr />
                 <div className="d-flex">
                  <a href="https://api.whatsapp.com/send?phone=09351900180" className="bi bi-whatsapp me-3"></a>                
                <a href="https://www.aparat.com/Clinicsabz/u_14725038">  <img width="20" className="me-3" height="20" src="/images/icon--black@32px.png" ></img></a> 
                  <a href="https://www.instagram.com/clinicsabzz" className="bi bi-instagram"></a>
                 </div>
                  
                 

           </div>
  
        </div>




        
<div id="footer-d" className="  text-center text-muted">
<div >کلیه حقوق این وب سایت متعلق به مرکز تخصصی اروتز و پروتز سبز می‌باشد.
</div>
<a href="https://api.whatsapp.com/send?phone=09122260449" >Developed By Payam Sharifi</a> 
</div>
     </div> 
    )
}
export default memo(Footer);