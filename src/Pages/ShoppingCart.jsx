import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const ShoppingCart = () => {
  return (
 <div className="ShoppingCart">

  <Navbar/>
  <Cart/>   
  <Footer/>
  </div>
  );
};

export default ShoppingCart;
