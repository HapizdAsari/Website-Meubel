import React from "react";
import './App.css';
// import './Script';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Testimonial from "./components/Testimonial";
// import Blog from "./components/Blog";
// import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import logo from './logo.svg';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Testimonial/>
    <Product/>
    {/* <Blog/> */}
    {/* <Newsletter/> */}
    <Footer/>
    
    </>
  );
}

export default App;
