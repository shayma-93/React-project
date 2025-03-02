import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="ContactUs ">
      <Navbar />
      <Footer />
    </div>
  );
};

export default ContactUs;
