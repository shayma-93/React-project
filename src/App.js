import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import About from './Pages/About';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import SingIn from './Pages/SignIn';
import AvailableProducts from './Pages/AvailablePoducts';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AvailableProducts />} />
$          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/profile" element={<SingIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
