import { memo } from "react";


const Carousel=()=>{


  
  return(
      <div id="header " className="mt-mobile-5">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      
        <div className="carousel-inner">
           <div className="carousel-item active" >
            <img src="images/1.jpeg" className="d-block w-100" alt="..."/>
          {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>   */}
          </div> 
          <div className="carousel-item">
            <img src="images/2.jpeg" className="d-block w-100" alt="..."/>
       {/*    <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>    */}
          </div> 
          <div className="carousel-item">
            <img src="images/3.jpeg" className="d-block w-100" alt="..."/>
            {/*   <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>  */}
          </div> 
        </div>
 
      </div>   
      </div>
    )
}
export default memo(Carousel);