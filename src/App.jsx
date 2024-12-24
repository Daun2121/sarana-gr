import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
      </Routes>
      {/* Footer */}
      <Footer />        
    </Router>
  )
}

export default App
