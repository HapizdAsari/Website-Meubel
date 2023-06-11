import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import productImg1 from '../image/Hero-product-22.png'
import productImg2 from '../image/Hero-product-11.png'
import productImg3 from '../image/Hero-product-22.png'
import productImg4 from '../image/hero-product-4.jpg'
import productImg5 from '../image/hero-product-5.jpg'

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    
    <section className="section hero" id="Home" aria-label="home">
        <div className="container">

          <ul className="hero-list">

            <li>
              <div className="hero-card">

                <figure className="card-banner img-holder" style={{width: "285px", height: "450px"}}>
                  <img src={productImg1} width="285px" height="396px" alt="Art Deco Home"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3>
                    <a href="#" className="card-title">Kursi Sultan</a>
                  </h3>

                  {/* <p className="card-text">Decoration</p> */}
                </div>

              </div>
            </li>

            <li className="colspan-2">
              <div className="hero-card">

                <figure className="card-banner img-holder" style={{width: "560px", height: "450px"}}>
                  <img src={productImg2} width="568px" height="389px" alt="Helen Chair"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3>
                    <a href="#" className="card-title">Sofa Minimalis</a>
                  </h3>

                  {/* <p className="card-text">Decoration</p> */}
                </div>

              </div>
            </li>

            <li>
              <div className="hero-card">

                <figure className="card-banner img-holder" style={{width: "285px", height: "450px"}}>
                  <img src={productImg3} width="285px" height="396px" alt="Vase Of Flowers"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3>
                    <a href="#" className="card-title">Kursi Sultan</a>
                  </h3>

                  {/* <p className="card-text">Decoration</p> */}
                </div>

              </div>
            </li>

            {/* <li className="colspan-2">
              <div className="hero-card">

                <figure className="card-banner img-holder" style={{width: "580", height: "213"}}>
                  <img src={productImg4} width="580" height="213" alt="Wood Eggs"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3>
                    <a href="#" className="card-title">Wood Eggs</a>
                  </h3>

                  <p className="card-text">Decoration</p>
                </div>

              </div>
            </li>

            <li className="colspan-2">
              <div className="hero-card">

                <figure className="card-banner img-holder" style={{width: "580", height: "213"}}>
                  <img src={productImg5} width="580" height="213" alt="Table Wood Pine"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3>
                    <a href="#" className="card-title">Table Wood Pine</a>
                  </h3>

                  <p className="card-text">Furniture</p>
                </div>

              </div>
            </li> */}

          </ul>

        </div>
      </section>
      </>
  );
}

export default Hero