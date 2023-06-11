import React from "react";
import testi1 from "../image/Testi_1.jpg";
import testi2 from "../image/Testi_2.jpg";
import testi3 from "../image/Testi_3.jpg";
import testi4 from "../image/Testi_4.jpg";
import testi5 from "../image/Testi_5.jpg";
import testi6 from "../image/Testi_6.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonial =()=> {
    return(
        <div class="container-fluid">
        {/* <!-- ---------- TESTIMONY SECTION BEGIN ---------- --> */}
        <section class="testimony-section" id="Testimonial">

            <div class="opening-text-testimony text-center">
                <h2>Testimoni</h2>
                <p>Berbagai product kami di rumah para pelanggan</p>
            </div>
            <OwlCarousel 
          className="owl-theme"  
          loop  
          nav  
          margin={32}
          stagePadding={16}
          dots={false}
          center
          autoplay
          autoplayHoverPause >
            {/* <!-- Owl Carousel --> */}
            {/* <div class="owl-carousel owl-theme"> */}
              <div class="item">
                <img src={testi1} alt="person image"/>
              </div>

                <div class="item">
                  <img src={testi2} alt="person image"/>
                </div>

                <div class="item">
                  <img src={testi3} alt="person image"/>
                </div>

                <div class="item">
                  <img src={testi4} alt="person image"/>
                </div>

              <div class="item">
                <img src={testi5} alt="person image"/>
              </div>
              <div class="item">
                <img src={testi6} alt="person image"/>
              </div>

            {/* </div> */}
            </OwlCarousel>
        </section>
        {/* <!-- ---------- TESTIMONY SECTION END ---------- --> */}
      </div>
    );
}

export default Testimonial;