import React from "react";
import logo from "../image/S.A Jaya Meuble1.png"
import shopee from "../image/icon_shopee.png"
import tokopedia from "../image/icon_TOKOPEDIA.png"
import instagram from "../image/icon_instagram.png"
import Whatsapp from "../image/whatsapp.png"
import bca from "../image/BCA.png"
import logoshopee from "../image/logoshopee.png"
import logotokopedia from "../image/logo_tokopedia.png"
import logoqris from "../image/logo_qris.png"

const Footer =()=>{
    return(
      <footer class="footer" id="Contact">
      <div class="container">
  
        <div class="footer-top section">
  
          <div class="footer-brand">
  
            <a href="#" ><img src={logo} style={{width: "120px", height: "60px", marginBottom:"10px"}}></img></a>
  
            <ul>
  
              <li class="footer-list-item">
                <ion-icon name="location-sharp" aria-hidden="true"></ion-icon>
  
                <address class="address">
                  Sukajaya, Kelurahan Karang Raja, Kecamatan Merbau Mataram, Kabupaten Lampung Selatan, Provinsi Lampung
                </address>
              </li>

            </ul>
            </div>

          
          
          <div>
          <ul class="footer-list">
  
            <li>
              <p class="footer-list-title" style={{marginTop:"10px", }}><b>Online Store</b></p>
            </li>
  
            <li>
              <a href="https://shopee.co.id/shop/270510657" class="footer-link" style={{textAlign:"justify", marginBottom:"8px"}}><img src={shopee} style={{float:"left", margin:"0 9px 3px 0", width:"30px", height:"30px"}} />Shopee</a>
            </li>
  
            <li>
              <a href="#" class="footer-link" style={{textAlign:"justify", marginBottom:"8px"}}><img src={tokopedia} style={{float:"left", margin:"0 15px 5px 0", width:"25px", height:"28px"}} />Tokopedia</a>
            </li>
  
            <li>
            <a href="https://www.instagram.com/direct/t/106191201003267/" class="footer-link" style={{textAlign:"justify", marginBottom:"8px"}}><img src={instagram} style={{float:"left", margin:"0 14px 3px 0", width:"27px", height:"27px"}} />Instagram</a>
            </li>
  
            <li>
             <a href="https://wa.me/6281377881381?text=Halo%20ingin%20bertanya%20terkait%20product%20anda" class="footer-link" style={{textAlign:"justify", }}><img src={Whatsapp} style={{float:"left", margin:"0 9px 3px 0", width:"30px", height:"30px"}} />Whatsapp</a>
            </li>
  
          </ul>
          </div>
          
          
          <div>
          <ul class="footer-list">
  
            <li>
              <p class="footer-list-title" style={{marginTop:"10px", }}><b>Pembayaran </b></p>
            </li>

            <li>
            <a class="footer-link" style={{textAlign:"justify", }}><img src={bca} style={{float:"left", margin:"0 9px 15px 0", width:"90px", height:"29px"}} /> </a>
            </li>

            <li>
            <a href="https://shopee.co.id/shop/270510657" class="footer-link" style={{textAlign:"justify", marginBottom:"8px"}}><img src={logoshopee} style={{float:"left", margin:"0 15px 15px 0", width:"90px", height:"30px"}} /></a>
            </li>

            <li>
            <a href="#" class="footer-link" style={{textAlign:"justify", marginBottom:"8px"}}><img src={logotokopedia} style={{float:"left", margin:"0 15px 15px 0", width:"100px", height:"22px"}} /></a>
            </li>
            
            <li>
            <a href="#" class="footer-link" style={{textAlign:"justify", marginBottom:"8px"}}><img src={logoqris} style={{float:"left", margin:"0 15px 15px 0", width:"100px", height:"25px"}} /></a>
            </li>

          </ul>
          </div>
          

          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63543.36772451243!2d105.34933024091198!3d-5.498427387167525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40de365a44e473%3A0x5633f4a76349b6c0!2sDayyan%20Shop%20Kids!5e0!3m2!1sid!2sid!4v1686491252462!5m2!1sid!2sid" 
              width="550" 
              height="300" 
              style={{border:"0" }} 
              allowfullscreen="" 
              loading="lazy" 
               referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            
        </div>
  
  
      </div>
    </footer>
    );
}

export default Footer;