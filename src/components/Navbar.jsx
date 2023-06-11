import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/S.A Jaya Meuble1.png'
// import {IoMenu} from "react-icons/io5"
import {IoClose} from "react-icons/io5"



const Navbar = () => {
  return (
    <>
    <header className="header" data-header >
    <div className="container">

      <a href="" className="logo"><img src={logo} style={{width: "100px", height: "50px",  }} /></a>

      <div className="i center">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Testimonial">Testimoni</a></li>
          <li><a href="#Product">Product</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>

        <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
          {/* <IoMenu ></IoMenu> */}
        </button>

      </div>


  <div className="sidebar" data-navbar>

    <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
      <IoClose></IoClose>
    </button>

    <div className="wrapper">


    </div>

    <nav className="navbar">
      <ul className="navbar-list">

        <li className="navbar-item">
          <a href="#home" className="navbar-link" data-nav-link>Home</a>
        </li>

        <li className="navbar-item">
          <a href="#about" className="navbar-link" data-nav-link>About</a>
        </li>

        <li className="navbar-item">
          <a href="#product" className="navbar-link" data-nav-link>Product</a>
        </li>

        <li className="navbar-item">
          <a href="#blog" className="navbar-link" data-nav-link>Blogs</a>
        </li>

      </ul>
    </nav>

    <ul className="contact-list">

      <li>
        <p className="contact-list-title">Contact Us</p>
      </li>

      <li className="contact-item">
        <address className="address">
          69 Halsey St, Ny 10002, New York, United States
        </address>
      </li>

      <li className="contact-item">
        <a href="mailto:support.center@woodex.co" className="contact-link">support.center@woodex.co</a>
      </li>

      <li className="contact-item">
        <Link to="https://wa.me/6287770638893?text=test" className="contact-link"/>
          <button>No wa</button>
      </li>

    </ul>

    <div className="social-wrapper">

      <p className="social-list-title">Follow US On Socials</p>

      <ul className="social-list">

        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-tumblr"></ion-icon>
          </a>
        </li>

      </ul>

    </div>

  </div>

  <div className="overlay" data-overlay data-nav-toggler></div>
  
  </header>
       </>
  );
}

export default Navbar