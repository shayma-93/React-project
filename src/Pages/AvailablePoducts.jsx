import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AvailableProducts = () => {
  return (
    <div className="AvailableProducts ">
      <Navbar />
      <Footer />
    </div>
  );
};

export default AvailableProducts ;
