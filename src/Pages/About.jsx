import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Intro from '../components/Intro'; 
import Footer from '../components/Footer';


function About() {
    return (
      <div className="About">
        
       <Navbar/>
       <Intro/>
       <Footer/>
      </div>
      
    );
  }
  
  export default About;