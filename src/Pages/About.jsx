import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Intro from '../components/Intro'; 
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';


function About() {
    return (
      <div className="About">
        
       <Navbar/>
       <Intro/>
       <FAQ/>
       <Footer/>
      </div>
      
    );
  }
  
  export default About;