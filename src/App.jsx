import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Home />
      <Products />
      <AboutUs />
      <ContactUs />
      
      {/* Footer */}
      <Footer />        
    </>
  )
}

export default App
