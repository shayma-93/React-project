import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Make sure to import everything you need
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



function Home() {
    return (
      <div className="Home">
       
       <Navbar/>
       <Hero/>
       <Features/>
       <Products/>
       <Reviews/>
       <Contact/>
       <Footer/>
      
           
      </div>
      
    );
  }
  
  export default Home;