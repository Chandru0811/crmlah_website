import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import About from "../Components/About";
// import About from "../Components/About";
// import Feature from "../Components/Feature";
// import Contact from "../Components/Contact";

function Admin() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
           <Route path="/about" element={<About />} />
          {/* <Route path="/features" element={<Feature />} /> */}
          <Route path="/home" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Admin;
