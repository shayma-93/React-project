import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Navbar from "../components/Navbar";
import Form from "../components/form";
import Footer from "../components/Footer";

const SignIn = () => {
  return (
    <div className="SignIn">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
};

export default SignIn;
