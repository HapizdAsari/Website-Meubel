import React from "react";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoWhatsapp } from "react-icons/io5"
import product1 from "../image/4.png"
import product2 from "../image/1.png"
import product3 from "../image/7.png"
import product4 from "../image/16.png"
import product5 from "../image/5.png"
import product6 from "../image/6.png"
import product7 from "../image/8.png"
import product8 from "../image/9.png"
import product9 from "../image/17.png"
import product10 from "../image/13.png"
import product11 from "../image/10.png"
import product12 from "../image/3.png"
import product13 from "../image/12.png"
import product14 from "../image/11.png"
import product15 from "../image/25.png"
import product16 from "../image/19.png"
import product17 from "../image/22.png"
import product18 from "../image/20.png"
import product19 from "../image/21.png"

const OurService=()=>{
    return(
        <section className="section product" id="Product" aria-label="product">
        <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 section-title">Popular Products</h2>

            <ul className="filter-btn-list">

              <li className="filter-btn-item">
                <button className="filter-btn active" data-filter-btn="all">All Products</button>
              </li>

              {/* <li className="filter-btn-item">
                <button className="filter-btn" data-filter-btn="accessory">Accessory</button>
              </li>

              <li className="filter-btn-item">
                <button className="filter-btn" data-filter-btn="decoration">Decoration</button>
              </li>

              <li className="filter-btn-item">
                <button className="filter-btn" data-filter-btn="furniture">Furniture</button>
              </li> */}

            </ul>
          </div>

          <ul className="grid-list product-list" data-filter="all">

            <li className="decoration">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product1} width="300" height="300" loading="lazy"
                    alt="Animi Dolor Pariatur" className="img-cover"/>

                  <ul className="card-action-list">

                    <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="add to cart">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="add to whishlist">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>

                  {/* <ul className="badge-list">

                    <li>
                      <div className="badge orange">Sale</div>
                    </li>

                    <li>
                      <div className="badge cyan">-10%</div>
                    </li>

                  </ul> */}
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa L Besar</a>
                  </h3>
                  <h4>
                    Bonus Bantal 10pcs<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>
                  

                  <div className="card-price">
                    {/* <del className="del">$19.00</del> */}

                    <data className="price" value="10"><b>Rp 2.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="accessory">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product2} width="300" height="300" loading="lazy" alt="Art Deco Home"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>

                  {/* <div className="card-badge">Out of Stock</div> */}
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa L Minimalis</a>
                  </h3>
                  <h4>
                    Bonus Bantal 4 pcs<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="30"><b>Rp 2.100.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="decoration">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product3} width="300" height="300" loading="lazy"
                    alt="Artificial potted plant" className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa L</a>
                  </h3>
                  <h4>
                    Bonus Bantal 3 pcs<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="40"><b>Rp 2.000.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="accessory">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product4} width="300" height="300" loading="lazy" alt="Dark Green Jug"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa L</a>
                  </h3>
                  <h4>
                    Bonus Bantal 5 pcs<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="17.10"><b>Rp 2.000.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="accessory">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product5} width="300" height="300" loading="lazy"
                    alt="Drinking Glasses" className="img-cover"/>

                  <ul className="card-action-list">

                    <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa L Besar</a>
                  </h3>
                  <h4>
                    Bonus Bantal 10pcs<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="21"><b>Rp 2.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="furniture">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product6} width="300" height="300" loading="lazy" alt="Helen Chair"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro L</a>
                  </h3>
                  <h4>
                    Bonus Bantal 5 pcs<br/>Bahan Kain Kagawa<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="69.50"><b>Rp 1.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="accessory">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product7} width="300" height="300" loading="lazy"
                    alt="High Quality Glass Bottle" className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro L putus</a>
                  </h3>
                  <h4>
                    Bonus Bantal 5 pcs<br/>Bahan Kain Spon<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="30.10"><b>Rp 1.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="accessory">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product8} width="300" height="300" loading="lazy"
                    alt="Living Room & Bedroom Lights" className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro L putus</a>
                  </h3>
                  <h4>
                    Bonus Bantal 5pcs<br/>Bahan Kain Mulan/Galaxi<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>


                  <div className="card-price">
                    <data className="price" value="45"><b>Rp 1.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="furniture">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product9} width="300" height="300" loading="lazy" alt="Nancy Chair"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro L putus</a>
                  </h3>
                  <h4>
                    Bonus Bantal Besar dan Kecil<br/>Bahan Kain Kagawa<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung

                  </h4>

                  <div className="card-price">
                    <data className="price" value="90"><b>Rp 2.400.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="furniture">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product10} width="300" height="300" loading="lazy" alt="Simple Chair"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa L</a>
                  </h3>
                  <h4>
                    Bonus Bantal 5 pcs<br/>Bahan Kain Foxi<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="40"><b>Rp 2.500.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="decoration">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product11} width="300" height="300" loading="lazy" alt="Smooth Disk"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro</a>
                  </h3>
                  <h4>
                    Bonus bantal 3 pcs<br/>Kain Kagawa<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="46"><b>Rp 1.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="furniture">
              <div className="product-card">

                <a  className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product12} width="300" height="300" loading="lazy" alt="Table Black"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro</a>
                  </h3>
                  <h4>
                    Bonus Bantal 4 pcs<br/>Bahan Kain Kagawa<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="67"><b>Rp 2.600.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="furniture">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product13} width="300" height="300" loading="lazy"
                    alt="Table Wood Pine" className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro</a>
                  </h3>
                  <h4>
                    Bonus Bantal 4 pcs<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="50"><b>Rp 2.000.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="accessory">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product14} width="300" height="300" loading="lazy"
                    alt="Teapot with black tea" className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro</a>
                  </h3>
                  <h4>
                    Bonus Bantal Besar Dan Kecil<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="25"><b>Rp 2.500.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="decoration">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product15} width="300" height="300" loading="lazy"
                    alt="Unique Decoration" className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a  className="card-title">Sofa Retro L Putus</a>
                  </h3>
                  <h4>
                    Bonus Bantal 6 pcs<br/>Bahan Kain Sahrini<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="15"><b>Rp 4.700.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="decoration">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product16} width="300" height="300" loading="lazy"
                    alt="Vase Of Flowers" className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro L</a>
                  </h3>
                  <h4>
                    Bonus Bantal 3 pcs<br/>Bahan Kain Medili<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="77"><b>Rp 2.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="decoration">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product17} width="300" height="300" loading="lazy" alt="Wood Eggs"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro L</a>
                  </h3>
                  <h4>
                    Bonus Bantal 3 pcs<br/>Bahan Kain Foxi<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="19"><b>Rp 2.000.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="decoration">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product18} width="300" height="300" loading="lazy" alt="Wooden Box"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa Retro</a>
                  </h3>
                  <h4>
                    Bonus Bantal 4 pcs<br/>Bahan Kain Bludru Poxi<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="27"><b>Rp 2.800.000</b></data>
                  </div>
                </div>

              </div>
            </li>

            <li className="accessory">
              <div className="product-card">

                <a className="card-banner img-holder has-before" style={{width: "300", height: "300"}}>
                  <img src={product19} width="300" height="300" loading="lazy" alt="Wooden Cups"
                    className="img-cover"/>

                  <ul className="card-action-list">

                  <li>
                      <Link to="https://wa.me/6287770638893?text=test"><button className="card-action-btn" aria-label="add to cart" title="Whatsapp">
                      <IoLogoWhatsapp style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.instagram.com/direct/t/106191201003267/"><button className="card-action-btn" aria-label="add to cart" title="Instagram">
                        <IoLogoInstagram style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                    <li>
                      <Link to="https://www.tokopedia.com/sajayameubel"><button className="card-action-btn" aria-label="add to whishlist" title="Tokopedia">
                        <IoBagHandleOutline style={{marginBottom:"6px"}}/>
                      </button></Link>
                    </li>

                  </ul>
                </a>

                <div className="card-content">
                  <h3 className="h3">
                    <a className="card-title">Sofa L</a>
                    
                  </h3>
                  <h4>
                    Bonus Bantal 5 pcs<br/>Kayu Akasia Bayur<br/>Bisa Pilih Warna Sesuai Keinginan<br/>Free Ongkir Bandar Lampung
                  </h4>

                  <div className="card-price">
                    <data className="price" value="29"><b>Rp 2.000.000</b></data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  
    );
}

export default OurService;