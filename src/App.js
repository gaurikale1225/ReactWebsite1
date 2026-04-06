import React from "react";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Product from "./Pages/Product";

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
         <Route path="/services" element={<Services></Services>}></Route>
         <Route path="/contact" element={<Contact></Contact>}></Route>
         <Route path="/gallery" element={<Gallery></Gallery>}></Route>
         <Route path="/products" element={<Product></Product>}></Route>
    </Routes>
    <Footer></Footer>
   </Router>
   </>
  );
}

export default App;
