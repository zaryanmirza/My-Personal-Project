import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/page-1" element = {<Page1/>}/>
        <Route path = "/page-2" element = {<Page2/>}/>
        
      </Routes>

      <Footer />
    </>
  );
};

export default App;

// npm i react-router-dom
